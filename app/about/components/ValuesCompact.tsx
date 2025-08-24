"use client";

import { motion } from "framer-motion";

const values = [
  { title: "Performance", body: "Parts that meet spec, logistics that meet schedule." },
  { title: "Reliability", body: "Vetted suppliers, documentation, and clear SLAs." },
  { title: "Innovation", body: "Agile line card and proactive lifecycle guidance." },
  { title: "Accessibility", body: "Clear communication and responsive support." },
  { title: "Privacy & Security", body: "Confidentiality by default, secure channels for program data." },
  { title: "Sustainability", body: "Responsible sourcing aligned to RoHS/REACH where applicable." },
];

export default function ValuesCompact() {
  return (
    <section id="values" className="section">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <div className="eyebrow">What we stand for</div>
          <h2 className="h2 mt-1">The values behind every engagement</h2>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <motion.article
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.25, 1, 0.5, 1] }}
              className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-3">
                <span className="inline-block h-3 w-3 rounded-full bg-brand-gold" aria-hidden />
                <h3 className="h3">{v.title}</h3>
              </div>
              <p className="mt-2 text-sm text-brand-navy/80">{v.body}</p>
              <span className="mt-4 block h-px w-full origin-left scale-x-0 bg-gradient-to-r from-brand-gold to-transparent transition-transform duration-300 group-hover:scale-x-100" />
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}