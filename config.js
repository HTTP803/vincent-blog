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
    top: ["ChatGPT","Claude","DeepSeek","Kimi","Midjourney","即梦 AI","Cursor","Suno"], // 首页只展示这几个最热门；其余在「AI工具」独立页
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

  // --- 技术字典（独立 view；多个分类可切换。结构：categories[].layers[].roles[].techs[]） ---
  techDict: {
    enabled: true,
    navLabel: "技术字典",
    categories: [
      {
        id: "internet",
        name: "互联网",
        intro: "给非技术同学看的「岗位 → 用了哪些技术」清单。每个技术配一句大白话解释，可按层级筛选、可搜技术名。",
        layers: [
          { name:"业务层", color:"amber", roles:[
            { name:"产品经理", tag:"定需求、排优先级", desc:"想清楚「做什么、为谁做、为什么做」，写成需求文档，协调各岗位推进。", techs:[
              {n:"Figma / 墨刀 / Axure", d:"画原型（产品草图），把想法变成可点的界面演示，用来对齐大家理解"},
              {n:"蓝湖 / 摹客", d:"把设计稿转成前端能直接用的尺寸、颜色标注"},
              {n:"飞书文档 / Notion / 语雀", d:"写需求文档、沉淀团队知识"},
              {n:"Jira / TAPD / 禅道", d:"管理需求和任务进度，常用看板（敏捷开发）"},
              {n:"SQL（基础）", d:"自己写几句查数，看用户趋势，不依赖数据同学"},
              {n:"问卷星 / 腾讯问卷", d:"做用户调研、收集反馈"},
              {n:"微信公众平台 / 小程序后台", d:"看自己产品的运营数据"},
              {n:"A/B 测试平台", d:"同一功能做两版放不同用户群，比哪个效果好"},
            ]},
            { name:"设计师（UI/UX）", tag:"定体验、出视觉", desc:"决定产品好不好用（UX）、好不好看（UI），把需求变成可视化界面。", techs:[
              {n:"Figma", d:"当下最主流的 UI 设计工具，画界面、做原型、团队实时协作"},
              {n:"Sketch", d:"Mac 端老牌设计工具（渐被 Figma 取代）"},
              {n:"Photoshop / 醒图", d:"修图、做 banner 和运营图"},
              {n:"Illustrator", d:"画 logo、图标（矢量，放大不糊）"},
              {n:"Principle", d:"做交互动效演示，展示按钮怎么过渡、页面怎么跳"},
              {n:"蓝湖 / 摹客", d:"设计交付平台，自动标注尺寸颜色给前端"},
              {n:"Ant Design / Material", d:"现成的设计规范，照着做省时又统一"},
            ]},
            { name:"运营增长", tag:"拉新、促活、变现", desc:"把做好的产品推出去、用起来、留下来、赚到钱；增长偏数据驱动放大。", techs:[
              {n:"公众号 / 视频号 / 抖音 / 小红书", d:"内容分发渠道，靠内容获客"},
              {n:"企业微信 / 社群工具", d:"私域运营，把用户加到微信反复触达"},
              {n:"巨量引擎 / 腾讯广告", d:"付费投放平台，花钱买精准流量"},
              {n:"神策 / Google Analytics / 友盟", d:"看用户行为、转化漏斗、留存"},
              {n:"小裂变 / 增长工具", d:"拼团、助力、分销等裂变活动工具"},
              {n:"Excel / SQL / BI", d:"自己拉数据看活动效果"},
              {n:"有赞 / 微店", d:"开线上小店，直接卖货变现"},
            ]},
          ]},
          { name:"研发层", color:"blue", roles:[
            { name:"前端工程师", tag:"用户看到的界面", desc:"把设计稿变成用户能看、能点的界面，并让它好看好用又流畅。", techs:[
              {n:"HTML", d:"网页的骨架，定义有哪些内容（标题、按钮、图片）"},
              {n:"CSS", d:"网页的皮肤，定义颜色、大小、布局、动画"},
              {n:"JavaScript", d:"让页面能交互（点击、弹窗、发请求）"},
              {n:"TypeScript", d:"更严格的 JS，提前拦 bug，中大型项目标配"},
              {n:"React", d:"主流界面框架（Meta 出品），像搭积木拼页面"},
              {n:"Vue", d:"国内流行界面框架，上手友好"},
              {n:"Vite / Webpack", d:"打包工具，把一堆代码合并压缩成浏览器能跑的"},
              {n:"npm", d:"下载别人写好的代码模块（像应用商店）"},
              {n:"Chrome DevTools", d:"浏览器自带调试器，看报错、测加载速度"},
              {n:"Git", d:"代码版本管理，记录每次改动、方便回退"},
            ]},
            { name:"后端工程师", tag:"服务器、数据库、接口", desc:"用户看不到但撑起一切的后台：存数据、算逻辑、给前端送数据。", techs:[
              {n:"Java / Spring", d:"企业级后台主力语言，稳、生态大"},
              {n:"Python / Django / FastAPI", d:"易上手，做后台和 AI 都方便"},
              {n:"Go（Golang）", d:"高性能语言，高并发服务（如抖音后台）首选"},
              {n:"Node.js", d:"用 JS 写后台，前后端统一语言"},
              {n:"PHP / Laravel", d:"老牌 Web 开发，中小站点常见"},
              {n:"MySQL / PostgreSQL", d:"最常用的关系型数据库，存用户表、订单表"},
              {n:"Redis", d:"超快的临时记忆库，常用来扛高并发、做缓存"},
              {n:"MongoDB", d:"存灵活的非结构化数据（如日志、评论）"},
              {n:"Docker", d:"把应用打包成标准箱子，到哪都能一键跑"},
              {n:"Linux", d:"服务器操作系统，必懂"},
              {n:"Git", d:"代码版本管理"},
            ]},
            { name:"移动端工程师", tag:"iOS / Android App", desc:"专门做手机 App，分苹果和安卓，以及一套代码两端跑的跨平台方案。", techs:[
              {n:"Swift", d:"开发苹果 iOS App 的官方语言"},
              {n:"Kotlin / Java", d:"开发安卓 App 的语言"},
              {n:"Flutter", d:"谷歌出品，一套代码同时出 iOS 和安卓"},
              {n:"React Native", d:"用前端技术做 App，复用前端人力"},
              {n:"Xcode", d:"iOS 开发环境（仅 Mac）"},
              {n:"Android Studio", d:"安卓开发环境"},
            ]},
            { name:"算法与 AI", tag:"推荐、搜索、大模型", desc:"用数据和模型给产品加「智能」：推荐你爱看的内容、搜索排序、AI 对话。", techs:[
              {n:"Python", d:"算法首选语言，库最全"},
              {n:"PyTorch / TensorFlow", d:"深度学习框架，训练神经网络"},
              {n:"scikit-learn", d:"传统机器学习库（分类、预测）"},
              {n:"Pandas / NumPy", d:"数据处理与分析基础库"},
              {n:"Jupyter", d:"写实验笔记、边写边跑代码"},
              {n:"Hugging Face / Transformers", d:"现成大模型（如 GPT 类）工具，直接调用"},
              {n:"Spark", d:"海量数据计算引擎"},
              {n:"SQL", d:"取训练数据"},
              {n:"Docker / GPU 云", d:"跑模型训练（吃算力）"},
            ]},
          ]},
          { name:"支撑层", color:"teal", roles:[
            { name:"测试 QA", tag:"找 bug、保质量", desc:"产品的质检员，上线前把 bug 揪出来，避免用户骂街、公司赔钱。", techs:[
              {n:"Postman", d:"测后端接口对不对、返回数据合不合理"},
              {n:"Jira / 禅道 / TAPD", d:"提 bug、跟踪修复进度"},
              {n:"Selenium / Playwright", d:"写脚本让电脑自动点界面测功能"},
              {n:"Appium", d:"自动测手机 App"},
              {n:"JMeter", d:"压测性能，看很多人同时用会不会崩"},
              {n:"Fiddler / Charles", d:"抓包，看前后端之间传了什么数据"},
              {n:"TestRail 等", d:"管理测试用例（提前写好的检查清单）"},
            ]},
            { name:"运维 / DevOps", tag:"上线、云服务、监控", desc:"让产品 7×24 稳定在线，把「开发→上线」自动化，又快又稳。", techs:[
              {n:"Linux", d:"服务器操作系统，必懂"},
              {n:"Docker", d:"把应用打包成标准箱子，随处能跑"},
              {n:"Kubernetes（K8s）", d:"管理成百上千个容器箱子的调度系统"},
              {n:"阿里云 / 腾讯云 / AWS", d:"租用云服务器，按需付费不买实体机"},
              {n:"Jenkins / GitLab CI", d:"自动化部署流水线（提交代码自动上线）"},
              {n:"Prometheus / Grafana", d:"监控服务器状态 + 可视化大屏，异常就报警"},
              {n:"Nginx", d:"反向代理、负载均衡，把流量分给多台服务器"},
              {n:"Terraform", d:"用代码管理服务器（基础设施即代码）"},
            ]},
            { name:"数据 / 数仓", tag:"埋点、报表、决策", desc:"把用户行为变成能看懂的数字，给产品和老板当眼睛。", techs:[
              {n:"SQL", d:"查数据的语言，必懂"},
              {n:"Hive / Spark", d:"处理海量数据"},
              {n:"Kafka", d:"实时数据流管道，把行为数据源源不断传走"},
              {n:"ClickHouse", d:"超快的分析数据库，亿级数据秒查"},
              {n:"Tableau / 帆软 / Metabase", d:"可视化报表（BI），做成实时大屏"},
              {n:"Python（pandas）", d:"数据清洗、分析"},
              {n:"Airflow", d:"定时自动跑数据任务（如每天算昨日报表）"},
            ]},
          ]},
        ]
      },
      {
        id: "ai",
        name: "AI",
        intro: "AI 不是单一技术，而是一套从模型、工程到产品的能力栈。这里按「基础与模型 / 技术与工程 / 应用与产品」三层，帮你快速建立 AI 领域的通识地图。",
        layers: [
          { name:"基础与模型", color:"blue", roles:[
            { name:"大模型 / 基座模型", tag:"模型", desc:"驱动一切 AI 能力的核心引擎。", techs:[
              {n:"Transformer", d:"当前大模型的基础架构，用「注意力机制」让模型一次性看清整段文字的关联。"},
              {n:"GPT", d:"OpenAI 提出的生成式预训练模型系列，擅长对话与生成。"},
              {n:"MoE 混合专家", d:"把模型拆成多个「专家」子网络，每次只激活少数几个，又快又省。"},
              {n:"开源模型", d:"Llama / Qwen / DeepSeek 等可自由下载部署的模型，免授权、可私有化。"},
              {n:"多模态", d:"模型同时理解文字、图片、音频、视频，而非只处理单一类型。"},
              {n:"Embedding 向量", d:"把文字/图片转成一串数字（向量），机器用「距离」衡量语义相似度。"}
            ]},
            { name:"算力与训练", tag:"训练", desc:"把原始数据炼成模型的能力。", techs:[
              {n:"GPU / 算力", d:"训练大模型的主力硬件，擅长并行计算，越多越快。"},
              {n:"预训练", d:"用海量数据先让模型「通识」地学会语言与世界知识。"},
              {n:"微调 SFT", d:"在预训练后用少量高质量数据，让模型学会特定任务或风格。"},
              {n:"RLHF 人类反馈", d:"用人的偏好给模型打分，引导它输出更符合人类期望的答案。"},
              {n:"LoRA 轻量微调", d:"只训练模型的一小部分参数，低成本适配新任务、不破坏原模型。"}
            ]}
          ]},
          { name:"技术与工程", color:"teal", roles:[
            { name:"Prompt 提示工程", tag:"Prompt", desc:"不会写代码也能「指挥」AI 的核心技能。", techs:[
              {n:"系统提示", d:"给 AI 设定的「人设」与规则，决定它整体的行为边界。"},
              {n:"Few-shot 示例", d:"在提问时给几个例子，让模型照着学，比纯文字指令更稳。"},
              {n:"思维链 CoT", d:"让模型「一步步想」再给答案，复杂推理任务准确率显著提升。"},
              {n:"角色设定", d:"让 AI 扮演专家（如产品经理/程序员），输出更对口。"}
            ]},
            { name:"RAG 检索增强", tag:"RAG", desc:"让 AI 回答「它没学过」的私有知识。", techs:[
              {n:"向量数据库", d:"专门存 Embedding 的数据库，支持按语义相似度快速检索。"},
              {n:"知识库检索", d:"用户提问时先去你的文档里找相关内容，再交给模型作答。"},
              {n:"重排序", d:"对检索到的一堆候选二次打分，把最相关的排到最前面。"}
            ]},
            { name:"智能体 Agent", tag:"Agent", desc:"能自己调用工具、完成多步任务的 AI。", techs:[
              {n:"Function Calling", d:"让模型决定「该调哪个函数/接口」并填好参数。"},
              {n:"ReAct 推理+行动", d:"模型先思考、再行动、看结果、再思考，循环直到完成任务。"},
              {n:"MCP 协议", d:"连接 AI 与外部工具/数据源的开放标准，像「USB 接口」一样即插即用。"},
              {n:"多智能体", d:"多个各司其职的 AI 协作完成复杂任务，如一个写、一个审。"}
            ]}
          ]},
          { name:"应用与产品", color:"amber", roles:[
            { name:"AI 应用产品", tag:"应用", desc:"落到用户手里的 AI 能力。", techs:[
              {n:"AI 对话助手", d:"如 ChatGPT，基于对话解决问答、写作、分析等通用任务。"},
              {n:"AI 写作/绘画", d:"按提示生成文章、配图、海报，把创意生产门槛打下来。"},
              {n:"AI 视频生成", d:"用文字或图片生成短视频，正在快速逼近实拍质感。"},
              {n:"AI 编程助手", d:"如 Copilot，补全代码、解释报错、生成函数，提升开发效率。"}
            ]},
            { name:"评测与对齐", tag:"安全", desc:"保证 AI 好用且可控。", techs:[
              {n:"Benchmark 基准", d:"用标准题库给模型打分，横向比较谁更强。"},
              {n:"幻觉", d:"模型「一本正经胡说」、编造不存在的事实，是落地最大风险之一。"},
              {n:"对齐 Alignment", d:"让 AI 的目标和行为符合人类价值观与意图。"},
              {n:"AI 安全", d:"防止越狱、提示注入、数据泄露等滥用风险。"}
            ]}
          ]}
        ]
      }
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
