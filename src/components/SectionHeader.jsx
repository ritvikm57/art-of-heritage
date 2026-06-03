import { motion } from 'framer-motion'

export default function SectionHeader({ phase, title, subtitle, light = false }) {
  const textColor = light ? 'text-[#F5F0E8]' : 'text-ink'
  const subtitleColor = light ? 'text-[#F5F0E8]/60' : 'text-ink/50'

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-100px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.08 } },
      }}
      className="mb-16"
    >
      {phase && (
        <motion.p
          variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0, transition: { duration: 0.5 } } }}
          className="font-dm font-medium text-[11px] tracking-[0.15em] uppercase text-terracotta mb-4"
        >
          {phase}
        </motion.p>
      )}
      <motion.h2
        variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.7 } } }}
        className={`font-cormorant font-medium leading-tight ${textColor}`}
        style={{ fontSize: 'clamp(36px, 5vw, 56px)' }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } }}
          className={`font-dm font-light mt-4 max-w-2xl leading-relaxed text-base md:text-lg ${subtitleColor}`}
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}
