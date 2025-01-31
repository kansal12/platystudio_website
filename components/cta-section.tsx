"use client";

import { useState } from "react";
import { RainbowButton } from "@/components/ui/rainbow-button";
import { DemoDialog } from "@/components/demo-dialog";

export function CTASection() {
  const [showDemo, setShowDemo] = useState(false);
  const handleDemoClick = () => setShowDemo(true);

  return (
    <section className="relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800/50 via-black to-black"></div>
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <div className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-1 text-sm text-white/80 backdrop-blur-sm">
              Ready to Transform Your Content?
            </div>
            <h2 className="mt-8 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Experience the Power of <br />
              <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                AI-Powered Innovation
              </span>
            </h2>
            <div className="mt-8 flex flex-col gap-6 text-lg text-white/60 sm:text-xl">
              <p className="text-white/80">Trusted by Industry Leaders</p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
                {[
                  "Film Producers",
                  "OTT Platforms",
                  "Content Creators",
                  "Production Houses",
                  "Studio Directors",
                  "Media Companies",
                ].map((role, index) => (
                  <div
                    key={index}
                    className="group relative rounded-full border border-white/10 bg-black/50 px-4 py-2.5 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/5"
                  >
                    <div className="absolute -inset-px -z-10 rounded-full bg-gradient-to-r from-slate-800 via-slate-800/50 to-slate-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    {role}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 flex flex-col items-center justify-center gap-4">
            <RainbowButton
              className="bg-white px-8 py-6 text-black hover:bg-white/90"
              onClick={handleDemoClick}
            >
              Schedule Demo
            </RainbowButton>
            <p className="text-base text-white/40">
              Join the future of video production today
            </p>
          </div>
          {/* Stats Section */}
          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
            {[
              {
                label: "Processing Speed",
                value: "10x Faster",
                description: "Compared to traditional methods",
              },
              {
                label: "Languages Supported",
                value: "40+",
                description: "And growing every month",
              },
              {
                label: "Quality Retention",
                value: "99%",
                description: "Of original audio fidelity",
              },
            ].map((stat) => (
              <div
                key={stat.label}
                className="group relative rounded-2xl border border-white/10 bg-black/50 p-8 backdrop-blur-sm transition-all duration-300 hover:border-white/20 hover:bg-white/5"
              >
                <div className="absolute -inset-px -z-10 rounded-2xl bg-gradient-to-b from-slate-800 via-slate-800/50 to-slate-900 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="text-3xl font-bold text-white">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm font-medium text-white/80">
                  {stat.label}
                </div>
                <div className="mt-2 text-sm text-white/40">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <DemoDialog open={showDemo} onOpenChange={setShowDemo} />
    </section>
  );
}
