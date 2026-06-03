import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const quadrants = [
  {
    title: 'Goals & Motivations',
    color: '#B85C38',
    items: [
      'Find clothing that is unique, comfortable, and culturally meaningful',
      'Support Indian artisans while maintaining personal style identity',
      'Access traditional textiles in daily-wear compatible formats',
      'Discover authentic products without hunting through exhibitions or craft fairs',
    ],
  },
  {
    title: 'Frustrations & Pain Points',
    color: '#2D3561',
    items: [
      'Kalamkari not present in platforms and stores he actually shops at',
      'Machine prints dominate, making authentic handloom invisible by default',
      'Higher price without any visible quality or story justification',
      'Can\'t find traditional pieces in modern cuts suitable for college or casual wear',
    ],
  },
  {
    title: 'Behaviours & Habits',
    color: '#6B8F71',
    items: [
      'Discovers fashion through Instagram Reels and fashion exhibitions',
      'Shops online by default — Myntra, Amazon, Instagram shops',
      'Gravitates to fusion pieces over purely traditional styles',
      'Follows global trends which defines his baseline for "wearable"',
      'Prioritises design quality and uniqueness in final purchase decision',
    ],
  },
  {
    title: 'A Day In Their Life',
    color: '#C9952A',
    isNarrative: true,
    text: `Kaushil scrolls Instagram in the morning — global brands dominate his feed. When shopping for clothes he opens Myntra, where traditional listings are buried 12 pages deep. He'd absolutely buy Kalamkari if he found it in a modern cut he could wear to college — but the search is too much friction. Occasionally at a university cultural event or craft fair, he sees Kalamkari and feels genuinely drawn to it. But there's no way to get back to it later.`,
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function UserPersona() {
  return (
    <section id="persona" className="py-[120px]" style={{ backgroundColor: '#1A1614' }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <SectionHeader
          phase="Empathy Phase"
          title="User Persona"
          subtitle="Built from 2 interviews and 144 survey responses."
          light
        />

        {/* Hero persona card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="mb-6 p-8 md:p-12 rounded-sm"
          style={{ backgroundColor: '#231E1B' }}
        >
          <div className="flex flex-col md:flex-row md:items-start gap-8">
            {/* Avatar */}
            <div className="flex-shrink-0">
              <div className="w-20 h-20 rounded-full bg-terracotta flex items-center justify-center">
                <span className="font-cormorant font-semibold text-2xl text-white">KR</span>
              </div>
            </div>

            <div className="flex-1">
              <div className="flex flex-wrap items-start gap-6 mb-6">
                <div>
                  <h3 className="font-cormorant font-semibold text-3xl text-[#F5F0E8]">Kaushil</h3>
                  <p className="font-dm text-xs text-[#F5F0E8]/40 tracking-widest uppercase mt-1">Composite Persona</p>
                </div>
                <div className="flex flex-wrap gap-3 mt-1">
                  {[
                    ['Role', 'Post-graduate student'],
                    ['Age', '22–26'],
                    ['Location', 'Urban India'],
                    ['Tech', 'High fluency'],
                    ['Shopping', 'Online-first'],
                  ].map(([k, v]) => (
                    <div key={k} className="flex items-center gap-2">
                      <span className="font-dm text-[10px] tracking-widest uppercase text-[#F5F0E8]/30">{k}:</span>
                      <span className="font-dm text-[11px] text-[#F5F0E8]/60">{v}</span>
                    </div>
                  ))}
                </div>
              </div>

              <blockquote className="font-cormorant italic text-[#F5F0E8]/90 leading-snug border-l-2 border-terracotta pl-6"
                style={{ fontSize: 'clamp(18px, 2.2vw, 26px)' }}>
                "Traditional crafts lose to fast fashion because they lack modern relevance
                and visibility — Kalamkari can survive only if it adapts."
              </blockquote>
            </div>
          </div>
        </motion.div>

        {/* Proto-persona */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-10 p-6 md:p-8 rounded-sm border border-white/10"
        >
          <p className="font-dm text-[11px] tracking-widest uppercase text-[#F5F0E8]/40 mb-3">Proto-Persona</p>
          <p className="font-dm text-xs text-[#F5F0E8]/50 mb-4">Based on: K. Rithvik, 2nd-year ECM, Mahindra University</p>
          <p className="font-cormorant italic text-[#F5F0E8]/80 text-lg leading-relaxed mb-5">
            "I want something unique and good quality. Indian designs suit me better —
            but customised is better than handmade for durability."
          </p>
          <div className="space-y-2">
            <p className="font-dm text-[11px] tracking-widest uppercase text-[#F5F0E8]/30 mb-3">Key Assumptions to Validate</p>
            {[
              'Users will choose traditional clothing if available in modern cuts',
              'Price sensitivity decreases when the garment\'s story is visible',
              'Fusion design (traditional fabric + contemporary silhouette) is the entry point',
              'Social media discovery is more effective than in-store for this demographic',
            ].map((a, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="text-terracotta mt-0.5 flex-shrink-0">→</span>
                <p className="font-dm font-light text-sm text-[#F5F0E8]/60">{a}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 4-quadrant grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 gap-1"
        >
          {quadrants.map((q) => (
            <motion.div
              key={q.title}
              variants={item}
              className="p-8 bg-white/5"
            >
              <div className="w-8 h-0.5 mb-4 rounded-full" style={{ backgroundColor: q.color }} />
              <h3 className="font-cormorant font-semibold text-xl text-[#F5F0E8] mb-5">{q.title}</h3>
              {q.isNarrative ? (
                <p className="font-dm font-light text-sm text-[#F5F0E8]/60 leading-relaxed">{q.text}</p>
              ) : (
                <ul className="space-y-3">
                  {q.items.map((it, i) => (
                    <li key={i} className="font-dm font-light text-sm text-[#F5F0E8]/60 flex items-start gap-2">
                      <span className="w-1 h-1 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: q.color }} />
                      {it}
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
