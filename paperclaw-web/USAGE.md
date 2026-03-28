# PaperClaw Web UI - Usage Guide

## 已完成的优化

### 1. 配色方案
- ✅ 更换为专业深色主题（黑灰绿配色）
- ✅ 移除蓝紫色渐变
- ✅ 使用 `#00d4aa` 主色调（青绿色）

### 2. 界面风格
- ✅ 移除所有 emoji
- ✅ 使用纯文字和专业图标
- ✅ 所有文本改为英文

### 3. 功能改进
- ✅ **API Key 自动保存** - 使用 localStorage 持久化存储
- ✅ **Provider 自动保存** - 切换 LLM 提供商后自动记住
- ✅ **实时状态更新** - 每1秒轮询后端状态
- ✅ **改进的日志解析** - 后端准确解析 PaperClaw 输出

## 使用方法

### 启动服务

```bash
# 后端（终端1）
cd paperclaw-web/backend
python app.py

# 前端（终端2）
cd paperclaw-web/frontend
npm run dev
```

### 访问界面

打开浏览器访问: **http://localhost:5173**

### 开始研究

1. **输入研究主题**
   - 例如: "LLM applications in code generation"

2. **选择 LLM 提供商**
   - DeepSeek（推荐）
   - OpenAI
   - Anthropic

3. **输入 API Key**
   - 输入后会自动保存到浏览器 localStorage
   - 下次访问无需重新输入

4. **点击 Start Research**
   - 系统会在后台启动 PaperClaw 流水线
   - 实时显示23个阶段的进度

### 查看进度

- **进度条** - 显示整体完成百分比
- **当前阶段** - 显示正在执行的阶段（如 Stage 5/23 - LITERATURE_SCREEN）
- **阶段网格** - 可视化所有23个阶段的状态
  - 绿色边框 = 已完成
  - 青绿色边框 + 发光 = 进行中
  - 灰色半透明 = 待执行

### 查看结果

1. 切换到 **Results** 标签页
2. 从左侧列表选择已完成的运行
3. 查看生成的文件列表
4. 点击 Download 下载文件
5. 预览论文内容

## 状态更新机制

### 前端
- 每 **1秒** 轮询 `/api/status` 接口
- 自动更新当前运行状态
- 显示最近10次运行记录

### 后端
- 实时解析 PaperClaw CLI 输出
- 提取阶段信息: `Stage XX/23 STAGE_NAME`
- 计算进度百分比: `(current / 23) * 100`
- 打印调试日志到控制台

## 调试

### 查看后端日志

后端终端会显示：
```
[PaperClaw] Stage 01/23 TOPIC_INIT — running...
[Status Update] Stage 1/23 - TOPIC_INIT (4.3%)
[PaperClaw] Stage 02/23 PROBLEM_DECOMPOSE — running...
[Status Update] Stage 2/23 - PROBLEM_DECOMPOSE (8.7%)
```

### 查看前端日志

浏览器控制台（F12）会显示：
```
Failed to fetch status: ...  (如果后端未启动)
```

## 常见问题

### Q: API Key 丢失了？
A: API Key 保存在浏览器 localStorage 中，除非清除浏览器数据，否则会一直保留。

### Q: 状态不更新？
A: 
1. 检查后端是否正常运行（http://localhost:5001/api/status）
2. 查看后端终端是否有 `[Status Update]` 日志
3. 检查浏览器控制台是否有错误

### Q: 无法启动研究？
A:
1. 确认后端服务运行在 5001 端口
2. 确认 PaperClaw CLI 已安装（`.venv/bin/paperclaw`）
3. 确认 API Key 正确

## 技术细节

### 配色变量
```css
--primary: #00d4aa      /* 主色调 - 青绿色 */
--success: #00d084      /* 成功状态 */
--error: #ff4757        /* 错误状态 */
--bg: #0d1117           /* 背景色 */
--surface: #161b22      /* 卡片背景 */
--text: #e6edf3         /* 文字颜色 */
```

### API 端点
- `GET /api/status` - 获取当前状态
- `POST /api/run` - 启动新研究
- `GET /api/results/:run_id` - 获取结果
- `GET /api/download/:run_id/:filename` - 下载文件

### 数据持久化
- **localStorage** - API Key, Provider
- **内存** - 运行状态（重启后端会丢失）
- **文件系统** - 研究产物（artifacts 目录）
