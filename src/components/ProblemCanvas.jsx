import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const cards = [
  {
    number: '01',
    title: 'User / Protagonist',
    border: '#B85C38',
    items: [
      'Young urban Indian consumer, Age 18–28',
      'Predominantly college students and early professionals',
      'Shops online (Myntra, Amazon, Meesho) and in malls',
      'Has heard of Kalamkari but self-rates knowledge 2–3/5',
      'Aware of and actively choosing global brands (Zara, H&M, Uniqlo)',
      'Medium-high digital fluency; discovers fashion through Instagram and Reels',
    ],
  },
  {
    number: '02',
    title: 'Context & Situation',
    border: '#2D3561',
    items: [
      'Indian fashion market saturated with affordable fast fashion',
      'Global brands dominate e-commerce search results and mall shelf space',
      'Traditional textiles are available but not discoverable or occasion-flexible',
      'Social media algorithms amplify global brand aesthetics to Gen Z daily',
      'Kalamkari\'s supply chain under stress — black jaggery (key dye ingredient) banned, threatening hundreds of artisans in Pedana and Machilipatnam',
    ],
  },
  {
    number: '03',
    title: 'Evidence Base',
    border: '#C9952A',
    items: [
      '144-person survey confirms awareness exists but knowledge is shallow (avg 2.8/5)',
      '73% of respondents rarely or never buy Kalamkari',
      '"Depends on occasion" is the #1 purchase behavior — daily wear excluded entirely',
      'Top 3 barriers: cheaper alternatives, machine prints, more trendy designs',
      'K. Rithvik: "I prefer Indian designs but customised over handmade — handmade doesn\'t last."',
      'Gautam: "Kalamkari is not available at all where I shop."',
    ],
  },
  {
    number: '04',
    title: 'Pain Points & Needs',
    border: '#B85C38',
    items: [
      'Authenticity gap: cannot distinguish real from machine imitation',
      'Discovery gap: no channel that makes traditional clothing feel trend-relevant',
      'Value gap: higher price without visible story = low perceived worth',
      'Availability gap: absent from platforms and stores where young consumers shop',
      'Relevance gap: silhouettes are formal/heavy — daily wear perception doesn\'t exist',
    ],
  },
  {
    number: '05',
    title: 'Root Causes Preview',
    border: '#6B8F71',
    items: [
      'Artisans lack digital infrastructure → zero discoverability online',
      'GI tagging exists but is invisible to consumers → no trust signal at purchase',
      'No fusion design pipeline → occasion-only perception entrenched',
      'Raw material crisis (black jaggery ban) → production threatened at source',
      'Zero cultural storytelling investment → heritage feels irrelevant to Gen Z',
    ],
  },
  {
    number: '06',
    title: 'Impact & Scale',
    border: '#2D3561',
    items: [
      '1,000+ artisans in Pedana and Machilipatnam directly at risk',
      'India\'s ₹14,000 crore handloom sector losing domestic market to imports',
      'Cultural knowledge eroding with aging artisan population',
      'Art form could disappear within 1–2 generations without intervention',
      'India losing a strategic position in the global sustainable fashion movement',
    ],
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

export default function ProblemCanvas() {
  return (
    <section id="problem" className="py-[120px]" style={{ backgroundColor: '#F5F0E8' }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <SectionHeader
          phase="Define Phase"
          title="Problem Statement Canvas"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16"
        >
          {cards.map((card) => (
            <motion.div
              key={card.number}
              variants={item}
              className="bg-surface rounded-sm p-8 relative overflow-hidden"
              style={{ borderLeft: `3px solid ${card.border}` }}
            >
              <div className="flex items-start gap-4 mb-5">
                <span className="font-dm text-[11px] tracking-[0.15em] uppercase text-ink/30 mt-1 flex-shrink-0">
                  {card.number}
                </span>
                <h3 className="font-cormorant font-semibold text-xl text-ink leading-tight">
                  {card.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {card.items.map((item, i) => (
                  <li key={i} className="font-dm font-light text-sm text-ink/70 leading-relaxed flex items-start gap-2">
                    <span className="mt-2 w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: card.border }} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* POV Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="rounded-sm px-10 py-16 text-center"
          style={{ backgroundColor: '#1A1614' }}
        >
          <p className="font-cormorant italic text-[#F5F0E8] max-w-3xl mx-auto leading-snug"
            style={{ fontSize: 'clamp(22px, 3vw, 32px)' }}>
            "A young urban Indian consumer needs a way to discover,
            trust, and wear Kalamkari daily —<br />
            because the market never gave them a reason
            to look past the global brand aisle."
          </p>
        </motion.div>
      </div>
    </section>
  )
}
