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

  // --- 项目作品 ---
  projects: [
    {
      title: "AI 速报",
      desc: "每日追踪 AI 行业动态，自动生成行业报告与趋势研判。",
      url: "",
      tags: ["AI", "每日更新"],
      icon: "bulb", // 封面图标: book/rocket/product/chart/code/bulb/default
    },
    {
      title: "公开第二大脑",
      desc: "个人知识外显站点，AI 辅助写作驱动。输出倒逼输入。",
      url: "",
      tags: ["个人项目", "AI 写作"],
      icon: "book",
    },
    {
      title: "更多 AI 项目即将上线",
      desc: "用 AI 做产品的探索，待启动后更新。",
      url: "",
      tags: ["coming soon"],
      icon: "rocket",
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

  // --- AI 工具箱（首页板块，按分类列出精选 AI 工具；参考 aigc.cn 导航站，挑选部分分类） ---
  aiTools: {
    enabled: true,
    categories: [
      { name: "智能对话", tools: [
        { name: "ChatGPT", desc: "OpenAI 通用对话与生产力助手", url: "https://chat.openai.com", tag: "海外" },
        { name: "Claude", desc: "Anthropic 长文本与代码强模型", url: "https://claude.ai", tag: "海外" },
        { name: "DeepSeek", desc: "国产开源推理模型，性价比极高", url: "https://www.deepseek.com", tag: "国产" },
        { name: "Kimi", desc: "长上下文对话与文档分析", url: "https://kimi.moonshot.cn", tag: "国产" },
        { name: "豆包", desc: "字节跳动多模态 AI 助手", url: "https://www.doubao.com", tag: "国产" },
      ]},
      { name: "图像生成", tools: [
        { name: "Midjourney", desc: "高质量 AI 绘画，社区驱动", url: "https://www.midjourney.com", tag: "海外" },
        { name: "即梦 AI", desc: "字节 AI 生图 / 生视频", url: "https://jimeng.jianying.com", tag: "国产" },
        { name: "Stable Diffusion", desc: "开源文生图，可本地部署", url: "https://stability.ai", tag: "开源" },
        { name: "可灵 AI", desc: "快手图像 / 视频生成", url: "https://klingai.com", tag: "国产" },
      ]},
      { name: "写作办公", tools: [
        { name: "通义千问", desc: "阿里 AI，PPT / 文档辅助", url: "https://tongyi.aliyun.com", tag: "国产" },
        { name: "文心一言", desc: "百度 AI 助手", url: "https://yiyan.baidu.com", tag: "国产" },
        { name: "Notion AI", desc: "笔记与文档智能写作", url: "https://www.notion.so", tag: "海外" },
        { name: "秘塔 AI 搜索", desc: "无广告 AI 搜索与写作辅助", url: "https://metaso.cn", tag: "国产" },
      ]},
      { name: "视频生成", tools: [
        { name: "Runway", desc: "AI 视频生成与编辑", url: "https://runwayml.com", tag: "海外" },
        { name: "可灵 AI", desc: "国产视频生成", url: "https://klingai.com", tag: "国产" },
        { name: "Sora", desc: "OpenAI 文生视频", url: "https://openai.com/sora", tag: "海外" },
        { name: "Pika", desc: "轻量 AI 视频生成", url: "https://pika.art", tag: "海外" },
      ]},
      { name: "编程开发", tools: [
        { name: "Cursor", desc: "AI 原生代码编辑器", url: "https://cursor.com", tag: "海外" },
        { name: "GitHub Copilot", desc: "IDE 内代码补全", url: "https://github.com/features/copilot", tag: "海外" },
        { name: "Trae", desc: "字节 AI IDE", url: "https://www.trae.ai", tag: "国产" },
        { name: "通义灵码", desc: "阿里智能编码助手", url: "https://tongyi.aliyun.com/lingma", tag: "国产" },
      ]},
      { name: "音乐语音", tools: [
        { name: "Suno", desc: "AI 音乐生成", url: "https://suno.com", tag: "海外" },
        { name: "ElevenLabs", desc: "AI 语音合成", url: "https://elevenlabs.io", tag: "海外" },
        { name: "腾讯智影", desc: "智能配音与数字人", url: "https://zenvideo.qq.com", tag: "国产" },
      ]},
    ]
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
