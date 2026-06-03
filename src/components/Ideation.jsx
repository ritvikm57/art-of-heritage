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
  {
    n: '01',
    title: 'AR Origin Tags',
    tag: 'SELECTED',
    desc: 'Scan a garment tag → watch the motif\'s story animate on your phone. A physical-digital bridge that brings the artisan into the moment of purchase.',
    selected: true,
  },
  {
    n: '02',
    title: 'QR Authenticity Passport',
    desc: 'Each garment gets a QR linking to weaver ID, village, GI certification — making authenticity verifiable at the exact point of sale.',
  },
  {
    n: '03',
    title: 'Artisan Matchmaking Platform',
    desc: 'Customer submits a design brief → AI matches to the right weaver for a co-created custom piece.',
  },
]

function Counter({ target, label }) {
  const { count, ref } = useCountUp(target, 1800)
  return (
    <div ref={ref} className="text-center">
      <p className="font-cormorant font-semibold text-[#F5F0E8] leading-none" style={{ fontSize: 'clamp(56px, 8vw, 96px)' }}>
        {count}
      </p>
      <p className="font-dm text-xs tracking-widest uppercase text-[#F5F0E8]/40 mt-3">{label}</p>
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

        {/* Counters */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={container}
          className="flex flex-wrap justify-center md:justify-start gap-16 mb-20 border-b border-white/10 pb-16"
        >
          {[
            { target: 138, label: 'Total Ideas' },
            { target: 10, label: 'Shortlisted' },
            { target: 1, label: 'Final Prototype' },
          ].map((c) => (
            <motion.div key={c.target} variants={item}>
              <Counter {...c} />
            </motion.div>
          ))}
        </motion.div>

        {/* Score chart */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="mb-20"
        >
          <p className="font-dm text-[11px] tracking-widest uppercase text-[#F5F0E8]/40 mb-6">
            Score Distribution
          </p>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={scoreData} layout="vertical" margin={{ left: 0, right: 20 }}>
              <XAxis type="number" hide />
              <YAxis type="category" dataKey="score" tick={{ fill: '#F5F0E8', opacity: 0.5, fontSize: 11, fontFamily: 'DM Sans' }} width={70} />
              <Tooltip
                cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                contentStyle={{ background: '#231E1B', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 4, fontFamily: 'DM Sans', fontSize: 12 }}
                labelStyle={{ color: '#F5F0E8' }}
                itemStyle={{ color: '#B85C38' }}
              />
              <Bar dataKey="count" radius={[0, 3, 3, 0]}>
                {scoreData.map((entry, i) => (
                  <Cell key={i} fill={i === 0 ? '#B85C38' : i === 1 ? '#C9952A' : 'rgba(255,255,255,0.15)'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Top 10 */}
        <p className="font-dm text-[11px] tracking-widest uppercase text-[#F5F0E8]/40 mb-6">
          Top 10 Ideas — Ranked
        </p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={container}
          className="space-y-2 mb-20"
        >
          {top10.map((idea) => (
            <motion.div
              key={idea.rank}
              variants={item}
              className={`flex items-start gap-5 p-5 rounded-sm ${idea.selected ? 'bg-terracotta/20 border border-terracotta/40' : 'bg-white/5'}`}
            >
              <span className="font-cormorant font-semibold text-2xl text-[#F5F0E8]/30 flex-shrink-0 w-8 text-right">
                {idea.rank}
              </span>
              <div className="flex-1">
                <p className="font-dm font-light text-sm text-[#F5F0E8]/90 leading-relaxed">
                  {idea.title}
                  {idea.selected && (
                    <span className="ml-3 font-dm text-[10px] tracking-widest uppercase text-terracotta bg-terracotta/20 px-2 py-0.5 rounded-sm">
                      ★ Selected
                    </span>
                  )}
                </p>
                <p className="font-dm text-[10px] tracking-widest uppercase text-[#F5F0E8]/30 mt-1">
                  {idea.category}
                </p>
              </div>
              <span className="flex-shrink-0 font-dm font-medium text-xs text-terracotta bg-terracotta/10 px-2.5 py-1 rounded-sm">
                {idea.score}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Top 3 concepts */}
        <p className="font-dm text-[11px] tracking-widest uppercase text-[#F5F0E8]/40 mb-6">
          Top 3 Concepts
        </p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-3 gap-4"
        >
          {top3.map((c) => (
            <motion.div
              key={c.n}
              variants={item}
              className={`p-8 rounded-sm flex flex-col gap-4 ${c.selected ? 'bg-terracotta text-white' : 'bg-white/5'}`}
            >
              <div className="flex items-start justify-between">
                <span className={`font-cormorant font-semibold text-5xl leading-none ${c.selected ? 'text-white/40' : 'text-[#F5F0E8]/20'}`}>
                  {c.n}
                </span>
                {c.tag && (
                  <span className="font-dm text-[10px] tracking-widest uppercase bg-white text-terracotta px-2 py-1 rounded-sm">
                    {c.tag}
                  </span>
                )}
              </div>
              <h3 className={`font-cormorant font-semibold text-2xl leading-tight ${c.selected ? 'text-white' : 'text-[#F5F0E8]'}`}>
                {c.title}
              </h3>
              <p className={`font-dm font-light text-sm leading-relaxed ${c.selected ? 'text-white/80' : 'text-[#F5F0E8]/60'}`}>
                {c.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
