# AutoResearchClaw → PaperClaw 转换总结

## ✅ 已完成的修改

### 1. 核心配置文件

#### `pyproject.toml`
- ✅ 项目名称: `researchclaw` → `paperclaw`
- ✅ 版本号: `0.3.1` → `1.0.0`
- ✅ 描述: 更新为PaperClaw的三层架构定位
- ✅ 命令行工具: 同时支持 `paperclaw` 和 `researchclaw`
- ✅ 包名: 同时包含 `paperclaw` 和 `researchclaw`（向后兼容）

#### `researchclaw/__init__.py`
- ✅ 模块描述: 更新为PaperClaw品牌
- ✅ 版本号: `0.3.1` → `1.0.0`
- ✅ 添加三层架构说明

#### `researchclaw/cli.py`
- ✅ 文件头注释: 更新为PaperClaw描述
- ✅ 程序名称: `researchclaw` → `paperclaw`
- ✅ 运行ID前缀: `rc-` → `pc-`
- ✅ 帮助信息: 更新为中文描述

### 2. 配置文件

#### `config.paperclaw.example.yaml` (新建)
- ✅ 创建PaperClaw专用配置模板
- ✅ 添加中文注释说明三层架构
- ✅ 时区默认改为 `Asia/Shanghai`
- ✅ 研究主题改为中文示例

#### `config.researchclaw.example.yaml` (更新)
- ✅ 添加PaperClaw品牌注释

### 3. 文档

#### `README_PAPERCLAW.md` (新建)
- ✅ 完整的PaperClaw品牌README
- ✅ 三层架构详细说明
- ✅ 使用场景与示例
- ✅ 技术创新点阐述
- ✅ vs 传统工具/AI Scientist对比

#### `PAPERCLAW_GUIDE_CN.md` (新建)
- ✅ 中文使用指南
- ✅ 安装部署详解
- ✅ 配置详解
- ✅ 使用场景示例
- ✅ 高级功能说明
- ✅ 常见问题解答

### 4. 符号链接

#### `paperclaw/` → `researchclaw/`
- ✅ 创建符号链接，确保两个包名都可用

---

## 🔍 需要注意的问题

### 问题1: 模块导入路径

**现状**: 代码中所有导入仍使用 `from researchclaw import ...`

**影响**: 
- ✅ 通过符号链接，`from paperclaw import ...` 也能工作
- ⚠️ 但代码库内部仍是 `researchclaw`

**建议**: 
- 保持现状（向后兼容）
- 或者批量替换所有 `from researchclaw` → `from paperclaw`

### 问题2: 配置文件搜索顺序

**现状**: `config.py` 中搜索顺序为:
```python
CONFIG_SEARCH_ORDER = ("config.arc.yaml", "config.yaml")
```

**建议**: 更新为:
```python
CONFIG_SEARCH_ORDER = ("config.paperclaw.yaml", "config.arc.yaml", "config.yaml")
```

### 问题3: 示例配置文件名

**现状**: 
- `EXAMPLE_CONFIG = "config.researchclaw.example.yaml"`

**建议**: 更新为:
```python
EXAMPLE_CONFIG = "config.paperclaw.example.yaml"
```

### 问题4: 运行输出目录

**现状**: 
- 运行ID: `pc-YYYYMMDD-HHMMSS-hash` ✅
- 但输出目录可能仍在 `artifacts/rc-*/`

**建议**: 检查 `runner.py` 中的目录创建逻辑

### 问题5: 日志和错误信息

**现状**: 代码中可能有硬编码的 "ResearchClaw" 字符串

**建议**: 全局搜索并替换:
```bash
grep -r "ResearchClaw" researchclaw/ --exclude-dir=__pycache__
```

---

## 📋 推荐的后续修改

### 优先级1: 高（必须修改）

1. **更新配置搜索顺序**
   ```python
   # researchclaw/config.py
   CONFIG_SEARCH_ORDER = (
       "config.paperclaw.yaml",
       "config.arc.yaml", 
       "config.yaml"
   )
   EXAMPLE_CONFIG = "config.paperclaw.example.yaml"
   ```

2. **检查运行输出目录前缀**
   ```python
   # researchclaw/pipeline/runner.py
   # 确认 run_id 使用 "pc-" 前缀
   ```

### 优先级2: 中（建议修改）

