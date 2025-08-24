"use client";
import { motion } from "framer-motion";

export default function GlowOrbs() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Orb 1 */}
      <motion.div
        className="absolute h-72 w-72 rounded-full bg-brand-gold/20 blur-3xl"
        animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        style={{ top: "10%", left: "15%" }}
      />
      {/* Orb 2 */}
      <motion.div
        className="absolute h-96 w-96 rounded-full bg-brand-gold/10 blur-3xl"
        animate={{ x: [0, -40, 0], y: [0, 30, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        style={{ bottom: "15%", right: "10%" }}
      />
    </div>
  );
}