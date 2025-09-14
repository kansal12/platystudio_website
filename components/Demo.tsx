"use client";

import { SectionHeading } from "@/components/ui/section-heading";
// import KaraokePlayer from "@/components/karaoke-player";
import DualVideoPlayer from "./DualVideoPlayer";

interface DubbingFeature {
  title: string;
  description: string;
  type: "dubbing";
  videoTitle: string;
  originalVideo: string;
  originalFlag: string;
  // originalLabel: string;
  dubVidoe: string;
  dubFlag: string;
  // dubLable: string;
}

// interface KaraokeFeature {
//   title: string;
//   description: string;
//   type: "karaoke";
//   videoTitle: string;
//   videos: {
//     // full: string;
//     // noVocals: string;
//     // noLyrics: string;
//     original: string;
//     karaoke: string;
//   };
//   // audios: {
//   //   full: string;
//   //   noVocals: string;
//   //   noLyrics: string;
//   // };
// }

const features: Array<DubbingFeature> = [
  // {
  //   title: "In-Studio Conversation",
  //   description:
  //     "Dub any conversation or interview into English or eight other languages while preserving non-verbal cues.",
  //   type: "dubbing",
  //   videoTitle: "Zelenskyy-Fridman",
  //   originalVideo:
  //     "https://res.cloudinary.com/dctta3r6s/video/upload/v1739271244/original_Zelensky_Fridman1_e8uqms.mp4",
  //   originalFlag: "/assets/img/raussia-flag.png",
  //   // originalLabel: "Original",
  //   dubVidoe:
  //     "https://res.cloudinary.com/dctta3r6s/video/upload/v1739271243/dub_Zelensky_Fridman1_hezlr4.mp4",
  //   dubFlag: "/assets/img/us-flag.png",
  //   // dubLable: "Dubbed",
  // },
  // {
  //   title: "On-Location Interview",
  //   description:
  //     "Preserve the on-location background noises and the speaker’s natural accent in the dubbed audio.",
  //   type: "dubbing",
  //   videoTitle: "RAGA-Ravish",
  //   originalVideo:
  //     "https://res.cloudinary.com/dctta3r6s/video/upload/v1739423550/Original_Rahul_and_Ravish_h7kvje.mp4",
  //   originalFlag: "/assets/img/ind-flag.png",
  //   // originalLabel: "Original",
  //   dubVidoe:
  //     "https://res.cloudinary.com/dctta3r6s/video/upload/v1739354378/English_Rahul_and_Ravish2_tjm8wv.mp4",
  //   dubFlag: "/assets/img/us-flag.png",
  //   // dubLable: "Dubbed",
  // },
  // {
  //   title: "Academic Public Talk",
  //   description:
  //     "Professional-grade dubbing that works for technical and academic content while preserving speaker's syle, voice and emotions.",
  //   type: "dubbing",
  //   videoTitle: "Path to Maths- IAS Princeton",

  //   originalVideo:
  //     "https://res.cloudinary.com/dctta3r6s/video/upload/v1739271315/original_Kalyani_PTM_wzer03.mp4",
  //   originalFlag: "/assets/img/us-flag.png",
  //   // originalLabel: "Original",
  //   dubVidoe:
  //     "https://res.cloudinary.com/dctta3r6s/video/upload/v1739271314/spanish_Kalyani_PTM_eoia6e.mp4",
  //   dubFlag: "/assets/img/span-flag.png",
  //   // dubLable: "Dubbed",
  // },
  // {
  //   title: "Hollywood Movie",
  //   description:
  //     "Another example of our high-quality movie dubbing, preserving spatial sounds, emotional depth, and the character’s authenticity.",
  //   type: "dubbing",
  //   videoTitle: "Notting Hill",
  //   originalVideo:
  //     "https://res.cloudinary.com/dctta3r6s/video/upload/v1739271312/English_Notting_Hill_cwc5wf.mp4",
  //   originalFlag: "/assets/img/us-flag.png",
  //   // originalLabel: "Original",
  //   dubVidoe:
  //     "https://res.cloudinary.com/dctta3r6s/video/upload/v1739354379/Spanish_Notting_Hill2_skcg3h.mp4",
  //   dubFlag: "/assets/img/span-flag.png",
  //   // dubLable: "Dubbed",
  // },
  {
    title: "Academic Public Talk",
    description:
      "Professional-grade dubbing that works for technical and academic content while preserving speaker's syle, voice and emotions.",
    type: "dubbing",
    videoTitle: "Path to Maths- IAS Princeton",

    originalVideo:
      "https://vz-c5817d00-065.b-cdn.net/1fb564bc-07b5-45cd-b285-6752197a3c59/play_720p.mp4",
    originalFlag: "/assets/img/us-flag.png",
    // originalLabel: "Original",
    dubVidoe:
      "https://vz-c5817d00-065.b-cdn.net/97cf24ad-077a-4dab-9809-119a38b004ab/play_720p.mp4",
    dubFlag: "/assets/img/span-flag.png",
    thumbnail:
      "https://vz-c5817d00-065.b-cdn.net/97cf24ad-077a-4dab-9809-119a38b004ab/thumbnail.jpg",
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
      "https://vz-c5817d00-065.b-cdn.net/c29da669-2fb2-4d8e-9c08-1db9c7763293/thumbnail.jpg",
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
  // {
  //   title: "Theatrical Quality Global Dubs",
  //   description:
  //     "Seamlessly dub films and dramas into any language—preserving every emotion for a true cinematic experience, at scale.",
  //   type: "dubbing",
  //   videoTitle: "Ruby Ring",
  //   originalVideo:
  //     "https://res.cloudinary.com/dctta3r6s/video/upload/v1739271244/original_Zelensky_Fridman1_e8uqms.mp4",
  //   originalFlag: "/assets/img/raussia-flag.png",
  //   // originalLabel: "Original",
  //   dubVidoe:
  //     "https://res.cloudinary.com/dctta3r6s/video/upload/v1739271243/dub_Zelensky_Fridman1_hezlr4.mp4",
  //   dubFlag: "/assets/img/us-flag.png",
  //   // dubLable: "Dubbed",
  // },
  // {
  //   title: "Expand Your Ads' Global Reach",
  //   description:
  //     "Scale your campaigns effortlessly and connect with millions in their native language.",
  //   type: "dubbing",
  //   videoTitle: "Trip Advisor",
  //   originalVideo:
  //     "https://res.cloudinary.com/dctta3r6s/video/upload/v1739271244/original_Zelensky_Fridman1_e8uqms.mp4",
  //   originalFlag: "/assets/img/raussia-flag.png",
  //   // originalLabel: "Original",
  //   dubVidoe:
  //     "https://res.cloudinary.com/dctta3r6s/video/upload/v1739271243/dub_Zelensky_Fridman1_hezlr4.mp4",
  //   dubFlag: "/assets/img/us-flag.png",
  //   // dubLable: "Dubbed",
  // },
];

// const karaokeFeatures: Array<KaraokeFeature> = [
//   {
//     title: "Professional-Grade Karaoke for OTTs",
//     description:
//       "Turn any song into a high-quality karaoke experience with our advanced audio separation technology.",
//     type: "karaoke",
//     videoTitle: "THE BAR SONG",
//     videos: {
//       // full: "/assets/videos/karaoke_output_bar.mp4",
//       // noVocals: "/assets/videos/karaoke1/no-vocals.mp4",
//       // noLyrics: "/assets/videos/karaoke1/no-lyrics.mp4",
//       original: "/assets/videos/video_song_bar.mp4",
//       karaoke: "/assets/videos/karaoke_output_bar.mp4",
//     },
//     // audios: {
//     //   full: "/assets/audios/song_bar.mp3",
//     //   // noVocals: "/assets/audios/karaoke1/no-vocals.mp3",
//     //   // noLyrics: "/assets/audios/karaoke1/no-lyrics.mp3",
//     //   noVocals: "/assets/audios/karaoke1/no-vocals.mp3",
//     //   noLyrics: "/assets/audios/karaoke1/no-lyrics.mp3",
//     // },
//   },
//   {
//     title: "Works across music genres and languages",
//     description:
//       "Experience perfect vocal isolation and instrumental track creation with our state-of-the-art AI technology.",
//     type: "karaoke",
//     videoTitle: "THE BAR SONG 2",
//     videos: {
//       // full: "/assets/videos/karaoke2/full.mp4",
//       // noVocals: "/assets/videos/karaoke2/no-vocals.mp4",
//       // noLyrics: "/assets/videos/karaoke2/no-lyrics.mp4",
//       original: "/assets/videos/video_song_perfect.mp4",
//       karaoke: "/assets/videos/karaoke_output_perfect.mp4",
//     },
//     // audios: {
//     //   full: "/assets/audios/karaoke2/full.mp3",
//     //   noVocals: "/assets/audios/karaoke2/no-vocals.mp3",
//     //   noLyrics: "/assets/audios/karaoke2/no-lyrics.mp3",
//     // },
//   },
// ];

export function Demo() {
  return (
    <section
      className="relative pt-0 sm:pt-0 lg:pt-0 scroll-mt-[70px]"
      id="Demo"
    >
      <div className="px-4 sm:px-6 lg:px-8">
        <SectionHeading
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
                    <DualVideoPlayer
                      originalVideo={feature.originalVideo}
                      dubVideo={feature.dubVidoe}
                      title={feature.title}
                      originalFlag={feature.originalFlag}
                      dubFlag={feature.dubFlag}
                      thumbnail={feature.thumbnail}
                      // originalLable={feature.originalLabel}
                      // dubLable={feature.dubLable}
                    />
                    {/* <DualVideoPlayer
                      videoSrc="/assets/videos/original_Rahul_and_Ravish.mp4"
                      audioTracks={[
                        {
                          id: "en",
                          label: "English",
                          src: "/assets/audios/Rahul_and_Ravish_english.wav",
                        },
                        {
                          id: "hi",
                          label: "Hindi",
                          src: "/assets/audios/Rahul_and_Ravish_hindi.wav",
                        },
                      ]}
                    /> */}
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
