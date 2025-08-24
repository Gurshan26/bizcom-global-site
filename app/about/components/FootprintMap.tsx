"use client";

/**
 * Simple “image background + pins” map.
 * - Uses an equirectangular world map image (2:1 aspect works best).
 * - Pins are positioned by converting lon/lat to percentage coordinates.
 * - No external map libraries.
 *
 * 👉 Replace MAP_URL with your own image (place it under /public if local),
 *    ideally an equirectangular world map so the math lines up.
 */

const MAP_URL = "/images/world-mercator-light.jpg"; // e.g. /public/images/world-mercator-light.jpg

type Marker = {
  name: string;
  lon: number; // longitude  (-180..180)
  lat: number; // latitude   (-90..90)
  // Optional nudge for label placement
  dx?: number; // px
  dy?: number; // px
};

// Singapore & Melbourne
const markers: Marker[] = [
  { name: "Singapore (HQ)", lon: 103.8198, lat: 1.3521, dx: 0, dy: -18 },
  { name: "Melbourne (AU)", lon: 144.9631, lat: -37.8136, dx: 0, dy: -18 },
];

/**
 * Convert lon/lat to percentage coordinates for an equirectangular map.
 * - x% = (lon + 180) / 360
 * - y% = (90  -  lat) / 180
 */
function lonLatToPercent(lon: number, lat: number) {
  const x = ((lon + 180) / 360) * 100;
  const y = ((90 - lat) / 180) * 100;
  return { x, y };
}

export default function FootprintMap() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="rounded-3xl border border-black/5 bg-white shadow-sm">
          {/* Map canvas */}
          <div className="relative h-[520px] w-full overflow-hidden rounded-3xl">
            {/* Background world image */}
            <div
              className="absolute inset-0 bg-center bg-cover"
              style={{ backgroundImage: `url('${MAP_URL}')` }}
              aria-hidden
            />
            {/* Subtle tech grid overlay (optional, from your globals) */}
            <div
              className="absolute inset-0 bg-tech-grid bg-tech-grid-fade"
              aria-hidden
            />

            {/* Pins */}
            <div className="absolute inset-0">
              {markers.map((m) => {
                const { x, y } = lonLatToPercent(m.lon, m.lat);
                return (
                  <div
                    key={m.name}
                    className="absolute"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  >
                    {/* Gold pin + halo */}
                    <span className="relative block">
                      <span className="absolute -inset-2 rounded-full bg-[#C9A227]/15" />
                      <span className="relative block h-2.5 w-2.5 rounded-full bg-[#C9A227]" />
                    </span>

                    {/* Label bubble */}
                    <span
                      className="mt-2 inline-block rounded-full border border-black/10 bg-white px-2.5 py-1 text-[12px] font-medium text-brand-navy shadow-sm"
                      style={{
                        position: "relative",
                        left: m.dx ?? 0,
                        top: m.dy ?? 0,
                        whiteSpace: "nowrap",
                      }}
                    >
                      {m.name}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Soft vignette edges */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white" />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white" />
          </div>
        </div>
      </div>
    </section>
  );
}