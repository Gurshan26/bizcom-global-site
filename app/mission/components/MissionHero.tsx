"use client";
import HeroBand from "@/components/HeroBand";

export default function MissionHero() {
  return (
    <HeroBand
      eyebrow="Global technology distribution"
      headline="Components, programs, and logistics—done right."
      body="BizCom Global helps OEMs and CEMs move faster with reliable sourcing, anti-counterfeit controls, and responsive support across APAC, EMEA, and the Americas."
      primary={{ href: "/line-card", label: "View Line Card" }}
      secondary={{ href: "/contact", label: "Contact Sales →" }}
      // identical animation + height to About
    />
  );
}