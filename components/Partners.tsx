export function Partners() {
  const partners = [
    "Infineon","STMicroelectronics","NXP","Texas Instruments","Analog Devices",
    "Microchip","Murata","Yageo","Vishay","TE Connectivity","Molex","Samsung"
  ];
  return (
    <section className="mt-12">
      <h2 className="text-xl font-semibold mb-4">Selected Partnerships</h2>
      <div className="flex flex-wrap gap-2">
        {partners.map(p => (
          <span key={p} className="px-3 py-1 rounded-full border text-sm">
            {p}
          </span>
        ))}
      </div>
      <p className="text-slate-500 mt-2 text-sm">
        (Update this list to match your official brand authorizations/relationships.)
      </p>
    </section>
  );
}
