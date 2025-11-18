"use client";

import DualVideoPlayer from "@/components/DualVideoPlayer";
import { SectionHeading } from "@/components/ui/section-heading";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

type Tags =
  | "All"
  | "AI"
  | "Frontend"
  | "Backend"
  | "Design"
  | "DevOps"
  | "Drama"
    "Wellness"
    "News";
// type Tags = "All";

interface DubbingFeature {
  id: number;
  title: string;
  description: string;
  type: "dubbing";
  videoTitle: string;
  originalVideo: string;
  originalFlag: string;
  dubVideo: string;
  dubFlag: string;
  thumbnail: string;
  tags: Tags[];
}

const features: Array<DubbingFeature> = [
  {
    id: 1,
    title: "Lip synchronization in 20+ languages",
    description:
      "Our advanced AI seamlessly edits video to perfectly align lip movements with the new language.",
    type: "dubbing",
    videoTitle: "Lip Sync",

    originalVideo:
      "https://vz-c5817d00-065.b-cdn.net/ae948458-46d0-4de2-9f8c-d3d327dbab2a/play_720p.mp4",
    originalFlag: "/assets/img/us-flag.png",

    dubVideo:
      "https://vz-c5817d00-065.b-cdn.net/8b09fa57-3e8b-4e64-91fc-43649def82c5/play_720p.mp4",
    dubFlag: "/assets/img/ind-flag.png",
    thumbnail:
      "https://vz-c5817d00-065.b-cdn.net/ae948458-46d0-4de2-9f8c-d3d327dbab2a/thumbnail_e33af038.jpg",
    tags: ["News"],
  },
  {
    id: 2,
    title: "Lip Synchronization in 4K",
    description:
      "Delivering precise mouth movement synchronization for ultra-realistic video dubbing and localization for any video resolution.",
    type: "dubbing",
    videoTitle: "Lip Sync",
    originalVideo:
      "https://vz-c5817d00-065.b-cdn.net/ceff1ebf-95b9-40a0-99f8-d1cb9eca1cbd/play_480p.mp4",
    originalFlag: "/assets/img/us-flag.png",

    dubVideo:
      "https://vz-c5817d00-065.b-cdn.net/9be8ca14-b5c4-4898-be0e-9db9bf57de92/play_720p.mp4",
    dubFlag: "/assets/img/france_flag.webp",
    thumbnail:
      "https://vz-c5817d00-065.b-cdn.net/9be8ca14-b5c4-4898-be0e-9db9bf57de92/thumbnail.jpg",
    tags: ["Backend"],
  },
  {
    id: 3,
    title: "Immersive Voice Replication",
    description:
      "Blending multiple voice and sound layers to create rich, cinematic audio experiences that feel natural and multidimensional.",
    type: "dubbing",
    videoTitle: "Turkish Drama",

    originalVideo:
      "https://vz-c5817d00-065.b-cdn.net/f87e4665-639c-49a5-a7cf-2346a265bf31/play_480p.mp4",
    originalFlag: "/assets/img/turkey_flag.png",

    dubVideo:
      "https://vz-c5817d00-065.b-cdn.net/0ce2083a-2371-476a-a830-eeae62eceec6/play_720p.mp4",
    dubFlag: "/assets/img/us-flag.png",
    thumbnail:
      "https://vz-c5817d00-065.b-cdn.net/f87e4665-639c-49a5-a7cf-2346a265bf31/thumbnail_c74b6c36.jpg",
    tags: ["Drama"],
  },
  {
    id: 4,
    title: "Adaptive Vocal Presence",
    description:
      "Modulating tone, clarity, and projection to ensure voices remain consistent and impactful across diverse mic locations.",
    type: "dubbing",
    videoTitle: "Multi-spatial Cloning",
    originalVideo:
      "https://vz-c5817d00-065.b-cdn.net/4e31e437-b56a-4f27-8ed4-60b0d7a144e6/play_720p.mp4",
    originalFlag: "/assets/img/en-flag.webp",

    dubVideo:
      "https://vz-c5817d00-065.b-cdn.net/43353ed6-a68d-46e6-97ac-6102952cfcc8/play_720p.mp4",
    dubFlag: "/assets/img/france_flag.webp",
    thumbnail:
      "https://vz-c5817d00-065.b-cdn.net/43353ed6-a68d-46e6-97ac-6102952cfcc8/thumbnail_0d608e8c.jpg",
    tags: ["Backend"],
  },
  {
    id: 5,
    title: "Big Screen to Shorts",
    description:
      "Maintain cinematic excellence even in bite-sized, attention-grabbing clips.",
    type: "dubbing",
    videoTitle: "Long form to Reels",

    originalVideo:
      "https://vz-c5817d00-065.b-cdn.net/8bc21707-efa3-49e6-b6ca-1635bb63e7e2/play_720p.mp4",
    originalFlag: "/assets/img/us-flag.png",

    dubVideo:
      "https://vz-c5817d00-065.b-cdn.net/72603c44-cbfb-43d8-99d4-ce93e71edfdb/play_720p.mp4",
    dubFlag: "/assets/img/greek_flag.png",
    thumbnail:
      "https://vz-c5817d00-065.b-cdn.net/72603c44-cbfb-43d8-99d4-ce93e71edfdb/thumbnail_5bfec1b2.jpg",
    tags: ["Wellness"],
  },

  {
    id: 6,
    title: "Format flexibility",
    description:
      "Precise, impactful dubbing for bite-sized reels, adapting to changing voices and mic positions.",
    type: "dubbing",
    videoTitle: " Long form to Reels",

    originalVideo:
      "https://vz-c5817d00-065.b-cdn.net/a78ce083-0aef-436d-b554-f6e73c404da4/play_720p.mp4",
    originalFlag: "/assets/img/us-flag.png",

    dubVideo:
      "https://vz-c5817d00-065.b-cdn.net/e940476c-2b3e-4855-822c-23075ba346a1/play_720p.mp4",
    dubFlag: "/assets/img/raussia-flag.png",
    thumbnail:
      "https://vz-c5817d00-065.b-cdn.net/e940476c-2b3e-4855-822c-23075ba346a1/thumbnail.jpg",
    tags: ["Frontend"],
  },

  {
    id: 7,
    title: "Precision for Specialized Storytelling",
    description:
      "Designed to adapt across specialized content categories like yoga and wellness.",
    type: "dubbing",
    videoTitle: "Niche Content",

    originalVideo:
      "https://vz-c5817d00-065.b-cdn.net/86cba5bd-7875-4883-b358-fa82f68af63c/play_720p.mp4",
    originalFlag: "/assets/img/greman_flag.jpg",

    dubVideo:
      "https://vz-c5817d00-065.b-cdn.net/cce1d0a2-54b5-4fb6-94df-c172f4be9a68/play_720p.mp4",
    dubFlag: "/assets/img/us-flag.png",
    thumbnail:
      "https://vz-c5817d00-065.b-cdn.net/cce1d0a2-54b5-4fb6-94df-c172f4be9a68/thumbnail.jpg",
    tags: ["Wellness"],
  },

  {
    id: 8,
    title: "Customized for every Genre",
    description:
      "Purpose-built to capture the nuances of unique content types, helping creators connect deeply with targeted communities.",
    type: "dubbing",
    videoTitle: "Niche Content",

    originalVideo:
      "https://vz-c5817d00-065.b-cdn.net/1a3a5929-a622-4f72-a27b-bafd97f5a5d3/play_720p.mp4",
    originalFlag: "/assets/img/us-flag.png",

    dubVideo:
      "https://vz-c5817d00-065.b-cdn.net/ec85f725-d68f-46ac-8953-9bba7ecbff30/play_720p.mp4",
    dubFlag: "/assets/img/span-flag.png",
    thumbnail:
      "https://vz-c5817d00-065.b-cdn.net/ec85f725-d68f-46ac-8953-9bba7ecbff30/thumbnail.jpg",
    tags: ["Design"],
  },
  {
    id: 9,
    title: "Accent Authenticity at Scale",
    description:
      "Harness AI to reproduce and shift accents effortlessly, ensuring speech remains authentic across global audiences and content formats",
    type: "dubbing",
    videoTitle: "Multiple Accents",

    originalVideo:
      "https://vz-c5817d00-065.b-cdn.net/e78e0c97-9aff-4890-9d47-2231c23562d5/play_720p.mp4",
    originalFlag: "/assets/img/france_flag.webp",

    dubVideo:
      "https://vz-c5817d00-065.b-cdn.net/5b47264e-b338-4cf0-ba62-f4182daa5432/play_720p.mp4",
    dubFlag: "/assets/img/us-flag.png",
    thumbnail:
      "https://vz-c5817d00-065.b-cdn.net/5b47264e-b338-4cf0-ba62-f4182daa5432/thumbnail.jpg",
    tags: ["Backend"],
  },

  {
    id: 10,
    title: "Global Accent Versatility",
    description:
      "Faithfully replicate native accents or transform them for your customers, enabling seamless localization and culturally resonant dubbing.",
    type: "dubbing",
    videoTitle: "Multiple Accents",

    originalVideo:
      "https://vz-c5817d00-065.b-cdn.net/6867fef7-57a5-44d7-8773-39e1913e72b4/play_720p.mp4",
    originalFlag: "/assets/img/us-flag.png",

    dubVideo:
      "https://vz-c5817d00-065.b-cdn.net/7f549a5a-09d3-4df5-b168-29c6eb4d0dc6/play_720p.mp4",
    dubFlag: "/assets/img/ind-flag.png",
    thumbnail:
      "https://vz-c5817d00-065.b-cdn.net/7f549a5a-09d3-4df5-b168-29c6eb4d0dc6/thumbnail.jpg",
    tags: ["News"],
  },
];

