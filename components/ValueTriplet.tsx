"use client";

import { motion } from "framer-motion";

const items = [
  {
    title: "Global availability",
    body:
      "APAC, EMEA, and Americas coverage with vetted suppliers and agile logistics.",
  },
  {
    title: "Counterfeit controls",
    body:
      "QA workflows, traceability, and compliant documentation from quote to delivery.",
  },
  {
    title: "Responsive support",
    body:
      "Program sourcing, LTB strategies, and BOM support—answers within one business day.",
  },
];

export default function ValueTriplet() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="grid gap-6 md:grid-cols-3">
          {items.map((it, i) => (
            <motion.article
              key={it.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.08,
                duration: 0.55,
                ease: [0.25, 1, 0.5, 1],
              }}
              className="group rounded-2xl border border-black/5 bg-white p-6 shadow-sm"
            >
              <h3 className="h3">{it.title}</h3>
              <p className="mt-2 text-sm text-brand-navy/80">{it.body}</p>
              <span className="mt-4 block h-px w-full origin-left scale-x-0 bg-gradient-to-r from-brand-gold to-transparent transition-transform duration-300 group-hover:scale-x-100" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}