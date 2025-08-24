// components/PillarsMosaic.tsx
"use client";
import React, { useRef } from "react";
import { motion, useScroll, useSpring, useTransform, cubicBezier } from "framer-motion";

export type Pillar = { title: string; body: string };

/**
 * Grid of 6 elegant cards.
 * The section occupies ~180vh. Inside, a sticky viewport locks the screen while
 * the user scrolls; the scroll progress drives cards that slide in from the
 * sides/top/bottom. After the section ends, the page continues normally.
 */
export default function PillarsMosaic({ pillars }: { pillars: Pillar[] }) {
  const ref = useRef<HTMLDivElement>(null);

  // Progress (0 -> 1) as we scroll through this section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  // Helper to map progress segments per card
  const seg = (i: number) => {
    // Stagger each card's window slightly
    const start = 0.08 + i * 0.08;
    const end = start + 0.28;
    return [start, end] as const;
  };

  const ease = cubicBezier(0.25, 1, 0.5, 1);

  // Per-card animated style
  const styles = new Array(6).fill(0).map((_, i) => {
    const [s, e] = seg(i);

    // Force one-direction animation: top row from left, bottom row from right
    const fromLeft = i < 3;

    const x = useTransform(progress, [s, e], [fromLeft ? -120 : 120, 0], { ease });
    const opacity = useTransform(progress, [s, e], [0, 1], { ease });
    const scale = useTransform(progress, [s, e], [0.96, 1], { ease });

    return { x, opacity, scale } as const;
  });

  return (
    <section id="pillars" ref={ref} className="relative w-full">
      {/* Make this section tall; sticky viewport locks while animating */}
      <div className="h-[180vh] sm:h-[190vh] lg:h-[200vh]">
        <div className="sticky top-16 sm:top-20 h-[calc(100vh-4rem)]">
          <div className="relative h-full w-full">
            {/* Removed soft wash background layer */}

            <div className="container-page h-full flex items-center">
              <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {pillars.slice(0, 6).map((p, i) => (
                  <motion.article
                    key={p.title}
                    style={styles[i]}
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 320, damping: 22 }}
                    tabIndex={0}
                    className="group relative isolate overflow-hidden rounded-2xl border border-black/5 bg-white p-7 lg:p-8 min-h-[180px] sm:min-h-[200px] shadow-sm backdrop-blur-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/70"
                  >
                    {/* subtle brand accent */}
                    <span className="absolute left-0 top-6 h-8 w-1.5 rounded-full bg-brand-gold" />
                    <div className="mb-2 flex items-center gap-3 pl-4">
                      <span className="grid h-7 w-7 place-items-center rounded-full border border-brand-gold/40 bg-brand-gold/10 text-[13px] font-semibold text-brand-navy">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3 className="h3">{p.title}</h3>
                    </div>
                    <p className="pl-4 text-sm leading-relaxed text-brand-navy/80">{p.body}</p>

                    {/* underline sweep on hover */}
                    <span className="absolute bottom-0 left-4 right-4 h-px origin-left scale-x-0 bg-gradient-to-r from-brand-gold to-transparent transition-transform duration-300 group-hover:scale-x-100" />
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}