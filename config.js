// 站点配置 —— 改这里就行
const SITE_CONFIG = {
  title: "王文彪 · 公开第二大脑",
  subtitle: "一个产品经理创业路上的公开思考集",
  author: "王文彪",
  bio: "产品经理，正在创业。相信输出倒逼输入，记录从零到一的思考和折腾。",
  avatar: "", // 头像图片 URL（可选，留空则显示首字母）

  // --- 社交链接（不用的留空） ---
  social: {
    email:       { url: "mailto:529338895@qq.com", label: "Email" },
    github:      { url: "https://github.com/your-id",     label: "GitHub" },
    zhihu:       { url: "https://zhihu.com/people/your",  label: "知乎" },
    wechat:      { url: "",                                label: "微信" },
    rss:         { url: "/feed.xml",                       label: "RSS" },
    jike:        { url: "https://okjk.co/your-id",         label: "即刻" },
    xiaoyuzhou:  { url: "https://xyz.fm/@your-id",         label: "小宇宙" },
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
    },
    {
      title: "更多项目即将上线",
      desc: "创业筹备中的项目，待启动后更新。",
      url: "",
      tags: ["coming soon"],
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

  // --- 笔记来源目录（相对于站点根目录） ---
  contentDir: "content",

  // --- 首页显示的笔记数 ---
  recentCount: 5,
};
