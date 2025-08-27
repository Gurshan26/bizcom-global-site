// app/line-card/page.tsx
import LineCardHero from "./components/LineCardHero";
import BrandMosaic from "./components/BrandMosaic";

// ⚠️ Use a *relative* import so this works without the @ alias.
import { categories as fallbackCategories } from "../../data/linecard";

// Google Sheets fetcher (relative path)
import { fetchLinecard, CATEGORY_ORDER, type Brand } from "../../lib/linecard";

export const metadata = { title: "Line Card — BizCom Global" };

// Make sure this page is always dynamic (no build-time caching).
export const revalidate = 0;
export const dynamic = "force-dynamic";

// Include optional logo & website fields so the UI can hide them if missing
type BrandMosaicCategory = {
  name: string;
  brands: {
    name: string;
    category: string;
    description?: string;
    logo?: string;
    website?: string;
  }[];
};

function groupByCategory(items: Brand[]): BrandMosaicCategory[] {
  const buckets = new Map<string, BrandMosaicCategory>();
  for (const row of items) {
    const cat = (row.category || "Uncategorized").trim();
    if (!buckets.has(cat)) buckets.set(cat, { name: cat, brands: [] });
    buckets.get(cat)!.brands.push({
      name: row.name,
      category: cat,
      description: row.description,
      logo: row.logo,
      // website is optional
      website: (row as any).website ?? undefined,
    });
  }
  const order = new Map(CATEGORY_ORDER.map((c, i) => [c, i]));
  return Array.from(buckets.values()).sort((a, b) => {
    const ai = order.has(a.name) ? order.get(a.name)! : 999;
    const bi = order.has(b.name) ? order.get(b.name)! : 999;
    if (ai !== bi) return ai - bi;
    return a.name.localeCompare(b.name);
  });
}

async function loadCategoriesFromSheet(): Promise<BrandMosaicCategory[]> {
  try {
    const rows = await fetchLinecard(); // [{ name, category, description, logo?, website? }]
    const grouped = groupByCategory(rows);
    return grouped.length
      ? grouped
      : (fallbackCategories as unknown as BrandMosaicCategory[]);
  } catch (err) {
    // On any error, silently fall back to the prior static data to keep UX intact
    return fallbackCategories as unknown as BrandMosaicCategory[];
  }
}

export default async function LineCardPage() {
  // Build the categories server-side so filtering/animation UI remains unchanged
  const categories = await loadCategoriesFromSheet();

  return (
    <>
      <LineCardHero />

      {/* Filterable, animated brand grid */}
      <section className="section">
        <div className="container-page">
          <BrandMosaic categories={categories as any} />
        </div>
      </section>

      {/* Closing CTA */}
      <section className="pb-16">
        <div className="container-page">
          <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
            <div className="grid items-center gap-4 sm:grid-cols-[1fr_auto]">
              <div>
                <div className="eyebrow">Sourcing next steps</div>
                <h3 className="h2">Need coverage across these brands?</h3>
                <p className="mt-1 text-brand-navy/80">
                  Share your BOM or program details and our team will recommend the best path.
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