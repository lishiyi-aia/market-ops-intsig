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
        tagline: '用户调研｜内容制作｜达人合作｜数据复盘',
        items: [
          {
            name: 'AI资讯产品线上线下活动与渠道运营',
            meta: 'AI Information Product Integrated Campaign Operations',
            slug: 'ai-news-dashboard',
            tags: [
              '用户调研：整理使用反馈与需求、价格问卷，了解用户关心的问题',
              '内容制作：参与100+条公众号、小红书及社群内容，尝试不同标题、封面和表达',
              '合作与活动：参与达人筛选和发布跟进，配合线下活动与线上直播传播',
              '数据复盘：整理内容表现、注册与首次专题创建情况，提出后续调整建议',
            ],
          },
        ],
      },
      {
        id: 'project-2',
        no: '02',
        title: '战略合作与签约落地',
        tagline: '需求整理｜沟通跟进｜协议签署｜项目交接',
        items: [
          {
            name: '东南亚 AI 教育产品战略合作推进与签约落地',
            meta: 'Southeast Asia AI Education Strategic Partnership',
            slug: 'ai-education-partnership',
            tags: [
              '需求整理：梳理合作方需求、产品服务范围及待确认事项',
              '沟通跟进：汇总双方反馈，同步产品、技术和业务团队',
              '文件核对：跟进方案版本、协议修改及签署流程',
              '项目交接：整理签约后的待办事项，配合后续部署准备',
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
              '效果复盘：完成15+轮内容复盘；项目期账号粉丝增长1.1w+',
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
        tagline: 'Research · Content · Creators · Review',
        items: [
          {
            name: 'AI Information Product Integrated Campaign Operations',
            meta: 'AI Information Product Integrated Campaign Operations',
            slug: 'ai-news-dashboard',
            tags: [
              'Organized user feedback and surveys on product needs, willingness to pay, and pricing',
              'Contributed to 100+ WeChat, Xiaohongshu, and community posts, comparing headlines, covers, and copy',
              'Supported creator selection and publishing, community events, and livestream communication',
              'Reviewed content performance, registrations, and first-topic creation to inform follow-up suggestions',
            ],
          },
        ],
      },
      {
        id: 'project-2',
        no: '02',
        title: 'Strategic Partnership & Contract Execution',
        tagline: 'Requirements · Coordination · Signing · Handoff',
        items: [
          {
            name: 'Southeast Asia AI Education Strategic Partnership',
            meta: 'Requirements, Team Coordination & Agreement Follow-up',
            slug: 'ai-education-partnership',
            tags: [
              'Requirements: Organized partner needs, product scope, and questions requiring confirmation',
              'Coordination: Consolidated feedback for product, engineering, and business teams',
              'Documents: Followed up on proposal versions, agreement revisions, and signing',
              'Handoff: Organized post-signing action items and supported deployment preparation',
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
              'Completed 15+ review cycles; the account gained 11k+ followers during the project period',
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
