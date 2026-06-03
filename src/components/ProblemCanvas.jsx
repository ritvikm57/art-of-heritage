import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { Plus, Minus } from 'lucide-react'

const cards = [
  {
    number: '01',
    title: 'User / Protagonist',
    accent: '#B85C38',
    preview: 'Young urban Indian consumer, 18–28 — digitally native, fashion-forward, Kalamkari-aware but not Kalamkari-buying.',
    items: [
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
    accent: '#2D3561',
    preview: 'Indian fashion market saturated with fast fashion — global brands dominate every channel young consumers use.',
    items: [
      'Global brands dominate e-commerce search results and mall shelf space',
      'Traditional textiles are available but not discoverable or occasion-flexible',
      'Social media algorithms amplify global brand aesthetics to Gen Z daily',
      'Kalamkari\'s supply chain under stress — black jaggery ban threatens 1,000+ artisans in Pedana and Machilipatnam',
    ],
  },
  {
    number: '03',
    title: 'Evidence Base',
    accent: '#C9952A',
    preview: '144-person survey confirms: awareness exists, purchase does not. Average self-rated knowledge: 2.8/5.',
    items: [
      '73% of respondents rarely or never buy Kalamkari',
      '"Depends on occasion" is the #1 purchase behavior — daily wear excluded entirely',
      'Top 3 barriers: cheaper alternatives, machine prints, more trendy designs elsewhere',
      'K. Rithvik: "I prefer Indian designs but customised — handmade doesn\'t last."',
      'Gautam: "Kalamkari is not available at all where I shop."',
    ],
  },
  {
    number: '04',
    title: 'Pain Points & Needs',
    accent: '#B85C38',
    preview: 'Five structural gaps — authenticity, discovery, value, availability, and daily relevance — block purchase at every stage.',
    items: [
      'Authenticity gap: cannot distinguish real Kalamkari from machine imitation',
      'Discovery gap: no channel makes traditional clothing feel trend-relevant',
      'Value gap: higher price without visible story = low perceived worth',
      'Availability gap: absent from platforms where young consumers actually shop',
      'Relevance gap: silhouettes are formal/heavy — daily wear perception doesn\'t exist',
    ],
  },
  {
    number: '05',
    title: 'Root Causes Preview',
    accent: '#6B8F71',
    preview: 'The decline is systemic — digital absence, invisible GI tagging, no fusion pipeline, raw material crisis.',
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
    accent: '#2D3561',
    preview: '1,000+ artisans at direct risk. ₹14,000 crore handloom sector losing domestic ground. A generational knowledge extinction in motion.',
    items: [
      'India\'s ₹14,000 crore handloom sector losing domestic market to imports',
      'Cultural knowledge eroding with aging artisan population',
      'Art form could disappear within 1–2 generations without intervention',
      'India losing a strategic position in the global sustainable fashion movement',
    ],
  },
]

function AccordionCard({ card, isOpen, onToggle }) {
  return (
    <div className="border-b border-ink/8 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-start gap-5 px-8 md:px-10 py-7 text-left hover:bg-ink/[0.02] transition-colors group"
      >
        <span
          className="font-cormorant font-semibold text-4xl leading-none flex-shrink-0 mt-1 transition-colors"
          style={{ color: isOpen ? card.accent : 'rgba(26,22,20,0.15)' }}
        >
          {card.number}
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-cormorant font-semibold text-2xl text-ink leading-tight">{card.title}</h3>
            <div
              className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center mt-0.5 transition-colors"
              style={{ backgroundColor: isOpen ? card.accent : 'rgba(26,22,20,0.08)' }}
            >
              {isOpen
                ? <Minus size={12} className="text-white" />
                : <Plus size={12} className="text-ink/40" />
              }
            </div>
          </div>
          {!isOpen && (
            <p className="font-dm font-light text-sm text-ink/45 mt-2 leading-relaxed pr-8">{card.preview}</p>
          )}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-8 md:px-10 pb-8 pt-1 pl-[calc(2rem+2.5rem+1.25rem)] md:pl-[calc(2.5rem+2.5rem+1.25rem)]">
              <div className="w-8 h-px mb-5" style={{ backgroundColor: card.accent }} />
              <ul className="space-y-3">
                {card.items.map((item, i) => (
                  <li key={i} className="font-dm font-light text-sm text-ink/65 leading-relaxed flex gap-3">
                    <span className="flex-shrink-0 w-1 h-1 rounded-full mt-2" style={{ backgroundColor: card.accent }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function ProblemCanvas() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="problem" className="min-h-screen py-16 flex flex-col justify-center" style={{ backgroundColor: '#F5F0E8' }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <SectionHeader
          phase="Define Phase"
          title="Problem Statement Canvas"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="bg-surface border border-ink/8 rounded-sm overflow-hidden"
        >
          {cards.map((card, i) => (
            <AccordionCard
              key={card.number}
              card={card}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </motion.div>

        {/* POV Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-px px-10 md:px-20 py-16 md:py-20 text-center"
          style={{ backgroundColor: '#1A1614' }}
        >
          <p className="font-dm text-[10px] tracking-[0.25em] uppercase text-terracotta mb-8">Point of View Statement</p>
          <p
            className="font-cormorant italic text-[#F5F0E8] max-w-4xl mx-auto leading-[1.3]"
            style={{ fontSize: 'clamp(20px, 2.6vw, 32px)' }}
          >
            "A young urban Indian consumer needs a way to discover,
            trust, and wear Kalamkari daily —
            because the market never gave them a reason
            to look past the global brand aisle."
          </p>
        </motion.div>
      </div>
    </section>
  )
}
