import { Suspense } from "react";
import { HeroSection } from "@/components/hero-section";
import { Features } from "@/components/features";
import { Demo } from "@/components/Demo";
import { FAQ } from "@/components/faq";
import { CTASection } from "@/components/cta-section";
import { Testimonials } from "@/components/testimonials";
import { HomeClientShell } from "@/components/home-client-shell";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Platy Studio - AI Video Dubbing for Movies, OTT & Content Creators",
  description:
    "Box-office quality AI dubbing with voice cloning, lip sync, and idiomatic translation. 20+ languages, 10x faster than traditional methods.",
  alternates: { canonical: "https://platy.studio" },
};

export default function Home() {
  return (
    <Suspense>
      <HomeClientShell>
        <HeroSection />
        <Features />
        <Demo />
        <Testimonials />
        <CTASection />
        <FAQ />
      </HomeClientShell>
    </Suspense>
  );
}
