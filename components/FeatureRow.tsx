"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  body: string;
  cta?: { href: string; label: string };
  reverse?: boolean;
  imageSrc?: string;
  imageAlt?: string;
};

export default function FeatureRow({
  title,
  body,
  cta,
  reverse,
  imageSrc,
  imageAlt = "",
}: Props) {
  return (
    <section className="section">
      <div
        className={`container-page grid items-center gap-8 lg:grid-cols-2 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* Media */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? 60 : -60, scale: 0.98 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1] }}
          className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl bg-gradient-to-br from-brand-navy/15 via-brand-slate/20 to-white/30"
        >
          {imageSrc ? (
            <motion.div
              initial={{ scale: 1 }}
              whileInView={{ scale: 1.04 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 2.5, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src={imageSrc}
                alt={imageAlt}
                fill
                priority={false}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </motion.div>
          ) : (
            // Fallback placeholder
            <motion.div
              initial={{ scale: 1 }}
              whileInView={{ scale: 1.04 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 2.5, ease: "easeOut" }}
              className="absolute inset-0 grid place-items-center text-brand-navy/50"
            >
              Image here
            </motion.div>
          )}
        </motion.div>

        {/* Copy */}
        <motion.div
          initial={{ opacity: 0, x: reverse ? -60 : 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: [0.25, 1, 0.5, 1], delay: 0.05 }}
        >
          <h3 className="h2">{title}</h3>
          <p className="mt-3 max-w-prose text-brand-navy/80">{body}</p>
          {cta && (
            <Link href={cta.href} className="link mt-5 inline-block text-brand-navy">
              {cta.label} →
            </Link>
          )}
        </motion.div>
      </div>
    </section>
  );
}