import ImagePlaceholder from "@/components/ImagePlaceholder";
import { Reveal } from "@/components/Reveal";
import MissionHero from "./components/MissionHero";  // ⟵ use left-aligned, partial-height hero
import PillarsMosaic from "@/components/PillarsMosaic";

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
        "We scout new technologies, maintain an agile line card, and co-design sourcing strategies that compress time-to-market.",
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
        "Responsible sourcing with RoHS/REACH compliance and end-of-life planning in partnership with our manufacturers.",
    },
  ];

  return (
    <div className="relative">
      {/* ================= HERO (left-aligned, partial height) ================= */}
      <MissionHero />

      {/* ================= STATEMENT BAND (colored) ================= */}
      <section id="mission-content" className="relative z-0 section bg-brand-navy/5">
        <div className="container-page">
          <Reveal>
            <div className="rounded-xl2 border border-black/5 bg-white/90 p-6 shadow-sm backdrop-blur">
              <p className="mx-auto max-w-3xl text-center text-lg leading-relaxed text-brand-navy/90">
                We pair seasoned sourcing expertise with responsive support to build long-term, trust-based
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

          <PillarsMosaic pillars={pillars} />
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
                <p className="mt-1 text-sm text-brand-navy/70">
                  Share your BOM or program timelines—our team will respond within one business day.
                </p>
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