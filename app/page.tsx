// app/page.tsx
"use client";

import Link from "next/link";
import ParallaxHero from "@/components/ParallaxHero";
import LogosMarquee from "@/components/LogosMarquee";
import FeatureRow from "@/components/FeatureRow";
import MagneticButton from "@/components/MagneticButton";
import ValueTriplet from "@/components/ValueTriplet";
import { motion } from "framer-motion";

// existing sections in your repo
import ServicesGrid from "@/components/ServicesGrid";
import WhyChoose from "@/components/WhyChoose";
import IndustriesStrip from "@/components/IndustriesStrip";
import ContactStrip from "@/components/ContactStrip";

// app/page.tsx (top where your rows are)
const brandsRow1 = [
  { src: "/logos/2.webp", alt: "Partner" },
  { src: "/logos/3_infineon (1).webp", alt: "Infineon" },
  { src: "/logos/4.webp", alt: "Partner" },
  { src: "/logos/5.webp", alt: "Partner" },
  { src: "/logos/6.webp", alt: "Partner" },
  { src: "/logos/7.webp", alt: "Partner" },
  { src: "/logos/8.jpg", alt: "Partner" },
  { src: "/logos/9.webp", alt: "Partner" },
];

const brandsRow2 = [
  { src: "/logos/12.webp", alt: "Partner" },
  { src: "/logos/13_panasonic.webp", alt: "Panasonic" },
  { src: "/logos/15_BPS (2).webp", alt: "BPS" },
  { src: "/logos/16_seoul.webp", alt: "Seoul Semiconductor" },
  { src: "/logos/17.jpg", alt: "Partner" },
  { src: "/logos/18_TDK.jpg", alt: "TDK" },
  { src: "/logos/19.webp", alt: "Partner" },
  { src: "/logos/21.webp", alt: "Partner" },
];

const brandsRow3 = [
  { src: "/logos/22.webp", alt: "Partner" },
  { src: "/logos/23.webp", alt: "Partner" },
  { src: "/logos/24.webp", alt: "Partner" },
  { src: "/logos/gigadives.webp", alt: "GigaDevice" }, // file name shows "gigadives.webp"
  { src: "/logos/mei.webp", alt: "MEI" },
  { src: "/logos/power.webp", alt: "Power" },
  { src: "/logos/Renesas.jpg", alt: "Renesas" },
  { src: "/logos/telit.webp", alt: "Telit" },
];

// keep usage as-is:
<LogosMarquee items={[brandsRow1, brandsRow2, brandsRow3]} speeds={[28, 32, 36]} />

