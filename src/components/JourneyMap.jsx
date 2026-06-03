import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import SectionHeader from './SectionHeader'

const stages = ['Awareness', 'Exploration', 'Evaluation', 'Preference', 'Decision']

const stagesFull = [
  'Awareness / Need Recognition',
  'Exploration',
  'Evaluation',
  'Preference Formation',
  'Decision / Purchase',
]

const rows = [
  { label: 'Actions', values: ['Decides to shop for new clothes', 'Compares artistic vs plain designs', 'Checks design, color, durability', 'Selects based on design aesthetic / Indian-inspired', 'Chooses based on color and final design appeal'] },
  { label: 'Touchpoints', values: ['Brand stores, malls, Myntra, Instagram', 'Store displays, catalogs, social media', 'Physical inspection, trying on, reviews', 'Brand sections, themed collections, product origin story', 'Billing counter, purchase platform'] },
  { label: 'Thoughts', values: ['"I want something unique and good quality."', '"Does this suit the occasion?"', '"Will this last long?"', '"Indian designs suit me better."', '"Avoid colors I don\'t like."'] },
  { label: 'Says', values: ['"I prefer brand-name clothes."', '"Depends on whether it\'s formal or casual."', '"Customised is better than handmade for durability."', '"I prefer Indian-inspired designs over western."', '"Color can instantly make me dislike a product."'] },
  { label: 'Feels', values: ['Curious, slightly excited', 'Thoughtful, selective', 'Analytical, cautious', 'Confident, interested', 'Decisive — satisfied if criteria met'], isFeels: true },
  { label: 'Pain Points', values: ['Too many generic/plain options', 'Difficulty balancing occasion vs. style', 'Durability concern with handmade items', 'Limited availability of modern Indian designs', 'Limited preferred color options'] },
  { label: 'Opportunities', values: ['Highlight uniqueness and design differentiation', 'Categorise by occasion clearly', 'Emphasise quality assurance and longevity', 'Expand trendy Indian-fusion collections', 'Offer customisable color variants'], isOpportunity: true },
]

const scores = [5, 3, 2, 6, 7]
const stageColors = ['#B85C38', '#C9952A', '#2D3561', '#6B8F71', '#B85C38']

const feelColors = ['#C9952A', '#6B8F71', '#2D3561', '#6B8F71', '#B85C38']

