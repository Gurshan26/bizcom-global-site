"use client";
import HeroBand from "@/components/HeroBand";

export default function AboutHero() {
  return (
    <HeroBand
      eyebrow="About BizCom Global"
      headline="Two decades of dependable distribution"
      body="Founded in 2001, we help OEMs and CEMs build with confidence—sourcing discipline, QA traceability, and responsive program support across APAC, EMEA, and the Americas."
      primary={{ href: "/line-card", label: "View Line Card" }}
      secondary={{ href: "/contact", label: "Contact Sales →" }}
      // uses the default minH so it matches Mission exactly
    />
  );
}