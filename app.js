const questions = [
  {
    category: "综合分析",
    difficulty: "标准",
    source: "上海治理场景",
    text: "近年来，上海持续推进城市精细化管理，但也有人认为管理越精细，基层负担越重。对此你怎么看？",
    cues: ["观点明确", "辩证分析", "基层减负", "治理效能"],
    points: ["肯定精细化管理提升城市运行品质", "看到基层台账、考核、重复填报等压力", "提出数字化赋能、权责清晰、减负增效", "结合群众获得感收束"]
  },
  {
    category: "综合分析",
    difficulty: "标准",
    source: "公共服务",
    text: "有市民反映，一些线上政务服务入口多、流程多，年轻人觉得方便，老年人却不会用。你如何看待这一现象？",
    cues: ["数字鸿沟", "适老化", "公共服务", "一网通办"],
    points: ["数字政务方向值得肯定", "不能让技术便利变成服务门槛", "保留线下窗口和帮办代办", "优化界面、加强社区培训"]
  },
  {
    category: "组织管理",
    difficulty: "标准",
    source: "社区服务",
    text: "单位准备在社区开展一次垃圾分类宣传和督导活动，领导交给你负责，你会怎么组织？",
    cues: ["前期调研", "分工协同", "宣传督导", "效果评估"],
    points: ["摸清小区分类薄弱环节", "联动物业、居委、志愿者", "设置宣传、桶边指导、问题反馈", "用数据和回访评估成效"]
  },
  {
    category: "组织管理",
    difficulty: "进阶",
    source: "窗口单位",
    text: "你所在窗口单位要优化办事流程，领导要求你做一次群众满意度调研。你会如何开展？",
    cues: ["样本设计", "多渠道收集", "问题归因", "改进闭环"],
    points: ["明确调研对象和事项", "线上问卷、现场访谈、电话回访结合", "区分流程、态度、材料、等待时间问题", "形成清单并跟踪整改"]
  },
  {
    category: "应急应变",
    difficulty: "标准",
    source: "群众投诉",
    text: "你在服务窗口值班时，一位群众因为材料不全无法办理业务，情绪激动并在现场大声质问。你怎么办？",
    cues: ["稳定情绪", "解释政策", "替代方案", "现场秩序"],
    points: ["先安抚并请到相对安静区域", "核对材料和政策依据", "一次性告知补正清单", "必要时协调同事维持秩序"]
  },
  {
    category: "应急应变",
    difficulty: "进阶",
    source: "舆情处置",
    text: "社区便民服务活动现场突然有居民拍视频质疑工作人员态度差，并说要发到网上。你作为现场负责人怎么办？",
    cues: ["现场核实", "真诚沟通", "舆情意识", "后续改进"],
    points: ["快速了解事实并暂停争执", "向居民表达重视和歉意", "依法依规解决诉求", "复盘服务流程并向领导汇报"]
  },
  {
    category: "人际沟通",
    difficulty: "标准",
    source: "机关协作",
    text: "你和同事共同完成一项材料，同事总是拖延，导致整体进度受影响。你会怎么办？",
    cues: ["换位理解", "主动沟通", "明确节点", "承担补位"],
    points: ["先了解拖延原因", "共同拆分任务和时间表", "主动提供支持并及时提醒", "必要时向负责人客观反馈"]
  },
  {
    category: "岗位匹配",
    difficulty: "基础",
    source: "自我认知",
    text: "请结合你的经历，谈谈你为什么报考上海事业单位，以及你如何理解公共服务岗位的责任。",
    cues: ["动机真实", "岗位理解", "能力匹配", "长期成长"],
    points: ["表达服务公共事务的稳定动机", "理解岗位规范、细致、服务性", "结合经历证明沟通执行学习能力", "体现扎根和持续提升"]
  },
  {
    category: "情景模拟",
    difficulty: "标准",
    source: "沟通劝导",
    text: "社区老年居民不愿意使用线上预约系统，认为很麻烦。请你现场劝说并帮助他完成预约。",
    cues: ["称呼自然", "共情解释", "手把手帮助", "保留选择"],
    points: ["先理解老人顾虑", "用简单语言说明好处", "现场协助操作", "告知线下帮助渠道"]
  },
  {
    category: "上海特色",
    difficulty: "标准",
    source: "人民城市",
    text: "上海强调人民城市理念。作为事业单位工作人员，你认为应如何在基层服务中体现这一理念？",
    cues: ["人民城市", "需求导向", "精细服务", "闭环治理"],
    points: ["把群众需求作为工作起点", "提升窗口和社区服务温度", "依托数据和网格发现问题", "用反馈闭环检验效果"]
  }
];

const realQuestions = [
  {
    category: "综合分析",
    difficulty: "真题",
    source: "上海事业单位真题整理",
    text: "上海推进城市精细化管理，有人认为这提升了城市治理水平，也有人认为会增加基层负担。对此你怎么看？",
    cues: ["辩证分析", "基层减负", "精准治理", "群众感受"],
    points: ["肯定精细化管理的治理价值", "分析基层负担来源", "提出数字赋能、权责清晰、考核减负", "回到人民城市和服务成效"]
  },
  {
    category: "综合分析",
    difficulty: "真题",
    source: "上海事业单位真题整理",
    text: "现在很多政务服务都搬到了线上，但老年人等群体使用不便。对此你怎么看？",
    cues: ["数字政务", "适老化", "服务公平", "线下兜底"],
    points: ["肯定线上政务效率", "指出数字鸿沟", "保留窗口帮办代办", "优化流程并建立反馈机制"]
  },
  {
    category: "组织管理",
    difficulty: "真题",
    source: "上海事业单位真题整理",
    text: "单位要开展一次面向社区居民的政策宣传活动，领导交给你负责，你会如何组织？",
    cues: ["目标对象", "前期准备", "现场组织", "效果反馈"],
    points: ["明确宣传主题和居民需求", "制定方案并协调居委物业志愿者", "线上线下结合开展", "收集反馈形成长效宣传"]
  },
  {
    category: "应急应变",
    difficulty: "真题",
    source: "上海事业单位真题整理",
    text: "窗口办理业务时，群众因等待时间长情绪激动，质疑工作人员效率低。你在现场会怎么办？",
    cues: ["稳定情绪", "核实原因", "分流办理", "复盘改进"],
    points: ["安抚群众并维持秩序", "了解排队原因和系统情况", "协调增开窗口或分流引导", "总结高峰期预案"]
  },
  {
    category: "人际沟通",
    difficulty: "真题",
    source: "上海事业单位真题整理",
    text: "领导安排你和老同事共同完成一项工作，但老同事认为你经验不足，不愿意配合。你怎么办？",
    cues: ["尊重请教", "主动沟通", "工作为重", "复盘提升"],
    points: ["尊重老同事经验", "主动说明分工并请教", "以任务完成为目标补位", "总结提升合作能力"]
  },
  {
    category: "情景模拟",
    difficulty: "真题",
    source: "上海事业单位真题整理",
    text: "社区居民对老旧小区加装电梯意见不一致，一位居民情绪激动反对。请你现场劝说。",
    cues: ["身份称呼", "共情安抚", "解释政策", "协商方案"],
    points: ["先理解居民顾虑", "说明加装电梯的民生意义", "解释听证协商和权益保障", "邀请参与后续沟通"]
  },
  {
    category: "上海特色",
    difficulty: "真题",
    source: "上海事业单位真题整理",
    text: "上海提出建设人民城市。结合事业单位岗位，谈谈你如何理解并落实人民城市理念。",
    cues: ["人民城市", "群众需求", "基层服务", "闭环落实"],
    points: ["人民城市人民建人民享", "以群众需求为工作起点", "提升窗口和社区服务精细度", "通过反馈闭环改进工作"]
  },
  {
    category: "岗位匹配",
    difficulty: "真题",
    source: "上海事业单位真题整理",
    text: "请结合自身经历，谈谈你报考事业单位的优势和不足，以及入职后如何改进。",
    cues: ["自我认知", "岗位匹配", "优势具体", "改进可行"],
    points: ["优势要结合经历证明", "不足要真实但不致命", "改进措施要落到学习、沟通、执行", "体现岗位稳定性和服务意识"]
  },
  {
    category: "组织管理",
    difficulty: "真题",
    source: "上海事业单位真题整理",
    text: "单位要组织一次青年干部志愿服务活动，你作为负责人会如何安排？",
    cues: ["目标明确", "分工保障", "现场推进", "总结宣传"],
    points: ["明确服务对象和活动主题", "做好人员分工、物资和安全预案", "现场协调秩序和问题处理", "总结成效并形成常态化机制"]
  },
  {
    category: "应急应变",
    difficulty: "真题",
    source: "上海事业单位真题整理",
    text: "你正在接待群众咨询，系统突然故障，后面排队群众越来越多，你怎么办？",
    cues: ["说明情况", "分流安抚", "替代办理", "汇报修复"],
    points: ["第一时间说明系统故障并安抚", "协调同事维持秩序和分流", "能人工登记的先登记", "及时报修并复盘应急预案"]
  },
  {
    category: "人际沟通",
    difficulty: "真题",
    source: "上海事业单位真题整理",
    text: "新入职后，你发现领导安排的工作与你原本理解不一致，执行中出现偏差，你怎么办？",
    cues: ["主动担责", "及时汇报", "校准要求", "复盘提升"],
    points: ["先承认自身理解不到位", "及时向领导汇报偏差", "重新确认目标和标准", "复盘沟通方式避免再犯"]
  }
];

const extraQuestions = [
  {
    category: "综合分析",
    difficulty: "进阶",
    source: "上海治理场景",
    text: "有观点认为，基层治理既要精细化，也要避免过度留痕。对此你怎么看？",
    cues: ["辩证分析", "基层减负", "留痕管理", "治理实效"],
    points: ["肯定规范留痕对责任闭环的作用", "指出过度留痕会挤占服务群众时间", "提出精简台账、数据共享、结果导向考核", "回到基层治理实效"]
  },
  {
    category: "组织管理",
    difficulty: "进阶",
    source: "调查研究",
    text: "单位准备围绕“群众办事堵点”开展一次调研，领导让你牵头，你会怎么做？",
    cues: ["明确对象", "渠道多元", "问题归类", "整改闭环"],
    points: ["确定高频事项和服务对象", "结合窗口访谈、线上问卷、热线数据", "按材料、流程、态度、时间归类", "形成整改清单并跟踪反馈"]
  },
  {
    category: "应急应变",
    difficulty: "标准",
    source: "突发现场",
    text: "你负责的便民活动现场突然下雨，设备无法正常使用，群众已经到场等待，你会怎么办？",
    cues: ["稳住现场", "调整方案", "保障秩序", "后续补救"],
    points: ["先安抚群众并说明情况", "启用备用场地或人工办理方案", "做好分流排队和安全提醒", "活动后复盘设备和天气预案"]
  },
  {
    category: "人际沟通",
    difficulty: "进阶",
    source: "团队协作",
    text: "你提出的工作建议被同事当众否定，你感到委屈。你会如何处理？",
    cues: ["阳光心态", "复盘建议", "主动沟通", "工作为重"],
    points: ["先控制情绪不影响会议", "会后分析建议是否成熟", "主动请教同事意见", "完善方案并推动工作"]
  },
  {
    category: "岗位匹配",
    difficulty: "标准",
    source: "自我认知",
    text: "事业单位工作有时重复琐碎、压力也不小。请谈谈你如何保持责任心和服务热情。",
    cues: ["岗位认知", "责任意识", "自我调节", "长期成长"],
    points: ["理解公共服务岗位的基础性和连续性", "把小事做细做稳", "通过复盘学习提升效率", "用群众反馈增强职业价值感"]
  },
  {
    category: "岗位匹配",
    difficulty: "进阶",
    source: "能力匹配",
    text: "请结合一段经历，说明你具备事业单位岗位所需要的沟通、执行和学习能力。",
    cues: ["经历具体", "能力证明", "岗位迁移", "态度真诚"],
    points: ["选取具体经历而非泛泛表态", "说明沟通协调和执行闭环", "体现学习新政策新流程的能力", "落到未来岗位应用"]
  },
  {
    category: "情景模拟",
    difficulty: "进阶",
    source: "现场解释",
    text: "一位群众认为窗口要求补材料是在故意为难他，请你以工作人员身份现场解释。",
    cues: ["称呼自然", "先安抚", "解释依据", "给出帮助"],
    points: ["先接住情绪表达理解", "说明补材料是办理必要条件", "一次性列清补正材料", "提供帮办渠道和后续联系"]
  },
  {
    category: "上海特色",
    difficulty: "进阶",
    source: "一网通办",
    text: "上海推进“一网通办”，但部分群众仍然觉得办事材料多、流程不够清楚。你认为应该如何改进？",
    cues: ["数字政务", "流程优化", "群众体验", "反馈闭环"],
    points: ["肯定一网通办提升效率", "查找材料重复、提示不清、协同不足原因", "推动材料共享、一次告知、帮办代办", "用群众评价检验改革成效"]
  }
];

const importedQuestions = window.importedWordQuestions || [];
const importedRealQuestions = importedQuestions.filter((q) => q.difficulty === "真题");
const importedPracticeQuestions = importedQuestions.filter((q) => q.difficulty !== "真题");
const professionalQuestions = window.professionalQuestions || [];
const standardQuestions = questions.concat(extraQuestions, importedPracticeQuestions);
const trueQuestions = realQuestions.concat(importedRealQuestions);

const focusGuides = {
  完整作答: ["开头表态", "分析原因或影响", "提出措施", "总结落点"],
  审题破题: ["题目主体是谁", "核心矛盾是什么", "要解决的问题是什么", "上海场景如何结合"],
  答题框架: ["总分总", "先稳现场再解决问题", "前中后流程", "个人服从团队"],
  内容要点: ["政策依据", "群众感受", "执行路径", "评估反馈"],
  表达逻辑: ["第一、第二、第三", "先总后分", "因果衔接", "避免反复绕圈"],
  开头结尾: ["开头直入主题", "结尾回到岗位", "少喊口号", "体现服务意识"]
};

