import { categories } from "@/data/linecard";

export const metadata = { title: "Line Card" };

export default function LineCardPage() {
  return (
    <div className="space-y-8">
      <header className="prose max-w-none">
        <h1>Line Card</h1>
        <p>
          Representative list of manufacturers. Availability may vary by region and program.
          Please contact sales for the latest authorizations and options.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-6">
        {categories.map((cat) => (
          <section key={cat.name} className="card">
            <h2 className="text-lg font-semibold">{cat.name}</h2>
            <div className="mt-3 flex flex-wrap gap-2">
              {cat.brands.map(b => (
                <span key={b.name} className="px-3 py-1 rounded-full border text-sm">
                  {b.name}
                </span>
              ))}
            </div>
          </section>
        ))}
      </div>
      <p className="text-sm text-slate-500">Format inspired by common industry line cards.</p>
    </div>
  );
}
