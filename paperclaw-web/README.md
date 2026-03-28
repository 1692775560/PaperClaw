# PaperClaw Web UI

PaperClaw的现代化Web界面，基于React + Flask构建。

## 功能特性

- 🚀 **运行控制** - 通过Web界面启动PaperClaw研究流水线
- 📊 **实时进度** - 可视化显示23个阶段的执行进度
- 📄 **结果查看** - 浏览和下载生成的论文、代码等产物
- 🎨 **现代UI** - 响应式设计，支持深色主题

## 快速开始

### 1. 安装依赖

```bash
# 后端依赖
cd backend
pip install -r requirements.txt

# 前端依赖
cd ../frontend
npm install
```

### 2. 启动服务

**方式一：分别启动**

```bash
# 终端1 - 启动后端API
cd backend
python app.py

# 终端2 - 启动前端开发服务器
cd frontend
npm run dev
```

**方式二：同时启动**

```bash
# 在paperclaw-web目录
npm install
npm run dev
```

### 3. 访问界面

打开浏览器访问: http://localhost:5173

## 使用说明

1. **启动新研究**
   - 输入研究主题
   - 选择LLM提供商（DeepSeek/OpenAI/Anthropic）
   - 输入对应的API Key
   - 点击"开始研究"

2. **查看进度**
   - 实时显示当前阶段和进度百分比
   - 23个阶段的可视化状态（已完成/进行中/待执行）

3. **查看结果**
   - 切换到"结果查看"标签页
   - 选择已完成的运行
   - 浏览生成的文件列表
   - 预览论文内容
   - 下载产出文件

## 技术栈

### 前端
- **React 19** - UI框架
- **TypeScript** - 类型安全
- **Vite** - 构建工具
- **CSS Variables** - 主题系统

### 后端
- **Flask** - Web框架
- **Flask-CORS** - 跨域支持
- **subprocess** - PaperClaw CLI集成

## 项目结构

```
paperclaw-web/
├── frontend/              # React前端
│   ├── src/
│   │   ├── components/   # UI组件
│   │   │   ├── RunControl.tsx      # 运行控制面板
│   │   │   ├── ProgressView.tsx    # 进度显示
│   │   │   ├── Dashboard.tsx       # 运行历史
│   │   │   └── ResultsView.tsx     # 结果查看
│   │   ├── App.tsx       # 主应用
│   │   └── App.css       # 全局样式
│   └── package.json
├── backend/              # Flask后端
│   ├── app.py           # API服务器
│   └── requirements.txt
└── README.md
```

## API接口

### GET /api/status
获取当前运行状态和历史记录

### POST /api/run
启动新的研究流水线
```json
{
  "topic": "研究主题",
  "api_key": "sk-...",
  "provider": "deepseek"
}
```

### GET /api/results/:run_id
获取指定运行的结果文件列表

### GET /api/download/:run_id/:filename
下载指定文件

## 开发说明

- 前端开发服务器运行在 `http://localhost:5173`
- 后端API服务器运行在 `http://localhost:5000`
- 前端通过CORS与后端通信

## 注意事项

- 确保PaperClaw CLI已正确安装（`pip install -e .`）
- API Key不会被保存，每次运行需要重新输入
- 运行历史仅保存在内存中，重启后端会丢失

## 未来计划

- [ ] 持久化运行历史（数据库）
- [ ] WebSocket实时日志推送
- [ ] 多用户支持和认证
- [ ] 配置文件可视化编辑
- [ ] 实验结果可视化图表
- [ ] 移动端适配

## 许可证

MIT License
