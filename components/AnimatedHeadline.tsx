"use client";
import { motion } from "framer-motion";

export default function AnimatedHeadline({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <h1 className="mt-4 font-display text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
      {words.map((w, i) => (
        <motion.span
          key={i}
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.04 * i, duration: 0.5, ease: [0.25, 1, 0.5, 1] }}
          className="inline-block mr-[0.3ch]"
        >
          {w}
        </motion.span>
      ))}
    </h1>
  );
}