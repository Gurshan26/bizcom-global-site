export default function ImagePlaceholder({
  aspect = "16/9",
  tone = "navy", // 'navy' | 'soft'
}: { aspect?: string; tone?: "navy" | "soft" }) {
  const toneClass =
    tone === "navy"
      ? "bg-gradient-to-br from-brand-navy to-brand-slate/60"
      : "bg-brand-soft";
  return (
    <div className={`relative w-full overflow-hidden rounded-xl2 ring-1 ring-black/5`} style={{ aspectRatio: aspect }}>
      <div className={`absolute inset-0 ${toneClass}`} />
      <div className="absolute inset-0 ring-1 ring-brand-gold/30 rounded-xl2 pointer-events-none" />
    </div>
  );
}