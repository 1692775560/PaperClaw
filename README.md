<p align="center">
  <img src="image/logo.png" width="700" alt="PaperClaw Logo">
</p>

<h2 align="center"><b>PaperClaw — 面向学术科研工作者的高能动性AI自动化辅助系统</b></h2>

<p align="center">
  <b><i><font size="5">大脑(LLM决策引擎) + 手脚(Skill插件执行层) + 记忆(Memory知识管理) 三层协同架构</font></i></b>
</p>

<p align="center">
  <b><i><font size="4">自然语言驱动 · 科研全流程自动化 · ClawHub技能市场5700+ Skills</font></i></b>
</p>

<p align="center">
  <img src="image/framework_v2.png" width="100%" alt="PaperClaw Framework">
</p>


<p align="center">
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="MIT License"></a>
  <a href="https://python.org"><img src="https://img.shields.io/badge/Python-3.11%2B-3776AB?logo=python&logoColor=white" alt="Python 3.11+"></a>
  <a href="https://github.com/1692775560/PaperClaw"><img src="https://img.shields.io/badge/GitHub-PaperClaw-181717?logo=github" alt="GitHub"></a>
  <a href="#"><img src="https://img.shields.io/badge/Version-1.0.0-blue" alt="Version 1.0.0"></a>
  <a href="#"><img src="https://img.shields.io/badge/ClawHub-5700%2B%20Skills-orange" alt="ClawHub Skills"></a>
</p>

<p align="center">
  <a href="PAPERCLAW_GUIDE_CN.md">📖 中文使用指南</a> ·
  <a href="README_PAPERCLAW.md">📄 English README</a> ·
  <a href="MIGRATION_COMPLETE.md">� 迁移报告</a>
</p>

---

## 🔥 最新动态

- **[2026-03-19]** 🎉 **PaperClaw v1.0.0 正式发布！** — 基于AutoResearchClaw重构，全新品牌定位：面向学术科研工作者的高能动性AI自动化辅助系统。三层协同架构（大脑+手脚+记忆），ClawHub技能市场5700+ Skills，完整中文文档支持。
- **[2026-03-19]** 📚 **完整中文文档上线** — 发布15KB中文使用指南，涵盖安装部署、配置详解、使用场景、高级功能、常见问题等。
- **[2026-03-19]** 🧠 **三层记忆架构** — 短期记忆（上下文）+ 中期记忆（知识库）+ 长期记忆（自我进化），AI从工具演进为具备持续学习能力的数字科研伙伴。
- **[2026-03-19]** 🌐 **本地私有化部署** — 支持完全离线运行，确保未发表数据与敏感成果的合规安全。

---

## ⚡ 一行命令，开启科研自动化

```bash
pip install -e . && paperclaw setup && paperclaw init && paperclaw run --topic "你的研究想法" --auto-approve
```

**兼容旧命令**: `researchclaw` 命令仍然可用，完全向后兼容。

---

## 🎯 系统定位

**PaperClaw** 是一套面向学术科研工作者的高能动性 AI 自动化辅助系统。

### 解决的核心痛点

| 痛点 | PaperClaw 解决方案 |
|------|-------------------|
| 📚 **文献检索耗时** | 多源自动检索（OpenAlex + Semantic Scholar + arXiv），智能筛选与知识提取 |
| 🔄 **数据处理重复** | 硬件感知的自动化实验设计与执行，支持沙盒/Docker/远程GPU |
| ✍️ **论文写作周期长** | AI辅助写作（5000-6500词），多轮同行评审，自动LaTeX转换 |
| 📝 **基金申请繁琐** | 结构化知识管理，跨会话复用，自动生成研究大纲 |
| 🔒 **数据安全风险** | 支持完全本地私有化部署，敏感数据不上传云端 |

### 一句话介绍

**输入研究想法 → 输出完整论文**，包含真实文献引用（4层验证）、硬件感知实验（GPU/CPU自适应）、统计分析、多Agent同行评审、会议级LaTeX（NeurIPS/ICML/ICLR）。零人工干预，零复制粘贴，零幻觉引用。

### 输出产物

