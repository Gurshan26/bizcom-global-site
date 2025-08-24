"use client";

import { motion } from "framer-motion";

const leaders = [
  {
    name: "Balbir Singh",
    title: "Leadership",
    bio: "Steers BizCom Global’s strategic direction and long-term partnerships with manufacturers and enterprise customers.",
    // photo: "/images/leadership/balbir-singh.jpg", // TODO add real photo
  },
  {
    name: "TBD — Add name",
    title: "Role/Title (TODO)",
    bio: "Placeholder bio — replace with 2–3 lines on remit, experience, and impact.", // TODO
  },
  {
    name: "TBD — Add name",
    title: "Role/Title (TODO)",
    bio: "Placeholder bio — replace with 2–3 lines on remit, experience, and impact.", // TODO
  },
];

export default function LeadershipRow() {
  return (
    <section id="leadership" className="section">
      <div className="container-page">
        <div className="mx-auto max-w-3xl text-center">
          <div className="eyebrow">Leadership</div>
          <h2 className="h2 mt-1">People behind the practice</h2>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {leaders.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group rounded-2xl border border-black/10 bg-white p-6 shadow-sm"
            >
              <div className="aspect-square w-full overflow-hidden rounded-xl bg-black/5">
                {/* TODO: drop real portrait image here */}
                <div className="grid h-full place-items-center text-sm text-brand-navy/50">Portrait</div>
              </div>
              <div className="mt-4 font-semibold text-brand-navy">{p.name}</div>
              <div className="text-sm text-brand-slate">{p.title}</div>
              <p className="mt-2 text-sm text-brand-navy/80">{p.bio}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}