"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/mission", label: "Mission" },
  { href: "/line-card", label: "Line Card" },
  { href: "/contact", label: "Contact" },
] as const;

export default function Nav() {
  const pathname = usePathname();
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-header">
      <div className="container-page h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="BizCom Global — Home">
            <img
              src="/logo.svg"          
              alt="BizCom Global"
              className="h-7 w-auto"    
              loading="eager"           
              decoding="async"
            />
          </Link>
        <nav className="flex items-center gap-6 text-[15px]">
          {items.map(i => {
            const active = pathname === i.href;
            return (
              <Link key={i.href} href={i.href}
                className={`link ${active ? "font-semibold text-brand-navy" : "text-brand-navy/80 hover:text-brand-navy"}`}>
                {i.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}