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
        role: 'Overseas Social Media Operations Intern',
        points: [
          'Researched new-product communication using audience preferences, social feedback, and competitor campaign patterns, then distilled launch messages and content angles.',
          'Contributed to 50 Instagram assets across planning, shooting, editing, English copywriting, publishing schedules, and material organization.',
          'Supported online launch and FamilyMart communication with materials, store information, and publishing schedules. Completed 15+ content reviews; the account gained 11k+ followers during the project period, an account-level result.',
        ],
      },
      {
        period: '2024.10–2025.05',
        place: 'Xuanhua Intelligence · Beijing',
        role: 'AI Product Marketing Intern',
        points: [
          'Organized 100+ feedback items from teachers, students, and pilot users by issue type to identify common usage questions.',
          'Built the product WeChat content program from scratch, producing 30+ guides, FAQs, tutorials, and use cases. Core-feature usage rate increased 30% during the period.',
          'Independently wrote a Southeast Asia AI education cooperation proposal and drafted the agreement; incorporated feedback for management review and followed up on signing and handoff.',
          'Liaised with universities, planned presentation and trial sessions, coordinated demo and course materials, and organized onsite activities and Q&A. Developed 10+ improvement suggestions from teacher and student feedback for pilot follow-up.',
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
          'Conducted user and pricing research to inform outreach; independently designed selected online acquisition campaigns and supported promotion and execution at offline technology events.',
          'Tracked core metrics and built a lightweight AI-assisted operations dashboard to identify drop-off points in the user journey.',
          'Created promotional posters and 100+ WeChat, Xiaohongshu, and community posts. Supported finance and AI creator screening, content preparation, and publishing.',
          'Independently distributed relevant channel content, compared titles, covers, and copy, and reviewed performance to adjust channel spending. Registrations rose 50% versus the prior week; first-topic creation rate rose approximately 15% relatively. These were overall period results.',
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
        role: '海外新媒体运营实习生',
        points: [
          '参与新品传播调研，结合用户偏好、社媒反馈与竞品活动拆解提炼首发卖点和内容方向。',
          '参与完成50条Instagram内容的选题、拍摄、剪辑、英文文案、发布排期与素材整理。',
          '配合新品线上首发及FamilyMart线下渠道传播，整理素材、门店信息与排期，累计完成15+次内容复盘。项目期账号粉丝增长1.1w+，为账号整体结果。',
        ],
      },
      {
        period: '2024.10–2025.05',
        place: '北京织知玄华智能科技有限公司',
        role: 'AI产品营销实习生',
        points: [
          '整理教师、学生及试点用户100余条反馈，按问题类型归类，汇总常见使用问题。',
          '从0到1开展产品公众号内容建设，累计输出30+篇使用指南、FAQ、功能教程与场景案例；期间核心功能使用率提升30%。',
          '独立撰写东南亚AI教育产品合作方案及协议初稿，经负责人审阅确认后，跟进双方沟通、协议签署与项目交接。',
          '对接高校，安排产品宣讲与体验流程，协同准备演示、FAQ及课程材料，负责现场组织与使用答疑；结合师生反馈提出10余项优化建议，支持后续试点推进。',
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
          '整理反馈并开展价格问卷，按用户使用阶段制定触达策略；独立设计部分线上拉新活动，参与线下科技活动的宣传准备、产品推广与执行。',
          '跟踪核心指标，运用AI辅助搭建轻量级运营分析看板，识别用户路径中的流失节点。',
          '制作宣传海报，累计输出100+条公众号、小红书及社群内容；根据粉丝画像、内容方向和互动表现筛选金融、AI博主，参与内容准备与上线跟进。',
          '独立完成相关渠道分发，对标题、首图和内容进行对比测试，结合效果优化渠道预算；投放期新增注册较前一周提升50%，首次专题创建率相对提升约15%，为期间整体结果。',
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