const categoryFrameworks = {
  综合分析: {
    name: "综合分析：表态-分析-对策-升华",
    steps: ["亮明态度或价值判断", "分析原因、影响或问题", "提出可执行对策", "回到群众感受或治理效能"],
    keywords: [
      ["认为", "看待", "体现", "必要", "辩证", "既要", "也要"],
      ["原因", "影响", "问题", "矛盾", "背景", "风险", "不足"],
      ["建议", "应该", "完善", "优化", "加强", "推动", "落实"],
      ["群众", "基层", "治理", "服务", "获得感", "上海"]
    ]
  },
  组织管理: {
    name: "组织管理：目标-准备-实施-总结",
    steps: ["明确目标对象和工作标准", "前期调研、方案、分工、资源", "中期推进、协同、应急调整", "后期复盘、宣传、长效机制"],
    keywords: [
      ["目标", "对象", "主题", "要求", "标准"],
      ["调研", "方案", "分工", "物资", "通知", "联系"],
      ["开展", "推进", "协调", "现场", "督导", "保障"],
      ["总结", "反馈", "复盘", "台账", "长效", "宣传"]
    ]
  },
  应急应变: {
    name: "应急应变：稳现场-查情况-解问题-报复盘",
    steps: ["先稳情绪和现场秩序", "快速核实事实、政策和诉求", "依法依规给出解决路径", "汇报领导并复盘改进"],
    keywords: [
      ["安抚", "冷静", "秩序", "现场", "情绪", "暂停"],
      ["了解", "核实", "询问", "查看", "原因", "情况"],
      ["解决", "补正", "协调", "解释", "政策", "依法", "依规"],
      ["汇报", "记录", "复盘", "改进", "反馈", "跟进"]
    ]
  },
  人际沟通: {
    name: "人际沟通：阳光心态-主动沟通-工作为重-总结提升",
    steps: ["先从自身和客观情况找原因", "主动沟通、换位理解", "以工作为重协同补位", "总结经验、改进关系和流程"],
    keywords: [
      ["自身", "反思", "理解", "客观", "换位"],
      ["沟通", "请教", "交流", "说明", "倾听"],
      ["工作", "配合", "协同", "补位", "进度", "任务"],
      ["总结", "改进", "提升", "以后", "机制"]
    ]
  },
  岗位匹配: {
    name: "岗位匹配：动机-认知-匹配-落实",
    steps: ["报考动机真实具体", "理解事业单位公共服务属性", "经历能力和岗位要求匹配", "表明入职后的行动方向"],
    keywords: [
      ["报考", "选择", "热爱", "初心", "服务"],
      ["事业单位", "公共", "责任", "规范", "群众"],
      ["经历", "能力", "沟通", "执行", "学习", "专业"],
      ["以后", "岗位", "踏实", "提升", "落实"]
    ]
  },
  情景模拟: {
    name: "情景模拟：身份称呼-共情-解释-帮助",
    steps: ["有明确称呼和现场身份感", "先共情安抚对方顾虑", "解释政策、原因或利害", "给出具体帮助和后续安排"],
    keywords: [
      ["阿姨", "叔叔", "您好", "同志", "我是"],
      ["理解", "别着急", "担心", "麻烦", "感受"],
      ["因为", "政策", "规定", "好处", "原因", "方便"],
      ["我帮您", "一步", "可以", "预约", "后续", "联系"]
    ]
  },
  上海特色: {
    name: "上海特色：人民城市-数字治理-精细服务-闭环成效",
    steps: ["扣住人民城市和群众需求", "结合一网通办、一网统管、社区治理等上海表达", "提出精细化、适老化、便利化服务", "用反馈闭环检验成效"],
    keywords: [
      ["人民城市", "群众", "需求", "获得感"],
      ["一网通办", "一网统管", "数字", "社区", "网格", "上海"],
      ["精细", "适老", "便利", "服务", "温度"],
      ["反馈", "闭环", "成效", "评估", "改进"]
    ]
  },
  专业题: {
    name: "财务专业题：定性-原则-流程-岗位落地",
    steps: ["先判断题目考察的财务管理本质", "说明制度原则、风险点或专业概念", "按事前、事中、事后或业务流程展开", "回到财务岗位的合规服务能力"],
    keywords: [
      ["预算", "财务", "会计", "资产", "内控", "采购", "付款"],
      ["制度", "原则", "风险", "合规", "审批", "权限", "凭证"],
      ["流程", "审核", "核对", "验收", "入账", "分析", "评价"],
      ["岗位", "服务", "业务", "底线", "规范", "效率", "闭环"]
    ]
  }
};

const focusRubrics = {
  完整作答: {
    name: "完整作答专项：按真实面试听感综合评分",
    scoreLabels: ["审题", "结构", "内容", "表达"],
    task: "按真实面试口径看方向、层次、内容深度和表达流畅度；不会因为关键词命中就给高分。"
  },
  审题破题: {
    name: "审题破题专项：主体-矛盾-任务-方向",
    scoreLabels: ["主体", "矛盾", "任务", "方向"],
    task: "只练开题前的判断：这题问什么、矛盾在哪里、该按哪类题处理、答题方向是什么。"
  },
  答题框架: {
    name: "答题框架专项：题型结构是否搭起来",
    scoreLabels: ["题型", "顺序", "层次", "完整"],
    task: "不追求内容多，重点看你是否按该题型的标准步骤组织。"
  },
  内容要点: {
    name: "内容要点专项：对象-依据-抓手-闭环",
    scoreLabels: ["对象", "依据", "抓手", "闭环"],
    task: "不按整题流畅度评价，重点看措施和分析是否具体，有没有工作抓手。"
  },
  表达逻辑: {
    name: "表达逻辑专项：分层-衔接-聚焦-少绕",
    scoreLabels: ["分层", "衔接", "聚焦", "简洁"],
    task: "重点看表达是否一层一层推进，是否有重复绕圈和口语填充。"
  },
  开头结尾: {
    name: "开头结尾专项：入题-定位-回扣-升华",
    scoreLabels: ["入题", "定位", "回扣", "自然"],
    task: "只评价开头和结尾是否能自然服务题目，不按中间主体展开打分。"
  }
};

const state = {
  mode: "mock",
  mockViewMode: localStorage.getItem("mockViewMode") || "listen",
  current: null,
  timerId: null,
  phase: "idle",
  remaining: 0,
  total: 0,
  answerStartedAt: null,
  answerSeconds: 0,
  mediaRecorder: null,
  chunks: [],
  recorderMimeType: "",
  recordingRunId: 0,
  lastAudioDataUrl: "",
  pendingReviewAfterStop: false,
  pendingReviewKind: "single",
  recognition: null,
  transcriptBuffer: "",
  finalTranscriptParts: [],
  mockQuestions: [],
  mockIndex: 0,
  mockThinkId: null,
  mockRevealed: false,
  mockTranscriptParts: ["", "", ""],
  reviewedTranscript: "",
  reviewedQuestionText: "",
  lastSavedRecordId: "",
  customQuestions: JSON.parse(localStorage.getItem("customQuestions") || "[]"),
  deletedQuestionTexts: JSON.parse(localStorage.getItem("deletedQuestionTexts") || "[]"),
  manualQuestionStatus: JSON.parse(localStorage.getItem("manualQuestionStatus") || "{}"),
  reviewDrafts: JSON.parse(localStorage.getItem("reviewDrafts") || "{}"),
  questionAttempts: JSON.parse(localStorage.getItem("questionAttempts") || "{}"),
  reviewSaveTimer: null,
  history: JSON.parse(localStorage.getItem("interviewHistory") || "[]")
};

const els = {
  fileModeNotice: document.querySelector("#fileModeNotice"),
  modeButtons: document.querySelectorAll("[data-mode]"),
  mockViewButtons: document.querySelectorAll("[data-mock-view]"),
  mockViewField: document.querySelector("#mockViewField"),
  categoryField: document.querySelector("#categoryField"),
  focusField: document.querySelector("#focusField"),
  category: document.querySelector("#categorySelect"),
  focus: document.querySelector("#focusSelect"),
  think: document.querySelector("#thinkInput"),
  answer: document.querySelector("#answerInput"),
  silent: document.querySelector("#silentToggle"),
  sessionTitle: document.querySelector("#sessionTitle"),
  topbar: document.querySelector(".topbar"),
  questionBand: document.querySelector(".question-band"),
  trainingGrid: document.querySelector(".training-grid"),
  questionBankPage: document.querySelector("#questionBankPage"),
  questionType: document.querySelector("#questionType"),
  questionDifficulty: document.querySelector("#questionDifficulty"),
  questionSource: document.querySelector("#questionSource"),
  questionText: document.querySelector("#questionText"),
  cueRow: document.querySelector("#cueRow"),
  currentPracticeStatus: document.querySelector("#currentPracticeStatus"),
  markCurrentDoneBtn: document.querySelector("#markCurrentDoneBtn"),
  markCurrentTodoBtn: document.querySelector("#markCurrentTodoBtn"),
  speakBtn: document.querySelector("#speakBtn"),
  newQuestionBtn: document.querySelector("#newQuestionBtn"),
  startBtn: document.querySelector("#startBtn"),
  answerNowBtn: document.querySelector("#answerNowBtn"),
  finishBtn: document.querySelector("#finishBtn"),
  resetBtn: document.querySelector("#resetBtn"),
  phaseLabel: document.querySelector("#phaseLabel"),
  timerDisplay: document.querySelector("#timerDisplay"),
  phaseProgress: document.querySelector("#phaseProgress"),
  recordDot: document.querySelector("#recordDot"),
  recordStatus: document.querySelector("#recordStatus"),
  micTestBtn: document.querySelector("#micTestBtn"),
  audio: document.querySelector("#audioPlayback"),
  transcript: document.querySelector("#transcriptInput"),
  attemptList: document.querySelector("#attemptList"),
  attemptCount: document.querySelector("#attemptCount"),
  saveReviewNotes: document.querySelector("#saveReviewNotesBtn"),
  notes: {
    review: document.querySelector("#noteReview")
  },
  reviewBtn: document.querySelector("#reviewBtn"),
  scoreTitle: document.querySelector("#scoreTitle"),
  chatgptPromptBtn: document.querySelector("#chatgptPromptBtn"),
  scores: {
    structure: document.querySelector("#structureScore"),
    content: document.querySelector("#contentScore"),
    expression: document.querySelector("#expressionScore"),
    time: document.querySelector("#timeScore")
  },
  scoreLabels: document.querySelectorAll(".score-strip span"),
  feedback: document.querySelector("#feedbackContent"),
  history: document.querySelector("#historyList"),
  mockHistory: document.querySelector("#mockHistoryList"),
  mockHistoryCount: document.querySelector("#mockHistoryCount"),
  clearHistory: document.querySelector("#clearHistoryBtn"),
  exportData: document.querySelector("#exportDataBtn"),
  importData: document.querySelector("#importDataBtn"),
  importDataInput: document.querySelector("#importDataInput"),
  skillList: document.querySelector("#skillList"),
  historyDialog: document.querySelector("#historyDialog"),
  historyDialogTitle: document.querySelector("#historyDialogTitle"),
  historyDialogContent: document.querySelector("#historyDialogContent"),
  closeHistoryDialogBtn: document.querySelector("#closeHistoryDialogBtn")
  ,
  questionBankBtn: document.querySelector("#questionBankBtn"),
  questionBankContent: document.querySelector("#questionBankContent"),
  questionBankCount: document.querySelector("#questionBankCount"),
  bankSearch: document.querySelector("#bankSearchInput"),
  bankMode: document.querySelector("#bankModeFilter"),
  bankCategory: document.querySelector("#bankCategoryFilter"),
  bankPractice: document.querySelector("#bankPracticeFilter"),
  bankScore: document.querySelector("#bankScoreFilter"),
  bankReset: document.querySelector("#bankResetBtn"),
  addQuestionForm: document.querySelector("#addQuestionForm"),
  newQuestionCategory: document.querySelector("#newQuestionCategory"),
  newQuestionSource: document.querySelector("#newQuestionSource"),
  newQuestionText: document.querySelector("#newQuestionText"),
  newQuestionCues: document.querySelector("#newQuestionCues")
};

if (location.protocol === "file:") {
  els.fileModeNotice.hidden = false;
  setTimeout(() => {
    location.href = "http://127.0.0.1:4199/";
  }, 900);
}

state.history = state.history.map((item, index) => ({
  id: item.id || `legacy-${index}-${Date.now()}`,
  mode: item.mode || "mock",
  difficulty: item.difficulty || "",
  source: item.source || "",
  cues: item.cues || [],
  transcript: item.transcript || "",
  scores: item.scores || {},
  labels: item.labels || ["审题", "结构", "内容", "表达"],
  strengths: item.strengths || [],
  issues: item.issues || [],
  checks: item.checks || [],
  audioSrc: item.audioSrc || "",
  reviewNotes: item.reviewNotes || emptyReviewNotes(),
  childQuestions: item.childQuestions || [],
  nextTask: item.nextTask || "",
  improved: item.improved || "",
  ...item
}));

function pickQuestion() {
  persistReviewNotes({ silent: true });
  const source = getActiveQuestionSource();
  if (state.mode === "mock") {
    prepareMockQuestions();
    state.current = state.mockQuestions[0] || standardQuestions[0];
    state.mockIndex = 0;
    state.mockRevealed = false;
    renderQuestion();
    renderMockTranscript();
    clearFeedback();
    return;
  }
  const pool = els.category.value === "all" ? source : source.filter((q) => q.category === els.category.value);
  const candidates = pool.length ? pool : source;
  const different = candidates.filter((q) => q.text !== state.current?.text);
  const available = different.length ? different : candidates;
  const unpracticed = available.filter((q) => !findLatestPractice(q.text));
  const preferred = unpracticed.length ? unpracticed : available;
  state.current = pickRandom(preferred) || standardQuestions[0];
  renderQuestion();
  loadReviewDraftForCurrent();
  clearFeedback();
}

