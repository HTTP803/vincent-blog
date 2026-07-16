# 公开第二大脑 · 站点部署完成

## 已搭建内容

### 站点文件
- `index.html` — 主站点（纯前端，No build step）
- `config.js` — 站点配置（改标题、颜色、社交链接就在这里）
- `build-index.py` — 笔记索引生成脚本（加新笔记后跑一次）
- `content/` — 笔记目录（放了 3 篇示例笔记 + about.md）
- `.gitignore`

### 技术架构
- 客户端 Markdown 渲染（marked.js CDN）
- 笔记自动发现：`build-index.py` → `content/index.json`
- 支持功能：笔记列表、标签筛选、搜索、Markdown 渲染、关于页
- 部署方式：GitHub Pages（静态站点即可）

### 示例笔记
放了 3 篇示范文章展示格式：
1. 产品经理的核心能力不是画原型是做判断（标签：产品管理, 思考）
2. 一人创业的思考框架（标签：创业, 方法论）
3. 用猪八戒做需求调研的框架（标签：创业, 调研, 产品管理）

### Git
已初始化本地仓库并提交首个 commit。

### v2 — 首页升级
- 首页重构成完整的个人门户，包含 6 个模块：
  1. **Hero** — 头像 + 姓名 + tagline + bio
  2. **社交链接** — Email / GitHub / 知乎 / 即刻 / 小宇宙 / RSS 等（配置化）
  3. **技能标签** — 产品管理 / 需求分析 / 零代码方案 等
  4. **正在做的事（Now）** — 当前创业聚焦点，首页直接展示
  5. **项目作品** — 项目卡片网格，可点击跳转
  6. **最新笔记** — 最近 5 篇笔记预览 + "查看全部"入口
  7. **保持联系** — 底部邮件 CTA
- 导航增加「首页 / 笔记 / 关于」三项
- `config.js` 重构：社交改为对象格式（支持 label + URL），新增 `now`、`projects`、`skills` 配置字段

## 待用户操作
1. 创建 GitHub 仓库并推送（需要用户确认 GitHub 账号）
2. 启用 GitHub Pages（Settings → Pages → 选 main 分支）
3. 之后每次在 Obsidian 写完笔记，复制 `.md` 文件到 `content/`，跑 `python3 build-index.py`，commit 并 push
