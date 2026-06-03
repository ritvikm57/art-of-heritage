import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const selected = [
  { n: '01', text: 'How might we encourage traditional clothing in e-commerce platforms dominated by global brands?' },
  { n: '02', text: 'How might we incorporate traditional clothing in rapidly changing trend cycles?' },
  { n: '03', text: 'How might we convince consumers that traditional clothing provides value worth the cost?' },
  { n: '04', text: 'How might we build a strong & modern brand identity for modern Indian clothing?' },
  { n: '05', text: 'How might we help people appreciate the heritage and stories behind traditional art?' },
  { n: '06', text: 'How might we educate consumers about the authenticity of traditional clothes?' },
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

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.06 } } }
const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }

export default function HMW() {
  return (
    <section id="hmw" className="min-h-screen py-16 flex flex-col justify-center" style={{ backgroundColor: '#F5F0E8' }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <SectionHeader
          phase="Define → Ideate Phase"
          title="How Might We…?"
          subtitle="12 HMW questions across 6 problem areas — 6 selected to drive our 138-idea ideation session."
        />

        {/* Selected 6 — large numbered list */}
        <p className="font-dm text-[10px] tracking-[0.25em] uppercase text-ink/30 mb-6">6 Selected HMWs</p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={container}
          className="space-y-px bg-ink/8 mb-20"
        >
          {selected.map((hmw, i) => (
            <motion.div
              key={hmw.n}
              variants={item}
              className="flex items-start gap-6 md:gap-10 px-6 md:px-8 py-7 bg-surface group"
            >
              <span className="font-cormorant font-semibold text-gold/40 leading-none flex-shrink-0 mt-0.5" style={{ fontSize: 'clamp(32px, 4vw, 48px)' }}>
                {hmw.n}
              </span>
              <p className="font-cormorant font-medium text-ink leading-snug flex-1" style={{ fontSize: 'clamp(17px, 1.8vw, 22px)' }}>
                {hmw.text}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* All 12 — compact numbered list */}
        <p className="font-dm text-[10px] tracking-[0.25em] uppercase text-ink/30 mb-6">All 12 HMW Questions</p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/8"
        >
          {all.map((q, i) => {
            const isSel = i < 6
            return (
              <motion.div
                key={i}
                variants={item}
                className="flex items-start gap-4 px-6 py-5 bg-surface"
              >
                <span className={`font-dm font-medium text-sm flex-shrink-0 leading-none mt-0.5 w-7 ${isSel ? 'text-terracotta' : 'text-ink/20'}`}>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className={`font-dm font-light text-sm leading-relaxed ${isSel ? 'text-ink/75' : 'text-ink/40'}`}>
                  {q}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
