"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  PrevButton,
  NextButton,
  useCarouselButtons,
} from "@/components/ui/carousel-buttons";
import {
  CarouselIndicator,
  useCarouselIndicator,
} from "@/components/ui/carousel-indicator";
import Image from "next/image";
import { SectionHeading } from "@/components/ui/section-heading";

// const testimonials = [
//   {
//     quote:
//       "Platy.Studio has revolutionized our dubbing process. The quality is incredible, and the time savings are enormous.",
//     author: "Maria Garcia",
//     title: "Head of Content, StreamFlix",
//   },
//   {
//     quote:
//       "The karaoke feature has transformed how we create music content. Our audience engagement has never been higher.",
//     author: "James Wilson",
//     title: "Product Director, MusicBox",
//   },
//   {
//     quote:
//       "As a movie producer, I'm amazed by the quality of dubbing. It's indistinguishable from traditional methods.",
//     author: "Alex Chen",
//     title: "Executive Producer, FilmCraft Studios",
//   },
// ];

const testimonials = [
  {
    quote:
      "This platform has transformed how we handle our business operations. The efficiency gains are remarkable.",
    author: "John Doe",
    position: "CEO, TechCorp",
    avatar: "/avatar.png",
  },
  {
    quote:
      "The best decision we made was implementing this solution. Our team's productivity has increased significantly.",
    author: "Jane Smith",
    position: "Founder, InnovateX",
    avatar: "/avatar.png",
  },
  {
    quote:
      "Outstanding support and a platform that truly delivers on its promises. Highly recommended!",
    author: "Mike Johnson",
    position: "CTO, FutureTech",
    avatar: "/avatar.png",
  },
];

export function Testimonials() {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = useCarouselButtons(emblaApi);
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useCarouselIndicator(emblaApi);

  return (
    <section className="relative w-full pb-24 sm:pb-28 lg:pb-36 overflow-hidden">
      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={
            <>
              <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                What Our Clients
              </span>
              <br />
              Say About Us
            </>
          }
          description=""
        />

        <div className="mt-16 sm:mt-20 lg:mt-24">
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="flex-[0_0_100%] min-w-0 px-4">
                    <div className="group relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-2xl border border-slate-700/50 hover:border-slate-600/50 transition-all duration-300">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative flex flex-col items-center text-center">
                        <div className="relative w-20 h-20 sm:w-24 sm:h-24 mb-6 sm:mb-8">
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full blur-md opacity-50"></div>
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.author}
                            fill
                            className="rounded-full object-cover border-2 border-slate-700 group-hover:border-slate-500 transition-colors duration-300"
                          />
                        </div>
                        <blockquote className="text-lg sm:text-xl text-slate-200 mb-6 sm:mb-8 leading-relaxed">
                          &ldquo;{testimonial.quote}&rdquo;
                        </blockquote>
                        <div>
                          <p className="font-semibold text-white text-base sm:text-lg">
                            {testimonial.author}
                          </p>
                          <p className="text-slate-400 mt-1 text-sm sm:text-base">
                            {testimonial.position}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-center items-center mt-12 gap-6">
              <PrevButton
                onClick={onPrevButtonClick}
                disabled={prevBtnDisabled}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 disabled:opacity-50 disabled:cursor-not-allowed border border-slate-700/50 text-white flex items-center justify-center transition-all duration-300 hover:scale-105"
              ></PrevButton>
              <div className="flex gap-3">
                {scrollSnaps.map((_, index) => (
                  <CarouselIndicator
                    key={index}
                    onClick={() => onDotButtonClick(index)}
                    className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                      index === selectedIndex
                        ? "bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 scale-125"
                        : "bg-slate-700 hover:bg-slate-600"
                    }`}
                  />
                ))}
              </div>
              <NextButton
                onClick={onNextButtonClick}
                disabled={nextBtnDisabled}
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 disabled:opacity-50 disabled:cursor-not-allowed border border-slate-700/50 text-white flex items-center justify-center transition-all duration-300 hover:scale-105"
              ></NextButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
