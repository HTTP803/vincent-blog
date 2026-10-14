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
      title: "风险监管系统",
      desc: "全国一体化在线监管平台的风险监管模块：风险预警模型生成、研判下发、处置跟踪与线索反馈全流程闭环。",
      url: "",
      tags: ["政务系统", "风险预警", "数据可视化"],
      icon: "chart",
      img: "assets/proj-risk-regulation.png",
      screens: ["assets/proj-risk-regulation.png"],
      status: "已上线",
      features: [
        "建设情况 / 运行成效 / 风险处置跟踪 / 风险信号概览四大板块一屏总览",
        "风险预警模型：模型生成 → 研判下发 → 核查反馈 → 线索有效率全链路量化",
        "多地区线索总数据表格 + 地图双视图，高风险分级一目了然",
      ],
    },
    {
      title: "隧道交接仓（三码核查）",
      desc: "血液制品三码核查系统：原始码 / 献血码 / 产品码红外把枪关联校验，待核与已核统计、批次生成一体化。",
      url: "",
      tags: ["医疗信息化", "扫码核查", "血液管理"],
      icon: "code",
      img: "assets/proj-tunnel-dock.png",
      screens: ["assets/proj-tunnel-dock.png"],
      status: "已上线",
      features: [
        "红外把枪扫描三码自动关联，不匹配即提示重试并高亮异常数据",
        "辐照红 / 洗涤红 / 0.5U 血小板等多品类待核 / 已核实时统计",
        "未全部核查提交时自动生成批次号进行关联，核查状态可追溯",
      ],
    },
    {
      title: "实验室检查小程序",
      desc: "面向实验室生物安全检查的微信小程序：十大检查项在线评价自查，佐证材料上传，检查结果实时生成。",
      url: "",
      tags: ["微信小程序", "实验室管理", "检查评价"],
      icon: "book",
      img: "assets/proj-lab-app.png",
      screens: ["assets/proj-lab-app.png"],
      status: "已上线",
      features: [
        "组织架构 / 设施设备 / 人员管理 / 菌(毒)种等十大检查模块",
        "逐项评价：不适用 / 不符合 / 符合，自查结果实时汇总",
        "佐证材料在线上传（营业执照等，多格式、小于 5MB）",
      ],
    },
    {
      title: "仓储系统（综合管理平台）",
      desc: "应急物资智慧仓储综合管理平台：智能仓储 + AGV 作业 + 环境监控 + 辅助决策，一屏快捷入口统一集成。",
      url: "",
      tags: ["智慧仓储", "AGV", "数据大屏"],
      icon: "rocket",
      img: "assets/proj-warehouse.jpg",
      screens: ["assets/proj-warehouse.jpg"],
      status: "已上线",
      features: [
        "疫病体系应急物资分类管理，多场景物资应急出库管理定制",
        "AGV「货到人」自动化搬运：上架、拣选、盘点全流程",
        "环境监控集成门禁 / 视频监控 / AGV 状态集中监看",
      ],
    },
    {
      title: "样本交接仓（RFID 盘点）",
      desc: "RFID 样本盘点测试工具：射频参数配置、批量扫描用例执行、盘点成功率与耗时统计。",
      url: "",
      tags: ["RFID", "物联网", "样本管理"],
      icon: "product",
      img: "assets/proj-sample-dock.png",
      screens: ["assets/proj-sample-dock.png"],
      status: "已上线",
      features: [
        "射频参数可配：功率 / Session / 天线选择 / RSSI / TID",
        "批量用例自动执行：扫描用时、盘点数量、成功率、超时全记录",
        "汇总统计：平均盘点数量 / 时间 / 准确率一键输出，支持本地保存",
      ],
    },
    {
      title: "结核样本自助机",
      desc: "结核样本自助投递终端触屏界面：扫码放管引导、温度 / 网络状态监控、剩余容量实时提示。",
      url: "",
      tags: ["自助终端", "医疗", "触屏交互"],
      icon: "bulb",
      img: "assets/proj-tb-kiosk.png",
      screens: ["assets/proj-tb-kiosk.png"],
      status: "已上线",
      features: [
        "放置区 / 扫码区分区引导动画，试管条码对准扫码区即可投递",
        "温度异常 / 网络状态常驻状态栏，异常即时可见",
        "剩余可放样本数量实时提示，避免满仓投递",
      ],
    },
    {
      title: "热合台测试",
      desc: "热合台设备测试系统完整交互设计：测试流程状态机、射频参数配置、用例结果与汇总统计。",
      url: "",
      tags: ["设备测试", "交互流程", "RFID"],
      icon: "default",
      img: "assets/proj-heat-seal.png",
      screens: ["assets/proj-heat-seal.png"],
      status: "已上线",
      features: [
        "结束测试 / 开始测试 / 暂停测试完整状态流转设计",
        "测试数据本地保存：文件名含时间戳，含射频参数与汇总结果",
        "工艺结果（扫描用时 / 盘点数量 / 成功率 / 超时）与 EPC TID 明细留痕",
      ],
    },
    {
      title: "便携式智能采集终端",
      desc: "支持 RFID / 一维码 / 二维码的便携数据采集终端（HC-MP-MT01）：安卓系统、5.2 寸高灵敏触屏，可定制开发 App，实时处理业务数据。",
      url: "",
      tags: ["RFID", "数据采集", "硬件终端"],
      icon: "code",
      img: "assets/proj-portable-collector.png",
      screens: ["assets/proj-portable-collector.png"],
      status: "已上线",
      features: [
        "三模采集：RFID（EPC C1 GEN2/ISO18000-6C，>200 标签/秒）+ 一维码 + 二维码",
        "安卓系统可定制 App，8000mAh 电池，支持手套 / 湿手操作",
        "4G/5G 双频 Wi-Fi、蓝牙 4.0、集成 GPS/北斗，全场景联网",
      ],
    },
    {
      title: "智能血液交接舱",
      desc: "血液批量交接专用硬件（HC-FD-RCBI）：不锈钢一体舱体，集成超高频交接舱体与笔记本电脑，血液数据实时处理。",
      url: "",
      tags: ["血液管理", "智能硬件", "RFID"],
      icon: "product",
      img: "assets/proj-blood-cabin.png",
      screens: ["assets/proj-blood-cabin.png"],
      status: "已上线",
      features: [
        "血液批量交接场景，适配空间狭小的血液采集方舱 / 采血车",
        "符合 EPCglobal UHF Class1 Gen2 / ISO 18000-6C，读取距离 30cm",
        "4G / Wi-Fi / 网口多通道通讯，-10℃~50℃ 宽温工作",
      ],
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
