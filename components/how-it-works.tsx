"use client";

import { SectionHeading } from "@/components/ui/section-heading";
import { LanguageSwitchPlayer } from "@/components/language-switch-player";
import { KaraokePlayer } from "@/components/karaoke-player";

interface DubbingFeature {
  title: string;
  description: string;
  type: "dubbing";
  video: string;
  videoTitle: string;
  languages: Array<{
    src: string;
    flag: string;
    label: string;
  }>;
}

interface KaraokeFeature {
  title: string;
  description: string;
  type: "karaoke";
  videoTitle: string;
  videos: {
    full: string;
    noVocals: string;
    noLyrics: string;
  };
  audios: {
    full: string;
    noVocals: string;
    noLyrics: string;
  };
}

const features: Array<DubbingFeature> = [
  {
    title: "Blog Dubbing",
    description:
      "Transform your blog content into engaging multilingual video presentations with natural voice synthesis.",
    type: "dubbing",
    video: "/assets/videos/video2.mp4",
    videoTitle: "BLOG DEMO",
    languages: [
      {
        src: "/assets/audios/blog/en.mp3",
        flag: "/assets/img/us-flag.png",
        label: "English",
      },
      {
        src: "/assets/audios/blog/es.mp3",
        flag: "/assets/img/span-flag.png",
        label: "Spanish",
      },
      {
        src: "/assets/audios/blog/hi.mp3",
        flag: "/assets/img/ind-flag.png",
        label: "Hindi",
      },
    ],
  },
  {
    title: "Website Narration",
    description:
      "Add professional voiceovers to your website content in multiple languages to enhance user engagement.",
    type: "dubbing",
    video: "/assets/videos/video2.mp4",
    videoTitle: "WEBSITE DEMO",
    languages: [
      {
        src: "/assets/audios/website/en.mp3",
        flag: "/assets/img/us-flag.png",
        label: "English",
      },
      {
        src: "/assets/audios/website/es.mp3",
        flag: "/assets/img/span-flag.png",
        label: "Spanish",
      },
      {
        src: "/assets/audios/website/hi.mp3",
        flag: "/assets/img/ind-flag.png",
        label: "Hindi",
      },
    ],
  },
  {
    title: "Movie Dubbing",
    description:
      "Professional-grade movie dubbing that preserves emotional depth and character authenticity.",
    type: "dubbing",
    video: "/assets/videos/video2.mp4",
    videoTitle: "MOVIE DEMO 1",
    languages: [
      {
        src: "/assets/audios/movie1/en.mp3",
        flag: "/assets/img/us-flag.png",
        label: "English",
      },
      {
        src: "/assets/audios/movie1/es.mp3",
        flag: "/assets/img/span-flag.png",
        label: "Spanish",
      },
      {
        src: "/assets/audios/movie1/hi.mp3",
        flag: "/assets/img/ind-flag.png",
        label: "Hindi",
      },
    ],
  },
  {
    title: "Movie Dubbing 2",
    description:
      "Another example of our high-quality movie dubbing capabilities across different genres.",
    type: "dubbing",
    video: "/assets/videos/video2.mp4",
    videoTitle: "MOVIE DEMO 2",
    languages: [
      {
        src: "/assets/audios/movie2/en.mp3",
        flag: "/assets/img/us-flag.png",
        label: "English",
      },
      {
        src: "/assets/audios/movie2/es.mp3",
        flag: "/assets/img/span-flag.png",
        label: "Spanish",
      },
      {
        src: "/assets/audios/movie2/hi.mp3",
        flag: "/assets/img/ind-flag.png",
        label: "Hindi",
      },
    ],
  },
];

const karaokeFeatures: Array<KaraokeFeature> = [
  {
    title: "Professional Karaoke Creation",
    description:
      "Transform any song into a professional karaoke experience with our advanced audio separation technology.",
    type: "karaoke",
    videoTitle: "THE BAR SONG",
    videos: {
      full: "/assets/videos/karaoke1/full.mp4",
      noVocals: "/assets/videos/karaoke1/no-vocals.mp4",
      noLyrics: "/assets/videos/karaoke1/no-lyrics.mp4",
    },
    audios: {
      full: "/assets/audios/karaoke1/full.mp3",
      noVocals: "/assets/audios/karaoke1/no-vocals.mp3",
      noLyrics: "/assets/audios/karaoke1/no-lyrics.mp3",
    },
  },
  {
    title: "Advanced Karaoke Studio",
    description:
      "Experience perfect vocal isolation and instrumental track creation with our state-of-the-art AI technology.",
    type: "karaoke",
    videoTitle: "THE BAR SONG 2",
    videos: {
      full: "/assets/videos/karaoke2/full.mp4",
      noVocals: "/assets/videos/karaoke2/no-vocals.mp4",
      noLyrics: "/assets/videos/karaoke2/no-lyrics.mp4",
    },
    audios: {
      full: "/assets/audios/karaoke2/full.mp3",
      noVocals: "/assets/audios/karaoke2/no-vocals.mp3",
      noLyrics: "/assets/audios/karaoke2/no-lyrics.mp3",
    },
  },
];

export function HowItWorks() {
  return (
    <section className="relative pt-0 sm:pt-0 lg:pt-0" id="how-it-works">
      <div className="px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={
            <>
              <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
                Unmatched quality
              </span>{" "}
              <br />
              that speaks for itself
            </>
          }
          description=""
        />

        <div className="mt-20 sm:mt-24 lg:mt-32 space-y-24">
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
                    <LanguageSwitchPlayer
                      video={feature.video}
                      title={feature.videoTitle}
                      languages={feature.languages}
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

          {/* Karaoke Section */}
          <div className="relative">
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
          </div>
        </div>
      </div>
    </section>
  );
}
