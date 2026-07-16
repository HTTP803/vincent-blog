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

## 当前视觉主题（v9，2026-07-17，v8 装饰增强版）
- 风格：Shopify Polaris 基础上加 icon + 边框装饰（v8 保持方向，只加细节）
- 字体：Inter 400/500/600/700（西文 UI）+ Noto Sans SC 400/500/600（中文 UI），无衬线
- 关键设计语言（v9 新增）：
  - section 标题：1.35rem/600 + **4×20 绿色圆角竖条**（::before）+ 末尾渐变横线
  - nav logo：24×24 绿色渐变方块（带阴影）作品牌标识，nav links hover 下划线 scaleX
  - hero avatar：68×68 绿色渐变 + **双 ring**（4px 表面色 + 5px 灰边），hero 顶部 48×3 居中绿色装饰条
  - 卡片（project/note/now）：hover 时显示左侧/顶部 3px 绿色 accent 边（scaleY/scaleX 0→1 动画）
  - skill pill / filter-btn：圆角 999px 胶囊，hover 变绿，active 实心绿
  - 按钮：主色实心 + hover 加深 + **::after 箭头 →**（hover 时右移 3px）
  - view-all：::after 箭头 + hover gap 加宽
  - search-wrap：左侧 ⌕ 搜索图标 + input padding-left 40px
  - note-detail / about-page：顶部 48×3 绿色装饰条
  - footer：顶部 60×3 居中绿色装饰条
- 原则：在 v8 基础上"加细节"而非"换方向"——给栏目/卡片/按钮加绿色 accent 装饰，让视觉层次更丰富
- 教训：装饰元素（绿色装饰条、icon、hover accent 边、按钮箭头）能让页面立刻"精致"起来
- 风格教训链：v3 浅紫 → v4 紫蓝深色 → v5 极简黑白 → v6 极简+模块化 → v7 暖白+橙+衬线 → v8 白+绿+阴影 → v9 v8+装饰增强 ✅
- 风格转换：换 <style> 整块即可整体换皮（Python re.sub）
