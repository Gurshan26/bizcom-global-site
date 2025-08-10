import { Hero } from "@/components/Hero";
import { FeatureRow } from "@/components/FeatureRow";
import { Partners } from "@/components/Partners";

export const metadata = { title: "Home" };

export default function HomePage() {
  return (
    <div className="space-y-16">
      <Hero />
      <section>
        <h2 className="text-xl font-semibold mb-3">Industries Served</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {["Contract Manufacturers","System Integrators","Automotive","Aerospace",
            "ICT & Data Networks","Industrial"].map((x) => (
            <div key={x} className="card">{x}</div>
          ))}
        </div>
      </section>
      <FeatureRow />
      <Partners />
    </div>
  );
}
