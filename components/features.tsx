"use client";

import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Layers, Settings2, Shield, Globe2, Film, Play } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { OptimizedImage } from "@/components/ui/optimized-image";

export function Features() {
  return (
    <section
      className="container mx-auto relative  flex justify-center"
      id="features"
    >
      <div className="px-4 sm:px-6 lg:px-8 ">
        <SectionHeading
          title={
            <>
              <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                Intelligent Dubbing
              </span>
              <br />
              that sets us apart
            </>
          }
          description=""
        />
        <div className="mt-16 sm:mt-20 lg:mt-24 ">
          <BentoGrid className="max-w-7xl mx-auto">
            {items.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                icon={item.icon}
              />
            ))}
          </BentoGrid>
        </div>
      </div>
    </section>
  );
}

const items = [
  {
    title: "Adaptive Translation",
    description:
      "Smartly adjusts pacing to keep translated audio in sync with the original video.",
    header: (
      <div className="relative w-full h-full min-h-[6rem]">
        <OptimizedImage
          src="/features/sync.png"
          alt="Automated Lip Sync"
          fill
          className="object-cover rounded-xl"
        />
      </div>
    ),
    icon: <Layers className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Voice Cloning",
    description:
      "Captures and replicates the speaker’s voice, volume, texture and style.",
    header: (
      <div className="relative w-full h-full min-h-[6rem]">
        <OptimizedImage
          src="/features/manual.png"
          alt="Manual Supervision"
          fill
          className="object-cover rounded-xl"
        />
      </div>
    ),
    icon: <Settings2 className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Emotive Nuance",
    description:
      "Preserves subtle feelings and tone so performances stay authentic and impactful.",
    header: (
      <div className="relative w-full h-full min-h-[6rem]">
        <OptimizedImage
          src="/features/ott.png"
          alt="Real-time Preview"
          fill
          className="object-cover rounded-xl"
        />
      </div>
    ),
    icon: <Play className="h-4 w-4 text-neutral-500" />,
  },
  // {
  //   title: "Background Sounds",
  //   description:
  //     "Preserves noise, ambience, and music for an authentic, theater-like experience.",
  //   header: (
  //     <div className="relative w-full h-full min-h-[6rem]">
  //       <OptimizedImage
  //         src="/features/ml.png"
  //         alt="Multi-language Support"
  //         fill
  //         className="object-cover rounded-xl"
  //       />
  //     </div>
  //   ),
  //   icon: <Globe2 className="h-4 w-4 text-neutral-500" />,
  // },
  {
    title: "Human in the Loop",
    description:
      "Quality Check is done by our AI agent and smartly supervised by humans for great results.",
    header: (
      <div className="relative w-full h-full min-h-[6rem]">
        <OptimizedImage
          src="/features/ml.png"
          alt="Multi-language Support"
          fill
          className="object-cover rounded-xl"
        />
      </div>
    ),
    icon: <Globe2 className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Idiomatic Translation",
    description:
      "Converts meaning and cultural nuance, not just words, for natural delivery.",
    header: (
      <div className="relative w-full h-full min-h-[6rem]">
        <OptimizedImage
          src="/features/manual.png"
          alt="Data Security"
          fill
          className="object-cover rounded-xl"
        />
      </div>
    ),
    icon: <Shield className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Lip Sync",
    description:
      "Aligns speech seamlessly with lip movements for a believable on-screen match.",
    header: (
      <div className="relative w-full h-full min-h-[6rem]">
        <OptimizedImage
          src="/features/manual.png"
          alt="Long Format Content"
          fill
          className="object-cover rounded-xl"
        />
      </div>
    ),
    icon: <Film className="h-4 w-4 text-neutral-500" />,
  },
];
