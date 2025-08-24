// app/line-card/page.tsx
import { categories } from "@/data/linecard";
import LineCardHero from "./components/LineCardHero";
import BrandMosaic from "./components/BrandMosaic";

export const metadata = { title: "Line Card — BizCom Global" };

export default function LineCardPage() {
  return (
    <>
      <LineCardHero />

      {/* Filterable, animated brand grid */}
      <section className="section">
        <div className="container-page">
          <BrandMosaic categories={categories} />
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