import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'

const members = [
  { name: 'Praseedha', id: 'SE24UCSE208', role: 'Data Collection & Research', initials: 'PS' },
  { name: 'Ritvik', id: 'SE24UCSE225', role: 'Web Developer & Research', initials: 'RM' },
  { name: 'Yatin', id: 'SE24UMEE031', role: 'Lead Interviewer, On-Field Representative', initials: 'YK' },
  { name: 'Tanmayee', id: 'SE24UNAN001', role: 'Lead Interviewer, On-Field Representative', initials: 'TK' },
  { name: 'Nainika', id: 'SE24UARI020', role: 'Proto Persona & Journey Map', initials: 'NR' },
  { name: 'Praneetha', id: 'SE24UCIE034', role: 'Root Cause Analyst & Data', initials: 'PG' },
  { name: 'Roshan', id: 'SE24UCSE245', role: 'Prototype Analyst', initials: 'RS' },
]

const colors = ['#B85C38', '#2D3561', '#C9952A', '#6B8F71', '#B85C38', '#2D3561', '#C9952A']

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }
const item = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

export default function Team() {
  return (
    <section id="team" className="min-h-screen py-16 flex flex-col justify-center" style={{ backgroundColor: '#1A1614' }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <SectionHeader
          phase="The Team"
          title="Lok Sabha"
          subtitle="A design thinking team from Mahindra University, 2026."
          light
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={container}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-white/8 mb-16"
        >
          {members.map((m, i) => (
            <motion.div
              key={m.id}
              variants={item}
              className="p-7 flex flex-col gap-5"
              style={{ backgroundColor: '#1A1614' }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: colors[i] + '22', border: `1px solid ${colors[i]}40` }}
              >
                <span className="font-cormorant font-semibold text-sm" style={{ color: colors[i] }}>{m.initials}</span>
              </div>
              <div>
                <h3 className="font-cormorant font-semibold text-2xl text-[#F5F0E8] leading-none mb-1">{m.name}</h3>
                <p className="font-dm text-[10px] tracking-[0.18em] uppercase text-[#F5F0E8]/25 mb-3">{m.id}</p>
                <p className="font-dm font-light text-xs text-[#F5F0E8]/50 leading-relaxed">{m.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="border-t border-white/10 pt-12 max-w-3xl"
        >
          <p className="font-dm font-medium text-xs tracking-widest uppercase text-[#F5F0E8]/30 mb-5">
            Research Highlights
          </p>
          <p className="font-dm font-light text-base text-[#F5F0E8]/60 leading-[1.9]">
            Primary research for this project was conducted through two structured consumer interviews
            (K. Rithvik and Gautam, Mahindra University) and a 144-person survey distributed across
            students, working professionals, homemakers, and business owners spanning age groups 18 to 50+.
            Secondary research included analysis of The Hindu's documentary coverage of the Kalamkari
            black jaggery supply chain crisis in Andhra Pradesh.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
