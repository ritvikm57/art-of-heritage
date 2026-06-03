import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { ChevronDown } from 'lucide-react'

const quadrants = [
  {
    title: 'Goals',
    color: '#B85C38',
    items: [
      'Find clothing that is unique, comfortable, and culturally meaningful',
      'Support Indian artisans while maintaining personal style identity',
      'Access traditional textiles in daily-wear compatible formats',
      'Discover authentic products without hunting through exhibitions or craft fairs',
    ],
  },
  {
    title: 'Frustrations',
    color: '#2D3561',
    items: [
      'Kalamkari not present in platforms and stores he actually shops at',
      'Machine prints dominate, making authentic handloom invisible by default',
      'Higher price without any visible quality or story justification',
      'Can\'t find traditional pieces in modern cuts suitable for college or casual wear',
    ],
  },
  {
    title: 'Behaviours',
    color: '#6B8F71',
    items: [
      'Discovers fashion through Instagram Reels and fashion exhibitions',
      'Shops online by default — Myntra, Amazon, Instagram shops',
      'Gravitates to fusion pieces over purely traditional styles',
      'Prioritises design quality and uniqueness in final purchase decision',
    ],
  },
  {
    title: 'A Day In Their Life',
    color: '#C9952A',
    isNarrative: true,
    text: 'Kaushil scrolls Instagram in the morning — global brands dominate his feed. When shopping, he opens Myntra, where traditional listings are buried 12 pages deep. At a university craft fair he sees Kalamkari and feels genuinely drawn to it — but there\'s no way to get back to it later.',
  },
]

const assumptions = [
  'Users will choose traditional clothing if available in modern cuts',
  'Price sensitivity decreases when the garment\'s story is visible',
  'Fusion design (traditional fabric + contemporary silhouette) is the entry point',
  'Social media discovery is more effective than in-store for this demographic',
]

function QuadCard({ q, isOpen, onToggle }) {
  return (
    <div className="p-0">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-8 py-6 text-left"
      >
        <div className="flex items-center gap-4">
          <div className="w-6 h-[2px] rounded-full" style={{ backgroundColor: q.color }} />
          <span className="font-cormorant font-semibold text-xl text-[#F5F0E8]">{q.title}</span>
        </div>
        <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={14} className="text-[#F5F0E8]/30" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-8 pb-7">
              {q.isNarrative ? (
                <p className="font-dm font-light text-sm text-[#F5F0E8]/60 leading-[1.9]">{q.text}</p>
              ) : (
                <ul className="space-y-2.5">
                  {q.items.map((it, i) => (
                    <li key={i} className="font-dm font-light text-sm text-[#F5F0E8]/60 flex items-start gap-3">
                      <span className="w-1 h-1 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: q.color }} />{it}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }
const item = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }

export default function UserPersona() {
  const [openQuad, setOpenQuad] = useState(0)
  const [showAssumptions, setShowAssumptions] = useState(false)

  return (
    <section id="persona" className="py-[120px]" style={{ backgroundColor: '#1A1614' }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <SectionHeader phase="Empathy Phase" title="User Persona" subtitle="Built from 2 interviews and 144 survey responses." light />

        {/* Hero card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8 }}
          className="mb-2 relative overflow-hidden"
          style={{ backgroundColor: '#231E1B' }}
        >
          <span className="absolute -right-8 bottom-0 font-cormorant font-semibold text-[#F5F0E8] opacity-[0.04] select-none leading-none" style={{ fontSize: '240px' }}>KR</span>
          <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row gap-8 md:gap-14 items-start">
            {/* Avatar */}
            <div className="flex-shrink-0 flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-0">
              <div className="w-14 h-14 rounded-full bg-terracotta flex items-center justify-center">
                <span className="font-cormorant font-semibold text-xl text-white">KR</span>
              </div>
              <div className="md:mt-4">
                <h3 className="font-cormorant font-semibold text-3xl text-[#F5F0E8] leading-none">Kaushil</h3>
                <p className="font-dm text-[10px] tracking-widest uppercase text-[#F5F0E8]/30 mt-1">Composite Persona</p>
              </div>
            </div>

            {/* Quote + meta */}
            <div className="flex-1 border-l border-white/10 pl-8 md:pl-12">
              <p className="font-cormorant italic text-[#F5F0E8] leading-[1.3] mb-6"
                style={{ fontSize: 'clamp(18px, 2.2vw, 28px)' }}>
                "Traditional crafts lose to fast fashion because they lack modern relevance
                and visibility — Kalamkari can survive only if it adapts."
              </p>
              <div className="flex flex-wrap gap-x-6 gap-y-1">
                {[['Age', '22–26'], ['Location', 'Urban India'], ['Tech', 'High fluency'], ['Shopping', 'Online-first']].map(([k, v]) => (
                  <span key={k} className="font-dm text-[11px] text-[#F5F0E8]/35">
                    <span className="text-[#F5F0E8]/20 uppercase tracking-widest text-[9px] mr-1">{k}</span>{v}
                  </span>
                ))}
              </div>

              {/* Assumptions — collapsible */}
              <button
                onClick={() => setShowAssumptions(!showAssumptions)}
                className="mt-5 flex items-center gap-2 font-dm text-[11px] tracking-widest uppercase text-terracotta hover:text-terracotta/70 transition-colors"
              >
                <motion.span animate={{ rotate: showAssumptions ? 180 : 0 }} transition={{ duration: 0.2 }}>
                  <ChevronDown size={12} />
                </motion.span>
                Key Assumptions
              </button>
              <AnimatePresence>
                {showAssumptions && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                    <div className="mt-3 space-y-1.5">
                      {assumptions.map((a, i) => (
                        <div key={i} className="flex items-start gap-2">
                          <span className="text-terracotta text-xs flex-shrink-0 mt-0.5">→</span>
                          <p className="font-dm font-light text-xs text-[#F5F0E8]/45">{a}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Quad accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/5"
        >
          {quadrants.map((q, i) => (
            <div key={q.title} className="border-b border-white/5 last:border-b-0" style={{ backgroundColor: '#1A1614' }}>
              <QuadCard
                q={q}
                isOpen={openQuad === i}
                onToggle={() => setOpenQuad(openQuad === i ? -1 : i)}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
