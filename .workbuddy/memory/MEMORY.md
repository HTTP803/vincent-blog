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

## 当前视觉主题（v4，2026-07-17 起）
- 风格：Linear 极简深色（用户选定）— 深色底 #08090C + 紫蓝主色 #5E5CE6
- 字体：Inter（西文）/ Noto Sans SC（中文）/ JetBrains Mono（标签代码）/ Noto Serif SC（笔记正文）
- 关键设计语言：紫蓝径向氛围光、导航脉动点、mac 代码圆点、卡片 hover 光晕
- 用户偏好风格 = 极简克制 + 科技感 + 强排版，避开花哨/卡通/过饱和
- 风格转换：换 <style> 整块 + 替换 Google Fonts link 即可整体换皮（Python re.sub）
