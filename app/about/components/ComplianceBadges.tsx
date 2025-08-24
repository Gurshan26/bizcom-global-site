"use client";

import { motion } from "framer-motion";

const items = [
  { label: "RoHS", note: "Restriction of Hazardous Substances" },
  { label: "REACH", note: "Registration, Evaluation, Authorisation and Restriction of Chemicals" },
  { label: "NDA", note: "Confidentiality by default for program and pricing data" },
  { label: "Docs", note: "Traceability & test reports provided where applicable" },
  // { label: "ISO 9001", note: "Quality management • TODO confirm before publishing" }, // TODO
];

export default function ComplianceBadges() {
  return (
    <section id="compliance" className="section">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <div className="eyebrow">Compliance & sustainability</div>
          <h2 className="h2 mt-1">Traceability by design</h2>
          <p className="mt-3 text-brand-navy/80">
            We align to responsible sourcing practices. Documentation accompanies engagements, and parts are aligned to RoHS/REACH where applicable.
          </p>
        </div>

        <div className="mx-auto mt-8 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
          {items.map((it, i) => (
            <motion.div
              key={it.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl border border-black/10 bg-white p-4 text-center shadow-sm"
            >
              <div className="font-semibold text-brand-navy">{it.label}</div>
              <div className="mt-1 text-xs text-brand-navy/70">{it.note}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}