import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeader from './SectionHeader'
import { ChevronDown } from 'lucide-react'

const scamper = [
  {
    letter: 'S',
    title: 'Substitute',
    content: [
      'Replace middlemen with direct artisan-to-consumer digital storefronts.',
      'Substitute purely traditional silhouettes with fusion cuts.',
      'Swap in-store discovery with algorithm-driven social discovery.',
      'Replace generic "handloom" labels with verified digital provenance tags.',
    ],
  },
  {
    letter: 'C',
    title: 'Combine',
    content: [
      'Combine AR technology with physical garment QR tags for in-store storytelling.',
      'Merge artisan cooperatives with direct-to-consumer e-commerce infrastructure.',
      'Bundle authenticity verification with GI tag registration.',
      'Combine global influencer reach with artisan village residency programs.',
    ],
  },
  {
    letter: 'A',
    title: 'Adapt',
    content: [
      'Adapt Spotify\'s recommendation model to match consumers with their regional textile heritage.',
      'Borrow luxury brand provenance storytelling (Hermès, Louis Vuitton) and apply to Kalamkari.',
      'Use sneaker "drop" culture model for limited handloom releases.',
      'Adapt Netflix documentary format to 60-second craft stories on Instagram.',
    ],
  },
  {
    letter: 'M',
    title: 'Modify / Magnify',
    content: [
      'Make the artisan the primary product — the garment is the medium.',
      'Scale down the price barrier through rental-first and subscription models.',
      'Modify silhouettes — same traditional fabric, everyday contemporary cuts.',
      'Miniaturise traditional motifs for daily-wear accessories as lower-barrier entry products.',
    ],
  },
  {
    letter: 'P',
    title: 'Put to Another Use',
    content: [
      'Use textile craft knowledge as educational IP for school curriculum design.',
      'Repurpose craft fairs as permanent hybrid retail + cultural experience destinations.',
      'Put traditional motifs into global lifestyle products (homeware, tech accessories) as a global visibility vehicle.',
    ],
  },
  {
    letter: 'E',
    title: 'Eliminate',
    content: [
      'Eliminate middlemen exploiting artisans in manufacturing chains.',
      'Remove the "special occasion only" perception by designing explicitly for daily casual wear.',
      'Eliminate authenticity ambiguity with mandatory digital GI tagging enforced at checkout.',
      'Remove price opacity by showing artisan earnings transparently vs. final markup.',
    ],
  },
  {
    letter: 'R',
    title: 'Rearrange / Reverse',
    content: [
      'Reverse the flow: instead of artisans waiting, AI proactively matches them with buyers.',
      'Flip the branding — make the artisan the brand face, not the platform.',
      'Rearrange the value chain — artisan co-owns the brand equity, not just supplies it.',
      'Reverse the drop: customers pre-fund a specific weave they want made.',
    ],
  },
]

const hmwIdeas = [
  {
    hmw: 'HMW 1 — Encourage traditional clothing in e-commerce',
    ideas: [
      { text: 'Curated traditional clothing section on Myntra homepage', tag: 'Platform' },
      { text: 'Algorithm boost for verified handloom listings', tag: 'Platform' },
      { text: 'Dedicated "Roots" tab on fashion apps', tag: 'Platform' },
      { text: 'Traditional clothing filter with "modern fusion" toggle', tag: 'UX' },
      { text: 'Partnership with influencers for #WearYourRoots campaigns', tag: 'Marketing' },
      { text: 'Government mandate: 10% shelf space for traditional textiles on major platforms', tag: 'Policy' },
    ],
  },
  {
    hmw: 'HMW 2 — Incorporate into trend cycles',
    ideas: [
      { text: 'Collaborate with fashion weeks to feature Kalamkari collections', tag: 'Industry' },
      { text: 'Season drops: Kalamkari interpretations of trending silhouettes', tag: 'Design' },
      { text: 'Trend forecasting partnership: weave traditional motifs into annual trend reports', tag: 'Industry' },
      { text: 'Capsule collections with Gen Z fashion brands', tag: 'Collab' },
      { text: '"Traditional Trend" social media challenge format', tag: 'Social' },
      { text: 'AI-generated fusion style lookbooks using traditional motifs', tag: 'Tech' },
    ],
  },
  {
    hmw: 'HMW 3 — Convince consumers on value',
    ideas: [
      { text: 'Transparent pricing — show artisan earnings vs. markup', tag: 'Transparency' },
      { text: 'Augmented reality origin stories on garment tags', tag: 'AR' },
      { text: '"300 hours of work" story card with every purchase', tag: 'Packaging' },
      { text: 'Video diary of the garment being made, linked via QR', tag: 'Content' },
      { text: 'Premium positioning alongside luxury brands', tag: 'Branding' },
      { text: 'Subscription model: receive one authenticated piece monthly', tag: 'Model' },
    ],
  },
  {
    hmw: 'HMW 4 — Build modern brand identity',
    ideas: [
      { text: 'National Kalamkari brand — like "Made in Italy" for textiles', tag: 'Branding' },
      { text: 'Artisan ambassador program — weavers as brand face', tag: 'People' },
      { text: 'Minimalist rebranding of Kalamkari for urban consumers', tag: 'Design' },
      { text: 'Collab with Indian streetwear brands for credibility transfer', tag: 'Collab' },
      { text: 'Heritage + hype: drop culture applied to traditional textiles', tag: 'Marketing' },
      { text: 'Annual design award for best fusion Kalamkari piece', tag: 'Award' },
    ],
  },
  {
    hmw: 'HMW 5 — Help people appreciate heritage',
    ideas: [
      { text: 'Interactive museum installations about Kalamkari craft journey', tag: 'Education' },
      { text: 'School curriculum modules on Indian textile heritage', tag: 'Education' },
      { text: '"Watch it being made" live streams from artisan villages', tag: 'Content' },
      { text: 'HeritageLens app: point camera at patterns for cultural stories', tag: 'AR' },
      { text: 'Podcast series: artisans in their own voice', tag: 'Content' },
      { text: 'Craft residency programs: fashion students spend time with artisans', tag: 'Experience' },
    ],
  },
  {
    hmw: 'HMW 6 — Educate on authenticity',
    ideas: [
      { text: 'QR-based GI certification check at point of purchase', tag: 'Tech' },
      { text: 'Mandatory digital provenance tag for all Kalamkari listings', tag: 'Policy' },
      { text: '"Real vs. fake" educational content in packaging', tag: 'Education' },
      { text: 'Blockchain-backed weaver ID system', tag: 'Tech' },
      { text: 'Consumer-facing GI badge on product thumbnails', tag: 'UX' },
      { text: 'Third-party authentication seal program with government backing', tag: 'Policy' },
    ],
  },
]

