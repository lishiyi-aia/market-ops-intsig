import { motion } from 'framer-motion'
import { FOCUS_POINTS } from '../data/focusPoints'

// 履历数据（双语）。英文为译稿，可按需润色。
interface ResumeEntry {
  period: string
  place: string
  role?: string
  points?: string[]
}
const RESUME: Record<'en' | 'zh', { title: string; entries: ResumeEntry[] }> = {
  en: {
    title: 'Resume 简历',
    entries: [
      {
        period: '2021.09–2024.10',
        place: 'Universiti Kebangsaan Malaysia（UKM｜QS 130）',
        role: 'Bachelor of Business Administration',
        points: [
          'Relevant coursework in Marketing Management, Business Statistics, Organizational Behaviour, International Business, Business Communication, and Operations Management.',
        ],
      },
      {
        period: '2023.12–2024.06',
        place: 'ZUS Coffee · Malaysia',
        role: 'New Media Operations Intern',
        points: [
          'Researched new-product communication using audience preferences, social feedback, and competitor campaign patterns, then distilled launch messages and content angles.',
          'Contributed to 50 Instagram assets across planning, shooting, editing, English copywriting, publishing schedules, and material organization.',
          'Supported online launch activity and FamilyMart retail communication, completing 15+ review cycles by reach, engagement, and follower growth; the account reached 11k+ followers during the project period.',
        ],
      },
      {
        period: '2024.10–2025.05',
        place: 'Xuanhua Intelligence · Beijing',
        role: 'AI Product Operations Intern',
        points: [
          'Organized 100+ feedback items from teachers, students, and pilot users to identify institutional needs and high-frequency experience issues.',
          'Produced 30+ guides, FAQs, tutorials, and instructor-facing cases for product communication and pilot onboarding.',
          'Prepared product demos, course materials, and cooperation materials; coordinated feedback with product, content, and business teams.',
          'Supported university and education-institution pilots with 10+ recommendations, contributing to a 30% increase in core feature adoption.',
        ],
      },
      {
        period: '2025.08–Present (Expected Feb 2027)',
        place: 'University of Sydney（USYD｜QS 28）',
        role: 'Master of Marketing',
        points: [
          'Relevant coursework in Marketing Analytics, Consumer Behaviour, Marketing Research, Customer Analytics and CRM, B2B Marketing, and New Product Marketing.',
        ],
      },
      {
        period: '2025.12–2026.02',
        place: 'Beijing Sohu New Media',
        role: 'AI Product Operations Intern',
        points: [
          'Planned three online campaign journeys around an AI-tracking challenge, industry templates, and weekly co-creation, covering rules, participation flow, materials, and measurement.',
          'Produced 100+ WeChat, Xiaohongshu, and community assets; coordinated campaign briefs and launch materials across product and content needs.',
          'Managed tech media, product communities, and KOL/KOC channels from screening, quotes, and briefs through publishing and performance review.',
          'Tracked reach, visits, registrations, and first-topic activation by Campaign ID; campaign-period registrations increased 50% WoW and informed channel allocation.',
        ],
      },
    ],
  },
  zh: {
    title: 'Resume 简历',
    entries: [
      {
        period: '2021.09–2024.10',
        place: '马来西亚国立大学（UKM｜QS 130）',
        role: '工商管理学士',
        points: [
          '主修营销管理、商业统计、组织行为、国际商务、商务沟通与运营管理。',
        ],
      },
      {
        period: '2023.12–2024.06',
        place: 'ZUS Coffee · 马来西亚',
        role: '新媒体运营实习生',
        points: [
          '参与新品传播调研，结合用户偏好、社媒反馈与竞品活动拆解提炼首发卖点和内容方向。',
          '参与完成50条Instagram内容的选题、拍摄、剪辑、英文文案、发布排期与素材整理。',
          '配合新品线上首发及FamilyMart线下渠道传播，完成15+轮数据复盘并根据触达、互动与粉丝增长优化内容，项目期账号粉丝规模达到1.1万+。',
        ],
      },
      {
        period: '2024.10–2025.05',
        place: '玄华智能（北京）科技有限公司',
        role: 'AI产品运营实习生',
        points: [
          '整理教师、学生及试点用户100余条反馈，识别院校需求与高频体验问题。',
          '输出30余篇使用指南、FAQ、功能教程与教师案例，支持产品宣讲和试点用户上手。',
          '整理产品演示、课程方案与合作资料，协同产品、内容和业务团队处理一线问题。',
          '支持高校及教育机构试点，输出10余项优化建议，推动核心功能使用率提升30%。',
        ],
      },
      {
        period: '2025.08–至今（预计2027.02毕业）',
        place: '悉尼大学（USYD｜QS 28）',
        role: '市场营销硕士',
        points: [
          '主修营销分析、消费者行为、市场研究、客户分析与CRM、B2B营销及新产品营销。',
        ],
      },
      {
        period: '2025.12–2026.02',
        place: '北京搜狐新媒体信息有限公司',
        role: 'AI产品运营实习生',
        points: [
          '围绕AI热点追踪挑战、行业专题模板与周报共创策划3套线上活动路径，梳理活动规则、参与流程、物料和效果指标。',
          '输出100+条公众号、小红书及社群内容，协同产品与内容需求准备活动Brief、招募和激活物料。',
          '管理科技媒体、产品社区与KOL/KOC渠道，参与筛选、报价、合作Brief、发布跟进及投后复盘。',
          '通过Campaign ID跟踪触达、访问、注册与首次专题创建；投放期新增注册环比提升50%，并按渠道质量调整资源投入。',
        ],
      },
    ],
  },
}

