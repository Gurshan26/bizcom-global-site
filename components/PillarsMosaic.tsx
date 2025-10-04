"use client";

import { motion } from "framer-motion";

type Pillar = { title: string; body: string };

export default function PillarsMosaic({ pillars }: { pillars: Pillar[] }) {
  return (
    <div className="relative z-0">
      {/* ---------- Mobile: horizontal snap scroll, with safe padding so the first card never overlaps ---------- */}
      <div className="md:hidden">
        {/* The -mx-4 allows cards to “bleed” edge-to-edge, while scrollPadding keeps the first card fully clear of the heading */}
        <div
          className="-mx-4 overflow-x-auto px-4 snap-x snap-mandatory"
          style={{
            scrollPaddingLeft: "16px",
            scrollPaddingRight: "16px",
            WebkitOverflowScrolling: "touch"
          }}
        >
          <ul className="flex w-max gap-3 pr-4">
            {pillars.map((p, i) => (
              <li key={p.title} className="snap-start shrink-0 w-[85vw]">
                <PillarCard index={i} title={p.title} body={p.body} />
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ---------- Tablet / Desktop: simple grid with light reveal ---------- */}
      <div className="hidden grid-cols-2 gap-4 md:grid">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
          >
            <PillarCard index={i} title={p.title} body={p.body} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function PillarCard({ index, title, body }: { index: number; title: string; body: string }) {
  const num = String(index + 1).padStart(2, "0");

  return (
    <motion.article
      // Keep the animation, but don’t move up enough to collide with the heading on small screens
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.45, ease: [0.25, 1, 0.5, 1] }}
      className="rounded-3xl border border-black/10 bg-white/90 p-4 shadow-sm backdrop-blur sm:p-6"
    >
      <div className="mb-3 flex items-center gap-3">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-white text-[13px] font-semibold text-brand-navy/80 shadow-sm">
          {num}
        </span>
        <h3 className="text-xl font-semibold text-brand-navy sm:text-2xl">{title}</h3>
      </div>
      <p className="text-[15px] leading-relaxed text-brand-navy/80">{body}</p>
    </motion.article>
  );
}