3. **全局替换品牌名称**
   ```bash
   # 在所有Python文件中
   find researchclaw -name "*.py" -exec sed -i '' 's/ResearchClaw/PaperClaw/g' {} \;
   
   # 在所有YAML文件中
   find . -name "*.yaml" -exec sed -i '' 's/ResearchClaw/PaperClaw/g' {} \;
   ```

4. **更新提示词文件**
   ```bash
   # prompts.default.yaml
   # 将所有 "ResearchClaw" 替换为 "PaperClaw"
   ```

### 优先级3: 低（可选）

5. **创建PaperClaw Logo**
   - 设计新的Logo图片
   - 替换 `image/logo.png`

6. **更新测试文件**
   ```bash
   # tests/ 目录下的测试用例
   # 更新断言中的字符串匹配
   ```

---

## 🧪 验证清单

### 安装测试

```bash
# 1. 卸载旧版本
pip uninstall researchclaw -y

# 2. 安装新版本
pip install -e .

# 3. 验证命令可用
paperclaw --help
researchclaw --help  # 应该也能工作

# 4. 验证版本号
python -c "import paperclaw; print(paperclaw.__version__)"
# 应该输出: 1.0.0
```

### 功能测试

```bash
# 1. 初始化配置
paperclaw init

# 2. 验证配置文件
ls -l config.paperclaw.yaml  # 应该存在

# 3. 环境检查
paperclaw doctor

# 4. 运行测试（如果有测试数据）
paperclaw run --topic "测试主题" --config config.paperclaw.yaml --auto-approve
```

### 导入测试

```python
# test_import.py
# 验证两种导入方式都能工作

# 方式1: 使用paperclaw
from paperclaw.config import RCConfig
from paperclaw.pipeline.runner import Runner
print("✅ paperclaw import works")

# 方式2: 使用researchclaw（向后兼容）
from researchclaw.config import RCConfig
from researchclaw.pipeline.runner import Runner
print("✅ researchclaw import works")
```

---

## 📊 修改统计

| 类别 | 文件数 | 修改行数 |
|------|--------|---------|
| 核心配置 | 3 | ~50 |
| CLI工具 | 1 | ~20 |
| 文档 | 3 | ~800 |
| 配置示例 | 2 | ~150 |
| **总计** | **9** | **~1020** |

---

## 🎯 下一步建议

### 立即执行

1. ✅ 修改 `config.py` 中的配置搜索顺序
2. ✅ 全局搜索并替换 "ResearchClaw" → "PaperClaw"
3. ✅ 验证安装和基本功能

### 短期规划（1周内）

4. 设计PaperClaw Logo
5. 更新所有文档中的截图
6. 创建中文版README（替换英文版）
7. 更新测试用例

### 长期规划（1月内）

8. 建立ClawHub技能市场网站
9. 创建用户社区（Discord/论坛）
10. 发布v1.0.0正式版本
11. 撰写技术博客和使用案例

---

## 🔧 快速修复脚本

```bash
#!/bin/bash
# fix_branding.sh - 快速修复品牌名称

echo "🔧 开始修复PaperClaw品牌..."

# 1. 更新config.py
sed -i '' 's/config.researchclaw.example.yaml/config.paperclaw.example.yaml/g' researchclaw/config.py
sed -i '' 's/CONFIG_SEARCH_ORDER.*$/CONFIG_SEARCH_ORDER: tuple[str, ...] = ("config.paperclaw.yaml", "config.arc.yaml", "config.yaml")/g' researchclaw/config.py

# 2. 全局替换品牌名称（Python文件）
find researchclaw -name "*.py" -type f -exec sed -i '' 's/ResearchClaw/PaperClaw/g' {} \;

# 3. 全局替换品牌名称（YAML文件）
find . -name "*.yaml" -type f -exec sed -i '' 's/ResearchClaw/PaperClaw/g' {} \;

# 4. 全局替换品牌名称（Markdown文件）
find docs -name "*.md" -type f -exec sed -i '' 's/ResearchClaw/PaperClaw/g' {} \;

echo "✅ 品牌修复完成！"
echo "📝 请运行测试验证: python -m pytest tests/"
```

---

## 📞 技术支持

如有问题，请参考:
- 📖 使用指南: `PAPERCLAW_GUIDE_CN.md`
- 📄 完整README: `README_PAPERCLAW.md`
- 🐛 问题反馈: GitHub Issues

---

<p align="center">
  <sub>转换完成时间: 2026-03-19 | PaperClaw Team</sub>
</p>
