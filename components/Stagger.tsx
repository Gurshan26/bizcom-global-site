"use client";
import { motion } from "framer-motion";
export const Stagger: React.FC<React.PropsWithChildren<{ gap?: number }>> = ({ children }) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "0px 0px -60px 0px" }}
    variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
  >
    {children}
  </motion.div>
);
export const Item: React.FC<React.PropsWithChildren> = ({ children }) => (
  <motion.div variants={{ hidden: { opacity: 0, y: 8 }, show: { opacity: 1, y: 0 } }}>
    {children}
  </motion.div>
);