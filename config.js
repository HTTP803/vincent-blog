// 站点配置 —— 改这里就行
const SITE_CONFIG = {
  title: "Vin驿 · 公开第二大脑",
  subtitle: "AI 驱动思考 · 把思考做成产品 · 公开第二大脑",
  author: "Vin驿",
  bio: "我是 Vincent，一个用 AI 做产品的探索者。这里聚焦 AI 工具、AI 产品与真实落地实践，不灌水、不装懂，只写踩过的坑与想通的事——信条：输出倒逼输入，思考即产品。",
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
    { emoji: "🤖", text: "每天跟踪 AI 前沿，写《AI 速报》沉淀行业变化与机会" },
    { emoji: "🛠", text: "用 AI 工作流与大模型搭建产品原型，验证零代码方案" },
    { emoji: "📝", text: "每周至少 1 篇公开笔记，记录 AI 与产品的实战思考" },
  ],

  // --- 项目作品（首页展示全部 + 独立「项目作品」页按状态筛选；status: 已上线 / 开发中 / 规划中） ---
  projects: [
    {
      title: "星云词汇",
      desc: "面向考研 / 四级 / 六级 / 高考的 3D 星空背词工具——把单词变成一片可探索的星空，按遗忘曲线排期，边学边点亮词星。",
      url: "https://word.vinjour.top/",
      tags: ["3D 星空", "考研/四六级/高考", "智能复习"],
      icon: "star", // 封面图标: book/rocket/product/chart/code/bulb/star/default
      status: "开发中",
      // 以下字段用于「项目作品」独立页的详情展示（参考高考背单词类产品的标准结构）
      features: [
        "3D 星空星图：每个单词是一颗星，背过的词点亮成词星，整片星图随进度生长",
        "四套词库：考研 / 四级 / 六级 / 高考一键切换，进度各自独立保留",
        "主动学习 + 智能复习：每日任务推进新词，按记忆曲线只推你快忘的词",
        "教学模块：单词不只背，还要懂怎么用、学得对",
        "进度可见：连续打卡、今日学习、待复习、已点亮词数一屏全掌握",
        "可下载星图：成就可视化，离线也能珍藏属于自己的星空",
      ],
      highlights: [
        "沉浸式记忆：3D 星空让背词告别枯燥，有进度有画面",
        "多场景一套搞定：考研 / 四级 / 六级 / 高考一站切换",
        "0 广告专注背词：界面干净，记忆不被干扰",
      ],
      screens: [
        "assets/xingyun-1.png", // 首页（3D 星空 + 4 套词库选择 + 4 主 tab）
        "assets/xingyun-2.png", // 教学模块（词库切换教程）
        "assets/xingyun-3.png", // 我的星图（点亮进度 + 下载星图）
      ],
    },
    {
      title: "AI 速报",
      desc: "每日追踪 AI 行业动态，自动生成行业报告与趋势研判。",
      url: "",
      tags: ["AI", "每日更新"],
      icon: "bulb",
      status: "已上线",
    },
    {
      title: "公开第二大脑",
      desc: "个人知识外显站点，AI 辅助写作驱动。输出倒逼输入。",
      url: "",
      tags: ["个人项目", "AI 写作"],
      icon: "book",
      status: "已上线",
    },
    {
      title: "更多 AI 项目即将上线",
      desc: "用 AI 做产品的探索，待启动后更新。",
      url: "",
      tags: ["coming soon"],
      icon: "rocket",
      status: "规划中",
    },
  ],

  // --- 技能 / 领域（AI 主导，产品能力作支撑） ---
  skills: [
    "AI 产品", "Prompt 工程", "AI 工作流", "大模型应用",
    "AI 写作", "零代码方案", "需求分析", "产品落地",
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

  // --- 每日一句（首页顶部随机展示的励志名言，可自由增删；text=内容，author=作者） ---
  quotes: [
    { text: "路漫漫其修远兮，吾将上下而求索。", author: "屈原" },
    { text: "不积跬步，无以至千里；不积小流，无以成江海。", author: "荀子" },
    { text: "种一棵树最好的时间是十年前，其次是现在。", author: "谚语" },
    { text: "Stay hungry, stay foolish.", author: "Steve Jobs" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "It does not matter how slowly you go as long as you do not stop.", author: "孔子" },
    { text: "成功不是终点，失败也并非末日，重要的是继续前行的勇气。", author: "丘吉尔" },
    { text: "所谓天才，不过是长久的耐心。", author: "布封" },
    { text: "你的时间有限，不要浪费在重复别人的人生上。", author: "Steve Jobs" },
    { text: "我们都是阴沟里的虫子，但总还是得有人仰望星空。", author: "刘慈欣《三体》" },
    { text: "最困难的时候，往往就是离成功最近的时候。", author: "佚名" },
    { text: "不要让别人的质疑，成为你放弃的理由。", author: "佚名" },
    { text: "凡墙皆是门。", author: "谚语" },
    { text: "你只管努力，剩下的交给时间。", author: "佚名" },
  ],

  // --- 笔记来源目录（相对于站点根目录） ---
  contentDir: "content",

  // --- 首页显示的笔记数 ---
  recentCount: 5,
};
