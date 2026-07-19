// 站点配置 —— 改这里就行
const SITE_CONFIG = {
  title: "Vin纪 · 公开第二大脑",
  subtitle: "把思考做成产品 · 产品经理的公开第二大脑",
  author: "Vin纪",
  bio: "我是 Vin纪，一个正在从 0 到 1 创业的产品经理。这里不灌水、不装懂，只写真实踩过的坑与想通的事——信条只有一句：输出倒逼输入，思考即产品。",
  avatar: "", // 头像图片 URL（可选，留空则显示首字母）

  // --- 社交链接（不用的留空） ---
  // 说明：email/QQ/微信/抖音 用"点击复制账号"模式（跨 PC/手机 100% 可靠，不受各平台 App 唤起/中转页限制）
  //       github/小红书 网页版体验好，保留一键跳转；不用的留空
  social: {
    email:       { id: "529338895@qq.com", label: "Email", hint: "邮箱已复制：529338895@qq.com，粘贴到邮件里给我发信" },
    github:      { url: "https://github.com/HTTP803",     label: "GitHub" },
    QQ:          { id: "529338895",  label: "QQ",   hint: "QQ号已复制：529338895，打开 QQ 搜索添加我" },
    wechat:      { id: "PM_Vincent", label: "微信", hint: "微信号已复制：PM_Vincent，打开微信搜索添加我" },
    douyin:      { id: "116796468",  label: "抖音", hint: "抖音号已复制：116796468，打开抖音搜索关注我" },
    xiaohongshu: { url: "https://xhslink.com/m/7HupBVyOig2",   label: "小红书" },
    rss:         { url: "/feed.xml",                       label: "RSS" },
  },

  // --- 正在做的事（首页 Now 区） ---
  now: [
    { emoji: "🚀", text: "筹备第一个产品方向，调研零代码市场需求" },
    { emoji: "📝", text: "每周至少写 1 篇公开笔记，沉淀产品思考" },
    { emoji: "📖", text: "在读《极简创业》和《重来》" },
  ],

  // --- 项目作品 ---
  projects: [
    {
      title: "公开第二大脑",
      desc: "个人知识外显站点，用 Obsidian 驱动。输出倒逼输入。",
      url: "",
      tags: ["个人项目", "静态站"],
      icon: "book", // 封面图标: book/rocket/product/chart/code/bulb/default
    },
    {
      title: "更多项目即将上线",
      desc: "创业筹备中的项目，待启动后更新。",
      url: "",
      tags: ["coming soon"],
      icon: "rocket",
    },
  ],

  // --- 技能 / 领域 ---
  skills: [
    "产品管理", "需求分析", "用户调研", "竞品分析",
    "PRD", "原型设计", "零代码方案", "创业规划",
  ],

  // --- 主题色 ---
  theme: {
    primary: "#7F77DD",
    accent: "#1D9E75",
    bg: "#FAFAF8",
  },

  // --- AI 速报（每日由后台任务自动生成 AI 行业报告，写入 ai-news.json 的 issues[]；期号自动顺延） ---
  aiNews: {
    enabled: true,
    navLabel: "AI速报",
  },

  // --- 笔记来源目录（相对于站点根目录） ---
  contentDir: "content",

  // --- 首页显示的笔记数 ---
  recentCount: 5,
};
