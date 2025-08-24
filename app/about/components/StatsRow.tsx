"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Founded", value: "2001" },
  { label: "Regions served", value: "APAC · EMEA · Americas" },
  { label: "Line card partners", value: "50+ • TODO confirm" }, // TODO
  { label: "On-time fulfillment", value: "98% • TODO confirm" }, // TODO
];

export default function StatsRow() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.45, delay: i * 0.06, ease: [0.25, 1, 0.5, 1] }}
              className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
            >
              <div className="text-sm uppercase tracking-wider text-brand-slate">{s.label}</div>
              <div className="mt-2 text-lg font-semibold text-brand-navy">{s.value}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}