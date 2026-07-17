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

## 当前视觉主题（v11，2026-07-17，参考 blog.aistar.cool）
- 风格：浅蓝白底 + 纯白卡片 + 大圆角 16px + 青蓝渐变强调 + 大写间距标签
- 字体：Inter 400/500/600/700（西文 UI）+ Noto Sans SC 400/500/600（中文 UI），无衬线
- 关键设计语言（从 aistar 抓取）：
  - 配色：底 #f7fbfe（极浅蓝白）/ 卡 #fff / 边 rgba(0,0,0,0.13) / 字 #000 / 次字 #43494d / 强调 #007acc（蓝）
  - 卡片：纯白 + 3px 边框（黑色 13% 不透明）+ 16px 圆角 + shadow-sm，hover shadow-md + translateY(-2~3px) + 边框加深
  - section 标签：0.76rem 小号 + uppercase + letter-spacing 0.24em + 蓝色 + 末尾横线
  - nav：半透明毛玻璃 + 1px 底边 + logo 前 28×28 蓝→青渐变方块
  - hero：标题 2.2rem/800 字重 + 青→蓝渐变文字（background-clip）+ 头像蓝→青渐变
  - 按钮：蓝→青渐变实心（contact CTA）+ 箭头动画
  - tag / filter：圆角 999px 胶囊 + 蓝色软底（rgba(0,122,204,0.08)）
  - 搜索框：白底 + 微妙阴影 + focus 蓝光晕
  - 代码块：白底 + 1px 边（不用深色代码块）
- 原则：博客/内容型设计 = 浅色 + 大圆角 + 大写标签 + 渐变标题强调。克制使用彩色，用渐变和排版体现精致
- 参考来源：blog.aistar.cool（Next.js + Tailwind + shadcn/ui 构建的 AI 博客）
- 风格教训链：v3 浅紫 → v4 紫蓝深色 → v5 极简黑白 → v6 极简+模块化 → v7 暖白+橙+衬线 → v8 白+绿+阴影 → v9 v8+装饰 → v10 深色玻璃 → v11 浅蓝白+粗体+大圆角 ✅
- 风格转换：换 <style> 整块即可整体换皮（Python re.sub）
