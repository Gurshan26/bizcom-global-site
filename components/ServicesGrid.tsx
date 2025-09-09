"use client";

import Link from "next/link";

const SERVICES = [
  {
    name: "Semiconductors",
    blurb: "MCUs, analog, power, mixed-signal and more.",
  },
  {
    name: "Passives",
    blurb: "MLCCs, capacitors, resistors, magnetics, filters.",
  },
  {
    name: "Interconnect & Electromechanical",
    blurb: "Connectors, relays, switches, sensors, cable assemblies.",
  },
  {
    name: "Power & RF",
    blurb: "Power modules, RF front-end, timing & oscillators.",
  },
  {
    name: "Thermal Solutions",
    blurb: "TIMs, heat spreaders, thermal interface & management.",
  },
  {
    name: "Instrumentation & Systems",
    blurb: "Test & measurement, modules, custom builds.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="section">
      <div className="container-page">
        <header className="prose max-w-none">
          <h2 className="h2">What we supply</h2>
          <p className="text-brand-navy/80">
            A focused portfolio across components and systems—backed by engineering support.
          </p>
        </header>

        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <article
              key={s.name}
              className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm transition hover:-translate-y-0.5"
            >
              <h3 className="text-lg font-semibold text-brand-navy">{s.name}</h3>
              <p className="mt-2 text-sm text-brand-navy/75">{s.blurb}</p>
              <Link href="/line-card" className="link mt-4 inline-block">
                View brands →
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}