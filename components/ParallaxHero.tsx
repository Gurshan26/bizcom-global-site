"use client";

import { motion } from "framer-motion";

export default function ParallaxHero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-[#0F2849] to-brand-slate/70" />

      {/* Parallax overlay */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6"
      >
        <span className="eyebrow text-white/80">Why we exist</span>
        <h1 className="h1 text-white mt-4">Our Mission</h1>
        <p className="mt-4 max-w-2xl text-base sm:text-lg text-white/85">
          To deliver comprehensive, value-added electronic solutions that give our customers a
          competitive edge—in time-to-market, technological agility, and total cost efficiency.
        </p>
        <a
          href="#pillars"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-brand-gold px-5 py-3 font-medium text-brand-navy shadow-lg transition-transform hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/70"
        >
          Explore the pillars <span aria-hidden>↓</span>
        </a>
      </motion.div>
    </section>
  );
}