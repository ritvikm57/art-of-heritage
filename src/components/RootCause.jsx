import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { ChevronDown } from 'lucide-react'

const causes = [
  {
    number: '01',
    title: 'Discoverability',
    color: '#B85C38',
    summary: 'Artisans have zero digital pipeline — global brands bury them in every algorithm.',
    chain: [
      'Traditional clothing is hard to find online',
      'Global brands dominate e-commerce algorithms',
      'Platforms optimise for high-volume sellers',
      'Artisans have no digital marketing infrastructure',
    ],
    root: 'No structured digital pipeline from artisan to consumer',
  },
  {
    number: '02',
    title: 'Authenticity Trust',
    color: '#2D3561',
    summary: 'Consumers cannot tell real from fake — GI tagging exists but is completely invisible at point of sale.',
    chain: [
      'Consumers can\'t tell real Kalamkari from machine imitation',
      'No visible authentication system at point of purchase',
      'GI tagging exists but is invisible to end consumers',
      '"Handloom" label is freely misused by brands',
    ],
    root: 'Absence of accessible, real-time authenticity verification',
  },
  {
    number: '03',
    title: 'Value Perception',
    color: '#C9952A',
    summary: '300+ hours of craft work is completely hidden from the buyer — price feels unjustified without the story.',
    chain: [
      'Traditional clothing feels expensive without justification',
      'Price is high but the story behind it is invisible',
      '300+ hours of craft work hidden from the buyer entirely',
      'No narrative bridge between artisan effort and consumer price',
    ],
    root: 'Broken link between craft effort and consumer price understanding',
  },
  {
    number: '04',
    title: 'Daily Wear Relevance',
    color: '#6B8F71',
    summary: 'Available silhouettes are formal and heavy — no fusion pipeline means Kalamkari will never be Tuesday wear.',
    chain: [
      'Kalamkari is seen as occasion-only wear',
      'Available silhouettes are mostly formal and heavy',
      'No fusion design ecosystem exists at scale',
      'Artisan-to-designer collaboration infrastructure is absent',
    ],
    root: 'Fragmented design ecosystem — no artisan-to-contemporary-designer pipeline',
  },
  {
    number: '05',
    title: 'Raw Material Crisis',
    color: '#B85C38',
    summary: 'Black jaggery — the "mother dye" of Kalamkari — is now banned, directly threatening 1,000+ artisans.',
    chain: [
      'Kalamkari production itself is threatened at the source',
      'Black jaggery (key natural dye) banned from Andhra Pradesh markets',
      'Merchants arrested for selling to illicit liquor producers',
      '4 natural dye colors become unavailable — including the "mother color" black',
    ],
    root: 'Supply chain fragility with zero systemic backup or alternative sourcing',
  },
]

function CauseRow({ cause, isOpen, onToggle }) {
  return (
    <div className="border-b border-white/8 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full flex items-start gap-6 px-8 md:px-10 py-7 text-left group transition-colors hover:bg-white/[0.03]"
      >
        <span
          className="font-cormorant font-semibold text-4xl leading-none flex-shrink-0 mt-0.5 transition-colors"
          style={{ color: isOpen ? cause.color : 'rgba(245,240,232,0.15)' }}
        >
          {cause.number}
        </span>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-cormorant font-semibold text-2xl text-[#F5F0E8] leading-tight">{cause.title}</h3>
            <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }} className="flex-shrink-0 mt-1">
              <ChevronDown size={16} className="text-[#F5F0E8]/30" />
            </motion.div>
          </div>
          {!isOpen && (
            <p className="font-dm font-light text-sm text-[#F5F0E8]/40 mt-2 leading-relaxed pr-8">{cause.summary}</p>
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
            <div className="px-8 md:px-10 pb-8 pl-[calc(2rem+2.5rem+1.5rem)] md:pl-[calc(2.5rem+2.5rem+1.5rem)]">
              {/* Why chain */}
              <div className="space-y-0 mb-6">
                {cause.chain.map((step, i) => (
                  <div key={i}>
                    <p className="font-dm font-light text-sm text-[#F5F0E8]/55 leading-relaxed py-2">{step}</p>
                    {i < cause.chain.length - 1 && (
                      <span className="text-xs block ml-1" style={{ color: cause.color, opacity: 0.5 }}>↓</span>
                    )}
                  </div>
                ))}
              </div>
              {/* Root */}
              <div
                className="flex items-start gap-4 p-4 border-l-2"
                style={{ backgroundColor: cause.color + '12', borderColor: cause.color }}
              >
                <span className="font-dm text-[10px] tracking-[0.2em] uppercase flex-shrink-0 mt-0.5" style={{ color: cause.color }}>Root</span>
                <p className="font-dm font-medium text-sm leading-snug" style={{ color: cause.color }}>{cause.root}</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function RootCause() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="rootcause" className="py-[120px]" style={{ backgroundColor: '#1A1614' }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <SectionHeader
          phase="Define Phase"
          title="Root Cause Analysis"
          subtitle="Five why-chains tracing back from 'young consumers choosing global brands' to the systemic roots."
          light
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="border border-white/8 rounded-sm overflow-hidden"
        >
          {causes.map((cause, i) => (
            <CauseRow
              key={cause.number}
              cause={cause}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
