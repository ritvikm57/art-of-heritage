import { motion } from 'framer-motion'
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend,
} from 'recharts'
import SectionHeader from './SectionHeader'

const purchaseFreq = [
  { name: 'Never', value: 15 },
  { name: 'Rarely', value: 38 },
  { name: 'Occasionally', value: 30 },
  { name: 'Frequently', value: 12 },
  { name: 'Very Frequently', value: 5 },
]

const barriers = [
  { name: 'Cheaper alternatives', value: 65 },
  { name: 'More trendy designs', value: 62 },
  { name: 'Easy machine prints', value: 58 },
  { name: 'Lack of awareness', value: 35 },
]

const concernData = [
  { name: 'Very concerned', value: 38 },
  { name: 'Slightly concerned', value: 42 },
  { name: 'Not concerned', value: 12 },
  { name: 'Not sure', value: 8 },
]

const encouragement = [
  { name: 'Better/Modern Designs', value: 58 },
  { name: 'Easy Availability', value: 55 },
  { name: 'Awareness About Value', value: 52 },
  { name: 'Quality Assurance', value: 48 },
  { name: 'Lower Price', value: 42 },
]

const PIE_COLORS = ['#B85C38', '#C9952A', '#6B8F71', '#2D3561']

const tooltipStyle = {
  contentStyle: { background: '#1A1614', border: '1px solid rgba(245,240,232,0.1)', borderRadius: 4, fontFamily: 'DM Sans', fontSize: 12 },
  labelStyle: { color: '#F5F0E8', fontFamily: 'DM Sans' },
  itemStyle: { color: '#B85C38' },
}

const quotes = [
  {
    text: 'Once people understand what true handmade work is — how beautiful, authentic, and unique it is — then perhaps they won\'t hesitate to pay a fair price.',
    author: 'Survey respondent, Working Professional, 36–50',
  },
  {
    text: 'Promote Kalamkari by highlighting its handmade authenticity and cultural heritage through social media, exhibitions, and storytelling. Collaborate with modern designers.',
    author: 'Survey respondent, Student, 18–25',
  },
  {
    text: 'In Kalamkari, the workers need to follow the trendy designs so that the youth will purchase updated Kalamkari patterns with a modern look.',
    author: 'Survey respondent, Business, 50+',
  },
]

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }
const item = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

export default function SurveyData() {
  return (
    <section id="survey" className="py-[120px]" style={{ backgroundColor: '#F5F0E8' }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <SectionHeader
          phase="Evidence · 144 Responses"
          title="What the Data Told Us"
          subtitle="A 144-person survey across students, professionals, and homemakers."
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {/* Chart 1 */}
          <motion.div variants={item} className="bg-surface p-7 rounded-sm border border-ink/5">
            <p className="font-dm font-medium text-xs tracking-widest uppercase text-ink/40 mb-1">Chart 1</p>
            <p className="font-cormorant font-semibold text-xl text-ink mb-6">How often do you buy Kalamkari?</p>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={purchaseFreq} margin={{ left: -20 }}>
                <XAxis dataKey="name" tick={{ fontSize: 10, fontFamily: 'DM Sans', fill: '#1A1614aa' }} />
                <YAxis tick={{ fontSize: 10, fontFamily: 'DM Sans', fill: '#1A1614aa' }} />
                <Tooltip {...tooltipStyle} />
                <Bar dataKey="value" fill="#B85C38" radius={[3, 3, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Chart 2 */}
          <motion.div variants={item} className="bg-surface p-7 rounded-sm border border-ink/5">
            <p className="font-dm font-medium text-xs tracking-widest uppercase text-ink/40 mb-1">Chart 2</p>
            <p className="font-cormorant font-semibold text-xl text-ink mb-6">Why do people prefer machine prints?</p>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={barriers} layout="vertical" margin={{ left: 10 }}>
                <XAxis type="number" tick={{ fontSize: 10, fontFamily: 'DM Sans', fill: '#1A1614aa' }} domain={[0, 80]} />
                <YAxis type="category" dataKey="name" tick={{ fontSize: 10, fontFamily: 'DM Sans', fill: '#1A1614aa' }} width={130} />
                <Tooltip {...tooltipStyle} />
                <Bar dataKey="value" fill="#2D3561" radius={[0, 3, 3, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Chart 3 */}
          <motion.div variants={item} className="bg-surface p-7 rounded-sm border border-ink/5">
            <p className="font-dm font-medium text-xs tracking-widest uppercase text-ink/40 mb-1">Chart 3</p>
            <p className="font-cormorant font-semibold text-xl text-ink mb-6">How concerned are you about losing traditional art forms?</p>
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie
                  data={concernData}
                  cx="50%"
                  cy="50%"
                  innerRadius={55}
                  outerRadius={85}
                  dataKey="value"
                  paddingAngle={2}
                >
                  {concernData.map((_, i) => (
                    <Cell key={i} fill={PIE_COLORS[i]} />
                  ))}
                </Pie>
                <Tooltip {...tooltipStyle} />
                <Legend
                  iconSize={8}
                  wrapperStyle={{ fontSize: 10, fontFamily: 'DM Sans', paddingTop: 8 }}
                />
              </PieChart>
            </ResponsiveContainer>
          </motion.div>

          {/* Chart 4 */}
          <motion.div variants={item} className="bg-surface p-7 rounded-sm border border-ink/5">
            <p className="font-dm font-medium text-xs tracking-widest uppercase text-ink/40 mb-1">Chart 4</p>
            <p className="font-cormorant font-semibold text-xl text-ink mb-6">What would encourage you to buy Kalamkari?</p>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={encouragement} layout="vertical" margin={{ left: 10 }}>
                <XAxis type="number" tick={{ fontSize: 10, fontFamily: 'DM Sans', fill: '#1A1614aa' }} domain={[0, 70]} />
                <YAxis type="category" dataKey="name" tick={{ fontSize: 10, fontFamily: 'DM Sans', fill: '#1A1614aa' }} width={140} />
                <Tooltip {...tooltipStyle} />
                <Bar dataKey="value" fill="#6B8F71" radius={[0, 3, 3, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </motion.div>
        </motion.div>

        {/* Quotes */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {quotes.map((q, i) => (
            <motion.div
              key={i}
              variants={item}
              className="p-7 bg-surface border border-ink/8 rounded-sm flex flex-col gap-5"
            >
              <p className="font-cormorant italic text-ink/80 leading-relaxed text-lg flex-1">
                "{q.text}"
              </p>
              <p className="font-dm text-[11px] tracking-widest uppercase text-terracotta">{q.author}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