function emptyReviewNotes() {
  return { review: "" };
}

function getReviewNotes() {
  return { review: els.notes.review.value.trim() };
}

function hasReviewNotes(notes = getReviewNotes()) {
  return Object.values(notes).some(Boolean);
}

function setReviewNotes(notes = emptyReviewNotes()) {
  els.notes.review.value = notes.review || [notes.framework, notes.opening, notes.body, notes.ending].filter(Boolean).join("\n\n");
}

function reviewDraftKey() {
  const text = state.current?.text || "";
  return `question|${text}`;
}

function attemptKey(questionText = state.current?.text || "") {
  return `question|${questionText}`;
}

function getCurrentAttempts() {
  return state.questionAttempts[attemptKey()] || [];
}

function getReviewDraft() {
  const key = reviewDraftKey();
  if (state.reviewDrafts[key]) return state.reviewDrafts[key];
  const text = state.current?.text || "";
  const legacyKey = Object.keys(state.reviewDrafts).find((item) => item.endsWith(`|${text}`));
  return legacyKey ? state.reviewDrafts[legacyKey] : emptyReviewNotes();
}

function loadReviewDraftForCurrent() {
  setReviewNotes(getReviewDraft());
}

function getActiveQuestionSource() {
  const source = state.mode === "professional" ? professionalQuestions : state.mode === "real" ? trueQuestions : standardQuestions.concat(state.customQuestions);
  return source.map(normalizeQuestion).filter((q) => !isQuestionDeleted(q.text));
}

function getAllQuestions() {
  return [
    ...standardQuestions.map((q, index) => ({ ...q, bank: "standard", bankIndex: index })),
    ...trueQuestions.map((q, index) => ({ ...q, bank: "real", bankIndex: index })),
    ...professionalQuestions.map((q, index) => ({ ...q, bank: "professional", bankIndex: index })),
    ...state.customQuestions.map((q, index) => ({ ...q, bank: "custom", bankIndex: index }))
  ].map(normalizeQuestion).filter((q) => !isQuestionDeleted(q.text));
}

function normalizeQuestion(q) {
  const categoryMap = {
    情景模拟: "人际沟通",
    上海特色: "综合分析"
  };
  return { ...q, category: categoryMap[q.category] || q.category };
}

function isQuestionDeleted(text) {
  return state.deletedQuestionTexts.includes(text);
}

function prepareMockQuestions() {
  const pool = trueQuestions.concat(standardQuestions).map(normalizeQuestion).filter((q) => !isQuestionDeleted(q.text));
  const pickFromCategory = (category) => pickPreferUnpracticed(pool.filter((q) => q.category === category));
  const thirdCategory = pickRandom(["组织管理", "应急应变", "人际沟通"]);
  state.mockQuestions = [
    pickFromCategory("综合分析"),
    pickFromCategory("岗位匹配"),
    pickFromCategory(thirdCategory)
  ].filter(Boolean);
}

function pickRandom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function pickPreferUnpracticed(items) {
  if (!items.length) return undefined;
  const unpracticed = items.filter((q) => !findLatestPractice(q.text));
  return pickRandom(unpracticed.length ? unpracticed : items);
}

function renderQuestion() {
  const q = state.current;
  els.sessionTitle.textContent = state.mode === "mock" ? `正式模拟 · 第 ${state.mockIndex + 1}/3 题` : `${modeName(state.mode)} · ${q.category}`;
  els.questionType.textContent = state.mode === "mock" ? "正式模拟" : q.category;
  els.questionDifficulty.textContent = state.mode === "mock" ? "三题套卷" : q.difficulty;
  els.questionSource.textContent = state.mode === "mock" ? `${state.mockViewMode === "read" ? "看题模式" : "听题模式"}｜12分钟3题` : q.source;
  els.questionText.innerHTML = formatQuestionText(q);
  els.questionText.hidden = false;
  document.querySelector(".question-band").classList.toggle("listening-mode", state.mode === "mock" && state.mockViewMode === "listen" && !state.mockRevealed);
  renderCurrentPracticeStatus();
  renderAttempts();
  if (state.mode === "mock" && state.mockViewMode === "listen" && !state.mockRevealed) {
    els.questionText.textContent = `正式模拟听题中：答题结束前不显示题面。当前第 ${state.mockIndex + 1}/3 题，请点击“朗读题目”或“开始模拟”听题作答。`;
    els.cueRow.innerHTML = `<span>三题套题</span><span>总限时12分钟</span><span>题面结束后显示</span>`;
    return;
  }
  const guide = state.mode === "professional" ? ["专业原则", "岗位落地"] : [];
  els.cueRow.innerHTML = [...(q.cues || []), ...guide.slice(0, 2)].map((item) => `<span>${escapeHtml(item)}</span>`).join("");
}

function formatQuestionText(q) {
  if (state.mode === "mock") {
    const list = state.mockQuestions.length ? state.mockQuestions : [q].filter(Boolean);
    return `<div class="mock-question-list">${list.map((item, index) => `
      <article class="mock-question-item">
        <strong>第${index + 1}题</strong>
        <p>${escapeHtml(item.text)}</p>
      </article>
    `).join("")}</div>`;
  }
  return `<p>${escapeHtml(q.text)}</p>`;
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderCurrentPracticeStatus() {
  if (!state.current) return;
  const latest = findLatestPractice(state.current.text);
  const manual = getManualQuestionStatus(state.current.text);
  const score = scoreForQuestion(latest, state.current.text);
  const status = manual?.status === "done" ? "已练习（手动）"
    : manual?.status === "todo" ? "未练习（手动）"
    : latest ? "已练习" : "未练习";
  const scoreText = score !== undefined && score !== "" ? `，上次 ${score} 分` : "";
  els.currentPracticeStatus.textContent = `练习状态：${status}${scoreText}`;
  els.markCurrentDoneBtn.disabled = manual?.status === "done";
  els.markCurrentTodoBtn.disabled = manual?.status === "todo";
}

async function speakQuestion() {
  if (!("speechSynthesis" in window)) {
    alert("当前浏览器不支持语音朗读，可以直接阅读题目训练。");
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(`请听题。${state.current.text}`);
  utterance.lang = "zh-CN";
  const voice = await getPreferredMaleVoice();
  if (voice) utterance.voice = voice;
  utterance.rate = 0.88;
  utterance.pitch = 0.82;
  window.speechSynthesis.speak(utterance);
}

async function getPreferredMaleVoice() {
  let voices = window.speechSynthesis.getVoices();
  if (!voices.length) {
    voices = await waitForVoices();
  }
  const zhVoices = voices.filter((voice) => voice.lang.toLowerCase().startsWith("zh"));
  const maleHints = ["male", "男", "yunjian", "yunxi", "yunyang", "kangkang", "liang", "bo", "hao", "danny", "alex", "sinji", "li-mu"];
  const femaleHints = ["female", "女", "ting-ting", "tingting", "xiaoxiao", "xiaoyi", "hanhan", "huihui", "meijia"];
  const savedVoice = localStorage.getItem("preferredMaleVoiceName");
  const saved = savedVoice && voices.find((voice) => voice.name === savedVoice);
  if (saved) return saved;
  const sortedZhVoices = [...zhVoices].sort((a, b) => Number(isLikelyFemaleVoice(a)) - Number(isLikelyFemaleVoice(b)));
  const male = sortedZhVoices.find((voice) => maleHints.some((hint) => voice.name.toLowerCase().includes(hint)));
  if (male) return male;
  return sortedZhVoices.find((voice) => !femaleHints.some((hint) => voice.name.toLowerCase().includes(hint))) || voices.find((voice) => maleHints.some((hint) => voice.name.toLowerCase().includes(hint))) || null;
}

function isLikelyFemaleVoice(voice) {
  const name = voice.name.toLowerCase();
  return ["female", "女", "ting-ting", "tingting", "xiaoxiao", "xiaoyi", "hanhan", "huihui", "meijia", "mei-jia", "li-na"].some((hint) => name.includes(hint));
}

function waitForVoices() {
  return new Promise((resolve) => {
    const done = () => resolve(window.speechSynthesis.getVoices());
    window.speechSynthesis.onvoiceschanged = done;
    setTimeout(done, 350);
  });
}

function setMode(mode) {
  persistReviewNotes({ allowEmpty: true });
  state.mode = mode;
  document.body.dataset.mode = mode;
  els.modeButtons.forEach((button) => button.classList.toggle("active", button.dataset.mode === mode));
  els.mockViewButtons.forEach((button) => button.classList.toggle("active", button.dataset.mockView === state.mockViewMode));
  const isBank = mode === "bank";
  els.topbar.hidden = isBank;
  els.questionBand.hidden = isBank;
  els.trainingGrid.hidden = isBank;
  els.questionBankPage.hidden = !isBank;
  els.mockViewField.hidden = mode !== "mock";
  els.categoryField.hidden = mode === "mock" || isBank;
  els.focusField.hidden = true;
  if (isBank) {
    resetSession();
    renderQuestionBank();
    return;
  }
  els.think.value = 60;
  els.answer.value = mode === "mock" ? 720 : 180;
  if (mode === "professional") els.category.value = "专业题";
  else if (mode === "practice" && els.category.value === "专业题") els.category.value = "all";
  els.category.disabled = mode === "mock" || mode === "professional";
  els.focus.value = "完整作答";
  els.focus.disabled = true;
  els.think.disabled = mode === "mock";
  els.answer.disabled = mode === "mock";
  els.newQuestionBtn.textContent = mode === "mock" ? "换一套" : "换一题";
  updateStartButtonText();
  resetSession();
  pickQuestion();
}

function setMockViewMode(viewMode) {
  persistReviewNotes({ allowEmpty: true });
  state.mockViewMode = viewMode;
  localStorage.setItem("mockViewMode", viewMode);
  els.mockViewButtons.forEach((button) => button.classList.toggle("active", button.dataset.mockView === viewMode));
  if (state.mode === "mock") {
    resetSession();
    pickQuestion();
  }
}

function updateStartButtonText() {
  els.startBtn.textContent = state.mode === "mock" ? "开始模拟" : state.mode === "real" ? "开始真题" : state.mode === "professional" ? "开始专业题" : "开始专项";
  els.answerNowBtn.textContent = "开始答题";
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60).toString().padStart(2, "0");
  const secs = Math.max(0, seconds % 60).toString().padStart(2, "0");
  return `${mins}:${secs}`;
}

function startTimer(phase, seconds) {
  clearInterval(state.timerId);
  state.phase = phase;
  state.remaining = seconds;
  state.total = seconds;
  updateTimer();
  state.timerId = setInterval(() => {
    state.remaining -= 1;
    updateTimer();
    if (state.remaining <= 0) {
      clearInterval(state.timerId);
      if (phase === "think") beginAnswer();
      if (phase === "answer") finishAnswer();
    }
  }, 1000);
}

function updateTimer() {
  const labels = { idle: "准备开始", think: "思考时间", answer: "答题时间", done: "本题完成", "mock-think": `第 ${state.mockIndex + 1}/3 题思考`, "mock-answer": `第 ${state.mockIndex + 1}/3 题答题`, "mock-read": `第 ${state.mockIndex + 1}/3 题读题` };
  els.phaseLabel.textContent = labels[state.phase];
  els.timerDisplay.textContent = formatTime(state.remaining);
  const used = state.total ? ((state.total - state.remaining) / state.total) * 100 : 0;
  els.phaseProgress.style.width = `${Math.min(100, Math.max(0, used))}%`;
  els.phaseProgress.style.background = state.phase === "answer" || state.phase === "mock-answer" ? "var(--red)" : "var(--blue)";
}

async function startSession() {
  if (state.mode === "mock") {
    await startMockSession();
    return;
  }
  resetSession(false);
  speakQuestion();
  startTimer("think", Number(els.think.value));
  els.finishBtn.disabled = true;
  els.recordStatus.textContent = "等待答题开始";
}

async function beginAnswer() {
  if (state.mode === "mock") {
    beginMockAnswer();
    return;
  }
  if (state.phase === "answer") return;
  clearInterval(state.timerId);
  state.answerStartedAt = Date.now();
  els.finishBtn.disabled = false;
  els.recordStatus.textContent = "正在录音";
  els.recordDot.classList.add("live");
  await startRecording();
  startRecognition();
  startTimer("answer", Number(els.answer.value));
}

async function startMockSession() {
  resetSession(false);
  prepareMockQuestions();
  state.mockIndex = 0;
  state.current = state.mockQuestions[0];
  state.mockRevealed = state.mockViewMode === "read";
  state.mockTranscriptParts = ["", "", ""];
  state.phase = state.mockViewMode === "read" ? "mock-answer" : "mock-read";
  state.remaining = 720;
  state.total = 720;
  els.finishBtn.disabled = state.mockViewMode !== "read";
  els.answerNowBtn.disabled = false;
  els.finishBtn.textContent = state.mockViewMode === "read" ? "结束模拟" : "结束答题";
  els.recordStatus.textContent = state.mockViewMode === "read" ? "看题模拟开始，计时和录音已启动" : "正式模拟开始，听题后进入思考";
  renderQuestion();
  loadReviewDraftForCurrent();
  renderMockTranscript();
  clearFeedback();
  await startRecording();
  startMockTotalTimer();
  if (state.mockViewMode === "read") {
    state.answerStartedAt = Date.now();
    els.recordDot.classList.add("live");
    startRecognition();
    updateTimer();
    return;
  }
  speakQuestion();
  state.phase = "mock-think";
  updateTimer();
  clearTimeout(state.mockThinkId);
  state.mockThinkId = setTimeout(beginMockAnswer, 60000);
}

function startMockTotalTimer() {
  clearInterval(state.timerId);
  state.timerId = setInterval(() => {
    state.remaining -= 1;
    updateTimer();
    if (state.remaining <= 0) {
      finishMockSession();
    }
  }, 1000);
}

function beginMockAnswer() {
  if (state.mode === "mock" && state.phase === "idle") {
    startMockSession();
    return;
  }
  if (state.mode !== "mock" || state.phase === "mock-answer" || state.phase === "done") return;
  clearTimeout(state.mockThinkId);
  state.phase = "mock-answer";
  state.answerStartedAt = state.answerStartedAt || Date.now();
  els.finishBtn.disabled = false;
  els.finishBtn.textContent = state.mockIndex === state.mockQuestions.length - 1 ? "结束模拟" : "结束本题";
  els.recordDot.classList.add("live");
  els.recordStatus.textContent = `第 ${state.mockIndex + 1}/3 题答题中`;
  renderMockTranscript();
  startRecognition();
  updateTimer();
}

function finishMockQuestion() {
  if (state.mode !== "mock") return;
  if (state.mockViewMode === "read") {
    finishMockSession();
    return;
  }
  if (state.recognition) state.recognition.stop();
  clearTimeout(state.mockThinkId);
  if (state.mockIndex < state.mockQuestions.length - 1 && state.remaining > 0) {
    state.mockIndex += 1;
    state.current = state.mockQuestions[state.mockIndex];
    state.phase = "mock-read";
    els.finishBtn.disabled = true;
    els.finishBtn.textContent = "结束答题";
    els.recordStatus.textContent = `第 ${state.mockIndex + 1}/3 题读题中`;
    renderQuestion();
    renderMockTranscript();
    speakQuestion();
    state.phase = "mock-think";
    updateTimer();
    state.mockThinkId = setTimeout(beginMockAnswer, 60000);
    return;
  }
  finishMockSession();
}

function finishMockSession() {
  if (state.phase === "done") return;
  clearInterval(state.timerId);
  clearTimeout(state.mockThinkId);
  state.phase = "done";
  state.answerSeconds = state.answerStartedAt ? Math.round((Date.now() - state.answerStartedAt) / 1000) : 720 - state.remaining;
  state.remaining = 0;
  state.mockRevealed = true;
  els.finishBtn.disabled = true;
  els.finishBtn.textContent = "结束答题";
  els.recordDot.classList.remove("live");
  els.recordStatus.textContent = `模拟完成，总用时 ${formatTime(state.answerSeconds)}`;
  if (state.recognition) state.recognition.stop();
  renderMockTranscript();
  state.current = buildMockSummaryQuestion();
  renderQuestion();
  updateTimer();
  if (state.mediaRecorder?.state === "recording") {
    state.pendingReviewAfterStop = true;
    state.pendingReviewKind = "mock";
    state.mediaRecorder.requestData?.();
    setTimeout(() => {
      if (state.mediaRecorder?.state === "recording") state.mediaRecorder.stop();
    }, 120);
    return;
  }
  reviewMockAnswer();
}

function renderMockTranscript(interim = "", interimIndex = state.mockIndex) {
  if (state.mode !== "mock") return;
  const labels = ["第一题", "第二题", "第三题"];
  els.transcript.value = labels.map((label, index) => {
    const currentInterim = index === interimIndex && interim ? `\n${interim}` : "";
    const text = `${state.mockTranscriptParts[index] || ""}${currentInterim}`.trim();
    return `${label}：${text}`;
  }).join("\n\n");
}

async function startRecording(options = {}) {
  const saveAttemptOnStop = options.saveAttemptOnStop !== false;
  if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) {
    const message = location.protocol === "file:"
      ? "文件模式不支持录音，请用 http://127.0.0.1:4199/ 打开"
      : "当前浏览器没有开放录音接口，建议用 Chrome/Safari 打开本地地址";
    els.recordStatus.textContent = message;
    return false;
  }
  try {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const runId = state.recordingRunId + 1;
    state.recordingRunId = runId;
    const chunks = [];
    state.chunks = chunks;
    state.recorderMimeType = getRecorderMimeType();
    const recorderOptions = state.recorderMimeType ? { mimeType: state.recorderMimeType } : undefined;
    state.mediaRecorder = new MediaRecorder(stream, recorderOptions);
    state.mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) chunks.push(event.data);
    };
    state.mediaRecorder.onstop = async () => {
      stream.getTracks().forEach((track) => track.stop());
      if (runId !== state.recordingRunId) return;
      if (chunks.length) {
        const type = state.recorderMimeType || chunks[0].type || "audio/mp4";
        const blob = new Blob(chunks, { type });
        els.audio.src = URL.createObjectURL(blob);
        state.lastAudioDataUrl = await blobToDataUrl(blob);
        els.audio.load();
        if (saveAttemptOnStop) saveAttempt(state.lastAudioDataUrl);
        els.recordStatus.textContent = `录音已保存，约 ${formatTime(state.answerSeconds || Math.max(1, Math.round(blob.size / 16000)))}`;
      } else {
        els.audio.removeAttribute("src");
        state.lastAudioDataUrl = "";
        els.audio.load();
        els.recordStatus.textContent = "录音没有生成声音片段，请重新测试麦克风后再开始。";
      }
      if (state.pendingReviewAfterStop) {
        state.pendingReviewAfterStop = false;
        if (state.pendingReviewKind === "mock") reviewMockAnswer();
        else reviewAnswer();
      }
    };
    state.mediaRecorder.start(250);
    els.recordStatus.textContent = "录音中";
    return true;
  } catch (error) {
    els.recordStatus.textContent = micErrorMessage(error);
    return false;
  }
}