function ScamperItem({ item, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border border-ink/10 rounded-sm overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-5 p-5 text-left hover:bg-ink/5 transition-colors"
      >
        <span className="font-cormorant font-semibold text-3xl text-terracotta w-8 flex-shrink-0">
          {item.letter}
        </span>
        <span className="font-cormorant font-semibold text-xl text-ink flex-1">{item.title}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
          <ChevronDown size={16} className="text-ink/30" />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6 pt-2 space-y-2 border-t border-ink/5">
              {item.content.map((c, i) => (
                <p key={i} className="font-dm font-light text-sm text-ink/70 leading-relaxed flex items-start gap-2">
                  <span className="text-terracotta mt-1.5 text-xs">▸</span>
                  {c}
                </p>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

const tagColors = {
  Platform: '#2D3561', Tech: '#B85C38', AR: '#B85C38', UX: '#6B8F71',
  Design: '#C9952A', Marketing: '#B85C38', Policy: '#2D3561', Industry: '#2D3561',
  Collab: '#6B8F71', Social: '#6B8F71', Content: '#C9952A', Transparency: '#6B8F71',
  Packaging: '#C9952A', Branding: '#2D3561', Model: '#6B8F71', People: '#B85C38',
  Education: '#2D3561', Experience: '#6B8F71', Award: '#C9952A',
}

export default function Brainwriting() {
  return (
    <section id="brainwriting" className="py-[120px]" style={{ backgroundColor: '#F5F0E8' }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <SectionHeader
          phase="Ideation Phase"
          title="Brainwriting & SCAMPER"
          subtitle="138 ideas generated across 12 HMW questions using structured ideation."
        />

        {/* SCAMPER */}
        <p className="font-dm font-medium text-xs tracking-widest uppercase text-ink/40 mb-6">
          SCAMPER Framework
        </p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="space-y-2 mb-20"
        >
          {scamper.map((s, i) => (
            <ScamperItem key={s.letter} item={s} defaultOpen={i < 2} />
          ))}
        </motion.div>

        {/* HMW idea grids */}
        <p className="font-dm font-medium text-xs tracking-widest uppercase text-ink/40 mb-8">
          Brainwriting — Ideas Per HMW
        </p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="space-y-10"
        >
          {hmwIdeas.map((hmw, hi) => (
            <div key={hi}>
              <p className="font-dm font-medium text-xs tracking-widest uppercase text-terracotta mb-4">
                {hmw.hmw}
              </p>
              <div className="flex flex-wrap gap-2">
                {hmw.ideas.map((idea, ii) => (
                  <div
                    key={ii}
                    className="flex items-start gap-2 bg-surface px-4 py-3 rounded-sm border border-ink/8"
                  >
                    <p className="font-dm font-light text-sm text-ink/80">{idea.text}</p>
                    <span
                      className="flex-shrink-0 font-dm text-[10px] tracking-widest uppercase px-2 py-0.5 rounded-sm text-white"
                      style={{ backgroundColor: (tagColors[idea.tag] || '#6B8F71') + 'cc' }}
                    >
                      {idea.tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
