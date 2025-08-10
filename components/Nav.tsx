'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/mission", label: "Mission" },
  { href: "/line-card", label: "Line Card" },
  { href: "/contact", label: "Contact" }
];

export function Nav() {
  const pathname = usePathname();
  return (
    <header className="border-b border-slate-200 backdrop-blur sticky top-0 bg-white/70">
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="font-semibold">BizCom Global</Link>
        <nav className="flex gap-5 text-sm">
          {items.map(i => (
            <Link key={i.href} href={i.href}
              className={pathname === i.href ? "font-semibold" : "opacity-80 hover:opacity-100"}>
              {i.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
