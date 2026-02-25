"use client";

import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";

const brands = [
  {
    name: "Mesh.ai",
    logo: "/brand_log/mesh_ai.png",
    scale: "scale-100",
    paddingTop: "pt-0",
  },
  {
    name: "Enthu.ai",
    logo: "/brand_log/enthu_ai-Photoroom.png",
    scale: "scale-[70%]",
    paddingTop: "pt-0",
  },
  {
    name: "aim2write",
    logo: "/brand_log/aim_2_write.png",
    scale: "scale-[150%]",
    paddingTop: "pt-0",
  },
  {
    name: "bigDance",
    logo: "/brand_log/big_dance.png",
    scale: "scale-[200%]",
    paddingTop: "pt-0",
  },
  {
    name: "incuboost",
    logo: "/brand_log/incuboost.png",
    scale: "scale-[200%]",
    paddingTop: "pt-0",
  },
  {
    name: "fh",
    logo: "/brand_log/fh.png",
    scale: "scale-100",
    paddingTop: "pt-0",
  },
  {
    name: "sparrow",
    logo: "/brand_log/sparrow.png",
    scale: "scale-[200%]",
    paddingTop: "pt-1",
  },
  {
    name: "enalytical_ai",
    logo: "/brand_log/enalytical_ai.png",
    scale: "scale-[80%]",
    paddingTop: "pt-3",
  },
  {
    name: "ak_studio",
    logo: "/brand_log/ak_studio.png",
    scale: "scale-[170%]",
    paddingTop: "pt-0",
  },
  {
    name: "nuvo_retail",
    logo: "/brand_log/nuvo_retail.png",
    scale: "scale-[90%]",
    paddingTop: "pt-0",
  },
  {
    name: "WiserStack",
    logo: "/brand_log/WiserStack.jpeg",
    scale: "scale-100",
    paddingTop: "pt-0",
  },
];

export function BrandLogos() {
  return (
    <section className="relative w-full pb-24 sm:pb-28 lg:pb-36 ">
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
                className="flex items-center justify-center px-8 "
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={70}
                  height={60}
                  className={`h-[60px] w-auto object-contain transition-all duration-300 scal mix-blend-multiply ${brand.scale} ${brand.paddingTop}`}
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
