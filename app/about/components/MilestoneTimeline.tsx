"use client";

import { motion } from "framer-motion";

const milestones = [
  { year: "2001", title: "Founded", blurb: "BizCom Global starts as a focused components distributor in Singapore." },
  { year: "2006", title: "APAC scale", blurb: "Expanded supplier network and program logistics across key APAC hubs." },
  { year: "2012", title: "QA & traceability", blurb: "Formal anti-counterfeit controls and documentation discipline introduced." },
  { year: "2017", title: "EMEA coverage", blurb: "Support footprint grows to cover major EMEA manufacturing corridors." },
  { year: "2021", title: "Program sourcing", blurb: "Kitting, scheduled deliveries, and LTB planning offered as standard." },
  { year: "2025", title: "Today", blurb: "Trusted partner for time-critical, compliance-driven builds worldwide." },
];

export default function MilestoneTimeline() {
  return (
    <section id="milestones" className="section">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <div className="eyebrow">Our journey</div>
          <h2 className="h2 mt-1">Milestones that shaped our practice</h2>
        </div>

        <div className="relative mx-auto mt-10 max-w-3xl">
          {/* vertical rail */}
          <div className="absolute left-1/2 top-0 -ml-px h-full w-px bg-gradient-to-b from-brand-gold/40 via-black/10 to-transparent" />
          <ol className="space-y-10">
            {milestones.map((m, i) => (
              <motion.li
                key={m.year}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, delay: i * 0.06, ease: [0.25, 1, 0.5, 1] }}
                className={`relative grid grid-cols-2 gap-6 items-start ${i % 2 ? "text-left" : "text-right"}`}
              >
                {/* dot */}
                <span
                  className="absolute left-1/2 -ml-2 mt-1 h-4 w-4 rounded-full bg-brand-gold shadow ring-2 ring-white"
                  aria-hidden
                />
                {i % 2 === 0 ? (
                  <>
                    <div className="pr-8">
                      <div className="text-sm text-brand-slate">{m.year}</div>
                      <div className="mt-1 font-semibold text-brand-navy">{m.title}</div>
                      <p className="mt-1 text-sm text-brand-navy/80">{m.blurb}</p>
                    </div>
                    <div />
                  </>
                ) : (
                  <>
                    <div />
                    <div className="pl-8">
                      <div className="text-sm text-brand-slate">{m.year}</div>
                      <div className="mt-1 font-semibold text-brand-navy">{m.title}</div>
                      <p className="mt-1 text-sm text-brand-navy/80">{m.blurb}</p>
                    </div>
                  </>
                )}
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}