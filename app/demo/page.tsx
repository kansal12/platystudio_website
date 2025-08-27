"use client";

import DualVideoPlayer from "@/components/DualVideoPlayer";
import { SectionHeading } from "@/components/ui/section-heading";

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
      "https://res.cloudinary.com/dhrzu6irl/video/upload/v1756151261/Original_ev1mfy.mp4",
    originalFlag: "/assets/img/us-flag.png",

    dubVideo:
      "https://res.cloudinary.com/dhrzu6irl/video/upload/v1756151204/final_output_with_lipsync_iylpxi.mp4",
    dubFlag: "/assets/img/ind-flag.png",
    thumbnail: "https://res.cloudinary.com/dhrzu6irl/image/upload/v1756251375/CNN_rrfmgi.jpg",
  },
  {
    id: 2,
    title: "Lip Synchronization in 4K",
    description:
      "Delivering precise mouth movement synchronization for ultra-realistic video dubbing and localization for any video resolution.",
    type: "dubbing",
    videoTitle: "Lip Sync",
    originalVideo:
      "https://res.cloudinary.com/dctta3r6s/video/upload/v1754935514/video_edited_uwrubu.mp4",
    originalFlag: "/assets/img/us-flag.png",

    dubVideo:
      "https://res.cloudinary.com/dhrzu6irl/video/upload/v1756252576/Logitech_Lipsync_French.mp4-2_flzxeb.mp4",
    dubFlag: "/assets/img/france_flag.webp",
    thumbnail: "",
  },
  {
    id: 3,
    title: "Immersive Voice Replication",
    description:
      "Blending multiple voice and sound layers to create rich, cinematic audio experiences that feel natural and multidimensional.",
    type: "dubbing",
    videoTitle: "Multi-spatial Cloning",
    
    originalVideo:
      "https://res.cloudinary.com/dhrzu6irl/video/upload/v1756160779/Original_p1moga.mp4",
    originalFlag: "/assets/img/turkey_flag.png",

    dubVideo:
      "https://res.cloudinary.com/dhrzu6irl/video/upload/v1756160370/Ruby_Ring_Demo_d9y18y.mp4",
    dubFlag: "/assets/img/us-flag.png",
    thumbnail: "",
  },
  {
    id: 4,
    title: "Adaptive Vocal Presence",
    description:
      "Modulating tone, clarity, and projection to ensure voices remain consistent and impactful across diverse mic locations.",
    type: "dubbing",
    videoTitle: "Multi-spatial Cloning",
    originalVideo:
      "https://res.cloudinary.com/dhrzu6irl/video/upload/v1756154402/video_edited_nfmvnl.mp4",
    originalFlag: "/assets/img/en-flag.webp",

    dubVideo:
      "https://res.cloudinary.com/dhrzu6irl/video/upload/v1756154058/NeverTooSmall_French_Watermark_vkr2yp.mp4",
    dubFlag: "/assets/img/france_flag.webp",
    thumbnail: "",
  },
  {
    id: 5,
    title: "Big Screen to Shorts",
    description: "Maintain cinematic excellence even in bite-sized, attention-grabbing clips.",
    type: "dubbing",
    videoTitle: "Long form to Reels",

    originalVideo:
      "https://res.cloudinary.com/dhrzu6irl/video/upload/v1756252918/Original_cxgfbs.mp4",
    originalFlag: "/assets/img/us-flag.png",

    dubVideo:
      "https://res.cloudinary.com/dhrzu6irl/video/upload/v1756252887/Dubbed_Lipsync_Watermark_pokwef.mp4",
    dubFlag: "/assets/img/greek_flag.png",
    thumbnail: "https://res.cloudinary.com/dhrzu6irl/image/upload/v1756254993/Roundglass_umlcxj.jpg",
  },

  {
    id: 6,
    title: "Format flexibility",
    description:
      "Precise, impactful dubbing for bite-sized reels, adapting to changing voices and mic positions.",
    type: "dubbing",
    videoTitle: " Long form to Reels",

    originalVideo:
      "https://res.cloudinary.com/dhrzu6irl/video/upload/v1747559039/p34wd2dcx2wsjxcxa5os.mp4",
    originalFlag: "/assets/img/us-flag.png",

    dubVideo:
      "https://res.cloudinary.com/dhrzu6irl/video/upload/v1756256072/Dubbed.mp4_thlwxa.mp4",
    dubFlag: "/assets/img/span-flag.png",
    thumbnail: "",
  },

  {
    id: 7,
    title: "Precision for Specialized Storytelling",
    description:
      "Designed to adapt across specialized content categories like yoga and wellness.",
    type: "dubbing",
    videoTitle: "Niche Content",

    originalVideo:
      "https://res.cloudinary.com/dhrzu6irl/video/upload/v1756155957/video_edited_dkehkw.mp4",
    originalFlag: "/assets/img/span-flag.png",

    dubVideo:
      "https://res.cloudinary.com/dhrzu6irl/video/upload/v1756155945/Mady_English_DemoDub_Watermark_foeljf.mp4",
    dubFlag: "/assets/img/us-flag.png",
    thumbnail: "",
  },

  {
    id: 8,
    title: "Customized for every Genre",
    description:
      "Purpose-built to capture the nuances of unique content types, helping creators connect deeply with targeted communities.",
    type: "dubbing",
    videoTitle: "Niche Content",

    originalVideo:
      "https://res.cloudinary.com/dhrzu6irl/video/upload/v1754934987/CNET_Humanoid_Original_yzz77b.mp4",
    originalFlag: "/assets/img/us-flag.png",

    dubVideo:
      "https://res.cloudinary.com/dctta3r6s/video/upload/v1754932205/Humanoid_CNET_Spanish_LipSync_ekxg7c.mp4",
    dubFlag: "/assets/img/span-flag.png",
    thumbnail: "https://res.cloudinary.com/dhrzu6irl/image/upload/v1756254711/CNET_dd5yt7.jpg",
  },
  {
    id: 9,
    title: "Accent Authenticity at Scale",
    description:
      "Harness AI to reproduce and shift accents effortlessly, ensuring speech remains authentic across global audiences and content formats",
    type: "dubbing",
    videoTitle: "Multiple Accents",

    originalVideo:
      "https://res.cloudinary.com/dhrzu6irl/video/upload/v1756155471/video_edited_xk8hkm.mp4",
    originalFlag: "/assets/img/france_flag.webp",

    dubVideo:
      "https://res.cloudinary.com/dhrzu6irl/video/upload/v1756155327/Architectural_Digest_EN_dgkrg4.mp4",
    dubFlag: "/assets/img/us-flag.png",
    thumbnail: "https://res.cloudinary.com/dhrzu6irl/image/upload/v1756255180/Architectural_Digest_tsk8t7.jpg",
  },

  {
    id: 10,
    title: "Global Accent Versatility",
    description:
      "Faithfully replicate native accents or transform them for your customers, enabling seamless localization and culturally resonant dubbing.",
    type: "dubbing",
    videoTitle: "Multiple Accents",

    originalVideo:
      "https://res.cloudinary.com/dhrzu6irl/video/upload/v1756254062/Original_after19_bszjkz.mp4",
    originalFlag: "/assets/img/us-flag.png",

    dubVideo:
      "https://res.cloudinary.com/dhrzu6irl/video/upload/v1756254029/Dubbed_after19_sbjxkt.mp4",
    dubFlag: "/assets/img/ind-flag.png",
    thumbnail: "https://res.cloudinary.com/dhrzu6irl/image/upload/v1756253622/thumbnail_yrkxpu.jpg",
  },
];

export default function Demos() {
  return (
    <section
      className="mt-24 relative pt-0 sm:pt-0 lg:pt-0 scroll-mt-[70px]"
      id="Demo"
    >
      <SectionHeading
        title={
          <div className="sm:py-24 lg:py-12">
            <span className=" bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Unmatched quality
            </span>
            <br />
            that speaks for itself
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
                AI-Powered Dubbing Solutions
              </h2>
              <p className="text-base text-white/60">
                Preserve Voice Quality, Emotions, Timing, Prosody and 10 other
                voice characteristics. Our AI ensures perfect synchronization
                while maintaining the authenticity of the original performance.
              </p>
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
