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

## 当前视觉主题（v8，2026-07-17，Shopify Polaris 风格）
- 风格：白底 + 绿品牌 + 微妙阴影 + 8px 圆角 + 现代 SaaS 卡片（Shopify 经典绿 #008060）
- 字体：Inter 400/500/600/700（西文 UI）+ Noto Sans SC 400/500/600（中文 UI），无衬线（去掉 Noto Serif SC）
- 关键设计语言：
  - 配色：底 #f6f6f7 / 卡 #fff / 边 #e1e3e5 / 字 #1a1a1a / 次字 #6d7175 / 强调 #008060（hover #006e52）
  - 容器：宽布局 1180px（与之前 680 单列相反），项目/笔记用 grid auto-fit minmax(280px, 1fr) 卡片网格
  - 卡片：白底 + 1px #e1e3e5 边 + 8px 圆角 + 微妙 shadow-sm，hover 升级 shadow-md + translateY(-1~2px)
  - nav：满宽白底 + 1px 底边 + logo 前 22x22 绿色圆角方块作品牌
  - section 标题：1.5rem/600/letter-spacing -.3px（清晰大字标题，无 uppercase）
  - tag：圆角 999px 胶囊（pill 风格）+ accent 浅色背景
  - 按钮：主色实心（hover 加深 #006e52）+ 次要描边
  - 代码块：黑底（#1a1a1a）配浅色字
- 原则：现代 SaaS 调性 = 宽布局 + 卡片网格 + 微妙阴影 + 圆角统一 + 单一品牌色
- 教训链：v3 浅紫 → v4 紫蓝深色（装饰多）→ v5 极简黑白（松散）→ v6 极简+模块化（块状）→ v7 暖白+橙+衬线 → v8 白+绿+阴影（Shopify）
- 风格转换：换 <style> 整块 + 替换 Google Fonts link 即可整体换皮（Python re.sub）
