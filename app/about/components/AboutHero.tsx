"use client";
import HeroBand from "@/components/HeroBand";

export default function AboutHero() {
  return (
    <HeroBand
      eyebrow="About BizCom Global"
      headline="Built for today’s challenges in electronics distribution"
      body="With speed, transparency, and anti-counterfeit assurance at our core, we help OEMs and CEMs reduce risk and keep programs moving worldwide."
      primary={{ href: "/line-card", label: "View Line Card" }}
      secondary={{ href: "/contact", label: "Contact Sales →" }}
      // uses the default minH so it matches Mission exactly
    />
  );
}