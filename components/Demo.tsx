"use client";

import DualVideoPlayer from "./DualVideoPlayer";
import { RainbowButton } from "./ui/rainbow-button";
import { useRouter } from "next/navigation";
import VimeoPlayer from "./viemoVideoPlayer";
import { SectionHeading } from "./ui/section-heading";

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
    videoTitle: "IAS Princeton",
    originalVideo:
      "https://vz-c5817d00-065.b-cdn.net/1295b06c-6cb9-4771-83cf-f49d49a91420/play_480p.mp4",
    originalFlag: "/assets/img/us-flag.png",
    dubVidoe:
      "https://vz-c5817d00-065.b-cdn.net/b277d050-f483-4080-bca9-2c74b529d425/play_480p.mp4",
    dubFlag: "/assets/img/span-flag.png",
    thumbnail:
      "https://vz-c5817d00-065.b-cdn.net/1295b06c-6cb9-4771-83cf-f49d49a91420/thumbnail_8971f0d3.jpg",
  },
  {
    title: "Technology News",
    description:
      "High-quality, scalable dubs for any genre—fast, seamless multilingual content for YouTube producers",
    type: "dubbing",
    videoTitle: "CNET",
    originalVideo:
      "https://vz-c5817d00-065.b-cdn.net/1a3a5929-a622-4f72-a27b-bafd97f5a5d3/play_720p.mp4",
    originalFlag: "/assets/img/us-flag.png",
    dubVidoe:
      "https://vz-c5817d00-065.b-cdn.net/ec85f725-d68f-46ac-8953-9bba7ecbff30/play_720p.mp4",
    dubFlag: "/assets/img/span-flag.png",
    thumbnail:
      "https://vz-c5817d00-065.b-cdn.net/ec85f725-d68f-46ac-8953-9bba7ecbff30/thumbnail.jpg",
  },
  {
    title: "Precision for Specialized Storytelling",
    description:
      "Designed to adapt across content categories while preserving original accent, spatial effects, non-verbal cues, and emotions.",
    type: "dubbing",
    videoTitle: "MADY MORRISSON",
    originalVideo:
      "https://vz-c5817d00-065.b-cdn.net/86cba5bd-7875-4883-b358-fa82f68af63c/play_720p.mp4",
    originalFlag: "/assets/img/greman_flag.jpg",
    dubVidoe:
      "https://vz-c5817d00-065.b-cdn.net/cce1d0a2-54b5-4fb6-94df-c172f4be9a68/play_720p.mp4",
    dubFlag: "/assets/img/us-flag.png",
    thumbnail:
      "https://vz-c5817d00-065.b-cdn.net/cce1d0a2-54b5-4fb6-94df-c172f4be9a68/thumbnail.jpg",
  },
  {
    title: "High Quality Lip Sync",
    description:
      "Use AI-driven phoneme mapping and emotional analysis to align lip movements with dubbed audio while preserving original emotions.",
    type: "dubbing",
    videoTitle: "LOGITECH",
    originalVideo:
      "https://vz-c5817d00-065.b-cdn.net/ceff1ebf-95b9-40a0-99f8-d1cb9eca1cbd/play_720p.mp4",
    originalFlag: "/assets/img/us-flag.png",
    dubVidoe:
      "https://vz-c5817d00-065.b-cdn.net/9be8ca14-b5c4-4898-be0e-9db9bf57de92/play_720p.mp4",
    dubFlag: "/assets/img/france_flag.webp",
    thumbnail:
      "https://vz-c5817d00-065.b-cdn.net/9be8ca14-b5c4-4898-be0e-9db9bf57de92/thumbnail.jpg",
  },
];

const viemoVideo = [
  {
    id: "1123828162",
    videoTitle: "Money Heist by Netflix",
    title: "Entertainment Content",
    tag: "entertainment-content",
    description:
      "Bringing the world's finest entertainment to every language, powered by Platy Studio's AI dubbing technology. Credits: Netflix.",
  },
  {
    id: "1125079326",
    videoTitle: "EdTech",
    title: "Online Learning Content",
    tag: "edTech-content",
    description:
      "Reimagining how the world learns — bringing every great lesson and educator's voice to every language without any compromise. Credits: Cuemath.",
  },
];

export function Demo() {
  const router = useRouter();

  return (
    <section
      className="relative pt-0 sm:pt-0 lg:pt-0 scroll-mt-[70px] my-12 sm:my-16 md:my-[100px]"
      id="Demo"
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <div>
          <div className="relative">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <SectionHeading
                title={
                  <>
                    <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                      Setting New Standards
                    </span>
                    <br />
                    in quality
                  </>
                }
                description=""
              />
              <p className="font-sans mt-3 text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed flex-grow">
                Preserve Voice Quality, Emotions, Timing, Prosody and 10 other
                voice characteristics. Our AI ensures perfect synchronization
                while maintaining the authenticity of the original performance.
              </p>
            </div>
            <div className="flex flex-col gap-4 my-7">
              {viemoVideo.map((video) => (
                <div
                  id={video.tag}
                  key={video.title}
                  className="flex flex-col gap-4 group bg-black/20 rounded-2xl p-4 hover:bg-black/40 transition-colors duration-300 border border-white/20 scroll-mt-[100px]"
                >
                  <div className="relative aspect-[16/9] overflow-hidden rounded-xl bg-black transition-all duration-300 group-hover:shadow-2xl">
                    <VimeoPlayer
                      key={video.id}
                      videoId={video.id}
                      title={video.videoTitle}
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <h3 className="text-xl font-bold sm:text-2xl">
                      {video.title}
                    </h3>
                    <p className="text-base text-white/60 sm:text-lg">
                      {video.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex flex-col gap-4 group bg-black/20 rounded-2xl p-4 hover:bg-black/40 transition-colors duration-300 border border-white/20"
                >
                  <div className="relative aspect-video overflow-hidden rounded-xl bg-black transition-all duration-300 group-hover:shadow-2xl">
                    <DualVideoPlayer
                      originalVideo={feature.originalVideo}
                      dubVideo={feature.dubVidoe}
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
          <div className="text-center mt-8">
            <RainbowButton
              className="inline-flex"
              onClick={() => router.push("/demo")}
            >
              See More Demos
            </RainbowButton>
          </div>
        </div>
      </div>
    </section>
  );
}
