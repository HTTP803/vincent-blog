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

## 当前视觉主题（v10，2026-07-17，赛博玻璃风）
- 风格：深色底 + 玻璃卡片（rgba+backdrop-filter）+ 青色霓虹强调 + 毛玻璃动效
- 字体：Inter 400/500/600/700（西文 UI）+ Noto Sans SC 400/500/600（中文 UI），无衬线
- 关键设计语言：
  - 配色：底 #0A0A0F + 径向青色/紫色氛围光 / 卡片 rgba(255,255,255,0.04) 玻璃 / 边 rgba(255,255,255,0.07) / 强调 #22D3EE（青色）
  - 卡片：rgba(255,255,255,0.04) + backdrop-filter blur(16px) saturate(180%) + 1px 半透边 + 圆角 12px + 深色阴影（sh-glass），hover 时背景/边框亮化 + translateY(-2~3px)
  - nav：rgba(10,10,15,0.72) 毛玻璃 + 1px 底边，logo 前 neon 色脉冲圆点（pulse 动画）
  - hero：顶部 48×3 青色霓虹装饰条，avatar 青→紫渐变 + 青色 glow
  - section 标题：4×20 青色竖条 + 渐变横线
  - 卡片 hover：底部居中青色霓虹横线（scaleX 0→1 transform-origin center）
  - tag / filter：999px 胶囊 + 半透玻璃背景 + hover 青色边框
  - button：渐变色背景 + hover 反转为青色实心 + 箭头位移
  - 搜索框：玻璃背景 + focus 青色光环
  - 代码块：深色半透明玻璃底（backdrop-filter:blur 8px）+ 青色强调色 code
  - 滚动条：半透白灰，hover 青色微光
- 原则：玻璃质感 = 半透明背景 + backdrop-filter blur + 1px 半透边 + 深色阴影。科技感来自"材质"而非"装饰"
- 关键转折：用户最终确认"赛博玻璃风"为偏好方向（3 选 1 中选）
- 风格教训链：v3 浅紫 → v4 紫蓝深色（装饰多）→ v5 极简黑白（松散）→ v6 极简+模块化（块状）→ v7 暖白+橙+衬线 → v8 白+绿+阴影（Shopify）→ v9 v8+装饰增强 → v10 深色+玻璃+霓虹 ✅
- 风格转换：换 <style> 整块即可整体换皮（Python re.sub）
