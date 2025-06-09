"use client";

import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";

const brands = [
  {
    name: "Brand 1",
    logo: "/disney.png",
  },
  {
    name: "Brand 2",
    logo: "/disney.png",
  },
  {
    name: "Brand 3",
    logo: "/disney.png",
  },
  {
    name: "Brand 4",
    logo: "/disney.png",
  },
  {
    name: "Brand 5",
    logo: "/disney.png",
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
              Industry Leaders
            </>
          }
          description=""
        />
        <div className="mt-16 sm:mt-20 lg:mt-24 relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10"></div>
          <Marquee className="py-4">
            {brands.map((brand, index) => (
              <div
                key={index}
                className="flex items-center justify-center px-8"
              >
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  width={120}
                  height={40}
                  className="object-contain grayscale hover:grayscale-0 transition-all duration-300 brightness-200 filter invert"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
