import { motion } from 'framer-motion'
import KalamkariMotif from './KalamkariMotif'

const stats = [
  { value: '144', label: 'Surveyed' },
  { value: '138', label: 'Ideas Generated' },
  { value: '12', label: 'HMW Areas' },
  { value: '1', label: 'Prototype' },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden"
      style={{ backgroundColor: '#1A1614' }}
    >
      {/* Kalamkari photo background */}
      <div className="absolute inset-0">
        <img
          src="/images/kalamkari-bg.jpg"
          alt=""
          className="w-full h-full object-cover object-center"
          style={{ opacity: 0.18 }}
        />
        {/* Gradient overlay — strong at text area, fades toward right */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(105deg, #1A1614 0%, rgba(26,22,20,0.7) 20%, rgba(26,22,20,0.7) 100%)',
          }}
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-10 pt-36 pb-10 flex-1 flex flex-col justify-center">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-dm text-[11px] tracking-[0.2em] uppercase text-terracotta mb-10"
        >
          Design Thinking · Mahindra University · 2026
        </motion.p>

        <div className="mb-8 overflow-hidden">
          {['Art of', 'Heritage.'].map((line, li) => (
            <div key={li} className="overflow-hidden">
              <motion.h1
                className="font-cormorant font-semibold text-[#F5F0E8] leading-[0.88] pb-[0.15em] block"
                style={{ fontSize: 'clamp(70px, 12vw, 128px)' }}
                initial={{ y: '100%' }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.4 + li * 0.18, ease: [0.16, 1, 0.3, 1] }}
              >
                {line}
              </motion.h1>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="origin-left w-16 h-px bg-terracotta mb-8"
        />

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="font-dm font-light text-[#F5F0E8]/65 max-w-xl leading-[1.85]"
          style={{ fontSize: 'clamp(14px, 1.4vw, 17px)' }}
        >
          Reviving traditionally rooted designs through augmented reality —
          a design thinking journey into why Kalamkari is disappearing
          from young wardrobes, and what it takes to bring it back.
        </motion.p>
      </div>

      {/* Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.3 }}
        className="relative z-10 max-w-[1280px] mx-auto w-full px-6 lg:px-10 pb-12"
      >
        <div className="border-t border-white/10 pt-8 grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5 + i * 0.08, duration: 0.5 }}
              className="px-0 md:px-6 py-4 first:pl-0 border-l border-white/10 first:border-l-0"
            >
              <p className="font-cormorant font-semibold text-[#F5F0E8] leading-none mb-2"
                style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}>
                {s.value}
              </p>
              <p className="font-dm text-[10px] tracking-[0.18em] uppercase text-[#F5F0E8]/40">{s.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Scroll line */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 right-10 flex flex-col items-center gap-3"
      >
        <p className="font-dm text-[9px] tracking-[0.25em] uppercase text-white/25 [writing-mode:vertical-lr]">Scroll</p>
        <motion.div
          className="w-px bg-white/20"
          initial={{ height: 0 }}
          animate={{ height: 48 }}
          transition={{ delay: 2.2, duration: 1, ease: 'easeOut', repeat: Infinity, repeatType: 'loop', repeatDelay: 1 }}
        />
      </motion.div>
    </section>
  )
}