export default function Page() {
  return (
    <>
      {/* HERO */}
      <ParallaxHero
        eyebrow="BizCom Global"
        headline="Trusted distribution. Global reach."
        subcopy="From prototypes to programs, we source critical electronics with full traceability and on-time logistics across APAC, EMEA, and the Americas."
        primaryCtaHref="/line-card"
        primaryCtaLabel="View Line Card"
        secondaryCtaHref="/contact"
        secondaryCtaLabel="Contact Sales →"
      />

      {/* MOVING BRAND STRIP */}
      <LogosMarquee items={[brandsRow1, brandsRow2, brandsRow3]} speeds={[28, 32, 36]} />

      {/* DECORATIVE MESH + QUICK VALUE STRIP */}
      <section aria-hidden className="relative isolate full-bleed overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(55rem_40rem_at_-10%_20%,rgba(201,162,39,0.12),transparent),radial-gradient(60rem_45rem_at_110%_0%,rgba(15,40,73,0.06),transparent)]" />
        <div className="container-page relative py-10">
          <ValueTriplet />
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section id="about" className="section">
        <div className="container-page grid gap-8 lg:grid-cols-2">
          <div>
            <div className="eyebrow">About us</div>
            <h2 className="h2">Component distribution built for manufacturing teams</h2>
            <p className="mt-3 text-brand-navy/80">
              BizCom Global Pte Ltd supports OEMs and CEMs with sourcing, QA, and logistics that
              keep builds on schedule. We combine engineering-led part selection with a disciplined
              anti-counterfeit workflow and global supplier coverage.
            </p>
            <ul className="mt-4 space-y-2 text-brand-navy/80">
              <li>• Engineering-first sourcing, not just part numbers</li>
              <li>• Documented traceability from quote to delivery</li>
              <li>• Program logistics: kitting, VMI, scheduled deliveries</li>
              <li>• Coverage across APAC, EMEA, and the Americas</li>
            </ul>

            <div className="mt-6 flex gap-3">
              <Link href="/about" className="link">Learn more about BizCom →</Link>
              <Link href="/mission" className="link">Quality & standards →</Link>
            </div>
          </div>

          {/* quick stats card */}
          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="grid grid-cols-2 gap-6">
              <Stat k="12k+" v="Parts sourced / year" />
              <Stat k="30+"  v="Core brands covered" />
              <Stat k="3"    v="Regions supported (APAC / EMEA / AMER)" />
              <Stat k="<24h" v="Typical quote response" />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT WE SUPPLY (your existing grid) */}
      <section id="products" className="section">
        <div className="container-page">
          <div className="eyebrow">Our products</div>
          <ServicesGrid />
        </div>
      </section>

      {/* VISUAL MEDIA TRIO */}
      <section className="section">
        <div className="container-page">
          <div className="grid gap-4 md:grid-cols-3">
            <VisualCard src="/images/program-sourcing.jpg" caption="Kitting & scheduled deliveries" />
            <VisualCard src="/images/traceability.jpg" caption="Inspection & documentation" />
            <VisualPattern caption="Global shipping lanes" />
          </div>
        </div>
      </section>

      {/* PROGRAMS / SERVICES STRIP */}
      <section id="programs" className="section">
        <div className="container-page">
          <h2 className="h2">Sourcing programs & logistics</h2>
          <p className="mt-3 max-w-prose text-brand-navy/80">
            Beyond spot buys, we design programs around your build plan and cash-flow constraints.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Program name="Planned buys" body="Time-phased POs with secure allocation and pricing."/>
            <Program name="Kitting & VMI" body="Line-item kitting, consignment, or vendor-managed inventory."/>
            <Program name="L-T-B planning" body="Last-time-buy strategy and lifecycle risk mitigation."/>
            <Program name="Alternates & X-ref" body="Engineering cross-refs and second-source options."/>
          </div>

          <div className="mt-6">
            <MagneticButton href="/contact" className="btn-shine">Talk to programs →</MagneticButton>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US (existing) */}
      <section id="why" className="section relative isolate">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(80rem_40rem_at_50%_-10%,rgba(15,40,73,0.08),transparent)]"
        />
        <div className="container-page relative">
          <div className="eyebrow">Why choose us</div>
          <WhyChoose />
        </div>
      </section>

      {/* QUALITY / ANTI-COUNTERFEIT PREVIEW */}
      <section id="quality" className="section relative isolate">
        {/* dotted grid texture */}
        <svg className="pointer-events-none absolute inset-0 opacity-[0.08]" viewBox="0 0 400 200" aria-hidden>
          <defs>
            <pattern id="dots" width="12" height="12" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="#0F2849" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
        <div className="container-page grid items-start gap-8 lg:grid-cols-2 relative">
          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="eyebrow">Quality & compliance</div>
            <h3 className="h2">Traceability & anti-counterfeit controls</h3>
            <p className="mt-3 text-brand-navy/80">
              Every part is vetted against a documented QA workflow. Inspection, photos, and
              paperwork are available from quote to delivery.
            </p>
            <ul className="mt-4 space-y-2 text-brand-navy/80">
              <li>• Vendor vetting & supplier scorecards</li>
              <li>• COFC / test reports on request</li>
              <li>• ESD handling & moisture control</li>
              <li>• Chain-of-custody documentation</li>
            </ul>
            <Link href="/mission" className="link mt-5 inline-block">See our standards →</Link>
          </div>

          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="eyebrow">Footprint</div>
            <h3 className="h2">Global coverage, local response</h3>
            <ul className="mt-3 space-y-2 text-brand-navy/80">
              <li>• Head office: Singapore</li>
              <li>• APAC sourcing & consolidation hubs</li>
              <li>• EMEA & AMER partner warehouses</li>
              <li>• Courier, air-freight, and scheduled lanes</li>
            </ul>
            <Link href="/contact" className="link mt-5 inline-block">Arrange shipping & lanes →</Link>
          </div>
        </div>
      </section>

      {/* FEATURE ROWS (keep your existing imagery) */}
      <FeatureRow
        title="Program sourcing beyond spot buys"
        body="We design sourcing programs around your build plan—kitting, scheduled deliveries, and last-time-buy planning included."
        cta={{ href: "/contact", label: "Discuss a program" }}
        imageSrc="/images/program-sourcing.jpg"
        imageAlt="Program kitting and scheduled deliveries"
      />
      <FeatureRow
        reverse
        title="Traceability throughout the order"
        body="Inspection photos, labeling, and documentation are available on request for complete chain-of-custody."
        cta={{ href: "/mission", label: "See our QA checklist" }}
        imageSrc="/images/traceability.jpg"
        imageAlt="Technician inspecting components"
      />

      {/* GRADIENT CTA BAND */}
      <section className="relative full-bleed isolate overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-[#0F2849] to-brand-slate/70" />
        <div className="container-page relative py-14">
          <div className="grid items-center gap-4 md:grid-cols-[1fr_auto]">
            <div>
              <div className="eyebrow text-white/80">Next step</div>
              <h3 className="h2 text-white">Share your BOM or program timelines</h3>
              <p className="mt-1 max-w-prose text-white/85">
                Our team will respond within one business day.
              </p>
            </div>
            <MagneticButton href="/contact" className="btn-shine">Contact Sales →</MagneticButton>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <IndustriesStrip />

      {/* MINI FAQ */}
      <section id="faq" className="section">
        <div className="container-page">
          <div className="eyebrow">FAQ</div>
          <div className="grid gap-4 md:grid-cols-3">
            <Faq q="Do you handle alternates / cross-refs?" a="Yes—our engineering team proposes second-sources and risk-reduced alternates aligned to your build spec."/>
            <Faq q="Can you support scheduled deliveries?" a="Absolutely. We’ll phase deliveries to sites and build dates, with kitting and labeling as needed."/>
            <Faq q="What documentation is provided?" a="COFC, test reports, photos, and packing evidence are available on request per order or program."/>
          </div>
        </div>
      </section>

      {/* CONTACT STRIP (address + CTA) */}
      <ContactStrip />
    </>
  );
}

