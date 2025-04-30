"use client";
import { HeroSection } from "@/components/hero-section";
import { Features } from "@/components/features";
import { HowItWorks } from "@/components/how-it-works";
import { FAQ } from "@/components/faq";
import { CTASection } from "@/components/cta-section";
import { VideoPlayerProvider } from "@/contexts/video-player-context";

export default function Home() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <VideoPlayerProvider>
        <HeroSection />
        <HowItWorks />
        <Features />
        <CTASection />
      </VideoPlayerProvider>
      <FAQ />
    </div>
  );
}
