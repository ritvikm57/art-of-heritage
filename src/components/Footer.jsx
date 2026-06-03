import { motion } from 'framer-motion'
import KalamkariMotif from './KalamkariMotif'

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden py-20 border-t"
      style={{ backgroundColor: '#1A1614', borderColor: 'rgba(245,240,232,0.1)' }}
    >
      {/* Motif */}
      <div className="absolute bottom-0 right-0 pointer-events-none">
        <KalamkariMotif
          className="w-64 h-64 text-[#F5F0E8]"
          opacity={0.03}
        />
      </div>

      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row items-start md:items-end justify-between gap-10"
        >
          <div>
            <h2 className="font-cormorant font-semibold text-4xl md:text-5xl text-[#F5F0E8] leading-tight mb-3">
              Art of Heritage
            </h2>
            <p className="font-dm font-light text-sm text-[#F5F0E8]/40">
              Team Lok Sabha · Design Thinking · Mahindra University · 2026
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {['Empathy', 'Define', 'Ideate', 'Prototype'].map((phase, i) => (
              <span key={i} className="font-dm text-[11px] tracking-widest uppercase text-[#F5F0E8]/30">
                {phase}
                {i < 3 && <span className="ml-3 text-terracotta">→</span>}
              </span>
            ))}
          </div>
        </motion.div>

        <div className="mt-12 pt-6 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="font-dm text-[11px] tracking-widest uppercase text-[#F5F0E8]/20">
            Kalamkari · Andhra Pradesh · India
          </p>
          <p className="font-dm text-[11px] text-[#F5F0E8]/20">
            Design Thinking Documentation · 2026
          </p>
        </div>
      </div>
    </footer>
  )
}
