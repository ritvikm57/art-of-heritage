import { motion } from 'framer-motion'
import SectionHeader from './SectionHeader'
import Placeholder from './Placeholder'

const container = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }
const item = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }

export default function Team() {
  return (
    <section id="team" className="min-h-screen py-16 flex flex-col justify-center" style={{ backgroundColor: '#1A1614' }}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-10">
        <SectionHeader
          phase="The Team"
          title="Lok Sabha"
          subtitle="A design thinking team from Mahindra University."
          light
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-16"
        >
          {[
            'Team member 1: Name, Roll Number, Role (e.g. Lead Researcher)',
            'Team member 2: Name, Roll Number, Role',
            'Team member 3: Name, Roll Number, Role',
            'Team member 4: Name, Roll Number, Role',
            'Team member 5: Name, Roll Number, Role',
            'Team member 6: Name, Roll Number, Role',
            'Team member 7: Name, Roll Number, Role',
          ].map((label, i) => (
            <motion.div key={i} variants={item}>
              <Placeholder label={label} height="100px" />
            </motion.div>
          ))}
        </motion.div>

        {/* Research highlights */}
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
