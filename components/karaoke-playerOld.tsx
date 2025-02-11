"use client";

import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  Play,
  Pause,
  RotateCcw,
  // Music,
  // MicOffIcon as MusicOff,
  // Subtitles,
} from "lucide-react";
import Slider from "./ui/slider";
// import { useVideoPlayer } from "@/contexts/video-player-context";
import { useInView } from "react-intersection-observer";
import { Button } from "@/components/ui/button";
// import { ModeButton } from "@/components/ui/mode-button";

// type VideoMode = "full" | "noVocals" | "noLyrics";
type VideoMode = "original" | "karaoke";

interface KaraokePlayerProps {
  videos: {
    // full: string;
    // noVocals: string;
    // noLyrics: string;
    original: string;
    karaoke: string;
  };
  title?: string;
}

export function KaraokePlayer({ videos, title }: KaraokePlayerProps) {
  // const playerId = useId();
  // const { setCurrentPlayingId } = useVideoPlayer();
  const [currentPlayingVideo, setCurrentPlayingVideo] =
    useState<VideoMode>("original");
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(true);

  // const [selectedModes, setSelectedModes] = useState<Set<VideoMode>>(
  //   new Set(["full"])
  // );
  const [showReplayButton, setShowReplayButton] = useState(false);
  const isTransitioning = false;
  // const [isTransitioning, setIsTransitioning] = useState(false);
  const isDragging = false;

  const videoRefs = useRef<{ [key in VideoMode]: HTMLVideoElement | null }>({
    // full: null,
    // noVocals: null,
    // noLyrics: null,
    original: null,
    karaoke: null,
  });

  const containerElementRef = useRef<HTMLDivElement>(null);
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.5,
  });

  // Combine refs
  const setRefs = (element: HTMLDivElement | null) => {
    containerElementRef.current = element;
    inViewRef(element);
  };

  // Listen for global pause events
  // useEffect(() => {
  //   const handlePauseOthers = (
  //     e: CustomEvent<{ currentId: string | null }>
  //   ) => {
  //     if (e.detail.currentId !== playerId && isPlaying) {
  //       Object.values(videoRefs.current).forEach((video) => video?.pause());
  //       setIsPlaying(false);
  //     }
  //   };

  //   window.addEventListener(
  //     "pauseOtherPlayers",
  //     handlePauseOthers as EventListener
  //   );
  //   return () => {
  //     window.removeEventListener(
  //       "pauseOtherPlayers",
  //       handlePauseOthers as EventListener
  //     );
  //   };
  // }, [playerId, isPlaying]);

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const getCurrentVideo = () => {
    // if (selectedModes.has("noVocals") && selectedModes.has("noLyrics")) {
    //   return videoRefs.current.noVocals; // Both modes selected
    // } else if (selectedModes.has("noVocals")) {
    //   return videoRefs.current.noVocals;
    // } else if (selectedModes.has("noLyrics")) {
    //   return videoRefs.current.noLyrics;
    // }
    // return videoRefs.current.full;
    if (currentPlayingVideo === "karaoke") {
      return videoRefs.current.karaoke;
    }
    return videoRefs.current.original;
  };

  const togglePlayPause = () => {
    const currentVideo = getCurrentVideo();
    if (!currentVideo) return;

    if (isPlaying) {
      currentVideo.pause();
      // setCurrentPlayingId(null);
    } else {
      currentVideo.play();
      // setCurrentPlayingId(playerId);
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (value: number) => {
    const newTime = value;
    if (!Number.isFinite(newTime)) return;

    Object.values(videoRefs.current).forEach((video) => {
      if (video) video.currentTime = newTime;
    });
    setCurrentTime(newTime);
  };

  // const toggleMode = (mode: VideoMode) => {
  //   setIsTransitioning(true);
  //   const newModes = new Set(selectedModes);

  //   if (mode === "full") {
  //     newModes.clear();
  //     newModes.add("full");
  //   } else {
  //     newModes.delete("full");
  //     if (newModes.has(mode)) {
  //       newModes.delete(mode);
  //       if (newModes.size === 0) newModes.add("full");
  //     } else {
  //       newModes.add(mode);
  //     }
  //   }

  //   const currentTime = getCurrentVideo()?.currentTime || 0;
  //   Object.values(videoRefs.current).forEach((video) => {
  //     if (video) video.currentTime = currentTime;
  //   });

  //   setSelectedModes(newModes);
  //   setTimeout(() => setIsTransitioning(false), 300);
  // };

  // const handleGenerateKaraoke = () => {
  //   const newModes = new Set<VideoMode>(["noVocals", "noLyrics"]);
  //   setSelectedModes(newModes);

  //   const currentTime = getCurrentVideo()?.currentTime || 0;
  //   Object.values(videoRefs.current).forEach((video) => {
  //     if (video) video.currentTime = currentTime;
  //   });

  //   if (isPlaying) {
  //     videoRefs.current.noVocals?.play();
  //   }
  // };

  const playOriginal = () => {
    setCurrentPlayingVideo("original");
    const currentTime = getCurrentVideo()?.currentTime || 0;
    Object.values(videoRefs.current).forEach((video) => {
      if (video) {
        video.currentTime = currentTime;
        video.pause();
      }
    });
    videoRefs.current.original?.play();
    setIsPlaying(true);
  };
  const playKaraoke = () => {
    setCurrentPlayingVideo("karaoke");
    const currentTime = getCurrentVideo()?.currentTime || 0;
    Object.values(videoRefs.current).forEach((video) => {
      if (video) {
        video.currentTime = currentTime;
        video.pause();
      }
    });
    videoRefs.current.karaoke?.play();
    setIsPlaying(true);
  };

  const handleReplay = () => {
    const currentVideo = getCurrentVideo();
    if (!currentVideo) return;

    currentVideo.currentTime = 0;
    currentVideo.play();
    setIsPlaying(true);
    setShowReplayButton(false);
    // setCurrentPlayingId(playerId);
  };

  useEffect(() => {
    const currentVideo = getCurrentVideo();
    if (!currentVideo) return;

    const handleTimeUpdate = () => {
      if (!isDragging) {
        setCurrentTime(currentVideo.currentTime);
      }
    };

    const handleLoadedMetadata = () => {
      setDuration(currentVideo.duration);
      setCurrentTime(0);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setShowReplayButton(true);
      // setCurrentPlayingId(null);
    };

    currentVideo.addEventListener("timeupdate", handleTimeUpdate);
    currentVideo.addEventListener("loadedmetadata", handleLoadedMetadata);
    currentVideo.addEventListener("ended", handleEnded);

    return () => {
      currentVideo.removeEventListener("timeupdate", handleTimeUpdate);
      currentVideo.removeEventListener("loadedmetadata", handleLoadedMetadata);
      currentVideo.removeEventListener("ended", handleEnded);
    };
  }, [isDragging]);
  // }, [isDragging, setCurrentPlayingId, selectedModes]);

  // Handle clicks outside the player
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerElementRef.current &&
        !containerElementRef.current.contains(event.target as Node) &&
        isPlaying
      ) {
        setShowControls(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isPlaying]);

  useEffect(() => {
    if (!inView && isPlaying) {
      getCurrentVideo()?.pause();
      setIsPlaying(false);
      // setCurrentPlayingId(null);
    }
  }, [inView, isPlaying]);
  // }, [inView, isPlaying, setCurrentPlayingId, selectedModes]);

  // const modes = [
  //   { id: "full" as const, label: "Full", icon: Music },
  //   { id: "noVocals" as const, label: "No Vocals", icon: MusicOff },
  //   { id: "noLyrics" as const, label: "No Lyrics", icon: Subtitles },
  // ];

  return (
    <div
      ref={setRefs}
      className="relative group/player overflow-hidden rounded-lg border border-slate-200/20 bg-slate-100/10"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => isPlaying && setShowControls(false)}
      onMouseMove={() => setShowControls(true)}
    >
      <div className="relative aspect-video bg-black">
        {Object.entries(videos).map(([mode, src]) => (
          <video
            key={mode}
            ref={(el) => {
              videoRefs.current[mode as VideoMode] = el;
            }}
            src={src}
            className={cn(
              "absolute inset-0 h-full w-full transition-opacity duration-300",
              currentPlayingVideo === mode ? "block" : "hidden"
            )}
            playsInline
          />
        ))}

        {title && (
          <div className="absolute left-3 sm:left-4 top-3 sm:top-4 text-xs sm:text-sm font-medium bg-black/80 text-white rounded-md px-2 py-1 uppercase">
            {title}
          </div>
        )}

        <div
          className={cn(
            "absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-300",
            showControls ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={showReplayButton ? handleReplay : togglePlayPause}
              className={cn(
                "flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-transform hover:scale-105 hover:bg-white/20",
                "active:scale-95",
                isTransitioning && "opacity-50 cursor-not-allowed"
              )}
              disabled={isTransitioning}
            >
              {showReplayButton ? (
                <RotateCcw className="h-6 w-6 sm:h-8 sm:w-8" />
              ) : isPlaying ? (
                <Pause className="h-6 w-6 sm:h-8 sm:w-8" />
              ) : (
                <Play className="h-6 w-6 sm:h-8 sm:w-8 pl-0.5 sm:pl-1" />
              )}
            </button>
          </div>

          <div className="absolute bottom-0 left-0 right-0 flex flex-col gap-1.5 sm:gap-2 md:gap-4 p-2 sm:p-3 md:p-4">
            <div className="flex items-center justify-start gap-2 sm:gap-3">
              {/* <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2 min-w-0">
                {modes.map(({ id, icon: Icon }) => (
                  <ModeButton
                    key={id}
                    icon={Icon}
                    isSelected={selectedModes.has(id)}
                    onClick={() => toggleMode(id)}
                  />
                ))}
                <span className="ml-1 sm:ml-1.5 md:ml-2 text-[10px] sm:text-xs md:text-sm font-medium text-white truncate">
                  {selectedModes.size > 1
                    ? `${Array.from(selectedModes).join(" + ")}`
                    : modes.find((m) => m.id === Array.from(selectedModes)[0])
                        ?.label || "Select mode"}
                </span>
              </div> 
              <Button
                variant="default"
                size="sm"
                className="h-6 px-2 text-[10px] sm:text-xs whitespace-nowrap shrink-0 font-medium py-0"
                onClick={handleGenerateKaraoke}
              >
                Generate Karaoke
              </Button> */}
              <Button
                variant="default"
                size="sm"
                className={`h-6 px-2 text-[10px] sm:text-xs whitespace-nowrap shrink-0 font-medium py-0  ${
                  currentPlayingVideo === "original"
                    ? "opacity-100"
                    : "opacity-50"
                }`}
                onClick={playOriginal}
              >
                original
              </Button>
              <Button
                variant="default"
                size="sm"
                className={`h-6 px-2 text-[10px] sm:text-xs whitespace-nowrap shrink-0 font-medium  py-0 ${
                  currentPlayingVideo === "karaoke"
                    ? "opacity-100"
                    : "opacity-50"
                }`}
                onClick={playKaraoke}
              >
                karaoke
              </Button>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2">
              <Slider
                value={currentTime}
                max={duration}
                step={0.1}
                onChange={handleSeek}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
