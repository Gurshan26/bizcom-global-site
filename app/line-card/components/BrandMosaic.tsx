"use client";

import { useMemo, useState, useRef } from "react";
import { motion, LayoutGroup } from "framer-motion";
import type { Category, Brand } from "@/data/linecard";

type Props = { categories: Category[] };

export default function BrandMosaic({ categories }: Props) {
  const allBrands: (Brand & { category: string })[] = useMemo(
    () => categories.flatMap((c) => c.brands.map((b) => ({ ...b, category: c.name }))),
    [categories]
  );

  const catNames = useMemo(() => ["All", ...categories.map((c) => c.name)], [categories]);

  const [activeCat, setActiveCat] = useState<string>("All");
  const [q, setQ] = useState("");

  const filtered = allBrands.filter((b) => {
    const inCat = activeCat === "All" || b.category === activeCat;
    const inQuery = q.trim()
      ? [b.name, b.tagline, b.category].join(" ").toLowerCase().includes(q.toLowerCase())
      : true;
    return inCat && inQuery;
  });

  return (
    <div id="brands" className="space-y-8">
      {/* CATEGORY RAIL — full width, bold, premium */}
      <LayoutGroup id="category-rail">
        <div className="flex w-full flex-wrap items-center gap-3">
          {catNames.map((name) => (
            <CategoryTile
              key={name}
              name={name}
              active={activeCat === name}
              onClick={() => setActiveCat(name)}
            />
          ))}
        </div>
      </LayoutGroup>

      {/* Search / status row */}
      <div className="flex items-center justify-between gap-3">
        <div className="text-sm text-brand-navy/60">
          Showing <strong>{filtered.length}</strong> brand{filtered.length === 1 ? "" : "s"}
          {activeCat !== "All" && (
            <>
              {" "}
              in <span className="font-medium text-brand-navy">{activeCat}</span>
            </>
          )}
          {q && (
            <>
              {" "}
              matching “<span className="font-medium text-brand-navy">{q}</span>”
            </>
          )}
        </div>

        <div className="relative w-full max-w-xs">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search brands…"
            className="w-full rounded-full border border-black/10 bg-white px-4 py-2 pl-10 outline-none focus:ring-2 focus:ring-brand-gold/60"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-brand-navy/40"
          >
            🔎
          </span>
        </div>
      </div>

      {/* BRANDS GRID */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" aria-live="polite">
        {filtered.map((b, i) => (
          <BrandTile key={`${b.name}-${i}`} brand={b} index={i} />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-brand-navy/70">No matches. Try a different category or query.</p>
      )}
    </div>
  );
}

/* ---------------- CATEGORY TILE ---------------- */

function CategoryTile({
  name,
  active,
  onClick,
}: {
  name: string;
  active: boolean;
  onClick: () => void;
}) {
  const ref = useRef<HTMLButtonElement>(null);

  function move(e: React.MouseEvent<HTMLButtonElement>) {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left;
    const y = e.clientY - r.top;
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);
  }

  return (
    <button
      ref={ref}
      onMouseMove={move}
      onClick={onClick}
      aria-pressed={active}
      className={[
        "group relative inline-flex items-center overflow-hidden rounded-full border px-5 py-3",
        "text-sm font-medium tracking-tight transition",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/70",
        active
          ? "border-black/10 bg-white text-brand-navy shadow-sm"
          : "border-white/15 bg-brand-navy text-white",
      ].join(" ")}
      style={{
        // subtle gold spotlight near the cursor (muted, only on hover)
        backgroundImage: active
          ? undefined
          : `radial-gradient(90px 90px at var(--mx, 50%) var(--my, 50%), rgba(201,162,39,0.12), transparent 70%)`,
        backgroundBlendMode: "screen",
      }}
    >
      {active && (
        <motion.span
          layoutId="cat-active-bg"
          className="absolute inset-0 -z-10 rounded-full bg-white"
          transition={{ type: "spring", stiffness: 380, damping: 28 }}
          aria-hidden
        />
      )}

      <div className="relative z-10 flex items-center gap-2">
        <span
          aria-hidden
          className={[
            "block h-2.5 w-2.5 rounded-full",
            active ? "bg-brand-navy/70" : "bg-white/70",
          ].join(" ")}
        />
        <span className="whitespace-nowrap">{name}</span>
      </div>
    </button>
  );
}

/* ---------------- BRAND TILE ---------------- */

function BrandTile({ brand, index }: { brand: Brand & { category: string }; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, ease: [0.25, 1, 0.5, 1], delay: (index % 10) * 0.02 }}
      className="group relative overflow-hidden rounded-2xl border border-black/10 bg-white p-4 shadow-sm"
    >
      <span className="absolute left-0 top-4 h-8 w-1 rounded-r bg-brand-gold/80" aria-hidden />
      <div className="flex items-center gap-4">
        {brand.logo ? (
          <img
            src={brand.logo}
            alt={`${brand.name} logo`}
            className="h-10 w-auto max-w-[8rem] object-contain filter grayscale opacity-80 transition group-hover:grayscale-0 group-hover:opacity-100"
          />
        ) : (
          <div className="grid h-12 w-24 place-items-center rounded-md bg-black/[.04] text-[11px] text-brand-navy/60">
            LOGO
          </div>
        )}
        <div>
          <h3 className="font-medium text-brand-navy">{brand.name}</h3>
          <p className="text-xs text-brand-navy/60">{brand.category}</p>
        </div>
      </div>

      {brand.tagline && (
        <p className="mt-3 line-clamp-3 text-sm text-brand-navy/80">{brand.tagline}</p>
      )}

      {brand.website && (
        <a
          href={brand.website}
          target="_blank"
          rel="noreferrer"
          className="link mt-3 inline-block text-sm text-brand-navy"
        >
          Official site →
        </a>
      )}
    </motion.article>
  );
}