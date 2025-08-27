// app/line-card/page.tsx
import LineCardHero from "./components/LineCardHero";
import BrandMosaic from "./components/BrandMosaic";
import { fetchLinecard, CATEGORY_ORDER, type Brand } from "../../lib/linecard";

export const metadata = { title: "Line Card — BizCom Global" };
export const revalidate = 0;
export const dynamic = "force-dynamic";

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

export default async function LineCardPage() {
  let categories: BrandMosaicCategory[] = [];
  let errorMsg: string | null = null;

  try {
    const rows = await fetchLinecard(); // throws on any issue
    categories = groupByCategory(rows);
  } catch (err: any) {
    errorMsg = String(err?.message || err);
    // Also echo full error to server console for debugging
    console.error("[/line-card] Failed to load Google Sheets:", err);
  }

  return (
    <>
      <LineCardHero />

      <section className="section">
        <div className="container-page">
          {errorMsg ? (
            <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-red-800">
              <div className="font-semibold">Couldn’t load the line card from Google Sheets.</div>
              <div className="mt-1 text-sm opacity-90">
                {errorMsg}
              </div>
              <div className="mt-3 text-sm text-red-700">
                Check your <code>.env.local</code> values (API key, spreadsheet ID, sheet tab name),
                ensure the “Google Sheets API” is enabled, and that the tab name exactly matches.
                After changing <code>.env.local</code>, restart <code>next dev</code>.
              </div>
            </div>
          ) : (
            <BrandMosaic categories={categories as any} />
          )}
        </div>
      </section>

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