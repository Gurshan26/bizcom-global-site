import ImagePlaceholder from "@/components/ImagePlaceholder";
import { Reveal } from "@/components/Reveal";
import { Stagger, Item } from "@/components/Stagger";
import GlowOrbs from "@/components/GlowOrbs";

export const metadata = { title: "Mission — BizCom Global" };

export default function MissionPage() {
  const pillars = [
    {
      title: "Performance",
      body:
        "We prioritize component quality, supply continuity, and responsive logistics so your systems perform under all conditions.",
    },
    {
      title: "Reliability",
      body:
        "20+ years of distribution discipline: vetted suppliers, anti-counterfeit controls, and transparent documentation from quote to delivery.",
    },
    {
      title: "Innovation",
      body:
        "We scout new technologies, maintain an agile line card, and co‑design sourcing strategies that compress time‑to‑market.",
    },
    {
      title: "Accessibility",
      body:
        "Clear interfaces, readable docs, and inclusive processes. If a decision needs a screen reader or a spreadsheet, it should still be effortless.",
    },
    {
      title: "Privacy & Security",
      body:
        "Confidentiality by default. NDAs honored, data minimized, and secure channels for program, pricing, and compliance information.",
    },
    {
      title: "Sustainability",
      body:
        "Responsible sourcing with RoHS/REACH compliance and end‑of‑life planning in partnership with our manufacturers.",
    },
  ];

  return (
    <div className="relative">
      {/* ================= HERO (full viewport) ================= */}
      <section aria-labelledby="mission-hero" className="relative min-h-[92vh] w-full overflow-hidden px-0">
        {/* Base gradient */}
        <div className="absolute inset-0 -z-20 bg-gradient-to-br from-brand-navy via-[#0F2849] to-brand-slate/60" />
        {/* Subtle placeholder texture */}
        <div className="absolute inset-0 -z-10 opacity-20" aria-hidden>
          <ImagePlaceholder aspect="21/9" tone="navy" />
        </div>
        {/* Floating gold accents */}
        <GlowOrbs />

        <div className="container-page relative z-10 flex min-h-[92vh] flex-col items-start justify-center py-16">
          <Reveal>
            <span className="eyebrow text-white/80">Why we exist</span>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 id="mission-hero" className="h1 text-white/95">
              Our Mission
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-4 max-w-2xl text-base sm:text-lg text-white/85">
              To deliver comprehensive, value‑added electronic solutions that give our customers a
              competitive edge—in time‑to‑market, technological agility, and total cost efficiency.
            </p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="mt-8">
              <a
                href="#mission-content"
                className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-5 py-2.5 font-medium text-brand-navy shadow-sm ring-1 ring-black/10 transition-transform duration-200 ease-out-quart hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/70"
              >
                Explore the pillars <span aria-hidden>↓</span>
              </a>
            </div>
          </Reveal>
        </div>

        {/* Scroll cue */}
        <a
          href="#mission-content"
          aria-label="Scroll to mission content"
          className="group absolute bottom-6 left-1/2 z-10 -translate-x-1/2"
        >
          <span className="block h-10 w-6 rounded-full border-2 border-white/70 p-1">
            <span className="block h-2 w-2 animate-bounce rounded-full bg-white/80" />
          </span>
        </a>
      </section>

      {/* ================= STATEMENT BAND (colored) ================= */}
      <section id="mission-content" className="relative z-0 section bg-brand-navy/5">
        <div className="container-page">
          <Reveal>
            <div className="rounded-xl2 border border-black/5 bg-white/90 p-6 shadow-sm backdrop-blur">
              <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-brand-navy/90">
                We pair seasoned sourcing expertise with responsive support to build long‑term, trust‑based
                relationships. From Contract Electronic Manufacturers and System Integrators to leaders in
                Automotive, Aerospace, ICT, and Data Networks—we engineer reliability into every delivery.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================= PILLARS (animated grid) ================= */}
      <section aria-labelledby="pillars" className="section">
        <div className="container-page">
          <h2 id="pillars" className="h2">Our Pillars</h2>
          <p className="mt-2 max-w-2xl text-brand-navy/70">
            The standards that guide every sourcing engagement and program partnership.
          </p>

          <Stagger>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {pillars.map((p) => (
                <Item key={p.title}>
                  <article
                    tabIndex={0}
                    className="group rounded-xl2 border border-black/5 bg-white p-5 shadow-sm transition duration-300 ease-out-quart hover:-translate-y-1 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/70"
                  >
                    <div className="flex items-center gap-2">
                      <span className="inline-block h-2 w-2 rounded-full bg-brand-gold" />
                      <h3 className="h3 m-0">{p.title}</h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-brand-navy/80">{p.body}</p>
                  </article>
                </Item>
              ))}
            </div>
          </Stagger>
        </div>
      </section>

      {/* ================= CTA BAND ================= */}
      <section className="py-12 bg-brand-soft">
        <div className="container-page">
          <Reveal>
            <div className="flex flex-col items-start gap-4 rounded-xl2 border border-black/5 bg-white px-6 py-6 shadow-sm sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="eyebrow">Next step</div>
                <div className="h3">Let’s align your sourcing roadmap</div>
                <p className="mt-1 text-sm text-brand-navy/70">Share your BOM or program timelines—our team will respond within one business day.</p>
              </div>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-brand-gold px-5 py-2.5 font-medium text-brand-navy shadow-sm ring-1 ring-black/10 transition-transform duration-200 ease-out-quart hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/70"
              >
                Contact Sales <span aria-hidden>→</span>
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
