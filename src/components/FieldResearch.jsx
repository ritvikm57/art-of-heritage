import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const interviews = [
  {
    initials: 'KR',
    name: 'K. Rithvik',
    role: '2nd Year ECM Student, Mahindra University',
    by: 'Yatin',
    bg: '#2D3561',
    quotes: [
      '"I prefer Indian-inspired designs over western — western never really suited me."',
      '"Customised is better than handmade for me — handmade doesn\'t tend to last from my experience."',
      '"If traditional fabrics were made into trendy modern styles, I\'d definitely try them."',
      '"Color is what makes me instantly dislike a clothing product."',
    ],
    insight: 'Fusion-ready but availability-blocked',
    insightColor: '#B85C38',
  },
  {
    initials: 'GA',
    name: 'Gautam',
    role: 'BA-LLB Student',
    by: 'Tamayee',
    bg: '#6B8F71',
    quotes: [
      '"I\'ve heard about Kalamkari but I don\'t know much about it."',
      '"I prefer handmade fabrics because they look more premium."',
      '"Kalamkari is not available at all where I shop."',
      '"If it feels premium and comfortable, then I would buy Kalamkari."',
    ],
    insight: 'Willing buyer — zero access',
    insightColor: '#6B8F71',
  },
]

const surveyStats = [
  { value: '73%', label: 'Rarely or never buy Kalamkari' },
  { value: '2.8/5', label: 'Average self-rated knowledge score' },
  { value: '68%', label: 'Concerned about losing the art form' },
  { value: '#1 Ask', label: 'Better / Modern Designs' },
]

export default function FieldResearch() {
  return (
    <section id="research" className="py-[120px]" style={{ backgroundColor: '#F5F0E8' }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <SectionHeader
          phase="Empathy Phase · Primary Research"
          title="We Talked To The Consumers"
          subtitle="Two in-depth interviews and a 144-person survey conducted across Mahindra University and broader community."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {/* Interview columns */}
          {interviews.map((person) => (
            <motion.div key={person.initials} variants={item} className="flex flex-col gap-6">
              {/* Avatar card */}
              <div className="flex items-center gap-4">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: person.bg }}
                >
                  <span className="font-cormorant font-semibold text-lg text-white">
                    {person.initials}
                  </span>
                </div>
                <div>
                  <p className="font-cormorant font-semibold text-lg text-ink">{person.name}</p>
                  <p className="font-dm text-xs text-ink/50 leading-tight">{person.role}</p>
                  <p className="font-dm text-[10px] text-ink/40 mt-0.5">Interviewed by: {person.by}</p>
                </div>
              </div>

              {/* Quotes */}
              <div className="flex flex-col gap-4">
                {person.quotes.map((q, i) => (
                  <p key={i} className="font-cormorant italic text-ink/80 leading-relaxed text-lg border-l-2 border-ink/10 pl-4">
                    {q}
                  </p>
                ))}
              </div>

              {/* Insight tag */}
              <div
                className="inline-flex items-center px-3 py-1.5 rounded-sm self-start"
                style={{ backgroundColor: person.insightColor + '20' }}
              >
                <span className="font-dm text-[11px] tracking-widest uppercase" style={{ color: person.insightColor }}>
                  {person.insight}
                </span>
              </div>
            </motion.div>
          ))}

          {/* Survey column */}
          <motion.div variants={item} className="flex flex-col gap-6">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-terracotta flex items-center justify-center flex-shrink-0">
                <span className="font-cormorant font-semibold text-lg text-white">144</span>
              </div>
              <div>
                <p className="font-cormorant font-semibold text-lg text-ink">Survey Responses</p>
                <p className="font-dm text-xs text-ink/50 leading-tight">Distributed across student and professional communities</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              {surveyStats.map((s, i) => (
                <div
                  key={i}
                  className="bg-surface p-4 rounded-sm border border-ink/5"
                >
                  <p className="font-cormorant font-semibold text-2xl text-terracotta leading-none mb-1">
                    {s.value}
                  </p>
                  <p className="font-dm text-xs text-ink/60 leading-tight">{s.label}</p>
                </div>
              ))}
            </div>

            <p className="font-dm text-xs text-ink/40 leading-relaxed">
              Survey conducted across students, working professionals, homemakers, and business owners across age groups 18–25+.
            </p>
          </motion.div>
        </motion.div>

        {/* Video documentary blockquote */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="border-l-4 border-terracotta pl-8 py-2 max-w-3xl"
        >
          <p className="font-dm font-light italic text-ink/70 leading-relaxed text-base md:text-lg mb-3">
            "Black jaggery is the mother of all natural dyes in Kalamkari.
            In May this year, merchants in Pedana and Machilipatnam declared
            they would not sell black jaggery anymore — affecting over 1,000 artisans,
            mostly women. They say if action is not taken, this will be a death blow."
          </p>
          <p className="font-dm font-medium text-xs tracking-widest uppercase text-terracotta">
            — The Hindu, 2026
          </p>
        </motion.div>
      </div>
    </section>
  )
}
