"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/mission", label: "Mission" },
  { href: "/line-card", label: "Line Card" },
  { href: "/contact", label: "Contact" },
];

export default function MobileDock() {
  const path = usePathname();

  return (
    // Mobile only
    <nav className="md:hidden fixed inset-x-0 bottom-0 z-50 border-t border-black/10 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <ul className="mx-auto flex h-14 max-w-3xl items-stretch justify-between px-3 pb-[env(safe-area-inset-bottom)]">
        {LINKS.map((l) => {
          const active = l.href === "/" ? path === "/" : path.startsWith(l.href);
          return (
            <li key={l.href} className="flex-1">
              <Link
                href={l.href}
                className={[
                  "mx-1 flex h-full items-center justify-center rounded-md text-[12.5px] font-medium whitespace-nowrap",
                  active ? "bg-brand-gold/15 text-brand-navy" : "text-brand-navy/70 hover:text-brand-navy",
                ].join(" ")}
              >
                {l.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}