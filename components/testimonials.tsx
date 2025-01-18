"use client";

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

export function Testimonials() {
  return (
    <section className="relative py-20">
      <div className="container">
        <SectionHeading
          title="What our clients say"
          description="Hear from the industry leaders who trust Platy.Studio"
        />
      </div>
    </section>
  );
}
