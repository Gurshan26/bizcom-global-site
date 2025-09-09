"use client";

export default function WhatsAppFab() {
  const raw = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "";
  const phone = raw.replace(/\D/g, "");
  if (!phone) return null;

  const base =
    process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE?.trim() ||
    "Hi! I’d like to talk to BizCom.";

  const text = encodeURIComponent(base);
  const href = `https://wa.me/${phone}?text=${text}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 sm:bottom-6 sm:right-6 group"
    >
      <span className="absolute -inset-3 rounded-full bg-emerald-400/20 blur-xl opacity-0 transition group-hover:opacity-100" />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl ring-1 ring-black/5 transition hover:scale-[1.03] active:scale-95">
        {/* WhatsApp logo */}
        <svg
          viewBox="0 0 24 24"
          width="22"
          height="22"
          aria-hidden="true"
          className="fill-current"
        >
          {/* outer speech bubble */}
          <path d="M20.52 3.48A11.8 11.8 0 0 0 12.06 0C5.55 0 .25 5.3.25 11.83c0 2.08.54 4.1 1.57 5.9L0 24l6.4-1.67a11.78 11.78 0 0 0 5.66 1.44h.01c6.51 0 11.8-5.3 11.8-11.8c0-3.15-1.23-6.12-3.35-8.24zM12.07 21.2h-.01c-1.83 0-3.62-.49-5.18-1.41l-.37-.22-3.8.99l1-3.7l-.24-.38a9.69 9.69 0 1 1 8.59 4.72z" />
          {/* handset */}
          <path d="M17.37 13.9c-.29-.14-1.7-.84-1.96-.94c-.26-.1-.45-.14-.64.14c-.19.29-.73.94-.9 1.13c-.17.19-.33.21-.62.07c-.29-.14-1.21-.45-2.31-1.45c-.85-.76-1.42-1.7-1.59-1.99c-.17-.29-.02-.45.12-.59c.12-.12.29-.33.43-.5c.14-.17.19-.29.29-.48c.1-.19.05-.36-.02-.5c-.07-.14-.64-1.54-.88-2.11c-.23-.56-.47-.48-.64-.49c-.17-.01-.36-.01-.55-.01s-.5.07-.76.36c-.26.29-1.01.98-1.01 2.39s1.04 2.77 1.18 2.96c.14.19 2.05 3.13 4.97 4.39c.69.3 1.23.48 1.65.61c.69.22 1.32.19 1.82.12c.56-.08 1.7-.69 1.94-1.36c.24-.67.24-1.25.17-1.36c-.07-.11-.26-.18-.55-.32z" />
        </svg>
      </span>
    </a>
  );
}