<table>
<tr><td>📄</td><td><code>paper_draft.md</code></td><td>完整学术论文（引言、相关工作、方法、实验、结果、结论）</td></tr>
<tr><td>📐</td><td><code>paper.tex</code></td><td>会议级LaTeX（NeurIPS/ICLR/ICML模板）</td></tr>
<tr><td>📚</td><td><code>references.bib</code></td><td>真实BibTeX引用（OpenAlex + Semantic Scholar + arXiv，自动匹配内联引用）</td></tr>
<tr><td>🔍</td><td><code>verification_report.json</code></td><td>4层引用完整性验证（arXiv、CrossRef、DataCite、LLM相关性）</td></tr>
<tr><td>🧪</td><td><code>experiment_runs/</code></td><td>生成的代码 + 沙盒结果 + 结构化JSON指标</td></tr>
<tr><td>📊</td><td><code>charts/</code></td><td>自动生成的对比图表（误差条、置信区间）</td></tr>
<tr><td>📝</td><td><code>reviews.md</code></td><td>多Agent同行评审（方法论-证据一致性检查）</td></tr>
<tr><td>🧬</td><td><code>evolution/</code></td><td>从每次运行中提取的自学习经验</td></tr>
<tr><td>📦</td><td><code>deliverables/</code></td><td>所有最终输出（可直接上传Overleaf编译）</td></tr>
</table>

**端到端自动化**：实验失败时自我修复，假设不成立时自动调整，虚假引用自动剔除。

---

## 🚀 快速开始 | Quick Start

```bash
# 1. 克隆并安装 | Clone & Install
git clone https://github.com/1692775560/PaperClaw.git
cd PaperClaw
python3 -m venv .venv && source .venv/bin/activate
pip install -e .

# 2. 环境设置 | Setup (交互式 — 安装OpenCode、检查Docker/LaTeX)
paperclaw setup

# 3. 配置 | Configure
paperclaw init          # 交互式：选择LLM提供商，创建config.paperclaw.yaml
# 或手动：cp config.paperclaw.example.yaml config.paperclaw.yaml

# 4. 运行 | Run
export OPENAI_API_KEY="sk-..."
paperclaw run --config config.paperclaw.yaml --topic "你的研究想法" --auto-approve
```

**输出目录** | **Output** → `artifacts/pc-YYYYMMDD-HHMMSS-<hash>/deliverables/`  
包含可编译的LaTeX、BibTeX、实验代码、图表等。

<details>
<summary>📝 Minimum required config</summary>

```yaml
project:
  name: "my-research"

research:
  topic: "Your research topic here"

llm:
  base_url: "https://api.openai.com/v1"
  api_key_env: "OPENAI_API_KEY"
  primary_model: "gpt-4o"
  fallback_models: ["gpt-4o-mini"]

experiment:
  mode: "sandbox"
  sandbox:
    python_path: ".venv/bin/python"
```

</details>

---

## 🧠 核心特性 | Key Features

### 三层协同架构

| 层级 | 职责 | 核心能力 |
|------|------|---------|
| **🧠 大脑层** | LLM决策引擎 | 多模型支持、动态路由、自然语言驱动、多Agent协同 |
| **🦾 手脚层** | Skill插件执行 | ClawHub 5700+ Skills、多执行模式、硬件感知、自我修复 |
| **🧬 记忆层** | 知识管理 | 三层记忆（短期/中期/长期）、自我进化、30天衰减 |

### 技术创新

| 能力 | 实现方式 |
|------|---------|
| **🔄 PIVOT/REFINE循环** | 阶段15自主决策：PROCEED（继续）、REFINE（调参）、PIVOT（换方向），自动版本控制 |
| **🤖 多Agent辩论** | 假设生成、结果分析、同行评审均采用结构化多视角辩论机制 |
| **🧬 自我学习** | 每次运行提取Lessons（决策理由、运行警告、指标异常），30天时间衰减，未来运行自动避免 |
| **📚 知识库** | 6大类别结构化存储（decisions、experiments、findings、literature、questions、reviews） |
| **🛡️ 质量监控** | 后台Sentinel守护：NaN/Inf检测、论文-证据一致性、引用相关性评分、反捏造防护 |

---

## 🦞 OpenClaw集成 | OpenClaw Integration

<table>
<tr>

