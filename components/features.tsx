"use client";

import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Layers, Settings2, Shield, Globe2, Film, Play } from "lucide-react";
import { SectionHeading } from "@/components/ui/section-heading";
import { OptimizedImage } from "@/components/ui/optimized-image";

export function Features() {
  return (
    <section
      className="container mx-auto relative py-24 sm:py-28 lg:py-36 flex justify-center"
      id="features"
    >
      <div className="px-4 sm:px-6 lg:px-8 ">
        <SectionHeading
          title={
            <>
              <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                Capabilities
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
    title: "Automated Lip Sync (Coming Soon)",
    description:
      "Advanced AI technology that automatically synchronizes lip movements with dubbed audio for a natural viewing experience.",
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
    title: "Manual Supervision",
    description:
      "Take control of our workflow management interface to further improve quality and bring creativity to your content.",
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
    title: "Multi-language Support",
    description:
      "Support for 30+ languages for both dubbing and karaoke creation, helping you reach a global audience.",
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
    title: "Data Security",
    description:
      "Enterprise-grade security with end-to-end encryption ensuring your content remains private and protected throughout the process.",
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
    title: "Long Format Content",
    description:
      "Perfect for feature-length content - from Hollywood movies to commercial productions, maintaining consistent quality throughout.",
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
  {
    title: "Real-time Preview",
    description:
      "Instantly preview your dubbed content with synchronized audio and visuals, enabling quick iterations and quality assurance.",
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
];
