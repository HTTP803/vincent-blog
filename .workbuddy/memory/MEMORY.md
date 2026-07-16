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

## 当前视觉主题（v5，2026-07-17，用户最终选定）
- 风格：极简黑白 — 纯黑底 #0A0A0A + 灰阶白字，**无主色**
- 字体：Inter 400/500（西文）/ Noto Sans SC 400/500（中文）/ JetBrains Mono（标签代码）/ Noto Serif SC（笔记正文）
- 关键设计语言：1px 极弱白边分割、JetBrains Mono 标签化、Inter OpenType cv 特性、table 化项目卡片（1px gap）、hover 改 padding 微移而非 transform
- **原则**：专业感 = 克制 = 颜色少/装饰少/内容突出。装饰性元素（光晕/渐变/脉动/glow）一律去除
- 教训：v4 紫蓝+光晕被判"不够专业"，装饰性盖过内容。要"科技感"先想到"少"而非"加"
- 风格转换：换 <style> 整块 + 替换 Google Fonts link 即可整体换皮（Python re.sub）
