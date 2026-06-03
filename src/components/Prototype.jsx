import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { ArrowRight } from 'lucide-react'

const steps = [
  { n: 1, label: 'PHYSICAL TAG', desc: 'Every garment has a unique QR tag (HeritageLens)' },
  { n: 2, label: 'SCAN QR CODE', desc: 'User scans the code using their phone camera' },
  { n: 3, label: 'LANDING PAGE', desc: "User arrives at the garment's dedicated story page" },
  { n: 4, label: 'ORIGIN STORY', desc: 'History, region, and cultural significance of the craft' },
  { n: 5, label: 'ARTISAN STORY', desc: 'Meet the weaver behind this specific piece' },
  { n: 6, label: 'AR EXPERIENCE', desc: 'Scan space to see the motif visualised in AR' },
  { n: 7, label: 'SHARE & SAVE', desc: 'Save to collection or share the story' },
]

const perspectives = [
  {
    title: 'Consumer Side',
    color: '#B85C38',
    content: 'Scan at point of purchase. Access origin, artisan profile, cultural story instantly. AR lets you visualise the motif in your own space before buying. Every piece becomes a relationship, not a transaction.',
  },
  {
    title: 'Artisan Side',
    color: '#6B8F71',
    content: 'Every weaver gets a digital profile. Every garment is linked to its maker. Direct recognition, direct connection to the buyer — the middleman no longer controls their visibility or story.',
  },
  {
    title: 'Platform / Tech Side',
    color: '#2D3561',
    content: 'React.js + Next.js frontend. Node.js + Express backend. MongoDB database. Firebase Storage for media and AR assets. WebXR / Three.js / 8th Wall for AR layer. QR Library for generation and scanning.',
  },
  {
    title: 'Government / Policy Side',
    color: '#C9952A',
    content: 'Integrates with existing GI tagging infrastructure. Each HeritageLens tag links to the official government GI certification — making authenticity legally verifiable rather than trust-based for the first time.',
  },
  {
    title: 'Value Delivered',
    color: '#B85C38',
    items: [
      'Preserves cultural heritage through documentation and storytelling',
      'Connects artisans directly to global consumers',
      'Eliminates authenticity ambiguity at point of purchase',
      'Builds emotional connection to justify premium pricing',
      'Promotes Indian textiles to international audiences',
    ],
  },
]

const testing = {
  primary: [
    'User interviews with 18–28 consumers on willingness to scan garment QR tags in-store',
    'A/B test: Kalamkari purchase rate with vs. without AR Origin Tag present at point of display',
    'Prototype demo sessions at Mahindra University campus — think-aloud protocol',
    'Survey of Kalamkari artisans on willingness to participate in digital profiling system',
  ],
  assumptions: [
    'Consumers will scan a garment tag if they know it reveals a story (not just product specs)',
    'Seeing the artisan\'s face and name increases willingness to pay a 15–20% premium',
    'AR experience creates sufficient novelty to drive organic social sharing',
    'Artisans in Pedana and Machilipatnam can participate with minimal smartphone friction',
  ],
}

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }
const item = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

