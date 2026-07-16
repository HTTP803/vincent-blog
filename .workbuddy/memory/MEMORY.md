# 项目记忆

## 项目定位
- 名称：公开第二大脑（个人站）
- 定位：一个产品经理创业路上的公开思考集
- 信条：输出倒逼输入
- 目标用户：同行产品经理、创业关注者、潜在合作伙伴
- 内容源头：Obsidian 知识库 → Markdown → 站点自动同步

## 站点架构
- 纯前端静态站（marked.js CDN 渲染）
- 首页目前已升级为个人门户：Hero + 社交链接 + 技能标签 + Now 区 + 项目作品 + 最新笔记 + 联系方式
- config.js 支持配置：site info / social links / now / projects / skills / theme
- 导航：首页 / 笔记 / 关于

## 发布流程
1. 在 Obsidian 写笔记（Frontmatter: title + date + tags）
2. 复制 .md 到 content/ 目录
3. 运行 python3 build-index.py
4. git add → commit → push
5. GitHub Pages 自动更新

## 当前视觉主题（v6，2026-07-17，模块化版本）
- 风格：极简黑白 + 模块化边界 — 纯黑底 #0A0A0A，每个 section 是 1px 边的"模块块"
- 字体：Inter 400/500（西文）/ Noto Sans SC 400/500（中文）/ JetBrains Mono（标签代码）/ Noto Serif SC（笔记正文）
- 关键设计语言：
  - nav：满宽 sticky + 1px 强底边（--b-2）+ logo 前 6x14 白色竖条作品牌标识 + nav links hover scaleX 下划线
  - section：1px 边 + 10px 圆角 + 内部 padding + 微妙 surface gradient（rgba .012）
  - section-title：0.76rem/600/letter-spacing 2px + 6x13 白色竖条锚点
  - 所有 section 统一 max-width 680 与 hero 对齐
- 原则：专业感 = 克制 + 模块化。极简黑白的陷阱是"松散"，要靠 1px 边形成"边界感"
- 教训链：v4 装饰过多 → v5 极简但松散 → v6 极简+模块化
- 风格转换：换 <style> 整块 + 替换 Google Fonts link 即可整体换皮（Python re.sub）
