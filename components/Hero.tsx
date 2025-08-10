import Link from "next/link";

export function Hero() {
  return (
    <section className="text-center py-16 md:py-24" aria-labelledby="hero-title">
      <h1 id="hero-title" className="text-4xl md:text-6xl font-extrabold leading-tight">
        Trusted Global Distribution
      </h1>
      <p className="mt-4 text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
        Active & passive components with responsive support, competitive pricing,
        and reliable supply.
      </p>
      <div className="mt-8 flex items-center justify-center gap-4">
        <Link href="/line-card" className="btn btn-primary">View Line Card</Link>
        <Link href="/contact" className="btn">Contact Sales</Link>
      </div>
    </section>
  );
}
