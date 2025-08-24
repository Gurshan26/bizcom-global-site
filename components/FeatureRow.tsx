"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type Props = {
  title: string;
  body: string;
  cta?: { href: string; label: string };
  reverse?: boolean;
};

export default function FeatureRow({ title, body, cta, reverse }: Props) {
  return (
    <section className="section">
      <div
        className={`container-page grid items-center gap-8 lg:grid-cols-2 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Image placeholder */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? 60 : -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-brand-navy/15 via-brand-slate/20 to-white/30"
        >
          <div className="absolute inset-0 grid place-items-center text-brand-navy/50">
            Image here
          </div>
        </motion.div>

        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? -60 : 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1], delay: 0.05 }}
        >
          <h3 className="h2">{title}</h3>
          <p className="mt-3 max-w-prose text-brand-navy/80">{body}</p>
          {cta && (
            <Link href={cta.href} className="link mt-5 inline-block text-brand-navy">
              {cta.label} →
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}