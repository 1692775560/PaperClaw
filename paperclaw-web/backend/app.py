#!/usr/bin/env python3
"""
PaperClaw Web Backend API
提供REST API接口用于前端控制PaperClaw流水线
"""

from flask import Flask, request, jsonify, send_file
from flask_cors import CORS
import subprocess
import json
import os
import threading
from pathlib import Path
from datetime import datetime

app = Flask(__name__)
CORS(app)

# 全局状态
current_run = None
recent_runs = []
ARTIFACTS_DIR = Path(__file__).parent.parent.parent / "artifacts"

def run_pipeline(topic: str, api_key: str, provider: str):
    """在后台运行PaperClaw流水线"""
    global current_run
    
    run_id = f"pc-{datetime.now().strftime('%Y%m%d-%H%M%S')}-{hash(topic) % 10000:04x}"
    
    current_run = {
        "run_id": run_id,
        "topic": topic,
        "status": "running",
        "current_stage": 1,
        "total_stages": 23,
        "stage_name": "TOPIC_INIT",
        "progress": 4
    }
    
    # 设置环境变量
    env = os.environ.copy()
    if provider == "deepseek":
        env["DEEPSEEK_API_KEY"] = api_key
    elif provider == "openai":
        env["OPENAI_API_KEY"] = api_key
    elif provider == "anthropic":
        env["ANTHROPIC_API_KEY"] = api_key
    
    # 运行PaperClaw
    cmd = [
        ".venv/bin/paperclaw",
        "run",
        "--config", "config.paperclaw.yaml",
        "--topic", topic,
        "--auto-approve",
        "--skip-noncritical-stage"
    ]
    
    try:
        process = subprocess.Popen(
            cmd,
            cwd=str(Path(__file__).parent.parent.parent),
            env=env,
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,
            text=True,
            bufsize=1
        )
        
        # 监控进程输出
        for line in process.stdout:
            line = line.strip()
            print(f"[PaperClaw] {line}")  # 调试输出
            
            # 解析阶段进度 - 格式: [run_id] Stage XX/23 STAGE_NAME — running...
            if "Stage" in line and "/" in line:
                try:
                    # 提取阶段信息
                    if "Stage" in line:
                        stage_part = line.split("Stage")[1].strip()
                        stage_info = stage_part.split()[0]  # XX/23
                        
                        if "/" in stage_info:
                            current, total = map(int, stage_info.split("/"))
                            current_run["current_stage"] = current
                            current_run["total_stages"] = total
                            current_run["progress"] = (current / total) * 100
                            
                            # 提取阶段名称
                            remaining = stage_part.split(stage_info)[1].strip()
                            stage_name = remaining.split()[0] if remaining else "UNKNOWN"
                            current_run["stage_name"] = stage_name
                            
                            print(f"[Status Update] Stage {current}/{total} - {stage_name} ({current_run['progress']:.1f}%)")
                except Exception as e:
                    print(f"[Parse Error] {e}: {line}")
        
        process.wait()
        
        if process.returncode == 0:
            current_run["status"] = "completed"
            current_run["progress"] = 100
            print(f"[Completed] Run {run_id}")
        else:
            current_run["status"] = "failed"
            print(f"[Failed] Run {run_id} with code {process.returncode}")
        
        recent_runs.insert(0, current_run.copy())
        if len(recent_runs) > 10:
            recent_runs.pop()
            
    except Exception as e:
        print(f"[Pipeline Error] {e}")
        current_run["status"] = "failed"
        recent_runs.insert(0, current_run.copy())

@app.route('/api/status', methods=['GET'])
def get_status():
    """获取当前运行状态"""
    return jsonify({
        "current_run": current_run,
        "recent_runs": recent_runs
    })

@app.route('/api/run', methods=['POST'])
def start_run():
    """启动新的研究流水线"""
    data = request.json
    topic = data.get('topic')
    api_key = data.get('api_key')
    provider = data.get('provider', 'deepseek')
    
    if not topic or not api_key:
        return jsonify({"error": "Missing topic or api_key"}), 400
    
    # 在后台线程运行
    thread = threading.Thread(
        target=run_pipeline,
        args=(topic, api_key, provider)
    )
    thread.daemon = True
    thread.start()
    
    return jsonify({"run": current_run})

@app.route('/api/results/<run_id>', methods=['GET'])
def get_results(run_id):
    """获取指定运行的结果"""
    run_dir = ARTIFACTS_DIR / run_id / "deliverables"
    
    if not run_dir.exists():
        return jsonify({"error": "Run not found"}), 404
    
    files = []
    for file in run_dir.iterdir():
        if file.is_file():
            files.append({
                "name": file.name,
                "size": file.stat().st_size
            })
    
    # 读取论文预览
    paper_preview = None
    paper_file = run_dir / "paper_draft.md"
    if paper_file.exists():
        with open(paper_file, 'r', encoding='utf-8') as f:
            paper_preview = f.read()[:2000]  # 前2000字符
    
    return jsonify({
        "files": files,
        "paper_preview": paper_preview
    })

@app.route('/api/download/<run_id>/<filename>', methods=['GET'])
def download_file(run_id, filename):
    """下载指定文件"""
    file_path = ARTIFACTS_DIR / run_id / "deliverables" / filename
    
    if not file_path.exists():
        return jsonify({"error": "File not found"}), 404
    
    return send_file(file_path, as_attachment=True)

if __name__ == '__main__':
    print("🦞 PaperClaw Web Backend starting...")
    print("📡 API Server: http://localhost:5001")
    app.run(host='0.0.0.0', port=5001, debug=True)
