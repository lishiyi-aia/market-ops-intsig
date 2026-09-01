import { Suspense, useRef, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'
import * as THREE from 'three'
import Scene from './scene/Scene'
import NoiseOverlay from './ui/NoiseOverlay'
import Resume from './ui/Resume'
import Works from './ui/Works'
import LoadingScreen from './ui/LoadingScreen'
import { useStore } from './store'

function Backdrop() {
  // 点击空白处收起详情
  const setActive = useStore((s) => s.setActive)
  return (
    <mesh position={[0, 0, -40]} onClick={() => setActive(null)}>
      <planeGeometry args={[600, 300]} />
      <meshBasicMaterial transparent opacity={0} depthWrite={false} />
    </mesh>
  )
}

type Lang = 'en' | 'zh'

const COPY = {
  en: {
    title: 'Market Operations',
    paragraphs: [
      "Shiyi Li · 2027 Master of Marketing candidate. I turn product and audience insights into campaign plans, partnership materials, channel execution, and measurable reviews.",
    ],
  },
  zh: {
    title: '市场运营',
    paragraphs: [
      '李世怡｜2027届市场营销硕士。将产品与用户洞察转化为活动方案、合作资料、传播物料、渠道执行和可量化复盘。',
    ],
  },
}

const ROLE_FOCUS = {
  zh: {
    eyebrow: 'ROLE MATCH · 项目证据',
    title: '活动、合作与渠道复盘，分别由真实项目支撑',
    intro: '围绕市场运营的三项核心任务，展示从方案准备、资源协同到效果评估的完整执行证据。',
    items: [
      {
        no: '01',
        title: '活动策划与执行',
        proof: 'AI资讯产品 × ZUS Everywhere',
        points: ['3套线上活动路径', '新品首发与零售传播', '规则、流程、排期与传播物料'],
      },
      {
        no: '02',
        title: '机构与渠道合作',
        proof: '生成式AI教育产品',
        points: ['高校与教育机构试点', '产品演示、课程与合作资料', '跨产品、内容和业务协同'],
      },
      {
        no: '03',
        title: '渠道运营与数据复盘',
        proof: 'AI资讯产品 × ZUS Everywhere',
        points: ['科技媒体、社区与KOL/KOC', 'Campaign ID与转化漏斗', '15+轮内容复盘与资源调整'],
      },
    ],
  },
  en: {
    eyebrow: 'ROLE MATCH · PROJECT EVIDENCE',
    title: 'Campaigns, partnerships, and channel reviews backed by real projects',
    intro: 'Evidence from campaign planning and resource coordination through execution and performance evaluation.',
    items: [
      {
        no: '01',
        title: 'Campaign Planning & Execution',
        proof: 'AI Information Product × ZUS Everywhere',
        points: ['Three online campaign journeys', 'Product launch and retail communication', 'Rules, flows, schedules, and materials'],
      },
      {
        no: '02',
        title: 'Institution & Channel Partnerships',
        proof: 'Generative AI Education Product',
        points: ['University and institution pilots', 'Demos, course, and cooperation materials', 'Cross-functional coordination'],
      },
      {
        no: '03',
        title: 'Channel Operations & Review',
        proof: 'AI Information Product × ZUS Everywhere',
        points: ['Tech media, communities, and creators', 'Campaign IDs and conversion funnels', '15+ review cycles and allocation changes'],
      },
    ],
  },
}

function Hero({ lang, cueOpacity }: { lang: Lang; cueOpacity: MotionValue<number> }) {
  const { title, paragraphs } = COPY[lang]
  const aboutRef = useRef(null)
  // 触发起点提前：about 顶部位于视口 60% 处即开始（offset[0] 进度 0），到达顶部为进度 1
  const { scrollYProgress } = useScroll({
    target: aboutRef,
    offset: ['start 0.6', 'start start'],
  })
  // 透明度在 about 顶部升到约 30vh 时归 0：起点 60%→进度 p 时顶部在 0.6×(1−p)，
  // 令 =0.3 解得 p=0.5，故 opacity 区间 [0, 0.5]
  const blur = useTransform(scrollYProgress, [0, 0.5], ['blur(0px)', 'blur(16px)'])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
  // 视差：标题上升更快、字距随滚动拉开；正文上升慢一点
  const titleY = useTransform(scrollYProgress, [0, 1], [0, -96])
  const bodyY = useTransform(scrollYProgress, [0, 1], [0, -52])
  const titleSpacing = useTransform(scrollYProgress, [0, 1], ['0.01em', '0.42em'])
  return (
    <section className="hero">
      <motion.div
        className="about"
        lang={lang}
        ref={aboutRef}
        style={{ filter: blur, opacity }}
      >
        {/* 入场动画放内层，避免其 fill 锁住 opacity 覆盖外层滚动 opacity */}
        <div className="about-intro">
          <motion.h1 className="about-title" style={{ y: titleY, letterSpacing: titleSpacing }}>
            {title}
          </motion.h1>
          {paragraphs.map((p, i) => (
            <motion.p key={i} className="about-body" style={{ y: bodyY }}>
              {p}
            </motion.p>
          ))}
        </div>
      </motion.div>
      <motion.div className="scroll-cue" style={{ opacity: cueOpacity }} aria-hidden="true">
        <span className="scroll-cue-label">{lang === 'en' ? 'SCROLL' : '向下滚动'}</span>
        <span className="scroll-cue-track">
          <span className="scroll-cue-dot" />
        </span>
      </motion.div>
    </section>
  )
}

function LangToggle({ lang, onToggle }: { lang: Lang; onToggle: () => void }) {
  return (
    <button className="lang-toggle" onClick={onToggle} aria-label="切换语言 / Switch language">
      {lang === 'en' ? '中文' : 'EN'}
    </button>
  )
}

function RoleFocus({ lang }: { lang: Lang }) {
  const data = ROLE_FOCUS[lang]
  return (
    <section className="role-focus" lang={lang}>
      <motion.header
        className="role-focus-head"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-15% 0px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <span>{data.eyebrow}</span>
        <h2>{data.title}</h2>
        <p>{data.intro}</p>
      </motion.header>
      <div className="role-focus-grid">
        {data.items.map((item, index) => (
          <motion.article
            key={item.no}
            className="role-focus-item"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-12% 0px' }}
            transition={{ duration: 0.65, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="role-focus-no">{item.no}</span>
            <h3>{item.title}</h3>
            <strong>{item.proof}</strong>
            <ul>
              {item.points.map((point) => <li key={point}>{point}</li>)}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

export default function App() {
  const [lang, setLang] = useState<Lang>('zh')
  const { scrollY } = useScroll()
  // 作品区蒙层：以作品区顶部从视口底进入到视口中部的进度，驱动 3D 渐暗 + 模糊
  const worksRef = useRef(null)
  const { scrollYProgress: worksProgress } = useScroll({
    target: worksRef,
    offset: ['start end', 'start center'],
  })
  const fogBg = useTransform(
    worksProgress,
    [0, 1],
    ['rgba(8, 11, 18, 0)', 'rgba(8, 11, 18, 0.41)'] // 压暗减半（原 0.82）
  )
  const fogBlur = useTransform(worksProgress, [0, 1], ['blur(0px)', 'blur(10px)'])
  // 滚动渐暗：离开首屏后压暗 3D 场景，保证履历文字可读
  const scrimOpacity = useTransform(scrollY, [0, 520], [0, 0.4])
  // 首屏滚动提示随之淡出
  const cueOpacity = useTransform(scrollY, [0, 160], [1, 0])
  // 首屏底部渐变底色：开始滑动后淡出
  const heroGradientOpacity = useTransform(scrollY, [0, 240], [1, 0])
  // 磨砂右轨：进入履历区后淡入（首屏不磨砂）
  const vh = typeof window !== 'undefined' ? window.innerHeight : 800
  const railOpacity = useTransform(scrollY, [vh * 0.5, vh * 1.1], [0, 1])
  // 首屏装饰画框/角标：滚动后淡出
  const heroChromeOpacity = useTransform(scrollY, [0, 280], [1, 0])

  return (
    <>
      {/* 加载遮罩：模型全部加载完成前覆盖全屏，完成后淡出 */}
      <LoadingScreen />

      {/* 固定的 3D 背景 */}
      <div className="scene-bg">
        <Canvas
          shadows={{ type: THREE.PCFShadowMap }}
          dpr={[1, 1.5]}
          camera={{ position: [0, 5, 19], fov: 39, near: 0.1, far: 500 }}
          gl={{ antialias: false, stencil: false, depth: true, toneMapping: THREE.ACESFilmicToneMapping }}
        >
          <color attach="background" args={['#0a0e16']} />
          <Suspense fallback={null}>
            <Backdrop />
            <Scene />
          </Suspense>
        </Canvas>
      </div>

      {/* 滚动渐暗蒙层 */}
      <motion.div className="scrim" style={{ opacity: scrimOpacity }} aria-hidden="true" />

      {/* 作品区固定蒙层：仅压暗（减半），模糊先注释掉 */}
      <motion.div
        className="stage-fog"
        style={{ background: fogBg /* , backdropFilter: fogBlur, WebkitBackdropFilter: fogBlur */ }}
        aria-hidden="true"
      />

      {/* 固定磨砂右轨（进入履历区淡入） */}
      <motion.div className="glass-rail" style={{ opacity: railOpacity }} aria-hidden="true" />

      {/* 首屏底部渐变底色，滚动后淡出 —— 暂时注释查看效果 */}
      {/* <motion.div
        className="hero-gradient"
        style={{ opacity: heroGradientOpacity }}
        aria-hidden="true"
      /> */}

      {/* 中英切换暂时隐藏，默认中文 */}
      {/* <LangToggle lang={lang} onToggle={() => setLang((l) => (l === 'en' ? 'zh' : 'en'))} /> */}

      {/* 首屏装饰：发丝内框 + 四角定位标 + 角标元数据（随滚动淡出） */}
      <motion.div className="hero-chrome" style={{ opacity: heroChromeOpacity }} aria-hidden="true">
        <div className="hero-frame" />
        <span className="hero-mark tl">+</span>
        <span className="hero-mark tr">+</span>
        <span className="hero-mark bl">+</span>
        <span className="hero-mark br">+</span>
        <div className="hero-meta hm-tl">
          <span className="hm-name">Shiyi Li 李世怡</span>
          <span>ACTIVITIES · PARTNERSHIPS · CHANNELS</span>
        </div>
        <div className="hero-meta hm-tr">2026</div>
        <div className="hero-meta hm-bl">Planning · Execution · Performance Review</div>
        <div className="hero-meta hm-right">Shanghai · 2027 Campus Recruitment</div>
      </motion.div>

      {/* 全屏胶片噪点蒙层（multiply 混合） */}
      <NoiseOverlay />

      {/* 可滚动内容 */}
      <main className="content">
        <Hero lang={lang} cueOpacity={cueOpacity} />
        <RoleFocus lang={lang} />
        <Resume lang={lang} />
        <Works lang={lang} innerRef={worksRef} />
      </main>
    </>
  )
}
