import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'
import SectionHeader from './SectionHeader'

const stages = [
  'Awareness / Need Recognition',
  'Exploration',
  'Evaluation',
  'Preference Formation',
  'Decision / Purchase',
]

const rows = [
  {
    label: 'Actions',
    values: [
      'Decides to shop for new clothes',
      'Compares artistic vs plain designs',
      'Checks design, color, durability',
      'Selects based on design aesthetic / Indian-inspired',
      'Chooses based on color and final design appeal',
    ],
  },
  {
    label: 'Touchpoints',
    values: [
      'Brand stores, malls, Myntra, Instagram',
      'Store displays, catalogs, social media',
      'Physical inspection, trying on, reviews',
      'Brand sections, themed collections, product origin story',
      'Billing counter, purchase platform',
    ],
  },
  {
    label: 'Thoughts',
    values: [
      '"I want something unique and good quality."',
      '"Does this suit the occasion?"',
      '"Will this last long?"',
      '"Indian designs suit me better."',
      '"Avoid colors I don\'t like."',
    ],
  },
  {
    label: 'Says',
    values: [
      '"I prefer brand-name clothes."',
      '"Depends on whether it\'s formal or casual."',
      '"Customised is better than handmade for durability."',
      '"I prefer Indian-inspired designs over western."',
      '"Color can instantly make me dislike a product."',
    ],
  },
  {
    label: 'Feels',
    values: [
      'Curious, slightly excited',
      'Thoughtful, selective',
      'Analytical, cautious',
      'Confident, interested',
      'Decisive — satisfied if criteria met',
    ],
  },
  {
    label: 'Emotion Score',
    values: ['5', '3', '2', '6', '7'],
    isScore: true,
  },
  {
    label: 'Pain Points',
    values: [
      'Too many generic/plain options',
      'Difficulty balancing occasion vs. style',
      'Durability concern with handmade items',
      'Limited availability of modern Indian designs',
      'Limited preferred color options',
    ],
  },
  {
    label: 'Opportunities',
    values: [
      'Highlight uniqueness and design differentiation',
      'Categorise by occasion clearly',
      'Emphasise quality assurance and longevity',
      'Expand trendy Indian-fusion collections',
      'Offer customisable color variants',
    ],
  },
]

const scores = [5, 3, 2, 6, 7]
const maxScore = 10
const W = 100
const H = 60
const pts = scores.map((s, i) => [
  (i / (scores.length - 1)) * W,
  H - (s / maxScore) * H,
])
const pathD = pts.map((p, i) => (i === 0 ? `M ${p[0]} ${p[1]}` : `L ${p[0]} ${p[1]}`)).join(' ')

function EmotionCurve() {
  const controls = useAnimation()
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.3 })

  useEffect(() => {
    if (inView) controls.start({ pathLength: 1, transition: { duration: 1.5, ease: 'easeOut' } })
  }, [inView, controls])

  return (
    <div ref={ref} className="mt-6 p-6 bg-ink/5 rounded-sm">
      <p className="font-dm text-xs text-ink/40 tracking-widest uppercase mb-4">Emotion Curve</p>
      <div className="flex items-end gap-6">
        <svg viewBox={`0 0 ${W} ${H}`} className="flex-1" style={{ height: 80 }} preserveAspectRatio="none">
          <motion.path
            d={pathD}
            fill="none"
            stroke="#B85C38"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={controls}
          />
          {pts.map((p, i) => (
            <circle key={i} cx={p[0]} cy={p[1]} r="2.5" fill="#B85C38" />
          ))}
        </svg>
        <div className="flex gap-4 flex-shrink-0">
          {scores.map((s, i) => (
            <div key={i} className="text-center">
              <p className="font-cormorant font-semibold text-xl text-terracotta">{s}</p>
              <p className="font-dm text-[9px] text-ink/40 uppercase tracking-wider mt-0.5">
                {['Need', 'Explore', 'Eval', 'Prefer', 'Buy'][i]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function JourneyMap() {
  return (
    <section id="journey" className="py-[120px]" style={{ backgroundColor: '#F5F0E8' }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <SectionHeader
          phase="Empathy Phase"
          title="Journey & Empathy Map"
          subtitle="Tracing the emotional and decision journey of a young Indian consumer across five key stages."
        />

        {/* Horizontal scroll table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="overflow-x-auto -mx-6 px-6 md:mx-0 md:px-0"
        >
          <div className="min-w-[900px]">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="w-28 py-4 pr-6 text-left font-dm text-[10px] tracking-widest uppercase text-ink/30 align-bottom">
                    Stage
                  </th>
                  {stages.map((s, i) => (
                    <th key={i} className="py-4 px-4 text-left font-dm font-medium text-xs text-ink/70 align-bottom border-l border-ink/10">
                      {s}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((row, ri) => (
                  <tr key={ri} className={ri % 2 === 0 ? 'bg-surface' : ''}>
                    <td className="py-4 pr-6 font-dm font-medium text-[11px] tracking-widest uppercase text-terracotta align-top">
                      {row.label}
                    </td>
                    {row.values.map((val, vi) => (
                      <td
                        key={vi}
                        className={`py-4 px-4 font-dm font-light text-sm text-ink/70 align-top border-l border-ink/10 leading-relaxed ${
                          row.isScore ? 'font-cormorant font-semibold text-2xl text-terracotta' : ''
                        }`}
                      >
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        <EmotionCurve />
      </div>
    </section>
  )
}
