import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { ChevronDown } from 'lucide-react'

const causes = [
  {
    number: '01',
    title: 'Discoverability',
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
    chain: [
      'Kalamkari production itself is threatened at the source',
      'Black jaggery (key ingredient for natural dyes) banned from Andhra Pradesh markets',
      'Merchants arrested for selling to illicit liquor producers',
      '4 natural dye colors become unavailable — including the "mother color" black',
    ],
    root: 'Supply chain fragility with zero systemic backup or alternative sourcing',
  },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}
const card = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65 } },
}

export default function RootCause() {
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
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {causes.map((cause) => (
            <motion.div
              key={cause.number}
              variants={card}
              className="bg-white/5 p-8 rounded-sm flex flex-col gap-4"
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="font-dm text-[11px] tracking-widest uppercase text-[#F5F0E8]/30">
                  {cause.number}
                </span>
                <h3 className="font-cormorant font-semibold text-xl text-[#F5F0E8]">
                  {cause.title}
                </h3>
              </div>

              <div className="flex flex-col gap-2">
                {cause.chain.map((step, i) => (
                  <div key={i} className="flex flex-col items-start">
                    <p className="font-dm font-light text-sm text-[#F5F0E8]/60 leading-relaxed">
                      {step}
                    </p>
                    {i < cause.chain.length - 1 && (
                      <ChevronDown size={14} className="text-[#F5F0E8]/20 mt-1 ml-1" />
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-auto pt-4 border-t border-white/10">
                <p className="font-dm text-[10px] tracking-widest uppercase text-terracotta mb-2">
                  Root Cause
                </p>
                <p className="font-cormorant font-semibold text-base text-terracotta leading-snug">
                  {cause.root}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
