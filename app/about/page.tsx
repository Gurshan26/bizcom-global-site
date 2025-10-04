export const metadata = { title: "About Us" };

import AboutHero from "./components/AboutHero";
import StatsRow from "./components/StatsRow";
import ValuesCompact from "./components/ValuesCompact";
import ComplianceBadges from "./components/ComplianceBadges";

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
            <h2 className="h2 mt-1">Global distribution. Fresh perspective.</h2>
            <p className="mt-4 text-brand-navy/80">
              BizCom Global is a forward‑looking distribution partner for mission‑critical electronics—active and passive components delivered with program‑level discipline. Our team combines sourcing depth, anti‑counterfeit controls, and responsive support so OEMs and CEMs can build with confidence. From scheduled deliveries and kitting to last‑time‑buy planning, we align to your production calendar—minimising risk, compressing lead times, and protecting quality across APAC, EMEA, and the Americas.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section id="mission" className="section bg-brand-slate/5">
        <div className="container-page text-center">
          <div className="eyebrow">Our Mission</div>
          <h2 className="h2 mt-1">Redefining electronics distribution</h2>
          <p className="mt-4 max-w-3xl mx-auto text-brand-navy/80">
            Our mission is to redefine electronics distribution through speed, transparency, 
            and uncompromising quality—bridging suppliers and customers with solutions that 
            reduce risk, accelerate builds, and support innovation globally.
          </p>
        </div>
      </section>

      {/* STATS */}
      <StatsRow />


      {/* FOOTPRINT */}
      <section className="section bg-brand-slate/5">
        <div className="container-page text-center">
          <div className="eyebrow">Our Locations</div>
          <h2 className="h2 mt-1">Where we operate</h2>
          <p className="mt-4 max-w-2xl mx-auto text-brand-navy/80">
            Strategically positioned to serve clients across the globe.
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 max-w-3xl mx-auto">
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-brand-navy">Singapore (HQ)</h3>
              <p className="mt-2 text-sm text-brand-navy/70">
                Our head office in Singapore anchors our operations in APAC, providing fast
                access to key manufacturing hubs and suppliers.
              </p>
            </div>
            <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-brand-navy">Melbourne, Australia</h3>
              <p className="mt-2 text-sm text-brand-navy/70">
                Supporting customers across Oceania, our Melbourne presence ensures reliable
                delivery, local support, and program alignment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE DO / VALUES */}
      <ValuesCompact />

      {/* COMPLIANCE & SUSTAINABILITY */}
      <ComplianceBadges />

    </>
  );
}
