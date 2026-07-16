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

## 当前视觉主题（v7，2026-07-17，参考 daheiai.com 重做）
- 风格：暖白底 + 橙强调 + 衬线标题 — #FAF9F6 底 + #FF6B00 强调 + Noto Serif SC 大标题
- 字体：Inter 400/500/600（西文 UI）+ Noto Sans SC 400/500（中文 UI）+ Noto Serif SC 400/500/600/700（标题/笔记正文）
- 关键设计语言：
  - 配色：底 #FAF9F6 / 卡 #fff / 边 #eee / 字 #1a1a1a / 次字 #999 / 强调 #FF6B00
  - 容器：单列 680 宽居中 + 大留白（hero padding-top 88px）
  - 卡片：白底 #fff + 1px #eee 边 + 8px 圆角，hover border 变橙 + translateX(4px)
  - section 分隔：border-top 1px #eee + uppercase 0.75rem 标签（letter-spacing 2px），不再是模块块
  - 标题：h1 2rem / font-weight 400 / Noto Serif SC（衬线！与正文 sans 对比形成文化感）
  - 笔记详情：nd-title 1.9rem 衬线 + 正文用衬线（与参考站一致）
  - 强调色用法：accent 用于 hover border / 文字 / 按钮边框 / 选中背景 / blockquote 左边
- 原则：参考站气质 = 温暖 + 克制 + 文化感。"科技感"不一定深色，衬线 + 暖白 + 单一暖色强调也能体现"专业"
- 教训链：v3 浅紫 → v4 紫蓝深色（装饰多）→ v5 极简黑白（松散）→ v6 极简+模块化（块状感）→ v7 暖白+橙+衬线（参考 daheiai）
- 重要转折：用户给了 daheiai.com 参考后，整个调性从"冷/深色"翻转到"暖/浅色+衬线"
- 风格转换：换 <style> 整块 + 替换 Google Fonts link 即可整体换皮（Python re.sub）
