"use client";

import React from "react";

/** You can pass a string (used as alt text) or { src, alt } when you have the real image. */
type LogoItem = string | { src?: string; alt: string };

type Props = {
  items: LogoItem[][];
  speeds?: number[]; // seconds per loop for each row (defaults below)
  title?: string;    // eyebrow text (default: "Trusted by manufacturers")
};

const getAlt = (item: LogoItem) => (typeof item === "string" ? item : item.alt);
const getSrc = (item: LogoItem) => (typeof item === "string" ? undefined : item.src);

const LogoCard: React.FC<{ item: LogoItem }> = ({ item }) => {
  const alt = getAlt(item);
  const src = getSrc(item);

  return (
    <div
      className="group relative flex h-28 min-w-[18rem] items-center justify-center rounded-2xl
                 border border-black/10 bg-white/85 px-8 shadow-[0_1px_0_rgba(16,24,40,.05)]
                 backdrop-blur-sm transition will-change-transform"
      aria-label={alt}
    >
      <span className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-black/5" />
      {src ? (
        <img
          src={src}
          alt={alt}
          className="h-10 sm:h-12 object-contain filter grayscale contrast-110 saturate-[.6] opacity-85
                     transition duration-300 ease-out
                     group-hover:grayscale-0 group-hover:saturate-100 group-hover:opacity-100
                     group-hover:scale-[1.02]"
        />
      ) : (
        <div
          className="h-10 w-40 rounded bg-black/5 opacity-70 transition
                     group-hover:opacity-100 group-hover:scale-[1.02]"
          aria-hidden
        />
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
                    ${reverse ? "animate-marquee-reverse" : "animate-marquee"}
                    group-hover:[animation-play-state:paused]`}
        style={{ animationDuration: `${duration}s` }}
      >
        {doubled.map((item, i) => (
          <LogoCard key={(typeof item === "string" ? item : item.alt) + i} item={item} />
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

      {/* Edge fades for elegance */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white" />
    </section>
  );
}