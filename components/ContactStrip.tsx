"use client";

import Link from "next/link";

export default function ContactStrip() {
  return (
    <section className="section">
      <div className="container-page">
        <div className="rounded-3xl border border-black/10 bg-white p-6 shadow-sm">
          <div className="grid items-start gap-6 md:grid-cols-2">
            <div>
              <div className="eyebrow">BizCom Global</div>
              <h3 className="h2">Head office</h3>
              <p className="mt-3 text-brand-navy/80">
                10 Jalan Besar #06-03<br />
                Sim Lim Tower<br />
                Singapore 208787
              </p>
              <p className="mt-3 text-brand-navy/80">
                Email: <a className="link" href="mailto:sales@bizcompl.com">sales@bizcompl.com</a><br />
                Phone: +65 63893966
              </p>
            </div>

            <div className="flex items-center justify-end">
              <Link
                href="/contact"
                className="rounded-full bg-brand-gold px-6 py-3 font-medium text-brand-navy shadow-lg transition hover:-translate-y-0.5"
              >
                Contact Sales →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}