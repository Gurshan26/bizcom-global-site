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

/** If item is a string path/URL, return it as src; otherwise return undefined. */
const pathLike = (s: string) =>
  /^https?:\/\//i.test(s) || s.startsWith("/") || s.startsWith("./") || s.startsWith("../");

const getSrc = (item: LogoItem): string | undefined => {
  if (typeof item === "string") {
    return pathLike(item) ? item : undefined;
  }
  return item.src;
};

/** Derive a reasonable alt from src if none was provided. */
const altFromSrc = (src: string) => {
  try {
    const last = src.split("/").pop() || src;
    const base = last.replace(/\.[a-z0-9]+$/i, "");
    return base
      .replace(/[-_]+/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  } catch {
    return "logo";
  }
};

const getAlt = (item: LogoItem): string => {
  if (typeof item === "string") {
    // if it's an image path, derive alt from filename; otherwise use the string itself as alt
    return pathLike(item) ? altFromSrc(item) : item;
  }
  const src = item.src;
  const alt = item.alt;
  if (alt && alt.trim()) return alt.trim();
  if (src) return altFromSrc(src);
  return "logo";
};

const LogoCard: React.FC<{ item: LogoItem }> = ({ item }) => {
  const rawSrc = getSrc(item);
  const safeSrc = rawSrc ? encodeURI(rawSrc) : undefined; // handle spaces/parentheses in filenames
  const alt = getAlt(item);
  const [ok, setOk] = useState(true);

  const showImage = !!safeSrc && ok;

  return (
    <div
      className="group relative flex h-28 min-w-[18rem] items-center justify-center rounded-2xl
                 border border-black/10 bg-white/85 px-8 shadow-[0_1px_0_rgba(16,24,40,.05)]
                 backdrop-blur-sm transition will-change-transform"
      aria-label={alt}
      title={alt}
    >
      <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5" />
      {showImage ? (
        <img
          src={safeSrc}
          alt={alt}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          className="h-10 sm:h-12 object-contain transition duration-300 ease-out hover:scale-[1.02]"
          onError={() => setOk(false)}
        />
      ) : (
        <div
          className="grid place-items-center h-10 w-40 rounded bg-black/5 text-[11px] text-brand-navy/60 opacity-80 transition
                     group-hover:opacity-100 group-hover:scale-[1.02]"
          aria-hidden={!safeSrc}
        >
          {/* fallback shows alt text when image missing */}
          <span className="truncate max-w-[9rem]">{alt}</span>
        </div>
      )}
      <span className="sr-only">{alt}</span>
    </div>
  );
};

const Row: React.FC<{
  items: LogoItem[];
  reverse?: boolean;
  duration: number; // seconds
}> = ({ items, reverse, duration }) => {
  const doubled = [...items, ...items]; // seamless loop

  return (
    <div className="group relative overflow-hidden py-4 mask-fade">
      <div
        className={`flex w-max gap-6 whitespace-nowrap will-change-transform
                    ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {doubled.map((item, i) => (
          <LogoCard key={(typeof item === "string" ? getAlt(item) : getAlt(item)) + i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default function LogosMarquee({
  items,
  speeds = [28, 32, 36],
  title = "Trusted by manufacturers",
}: Props) {
  const rowCount = Math.min(items.length, speeds.length);

  return (
    <section className="relative full-bleed bg-white bg-tech-grid bg-tech-grid-fade py-10 sm:py-12">
      {/* Subtle vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-200px,rgba(10,25,47,.06),transparent_70%)]" />

      {/* Eyebrow + animated progress dots */}
      <div className="container-page mb-4 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="eyebrow text-brand-slate">{title}</span>
          <div className="hidden sm:flex items-center gap-1 opacity-80" aria-hidden>
            <span className="h-1 w-1 rounded-full bg-brand-gold/80" />
            <span className="h-1 w-1 rounded-full bg-brand-gold/70" />
            <span className="h-1 w-1 rounded-full bg-brand-gold/60" />
          </div>
        </div>

        {/* Dots “tick” in time with the first row’s loop */}
        <div className="hidden sm:flex items-center gap-2 pr-2" aria-hidden>
          <span className="progress-dot" style={{ ["--d" as any]: `${speeds[0]}s` }} />
          <span className="progress-dot" style={{ ["--d" as any]: `${speeds[0]}s` }} />
          <span className="progress-dot" style={{ ["--d" as any]: `${speeds[0]}s` }} />
        </div>
      </div>

      {/* Rails */}
      <div className="mx-auto max-w-none px-0">
        {Array.from({ length: rowCount }).map((_, i) => (
          <Row key={i} items={items[i]} reverse={i % 2 === 1} duration={speeds[i]} />
        ))}
      </div>

      <div className="container-page mt-4 text-center">
        <a href="/line-card" className="inline-block text-sm font-medium text-brand-navy hover:underline">
          View our full brand list →
        </a>
      </div>

      {/* Edge fades for elegance */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white" />
    </section>
  );
}