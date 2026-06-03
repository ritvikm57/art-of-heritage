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
  { title: 'Consumer Side', color: '#B85C38', content: 'Scan at point of purchase. Access origin, artisan profile, cultural story instantly. AR lets you visualise the motif in your own space before buying. Every piece becomes a relationship, not a transaction.' },
  { title: 'Artisan Side', color: '#6B8F71', content: 'Every weaver gets a digital profile. Every garment is linked to its maker. Direct recognition, direct connection to the buyer — the middleman no longer controls their visibility or story.' },
  { title: 'Platform / Tech Side', color: '#2D3561', content: 'React.js + Next.js frontend. Node.js + Express backend. MongoDB database. Firebase Storage for media and AR assets. WebXR / Three.js / 8th Wall for AR layer. QR Library for generation and scanning.' },
  { title: 'Government / Policy Side', color: '#C9952A', content: 'Integrates with existing GI tagging infrastructure. Each HeritageLens tag links to the official government GI certification — making authenticity legally verifiable rather than trust-based.' },
  {
    title: 'Value Delivered', color: '#B85C38',
    items: ['Preserves cultural heritage through documentation and storytelling', 'Connects artisans directly to global consumers', 'Eliminates authenticity ambiguity at point of purchase', 'Builds emotional connection to justify premium pricing', 'Promotes Indian textiles to international audiences'],
  },
]

const testing = {
  primary: ['User interviews with 18–28 consumers on willingness to scan garment QR tags in-store', 'A/B test: Kalamkari purchase rate with vs. without AR Origin Tag present at point of display', 'Prototype demo sessions at Mahindra University campus — think-aloud protocol', 'Survey of Kalamkari artisans on willingness to participate in digital profiling system'],
  assumptions: ['Consumers will scan a garment tag if they know it reveals a story (not just product specs)', "Seeing the artisan's face and name increases willingness to pay a 15–20% premium", 'AR experience creates sufficient novelty to drive organic social sharing', 'Artisans in Pedana and Machilipatnam can participate with minimal smartphone friction'],
}

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }
const item = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

export default function Prototype() {
  return (
    <section id="prototype" className="min-h-screen py-16 flex flex-col justify-center" style={{ backgroundColor: '#1A1614' }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <SectionHeader phase="Prototype Phase" title="AR Origin Tags" light />

        {/* Subtitle + AROT side by side */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24"
        >
          <div>
            <p className="font-cormorant font-light text-[#F5F0E8]/50 leading-snug mb-8"
              style={{ fontSize: 'clamp(20px, 2.5vw, 30px)' }}>
              Bringing Every Garment's Story to Life
            </p>
            <p className="font-dm font-light text-[#F5F0E8]/65 leading-[1.9] text-sm md:text-base">
              When a consumer scans the QR tag attached to a Kalamkari garment, they are taken to HeritageLens —
              a rich digital story page showing the region, the artisan, the 400-year history of the craft,
              and an AR visualisation of the motif in their own space. The moment of purchase transforms from
              a price-vs-price decision into a cultural encounter.
            </p>
          </div>

          {/* AROT acronym */}
          <div className="border-l border-white/10 pl-10 md:pl-14 flex flex-col justify-center">
            {[
              { letter: 'A', word: 'Augmented' },
              { letter: 'R', word: 'Reality' },
              { letter: 'O', word: 'Origin Story' },
              { letter: 'T', word: 'Tag on Every Garment' },
            ].map((row) => (
              <div key={row.letter} className="flex items-baseline gap-5 mb-2">
                <span className="font-cormorant font-semibold leading-none w-12 flex-shrink-0" style={{ color: '#B85C38', fontSize: 'clamp(40px, 5.5vw, 64px)' }}>
                  {row.letter}
                </span>
                <span className="font-cormorant font-light text-[#F5F0E8]/55" style={{ fontSize: 'clamp(16px, 1.8vw, 22px)' }}>
                  {row.word}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 7-step flow */}
        <p className="font-dm text-[11px] tracking-[0.2em] uppercase text-[#F5F0E8]/30 mb-6">7-Step User Flow</p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={container}
          className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-px bg-white/8 mb-24"
        >
          {steps.map((step) => (
            <motion.div key={step.n} variants={item} className="p-5 flex flex-col gap-4" style={{ backgroundColor: '#1A1614' }}>
              <div className="w-7 h-7 rounded-full bg-terracotta flex items-center justify-center flex-shrink-0">
                <span className="font-dm font-medium text-xs text-white">{step.n}</span>
              </div>
              <div>
                <p className="font-dm font-medium text-[10px] tracking-widest uppercase text-[#F5F0E8]/40 mb-1.5">{step.label}</p>
                <p className="font-dm font-light text-xs text-[#F5F0E8]/55 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stakeholder perspectives */}
        <p className="font-dm text-[11px] tracking-[0.2em] uppercase text-[#F5F0E8]/30 mb-6">Stakeholder Perspectives</p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/8 mb-20"
        >
          {perspectives.map((p) => (
            <motion.div key={p.title} variants={item} className="p-8 md:p-10 relative overflow-hidden" style={{ backgroundColor: '#1A1614' }}>
              <span className="absolute -bottom-4 -right-4 font-cormorant font-semibold leading-none select-none opacity-[0.04] text-[#F5F0E8]" style={{ fontSize: '90px' }}>
                {p.title.split(' ')[0]}
              </span>
              <div className="w-8 h-[3px] rounded-full mb-5" style={{ backgroundColor: p.color }} />
              <h3 className="font-cormorant font-semibold text-xl text-[#F5F0E8] mb-5">{p.title}</h3>
              {p.content ? (
                <p className="font-dm font-light text-sm text-[#F5F0E8]/60 leading-[1.9]">{p.content}</p>
              ) : (
                <ul className="space-y-2">
                  {p.items.map((it, i) => (
                    <li key={i} className="font-dm font-light text-sm text-[#F5F0E8]/60 flex items-start gap-3">
                      <span className="text-terracotta mt-0.5 flex-shrink-0">→</span>{it}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Testing */}
        <p className="font-dm text-[11px] tracking-[0.2em] uppercase text-[#F5F0E8]/30 mb-6">Testing Strategy</p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/8"
        >
          {[{ label: 'Primary Methods', items: testing.primary, color: '#B85C38' }, { label: 'Key Assumptions to Test', items: testing.assumptions, color: '#6B8F71' }].map((col) => (
            <div key={col.label} className="p-8 md:p-10" style={{ backgroundColor: '#1A1614' }}>
              <div className="w-8 h-[3px] rounded-full mb-5" style={{ backgroundColor: col.color }} />
              <h3 className="font-cormorant font-semibold text-xl text-[#F5F0E8] mb-6">{col.label}</h3>
              <ul className="space-y-4">
                {col.items.map((m, i) => (
                  <li key={i} className="font-dm font-light text-sm text-[#F5F0E8]/60 flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5" style={{ backgroundColor: col.color }} />{m}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
