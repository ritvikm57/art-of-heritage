import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const quadrants = [
  {
    label: 'SAYS',
    color: '#B85C38',
    quotes: [
      { text: '"I\'ve heard of Kalamkari, but I don\'t know much about it."', attr: 'Gautam' },
      { text: '"I prefer handmade fabrics because they look more premium."', attr: 'Gautam' },
      { text: '"Kalamkari is not available at all where I shop."', attr: 'Gautam' },
      { text: '"I prefer Indian-inspired designs — but customised over handmade."', attr: 'Rithvik' },
      { text: '"Design and price are what drive my decision."', attr: 'Survey' },
    ],
  },
  {
    label: 'THINKS',
    color: '#2D3561',
    quotes: [
      { text: '"Kalamkari is a niche — not part of mainstream shopping."', attr: 'Kaushil' },
      { text: '"Machine prints win on variety and trendiness."', attr: 'Kaushil' },
      { text: '"Traditional crafts are stuck in a special occasion only mindset."', attr: 'Harshal' },
      { text: '"Fusion design is the sweet spot for my generation."', attr: 'Kaushil' },
      { text: '"The decline is self-reinforcing: low demand → high price → lower demand."', attr: 'Harshal' },
    ],
  },
  {
    label: 'DOES',
    color: '#6B8F71',
    quotes: [
      { text: 'Shops in places where Kalamkari is completely absent by default', attr: null },
      { text: 'Filters clothing choices primarily by design and price', attr: null },
      { text: 'Discovers new products through social media and fashion exhibitions', attr: null },
      { text: 'Shops online by default, checks reviews before purchasing', attr: null },
      { text: 'Buys traditional pieces for formal / cultural occasions only', attr: null },
    ],
  },
  {
    label: 'FEELS',
    color: '#C9952A',
    quotes: [
      { text: 'Open but unconvinced about paying a premium without visible reason', attr: null },
      { text: 'Genuinely appreciative of handcraft when the story is explained', attr: null },
      { text: 'Nostalgic about traditional art forms — won\'t compromise on daily style', attr: null },
      { text: '68% are "slightly" or "very" concerned about the art form dying', attr: 'Survey' },
    ],
  },
]

const insights = [
  { n: '01', type: 'Insight', text: 'Availability is the biggest structural barrier — not preference. Most young consumers like Kalamkari when they see it. They just never see it.' },
  { n: '02', type: 'Insight', text: '"Occasion-locking" is killing daily demand. No one thinks of Kalamkari for a Tuesday. That\'s the design problem to solve.' },
  { n: '03', type: 'Insight', text: 'Price sensitivity is structural, not personal. Low demand → small runs → high cost → lower demand. A vicious cycle.' },
  { n: '01', type: 'Contradiction', text: 'Says prefers handmade → shops only where machine prints are available. Never actively seeks handmade out.' },
  { n: '02', type: 'Contradiction', text: 'Says combining old + new is the solution → does not engage with any existing fusion handloom products.' },
]

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }
const cardV = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }

export default function EmpathyMap() {
  return (
    <section id="empathy" className="min-h-screen py-16 flex flex-col justify-center" style={{ backgroundColor: '#1A1614' }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <SectionHeader
          phase="Empathy Phase"
          title="Empathy Map"
          subtitle="Synthesised from 5 in-depth interviews and a 144-response survey of young Indian consumers."
          light
        />

        {/* 2×2 quadrant grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/8 mb-px"
        >
          {quadrants.map((q) => (
            <motion.div
              key={q.label}
              variants={cardV}
              className="p-8 md:p-10"
              style={{ backgroundColor: '#1A1614' }}
            >
              <div className="flex items-center gap-3 mb-7">
                <div className="w-10 h-[2px] rounded-full" style={{ backgroundColor: q.color }} />
                <span className="font-dm font-medium text-[11px] tracking-[0.2em] uppercase" style={{ color: q.color }}>
                  {q.label}
                </span>
              </div>
              <div className="space-y-5">
                {q.quotes.map((item, i) => (
                  <div key={i} className="flex gap-3">
                    <span className="font-cormorant text-xl leading-none flex-shrink-0 opacity-25 mt-0.5" style={{ color: q.color }}>"</span>
                    <div>
                      <p className="font-dm font-light text-sm text-[#F5F0E8]/75 leading-relaxed">{item.text}</p>
                      {item.attr && (
                        <p className="font-dm text-[10px] tracking-widest uppercase mt-1.5" style={{ color: q.color, opacity: 0.6 }}>
                          — {item.attr}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Insights strip — redesigned */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          style={{ backgroundColor: '#B85C38' }}
          className="p-8 md:p-12"
        >
          <p className="font-dm font-medium text-[10px] tracking-[0.25em] uppercase text-white/50 mb-8">
            Key Insights & Contradictions
          </p>
          <div className="space-y-px">
            {insights.map((ins, i) => (
              <div
                key={i}
                className="flex items-start gap-6 py-4 border-t first:border-t-0"
                style={{ borderColor: 'rgba(255,255,255,0.12)' }}
              >
                <div className="flex-shrink-0 w-28 flex items-baseline gap-2 mt-0.5">
                  <span className="font-dm text-[10px] tracking-widest uppercase text-white/40">{ins.type}</span>
                  <span className="font-cormorant font-semibold text-2xl text-white/25 leading-none">{ins.n}</span>
                </div>
                <p className="font-dm font-light text-sm text-white/90 leading-relaxed">{ins.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
