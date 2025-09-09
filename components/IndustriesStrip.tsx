"use client";

const INDUSTRIES = [
  "Research & Labs",
  "Aerospace / Defense",
  "Industrial Automation",
  "Medical Devices",
  "Energy / Power",
  "Communications",
];

export default function IndustriesStrip() {
  return (
    <section className="section">
      <div className="container-page">
        <h2 className="h2">Industries we serve</h2>
        <div className="mt-4 flex flex-wrap gap-3">
          {INDUSTRIES.map((i) => (
            <span
              key={i}
              className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm shadow-sm"
            >
              {i}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}