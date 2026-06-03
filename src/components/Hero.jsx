import { motion } from 'framer-motion'
import KalamkariMotif from './KalamkariMotif'
import { useCountUp } from '../hooks/useCountUp'

function StatCard({ value, label, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
      className="flex-1 px-6 py-5 flex flex-col gap-1 border-l border-white/20 first:border-l-0"
    >
      <span className="font-cormorant font-semibold text-4xl md:text-5xl text-white leading-none">
        {value}
      </span>
      <span className="font-dm text-xs text-white/50 tracking-widest uppercase mt-1">
        {label}
      </span>
    </motion.div>
  )
}

const words = ['Art', 'of', 'Heritage.']

export default function Hero() {
  const stats = [
    { value: '144', label: 'Surveyed' },
    { value: '138', label: 'Ideas Generated' },
    { value: '12', label: 'HMW Areas' },
    { value: '1', label: 'Prototype' },
  ]

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden"
      style={{ backgroundColor: '#1A1614' }}
    >
      {/* Kalamkari watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <KalamkariMotif
          className="w-[600px] h-[600px] md:w-[900px] md:h-[900px] text-[#F5F0E8]"
          opacity={0.04}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-10 pt-32 pb-10 flex-1 flex flex-col justify-center">
        {/* Top label */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-dm text-[11px] tracking-[0.15em] uppercase text-terracotta mb-10"
        >
          Design Thinking · Mahindra University · 2026
        </motion.p>

        {/* Hero headline — word by word */}
        <div className="mb-8">
          <h1 className="font-cormorant font-semibold leading-[0.88] text-[#F5F0E8]"
            style={{ fontSize: 'clamp(64px, 12vw, 120px)' }}>
            {['Art of', 'Heritage.'].map((line, li) => (
              <span key={li} className="block overflow-hidden">
                {line.split(' ').map((word, wi) => (
                  <motion.span
                    key={wi}
                    className="inline-block mr-[0.25em]"
                    initial={{ y: '100%', opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: 0.8,
                      delay: 0.4 + li * 0.3 + wi * 0.1,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {word}
                  </motion.span>
                ))}
              </span>
            ))}
          </h1>
        </div>

        {/* Terracotta rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 1.0, ease: 'easeOut' }}
          className="origin-left w-16 h-px bg-terracotta mb-8"
        />

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.1 }}
          className="font-dm font-light text-[#F5F0E8]/70 max-w-2xl leading-relaxed"
          style={{ fontSize: 'clamp(15px, 1.5vw, 18px)' }}
        >
          Reviving traditionally rooted designs through augmented reality —
          a design thinking journey into why Kalamkari is disappearing
          from young wardrobes, and what it takes to bring it back.
        </motion.p>
      </div>

      {/* Stats row */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.3 }}
        className="relative z-10 max-w-[1280px] mx-auto w-full px-6 lg:px-10 pb-12"
      >
        <div className="border-t border-white/10 pt-8 flex flex-wrap md:flex-nowrap">
          {stats.map((s, i) => <StatCard key={i} {...s} index={i} />)}
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-dm text-[10px] tracking-widest uppercase text-white/30">Scroll</span>
        <motion.div
          className="w-px bg-white/30 origin-top"
          initial={{ scaleY: 0, height: 0 }}
          animate={{ height: 40, scaleY: 1 }}
          transition={{ delay: 2.2, duration: 1, ease: 'easeOut', repeat: Infinity, repeatType: 'loop', repeatDelay: 1 }}
        />
      </motion.div>
    </section>
  )
}
