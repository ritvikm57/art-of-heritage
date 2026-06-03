import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const quadrants = [
  {
    label: 'SAYS',
    color: '#B85C38',
    items: [
      '"I\'ve heard of Kalamkari, but I don\'t know much about it." — Gautam',
      '"I prefer handmade fabrics because they look more premium." — Gautam',
      '"If it feels premium and comfortable, I would buy Kalamkari." — Gautam',
      '"Kalamkari is not available at all where I shop." — Gautam',
      '"I prefer Indian-inspired designs over western — but customised over handmade." — Rithvik',
      '"Design and price are what drive my decision." — Survey respondent',
      '"I prefer a mix of traditional patterns with modern cuts." — Survey respondent',
    ],
  },
  {
    label: 'THINKS',
    color: '#2D3561',
    items: [
      '"Kalamkari is a niche — not part of mainstream shopping." — Kaushil',
      '"Machine prints win on variety and trendiness." — Kaushil',
      '"Traditional crafts are stuck in a special occasion only mindset." — Harshal',
      '"Fusion design is the sweet spot for my generation." — Kaushil',
      '"Handmade is inherently superior in quality — price is the only real obstacle." — Harshal',
      '"The decline is a self-reinforcing cycle: low demand → high price → even lower demand." — Harshal',
    ],
  },
  {
    label: 'DOES',
    color: '#6B8F71',
    items: [
      'Shops in places where Kalamkari is completely absent by default',
      'Filters clothing choices primarily by design and price',
      'Gravitates toward machine-printed options everywhere they shop',
      'Discovers new products through social media and fashion exhibitions',
      'Shops online by default, checks reviews before purchasing',
      'Buys traditional pieces for formal / cultural occasions only',
      'Follows global fashion trends which shapes their definition of "wearable"',
    ],
  },
  {
    label: 'FEELS',
    color: '#C9952A',
    items: [
      'Open but unconvinced about paying a premium without a visible reason',
      'Mildly disconnected from the artisan / ethical angle of the product',
      'Frustrated that traditional crafts haven\'t evolved to meet modern tastes',
      'Genuinely appreciative of handcraft when the story is explained to them',
      'Nostalgic about traditional art forms but won\'t compromise on daily style',
      'Concerned about the art form dying — 68% are "slightly" or "very" concerned',
    ],
  },
]

const insights = [
  { type: 'Insight 1', text: 'Availability is the biggest structural barrier — not preference. Most young consumers like Kalamkari when they see it. They just never see it.' },
  { type: 'Insight 2', text: '"Occasion-locking" is killing daily demand. No one thinks of Kalamkari for a Tuesday. That\'s the design problem to solve.' },
  { type: 'Insight 3', text: 'Price sensitivity is structural, not personal. Low demand → small production runs → high unit cost → lower demand. A vicious cycle.' },
  { type: 'Insight 4', text: 'Discovery happens digitally. Social media and exhibitions, not word of mouth or family.' },
  { type: 'Contradiction 1', text: 'Says prefers handmade → shops only where machine prints are available and never seeks handmade out.' },
  { type: 'Contradiction 2', text: 'Says combining old and new is the solution → does not engage with any existing fusion handloom products.' },
  { type: 'Contradiction 3', text: 'Says traditional crafts deserve more visibility → follows global fast fashion trends that crowd them out.' },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}
const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

export default function EmpathyMap() {
  return (
    <section id="empathy" className="py-[120px]" style={{ backgroundColor: '#1A1614' }}>
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
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 gap-1 mb-1"
        >
          {quadrants.map((q) => (
            <motion.div
              key={q.label}
              variants={cardVariants}
              className="bg-white/5 p-8"
            >
              {/* Colored top strip */}
              <div className="h-1 w-12 mb-5 rounded-full" style={{ backgroundColor: q.color }} />
              <h3
                className="font-dm font-medium text-xs tracking-[0.15em] uppercase mb-5"
                style={{ color: q.color }}
              >
                {q.label}
              </h3>
              <ul className="space-y-3">
                {q.items.map((item, i) => (
                  <li
                    key={i}
                    className="font-dm font-light text-sm text-[#F5F0E8]/70 leading-relaxed italic"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Key Insights */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="mt-8 p-8 md:p-12 rounded-sm"
          style={{ backgroundColor: '#B85C38' }}
        >
          <p className="font-dm font-medium text-xs tracking-[0.15em] uppercase text-white/60 mb-8">
            Key Insights & Contradictions
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {insights.map((ins, i) => (
              <div key={i} className="flex gap-3">
                <span className="font-dm text-[11px] tracking-widest uppercase text-white/50 flex-shrink-0 mt-0.5 w-24">
                  {ins.type}
                </span>
                <p className="font-dm font-light text-sm text-white/90 leading-relaxed">
                  {ins.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
