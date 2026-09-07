export type WorkLanguage = 'zh' | 'en'

export interface WorkListItem {
  name: string
  meta?: string
  tags?: string[]
  link?: string
  slug?: string
}

export type WorkItem = WorkListItem

export interface WorkGroup {
  heading: string
  items: string[]
}

export interface WorkSection {
  id: string
  no: string
  title: string
  tagline: string
  items?: WorkListItem[]
  groups?: WorkGroup[]
  awards?: string[]
  footer?: string
}

export interface WorksLang {
  title: string
  closeLabel: string
  openLabel: string
  hint: string
  awardsLabel: string
  visitLabel: string
  detailPlaceholder: string
  phImageLabel: string
  phButtonLabel: string
  countLabel: (n: number) => string
  sections: WorkSection[]
}

export type WorksCopy = WorksLang

export const WORKS: Record<WorkLanguage, WorksLang> = {
  zh: {
    title: '项目经历',
    closeLabel: '返回',
    openLabel: '展开作品',
    hint: '继续下滑',
    awardsLabel: '项目成果',
    visitLabel: '查看完整项目',
    detailPlaceholder: '项目详情',
    phImageLabel: '项目预览',
    phButtonLabel: '打开项目',
    countLabel: (n) => `${n} 个项目`,
    sections: [
      {
        id: 'project-1',
        no: '01',
        title: '线上线下活动与渠道运营',
        tagline: '活动方案｜现场执行｜直播传播｜数据复盘',
        items: [
          {
            name: 'AI资讯产品线上线下活动与渠道运营',
            meta: 'AI Information Product Integrated Campaign Operations',
            slug: 'ai-news-dashboard',
            tags: [
              '活动执行：参与科技社群线下活动与线上直播，协同产品展示、现场互动与传播排期',
              '用户承接：完成认知、激活、社群招募和问卷反馈4类物料及100+条渠道内容',
              '渠道合作：管理科技媒体、产品社区与KOL/KOC的筛选、报价、Brief和发布',
              '效果评估：按Campaign ID跟踪触达、注册和激活，并据此调整资源投入',
            ],
          },
        ],
      },
      {
        id: 'project-2',
        no: '02',
        title: '战略合作与签约落地',
        tagline: '合作方案｜条款协商｜合同推进｜跨团队协同',
        items: [
          {
            name: '东南亚 AI 教育产品战略合作推进与签约落地',
            meta: 'Southeast Asia AI Education Strategic Partnership',
            slug: 'ai-education-partnership',
            tags: [
              '方案对齐：在既有合作接触基础上，梳理市场、产品、技术与运营的职责边界',
              '条款协商：围绕服务费、分期付款、利润分成和阶段目标整理谈判方案',
              '协同推进：同步海外合作方与产品、技术团队，跟进课程、部署和协议修改',
              '签约落地：核对双语合同、付款节点与执行材料，推动合作进入落地阶段',
            ],
          },
        ],
      },
      {
        id: 'project-3',
        no: '03',
        title: '机构合作与高校试点',
        tagline: '合作资源｜宣讲资料｜试点执行｜反馈闭环',
        items: [
          {
            name: '生成式AI教育产品高校试点与机构合作',
            meta: 'Generative AI Education Partnerships & Pilots',
            slug: 'ai-education-product',
            tags: [
              '合作对象：高校教师、学生与教育机构试点团队；整理100+条需求与反馈',
              '合作资料：产品演示、教师案例、课程方案、FAQ及30+篇使用内容',
              '执行协同：连接产品、内容与业务团队，支持海内外高校试点沟通和推进',
              '项目复盘：沉淀10+项产品与运营建议，推动核心功能使用率提升30%',
            ],
          },
        ],
      },
      {
        id: 'project-4',
        no: '04',
        title: '新品上市与全渠道传播',
        tagline: '上市节奏｜内容物料｜零售渠道｜传播复盘',
        items: [
          {
            name: 'ZUS Everywhere 新品上市活动与市场传播',
            meta: 'New Product Launch & Market Communication',
            slug: 'zus-everywhere',
            tags: [
              '活动节奏：参与COFFIZZ等新品预热、发布、品类教育和零售到货传播',
              '物料执行：完成50条Instagram内容的选题、拍摄、剪辑、英文文案与排期',
              '渠道协同：配合FamilyMart线下传播，统一产品信息、购买入口和发布时间',
              '效果复盘：完成15+轮内容复盘；项目期账号粉丝规模达到1.1w+',
            ],
          },
        ],
      },
    ],
  },
  en: {
    title: 'Project Experience',
    closeLabel: 'Back',
    openLabel: 'Open case',
    hint: 'Scroll to continue',
    awardsLabel: 'Outcomes',
    visitLabel: 'View full case',
    detailPlaceholder: 'Project details',
    phImageLabel: 'Project preview',
    phButtonLabel: 'Open project',
    countLabel: (n) => `${n} projects`,
    sections: [
      {
        id: 'project-1',
        no: '01',
        title: 'Integrated Event & Channel Operations',
        tagline: 'Offline · Livestream · Activation · Review',
        items: [
          {
            name: 'AI Information Product Integrated Campaign Operations',
            meta: 'AI Information Product Integrated Campaign Operations',
            slug: 'ai-news-dashboard',
            tags: [
              'Connected a tech-community event, livestream, product activation, and feedback review into one journey',
              'Produced 100+ WeChat, Xiaohongshu, and community assets plus four activation materials',
              'Managed tech media, communities, and KOL/KOC from screening and quotes to briefs and reviews',
              'Tracked reach, registration, and activation by Campaign ID to guide channel allocation',
            ],
          },
        ],
      },
      {
        id: 'project-2',
        no: '02',
        title: 'Strategic Partnership & Contract Execution',
        tagline: 'Proposal · Terms · Contract · Coordination',
        items: [
          {
            name: 'Southeast Asia AI Education Strategic Partnership',
            meta: 'Proposal Alignment, Commercial Negotiation & Contract Execution',
            slug: 'ai-education-partnership',
            tags: [
              'Scope: Clarified market, product, technology, and operations responsibilities after initial partner contact',
              'Terms: Structured service-fee, staged-payment, revenue-share, and milestone options',
              'Coordination: Synced overseas partner updates with product and engineering teams',
              'Execution: Checked bilingual agreements, payment milestones, and delivery materials',
            ],
          },
        ],
      },
      {
        id: 'project-3',
        no: '03',
        title: 'Institution Partnerships & University Pilots',
        tagline: 'Resources · Materials · Execution · Review',
        items: [
          {
            name: 'Generative AI Education Partnerships & Pilots',
            meta: 'Generative AI Education Partnerships & Pilots',
            slug: 'ai-education-product',
            tags: [
              'Organized 100+ university-user and pilot feedback items across teaching and learning scenarios',
              'Produced 30+ guides, FAQs, tutorials, and instructor-facing cases for product communication',
              'Prepared demos, course materials, and cooperation materials for university and institution pilots',
              'Delivered 10+ recommendations and supported a 30% increase in core-feature adoption',
            ],
          },
        ],
      },
      {
        id: 'project-4',
        no: '04',
        title: 'Product Launch & Omnichannel Communication',
        tagline: 'Launch · Materials · Retail · Review',
        items: [
          {
            name: 'ZUS Everywhere Product Launch & Market Communication',
            meta: 'New Product Launch & Market Communication',
            slug: 'zus-everywhere',
            tags: [
              'Supported launch communication for COFFIZZ and other RTD/FMCG products',
              'Contributed to 50 Instagram assets across planning, shooting, editing, and English copy',
              'Aligned product information, retail access, and publishing schedules for FamilyMart communication',
              'Completed 15+ review cycles; the account reached 11k+ during the project period',
            ],
          },
        ],
      },
    ],
  },
}

export const WORKS_CONTENT = WORKS

export const SECTION_COVERS: Record<string, string> = {
  'project-1': `${import.meta.env.BASE_URL}works/covers/sohu-dashboard.png`,
  'project-2': `${import.meta.env.BASE_URL}works/covers/ai-partnership.jpg`,
  'project-3': `${import.meta.env.BASE_URL}works/covers/education-pilot.png`,
  'project-4': `${import.meta.env.BASE_URL}works/covers/zus-everywhere.jpg`,
}