/* ---------- tiny helpers (same file to keep things simple) ---------- */

function Stat({ k, v }: { k: string; v: string }) {
  return (
    <div>
      <div className="text-3xl font-semibold text-brand-navy">{k}</div>
      <div className="mt-1 text-sm text-brand-navy/70">{v}</div>
    </div>
  );
}

function Program({ name, body }: { name: string; body: string }) {
  return (
    <article className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
      <h3 className="font-semibold text-brand-navy">{name}</h3>
      <p className="mt-2 text-sm text-brand-navy/75">{body}</p>
    </article>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
      <h4 className="font-medium text-brand-navy">{q}</h4>
      <p className="mt-2 text-sm text-brand-navy/75">{a}</p>
    </div>
  );
}

function VisualCard({ src, caption }: { src: string; caption: string }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 18, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
      className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${src})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
      <figcaption className="absolute bottom-3 left-4 right-4 text-white drop-shadow">
        <span className="text-sm/5 font-medium">{caption}</span>
      </figcaption>
    </motion.figure>
  );
}

function VisualPattern({ caption }: { caption: string }) {
  return (
    <motion.figure
      initial={{ opacity: 0, y: 18, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
      className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-black/10 bg-white shadow-sm"
    >
      {/* techy lines pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(15,40,73,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(15,40,73,0.08)_1px,transparent_1px)] bg-[size:22px_22px]" />
      <div className="absolute inset-0 bg-[radial-gradient(40rem_30rem_at_-10%_120%,rgba(201,162,39,0.18),transparent)]" />
      <figcaption className="absolute bottom-3 left-4 right-4 text-brand-navy">
        <span className="text-sm/5 font-medium">{caption}</span>
      </figcaption>
    </motion.figure>
  );
}