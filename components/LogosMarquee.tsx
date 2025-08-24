"use client";

import React from "react";

type Props = {
  rows?: 1 | 2 | 3;
  items: string[][]; // array per row
  speedSeconds?: number; // loop time
};

const Row: React.FC<{
  items: string[];
  reverse?: boolean;
  speedSeconds: number;
}> = ({ items, reverse, speedSeconds }) => {
  return (
    <div className="mask-fade relative overflow-hidden py-3">
      <div
        className={`flex w-max gap-6 whitespace-nowrap will-change-transform ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
        style={{ animationDuration: `${speedSeconds}s` }}
      >
        {[...items, ...items].map((label, i) => (
          <div
            key={label + i}
            className="min-w-[12rem] rounded-2xl border border-black/5 bg-white/80 px-6 py-4 text-center text-brand-navy shadow-sm backdrop-blur-sm"
          >
            <span className="font-heading text-lg">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default function LogosMarquee({
  rows = 2,
  items,
  speedSeconds = 30,
}: Props) {
  const r = Math.min(rows, items.length) as 1 | 2 | 3;
  return (
    <section aria-label="Partner logos" className="section">
      <div className="container-page">
        <div className="rounded-3xl bg-brand-soft/30 p-4 sm:p-6">
          {Array.from({ length: r }).map((_, i) => (
            <Row
              key={i}
              items={items[i]}
              reverse={i % 2 === 1}
              speedSeconds={speedSeconds}
            />
          ))}
        </div>
      </div>
    </section>
  );
}