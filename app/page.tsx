import ParallaxHero from "@/components/ParallaxHero";
import LogosMarquee from "@/components/LogosMarquee";
import ValueTriplet from "@/components/ValueTriplet";
import FeatureRow from "@/components/FeatureRow";

const brandsRow1 = [
  "Texas Instruments",
  "Analog Devices",
  "Nexperia",
  "Infineon",
  "STMicroelectronics",
  "Murata",
];

const brandsRow2 = [
  "Vishay",
  "Microchip",
  "onsemi",
  "Skyworks",
  "TE Connectivity",
  "Renesas",
];

const brandsRow3 = [
  "Samsung",
  "KEMET",
  "Nichicon",
  "KYOCERA AVX",
  "Littelfuse",
  "Arrow",
];

export default function HomePage() {
  return (
    <>
      <ParallaxHero />

      {/* Full-bleed, looping logos */}
      <LogosMarquee items={[brandsRow1, brandsRow2, brandsRow3]} speeds={[28, 32, 36]} />

      <ValueTriplet />

      <FeatureRow
        title="Program sourcing beyond spot buys"
        body="We design sourcing programs around your build plan—kitting, scheduled deliveries, and last-time-buy planning included."
        cta={{ href: "/contact", label: "Talk to programs" }}
      />

      <FeatureRow
        reverse
        title="Traceability & anti-counterfeit controls"
        body="Every part is vetted against a disciplined QA workflow and documentation is available from quote to delivery."
        cta={{ href: "/mission", label: "See our standards" }}
      />

      {/* CTA band */}
      <section className="section">
        <div className="container-page">
          <div className="rounded-3xl border border-black/5 bg-white p-6 shadow-sm">
            <div className="grid items-center gap-4 sm:grid-cols-[1fr_auto]">
              <div>
                <div className="eyebrow">Next step</div>
                <h3 className="h2">Share your BOM or program timelines</h3>
                <p className="mt-1 text-brand-navy/80">
                  Our team will respond within one business day.
                </p>
              </div>
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-brand-gold px-6 py-3 font-medium text-brand-navy shadow-lg transition-transform hover:-translate-y-0.5"
              >
                Contact Sales →
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}