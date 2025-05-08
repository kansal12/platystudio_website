"use client";
import { HeroSection } from "@/components/hero-section";
import { Features } from "@/components/features";
import { Demo } from "@/components/Demo";
import { FAQ } from "@/components/faq";
import { CTASection } from "@/components/cta-section";
import { VideoPlayerProvider } from "@/contexts/video-player-context";

export default function Home() {
  return (
    <VideoPlayerProvider>
      <div className="relative min-h-screen w-full overflow-hidden">
        <HeroSection />
        <Demo />
        <Features />
        <CTASection />
        <FAQ />
      </div>
    </VideoPlayerProvider>
  );
}