export default function Prototype() {
  return (
    <section id="prototype" className="py-[120px]" style={{ backgroundColor: '#1A1614' }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <SectionHeader
          phase="Prototype Phase"
          title="AR Origin Tags"
          light
        />

        {/* Large subtitle */}
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="font-cormorant font-medium text-[#F5F0E8]/60 mb-16"
          style={{ fontSize: 'clamp(24px, 3.5vw, 42px)' }}
        >
          Bringing Every Garment's Story to Life
        </motion.h3>

        {/* AROT acronym */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-20 p-10 md:p-14 bg-white/5 rounded-sm"
        >
          {[
            { letter: 'A', word: 'Augmented Reality' },
            { letter: 'R', word: '' },
            { letter: 'O', word: 'Origin Story' },
            { letter: 'T', word: 'Tag on Every Garment' },
          ].map((row) => (
            <div key={row.letter} className="flex items-baseline gap-6 mb-3">
              <span
                className="font-cormorant font-semibold leading-none"
                style={{ color: '#B85C38', fontSize: 'clamp(48px, 7vw, 80px)', width: '1.1em', flexShrink: 0 }}
              >
                {row.letter}
              </span>
              <span className="font-cormorant font-light text-[#F5F0E8]/60" style={{ fontSize: 'clamp(20px, 2.5vw, 32px)' }}>
                {row.word}
              </span>
            </div>
          ))}
        </motion.div>

        {/* How it works */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <p className="font-dm text-[11px] tracking-widest uppercase text-[#F5F0E8]/40 mb-6">
            How It Works
          </p>
          <p className="font-dm font-light text-[#F5F0E8]/80 leading-[1.9] max-w-3xl"
            style={{ fontSize: 'clamp(15px, 1.6vw, 19px)' }}>
            When a consumer scans the QR tag attached to a Kalamkari garment, they are taken to HeritageLens —
            a rich digital story page showing the region the cloth came from, the artisan who made it,
            the 400-year history of the craft, and an AR visualisation of the motif in their own space.
            The moment of purchase transforms from a price-vs-price decision into a cultural encounter.
            The artisan becomes visible. The price becomes justified. The garment becomes meaningful.
          </p>
        </motion.div>

        {/* 7-step flow */}
        <p className="font-dm text-[11px] tracking-widest uppercase text-[#F5F0E8]/40 mb-8">
          7-Step User Flow
        </p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={container}
          className="flex flex-wrap md:flex-nowrap gap-2 mb-20 overflow-x-auto pb-2"
        >
          {steps.map((step, i) => (
            <motion.div
              key={step.n}
              variants={item}
              className="flex items-stretch gap-2 flex-shrink-0"
            >
              <div className="bg-white/5 p-5 rounded-sm min-w-[130px] md:min-w-0 flex-1">
                <div className="w-7 h-7 rounded-full bg-terracotta flex items-center justify-center mb-3">
                  <span className="font-dm font-medium text-xs text-white">{step.n}</span>
                </div>
                <p className="font-dm font-medium text-[10px] tracking-widest uppercase text-[#F5F0E8]/50 mb-1">
                  {step.label}
                </p>
                <p className="font-dm font-light text-xs text-[#F5F0E8]/60 leading-relaxed">
                  {step.desc}
                </p>
              </div>
              {i < steps.length - 1 && (
                <div className="flex items-center flex-shrink-0">
                  <ArrowRight size={14} className="text-[#F5F0E8]/20" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Stakeholder perspectives */}
        <p className="font-dm text-[11px] tracking-widest uppercase text-[#F5F0E8]/40 mb-6">
          Stakeholder Perspectives
        </p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20"
        >
          {perspectives.map((p) => (
            <motion.div key={p.title} variants={item} className="p-8 bg-white/5 rounded-sm">
              <div className="w-8 h-0.5 mb-4" style={{ backgroundColor: p.color }} />
              <h3 className="font-cormorant font-semibold text-xl text-[#F5F0E8] mb-4">{p.title}</h3>
              {p.content ? (
                <p className="font-dm font-light text-sm text-[#F5F0E8]/60 leading-relaxed">{p.content}</p>
              ) : (
                <ul className="space-y-2">
                  {p.items.map((it, i) => (
                    <li key={i} className="font-dm font-light text-sm text-[#F5F0E8]/60 flex items-start gap-2">
                      <span className="text-terracotta mt-1">→</span>
                      {it}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Testing strategy */}
        <p className="font-dm text-[11px] tracking-widest uppercase text-[#F5F0E8]/40 mb-6">
          Testing Strategy
        </p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="p-8 bg-white/5 rounded-sm">
            <h3 className="font-cormorant font-semibold text-xl text-[#F5F0E8] mb-5">Primary Methods</h3>
            <ul className="space-y-3">
              {testing.primary.map((m, i) => (
                <li key={i} className="font-dm font-light text-sm text-[#F5F0E8]/60 flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-terracotta flex-shrink-0 mt-1.5" />
                  {m}
                </li>
              ))}
            </ul>
          </div>
          <div className="p-8 bg-white/5 rounded-sm">
            <h3 className="font-cormorant font-semibold text-xl text-[#F5F0E8] mb-5">Key Assumptions to Test</h3>
            <ul className="space-y-3">
              {testing.assumptions.map((a, i) => (
                <li key={i} className="font-dm font-light text-sm text-[#F5F0E8]/60 flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-sage flex-shrink-0 mt-1.5" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