// 履历条目依次对应 glb 里的聚焦锚点（相机停靠点），顺序须与 entries 一致。
// 名单是唯一真源，见 data/focusPoints.ts（Scene.tsx 也从那里取）。
const POINT_ORDER = FOCUS_POINTS

const EASE = [0.22, 1, 0.36, 1]
const containerV = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.04 } },
}
const itemV = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: EASE } },
}

function Entry({ entry, index }: { entry: ResumeEntry; index: number }) {
  return (
    <motion.div
      className="tl-entry"
      data-point={POINT_ORDER[index]}
      variants={containerV}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-12% 0px -12% 0px' }}
    >
      <motion.span className="tl-dot" variants={itemV} aria-hidden="true" />
      {/* tl-body 包住文字内容（点保持在外做时间轴标记）：移动端可给它加卡片衬底，
          且它紧贴内容高度，不含 tl-entry 用于排布的大 padding。
          用普通 div（非 motion）：framer 变体经 React context 穿透它，叶子元素仍是
          tl-entry 的直接 stagger 子级，入场动画与包裹前完全一致。 */}
      <div className="tl-body">
        <motion.div className="tl-period" variants={itemV}>
          {entry.period}
        </motion.div>
        <motion.div className="tl-head" variants={itemV}>
          <h3 className="tl-place">{entry.place}</h3>
        </motion.div>
        {entry.role && (
          <motion.div className="tl-role" variants={itemV}>
            {entry.role}
          </motion.div>
        )}
        {entry.points && (
          <motion.ul className="tl-points" variants={itemV}>
            {entry.points.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </motion.ul>
        )}
      </div>
    </motion.div>
  )
}

export default function Resume({ lang }: { lang: 'en' | 'zh' }) {
  const data = RESUME[lang]
  return (
    <section className="resume" lang={lang}>
      <motion.h2
        className="resume-title"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-10% 0px' }}
        transition={{ duration: 0.7, ease: EASE }}
      >
        {data.title}
      </motion.h2>
      <div className="timeline">
        {data.entries.map((e, i) => (
          <Entry key={i} entry={e} index={i} />
        ))}
      </div>
    </section>
  )
}
