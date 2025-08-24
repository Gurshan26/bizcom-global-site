export const metadata = { title: "About BizCom Global" };

import AboutHero from "./components/AboutHero";
import StatsRow from "./components/StatsRow";
import MilestoneTimeline from "./components/MilestoneTimeline";
import FootprintMap from "./components/FootprintMap";
import ValuesCompact from "./components/ValuesCompact";
import ComplianceBadges from "./components/ComplianceBadges";
import LeadershipRow from "./components/LeadershipRow";

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <AboutHero />

      {/* WHO WE ARE */}
      <section id="who-we-are" className="section">
        <div className="container-page">
          <div className="mx-auto max-w-3xl text-center">
            <div className="eyebrow">Who we are</div>
            <h2 className="h2 mt-1">Two decades of dependable distribution</h2>
            <p className="mt-4 text-brand-navy/80">
              BizCom Global is a distribution partner for mission‑critical electronics—active and passive components delivered with program‑level discipline.
              Our team combines sourcing depth, anti‑counterfeit controls, and responsive support so OEMs and CEMs can build with confidence.
              From scheduled deliveries and kitting to last‑time‑buy planning, we align to your production calendar—minimising risk, compressing lead times, and protecting quality across APAC, EMEA, and the Americas.
            </p>
          </div>
        </div>
      </section>

      {/* STATS */}
      <StatsRow />

      {/* MILESTONES */}
      <MilestoneTimeline />

      {/* FOOTPRINT */}
      <FootprintMap />

      {/* WHAT WE DO / VALUES */}
      <ValuesCompact />

      {/* COMPLIANCE & SUSTAINABILITY */}
      <ComplianceBadges />

      {/* LEADERSHIP */}
      <LeadershipRow />
    </>
  );
}
