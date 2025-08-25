"use client";

import DualVideoPlayer from "@/components/DualVideoPlayer";
import { SectionHeading } from "@/components/ui/section-heading";

interface DubbingFeature {
  title: string;
  description: string;
  type: "dubbing";
  videoTitle: string;
  originalVideo: string;
  originalFlag: string;
  dubVideo: string;
  dubFlag: string;
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

    dubVideo:
      "https://res.cloudinary.com/dctta3r6s/video/upload/v1739271314/spanish_Kalyani_PTM_eoia6e.mp4",
    dubFlag: "/assets/img/span-flag.png",
  },
  {
    title: "Technology News",
    description:
      "High-quality, scalable dubs for any genre—fast, seamless multilingual content for YouTube producers",
    type: "dubbing",
    videoTitle: "CNET Humanoid",
    originalVideo:
      "https://res.cloudinary.com/dhrzu6irl/video/upload/v1754934987/CNET_Humanoid_Original_yzz77b.mp4",
    originalFlag: "/assets/img/us-flag.png",

    dubVideo:
      "https://res.cloudinary.com/dctta3r6s/video/upload/v1754932205/Humanoid_CNET_Spanish_LipSync_ekxg7c.mp4",
    dubFlag: "/assets/img/span-flag.png",
  },
  {
    title: "Podcasts and News",
    description:
      "Dub any conversation or interview while preserving original accent, spatial effects, non-verbal cues, and emotions.",
    type: "dubbing",
    videoTitle: "Zelenskyy-Fridman",
    originalVideo:
      "https://res.cloudinary.com/dctta3r6s/video/upload/v1739271244/original_Zelensky_Fridman1_e8uqms.mp4",
    originalFlag: "/assets/img/raussia-flag.png",

    dubVideo:
      "https://res.cloudinary.com/dctta3r6s/video/upload/v1739271243/dub_Zelensky_Fridman1_hezlr4.mp4",
    dubFlag: "/assets/img/us-flag.png",
  },
  {
    title: "High Quality Lip Sync",
    description:
      "Use AI-driven phoneme mapping and emotional analysis to align lip movements with dubbed audio while preserving original emotions.",
    type: "dubbing",
    videoTitle: "Logitech Lipsync",
    originalVideo:
      "https://res.cloudinary.com/dctta3r6s/video/upload/v1754935514/video_edited_uwrubu.mp4",
    originalFlag: "/assets/img/us-flag.png",

    dubVideo:
      "https://res.cloudinary.com/dhrzu6irl/video/upload/f_mp4,vc_h264,q_auto/v1750106565/Logitech_Lipsync_French_i2mdyk.mp4",
    dubFlag: "/assets/img/france_flag.webp",
  },
  {
    title: "Global Politics",
    description:
      "Perfect sync with video and lipsync with the new language for viewing experience that builds customer trust",
    type: "dubbing",
    videoTitle: "CNN News",

    originalVideo:
      "https://res.cloudinary.com/dhrzu6irl/video/upload/v1756151261/Original_ev1mfy.mp4",
    originalFlag: "/assets/img/us-flag.png",

    dubVideo:
      "https://res.cloudinary.com/dhrzu6irl/video/upload/v1756151204/final_output_with_lipsync_iylpxi.mp4",
    dubFlag: "/assets/img/in-flag.png",
  },

  {
    title: "Global News",
    description:
      "Perfect sync with video and lipsync with the new language for viewing experience that builds customer trust",
    type: "dubbing",
    videoTitle: "Firstpost News",

    originalVideo:
      "https://res.cloudinary.com/dhrzu6irl/video/upload/v1756150993/Original_English_evapzd.mp4",
    originalFlag: "/assets/img/us-flag.png",

    dubVideo:
      "https://res.cloudinary.com/dhrzu6irl/video/upload/v1756151052/Hindi_Dub_v2_mt6n9t.mp4",
    dubFlag: "/assets/img/in-flag.png",
  },

  {
    title: "Yoga",
    description:
      "Perfect emotions and feel for most engaging viewing experience",
    type: "dubbing",
    videoTitle: "Mady Morrison",

    originalVideo:
      "https://res.cloudinary.com/dhrzu6irl/video/upload/v1756155957/video_edited_dkehkw.mp4",
    originalFlag: "/assets/img/us-flag.png",

    dubVideo:
      "https://res.cloudinary.com/dhrzu6irl/video/upload/v1756155945/Mady_English_DemoDub_Watermark_foeljf.mp4",
    dubFlag: "/assets/img/in-flag.png",
  },

  {
    title: "Lifestyle",
    description:
      "Perfect background sounds and echo for the most authentic experience",
    type: "dubbing",
    videoTitle: "Never Too Small",

    originalVideo:
      "https://res.cloudinary.com/dhrzu6irl/video/upload/v1756154402/video_edited_nfmvnl.mp4",
    originalFlag: "/assets/img/us-flag.png",

    dubVideo:
      "https://res.cloudinary.com/dhrzu6irl/video/upload/v1756154058/NeverTooSmall_French_Watermark_vkr2yp.mp4",
    dubFlag: "/assets/img/in-flag.png",
  },
  {
    title: "Architecture",
    description:
      "Perfect replication of French Accent into English for the most authentic experience",
    type: "dubbing",
    videoTitle: "Architectural Digest",

    originalVideo:
      "https://res.cloudinary.com/dhrzu6irl/video/upload/v1756155471/video_edited_xk8hkm.mp4",
    originalFlag: "/assets/img/us-flag.png",

    dubVideo:
      "https://res.cloudinary.com/dhrzu6irl/video/upload/v1756155327/Architectural_Digest_EN_dgkrg4.mp4",
    dubFlag: "/assets/img/in-flag.png",
  },

  {
    title: "Turkish Drama",
    description:
      "Perfect time and emotion sync with the original Video",
    type: "dubbing",
    videoTitle: "Ruby Ring",

    originalVideo:
      "https://res.cloudinary.com/dhrzu6irl/video/upload/v1756160779/Original_p1moga.mp4",
    originalFlag: "/assets/img/us-flag.png",

    dubVideo:
      "https://res.cloudinary.com/dhrzu6irl/video/upload/v1756160370/Ruby_Ring_Demo_d9y18y.mp4",
    dubFlag: "/assets/img/in-flag.png",
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
                      title={feature.title}
                      originalFlag={feature.originalFlag}
                      dubFlag={feature.dubFlag}
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
    </section>
  );
}
