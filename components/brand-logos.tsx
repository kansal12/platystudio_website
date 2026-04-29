"use client";

import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";

const brands = [
  {
    name: "Mesh.ai",
    logo: "/brand_logs/mesh_ai.png",
    scale: "scale-[150%]",
    paddingTop: "pt-0",
  },
  {
    name: "Enthu.ai",
    logo: "/brand_logs/enthu_ai-Photoroom.png",
    scale: "scale-[125%]",
    paddingTop: "pt-0",
  },
  {
    name: "aim2write",
    logo: "/brand_logs/aim_2_write.png",
    scale: "scale-[135%]",
    paddingTop: "pt-0",
  },

  {
    name: "bigDance",
    logo: "/brand_logs/big_dance.png",
    scale: "scale-[100%]",
    paddingTop: "pt-0",
  },

  {
    name: "sparrow",
    logo: "/brand_logs/sparrow.png",
    scale: "scale-[150%]",
    paddingTop: "pt-1",
  },
  {
    name: "incuboost",
    logo: "/brand_logs/incuboost.png",
    scale: "scale-[100%]",
    paddingTop: "pt-0",
  },
  {
    name: "fh",
    logo: "/brand_logs/fh.png",
    scale: "scale-[90%]",
    paddingTop: "pt-0",
  },
  {
    name: "enalytical_ai",
    logo: "/brand_logs/enalytical_ai.png",
    scale: "scale-[200%]",
    paddingTop: "pt-3",
  },
  {
    name: "ak_studio",
    logo: "/brand_logs/ak_studio.png",
    scale: "scale-[100%]",
    paddingTop: "pt-0",
  },
  {
    name: "nuvo_retail",
    logo: "/brand_logs/nuvo_retail.png",
    scale: "scale-[200%]",
    paddingTop: "pt-0",
  },
  {
    name: "WiserStack",
    logo: "/brand_logs/WiserStack.jpeg",
    scale: "scale-[80%]",
    paddingTop: "pt-0",
  },
  {
    name: "alep_digital",
    logo: "/brand_logs/alep_digital.png",
    scale: "scale-[100%]",
    paddingTop: "pt-0",
  },
  {
    name: "letsai",
    logo: "/brand_logs/letsai.png",
    scale: "scale-[100%]",
    paddingTop: "pt-0",
  },
  {
    name: "xploriz_digital",
    logo: "/brand_logs/xploriz_digital.jpeg",
    scale: "scale-[100%]",
    paddingTop: "pt-0",
  },

];

export function BrandLogos() {
  return (
    <section className="relative w-full my-24 sm:my-28 lg:my-36">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={
            <>
              <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                Trusted by
              </span>
              <br />
              Industry
            </>
          }
          description=""
        />
        <div className="mt-16 sm:mt-[50px] lg:mt-[60px] relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
          <Marquee className="py-4 bg-white">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="flex items-center justify-center px-[32px] "
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={70}
                  height={60}
                  className={`h-[60px] w-[fit] object-contain transition-all duration-300 ${brand.scale}  `}
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
