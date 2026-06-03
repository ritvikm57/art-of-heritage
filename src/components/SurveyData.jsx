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
  contentStyle: { background: '#1A1614', border: '1px solid rgba(26,22,20,0.15)', borderRadius: 2, fontFamily: 'DM Sans', fontSize: 11 },
  labelStyle: { color: '#1A1614', fontFamily: 'DM Sans' },
  itemStyle: { color: '#B85C38' },
}

const quotes = [
  { text: 'Once people understand what true handmade work is — how beautiful, authentic, and unique it is — then perhaps they won\'t hesitate to pay a fair price.', author: 'Working Professional, 36–50' },
  { text: 'Promote Kalamkari by highlighting its handmade authenticity and cultural heritage through social media, exhibitions, and storytelling. Collaborate with modern designers.', author: 'Student, 18–25' },
  { text: 'In Kalamkari, the workers need to follow the trendy designs so that the youth will purchase updated Kalamkari patterns with a modern look.', author: 'Business owner, 50+' },
]

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }
const item = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }

function ChartCard({ number, title, children }) {
  return (
    <div className="bg-surface p-8 md:p-10 border-b-2 border-terracotta">
      <p className="font-dm text-[10px] tracking-[0.2em] uppercase text-ink/30 mb-1">Chart {number}</p>
      <p className="font-cormorant font-semibold text-xl text-ink mb-8 leading-snug">{title}</p>
      {children}
    </div>
  )
}

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
          viewport={{ once: true, margin: '-80px' }}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 gap-px bg-ink/10 mb-20"
        >
          <motion.div variants={item}>
            <ChartCard number="01" title="How often do you buy Kalamkari?">
              <ResponsiveContainer width="100%" height={180}>
                <BarChart data={purchaseFreq} margin={{ left: -20, right: 10 }}>
                  <XAxis dataKey="name" tick={{ fontSize: 10, fontFamily: 'DM Sans', fill: 'rgba(26,22,20,0.5)' }} />
                  <YAxis tick={{ fontSize: 10, fontFamily: 'DM Sans', fill: 'rgba(26,22,20,0.4)' }} />
                  <Tooltip {...tooltipStyle} />
                  <Bar dataKey="value" fill="#B85C38" radius={[3, 3, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          </motion.div>

          <motion.div variants={item}>
            <ChartCard number="02" title="Why do people prefer machine prints?">
              <ResponsiveContainer width="100%" height={180}>
                <BarChart data={barriers} layout="vertical" margin={{ left: 0, right: 20 }}>
                  <XAxis type="number" tick={{ fontSize: 10, fontFamily: 'DM Sans', fill: 'rgba(26,22,20,0.4)' }} domain={[0, 80]} />
                  <YAxis type="category" dataKey="name" tick={{ fontSize: 10, fontFamily: 'DM Sans', fill: 'rgba(26,22,20,0.5)' }} width={130} />
                  <Tooltip {...tooltipStyle} />
                  <Bar dataKey="value" fill="#2D3561" radius={[0, 3, 3, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          </motion.div>

          <motion.div variants={item}>
            <ChartCard number="03" title="How concerned are you about losing traditional art forms?">
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie data={concernData} cx="50%" cy="50%" innerRadius={55} outerRadius={80} dataKey="value" paddingAngle={3}>
                    {concernData.map((_, i) => <Cell key={i} fill={PIE_COLORS[i]} />)}
                  </Pie>
                  <Tooltip {...tooltipStyle} />
                  <Legend iconSize={8} wrapperStyle={{ fontSize: 10, fontFamily: 'DM Sans' }} />
                </PieChart>
              </ResponsiveContainer>
            </ChartCard>
          </motion.div>

          <motion.div variants={item}>
            <ChartCard number="04" title="What would encourage you to buy Kalamkari?">
              <ResponsiveContainer width="100%" height={200}>
                <BarChart data={encouragement} layout="vertical" margin={{ left: 0, right: 20 }}>
                  <XAxis type="number" tick={{ fontSize: 10, fontFamily: 'DM Sans', fill: 'rgba(26,22,20,0.4)' }} domain={[0, 70]} />
                  <YAxis type="category" dataKey="name" tick={{ fontSize: 10, fontFamily: 'DM Sans', fill: 'rgba(26,22,20,0.5)' }} width={145} />
                  <Tooltip {...tooltipStyle} />
                  <Bar dataKey="value" fill="#6B8F71" radius={[0, 3, 3, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </ChartCard>
          </motion.div>
        </motion.div>

        {/* Quotes */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink/10"
        >
          {quotes.map((q, i) => (
            <motion.div key={i} variants={item} className="p-8 md:p-10 bg-surface flex flex-col gap-6">
              <span className="font-cormorant text-6xl text-terracotta/25 leading-none">"</span>
              <p className="font-cormorant italic text-ink/80 leading-relaxed text-lg flex-1">{q.text}"</p>
              <p className="font-dm text-[11px] tracking-[0.15em] uppercase text-terracotta">{q.author}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