**PaperClaw 兼容 [OpenClaw](https://github.com/openclaw/openclaw) 协议。** 可在OpenClaw中安装并通过单条消息启动自主研究，或通过CLI、Claude Code等AI编码助手独立使用。

</tr>
</table>

### 🚀 Use with OpenClaw (Recommended)

If you already use [OpenClaw](https://github.com/openclaw/openclaw) as your AI assistant:

```
1️⃣  Share the GitHub repo URL with OpenClaw
2️⃣  OpenClaw auto-reads RESEARCHCLAW_AGENTS.md → understands the pipeline
3️⃣  Say: "Research [your topic]"
4️⃣  Done — OpenClaw clones, installs, configures, runs, and returns results
```

**That's it.** OpenClaw handles `git clone`, `pip install`, config setup, and pipeline execution automatically. You just chat.

<details>
<summary>💡 What happens under the hood</summary>

1. OpenClaw reads `RESEARCHCLAW_AGENTS.md` → learns the research orchestrator role
2. OpenClaw reads `README.md` → understands installation and pipeline structure
3. OpenClaw copies `config.researchclaw.example.yaml` → `config.yaml`
4. Asks for your LLM API key (or uses your environment variable)
5. Runs `pip install -e .` + `researchclaw run --topic "..." --auto-approve`
6. Returns the paper, LaTeX, experiments, and citations

</details>

### 🔌 OpenClaw桥接（高级功能）

PaperClaw包含**桥接适配器系统**，提供6种可选能力：

```yaml
# config.arc.yaml
openclaw_bridge:
  use_cron: true              # ⏰ Scheduled research runs
  use_message: true           # 💬 Progress notifications (Discord/Slack/Telegram)
  use_memory: true            # 🧠 Cross-session knowledge persistence
  use_sessions_spawn: true    # 🔀 Spawn parallel sub-sessions for concurrent stages
  use_web_fetch: true         # 🌐 Live web search during literature review
  use_browser: false          # 🖥️ Browser-based paper collection
```

Each flag activates a typed adapter protocol. When OpenClaw provides these capabilities, the adapters consume them without code changes. See [`docs/integration-guide.md`](docs/integration-guide.md) for full details.

### ACP (Agent Client Protocol)

PaperClaw支持**任何ACP兼容的编码Agent**作为LLM后端 — 无需API密钥。Agent通过[acpx](https://github.com/openclaw/acpx)通信，在所有23个流水线阶段保持单一持久会话。

| Agent | Command | Notes |
|-------|---------|-------|
| Claude Code | `claude` | Anthropic |
| Codex CLI | `codex` | OpenAI |
| Gemini CLI | `gemini` | Google |
| OpenCode | `opencode` | SST |
| Kimi CLI | `kimi` | Moonshot |

```yaml
# config.yaml — ACP example
llm:
  provider: "acp"
  acp:
    agent: "claude"   # Any ACP-compatible agent CLI command
    cwd: "."          # Working directory for the agent
  # No base_url or api_key needed — the agent handles its own auth.
```

```bash
# Just run — the agent uses its own credentials
researchclaw run --config config.yaml --topic "Your research idea" --auto-approve
```

### 🛠️ Other Ways to Run

| Method | How |
|--------|-----|
| **Standalone CLI** | `researchclaw setup` → `researchclaw init` → `researchclaw run --topic "..." --auto-approve` |
| **Python API** | `from researchclaw.pipeline import Runner; Runner(config).run()` |
| **Claude Code** | Reads `RESEARCHCLAW_CLAUDE.md` — just say *"Run research on [topic]"* |
| **OpenCode** | Reads `.claude/skills/` — same natural language interface |
| **Any AI CLI** | Provide `RESEARCHCLAW_AGENTS.md` as context → agent auto-bootstraps |

---

## 🔬 23阶段智能流水线 | 23-Stage Pipeline

```
Phase A: 研究范围界定              Phase E: 实验执行
  1. TOPIC_INIT                    12. EXPERIMENT_RUN
  2. PROBLEM_DECOMPOSE             13. ITERATIVE_REFINE  ← 自我修复

Phase B: 文献发现                  Phase F: 分析决策
  3. SEARCH_STRATEGY               14. RESULT_ANALYSIS    ← 多Agent
  4. LITERATURE_COLLECT  ← 真实API  15. RESEARCH_DECISION  ← PIVOT/REFINE
  5. LITERATURE_SCREEN   [门控]
  6. KNOWLEDGE_EXTRACT             Phase G: 论文写作
                                   16. PAPER_OUTLINE
Phase C: 知识综合                  17. PAPER_DRAFT
  7. SYNTHESIS                     18. PEER_REVIEW        ← 证据检查
  8. HYPOTHESIS_GEN    ← 辩论       19. PAPER_REVISION

Phase D: 实验设计                  Phase H: 最终化
  9. EXPERIMENT_DESIGN   [门控]     20. QUALITY_GATE      [门控]
 10. CODE_GENERATION               21. KNOWLEDGE_ARCHIVE
 11. RESOURCE_PLANNING             22. EXPORT_PUBLISH     ← LaTeX
                                   23. CITATION_VERIFY    ← 相关性检查
```

> **门控阶段** (5, 9, 20) 可暂停等待人工审批，或使用 `--auto-approve` 自动通过。拒绝时自动回滚。

> **决策循环**: 阶段15可触发 REFINE (→ 阶段13) 或 PIVOT (→ 阶段8)，自动版本控制。

<details>
<summary>📋 What Each Phase Does</summary>

| Phase | What Happens |
|-------|-------------|
| **A: Scoping** | LLM decomposes the topic into a structured problem tree with research questions |
| **A+: Hardware** | Auto-detects GPU (NVIDIA CUDA / Apple MPS / CPU-only), warns if local hardware is limited, adapts code generation accordingly |
| **B: Literature** | Multi-source search (OpenAlex → Semantic Scholar → arXiv) for real papers, screens by relevance, extracts knowledge cards |
| **C: Synthesis** | Clusters findings, identifies research gaps, generates testable hypotheses via multi-agent debate |
| **D: Design** | Designs experiment plan, generates hardware-aware runnable Python (GPU tier → package selection), estimates resource needs |
| **E: Execution** | Runs experiments in sandbox, detects NaN/Inf and runtime bugs, self-heals code via targeted LLM repair |
| **F: Analysis** | Multi-agent analysis of results; autonomous PROCEED / REFINE / PIVOT decision with rationale |
| **G: Writing** | Outlines → section-by-section drafting (5,000-6,500 words) → peer reviews (with methodology-evidence consistency) → revises with length guard |
| **H: Finalization** | Quality gate, knowledge archival, LaTeX export with conference template, citation integrity + relevance verification |

</details>

---

## ✨ Key Features

| Feature | Description |
|---------|------------|
| **📚 Multi-Source Literature** | Real papers from OpenAlex, Semantic Scholar & arXiv — query expansion, deduplication, circuit breaker with graceful degradation |
| **🔍 4-Layer Citation Verification** | arXiv ID check → CrossRef/DataCite DOI → Semantic Scholar title match → LLM relevance scoring. Hallucinated refs auto-removed. |
| **🖥️ Hardware-Aware Execution** | Auto-detects GPU (NVIDIA CUDA / Apple MPS / CPU-only) and adapts code generation, imports, and experiment scale accordingly |
| **🦾 OpenCode Beast Mode** | Complex experiments auto-routed to [OpenCode](https://github.com/anomalyco/opencode) — generates multi-file projects with custom architectures, training loops, and ablation studies. Install via `researchclaw setup`. |
| **🧪 Sandbox Experiments** | AST-validated code, immutable harness, NaN/Inf fast-fail, self-healing repair, iterative refinement (up to 10 rounds), partial result capture |
| **📝 Conference-Grade Writing** | NeurIPS/ICML/ICLR templates, section-by-section drafting (5,000-6,500 words), anti-fabrication guard, revision length guard, anti-disclaimer enforcement |
| **📐 Template Switching** | `neurips_2025`, `iclr_2026`, `icml_2026` — Markdown → LaTeX with math, tables, figures, cross-refs, `\cite{}` |
| **🚦 Quality Gates** | 3 human-in-the-loop gates (Stages 5, 9, 20) with rollback. Skip with `--auto-approve`. |

---

## 🧠 MetaClaw集成 | MetaClaw Integration

**PaperClaw + [MetaClaw](https://github.com/aiming-lab/MetaClaw) = 从每次运行中学习的流水线**

MetaClaw为PaperClaw添加**跨运行知识迁移**能力。启用后，流水线自动捕获失败和警告中的经验教训，转换为可复用技能，并在后续运行的所有23个阶段中注入这些技能 — 确保同样的错误不再重复。

### How It Works

```
Run N executes → failures/warnings captured as Lessons
                      ↓
          MetaClaw Lesson → Skill conversion
                      ↓
          arc-* Skill files stored in ~/.metaclaw/skills/
                      ↓
Run N+1 → build_overlay() injects skills into every LLM prompt
                      ↓
          LLM avoids known pitfalls → higher quality, fewer retries
```

### Quick Setup

```bash
# 1. Install MetaClaw (if not already)
pip install metaclaw

# 2. Enable in your config
```

```yaml
# config.arc.yaml
metaclaw_bridge:
  enabled: true
  proxy_url: "http://localhost:30000"        # MetaClaw proxy (optional)
  skills_dir: "~/.metaclaw/skills"          # Where skills are stored
  fallback_url: "https://api.openai.com/v1" # Direct LLM fallback
  fallback_api_key: ""                      # API key for fallback URL
  lesson_to_skill:
    enabled: true
    min_severity: "warning"                 # Convert warnings + errors
    max_skills_per_run: 3
```

```bash
# 3. Run as usual — MetaClaw works transparently
researchclaw run --config config.arc.yaml --topic "Your idea" --auto-approve
```

After each run, check `~/.metaclaw/skills/arc-*/SKILL.md` to see the skills your pipeline has learned.

### Experiment Results

In controlled A/B experiments (same topic, same LLM, same configuration):

| Metric | Baseline | With MetaClaw | Improvement |
|--------|----------|---------------|-------------|
| Stage retry rate | 10.5% | 7.9% | **-24.8%** |
| Refine cycle count | 2.0 | 1.2 | **-40.0%** |
| Pipeline stage completion | 18/19 | 19/19 | **+5.3%** |
| Overall robustness score (composite) | 0.714 | 0.845 | **+18.3%** |

> Composite robustness score is a weighted average of stage completion rate (40%), retry reduction (30%), and refine cycle efficiency (30%).

### Backward Compatibility

- **Default: OFF.** If `metaclaw_bridge` is absent or `enabled: false`, the pipeline behaves exactly as before.
- **No new dependencies.** MetaClaw is optional — the core pipeline works without it.
- **All 1,634 existing tests pass** with the integration code present.

---

## ⚙️ Configuration Reference

<details>
<summary>Click to expand full configuration reference</summary>

```yaml
# === Project ===
project:
  name: "my-research"              # Project identifier
  mode: "docs-first"               # docs-first | semi-auto | full-auto

# === Research ===
research:
  topic: "..."                     # Research topic (required)
  domains: ["ml", "nlp"]           # Research domains for literature search
  daily_paper_count: 8             # Target papers per search query
  quality_threshold: 4.0           # Minimum quality score for papers

# === Runtime ===
runtime:
  timezone: "America/New_York"     # For timestamps
  max_parallel_tasks: 3            # Concurrent experiment limit
  approval_timeout_hours: 12       # Gate stage timeout
  retry_limit: 2                   # Retry count on stage failure

# === LLM ===
llm:
  provider: "openai-compatible"    # "openai-compatible" (default) or "acp"
  base_url: "https://..."          # API endpoint (required for openai-compatible)
  api_key_env: "OPENAI_API_KEY"    # Env var for API key (required for openai-compatible)
  api_key: ""                      # Or hardcode key here
  primary_model: "gpt-4o"          # Primary model
  fallback_models: ["gpt-4o-mini"] # Fallback chain
  s2_api_key: ""                   # Semantic Scholar API key (optional, higher rate limits)
  acp:                             # Only used when provider: "acp"
    agent: "claude"                # ACP agent CLI command (claude, codex, gemini, etc.)
    cwd: "."                       # Working directory for the agent

# === Experiment ===
experiment:
  mode: "sandbox"                  # simulated | sandbox | docker | ssh_remote
  time_budget_sec: 300             # Max execution time per run (default: 300s)
  max_iterations: 10               # Max optimization iterations
  metric_key: "val_loss"           # Primary metric name
  metric_direction: "minimize"     # minimize | maximize
  sandbox:
    python_path: ".venv/bin/python"
    gpu_required: false
    allowed_imports: [math, random, json, csv, numpy, torch, sklearn]
    max_memory_mb: 4096
  docker:
    image: "researchclaw/experiment:latest"
    network_policy: "setup_only"   # none | setup_only | pip_only | full
    gpu_enabled: true
    memory_limit_mb: 8192
    auto_install_deps: true        # Auto-detect imports → requirements.txt
  ssh_remote:
    host: ""                       # GPU server hostname
    gpu_ids: []                    # Available GPU IDs
    remote_workdir: "/tmp/researchclaw_experiments"
  opencode:                          # OpenCode Beast Mode (auto-installed via `researchclaw setup`)
    enabled: true                    # Master switch (default: true)
    auto: true                       # Auto-trigger without confirmation (default: true)
    complexity_threshold: 0.2        # 0.0-1.0 — higher = only trigger on complex experiments
    model: ""                        # Override model (empty = use llm.primary_model)
    timeout_sec: 600                 # Max seconds for OpenCode generation
    max_retries: 1                   # Retry count on failure
    workspace_cleanup: true          # Remove temp workspace after collection

# === Export ===
export:
  target_conference: "neurips_2025"  # neurips_2025 | iclr_2026 | icml_2026
  authors: "Anonymous"
  bib_file: "references"

# === Prompts ===
prompts:
  custom_file: ""                  # Path to custom prompts YAML (empty = defaults)

# === Security ===
security:
  hitl_required_stages: [5, 9, 20] # Stages requiring human approval
  allow_publish_without_approval: false
  redact_sensitive_logs: true

# === Knowledge Base ===
knowledge_base:
  backend: "markdown"              # markdown | obsidian
  root: "docs/kb"

# === Notifications ===
notifications:
  channel: "console"               # console | discord | slack
  target: ""

# === MetaClaw Bridge (Optional) ===
metaclaw_bridge:
  enabled: false                   # Set to true to enable cross-run learning
  proxy_url: "http://localhost:30000"  # MetaClaw proxy URL
  skills_dir: "~/.metaclaw/skills" # Where arc-* skills are stored
  fallback_url: ""                 # Direct LLM fallback when proxy is down
  fallback_api_key: ""             # API key for fallback endpoint
  lesson_to_skill:
    enabled: true                  # Auto-convert lessons to skills
    min_severity: "warning"        # Minimum severity to convert
    max_skills_per_run: 3          # Max new skills per pipeline run

# === OpenClaw Bridge ===
openclaw_bridge:
  use_cron: false                  # Scheduled research runs
  use_message: false               # Progress notifications
  use_memory: false                # Cross-session knowledge persistence
  use_sessions_spawn: false        # Spawn parallel sub-sessions
  use_web_fetch: false             # Live web search
  use_browser: false               # Browser-based paper collection
```

</details>

---

## 🙏 Acknowledgments

Inspired by:

- 🔬 [AI Scientist](https://github.com/SakanaAI/AI-Scientist) (Sakana AI) — Automated research pioneer
- 🧠 [AutoResearch](https://github.com/karpathy/autoresearch) (Andrej Karpathy) — End-to-end research automation
- 🌐 [FARS](https://analemma.ai/blog/introducing-fars/) (Analemma) — Fully Automated Research System

---

## 📄 License

MIT — see [LICENSE](LICENSE) for details.

---

## 📌 引用 | Citation

如果PaperClaw对你的研究有帮助，请引用：

```bibtex
@software{paperclaw2026,
  title = {PaperClaw: 面向学术科研工作者的高能动性AI自动化辅助系统},
  author = {PaperClaw Team},
  year = {2026},
  url = {https://github.com/1692775560/PaperClaw},
  note = {三层协同架构: 大脑(LLM决策引擎) + 手脚(Skill插件执行层) + 记忆(Memory知识管理)}
}
```

---

## 🙏 致谢 | Acknowledgments

PaperClaw基于以下开源项目改进而来：

- 🔬 [AutoResearchClaw](https://github.com/aiming-lab/AutoResearchClaw) — 自动化研究流水线
- 🧠 [MetaClaw](https://github.com/aiming-lab/MetaClaw) — 跨运行学习系统
- 🌐 [OpenClaw](https://github.com/openclaw/openclaw) — Agent协议标准

特别感谢开源社区的贡献者们！

---

<p align="center">
  <sub>用 🦞 和 ❤️ 构建 | Built with 🦞 and ❤️ by PaperClaw Team © 2026</sub>
</p>