export default function ClientDemo() {
  const tags: Tags[] = ["All", "Drama"];
  const [activeTag, setActiveTag] = useState<Tags>("All");
  const param = useSearchParams().get("tag");

  useEffect(() => {
    setActiveTag((param as Tags) || "All");
  }, [param]);

  return (
    <section
      className="mt-24 relative pt-0 sm:pt-0 lg:pt-0 scroll-mt-[70px]"
      id="Demo"
    >
      <SectionHeading
        title={
          <div className="sm:py-24 lg:py-12">
            <span className=" bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Platy Studio Demos &nbsp;
            </span>
            <br />
          </div>
        }
        description=""
      />
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="  space-y-24">
          {/* Dubbing Section */}
          <div className="relative">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent sm:text-3xl">
                AI Powered Dubbing for Movies, OTTs, Ads and Social Media
                <br />
              </h2>
              <p className="text-base text-white/60">
                <br />
                Retains the original voice’s timbre, style, emotion, and
                timing&mdash;along with spatial depth, background sounds, and
                perfect lip-sync.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 p-4">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 
            ${
              activeTag === tag
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
                >
                  {tag}
                </button>
              ))}
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {features
                .filter(
                  (item) => item.tags.includes(activeTag) || activeTag === "All"
                )
                .map((feature) => (
                  <div
                    key={feature.title}
                    className="flex flex-col gap-4 group bg-black/20 rounded-2xl p-4 hover:bg-black/40 transition-colors duration-300 border border-white/20"
                  >
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-black/50 transition-all duration-300 group-hover:border-white/20 group-hover:shadow-2xl">
                      <DualVideoPlayer
                        originalVideo={feature.originalVideo}
                        dubVideo={feature.dubVideo}
                        title={feature.videoTitle}
                        originalFlag={feature.originalFlag}
                        dubFlag={feature.dubFlag}
                        thumbnail={feature.thumbnail}
                      />
                    </div>
                    <div className="flex flex-col gap-4">
                      <h3 className="text-xl font-bold sm:text-2xl">
                        {feature.title}
                      </h3>
                      <p className="text-base text-white/60 sm:text-lg">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="w-full  mt-6 mb-12 py-4">
        <p className="text-muted-foreground text-center">
          All copyrights and intellectual property rights remain the exclusive
          property of the original creators.
        </p>
      </div>
    </section>
  );
}
