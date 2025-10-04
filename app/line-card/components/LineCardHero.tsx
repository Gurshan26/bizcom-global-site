// components/linecard/LineCardHero.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function LineCardHero() {
  return (
    <section className="relative full-bleed isolate overflow-hidden">
      {/* gradient backdrop (matches your hero styling) */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-[#0F2849] to-brand-slate/60" />

      {/* soft ambient orbs */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-brand-gold/10 blur-3xl"
        animate={{ y: [0, -18, 0], x: [0, 12, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-16 -right-24 h-96 w-96 rounded-full bg-white/10 blur-3xl"
        animate={{ y: [0, 16, 0], x: [0, -10, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* content */}
      <div className="relative z-10">
        <div className="container-page py-16 md:py-20">
          <div className="max-w-3xl">
            <span className="eyebrow text-white/80">Our line card</span>
            <h1 className="mt-3 font-display text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
              Trusted brands.
            </h1>
            <h1 className="mt-3 font-display text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
              Global reach.
            </h1>
            <p className="mt-4 max-w-prose text-white/85">
              A curated portfolio across semiconductors, passives, interconnects, protection,
              timing, and emerging technologies—continuously expanded to meet program needs.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#brands"
                className="rounded-full bg-brand-gold px-6 py-3 font-medium text-brand-navy shadow-lg transition-transform hover:-translate-y-0.5"
              >
                Explore brands
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}