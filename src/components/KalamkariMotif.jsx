export default function KalamkariMotif({ className = "", opacity = 0.04 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 400 400"
      className={className}
      style={{ opacity }}
      aria-hidden="true"
    >
      {/* Lotus base */}
      <ellipse cx="200" cy="320" rx="80" ry="20" fill="currentColor" />
      <path d="M200 300 Q170 260 160 220 Q200 250 200 300Z" fill="currentColor" />
      <path d="M200 300 Q230 260 240 220 Q200 250 200 300Z" fill="currentColor" />
      <path d="M200 300 Q150 240 130 190 Q185 230 200 300Z" fill="currentColor" />
      <path d="M200 300 Q250 240 270 190 Q215 230 200 300Z" fill="currentColor" />
      <path d="M200 300 Q140 220 120 160 Q180 210 200 300Z" fill="currentColor" />
      <path d="M200 300 Q260 220 280 160 Q220 210 200 300Z" fill="currentColor" />
      {/* Center jewel */}
      <circle cx="200" cy="290" r="12" fill="currentColor" />
      <circle cx="200" cy="290" r="6" fill="none" stroke="currentColor" strokeWidth="2" />

      {/* Peacock body */}
      <ellipse cx="200" cy="160" rx="30" ry="50" fill="currentColor" />
      <circle cx="200" cy="100" r="20" fill="currentColor" />
      {/* Beak */}
      <path d="M200 88 Q215 82 218 90 Q210 94 200 92Z" fill="currentColor" />
      {/* Eye */}
      <circle cx="207" cy="96" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="207" cy="96" r="1.5" fill="currentColor" />
      {/* Crest */}
      <path d="M196 82 Q194 68 190 60 Q198 70 200 80Z" fill="currentColor" />
      <path d="M200 82 Q200 66 200 58 Q202 70 202 82Z" fill="currentColor" />
      <path d="M204 82 Q206 68 210 60 Q202 70 200 80Z" fill="currentColor" />
      <circle cx="190" cy="59" r="3" fill="currentColor" />
      <circle cx="200" cy="57" r="3" fill="currentColor" />
      <circle cx="210" cy="59" r="3" fill="currentColor" />

      {/* Tail feathers */}
      <path d="M200 180 Q150 130 100 80 Q160 140 200 190Z" fill="currentColor" />
      <path d="M200 180 Q250 130 300 80 Q240 140 200 190Z" fill="currentColor" />
      <path d="M200 180 Q130 150 70 140 Q145 165 200 190Z" fill="currentColor" />
      <path d="M200 180 Q270 150 330 140 Q255 165 200 190Z" fill="currentColor" />
      <path d="M200 185 Q110 175 60 185 Q140 185 200 195Z" fill="currentColor" />
      <path d="M200 185 Q290 175 340 185 Q260 185 200 195Z" fill="currentColor" />

      {/* Feather eye spots */}
      <circle cx="110" cy="92" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="110" cy="92" r="4" fill="currentColor" />
      <circle cx="290" cy="92" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="290" cy="92" r="4" fill="currentColor" />
      <circle cx="82" cy="152" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="82" cy="152" r="3" fill="currentColor" />
      <circle cx="318" cy="152" r="7" fill="none" stroke="currentColor" strokeWidth="2" />
      <circle cx="318" cy="152" r="3" fill="currentColor" />

      {/* Decorative border dots */}
      {[0,45,90,135,180,225,270,315].map((angle, i) => {
        const rad = (angle * Math.PI) / 180
        const x = 200 + 185 * Math.cos(rad)
        const y = 200 + 185 * Math.sin(rad)
        return <circle key={i} cx={x} cy={y} r="4" fill="currentColor" />
      })}

      {/* Outer ring */}
      <circle cx="200" cy="200" r="190" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="8 6" />
      <circle cx="200" cy="200" r="178" fill="none" stroke="currentColor" strokeWidth="0.8" />
    </svg>
  )
}
