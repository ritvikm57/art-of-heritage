import { motion } from 'framer-motion'

export default function SectionHeader({ phase, title, subtitle, light = false }) {
  const textColor = light ? 'text-[#F5F0E8]' : 'text-ink'
  const subtitleColor = light ? 'text-[#F5F0E8]/50' : 'text-ink/45'

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
      className="mb-16 max-w-3xl"
    >
      {phase && (
        <motion.p
          variants={{ hidden: { opacity: 0, x: -16 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}
          className="font-dm font-medium text-[11px] tracking-[0.2em] uppercase text-terracotta mb-5"
        >
          {phase}
        </motion.p>
      )}
      <motion.h2
        variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } } }}
        className={`font-cormorant font-semibold leading-[0.95] ${textColor}`}
        style={{ fontSize: 'clamp(40px, 5.5vw, 64px)' }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: 0.1 } } }}
          className={`font-dm font-light mt-5 leading-[1.8] ${subtitleColor}`}
          style={{ fontSize: 'clamp(14px, 1.3vw, 17px)' }}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}
