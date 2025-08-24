"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  type HTMLMotionProps,
} from "framer-motion";
import clsx from "clsx";

type Props = HTMLMotionProps<"a"> & { children: React.ReactNode };

export default function MagneticButton({
  children,
  className,
  href,
  style,
  onMouseMove,
  onMouseLeave,
  ...rest
}: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const dx = useSpring(x, { stiffness: 200, damping: 20 });
  const dy = useSpring(y, { stiffness: 200, damping: 20 });

  return (
    <motion.a
      ref={ref}
      href={href}
      onMouseMove={(e) => {
        const r = ref.current?.getBoundingClientRect();
        if (r) {
          const mx = e.clientX - (r.left + r.width / 2);
          const my = e.clientY - (r.top + r.height / 2);
          const limit = 12;
          x.set(Math.max(-limit, Math.min(limit, mx / 6)));
          y.set(Math.max(-limit, Math.min(limit, my / 6)));
        }
        onMouseMove?.(e);
      }}
      onMouseLeave={(e) => {
        x.set(0);
        y.set(0);
        onMouseLeave?.(e);
      }}
      style={{ x: dx, y: dy, ...style }}
      className={clsx(
        "inline-flex items-center justify-center rounded-full bg-brand-gold px-6 py-3",
        "font-medium text-brand-navy shadow-lg will-change-transform",
        "transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold/70",
        className
      )}
      {...rest}
    >
      {children}
    </motion.a>
  );
}