function EmotionCurve() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })

  const W = 600
  const H = 120
  const pad = 40
  const innerW = W - pad * 2
  const innerH = H - 20

  const pts = scores.map((s, i) => ({
    x: pad + (i / (scores.length - 1)) * innerW,
    y: 10 + (1 - s / 10) * innerH,
    score: s,
  }))

  // Build smooth cubic bezier path
  const pathD = pts.reduce((acc, pt, i) => {
    if (i === 0) return `M ${pt.x} ${pt.y}`
    const prev = pts[i - 1]
    const cpx = (prev.x + pt.x) / 2
    return `${acc} C ${cpx} ${prev.y} ${cpx} ${pt.y} ${pt.x} ${pt.y}`
  }, '')

  const areaD = `${pathD} L ${pts[pts.length - 1].x} ${H} L ${pts[0].x} ${H} Z`

  return (
    <div ref={ref} className="mt-8 bg-surface border border-ink/8 p-6 md:p-8 rounded-sm">
      <p className="font-dm text-[10px] tracking-[0.2em] uppercase text-ink/35 mb-6">Emotion Curve — Journey Score</p>
      <div className="relative">
        <svg viewBox={`0 0 ${W} ${H}`} className="w-full" style={{ height: 100 }} preserveAspectRatio="none">
          {/* Area fill */}
          <motion.path
            d={areaD}
            fill="url(#emotionGrad)"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
          />
          {/* Line */}
          <motion.path
            d={pathD}
            fill="none"
            stroke="#B85C38"
            strokeWidth="2.5"
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={inView ? { pathLength: 1, opacity: 1 } : {}}
            transition={{ duration: 1.4, ease: 'easeOut' }}
          />
          {/* Dots */}
          {pts.map((pt, i) => (
            <motion.circle
              key={i}
              cx={pt.x}
              cy={pt.y}
              r="5"
              fill="white"
              stroke="#B85C38"
              strokeWidth="2"
              initial={{ scale: 0 }}
              animate={inView ? { scale: 1 } : {}}
              transition={{ duration: 0.3, delay: 0.6 + i * 0.15 }}
            />
          ))}
          <defs>
            <linearGradient id="emotionGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#B85C38" stopOpacity="0.12" />
              <stop offset="100%" stopColor="#B85C38" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>

        {/* Stage labels + scores below */}
        <div className="flex mt-3">
          {pts.map((pt, i) => (
            <div key={i} className="flex-1 text-center">
              <p className="font-cormorant font-semibold text-xl text-terracotta leading-none">{scores[i]}</p>
              <p className="font-dm text-[9px] tracking-widest uppercase text-ink/35 mt-1">{stages[i]}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function JourneyMap() {
  const [activeStage, setActiveStage] = useState(0)

  return (
    <section id="journey" className="min-h-screen py-16 flex flex-col justify-center" style={{ backgroundColor: '#F5F0E8' }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <SectionHeader
          phase="Empathy Phase"
          title="Journey & Empathy Map"
          subtitle="Tracing the emotional and decision journey of a young Indian consumer across five key stages."
        />

        {/* Stage tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap gap-1 mb-8"
        >
          {stagesFull.map((s, i) => (
            <button
              key={i}
              onClick={() => setActiveStage(i)}
              className="px-4 py-2 rounded-sm font-dm text-xs font-medium tracking-wider uppercase transition-all"
              style={{
                backgroundColor: activeStage === i ? stageColors[i] : 'transparent',
                color: activeStage === i ? 'white' : 'rgba(26,22,20,0.4)',
                border: `1px solid ${activeStage === i ? stageColors[i] : 'rgba(26,22,20,0.12)'}`,
              }}
            >
              {s}
            </button>
          ))}
        </motion.div>

        {/* Stage detail card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStage}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-ink/8 mb-8"
          >
            {rows.map((row, ri) => (
              <div
                key={ri}
                className="bg-surface p-6"
              >
                <p
                  className="font-dm font-medium text-[10px] tracking-[0.18em] uppercase mb-3"
                  style={{ color: row.isOpportunity ? '#6B8F71' : row.isFeels ? '#C9952A' : 'rgba(26,22,20,0.35)' }}
                >
                  {row.label}
                </p>
                <p className="font-dm font-light text-sm text-ink/70 leading-relaxed">
                  {row.values[activeStage]}
                </p>
              </div>
            ))}
            <div className="bg-surface p-6 flex flex-col justify-center items-center">
              <p className="font-dm text-[10px] tracking-widest uppercase text-ink/35 mb-2">Emotion</p>
              <p className="font-cormorant font-semibold text-ink leading-none" style={{ fontSize: '56px' }}>
                {scores[activeStage]}
              </p>
              <p className="font-dm text-[10px] text-ink/30 mt-1">/ 10</p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Full table — desktop only, scrollable */}
        <div className="hidden lg:block overflow-x-auto mb-6">
          <table className="w-full border-collapse min-w-[900px]">
            <thead>
              <tr>
                <th className="w-28 py-3 pr-4 text-left font-dm text-[9px] tracking-[0.2em] uppercase text-ink/25 align-bottom">Stage</th>
                {stagesFull.map((s, i) => (
                  <th key={i} className="py-3 px-4 text-left font-dm font-medium text-xs text-ink/60 align-bottom border-l border-ink/8">
                    {s}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={ri} className={ri % 2 === 0 ? 'bg-surface' : 'bg-linen'}>
                  <td className={`py-3 pr-4 font-dm font-medium text-[10px] tracking-widest uppercase align-top ${row.isOpportunity ? 'text-sage' : 'text-terracotta'}`}>
                    {row.label}
                  </td>
                  {row.values.map((val, vi) => (
                    <td key={vi} className="py-3 px-4 font-dm font-light text-xs text-ink/65 align-top border-l border-ink/8 leading-relaxed">{val}</td>
                  ))}
                </tr>
              ))}
              <tr className="bg-surface">
                <td className="py-3 pr-4 font-dm font-medium text-[10px] tracking-widest uppercase text-terracotta align-middle">Score</td>
                {scores.map((s, i) => (
                  <td key={i} className="py-3 px-4 border-l border-ink/8 align-middle">
                    <span className="font-cormorant font-semibold text-2xl text-terracotta">{s}</span>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <EmotionCurve />
      </div>
    </section>
  )
}

