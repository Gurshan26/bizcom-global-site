"use client";

const POINTS = [
  {
    title: "Engineering-first sourcing",
    body: "Guided by build specs and part performance—not just part numbers.",
  },
  {
    title: "QA & anti-counterfeit",
    body: "Documented traceability and inspection from quote to delivery.",
  },
  {
    title: "Global coverage",
    body: "APAC, EMEA, and the Americas with a vetted supplier network.",
  },
  {
    title: "Program logistics",
    body: "Kitting, scheduled deliveries, and last-time-buy planning.",
  },
];

export default function WhyChoose() {
  return (
    <section className="section">
      <div className="container-page">
        <h2 className="h2">Why BizCom</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {POINTS.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm"
            >
              <h3 className="font-semibold text-brand-navy">{p.title}</h3>
              <p className="mt-2 text-sm text-brand-navy/75">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}