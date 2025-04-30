"use client";
import { HeroSection } from "@/components/hero-section";
import { Features } from "@/components/features";
import { HowItWorks } from "@/components/how-it-works";
import { FAQ } from "@/components/faq";
import { CTASection } from "@/components/cta-section";
import { VideoPlayerProvider } from "@/contexts/video-player-context";

export default function Home() {
  return (
    <VideoPlayerProvider>
      <div className="relative min-h-screen w-full overflow-hidden">
        <HeroSection />
        <HowItWorks />
        <Features />
        <CTASection />
        <FAQ />
      </div>
    </VideoPlayerProvider>
  );
}
