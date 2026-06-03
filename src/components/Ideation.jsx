import { motion } from 'framer-motion'
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'
import SectionHeader from './SectionHeader'
import { useCountUp } from '../hooks/useCountUp'

const scoreData = [
  { score: 'Score 34', count: 21 },
  { score: 'Score 32', count: 54 },
  { score: 'Score 30', count: 40 },
  { score: 'Score 28', count: 18 },
  { score: 'Score 24', count: 3 },
  { score: 'Other', count: 2 },
]

const top10 = [
  { rank: 1, title: 'AR tags on garments playing animated origin stories when scanned', category: 'Technology & Innovation', score: 34, selected: true },
  { rank: 2, title: 'QR-based authenticity passport linking to weaver ID and GI status', category: 'Technology & Innovation', score: 34 },
  { rank: 3, title: 'Micro-royalty system: resale sends % back to original weaver via smart contract', category: 'Technology & Innovation', score: 34 },
  { rank: 4, title: 'Heritage Drop model: limited weekly releases that sell out fast', category: 'Business Model', score: 34 },
  { rank: 5, title: 'Co-design sessions via video call between customer and artisan', category: 'Technology & Innovation', score: 34 },
  { rank: 6, title: 'Build-your-sari configurator with live artisan preview', category: 'Technology & Innovation', score: 32 },
  { rank: 7, title: 'Artisan matchmaking platform: customer briefs vision, AI matches craftsperson', category: 'Business Model', score: 32 },
  { rank: 8, title: 'Gamified cultural passport rewarding buyers for exploring all Indian states', category: 'Culture & Awareness', score: 32 },
  { rank: 9, title: 'Wear the map campaign: garments showing geographic origins and craft migration', category: 'Culture & Awareness', score: 32 },
  { rank: 10, title: 'Reversible garments: modern on one side, traditional on the other', category: 'Business Model', score: 32 },
]

const top3 = [
  { n: '01', title: 'AR Origin Tags', tag: 'SELECTED', desc: 'Scan a garment tag → watch the motif\'s story animate on your phone. A physical-digital bridge that brings the artisan into the moment of purchase.', selected: true },
  { n: '02', title: 'QR Authenticity Passport', desc: 'Each garment gets a QR linking to weaver ID, village, GI certification — making authenticity verifiable at the exact point of sale.' },
  { n: '03', title: 'Artisan Matchmaking Platform', desc: 'Customer submits a design brief → AI matches to the right weaver for a co-created custom piece.' },
]

function Counter({ target, label }) {
  const { count, ref } = useCountUp(target, 1800)
  return (
    <div ref={ref} className="flex flex-col items-start">
      <p className="font-cormorant font-semibold text-[#F5F0E8] leading-none" style={{ fontSize: 'clamp(64px, 9vw, 110px)' }}>
        {count}
      </p>
      <p className="font-dm text-[11px] tracking-[0.2em] uppercase text-[#F5F0E8]/35 mt-3">{label}</p>
    </div>
  )
}

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }
const item = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