function blobToDataUrl(blob) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result || "");
    reader.onerror = () => resolve("");
    reader.readAsDataURL(blob);
  });
}

function saveAttempt(audioSrc = state.lastAudioDataUrl || "") {
  if (!state.current) return;
  const key = attemptKey();
  const attempts = state.questionAttempts[key] || [];
  const transcript = paragraphizeTranscript(els.transcript.value.trim());
  if (transcript) els.transcript.value = transcript;
  const item = {
    id: `attempt-${Date.now()}`,
    name: `${attempts.length + 1}`,
    time: new Date().toLocaleString("zh-CN", { month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" }),
    audioSrc,
    transcript,
    seconds: state.answerSeconds || 0
  };
  state.questionAttempts[key] = [...attempts, item];
  localStorage.setItem("questionAttempts", JSON.stringify(state.questionAttempts));
  renderAttempts();
}

function deleteAttempt(id) {
  const key = attemptKey();
  const attempts = (state.questionAttempts[key] || []).filter((item) => item.id !== id);
  state.questionAttempts[key] = attempts.map((item, index) => ({ ...item, name: `${index + 1}` }));
  localStorage.setItem("questionAttempts", JSON.stringify(state.questionAttempts));
  renderAttempts();
}

function renderAttempts() {
  if (!els.attemptList) return;
  const attempts = getCurrentAttempts();
  els.attemptCount.textContent = attempts.length ? `共 ${attempts.length} 次` : "暂无记录";
  els.attemptList.innerHTML = attempts.map((item) => `
    <article class="attempt-item">
      <div class="attempt-head">
        <strong>第 ${item.name} 次</strong>
        <span>${item.time}${item.seconds ? ` · ${formatTime(item.seconds)}` : ""}</span>
        <button class="ghost delete-attempt-btn" type="button" data-attempt-id="${item.id}">删除</button>
      </div>
      ${item.audioSrc ? `<audio controls src="${item.audioSrc}"></audio>` : `<p class="empty-audio">这次没有保存到录音。</p>`}
      <p class="readonly-text">${item.transcript || "无文字稿"}</p>
    </article>
  `).join("") || `<div class="detail-block"><h3>还没有作答记录</h3><p>每次结束答题后，会在这里保存对应录音和文字稿。</p></div>`;
}

function getRecorderMimeType() {
  if (!window.MediaRecorder?.isTypeSupported) return "";
  const candidates = [
    "audio/mp4",
    "audio/webm;codecs=opus",
    "audio/webm",
    "audio/ogg;codecs=opus"
  ];
  return candidates.find((type) => MediaRecorder.isTypeSupported(type)) || "";
}

async function testMicrophone() {
  els.recordStatus.textContent = "正在请求麦克风权限...";
  const ok = await startRecording({ saveAttemptOnStop: false });
  if (ok) {
    els.recordStatus.textContent = "麦克风已打开，可以开始正式训练";
    els.recordDot.classList.add("live");
    setTimeout(() => {
      state.mediaRecorder?.requestData?.();
      if (state.mediaRecorder?.state === "recording") state.mediaRecorder.stop();
      els.recordDot.classList.remove("live");
    }, 1500);
  }
}

function micErrorMessage(error) {
  const name = error?.name || "UnknownError";
  if (name === "NotAllowedError" || name === "SecurityError") {
    return `麦克风被拒绝：${name}。请在 macOS 隐私设置和浏览器地址栏权限里允许麦克风。`;
  }
  if (name === "NotFoundError" || name === "DevicesNotFoundError") {
    return `没有找到麦克风设备：${name}。请检查系统输入设备。`;
  }
  if (name === "NotReadableError" || name === "TrackStartError") {
    return `麦克风被其他应用占用或系统拒绝：${name}。请关闭占用麦克风的软件后重试。`;
  }
  return `麦克风无法打开：${name}${error?.message ? `，${error.message}` : ""}`;
}

function startRecognition() {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SpeechRecognition) return;
  const recognitionIndex = state.mockIndex;
  state.finalTranscriptParts = state.mode === "mock"
    ? (state.mockTranscriptParts[recognitionIndex] ? [state.mockTranscriptParts[recognitionIndex]] : [])
    : (els.transcript.value.trim() ? [els.transcript.value.trim()] : []);
  state.recognition = new SpeechRecognition();
  state.recognition.lang = "zh-CN";
  state.recognition.continuous = true;
  state.recognition.interimResults = true;
  state.recognition.onresult = (event) => {
    let interim = "";
    for (let i = event.resultIndex; i < event.results.length; i += 1) {
      const text = event.results[i][0].transcript;
      if (event.results[i].isFinal) state.finalTranscriptParts.push(text.trim());
      else interim += text;
    }
    const finalText = dedupeTranscript(state.finalTranscriptParts.join("，"));
    if (state.mode === "mock") {
      state.mockTranscriptParts[recognitionIndex] = finalText;
      renderMockTranscript(interim, recognitionIndex);
    } else {
      els.transcript.value = `${finalText}${interim ? `\n${interim}` : ""}`;
    }
  };
  try {
    state.recognition.start();
  } catch (error) {
    // Recognition may already be active in some browsers.
  }
}

function finishAnswer() {
  if (state.mode === "mock") {
    finishMockQuestion();
    return;
  }
  clearInterval(state.timerId);
  state.phase = "done";
  state.remaining = 0;
  state.answerSeconds = state.answerStartedAt ? Math.round((Date.now() - state.answerStartedAt) / 1000) : 0;
  updateTimer();
  els.finishBtn.disabled = true;
  els.recordDot.classList.remove("live");
  els.recordStatus.textContent = state.answerSeconds ? `录音完成，答题 ${formatTime(state.answerSeconds)}` : "已结束";
  if (state.recognition) state.recognition.stop();
  if (state.mediaRecorder?.state === "recording") {
    state.pendingReviewAfterStop = true;
    state.pendingReviewKind = "single";
    state.mediaRecorder.requestData?.();
    setTimeout(() => {
      if (state.mediaRecorder?.state === "recording") state.mediaRecorder.stop();
    }, 120);
    return;
  }
  reviewAnswer();
}

function resetSession(clearTranscript = true) {
  clearInterval(state.timerId);
  clearTimeout(state.mockThinkId);
  window.speechSynthesis?.cancel();
  state.recordingRunId += 1;
  if (state.mediaRecorder?.state === "recording") state.mediaRecorder.stop();
  if (state.recognition) state.recognition.stop();
  state.phase = "idle";
  state.remaining = 0;
  state.total = 0;
  state.answerStartedAt = null;
  state.answerSeconds = 0;
  state.pendingReviewAfterStop = false;
  state.pendingReviewKind = "single";
  state.lastAudioDataUrl = "";
  state.mockThinkId = null;
  state.mockRevealed = state.mode !== "mock";
  state.mockTranscriptParts = ["", "", ""];
  els.finishBtn.disabled = true;
  els.finishBtn.textContent = "结束答题";
  els.answerNowBtn.disabled = false;
  els.recordDot.classList.remove("live");
  els.recordStatus.textContent = "未录音";
  els.audio.removeAttribute("src");
  if (clearTranscript) els.transcript.value = "";
  else if (state.mode === "mock") renderMockTranscript();
  loadReviewDraftForCurrent();
  state.lastSavedRecordId = "";
  updateTimer();
}

function reviewAnswer() {
  const text = paragraphizeTranscript(els.transcript.value.trim());
  els.transcript.value = text;
  const q = state.current;
  const analysis = analyze(text, q);
  state.reviewedTranscript = text;
  state.reviewedQuestionText = q.text;
  renderFeedback(analysis);
  saveHistory(analysis);
  renderSkills();
}

function reviewMockAnswer() {
  const text = paragraphizeTranscript(els.transcript.value.trim() || ["第一题", "第二题", "第三题"].map((label, index) => `${label}：${state.mockTranscriptParts[index] || ""}`).join("\n\n"));
  els.transcript.value = text;
  state.current = buildMockSummaryQuestion();
  const previousFocus = els.focus.value;
  els.focus.value = "完整作答";
  const analysis = analyze(text, state.current);
  state.reviewedTranscript = text;
  state.reviewedQuestionText = state.current.text;
  analysis.rubric = {
    name: "正式模拟三题套卷：听题理解、结构表达、内容质量、时间控制",
    scoreLabels: ["审题", "结构", "内容", "表达"],
    task: "按上海事业单位正式模拟口径，综合看三道题是否覆盖题型要求、是否能在12分钟内稳定表达。"
  };
  analysis.nextTask = "下一轮正式模拟：仍按三题套卷练，重点把每题开头压到15秒内，先亮明作答方向再展开。";
  renderFeedback(analysis);
  saveHistory(analysis);
  renderSkills();
  els.focus.value = previousFocus;
}

function buildMockSummaryQuestion() {
  const list = state.mockQuestions.length ? state.mockQuestions : [state.current].filter(Boolean);
  return {
    category: "正式模拟",
    difficulty: "三题套卷",
    source: `${state.mockViewMode === "read" ? "看题模式" : "听题模式"}｜总限时12分钟`,
    text: list.map((q, index) => `第${index + 1}题：${q.text}`).join("\n"),
    cues: ["综合分析", "岗位认知", "组织/应急/人际"],
    points: list.flatMap((q) => q.points || []).slice(0, 8)
  };
}

function analyze(text, q) {
  const length = text.replace(/\s/g, "").length;
  const targetSeconds = Number(els.answer.value);
  const actualSeconds = state.answerSeconds || Math.max(45, Math.round(length / 3.2));
  const timeRatio = actualSeconds / targetSeconds;
  const focus = els.focus.value;
  const categoryFramework = categoryFrameworks[q.category] || categoryFrameworks.综合分析;
  const rubric = focusRubrics[focus] || focusRubrics.完整作答;
  const checks = buildFocusChecks(text, q, focus, categoryFramework);
  const subScores = checks.map((check) => scoreCheck(check, text));
  const total = Math.round(subScores.reduce((sum, score) => sum + score, 0) / subScores.length);

  return {
    total,
    scores: {
      structure: subScores[0] || total,
      content: subScores[1] || total,
      expression: subScores[2] || total,
      time: subScores[3] || total
    },
    rubric,
    categoryFramework,
    checks,
    focus,
    length,
    actualSeconds,
    issues: buildFocusIssues(checks, { text, length, timeRatio, focus, q, categoryFramework }),
    strengths: buildFocusStrengths(checks, { text, focus, q }),
    nextTask: buildNextTask(checks),
    improved: buildImprovedAnswer(q, focus, categoryFramework, text)
  };
}

function scoreCheck(check, text) {
  if (!text) return 35;
  if (typeof check.score === "number") return check.score;
  if (!check.passed) return 56;
  const detail = Math.min(8, Math.floor(text.replace(/\s/g, "").length / 80));
  return clamp(80 + detail - repeatedPhrases(text), 70, 92);
}

function repeatedPhrases(text) {
  const phrases = ["然后", "就是", "这个", "那个", "我觉得", "的话"];
  return phrases.reduce((sum, phrase) => {
    const count = text.split(phrase).length - 1;
    return sum + Math.max(0, count - 2);
  }, 0);
}

function dedupeTranscript(text) {
  if (!text) return "";
  const cleaned = text
    .replace(/各位考官考生开始答题/g, "")
    .replace(/考生开始答题/g, "")
    .replace(/开始答题/g, "");
  const normalized = cleaned.replace(/\s+/g, "").replace(/[，。；、]/g, "，");
  const chunks = normalized.split("，").map((item) => item.trim()).filter(Boolean);
  const result = [];
  chunks.forEach((chunk) => {
    const previous = result[result.length - 1] || "";
    const existed = result.some((item) => item === chunk || (chunk.length > 14 && item.includes(chunk)));
    if (!existed && chunk !== previous) result.push(chunk);
  });
  const compact = result.join("，");
  return compact.replace(/，/g, "，").replace(/，$/, "");
}

function paragraphizeTranscript(text) {
  const clean = dedupeTranscript(text).replace(/\s+/g, "");
  if (!clean) return "";
  if (/第[一二三四五六七八九十\d]+题[：:]/.test(clean)) {
    return clean.replace(/(第[一二三四五六七八九十\d]+题[：:])/g, "\n\n$1").trim();
  }
  const sentences = clean
    .replace(/(首先|第一[，、]?|其次|第二[，、]?|再次|第三[，、]?|最后|总之|因此|对此)/g, "\n\n$1")
    .split(/\n{2,}/)
    .map((part) => part.trim())
    .filter(Boolean);
  if (sentences.length > 1) return sentences.join("\n\n");
  return clean.replace(/([。！？；])(?=.{30,})/g, "$1\n\n").trim();
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function buildFocusChecks(text, q, focus, categoryFramework) {
  const questionWords = q.text;
  const issueWords = q.cues.concat(q.points).join("，");
  const has = (words) => words.some((word) => text.includes(word));
  const hasQuestionEcho = q.cues.some((word) => text.includes(word)) || q.points.some((point) => point.slice(0, 4).split("").some((char) => text.includes(char)));
  const structureWords = ["第一", "第二", "第三", "首先", "其次", "再次", "最后", "一方面", "另一方面"];
  const executionWords = ["调研", "方案", "清单", "台账", "节点", "责任", "协同", "反馈", "闭环", "复盘", "跟进", "落实", "马上", "具体"];
  const openerWords = ["各位考官", "我认为", "我觉得", "这道题", "核心", "关键", "体现"];
  const endingWords = ["最后", "总之", "以上", "岗位", "工作中", "群众", "服务", "获得感", "落实"];

  if (focus === "审题破题") {
    return [
      makeCheck("主体识别", has(["群众", "基层", "社区", "单位", "领导", "同事", "居民", "窗口", "工作人员"]), "说清题中主要对象，不要直接空泛表态。"),
      makeCheck("矛盾提炼", has(["矛盾", "问题", "难点", "堵点", "冲突", "不足", "风险", "顾虑"]) || hasQuestionEcho, "点出题干里的核心矛盾或关键问题。"),
      makeCheck("任务判断", has(["怎么看", "怎么办", "组织", "沟通", "应急", "处理", "劝说", "调研", "活动"]), "判断这是分析题、组织题、应急题还是沟通题。"),
      makeCheck("作答方向", has(["要", "应该", "重点", "围绕", "从", "既要", "也要", "落到"]), "给出后续作答方向，而不是只复述题目。")
    ];
  }

  if (focus === "完整作答") {
    if (q.category === "专业题") return buildProfessionalChecks(text, q);
    return buildCompleteAnswerChecks(text, q, hasQuestionEcho, structureWords);
  }

  if (focus === "答题框架") {
    return categoryFramework.steps.map((step, index) => {
      const keywordHit = has(categoryFramework.keywords[index] || []);
      const structureHit = index === 0 ? has(openerWords) : index < 3 ? has(structureWords) : has(endingWords);
      return makeCheck(step, keywordHit || structureHit, `按“${categoryFramework.name}”补上：${step}。`);
    });
  }

  if (focus === "内容要点") {
    return [
      makeCheck("对象诉求", has(["群众", "居民", "老人", "基层", "单位", "同事", "企业", "服务对象"]), "先说明服务对象或利益相关方是谁、诉求是什么。"),
      makeCheck("依据原则", has(["政策", "规定", "原则", "依法", "依规", "公平", "规范", "人民城市", "公共服务"]), "补一句依据或原则，让内容有机关工作支点。"),
      makeCheck("执行抓手", has(executionWords), "把措施落到调研、清单、分工、节点、协同、台账等抓手。"),
      makeCheck("闭环反馈", has(["反馈", "跟进", "复盘", "评估", "长效", "成效", "回访", "改进", "闭环"]), "结尾或措施后补反馈闭环，体现机关工作十八法里的落实意识。")
    ];
  }

  if (focus === "表达逻辑") {
    const structureCount = structureWords.filter((word) => text.includes(word)).length;
    return [
      makeCheck("分层清楚", structureCount >= 2, "至少用两个层次词，让考官听得出结构。"),
      makeCheck("因果衔接", has(["因为", "所以", "因此", "同时", "此外", "针对", "基于", "为此"]), "补因果和转折衔接，避免要点堆在一起。"),
      makeCheck("紧扣题干", hasQuestionEcho || has(issueWords.split("，")), "每一层都要回到题干关键词，不要泛泛谈服务。"),
      makeCheck("少口语重复", repeatedPhrases(text) <= 1, "减少“然后、就是、这个、的话”等口头填充。")
    ];
  }

  return [
    makeCheck("开头入题", has(openerWords) && text.slice(0, 80).length > 15, "开头用一句话点明判断，不要绕太远。"),
    makeCheck("定位矛盾", text.slice(0, 140).includes("核心") || text.slice(0, 140).includes("关键") || hasQuestionEcho, "开头要定位题目核心矛盾或价值判断。"),
    makeCheck("结尾回扣", has(endingWords), "结尾回到岗位、群众、服务或治理成效。"),
    makeCheck("自然不空", !has(["高度重视", "不忘初心", "牢记使命"]) || text.includes("具体"), "少用空泛口号，结尾最好带具体工作落点。")
  ];
}

function makeCheck(label, passed, advice, score) {
  return { label, passed, advice, score };
}

function buildCompleteAnswerChecks(text, q, hasQuestionEcho, structureWords) {
  const layerCount = structureWords.filter((word) => text.includes(word)).length;
  const hasBothSides = hasAny(text, ["精细", "便民", "便利", "价值", "意义"]) && hasAny(text, ["负担", "压力", "不便", "不会用", "问题", "但是"]);
  const hasExample = hasAny(text, ["比如", "例如", "电梯", "小区", "社区", "窗口"]);
  const hasMeasure = hasAny(text, ["评估", "明确", "优化", "减负", "数字", "赋能", "考核", "清单", "反馈", "闭环", "人手", "协同"]);
  const hasConcreteMeasure = ["评估", "明确", "优化", "减负", "数字", "赋能", "考核", "反馈", "闭环"].filter((word) => text.includes(word)).length >= 2;
  const filler = repeatedPhrases(text);
  const longSentencePenalty = averageSentenceLength(text) > 95 ? 8 : averageSentenceLength(text) > 70 ? 5 : 0;

  const auditScore = clamp(60 + (hasQuestionEcho ? 8 : 0) + (hasBothSides ? 8 : 0) + (hasExample ? 3 : 0), 45, 82);
  const structureScore = clamp(58 + layerCount * 4 + (hasBothSides ? 4 : 0) + (hasMeasure ? 4 : 0) - (layerCount < 2 ? 6 : 0), 42, 78);
  const contentScore = clamp(56 + (hasExample ? 6 : 0) + (hasMeasure ? 7 : 0) + (hasConcreteMeasure ? 5 : 0) + (hasQuestionEcho ? 4 : 0), 42, 80);
  const expressionScore = clamp(72 - filler * 4 - longSentencePenalty + Math.min(4, layerCount), 40, 78);

  return [
    makeCheck("审题立意", auditScore >= 70, "方向要同时回应题干两面：精细化管理的价值，以及基层负担加重的风险。", auditScore),
    makeCheck("逻辑结构", structureScore >= 72, "建议用“肯定意义-指出问题-分析原因-提出对策”分层，避免一整段推进。", structureScore),
    makeCheck("内容深度", contentScore >= 72, "对策要展开到数字赋能、考核减负、资源保障、反馈闭环等具体抓手。", contentScore),
    makeCheck("表达流畅", expressionScore >= 72, "句子偏长时要断句，减少口语停顿和转写误词，让考官更容易抓重点。", expressionScore)
  ];
}

function buildProfessionalChecks(text, q) {
  const structureWords = ["第一", "第二", "第三", "首先", "其次", "最后", "一方面", "另一方面"];
  const layerCount = structureWords.filter((word) => text.includes(word)).length;
  const hasConcept = hasAny(text, q.cues || []) || hasAny(text, ["预算", "财务", "会计", "资产", "内控", "采购", "付款", "合同"]);
  const hasPrinciple = hasAny(text, ["制度", "合规", "风险", "审批", "权限", "凭证", "底线", "规范"]);
  const hasProcess = hasAny(text, ["流程", "审核", "核对", "验收", "入账", "分析", "评价", "闭环", "事前", "事中", "事后"]);
  const hasRole = hasAny(text, ["岗位", "财务人员", "业务部门", "领导", "服务", "提醒", "请示", "留痕"]);
  return [
    makeCheck("专业概念", hasConcept, "先把题目涉及的专业概念或管理对象讲准，比如预算、资产、采购、内控或政府会计。", clamp(58 + (hasConcept ? 18 : 0) + Math.min(6, layerCount * 2), 45, 88)),
    makeCheck("制度风险", hasPrinciple, "补出制度依据、审核原则或风险点，体现财务岗底线意识。", clamp(56 + (hasPrinciple ? 20 : 0) + (hasConcept ? 4 : 0), 45, 88)),
    makeCheck("流程展开", hasProcess || layerCount >= 2, "专业题要按流程说清楚，建议用“事前-事中-事后”或“预算-合同-验收-付款-入账”。", clamp(54 + (hasProcess ? 20 : 0) + Math.min(8, layerCount * 3), 42, 88)),
    makeCheck("岗位落地", hasRole, "最后回到财务人员如何服务业务、坚持原则、请示留痕和闭环改进。", clamp(56 + (hasRole ? 20 : 0) + (hasProcess ? 4 : 0), 42, 88))
  ];
}

function averageSentenceLength(text) {
  const parts = text.split(/[。！？；，]/).map((item) => item.trim()).filter(Boolean);
  if (!parts.length) return 0;
  return parts.reduce((sum, item) => sum + item.length, 0) / parts.length;
}

function buildFocusIssues(checks, data) {
  const issues = [];
  if (!data.text) return ["还没有文字稿。先录音或粘贴回答，系统才能按专项框架判断。"];
  checks.filter((check) => !check.passed).forEach((check) => issues.push(`${check.label}不足：${check.advice}`));
  if (data.focus === "完整作答" && data.q.text.includes("线上政务") && data.text.includes("便民") && !data.text.includes("老年")) {
    issues.push("你抓到了便民价值，但题干里的“老年人不会用”回应不足，需要补适老化、线下帮办或人工兜底。");
  }
  if (data.focus === "完整作答" && !hasAny(data.text, ["第一", "第二", "第三", "首先", "其次", "最后"])) {
    issues.push("现在是一整段表达，考官不容易听出层次。建议至少切成“表态、问题、对策、收束”四层。");
  }
  if (data.text.includes("各位考官考生开始答题")) {
    issues.push("转写里混入了提示语，正式复盘前建议删除“各位考官考生开始答题”等非作答内容。");
  }
  if (data.focus === "完整作答" && data.q.text.includes("精细化管理") && hasAny(data.text, ["城市化经济管理", "人寿", "趣味群众"])) {
    issues.push("转写或表达里出现明显误词，如“城市化经济管理”“人寿”等，会影响面试听感，需要改成“城市精细化管理”“人手/人员”等准确表达。");
  }
  if (data.focus === "完整作答" && data.q.text.includes("基层负担") && !hasAny(data.text, ["数字赋能", "考核", "台账", "清单", "人手", "资源", "减负", "权责"])) {
    issues.push("对基层负担的来源分析还不够具体，可以补“重复台账、考核压力、人员不足、权责不清”等原因。");
  }
  if (data.focus === "完整作答" && !hasAny(data.text, ["第一", "第二", "第三", "首先", "其次", "再次", "最后"])) {
    issues.push("建议把对策拆成两到三条，否则考官会觉得观点有但层次不稳。");
  }
  if (data.focus !== "完整作答" && data.length > 280) issues.push("专项训练回答偏长。当前重点不是整题铺开，建议压缩到专项要求内。");
  if (data.timeRatio > 1.1) issues.push("本轮略超时。专项训练要更短、更准，先完成框架点再扩展。");
  return issues.length ? issues.slice(0, 4) : ["本轮专项框架基本达标，下一步提高表达精炼度和机关工作语感。"];
}

function buildFocusStrengths(checks, data) {
  const passed = checks.filter((check) => check.passed).map((check) => check.label);
  if (!passed.length) return [`本轮已经完成“${data.focus}”开口训练，下一步先补齐第一个框架点。`];
  const strengths = [];
  if (data.q.text.includes("线上政务") && hasAny(data.text, ["整合了多方资源", "便民", "快捷", "便利"])) {
    strengths.push("你能先肯定线上政务入口整合的便民价值，这个表态方向是对的。");
  }
  if (data.q.text.includes("精细化") && hasAny(data.text, ["精细化管理", "精细化治理", "群众需求", "基层工作压力", "基层工作人员"])) {
    strengths.push("你抓住了“精细化管理”和“基层压力”之间的平衡关系，审题方向是对的。");
  }
  if (data.q.text.includes("电梯") && hasAny(data.text, ["老旧小区", "加装电梯", "电梯"])) {
    strengths.push("你用了加装电梯的例子，能把上海基层治理场景具体化，这一点比空谈更好。");
  }
  if (hasAny(data.text, ["需求评估", "工作量评估", "明确评估"])) {
    strengths.push("你提到了需求评估和工作量评估，已经有从“群众端”和“基层端”双向平衡的意识。");
  }
  if (hasAny(data.q.text, ["老年", "线上", "群体"]) && hasAny(data.text, ["特殊群体", "老年", "年轻人"])) {
    strengths.push("你已经注意到不同群体的使用差异，有公共服务均等化意识。");
  }
  if (hasAny(data.q.text, ["入口", "政务"]) && hasAny(data.text, ["入口", "办理入口", "快速找到"])) {
    strengths.push("你能结合题干中的“入口多、流程多”谈便利性，说明审题没有跑偏。");
  }
  passed.slice(0, 2).forEach((label) => strengths.push(`${label}有体现，符合本轮专项要求。`));
  return strengths.slice(0, 4);
}

function buildNextTask(checks) {
  const miss = checks.find((check) => !check.passed);
  if (miss) return `下一轮只练“${miss.label}”：先用 1 句话补这个点，再继续答，不要急着整题展开。`;
  return "下一轮提高要求：保持当前专项框架不变，把每个点压缩成一句更干净的机关表达。";
}

function buildImprovedAnswer(q, focus, categoryFramework, text) {
  const full = buildFullTranscript(q, text);
  if (full) return full;
  const samples = {
    审题破题: `这道题的主体是${inferSubject(q)}，核心矛盾是“${q.cues[0] || "工作要求"}”和“${q.cues[1] || "现实执行"}”之间的关系。题型上属于${q.category}，作答方向应围绕${q.points.slice(0, 2).join("、")}展开。`,
    答题框架: `可以按“${categoryFramework.name}”搭框架：第一，${categoryFramework.steps[0]}；第二，${categoryFramework.steps[1]}；第三，${categoryFramework.steps[2]}；最后，${categoryFramework.steps[3]}。`,
    内容要点: `内容上建议补四类抓手：一是对象诉求，回应${inferSubject(q)}的实际需要；二是依据原则，体现依法依规和公共服务；三是执行抓手，用清单、分工、节点、协同推进；四是反馈闭环，通过回访、评估、复盘改进。`,
    表达逻辑: `表达可以压成四句：第一，先点出问题本质；第二，说明原因或影响；第三，提出具体抓手；第四，回扣群众感受和岗位落实。每一层只说一个中心，不反复绕。`,
    开头结尾: `开头：各位考官，我认为这道题的关键在于把${q.cues[0] || "工作要求"}落到实际服务成效上。结尾：作为事业单位工作人员，我会在岗位中坚持规范执行、主动沟通、及时反馈，让服务更有温度也更有效率。`
  };
  return samples[focus] || `各位考官，我认为这道题可以按照“${categoryFramework.name}”来答。先表明态度，再分析题干矛盾，接着提出可执行举措，最后回到群众感受和岗位落实。`;
}

function hasAny(text, words) {
  return words.some((word) => text.includes(word));
}

function buildFullTranscript(q, text) {
  const isDigitalGov = q.text.includes("线上政务") || text.includes("线上政务") || text.includes("入口");
  if (isDigitalGov) {
    return "各位考官，我认为，线上政务服务入口整合多方资源，本身是一项便民利民的举措。它能够让群众更快找到办理入口，减少线下跑动，提高政务服务效率，这一点值得肯定。但在实际落地中，也确实不能只看到年轻群体使用方便的一面，还要看到老年人、残障人士以及不熟悉智能设备群体可能面临的操作门槛。如果技术进步反而让一部分群众不会办、办不了，就说明服务的温度和精细度还不够。对此，我认为可以从三个方面完善。第一，继续优化线上平台，把入口整合得更清楚，流程设置得更简洁，减少重复注册、重复填报，让群众看得懂、找得到、办得成。第二，做好适老化和人工兜底，在社区、窗口保留帮办代办服务，对老年人提供手把手指导，不能因为线上化就弱化线下服务。第三，建立反馈改进机制，收集群众在办理中的高频问题，及时调整页面提示和办事流程。作为事业单位工作人员，我会坚持把便利性和可及性统一起来，让数字政务既有效率，也有温度。";
  }
  if (q.category === "正式模拟") return buildMockImprovedTranscript(q);
  if (q.category === "专业题") return buildProfessionalImprovedTranscript(q);
  if (q.category === "组织管理") return buildOrganizingImprovedTranscript(q);
  if (q.category === "应急应变") return buildEmergencyImprovedTranscript(q);
  if (q.category === "人际沟通") return buildCommunicationImprovedTranscript(q);
  if (q.category === "岗位匹配") return buildJobFitImprovedTranscript(q);
  if (q.category === "情景模拟") return buildScenarioImprovedTranscript(q);
  return buildAnalysisImprovedTranscript(q);
}

function buildAnalysisImprovedTranscript(q) {
  const topic = extractTopic(q.text);
  const p = paddedPoints(q);
  return `各位考官，对于“${topic}”，我认为要辩证看待，既看到它对公共服务和基层治理的积极意义，也要看到落实过程中可能带来的新问题。首先，${p[0]}，这说明这项工作本身方向是对的，能够回应群众需求、提升治理精细度。其次，${p[1]}，如果只强调推进速度和形式要求，而忽视群众差异、基层承载能力和实际效果，就可能出现政策初衷好、落地体验打折扣的问题。对此，我认为可以从三个方面优化。第一，前期要摸清真实需求，把服务对象、高频问题和基层压力列成清单，避免凭经验推进。第二，推进中要突出精准施策，围绕${q.cues.slice(0, 2).join("、") || "关键问题"}完善流程、明确责任、加强协同。第三，事后要做好反馈闭环，通过回访、评估和复盘检验效果。作为事业单位工作人员，我会坚持问题导向和群众导向，让工作既规范有序，也真正让群众感受到温度和效率。`;
}

function buildOrganizingImprovedTranscript(q) {
  const p = paddedPoints(q);
  return `各位考官，如果由我负责这项组织工作，我会按照“目标明确、准备充分、过程有序、结果闭环”的思路推进。第一，前期先摸清情况，围绕题目中的任务要求，明确活动对象、工作目标、时间地点和风险点，结合${q.cues.slice(0, 2).join("、") || "重点环节"}制定方案。第二，做好分工协同，及时对接相关部门、社区、物业或业务科室，明确人员分组、物资准备、宣传通知和应急预案，确保每个环节有人管、能落地。第三，现场实施中要把秩序和效果放在前面，既按方案推进，也根据群众反馈灵活调整，及时处理突发问题。第四，活动结束后做好总结复盘，围绕${p[3]}梳理成效和不足，形成问题清单和改进建议。这样既能把活动办顺，也能把一次性工作转化为后续治理和服务的长效机制。`;
}

function buildEmergencyImprovedTranscript(q) {
  const p = paddedPoints(q);
  return `各位考官，遇到题目中的突发情况，我会坚持先稳现场、再查原因、依法处理、后续复盘。第一，先控制现场秩序和群众情绪，表明身份，耐心听取诉求，避免矛盾继续扩大。第二，快速核实情况，围绕${q.cues.slice(0, 2).join("、") || "现场事实和群众诉求"}了解事情经过、政策依据和责任边界，不能凭感觉下结论。第三，分类处理。如果群众诉求合理，我会及时协调资源解决；如果暂时不能办理，也要说明原因、给出补正路径和办理时限；如果涉及舆情或安全风险，要及时向领导汇报并做好记录。第四，事后复盘改进，针对${p[3]}完善流程、培训和预案。整个过程中既要有服务态度，也要有规则意识，做到回应及时、处置稳妥、风险可控。`;
}

function buildCommunicationImprovedTranscript(q) {
  const p = paddedPoints(q);
  return `各位考官，处理人际沟通类问题，我认为关键是把个人情绪放在工作目标之后，用主动沟通推动问题解决。第一，我会先调整心态，从自身沟通方式、任务理解和客观情况三个方面复盘，避免带着情绪判断对方。第二，主动沟通，围绕题目中的矛盾点真诚交流，听取对方想法，也把工作目标、时间节点和需要配合的事项说明清楚。第三，以工作为重推进任务，如果需要我补位、学习或承担更多具体工作，我会主动完成，确保不影响整体进度。第四，事后做好总结，把${p[3]}转化为后续协作中的提醒机制。这样既能维护团队关系，也能保证工作质量，体现事业单位工作人员应有的合作意识和执行力。`;
}

function buildJobFitImprovedTranscript(q) {
  const p = paddedPoints(q);
  return `各位考官，我认为这道题重点考察的是岗位认知和自我匹配。首先，我理解事业单位岗位不是简单完成事务，而是通过规范、细致、稳定的工作服务群众、保障公共事务运行。结合我的经历，我比较突出的优势是责任心、学习能力和执行闭环意识，面对任务会先弄清标准，再拆分步骤，最后及时反馈结果。其次，我也认识到自己还需要进一步提升机关工作语感和复杂问题协调能力，尤其是在多部门协同、群众沟通和政策理解方面继续积累。入职后，我会从三个方面努力：第一，主动学习制度流程，尽快熟悉岗位要求；第二，注重向领导和同事请教，在实践中提升专业能力；第三，坚持复盘改进，把${p[3]}落实到日常工作中，努力成为让组织放心、让群众满意的工作人员。`;
}

function buildScenarioImprovedTranscript(q) {
  return `您好，我是现场工作人员，您先别着急，您的担心我能理解。这个事情确实关系到大家办事是否方便、权益是否得到保障，所以我们不会简单处理。我先帮您把情况核实清楚：一方面看您现在遇到的具体困难是什么，另一方面也会对照政策和办理流程，看看有没有可以马上协助解决的办法。如果确实是我们解释不到位或服务不够细，我会向您说明并及时改进；如果需要补充材料或等待下一步流程，我也会一次性告诉您缺什么、怎么补、什么时候能反馈。您可以把问题交给我，我会做好记录并向相关负责人汇报，后续也会给您明确回复。我们的目的不是让群众多跑腿，而是在规定范围内尽量把事情办顺、办实。`;
}

function buildProfessionalImprovedTranscript(q) {
  const p = paddedPoints(q);
  return `各位考官，这道专业题本质上考察的是财务岗位的制度意识、流程意识和风险防控能力。首先，要先把概念和原则讲清楚，围绕${q.cues.slice(0, 2).join("、") || "财务管理要求"}明确工作依据，做到业务真实、手续完整、核算准确。其次，具体操作中要按流程推进，不能只看单据表面。比如要核对预算、合同、审批、验收、发票、付款和入账等关键环节，发现资料缺失、口径不一致或风险异常时，及时提醒业务部门补正。再次，要坚持合规和服务并重，对符合规定的事项提高办理效率，对不符合规定的事项说明依据、提示风险、提出替代路径。最后，事后要做好台账、复盘和留痕，围绕${p[3]}完善内控闭环。作为财务人员，我会守住财经纪律底线，同时主动服务业务，让资金使用更规范、更安全、更有效。`;
}

function buildMockImprovedTranscript(q) {
  return q.text.split(/\n+/).filter(Boolean).map((line) => {
    const clean = line.replace(/^第\d+题：/, "");
    const category = inferCategoryFromText(clean);
    const one = { ...q, category, text: clean, points: q.points || [], cues: q.cues || [] };
    const answer = category === "组织管理" ? buildOrganizingImprovedTranscript(one)
      : category === "应急应变" ? buildEmergencyImprovedTranscript(one)
      : category === "人际沟通" ? buildCommunicationImprovedTranscript(one)
      : category === "岗位匹配" ? buildJobFitImprovedTranscript(one)
      : buildAnalysisImprovedTranscript(one);
    return `【${line.match(/^第\d+题/)?.[0] || "本题"}】${answer}`;
  }).join("\n\n");
}

function inferCategoryFromText(text) {
  if (text.includes("组织") || text.includes("活动") || text.includes("调研")) return "组织管理";
  if (text.includes("突然") || text.includes("怎么办") || text.includes("现场")) return "应急应变";
  if (text.includes("同事") || text.includes("领导")) return "人际沟通";
  if (text.includes("报考") || text.includes("经历") || text.includes("岗位")) return "岗位匹配";
  return "综合分析";
}

function paddedPoints(q) {
  const fallback = ["这项工作能够回应群众需求、提升治理效率", "落实中也可能存在流程不清、协同不足、基层压力等问题", "需要通过清单化、责任化、闭环化推进", "反馈评估、复盘改进和长效落实"];
  return [...(q.points || []), ...fallback].slice(0, 4);
}

function extractTopic(text) {
  return text.replace(/^第\d+题：/, "").replace(/对此你怎么看.*$/, "").replace(/你怎么办.*$/, "").replace(/你会如何.*$/, "").slice(0, 42);
}

function inferSubject(q) {
  const map = {
    组织管理: "活动对象、协同部门和服务群众",
    应急应变: "现场群众、工作人员和相关责任主体",
    人际沟通: "同事、自己和工作任务",
    岗位匹配: "报考者本人和事业单位岗位",
    情景模拟: "沟通对象和现场工作人员",
    上海特色: "群众、基层和城市治理主体"
  };
  return map[q.category] || "政策执行者、基层单位和群众";
}

function renderFeedback(analysis) {
  els.scoreTitle.textContent = `本次建议分：${analysis.total}/100`;
  const labels = analysis.rubric.scoreLabels;
  els.scoreLabels.forEach((label, index) => {
    label.textContent = labels[index] || label.textContent;
  });
  els.scores.structure.textContent = analysis.scores.structure;
  els.scores.content.textContent = analysis.scores.content;
  els.scores.expression.textContent = analysis.scores.expression;
  els.scores.time.textContent = analysis.scores.time;
  els.feedback.innerHTML = "";
}

function clearFeedback() {
  const labels = focusRubrics[els.focus.value]?.scoreLabels || ["结构", "内容", "表达", "时间"];
  els.scoreTitle.textContent = "完成一次答题后生成点评";
  state.reviewedTranscript = "";
  state.reviewedQuestionText = "";
  els.scoreLabels.forEach((label, index) => {
    label.textContent = labels[index] || ["结构", "内容", "表达", "时间"][index];
  });
  Object.values(els.scores).forEach((node) => {
    node.textContent = "--";
  });
  els.feedback.innerHTML = "";
}

function markFeedbackStale() {
  const currentText = dedupeTranscript(els.transcript.value.trim());
  if (!state.reviewedTranscript && !state.reviewedQuestionText) return;
  if (currentText === state.reviewedTranscript && state.current?.text === state.reviewedQuestionText) return;
  els.scoreTitle.textContent = "文字稿已更新，请重新点评";
  Object.values(els.scores).forEach((node) => {
    node.textContent = "--";
  });
  els.feedback.innerHTML = "";
}

function buildChatGPTPrompt() {
  const q = state.current;
  const transcript = els.transcript.value.trim();
  return `题目：
${q.text}

我的回答文字稿：
${transcript || "（暂无文字稿）"}

请你帮忙打分和点评。`;
}

async function copyChatGPTPrompt() {
  const prompt = buildChatGPTPrompt();
  try {
    await navigator.clipboard.writeText(prompt);
    els.chatgptPromptBtn.textContent = "已复制";
    setTimeout(() => {
      els.chatgptPromptBtn.textContent = "复制给 ChatGPT";
    }, 1400);
  } catch (error) {
    els.transcript.value = `${els.transcript.value}\n\n--- 复制给 ChatGPT 的提示词 ---\n${prompt}`;
    alert("浏览器不允许自动复制，我已把提示词追加到文字稿下方。");
  }
}

function saveHistory(analysis) {
  const childQuestions = state.mode === "mock"
    ? state.mockQuestions.map((q) => ({ question: q.text, category: q.category, difficulty: q.difficulty, source: q.source, cues: q.cues || [], score: analysis.total }))
    : [];
  const item = {
    id: `record-${Date.now()}`,
    time: new Date().toLocaleString("zh-CN", { month: "2-digit", day: "2-digit", hour: "2-digit", minute: "2-digit" }),
    category: state.current.category,
    mode: state.mode,
    focus: els.focus.value,
    score: analysis.total,
    question: state.current.text,
    difficulty: state.current.difficulty,
    source: state.current.source,
    cues: state.current.cues,
    transcript: els.transcript.value.trim(),
    audioSrc: state.lastAudioDataUrl || "",
    actualSeconds: analysis.actualSeconds,
    scores: analysis.scores,
    labels: analysis.rubric.scoreLabels,
    strengths: analysis.strengths,
    issues: analysis.issues,
    checks: analysis.checks.map((item) => ({ label: item.label, passed: item.passed, advice: item.advice, score: item.score })),
    reviewNotes: getReviewNotes(),
    childQuestions,
    nextTask: analysis.nextTask,
    improved: analysis.improved
  };
  state.lastSavedRecordId = item.id;
  state.history = [item, ...state.history].slice(0, 20);
  localStorage.setItem("interviewHistory", JSON.stringify(state.history));
  renderHistory();
  renderMockHistory();
  renderCurrentPracticeStatus();
}

function renderHistory() {
  if (!state.history.length) {
    els.history.innerHTML = `<div class="history-item"><strong>暂无记录</strong><p>完成一次答题后，这里会记录题型、分数、用时和答案。</p></div>`;
    return;
  }
  els.history.innerHTML = state.history.map((item) => `
    <button class="history-button" type="button" data-history-id="${item.id}">
      <strong>${item.score} 分 · ${item.category}</strong>
      <span>${item.question}</span>
      <span>${item.time} · ${modeName(item.mode)} · ${item.focus}</span>
    </button>
  `).join("");
}

function renderMockHistory() {
  if (!els.mockHistory) return;
  const mockItems = state.history.filter((item) => item.mode === "mock");
  els.mockHistoryCount.textContent = mockItems.length ? `${mockItems.length} 条` : "暂无";
  els.mockHistory.innerHTML = mockItems.map((item) => `
    <button class="history-button" type="button" data-history-id="${item.id}">
      <strong>${item.score} 分 · ${formatTime(item.actualSeconds || item.answerSeconds || 0)}</strong>
      <span>${(item.childQuestions || []).map((child, index) => `第${index + 1}题：${child.question}`).join(" ") || item.question}</span>
      <span>${item.time} · ${item.source || "正式模拟"}</span>
    </button>
  `).join("") || `<div class="history-item"><strong>暂无记录</strong><p>完成正式模拟后，这里会保存题目、用时、答案、分数和录音。</p></div>`;
}

function modeName(mode) {
  return { mock: "正式模拟", practice: "专项训练", real: "真题训练", professional: "专业题", bank: "全部题目" }[mode] || "训练";
}

function openHistoryDetail(id) {
  const item = state.history.find((record) => record.id === id);
  if (!item) return;
  els.historyDialogTitle.textContent = `${item.score} 分 · ${item.category} · ${item.focus}`;
  const scoreCards = renderScoreCards(item.labels, item.scores, item.score);
  const cueHtml = (item.cues || []).map((cue) => `<span>${cue}</span>`).join("");
  const audioHtml = item.audioSrc
    ? `<audio controls src="${item.audioSrc}"></audio>`
    : `<p class="empty-audio">本条旧记录没有保存录音，之后新记录会自动保留。</p>`;
  els.historyDialogContent.innerHTML = `
    <section class="question-band">
      <div class="question-meta">
        <span>${item.category}</span>
        <span>${item.difficulty || "训练"}</span>
        <span>${item.source || modeName(item.mode)}</span>
      </div>
      <p class="history-question-text">${item.question}</p>
      <div class="cue-row">${cueHtml}</div>
    </section>
    <section class="training-grid">
      <div class="coach-panel">
        <div class="timer-card">
          <div>
            <p>历史记录</p>
            <strong>${formatTime(item.actualSeconds || 0)}</strong>
          </div>
          <div class="phase-track" aria-hidden="true"><span style="width: 100%; background: var(--red)"></span></div>
        </div>
        <div class="recording-box">
          <div class="recording-state"><span class="dot"></span><span>${item.audioSrc ? "录音已保存" : "无录音"}</span></div>
          ${audioHtml}
        </div>
        <div class="detail-block">
          <h3>回答文字稿</h3>
          <p class="readonly-text">${item.transcript || "无"}</p>
        </div>
      </div>
      <div class="feedback-panel">
        <div class="feedback-header">
          <div>
            <p class="eyebrow">AI 教练复盘</p>
            <h2>本次建议分：${item.score}/100</h2>
          </div>
        </div>
        <div class="score-strip">${scoreCards}</div>
        <div class="feedback-content">
          ${renderSavedFeedback(item)}
        </div>
      </div>
    </section>
  `;
  els.historyDialog.showModal();
}

function renderScoreCards(labels = [], scores = {}, fallbackScore = "--") {
  const keys = ["structure", "content", "expression", "time"];
  return keys.map((key, index) => `
    <div>
      <span>${labels[index] || ["结构", "内容", "表达", "时间"][index]}</span>
      <strong>${scores[key] ?? fallbackScore}</strong>
    </div>
  `).join("");
}

function renderSavedFeedback(item) {
  return `
    <div>
      <h3>训练信息</h3>
      <p>${item.time}｜${modeName(item.mode)}${item.actualSeconds ? `｜用时：${formatTime(item.actualSeconds)}` : ""}</p>
    </div>
    <div>
      <h3>我的复盘</h3>
      ${renderReviewNotes(item.reviewNotes)}
    </div>
  `;
}

function renderReviewNotes(notes = emptyReviewNotes()) {
  const value = notes.review || [notes.framework, notes.opening, notes.body, notes.ending].filter(Boolean).join("\n\n");
  return `<div class="detail-block"><p class="readonly-text">${value || "未填写"}</p></div>`;
}

function renderSkills() {
  const base = { 审题: 58, 框架: 62, 内容: 56, 表达: 60, 时间: 64 };
  state.history.forEach((item) => {
    const boost = Math.max(0, item.score - 60) / 8;
    base.审题 += boost;
    if (item.focus.includes("框架")) base.框架 += boost * 1.5;
    if (item.focus.includes("内容")) base.内容 += boost * 1.5;
    if (item.focus.includes("表达")) base.表达 += boost * 1.5;
    base.时间 += boost * 0.7;
  });
  els.skillList.innerHTML = Object.entries(base).map(([name, value]) => {
    const score = Math.round(clamp(value, 45, 92));
    return `
      <div class="skill-item">
        <div><span>${name}</span><strong>${score}</strong></div>
        <span class="bar"><span style="width: ${score}%"></span></span>
      </div>
    `;
  }).join("");
}

function renderQuestionBank() {
  const all = getAllQuestions();
  populateBankCategoryFilter(all);
  const filtered = filterQuestionBank(all);
  els.questionBankCount.textContent = `共 ${all.length} 道题，当前显示 ${filtered.length} 道。`;
  els.questionBankContent.innerHTML = `
    <div class="question-bank-list">
      ${filtered.map(({ q, index }) => {
        const latest = findLatestPractice(q.text);
        const practiced = Boolean(latest);
        const latestScore = scoreForQuestion(latest, q.text);
        const manual = getManualQuestionStatus(q.text);
        const statusValue = manual?.status || "auto";
        const scoreValue = manual?.score ?? "";
        const statusText = manual?.status === "done" ? "手动已练" : manual?.status === "todo" ? "手动未练" : practiced ? "已练习" : "未练习";
        const scoreText = practiced && latestScore !== undefined && latestScore !== "" ? `上次 ${latestScore} 分` : practiced ? "已练习" : "暂无分数";
        return `
          <article class="question-card">
            <div class="badge-row">
              <span class="badge">${q.bank === "real" ? "真题训练" : q.bank === "professional" ? "专业题" : q.bank === "custom" ? "自建题" : "模拟/专项"}</span>
              <span class="badge">${q.category}</span>
              <span class="badge">${q.difficulty}</span>
              <span class="badge ${practiced ? "done" : "todo"}">${statusText}</span>
              <span class="badge">${scoreText}</span>
            </div>
            <h3>${q.text}</h3>
            <div class="mini-meta">${q.cues.map((cue) => `<span>${cue}</span>`).join("")}</div>
            <div class="bank-card-actions">
              <button class="secondary bank-load-btn" type="button" data-question-bank-index="${index}">练这题</button>
              <button class="danger bank-delete-btn" type="button" data-question-delete-index="${index}">删除题目</button>
              <label>
                <span>状态</span>
                <select data-manual-status="${index}">
                  <option value="auto"${statusValue === "auto" ? " selected" : ""}>跟随记录</option>
                  <option value="done"${statusValue === "done" ? " selected" : ""}>已练习</option>
                  <option value="todo"${statusValue === "todo" ? " selected" : ""}>未练习</option>
                </select>
              </label>
              <label>
                <span>分数</span>
                <input data-manual-score="${index}" type="number" min="0" max="100" placeholder="可选" value="${scoreValue}">
              </label>
              <button class="ghost bank-save-status-btn" type="button" data-manual-save="${index}">保存状态</button>
            </div>
          </article>
        `;
      }).join("") || `<div class="detail-block"><h3>没有符合条件的题目</h3><p>可以放宽关键词、题型或练习状态筛选。</p></div>`}
    </div>
  `;
}

function populateBankCategoryFilter(all) {
  const current = els.bankCategory.value || "all";
  const categories = [...new Set(all.map((q) => q.category))];
  els.bankCategory.innerHTML = `<option value="all">全部题型</option>${categories.map((category) => `<option value="${category}">${category}</option>`).join("")}`;
  els.bankCategory.value = categories.includes(current) ? current : "all";
}

function filterQuestionBank(all) {
  const keyword = els.bankSearch.value.trim().toLowerCase();
  const mode = els.bankMode.value;
  const category = els.bankCategory.value;
  const practice = els.bankPractice.value;
  const score = els.bankScore.value;
  return all.map((q, index) => ({ q, index })).filter(({ q }) => {
    const latest = findLatestPractice(q.text);
    const practiced = Boolean(latest);
    const haystack = [q.text, q.category, q.difficulty, q.source, ...(q.cues || [])].join(" ").toLowerCase();
    if (keyword && !haystack.includes(keyword)) return false;
    if (mode !== "all" && q.bank !== mode) return false;
    if (category !== "all" && q.category !== category) return false;
    if (practice === "done" && !practiced) return false;
    if (practice === "todo" && practiced) return false;
    const latestScore = scoreForQuestion(latest, q.text);
    const numericScore = latestScore === "" || latestScore === undefined ? NaN : Number(latestScore);
    if (score === "none" && Number.isFinite(numericScore)) return false;
    if (score === "lt60" && (!Number.isFinite(numericScore) || numericScore >= 60)) return false;
    if (score === "60-79" && (!Number.isFinite(numericScore) || numericScore < 60 || numericScore >= 80)) return false;
    if (score === "gte80" && (!Number.isFinite(numericScore) || numericScore < 80)) return false;
    return true;
  });
}

function findLatestPractice(questionText) {
  const manual = getManualQuestionStatus(questionText);
  if (manual?.status === "todo") return null;
  if (manual?.status === "done") {
    return { question: questionText, score: manual.score, manual: true };
  }
  return state.history.find((item) => item.question === questionText || (item.childQuestions || []).some((child) => child.question === questionText));
}

function scoreForQuestion(item, questionText) {
  if (!item) return undefined;
  if (item.manual) return item.score;
  const child = (item.childQuestions || []).find((record) => record.question === questionText);
  return child?.score ?? item.score;
}

function getManualQuestionStatus(questionText) {
  return state.manualQuestionStatus[questionText] || null;
}

function saveManualQuestionStatus(index) {
  const q = getAllQuestions()[index];
  if (!q) return;
  const status = els.questionBankContent.querySelector(`[data-manual-status="${index}"]`)?.value || "auto";
  const scoreNode = els.questionBankContent.querySelector(`[data-manual-score="${index}"]`);
  const rawScore = scoreNode?.value.trim() || "";
  const score = rawScore === "" ? "" : clamp(Number(rawScore), 0, 100);
  if (status === "auto") {
    delete state.manualQuestionStatus[q.text];
  } else {
    state.manualQuestionStatus[q.text] = { status, score, updatedAt: Date.now() };
  }
  localStorage.setItem("manualQuestionStatus", JSON.stringify(state.manualQuestionStatus));
  renderQuestionBank();
  renderCurrentPracticeStatus();
}

function addCustomQuestion(event) {
  event.preventDefault();
  const text = els.newQuestionText.value.trim();
  if (!text) {
    alert("请先填写题目内容。");
    return;
  }
  const cues = els.newQuestionCues.value
    .split(/[，,、\s]+/)
    .map((item) => item.trim())
    .filter(Boolean);
  const question = {
    category: els.newQuestionCategory.value,
    difficulty: "自建",
    source: els.newQuestionSource.value.trim() || "自建题",
    text,
    cues: cues.length ? cues : ["观点明确", "结构清晰", "内容具体"],
    points: []
  };
  state.customQuestions = [question, ...state.customQuestions];
  state.deletedQuestionTexts = state.deletedQuestionTexts.filter((item) => item !== text);
  localStorage.setItem("customQuestions", JSON.stringify(state.customQuestions));
  localStorage.setItem("deletedQuestionTexts", JSON.stringify(state.deletedQuestionTexts));
  els.addQuestionForm.reset();
  renderQuestionBank();
}

function deleteQuestionFromBank(index) {
  const q = getAllQuestions()[index];
  if (!q) return;
  if (!confirm("确定删除这道题吗？删除后不会再出现在题库和抽题池里。")) return;
  if (q.bank === "custom") {
    state.customQuestions = state.customQuestions.filter((item) => item.text !== q.text);
    localStorage.setItem("customQuestions", JSON.stringify(state.customQuestions));
  } else if (!state.deletedQuestionTexts.includes(q.text)) {
    state.deletedQuestionTexts.push(q.text);
    localStorage.setItem("deletedQuestionTexts", JSON.stringify(state.deletedQuestionTexts));
  }
  delete state.manualQuestionStatus[q.text];
  localStorage.setItem("manualQuestionStatus", JSON.stringify(state.manualQuestionStatus));
  renderQuestionBank();
  if (state.current?.text === q.text && state.mode !== "bank") pickQuestion();
}

function getCurrentDisplayedScore() {
  const match = els.scoreTitle.textContent.match(/(\d+)\/100/);
  return match ? Number(match[1]) : "";
}

function setCurrentPracticeStatus(status) {
  if (!state.current) return;
  const score = status === "done" ? getCurrentDisplayedScore() : "";
  state.manualQuestionStatus[state.current.text] = { status, score, updatedAt: Date.now() };
  localStorage.setItem("manualQuestionStatus", JSON.stringify(state.manualQuestionStatus));
  renderCurrentPracticeStatus();
  renderQuestionBank();
  const oldText = status === "done" ? "标为已练" : "标为未练";
  const button = status === "done" ? els.markCurrentDoneBtn : els.markCurrentTodoBtn;
  button.textContent = "已同步";
  setTimeout(() => {
    button.textContent = oldText;
  }, 900);
}

function resetBankFilters() {
  els.bankSearch.value = "";
  els.bankMode.value = "all";
  els.bankCategory.value = "all";
  els.bankPractice.value = "all";
  els.bankScore.value = "all";
  renderQuestionBank();
}

function saveCurrentReviewNotes() {
  persistReviewNotes({ allowEmpty: true });
  els.saveReviewNotes.textContent = "已自动保存";
  setTimeout(() => {
    els.saveReviewNotes.textContent = "自动保存";
  }, 1200);
}

function persistReviewNotes(options = {}) {
  if (!state.current) return;
  const notes = getReviewNotes();
  if (!hasReviewNotes(notes) && !options.allowEmpty) return;
  state.reviewDrafts[reviewDraftKey()] = notes;
  localStorage.setItem("reviewDrafts", JSON.stringify(state.reviewDrafts));
  const record = state.history.find((item) => item.id === state.lastSavedRecordId);
  if (record) {
    record.reviewNotes = notes;
    localStorage.setItem("interviewHistory", JSON.stringify(state.history));
    renderHistory();
  }
}

function scheduleReviewNotesSave() {
  clearTimeout(state.reviewSaveTimer);
  els.saveReviewNotes.textContent = "保存中";
  state.reviewSaveTimer = setTimeout(() => {
    persistReviewNotes({ allowEmpty: true });
    els.saveReviewNotes.textContent = "已自动保存";
    setTimeout(() => {
      els.saveReviewNotes.textContent = "自动保存";
    }, 900);
  }, 500);
}

const backupStorageKeys = [
  "interviewHistory",
  "manualQuestionStatus",
  "reviewDrafts",
  "questionAttempts",
  "customQuestions",
  "deletedQuestionTexts",
  "preferredMaleVoiceName"
];

function exportDataBackup() {
  persistReviewNotes({ allowEmpty: true });
  const payload = {
    app: "上海事业编面试AI陪练",
    version: 1,
    exportedAt: new Date().toISOString(),
    origin: location.origin,
    storage: Object.fromEntries(backupStorageKeys.map((key) => [key, localStorage.getItem(key)]))
  };
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  const stamp = new Date().toISOString().slice(0, 19).replace(/[-:T]/g, "");
  link.href = url;
  link.download = `事业编面试陪练-数据备份-${stamp}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function importDataBackup(file) {
  if (!file) return;
  const reader = new FileReader();
  reader.onload = () => {
    try {
      const payload = JSON.parse(String(reader.result || "{}"));
      const storage = payload.storage || payload;
      const hasKnownKey = backupStorageKeys.some((key) => Object.prototype.hasOwnProperty.call(storage, key));
      if (!hasKnownKey) {
        alert("这个文件不是本应用的数据备份，无法导入。");
        return;
      }
      backupStorageKeys.forEach((key) => {
        const value = storage[key];
        if (typeof value === "string") localStorage.setItem(key, value);
        if (value === null) localStorage.removeItem(key);
      });
      alert("数据已导入，页面会重新加载。");
      location.reload();
    } catch (error) {
      alert("导入失败：备份文件格式不正确。");
    }
  };
  reader.readAsText(file);
}

function openQuestionBank() {
  renderQuestionBank();
  if (els.questionBankDialog) els.questionBankDialog.showModal();
  else setMode("bank");
}

function loadQuestionFromBank(index) {
  const q = getAllQuestions()[index];
  if (!q) return;
  persistReviewNotes({ silent: true });
  const mode = q.bank === "real" ? "real" : q.bank === "professional" ? "professional" : "practice";
  state.mode = mode;
  document.body.dataset.mode = mode;
  els.modeButtons.forEach((button) => button.classList.toggle("active", button.dataset.mode === mode));
  els.topbar.hidden = false;
  els.questionBand.hidden = false;
  els.trainingGrid.hidden = false;
  els.questionBankPage.hidden = true;
  updateStartButtonText();
  els.category.value = q.category;
  els.category.disabled = mode === "mock" || mode === "professional";
  els.focus.disabled = mode === "mock";
  els.think.disabled = mode === "mock";
  els.answer.disabled = mode === "mock";
  state.current = q;
  resetSession();
  renderQuestion();
  loadReviewDraftForCurrent();
  clearFeedback();
  if (els.questionBankDialog?.open) els.questionBankDialog.close();
}

els.modeButtons.forEach((button) => button.addEventListener("click", () => setMode(button.dataset.mode)));
els.mockViewButtons.forEach((button) => button.addEventListener("click", () => setMockViewMode(button.dataset.mockView)));
els.category.addEventListener("change", pickQuestion);
els.focus.addEventListener("change", () => {
  renderQuestion();
  clearFeedback();
});
els.speakBtn.addEventListener("click", speakQuestion);
els.newQuestionBtn.addEventListener("click", () => {
  persistReviewNotes({ allowEmpty: true });
  resetSession();
  pickQuestion();
});
els.startBtn.addEventListener("click", startSession);
els.answerNowBtn.addEventListener("click", beginAnswer);
els.finishBtn.addEventListener("click", finishAnswer);
els.resetBtn.addEventListener("click", () => resetSession());
els.reviewBtn.addEventListener("click", reviewAnswer);
els.chatgptPromptBtn.addEventListener("click", copyChatGPTPrompt);
els.micTestBtn.addEventListener("click", testMicrophone);
els.markCurrentDoneBtn.addEventListener("click", () => setCurrentPracticeStatus("done"));
els.markCurrentTodoBtn.addEventListener("click", () => setCurrentPracticeStatus("todo"));
els.transcript.addEventListener("input", markFeedbackStale);
els.saveReviewNotes.addEventListener("click", saveCurrentReviewNotes);
Object.values(els.notes).forEach((node) => {
  node.addEventListener("input", scheduleReviewNotesSave);
  node.addEventListener("change", () => persistReviewNotes({ allowEmpty: true }));
  node.addEventListener("blur", () => persistReviewNotes({ allowEmpty: true }));
});
els.clearHistory.addEventListener("click", () => {
  state.history = [];
  localStorage.removeItem("interviewHistory");
  renderHistory();
  renderMockHistory();
  renderSkills();
});
els.exportData.addEventListener("click", exportDataBackup);
els.importData.addEventListener("click", () => els.importDataInput.click());
els.importDataInput.addEventListener("change", (event) => {
  importDataBackup(event.target.files?.[0]);
  event.target.value = "";
});
els.history.addEventListener("click", (event) => {
  const button = event.target.closest("[data-history-id]");
  if (button) openHistoryDetail(button.dataset.historyId);
});
els.mockHistory.addEventListener("click", (event) => {
  const button = event.target.closest("[data-history-id]");
  if (button) openHistoryDetail(button.dataset.historyId);
});
els.attemptList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-attempt-id]");
  if (button) deleteAttempt(button.dataset.attemptId);
});
els.closeHistoryDialogBtn.addEventListener("click", () => els.historyDialog.close());
els.questionBankBtn.addEventListener("click", () => setMode("bank"));
els.addQuestionForm.addEventListener("submit", addCustomQuestion);
[
  els.bankSearch,
  els.bankMode,
  els.bankCategory,
  els.bankPractice,
  els.bankScore
].forEach((control) => control.addEventListener("input", renderQuestionBank));
els.bankReset.addEventListener("click", resetBankFilters);
els.questionBankContent.addEventListener("click", (event) => {
  const saveButton = event.target.closest("[data-manual-save]");
  if (saveButton) {
    saveManualQuestionStatus(Number(saveButton.dataset.manualSave));
    return;
  }
  const loadButton = event.target.closest("[data-question-bank-index]");
  if (loadButton) loadQuestionFromBank(Number(loadButton.dataset.questionBankIndex));
  const deleteButton = event.target.closest("[data-question-delete-index]");
  if (deleteButton) deleteQuestionFromBank(Number(deleteButton.dataset.questionDeleteIndex));
});
setMode("mock");
renderHistory();
renderMockHistory();
renderSkills();
updateTimer();
