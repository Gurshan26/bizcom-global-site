export function FeatureRow() {
  const items = [
    { title: "Sourcing & Pricing", desc: "Global network access for competitive quotes and timely delivery."},
    { title: "Quality & Compliance", desc: "Traceable parts, authorized channels wherever possible, and stringent QA."},
    { title: "Supply Chain Support", desc: "Buffer stocks, alternates, and lifecycle guidance to keep lines moving."}
  ];
  return (
    <section className="grid md:grid-cols-3 gap-6">
      {items.map((it) => (
        <div key={it.title} className="card">
          <h3 className="text-xl font-semibold">{it.title}</h3>
          <p className="mt-2 text-slate-600">{it.desc}</p>
        </div>
      ))}
    </section>
  );
}