export default function Ideation() {
  return (
    <section id="ideation" className="py-[120px]" style={{ backgroundColor: '#1A1614' }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <SectionHeader
          phase="Ideation Phase"
          title="From 138 Ideas to 1 Prototype"
          subtitle="Scored across Viability, Feasibility, Desirability, and Team Score — then systematically narrowed."
          light
        />

        {/* Counters — asymmetric layout */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={container}
          className="flex flex-wrap gap-x-20 gap-y-10 mb-24 pb-20 border-b border-white/8"
        >
          {[{ target: 138, label: 'Total Ideas' }, { target: 10, label: 'Shortlisted' }, { target: 1, label: 'Final Prototype' }].map((c) => (
            <motion.div key={c.target} variants={item}>
              <Counter {...c} />
            </motion.div>
          ))}
        </motion.div>

        {/* Score distribution */}
        <div className="mb-20">
          <p className="font-dm text-[11px] tracking-[0.2em] uppercase text-[#F5F0E8]/30 mb-8">Score Distribution — 138 Ideas</p>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={scoreData} layout="vertical" margin={{ left: 10, right: 30 }}>
              <XAxis type="number" tick={{ fill: 'rgba(245,240,232,0.3)', fontSize: 10, fontFamily: 'DM Sans' }} />
              <YAxis type="category" dataKey="score" tick={{ fill: 'rgba(245,240,232,0.4)', fontSize: 11, fontFamily: 'DM Sans' }} width={75} />
              <Tooltip
                cursor={{ fill: 'rgba(255,255,255,0.03)' }}
                contentStyle={{ background: '#231E1B', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 2, fontFamily: 'DM Sans', fontSize: 12 }}
                labelStyle={{ color: '#F5F0E8' }}
                itemStyle={{ color: '#B85C38' }}
              />
              <Bar dataKey="count" radius={[0, 2, 2, 0]}>
                {scoreData.map((_, i) => (
                  <Cell key={i} fill={i === 0 ? '#B85C38' : i === 1 ? '#C9952A' : 'rgba(245,240,232,0.12)'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Top 10 */}
        <p className="font-dm text-[11px] tracking-[0.2em] uppercase text-[#F5F0E8]/30 mb-6">Top 10 Ideas — Ranked</p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={container}
          className="space-y-px bg-white/5 mb-20"
        >
          {top10.map((idea) => (
            <motion.div
              key={idea.rank}
              variants={item}
              className={`flex items-start gap-6 px-6 py-5 ${idea.selected ? 'bg-terracotta/20' : 'bg-[#1A1614]'}`}
            >
              <span className="font-cormorant font-semibold text-3xl text-[#F5F0E8]/15 flex-shrink-0 w-8 text-right leading-none mt-0.5">
                {idea.rank}
              </span>
              <div className="flex-1 min-w-0">
                <p className="font-dm font-light text-sm text-[#F5F0E8]/85 leading-relaxed">
                  {idea.title}
                  {idea.selected && (
                    <span className="ml-3 font-dm text-[10px] tracking-widest uppercase text-terracotta bg-terracotta/20 px-2 py-0.5 rounded-sm">
                      ★ Selected
                    </span>
                  )}
                </p>
                <p className="font-dm text-[10px] tracking-widest uppercase text-[#F5F0E8]/25 mt-1">{idea.category}</p>
              </div>
              <span className="flex-shrink-0 font-dm font-medium text-xs text-terracotta bg-terracotta/10 px-3 py-1 rounded-sm">
                {idea.score}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Top 3 concepts */}
        <p className="font-dm text-[11px] tracking-[0.2em] uppercase text-[#F5F0E8]/30 mb-6">Top 3 Concepts</p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/8"
        >
          {top3.map((c) => (
            <motion.div
              key={c.n}
              variants={item}
              className={`p-8 md:p-10 flex flex-col gap-6 relative overflow-hidden ${c.selected ? '' : ''}`}
              style={{ backgroundColor: c.selected ? '#B85C38' : '#1A1614' }}
            >
              <span
                className="absolute -bottom-6 -right-4 font-cormorant font-semibold leading-none select-none opacity-[0.12]"
                style={{ fontSize: '120px', color: c.selected ? 'white' : '#F5F0E8' }}
              >
                {c.n}
              </span>
              <div className="flex items-start justify-between">
                {c.tag ? (
                  <span className="font-dm text-[10px] tracking-widest uppercase bg-white text-terracotta px-2.5 py-1 rounded-sm">
                    {c.tag}
                  </span>
                ) : <div />}
              </div>
              <h3 className={`font-cormorant font-semibold text-2xl leading-tight ${c.selected ? 'text-white' : 'text-[#F5F0E8]'}`}>
                {c.title}
              </h3>
              <p className={`font-dm font-light text-sm leading-relaxed ${c.selected ? 'text-white/80' : 'text-[#F5F0E8]/55'}`}>
                {c.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
