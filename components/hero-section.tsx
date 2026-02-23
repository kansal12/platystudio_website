"use client";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { Button } from "@/components/ui/button";
import { DemoDialog } from "@/components/demo-dialog";
import { useState } from "react";
import Link from "next/link";
import { Phone, Play } from "lucide-react";

export function HeroSection() {
  const [showDemo, setShowDemo] = useState(false);
  return (
    <div className="container relative flex flex-col items-center justify-center overflow-hidden px-4 py-20 sm:py-28 md:py-32 lg:py-40 mx-auto">
      <div className="absolute inset-0 h-full w-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-800/90 from-0% via-slate-900/80 via-20% to-black"></div>
      <div className="relative z-10 mx-auto max-w-7xl text-center">
        <h1 className="mx-auto mt-6 sm:mt-10 max-w-5xl p-2 overflow-visible bg-gradient-to-b from-white to-white/60 bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-5xl md:text-7xl lg:text-8xl">
          Box Office Quality AI Dubbing
        </h1>
        <p className="mx-auto mt-4 sm:mt-8 max-w-2xl text-sm leading-6 text-white/60 sm:text-lg md:text-xl lg:text-2xl px-2 sm:px-10 md:px-0">
          Redefining Video Localization at Scale for Movies, OTT, Sports, News
          and Content Creators
        </p>
        <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-5">
          <RainbowButton
            className="bg-white h-10 sm:h-14 px-6 sm:px-10 text-sm sm:text-lg font-semibold text-black hover:bg-white/90 hover:scale-[1.03] transition-transform"
            onClick={() => setShowDemo(true)}
          >
            <Phone className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Schedule Call
          </RainbowButton>
          <Link href="#Demo">
            <Button
              variant="outline"
              className="h-10 sm:h-14 px-6 sm:px-10 rounded-lg text-sm sm:text-lg font-semibold text-white border-white/40 hover:bg-white/10 hover:border-white/60 hover:scale-[1.03] transition-all backdrop-blur-sm"
            >
              <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5 fill-white" />
              Watch Demo
            </Button>
          </Link>
        </div>
      </div>
      <DemoDialog open={showDemo} onOpenChange={setShowDemo} />
    </div>
  );
}
