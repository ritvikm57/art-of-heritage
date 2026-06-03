import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const selected = [
  { n: 1, text: 'How might we encourage traditional clothing in e-commerce platforms dominated by global brands?' },
  { n: 2, text: 'How might we incorporate traditional clothing in rapidly changing trend cycles?' },
  { n: 3, text: 'How might we convince consumers that traditional clothing provides value worth the cost?' },
  { n: 4, text: 'How might we build a strong & modern brand identity for modern Indian clothing?' },
  { n: 5, text: 'How might we help people appreciate the heritage and stories behind traditional art?' },
  { n: 6, text: 'How might we educate consumers about the authenticity of traditional clothes?' },
]

const all = [
  'How might we encourage traditional clothing in e-commerce platforms dominated by global brands?',
  'How might we incorporate traditional clothing in rapidly changing trend cycles?',
  'How can we incorporate traditional clothing in daily wear?',
  'How might we increase funding for craftsmen to continue the art?',
  'How might we convince consumers that traditional clothing provides value worth the cost?',
  'How might we build a strong & modern brand identity for modern Indian clothing?',
  'How might we help people appreciate the heritage and stories behind traditional art?',
  'How might we educate consumers about the authenticity of traditional clothes?',
  'How might we adapt traditional clothing to extreme Indian summers?',
  'How might we increase the visibility of traditional designs in the market dominated by global markets?',
  'How might we combine customisation with traditional fashion?',
  'How can we reduce duplicates/fakes in the market?',
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
}
const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
}

export default function HMW() {
  return (
    <section id="hmw" className="py-[120px]" style={{ backgroundColor: '#F5F0E8' }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <SectionHeader
          phase="Define → Ideate Phase"
          title="How Might We…?"
          subtitle="12 HMW questions across 6 problem areas — 6 selected to drive our 138-idea ideation session."
        />

        {/* Selected 6 */}
        <p className="font-dm font-medium text-xs tracking-widest uppercase text-ink/40 mb-6">
          6 Selected HMWs
        </p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-20"
        >
          {selected.map((hmw) => (
            <motion.div
              key={hmw.n}
              variants={item}
              className="p-7 rounded-sm flex gap-5 items-start"
              style={{ backgroundColor: '#C9952A18', border: '1px solid #C9952A30' }}
            >
              <span
                className="font-cormorant font-semibold text-3xl flex-shrink-0 leading-none"
                style={{ color: '#B85C38' }}
              >
                {hmw.n}
              </span>
              <p className="font-dm font-light text-sm text-ink/80 leading-relaxed pt-1">
                {hmw.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* All 12 */}
        <p className="font-dm font-medium text-xs tracking-widest uppercase text-ink/40 mb-6">
          All 12 HMW Questions
        </p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3"
        >
          {all.map((q, i) => {
            const isSelected = selected.some(s => s.n === i + 1)
            return (
              <motion.div
                key={i}
                variants={item}
                className={`p-5 rounded-sm flex gap-4 items-start border ${
                  isSelected ? 'border-gold/30 bg-gold/5' : 'border-ink/10 bg-surface'
                }`}
              >
                <span className={`font-dm font-medium text-sm flex-shrink-0 ${isSelected ? 'text-terracotta' : 'text-ink/30'}`}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="font-dm font-light text-sm text-ink/70 leading-relaxed">
                  {q}
                </p>
                {isSelected && (
                  <span className="flex-shrink-0 mt-0.5">
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-terracotta" />
                  </span>
                )}
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
