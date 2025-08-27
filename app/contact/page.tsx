"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [status, setStatus] = useState<null | "sending" | "ok" | "error">(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(await res.text());
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      {/* Slim hero band */}
      <section className="relative full-bleed isolate overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-navy via-[#0F2849] to-brand-slate/60" />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -top-24 -left-24 h-80 w-80 rounded-full bg-brand-gold/10 blur-3xl"
          animate={{ y: [0, -18, 0], x: [0, 12, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -bottom-16 -right-24 h-96 w-96 rounded-full bg-white/10 blur-3xl"
          animate={{ y: [0, 14, 0], x: [0, -10, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative z-10">
          <div className="container-page py-16 md:py-20">
            <div className="max-w-2xl">
              <div className="eyebrow text-white/80">Get in touch</div>
              <h1 className="mt-2 font-display text-4xl text-white sm:text-5xl">
                Let’s talk about your sourcing needs
              </h1>
              <p className="mt-3 max-w-prose text-white/85">
                We typically respond within one business day. Share as much
                context as you can—BOM, timeline, program details—and we’ll take it
                from there.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          {/* Left: Address / details */}
          <motion.aside
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.55, ease: [0.25, 1, 0.5, 1] }}
            className="relative rounded-3xl border border-black/10 bg-white p-6 shadow-sm"
          >
            <div className="eyebrow">BizCom Global</div>
            <h2 className="h3 mt-1">Head office</h2>
            <address className="not-italic mt-3 text-brand-navy/80">
              10 Jalan Besar #06-03
              <br />
              Sim Lim Tower
              <br />
              Singapore 208787
            </address>
            <div className="mt-5 space-y-2 text-brand-navy/80">
              <div>
                Email:{" "}
                <a className="link text-brand-navy" href="mailto:sales@bizcompl.com">
                  sales@bizcompl.com
                </a>
              </div>
              <div>Phone:+65 9023317</div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-inset ring-black/5" />
          </motion.aside>

          {/* Right: Contact form */}
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1], delay: 0.05 }}
            className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm text-brand-navy/70">Name</label>
                <input
                  name="name"
                  required
                  className="mt-1 w-full rounded-xl border border-black/10 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-brand-gold/60"
                />
              </div>
              <div>
                <label className="block text-sm text-brand-navy/70">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="mt-1 w-full rounded-xl border border-black/10 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-brand-gold/60"
                />
              </div>
              <div>
                <label className="block text-sm text-brand-navy/70">Company (optional)</label>
                <input
                  name="company"
                  className="mt-1 w-full rounded-xl border border-black/10 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-brand-gold/60"
                />
              </div>
              <div>
                <label className="block text-sm text-brand-navy/70">Phone (optional)</label>
                <input
                  name="phone"
                  className="mt-1 w-full rounded-xl border border-black/10 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-brand-gold/60"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm text-brand-navy/70">Message</label>
                <textarea
                  name="message"
                  required
                  rows={6}
                  className="mt-1 w-full rounded-xl border border-black/10 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-brand-gold/60"
                />
              </div>
            </div>

            <div className="mt-5 flex items-center gap-4">
              <button
                type="submit"
                className="rounded-full bg-brand-gold px-6 py-3 font-medium text-brand-navy shadow-lg transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/70 disabled:opacity-60"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Sending…" : "Send message"}
              </button>
              <p className="text-sm text-brand-navy/70" role="status" aria-live="polite">
                {status === "ok" && "Thanks! We’ll get back to you shortly."}
                {status === "error" && "Something went wrong. Please email sales@bizcompl.com."}
              </p>
            </div>
          </motion.form>
        </div>
      </section>
    </>
  );
}