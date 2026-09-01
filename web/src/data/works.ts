// 项目数据（双语）。各板块 → 点击展开项目详情。
// 纯数据驱动：增删板块 / 作品只改本文件，Works.jsx 仅负责渲染。
//
// 板块字段：
//   id        唯一标识（用于 framer layoutId 共享元素动画）
//   no        编号 '01'…'05'
//   title     板块标题
//   tagline   索引行右侧一句话
//   items[]   扁平作品列表：{ name, meta?, tags?, link? }
//             点击 item 弹出全屏详情，可补充可选媒体/文案字段：
//             { image?, video?, year?, desc? }（缺省时媒体用占位、简介回退 meta/标签）
//   groups[]  分组作品（与 items 二选一）：{ heading, items: string[] }
//   awards[]  奖项 chip（可选）
//   footer    底部技术/备注一行（可选）

export interface WorkListItem {
  name: string
  meta?: string
  tags?: string[]
  link?: string
  slug?: string
}

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

export const WORKS: Record<'zh' | 'en', WorksLang> = {
  zh: {
    title: '市场运营项目',
    closeLabel: '返回',
    openLabel: '展开作品',
    hint: '继续下滑',
    awardsLabel: '获奖',
    visitLabel: '打开完整项目',
    detailPlaceholder: '你的作品介绍',
    phImageLabel: '图片 / 视频',
    phButtonLabel: '跳转按钮',
    countLabel: (n) => `${n} 件作品`,
    sections: [
      {
        id: 'project-1',
        no: '01',
        title: '生成式AI教育产品高校试点与机构合作',
        tagline: '高校渠道｜合作资料｜产品演示｜试点推进',
        items: [
          {
            name: '生成式AI教育产品高校试点与机构合作',
            meta: 'Generative AI Education Partnerships & Pilots',
            slug: 'ai-education-product',
            tags: [
              '整理100+条高校用户与试点反馈，识别教学、备课和自学场景中的高频需求',
              '输出30+篇指南、FAQ、功能教程与教师案例，形成面向不同角色的宣讲内容',
              '协助整理产品演示、课程方案与合作资料，支持海内外高校和教育机构试点推进',
              '沉淀10+项产品与运营建议，推动核心功能使用率提升30%',
            ],
          },
        ],
      },
      {
        id: 'project-2',
        no: '02',
        title: 'AI资讯产品线上活动与渠道运营',
        tagline: '活动策划｜渠道分发｜达人合作｜数据复盘',
        items: [
          {
            name: 'AI资讯产品线上活动与渠道运营',
            meta: 'AI Information Product Campaign & Channel Operations',
            slug: 'ai-news-dashboard',
            tags: [
              '策划7日AI热点追踪挑战、行业专题模板包与周报共创三套线上活动路径',
              '输出100+篇公众号、小红书及社群内容，并协同准备活动规则、招募和激活物料',
              '管理科技媒体、社区与KOL/KOC渠道，完成筛选、报价、Brief、发布及投后复盘',
              '通过Campaign ID跟踪触达、注册和激活，按渠道质量调整后续资源投入',
            ],
          },
        ],
      },
      {
        id: 'project-3',
        no: '03',
        title: 'ZUS Everywhere 新品上市活动与市场传播',
        tagline: '新品首发｜物料协同｜零售渠道｜传播复盘',
        items: [
          {
            name: 'ZUS Everywhere 新品上市活动与市场传播',
            meta: 'New Product Launch & Market Communication',
            slug: 'zus-everywhere',
            tags: [
              '参与COFFIZZ等新品首发传播，梳理预热、发布、品类教育和零售到货节奏',
              '协同完成50条Instagram内容的选题、拍摄、剪辑、英文文案与素材整理',
              '配合FamilyMart线下零售传播，统一产品信息、渠道入口与发布排期',
              '完成15+轮内容复盘；项目期账号粉丝规模达到1.1w+',
            ],
          },
        ],
      },
    ],
  },
  en: {
    title: 'Market Operations Projects',
    closeLabel: 'Back',
    openLabel: 'Explore',
    hint: 'Keep scrolling',
    awardsLabel: 'Awards',
    visitLabel: 'Open full case',
    detailPlaceholder: 'Your work description',
    phImageLabel: 'Image / Video',
    phButtonLabel: 'Link button',
    countLabel: (n) => `${n} works`,
    sections: [
      {
        id: 'project-1',
        no: '01',
        title: 'Generative AI Education Partnerships & Pilots',
        tagline: 'University Channels · Materials · Demos · Pilots',
        items: [
          {
            name: 'Generative AI Education Partnerships & Pilots',
            meta: '生成式AI教育产品高校试点与机构合作',
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
        id: 'project-2',
        no: '02',
        title: 'AI Information Product Campaign & Channel Operations',
        tagline: 'Campaigns · Distribution · Creators · Review',
        items: [
          {
            name: 'AI Information Product Campaign & Channel Operations',
            meta: 'AI资讯产品线上活动与渠道运营',
            slug: 'ai-news-dashboard',
            tags: [
              'Planned three online campaign journeys for challenges, industry templates, and weekly co-creation',
              'Produced 100+ WeChat, Xiaohongshu, and community assets plus campaign materials',
              'Managed tech media, communities, and KOL/KOC from screening and quotes to briefs and reviews',
              'Tracked reach, registration, and activation by Campaign ID to guide channel allocation',
            ],
          },
        ],
      },
      {
        id: 'project-3',
        no: '03',
        title: 'ZUS Everywhere Product Launch & Market Communication',
        tagline: 'Launch · Materials · Retail Channels · Review',
        items: [
          {
            name: 'ZUS Everywhere Product Launch & Market Communication',
            meta: 'ZUS Everywhere 新品上市活动与市场传播',
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

// 板块配图（横向画廊每张卡片左侧的整高封面）。放到 public/works/covers/ 下。
// 缺图时左栏用大编号渐变占位，放入图片后自动点亮。
export const SECTION_COVERS: Record<string, string> = {
  'project-1': `${import.meta.env.BASE_URL}works/covers/education-pilot.png`,
  'project-2': `${import.meta.env.BASE_URL}works/covers/sohu-dashboard.png`,
  'project-3': `${import.meta.env.BASE_URL}works/covers/zus-everywhere.jpg`,
}

// 统计一个板块的作品数（items 或 groups 求和），用于索引行 hover 显示
export function sectionCount(section: WorkSection): number {
  if (section.items) return section.items.length
  if (section.groups) return section.groups.reduce((n, g) => n + g.items.length, 0)
  return 0
}
