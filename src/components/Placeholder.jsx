export default function Placeholder({ label, height = "120px" }) {
  return (
    <div
      style={{ minHeight: height }}
      className="border-2 border-dashed border-amber-400 bg-amber-50 rounded-lg p-4 flex flex-col items-start justify-center gap-2"
    >
      <span className="text-amber-600 text-xs font-medium uppercase tracking-widest">
        ✏ Team to fill
      </span>
      <span className="text-amber-800 text-sm italic">{label}</span>
    </div>
  )
}
