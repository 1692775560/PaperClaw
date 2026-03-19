# PaperClaw 使用指南

## 📖 目录

1. [系统概述](#系统概述)
2. [核心架构](#核心架构)
3. [安装部署](#安装部署)
4. [快速开始](#快速开始)
5. [配置详解](#配置详解)
6. [使用场景](#使用场景)
7. [高级功能](#高级功能)
8. [常见问题](#常见问题)

---

## 系统概述

**PaperClaw** 是一套面向学术科研工作者的高能动性 AI 自动化辅助系统。针对传统科研流程中的系统性痛点，本系统以大语言模型（LLM）为决策核心，构建了**大脑 + 手脚 + 记忆**三层协同架构，实现科研全流程端到端的智能自动化闭环。

### 解决的核心痛点

| 痛点 | PaperClaw 解决方案 |
|------|-------------------|
| 📚 文献检索耗时 | 多源自动检索（OpenAlex + Semantic Scholar + arXiv），智能筛选与知识提取 |
| 🔄 数据处理重复 | 硬件感知的自动化实验设计与执行，支持沙盒/Docker/远程GPU |
| ✍️ 论文写作周期长 | AI辅助写作（5000-6500词），多轮同行评审，自动LaTeX转换 |
| 📝 基金申请繁琐 | 结构化知识管理，跨会话复用，自动生成研究大纲 |
| 🔒 数据安全风险 | 支持完全本地私有化部署，敏感数据不上传云端 |

### 技术创新点

1. **三层记忆架构** — 短期(上下文) + 中期(知识库) + 长期(自我进化)
2. **动态多模型路由** — 根据任务复杂度自动选择最优LLM
3. **开放Skill生态** — ClawHub技能市场5700+科研技能
4. **自我进化系统** — 从失败中提取Lessons，30天时间衰减

---

## 核心架构

### 🧠 大脑层 — LLM决策引擎

**职责**: 智能决策与任务编排

**支持的LLM提供商**:
- OpenAI (GPT-4o, GPT-4o-mini)
- DeepSeek (deepseek-chat, deepseek-coder)
- Anthropic (Claude 3.5 Sonnet)
- OpenRouter (200+ 模型)
- 本地部署模型 (通过OpenAI兼容API)

**核心能力**:
- 自然语言驱动，零编程基础
- 上下文感知的智能提示词管理
- 多Agent协同决策（假设生成、结果分析、同行评审）
- 动态模型切换（复杂任务自动路由到OpenCode）

### 🦾 手脚层 — Skill插件执行层

**职责**: 科研任务自动化执行

**ClawHub技能市场** (5700+ Skill):

```
文献综述 (800+ Skills)
├── 多源检索 (OpenAlex, Semantic Scholar, arXiv)
├── 智能筛选 (相关性评分, 质量阈值)
└── 知识提取 (方法, 数据集, 结果)

论文写作 (1200+ Skills)
├── 大纲生成 (结构化章节规划)
├── 分段撰写 (Introduction, Method, Results, etc.)
├── 格式转换 (Markdown → LaTeX)
└── 引用管理 (4层验证, 反幻觉)

实验设计 (1500+ Skills)
├── 假设生成 (多Agent辩论)
├── 方案设计 (硬件感知)
├── 代码生成 (GPU/CPU自适应)
└── 自我修复 (AST验证, 迭代优化)

数据分析 (900+ Skills)
├── 统计分析 (t-test, ANOVA, 回归)
├── 结果可视化 (Matplotlib, Seaborn, TikZ)
└── 报告生成 (结构化JSON输出)

... (更多领域)
```

**执行模式**:

| 模式 | 适用场景 | 优势 | 劣势 |
|------|---------|------|------|
| **Sandbox** | 本地快速实验 | 启动快, 无需Docker | 隔离性较弱 |
| **Docker** | 生产级实验 | 完全隔离, GPU直通 | 需要Docker环境 |
| **SSH Remote** | GPU集群 | 利用远程算力 | 需要SSH配置 |
| **Colab Drive** | 无SSH的Colab | 无需端口转发 | 依赖Google Drive |

### 🧬 记忆层 — Memory知识管理

**职责**: 持续学习与知识沉淀

**三层记忆机制**:

```
┌─────────────────────────────────────────┐
│  短期记忆 (Current Run Context)         │
│  - 实验结果缓存                          │
│  - 中间产物版本控制                      │
│  - 实时决策日志                          │
│  生命周期: 单次运行                      │
└─────────────────────────────────────────┘
              ↓ 结构化存储
┌─────────────────────────────────────────┐
│  中期记忆 (Knowledge Base)              │
│  - 6大类别 (questions, literature, etc.)│
│  - Markdown/Obsidian双后端              │
│  - 跨会话知识复用                        │
│  生命周期: 项目级别                      │
└─────────────────────────────────────────┘
              ↓ 提取Lessons
┌─────────────────────────────────────────┐
│  长期记忆 (Evolution Store)             │
│  - 从失败中学习                          │
│  - 30天时间衰减                          │
│  - 自动生成可复用Skills                  │
│  生命周期: 永久 (衰减)                   │
└─────────────────────────────────────────┘
```

**知识库分类**:

```bash
docs/kb/
├── questions/      # 研究问题与假设
│   └── hypothesis-gen-pc-20260319-abc123.md
├── literature/     # 文献知识卡片
│   └── paper-summary-arxiv-2401.12345.md
├── experiments/    # 实验设计与结果
│   └── exp-run-12-pc-20260319-abc123.md
├── findings/       # 研究发现
│   └── finding-metric-improvement-pc-20260319.md
├── decisions/      # 决策记录与理由
│   └── decision-pivot-stage15-pc-20260319.md
└── reviews/        # 同行评审意见
    └── review-round1-pc-20260319-abc123.md
```

---

## 安装部署

### 系统要求

**最低配置**:
- Python 3.11+
- 8GB RAM
- 20GB 磁盘空间

**推荐配置**:
- Python 3.11+
- 16GB RAM
- NVIDIA GPU (CUDA 11.8+) 或 Apple Silicon (MPS)
- 50GB 磁盘空间
- Docker 24.0+ (可选)

### 安装步骤

```bash
# 1. 克隆仓库
git clone https://github.com/yourusername/PaperClaw.git
cd PaperClaw

# 2. 创建虚拟环境
python3 -m venv .venv
source .venv/bin/activate  # Linux/Mac
# .venv\Scripts\activate   # Windows

# 3. 安装依赖
pip install -e .

# 4. 环境设置（交互式）
paperclaw setup

# 5. 创建配置文件
paperclaw init

# 6. 配置API密钥
export OPENAI_API_KEY="sk-..."  # 或其他LLM提供商

# 7. 健康检查
paperclaw doctor
```

### Docker镜像构建（可选）

```bash
# 构建实验执行镜像
cd researchclaw/docker
docker build -t paperclaw/experiment:latest .

# 验证镜像
docker run --rm paperclaw/experiment:latest python --version
```

---

## 快速开始

### 场景1: 文献综述

```bash
paperclaw run \
  --topic "Transformer模型在时间序列预测中的应用" \
  --config config.paperclaw.yaml \
  --auto-approve
```

**输出**:
- `artifacts/pc-20260319-143022-abc123/`
  - `literature/` — 50+篇相关文献
  - `knowledge_cards/` — 提取的知识卡片
  - `synthesis.md` — 研究空白分析
  - `outline.md` — 综述大纲

### 场景2: 实验设计与执行

```bash
paperclaw run \
  --topic "基于注意力机制的异常检测算法" \
  --config config.paperclaw.yaml \
  --auto-approve
```

**输出**:
- `artifacts/pc-20260319-150033-def456/`
  - `code/` — 可运行的Python代码
  - `experiment_runs/` — 执行结果与日志
  - `charts/` — 可视化图表
  - `analysis.md` — 统计分析报告

### 场景3: 完整论文生成

```bash
paperclaw run \
  --topic "多模态学习在医学影像诊断中的应用" \
  --config config.paperclaw.yaml \
  --auto-approve
```

**输出**:
- `artifacts/pc-20260319-163045-ghi789/deliverables/`
  - `paper.tex` — NeurIPS/ICML/ICLR LaTeX
  - `references.bib` — 真实引用（4层验证）
  - `figures/` — 实验图表
  - `code/` — 实验代码
  - `reviews.md` — 同行评审报告
  - `verification_report.json` — 引用验证报告

---

## 配置详解

### 基础配置

```yaml
# config.paperclaw.yaml

project:
  name: "my-research"
  mode: "full-auto"  # docs-first | semi-auto | full-auto

research:
  topic: "你的研究主题"
  domains: ["machine-learning", "nlp"]
  daily_paper_count: 10
  quality_threshold: 4.0

runtime:
  timezone: "Asia/Shanghai"
  max_parallel_tasks: 3
  approval_timeout_hours: 12
  retry_limit: 2
```

### LLM配置（大脑层）

```yaml
llm:
  provider: "openai-compatible"
  base_url: "https://api.openai.com/v1"
  api_key_env: "OPENAI_API_KEY"
  primary_model: "gpt-4o"
  fallback_models: ["gpt-4o-mini"]
```

**多提供商示例**:

```yaml
# DeepSeek
llm:
  provider: "deepseek"
  base_url: "https://api.deepseek.com/v1"
  api_key_env: "DEEPSEEK_API_KEY"
  primary_model: "deepseek-chat"
  fallback_models: ["deepseek-coder"]

# OpenRouter (200+ 模型)
llm:
  provider: "openrouter"
  base_url: "https://openrouter.ai/api/v1"
  api_key_env: "OPENROUTER_API_KEY"
  primary_model: "anthropic/claude-3.5-sonnet"
  fallback_models: ["openai/gpt-4o"]
```

### 实验配置（手脚层）

```yaml
experiment:
  mode: "sandbox"  # sandbox | docker | ssh_remote
  time_budget_sec: 300
  max_iterations: 10
  
  # Sandbox配置
  sandbox:
    python_path: ".venv/bin/python3"
    gpu_required: false
    max_memory_mb: 4096
  
  # Docker配置
  docker:
    image: "paperclaw/experiment:latest"
    gpu_enabled: true
    memory_limit_mb: 8192
    network_policy: "setup_only"
  
  # OpenCode Beast Mode
  opencode:
    enabled: true
    auto: true
    complexity_threshold: 0.2
```

### 记忆配置（记忆层）

```yaml
# MetaClaw集成
metaclaw_bridge:
  enabled: true
  skills_dir: "~/.metaclaw/skills"
  lesson_to_skill:
    enabled: true
    min_severity: "warning"
    max_skills_per_run: 3

# 知识库
knowledge_base:
  backend: "markdown"  # markdown | obsidian
  root: "docs/kb"
```

---

## 使用场景

### 场景A: 硕士/博士论文写作

**需求**: 从研究想法到完整论文

```bash
# 1. 初始化项目
paperclaw init --force
# 编辑 config.paperclaw.yaml，设置研究主题

# 2. 运行完整流程
paperclaw run --auto-approve

# 3. 查看输出
cd artifacts/pc-YYYYMMDD-HHMMSS-*/deliverables/
ls -lh
# paper.tex, references.bib, figures/, code/
```

**时间估算**: 2-4小时（取决于LLM速度和实验复杂度）

### 场景B: 会议论文快速迭代

**需求**: 已有实验结果，需要快速成文

```bash
# 1. 从论文大纲阶段开始
paperclaw run \
  --from-stage PAPER_OUTLINE \
  --topic "你的研究主题" \
  --auto-approve

# 2. 如果需要修改，从特定阶段重新运行
paperclaw run \
  --from-stage PAPER_DRAFT \
  --resume
```

**时间估算**: 30-60分钟

### 场景C: 基金申请书准备

**需求**: 文献综述 + 研究方案

```bash
# 1. 只运行文献和假设生成阶段
paperclaw run \
  --topic "你的研究方向" \
  --config config.paperclaw.yaml \
  --auto-approve

# 2. 在阶段9（实验设计）手动审批
# 系统会暂停等待，你可以查看 docs/kb/ 中的知识卡片

# 3. 提取知识库内容用于申请书
cat docs/kb/questions/*.md > research_questions.txt
cat docs/kb/literature/*.md > literature_review.txt
```

### 场景D: 实验自动化

**需求**: 批量运行实验，自动分析结果

```bash
# 使用SSH远程模式连接GPU服务器
# 编辑 config.paperclaw.yaml:
experiment:
  mode: "ssh_remote"
  ssh_remote:
    host: "gpu-server.lab.edu"
    user: "researcher"
    gpu_ids: [0, 1]
    remote_python: "python3"

# 运行
paperclaw run --topic "你的实验" --auto-approve
```

---

## 高级功能

### 1. MetaClaw跨运行学习

**启用方法**:

```yaml
# config.paperclaw.yaml
metaclaw_bridge:
  enabled: true
  skills_dir: "~/.metaclaw/skills"
  lesson_to_skill:
    enabled: true
    min_severity: "warning"
    max_skills_per_run: 3
```

**工作原理**:

```
运行1: 实验失败 → 提取Lesson
  "Stage 12 failed: CUDA out of memory"
  
MetaClaw: Lesson → Skill转换
  创建 ~/.metaclaw/skills/arc-cuda-oom-handling/SKILL.md
  
运行2: 自动注入Skill
  LLM提示词包含: "避免CUDA OOM，使用梯度累积"
  
结果: 运行2成功，无需人工干预
```

**查看学到的技能**:

```bash
ls ~/.metaclaw/skills/arc-*
cat ~/.metaclaw/skills/arc-experiment-timeout/SKILL.md
```

### 2. 自定义提示词

```bash
# 1. 复制默认提示词
cp prompts.default.yaml my_prompts.yaml

# 2. 编辑特定阶段的提示词
vim my_prompts.yaml
# 修改 hypothesis_gen, paper_draft 等

# 3. 在配置中指定
# config.paperclaw.yaml
prompts:
  custom_file: "my_prompts.yaml"
```

### 3. 多会议模板切换

```yaml
export:
  target_conference: "neurips_2025"  # neurips_2025 | iclr_2026 | icml_2026
```

不同模板的差异:
- **NeurIPS**: 9页主文 + 无限附录
- **ICLR**: 8页主文 + 无限附录
- **ICML**: 8页主文 + 无限附录

### 4. 断点续传

```bash
# 如果运行中断（Ctrl+C 或崩溃）
paperclaw run --resume

# 系统会从 checkpoint.json 恢复
# 已完成的阶段不会重新执行
```

---

## 常见问题

### Q1: 如何减少LLM API费用？

**A**: 
1. 使用更便宜的fallback模型
2. 启用MetaClaw减少重试次数
3. 使用本地部署的开源模型（如Llama 3）

```yaml
llm:
  primary_model: "gpt-4o-mini"  # 更便宜
  fallback_models: ["gpt-3.5-turbo"]
```

### Q2: 实验代码生成质量不高怎么办？

**A**:
1. 启用OpenCode Beast Mode
2. 降低复杂度阈值，让更多实验路由到OpenCode

```yaml
experiment:
  opencode:
    enabled: true
    auto: true
    complexity_threshold: 0.1  # 降低阈值
```

### Q3: 如何确保引用的真实性？

**A**:
系统内置4层验证机制:
1. arXiv ID检查
2. CrossRef/DataCite DOI验证
3. Semantic Scholar标题匹配
4. LLM相关性评分

查看验证报告:
```bash
cat artifacts/pc-*/deliverables/verification_report.json
```

### Q4: 支持中文论文吗？

**A**:
支持，但需要配置中文友好的LLM:

```yaml
llm:
  primary_model: "deepseek-chat"  # 中文能力强
  # 或使用 Qwen, GLM 等国产模型
```

### Q5: 如何本地私有化部署？

**A**:
1. 使用本地LLM（Ollama, vLLM等）
2. 禁用所有外部API调用

```yaml
llm:
  base_url: "http://localhost:11434/v1"  # Ollama
  primary_model: "llama3:70b"

experiment:
  docker:
    network_policy: "none"  # 禁用网络
```

### Q6: 如何贡献自定义Skill？

**A**:
1. Fork仓库
2. 在 `researchclaw/agents/` 下创建新Agent
3. 实现 `execute()` 方法
4. 提交Pull Request

参考: `researchclaw/agents/figure_agent/` 示例

---

## 技术支持

- 📧 Email: support@paperclaw.ai
- 💬 Discord: https://discord.gg/paperclaw
- 📖 文档: https://docs.paperclaw.ai
- 🐛 Bug报告: https://github.com/yourusername/PaperClaw/issues

---

## 更新日志

### v1.0.0 (2026-03-19)
- 🎉 首次发布
- ✨ 三层协同架构（大脑+手脚+记忆）
- 🚀 23阶段智能流水线
- 🧠 MetaClaw跨运行学习集成
- 🦾 ClawHub技能市场（5700+ Skills）
- 🔒 本地私有化部署支持

---

<p align="center">
  <sub>用 🦞 和 ❤️ 构建 | PaperClaw Team © 2026</sub>
</p>
