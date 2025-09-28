"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import DualVideoPlayer from "./DualVideoPlayer";
import { RainbowButton } from "./ui/rainbow-button";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Player from "@vimeo/player";
import VimeoPlayer from "./viemoVideoPlayer";

interface DubbingFeature {
  title: string;
  description: string;
  type: "dubbing";
  videoTitle: string;
  originalVideo: string;
  originalFlag: string;
  dubVidoe: string;
  dubFlag: string;
  thumbnail: string;
}

const features: Array<DubbingFeature> = [
  {
    title: "Academic Public Talk",
    description:
      "Professional-grade dubbing that works for technical and academic content while preserving speaker's syle, voice and emotions.",
    type: "dubbing",
    videoTitle: "Path to Maths- IAS Princeton",

    originalVideo:
      "https://res.cloudinary.com/dctta3r6s/video/upload/v1739271315/original_Kalyani_PTM_wzer03.mp4",
    originalFlag: "/assets/img/us-flag.png",
    // originalLabel: "Original",
    dubVidoe:
      "https://res.cloudinary.com/dctta3r6s/video/upload/v1739271314/spanish_Kalyani_PTM_eoia6e.mp4",
    dubFlag: "/assets/img/span-flag.png",
    thumbnail:
      "https://vz-c5817d00-065.b-cdn.net/1295b06c-6cb9-4771-83cf-f49d49a91420/thumbnail_8971f0d3.jpg",
    // dubLable: "Dubbed",
  },
  {
    title: "Technology News",
    description:
      "High-quality, scalable dubs for any genre—fast, seamless multilingual content for YouTube producers",
    type: "dubbing",
    videoTitle: "CNET Humanoid",
    originalVideo:
      "https://vz-c5817d00-065.b-cdn.net/1a3a5929-a622-4f72-a27b-bafd97f5a5d3/play_720p.mp4",
    originalFlag: "/assets/img/us-flag.png",
    // originalLabel: "Original",
    dubVidoe:
      "https://vz-c5817d00-065.b-cdn.net/ec85f725-d68f-46ac-8953-9bba7ecbff30/play_720p.mp4",
    dubFlag: "/assets/img/span-flag.png",
    thumbnail:
      "https://vz-c5817d00-065.b-cdn.net/ec85f725-d68f-46ac-8953-9bba7ecbff30/thumbnail.jpg",
    // dubLable: "Dubbed",
  },
  {
    title: "Podcasts and News",
    description:
      "Dub any conversation or interview while preserving original accent, spatial effects, non-verbal cues, and emotions.",
    type: "dubbing",
    videoTitle: "Zelenskyy-Fridman",
    originalVideo:
      "https://vz-c5817d00-065.b-cdn.net/6d6f8a5e-eb25-4035-9750-b00e1959c560/playlist.m3u8",
    originalFlag: "/assets/img/raussia-flag.png",
    // originalLabel: "Original",
    dubVidoe:
      "https://vz-c5817d00-065.b-cdn.net/c29da669-2fb2-4d8e-9c08-1db9c7763293/play_720p.mp4",
    dubFlag: "/assets/img/us-flag.png",
    thumbnail:
      "https://vz-c5817d00-065.b-cdn.net/c29da669-2fb2-4d8e-9c08-1db9c7763293/thumbnail_35477268.jpg",
    // dubLable: "Dubbed",
  },
  {
    title: "High Quality Lip Sync",
    description:
      "Use AI-driven phoneme mapping and emotional analysis to align lip movements with dubbed audio while preserving original emotions.",
    type: "dubbing",
    videoTitle: "Logitech Lipsync",
    originalVideo:
      "https://vz-c5817d00-065.b-cdn.net/ceff1ebf-95b9-40a0-99f8-d1cb9eca1cbd/play_720p.mp4",
    originalFlag: "/assets/img/us-flag.png",
    // originalLabel: "Original",
    dubVidoe:
      "https://vz-c5817d00-065.b-cdn.net/9be8ca14-b5c4-4898-be0e-9db9bf57de92/play_720p.mp4",
    dubFlag: "/assets/img/france_flag.webp",
    thumbnail:
      "https://vz-c5817d00-065.b-cdn.net/9be8ca14-b5c4-4898-be0e-9db9bf57de92/thumbnail.jpg",
    // dubLable: "Dubbed",
  },
];

const viemoVideoId = ["1122400201"];

export function Demo() {
  const router = useRouter();

  return (
    <section
      className="relative pt-0 sm:pt-0 lg:pt-0 scroll-mt-[70px] my-[100px]"
      id="Demo"
    >
      <div className="px-4 sm:px-6 lg:px-8">
        {/* <SectionHeading
          title={
            <>
              <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                Unmatched quality
              </span>
              <br />
              that speaks for itself
            </>
          }
          description=""
        /> */}

        <div className="">
          {/* Dubbing Section */}
          <div className="relative">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent sm:text-3xl">
                AI-Powered Dubbing Solutions
              </h2>
              <p className="text-base text-white/60">
                Preserve Voice Quality, Emotions, Timing, Prosody and 10 other
                voice characteristics. Our AI ensures perfect synchronization
                while maintaining the authenticity of the original performance.
              </p>
            </div>
            <div className="my-7">
              {viemoVideoId.map((videoId) => (
                <VimeoPlayer key={videoId} videoId={videoId} />
              ))}
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex flex-col gap-4 group bg-black/20 rounded-2xl p-4 hover:bg-black/40 transition-colors duration-300 border border-white/20"
                >
                  <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-black/50 transition-all duration-300 group-hover:border-white/20 group-hover:shadow-2xl">
                    <DualVideoPlayer
                      originalVideo={feature.originalVideo}
                      dubVideo={feature.dubVidoe}
                      title={feature.title}
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
          <div className="text-center mt-8">
            <RainbowButton
              className="inline-flex"
              onClick={() => router.push("/demo")}
            >
              See More Demos
            </RainbowButton>
          </div>
          <div>
            {/* Karaoke Section */}
            {/* <div className="relative">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-white via-white to-white/70 bg-clip-text text-transparent sm:text-3xl">
                  Professional Karaoke Solutions
                </h2>
                <p className="text-base text-white/60">
                  Separate vocals and instrumentals for any pre-existing track
                  with unprecedented quality. Create perfectly time-synced
                  subtitles automatically using our advanced AI technology.
                </p>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                {karaokeFeatures.map((feature) => (
                  <div
                    key={feature.title}
                    className="flex flex-col gap-4 group bg-black/20 rounded-2xl p-4 hover:bg-black/40 transition-colors duration-300 border border-white/20"
                  >
                    <div className="relative aspect-video overflow-hidden rounded-xl border border-white/10 bg-black/50 transition-all duration-300 group-hover:border-white/20 group-hover:shadow-2xl">
                      <KaraokePlayer
                        videos={feature.videos}
                        title={feature.videoTitle}
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
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}
