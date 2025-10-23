"use client";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { DemoDialog } from "@/components/demo-dialog";
import { useState } from "react";

export function HeroSection() {
  const [showDemo, setShowDemo] = useState(false);
  return (
    <div className="container relative flex flex-col items-center justify-center overflow-hidden px-4 py-40 mx-auto">
      <div className="absolute inset-0 h-full w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800/90 from-0% via-slate-900/80 via-20% to-black"></div>
      <div className="relative z-10 mx-auto max-w-7xl text-center">
        <h1 className="mx-auto mt-10 max-w-5xl p-2 overflow-visible bg-gradient-to-b from-white to-white/60 bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-7xl lg:text-8xl">
          Box Office Quality AI Dubbing
        </h1>
        <p className="mx-auto mt-8 max-w-2xl text-base leading-7 text-white/60 sm:text-xl md:text-xl lg:text-2xl px-10 md:px-0">
          Redefining video Localization at scale for Movies, OTT, Sports, News
          and Content Creators{" "}
          {/*and
           karaoke tracks. */}
        </p>
        <div className="mt-10 flex items-center justify-center gap-6">
          <RainbowButton
            className="bg-white px-8 py-6 text-black hover:bg-white/90"
            onClick={() => setShowDemo(true)}
          >
            Schedule Call
          </RainbowButton>
        </div>
      </div>
      <DemoDialog open={showDemo} onOpenChange={setShowDemo} />
    </div>
  );
}
