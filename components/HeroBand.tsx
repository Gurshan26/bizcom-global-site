"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type CTA = { href: string; label: string };

type Props = {
  eyebrow: string;
  headline: string;
  body?: string;
  primary?: CTA;
  secondary?: CTA;
  /** Keep both pages identical height by default */
  minHClass?: string; // e.g. "min-h-[70svh] md:min-h-[68vh]"
};

export default function HeroBand({
  eyebrow,
  headline,
  body,
  primary,
  secondary,
  minHClass = "min-h-[70svh] md:min-h-[68vh]",
}: Props) {
  return (
    <section className={`relative full-bleed isolate overflow-hidden ${minHClass}`}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-[#0F2849] to-brand-slate/60" />

      {/* Soft ambient orbs (identical for both pages) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-brand-gold/10 blur-3xl"
        animate={{ y: [0, -20, 0], x: [0, 12, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 -right-28 h-96 w-96 rounded-full bg-white/10 blur-3xl"
        animate={{ y: [0, 16, 0], x: [0, -12, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Content (left-aligned) */}
      <div className="relative z-10">
        <div className="container-page py-20 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
            className="eyebrow text-white/80"
          >
            {eyebrow}
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 1, 0.5, 1], delay: 0.05 }}
            className="mt-3 font-display text-4xl leading-tight text-white sm:text-5xl md:text-6xl max-w-5xl"
          >
            {headline}
          </motion.h1>

          {body && (
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1], delay: 0.12 }}
              className="mt-5 max-w-2xl text-white/85"
            >
              {body}
            </motion.p>
          )}

          {(primary || secondary) && (
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, ease: [0.25, 1, 0.5, 1], delay: 0.2 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              {primary && (
                <Link
                  href={primary.href}
                  className="rounded-full bg-brand-gold px-6 py-3 font-medium text-brand-navy shadow-lg transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/70"
                >
                  {primary.label}
                </Link>
              )}
              {secondary && (
                <Link
                  href={secondary.href}
                  className="link rounded-full border border-white/30 px-6 py-3 text-white/90 backdrop-blur-sm"
                >
                  {secondary.label}
                </Link>
              )}
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}