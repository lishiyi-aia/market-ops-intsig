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
        title: '用户运营与高校试点',
        tagline: '师生反馈｜使用指导｜产品资料｜试点支持',
        items: [
          {
            name: 'AI 教育产品用户运营与高校试点支持',
            meta: 'AI Education User Operations & University Pilot Support',
            slug: 'ai-education-product',
            tags: [
              '用户反馈：整理100+条师生及试点用户反馈，归类常见使用问题',
              '使用内容：输出30+篇指南、FAQ、功能教程和场景案例',
              '试点支持：准备产品介绍与使用资料，配合高校试点沟通和反馈整理',
              '改进建议：形成10+项产品与运营建议，反馈给相关团队',
            ],
          },
        ],
      },
      {
        id: 'project-4',
        no: '04',
        title: '新品社媒运营与渠道传播',
        tagline: '内容调研｜拍摄剪辑｜英文文案｜渠道传播',
        items: [
          {
            name: 'ZUS Coffee 新品社媒运营与渠道传播',
            meta: 'New Product Social Media & Channel Communication',
            slug: 'zus-everywhere',
            tags: [
              '内容调研：结合用户偏好、互动反馈与竞品内容，整理新品传播卖点',
              '内容执行：参与50条Instagram内容发布，涉及拍摄、剪辑、英文文案与素材整理',
              '渠道协同：配合线上首发及FamilyMart传播，整理素材、门店信息与发布排期',
              '内容复盘：累计完成15+次复盘；项目期账号粉丝增长1.1w+，为账号整体结果',
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
        title: 'User Operations & University Pilot Support',
        tagline: 'Feedback · User Guidance · Materials · Pilot Support',
        items: [
          {
            name: 'AI Education User Operations & University Pilot Support',
            meta: 'User Feedback, Learning Materials & Pilot Support',
            slug: 'ai-education-product',
            tags: [
              'Organized 100+ feedback items from teachers, students, and pilot users by issue type',
              'Produced 30+ guides, FAQs, feature tutorials, and use-case materials',
              'Prepared product and user-guidance materials and supported university pilot communication',
              'Developed 10+ product and operations suggestions and shared them with relevant teams',
            ],
          },
        ],
      },
      {
        id: 'project-4',
        no: '04',
        title: 'New Product Social Media & Channel Communication',
        tagline: 'Research · Shooting & Editing · English Copy · Channels',
        items: [
          {
            name: 'ZUS Coffee New Product Social Media & Channel Communication',
            meta: 'Instagram Content, English Copy & Retail Communication',
            slug: 'zus-everywhere',
            tags: [
              'Researched audience preferences, social feedback, and competitor content to inform product messaging',
              'Contributed to 50 Instagram posts through shooting, editing, English copy, and material organization',
              'Supported online launch and FamilyMart communication with materials, store information, and schedules',
              'Completed 15+ content reviews; the account gained 11k+ followers, an account-level result',
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
