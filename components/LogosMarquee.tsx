"use client";

import React, { useState } from "react";

/** You can pass:
 *  1) a string path or URL to an image (e.g. "/logos/renesas.jpg" or "https://…"),
 *  2) a plain string used as alt text (legacy text pill),
 *  3) or an object { src, alt }.
 */
type LogoItem = string | { src?: string; alt?: string };

type Props = {
  items: LogoItem[][];
  speeds?: number[]; // seconds per loop for each row (defaults below)
  title?: string; // eyebrow text (default: "Trusted by manufacturers")
};

const pathLike = (s: string) =>
  /^https?:\/\//i.test(s) || s.startsWith("/") || s.startsWith("./") || s.startsWith("../");

const getSrc = (item: LogoItem): string | undefined => {
  if (typeof item === "string") {
    return pathLike(item) ? item : undefined;
  }
  return item.src;
};

const altFromSrc = (src: string) => {
  try {
    const last = src.split("/").pop() || src;
    const base = last.replace(/\.[a-z0-9]+$/i, "");
    return base.replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim();
  } catch {
    return "logo";
  }
};

const getAlt = (item: LogoItem): string => {
  if (typeof item === "string") {
    return pathLike(item) ? altFromSrc(item) : item;
  }
  const src = item.src;
  const alt = item.alt;
  if (alt && alt.trim()) return alt.trim();
  if (src) return altFromSrc(src);
  return "logo";
};

/* ---------------- Mobile pill (non-animated) ---------------- */
function MobilePill({ item }: { item: LogoItem }) {
  const rawSrc = getSrc(item);
  const src = rawSrc ? encodeURI(rawSrc) : undefined;
  const alt = getAlt(item);
  const [ok, setOk] = useState(true);
  const show = !!src && ok;

  return (
    <div
      className="flex h-16 min-w-[9.5rem] items-center justify-center rounded-xl border border-black/10 bg-white/90 px-4 shadow-sm"
      title={alt}
      aria-label={alt}
    >
      {show ? (
        <img
          src={src}
          alt={alt}
          className="h-8 w-auto object-contain"
          loading="lazy"
          decoding="async"
          onError={() => setOk(false)}
        />
      ) : (
        <span className="text-[11px] text-brand-navy/70 truncate max-w-[8.5rem]">{alt}</span>
      )}
    </div>
  );
}

/* ---------------- Desktop card (animated rows) ---------------- */
function LogoCard({ item }: { item: LogoItem }) {
  const rawSrc = getSrc(item);
  const src = rawSrc ? encodeURI(rawSrc) : undefined;
  const alt = getAlt(item);
  const [ok, setOk] = useState(true);
  const show = !!src && ok;

  return (
    <div
      className="group relative flex h-28 min-w-[18rem] items-center justify-center rounded-2xl
                 border border-black/10 bg-white/85 px-8 shadow-[0_1px_0_rgba(16,24,40,.05)]
                 backdrop-blur-sm transition will-change-transform"
      aria-label={alt}
      title={alt}
    >
      <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5" />
      {show ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          className="h-10 sm:h-12 object-contain transition duration-300 ease-out group-hover:scale-[1.02]"
          onError={() => setOk(false)}
        />
      ) : (
        <div className="grid h-10 w-40 place-items-center rounded bg-black/5 text-[11px] text-brand-navy/60 opacity-80">
          <span className="truncate max-w-[9rem]">{alt}</span>
        </div>
      )}
      <span className="sr-only">{alt}</span>
    </div>
  );
}

function Row({ items, reverse, duration }: { items: LogoItem[]; reverse?: boolean; duration: number }) {
  const doubled = [...items, ...items];
  return (
    <div className="group relative overflow-hidden py-4 mask-fade">
      <div
        className={`flex w-max gap-6 whitespace-nowrap will-change-transform ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
        style={{ animationDuration: `${duration}s` }}
      >
        {doubled.map((item, i) => (
          <LogoCard key={`${getAlt(item)}-${i}`} item={item} />
        ))}
      </div>
    </div>
  );
}

export default function LogosMarquee({
  items,
  speeds = [28, 32, 36],
  title = "Trusted by manufacturers",
}: Props) {
  const rowCount = Math.min(items.length, speeds.length);
  const flat = items.flat().slice(0, 16); // cap for mobile

  return (
    <section className="relative full-bleed bg-white bg-tech-grid bg-tech-grid-fade py-6 sm:py-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-200px,rgba(10,25,47,.06),transparent_70%)]" />

      <div className="container-page mb-3 sm:mb-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="eyebrow text-brand-slate">{title}</span>
          <div className="hidden sm:flex items-center gap-1 opacity-80" aria-hidden>
            <span className="h-1 w-1 rounded-full bg-brand-gold/80" />
            <span className="h-1 w-1 rounded-full bg-brand-gold/70" />
            <span className="h-1 w-1 rounded-full bg-brand-gold/60" />
          </div>
        </div>
        <div className="hidden sm:flex items-center gap-2 pr-2" aria-hidden>
          <span className="progress-dot" style={{ ["--d" as any]: `${speeds[0]}s` }} />
          <span className="progress-dot" style={{ ["--d" as any]: `${speeds[0]}s` }} />
          <span className="progress-dot" style={{ ["--d" as any]: `${speeds[0]}s` }} />
        </div>
      </div>

      {/* MOBILE: compact, scrollable row */}
      <div className="md:hidden">
        <div className="container-page">
          <div className="flex gap-3 overflow-x-auto pb-1">
            {flat.map((item, i) => (
              <MobilePill key={`${getAlt(item)}-${i}`} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* DESKTOP/TABLET: animated rows */}
      <div className="hidden md:block mx-auto max-w-none px-0">
        {Array.from({ length: rowCount }).map((_, i) => (
          <Row key={i} items={items[i]} reverse={i % 2 === 1} duration={speeds[i]} />
        ))}
      </div>

      <div className="container-page mt-4 text-center">
        <a href="/line-card" className="inline-block text-sm font-medium text-brand-navy hover:underline">
          View our full brand list →
        </a>
      </div>

      {/* Edge fades only when rows animate */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white hidden md:block" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white hidden md:block" />
    </section>
  );
}