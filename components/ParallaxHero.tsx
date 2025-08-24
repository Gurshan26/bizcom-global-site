"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function ParallaxHero() {
  return (
    <section className="relative isolate h-[92svh] w-full overflow-hidden">
      {/* Full-bleed gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-[#0F2849] to-brand-slate/60" />

      {/* Animated soft orbs (subtle, premium) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-brand-gold/10 blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -right-28 h-96 w-96 rounded-full bg-white/10 blur-3xl"
        animate={{ y: [0, 16, 0], x: [0, -12, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <span className="eyebrow text-white/80">Global Technology Distribution</span>
        <h1 className="mt-4 font-display text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
          Components, programs, and logistics—done right.
        </h1>
        <p className="mt-5 max-w-2xl text-balance text-white/85">
          BizCom Global helps OEMs and CEMs move faster with reliable sourcing,
          anti-counterfeit controls, and responsive support across APAC, EMEA,
          and the Americas.
        </p>

        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/line-card"
            className="rounded-full bg-brand-gold px-6 py-3 font-medium text-brand-navy shadow-lg transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/70"
          >
            View Line Card
          </Link>
          <Link
            href="/contact"
            className="link rounded-full border border-white/30 px-6 py-3 text-white/90 backdrop-blur-sm"
          >
            Contact Sales →
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="absolute inset-x-0 bottom-6 flex justify-center">
          <motion.div
            aria-hidden
            className="h-7 w-4 rounded-full border border-white/40"
            initial={{ y: 0, opacity: 0.8 }}
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
          >
            <motion.span className="mx-auto mt-1 block h-1.5 w-1.5 rounded-full bg-white/70" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}