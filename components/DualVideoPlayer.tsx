import React, { useEffect, useId, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Play, Pause, RotateCcw } from "lucide-react";
import { FlagButton } from "@/components/ui/flag-button";
import Slider from "./ui/slider";
import { Button } from "./ui/button";
import { useVideoPlayer } from "@/contexts/video-player-context";

interface DualVideoPlayerProps {
  originalVideo: string;
  dubVideo: string;
  title: string;
  originalFlag: string;
  dubFlag: string;
  thumbnail?: string;
}
type videoType = "original" | "dub";
const DualVideoPlayer: React.FC<DualVideoPlayerProps> = ({
  originalVideo,
  dubVideo,
  title,
  originalFlag,
  dubFlag,
  thumbnail,
}) => {
  const originalVideoRef = useRef<HTMLVideoElement>(null);
  const dubVideoRef = useRef<HTMLVideoElement>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [activeVideo, setActiveVideo] = useState<videoType>("original");
  const [duration, setDuration] = useState<number>(0);
  const [showControls, setShowControls] = useState<boolean>(true);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [showReplayButton, setShowReplayButton] = useState<boolean>(false);

  const playerId = useId();
  const { setCurrentPlayingId } = useVideoPlayer();

  // Listen for global pause events
  useEffect(() => {
    const handlePauseOthers = (
      e: CustomEvent<{ currentId: string | null }>
    ) => {
      if (e.detail.currentId !== playerId && isPlaying) {
        if (activeVideo === "original" && originalVideoRef.current)
          originalVideoRef.current.pause();
        if (activeVideo === "dub" && dubVideoRef.current)
          dubVideoRef.current.pause();
        setIsPlaying(false);
      }
    };

    window.addEventListener(
      "pauseOtherPlayers",
      handlePauseOthers as EventListener
    );
    return () => {
      window.removeEventListener(
        "pauseOtherPlayers",
        handlePauseOthers as EventListener
      );
    };
  }, [playerId, isPlaying, activeVideo]);

  useEffect(() => {
    // Preload both videos to ensure smooth transition
    if (originalVideoRef.current) originalVideoRef.current.load();
    if (dubVideoRef.current) dubVideoRef.current.load();
  }, [originalVideo, dubVideo]);

  const handlePlay = (videoType: videoType) => {
    setCurrentPlayingId(playerId);
    if (videoType === "original") {
      if (dubVideoRef.current) dubVideoRef.current.pause();
      if (originalVideoRef.current) {
        originalVideoRef.current.currentTime = currentTime;
        originalVideoRef.current.play();
        setActiveVideo("original");
      }
    } else {
      if (originalVideoRef.current) originalVideoRef.current.pause();
      if (dubVideoRef.current) {
        dubVideoRef.current.currentTime = currentTime;
        dubVideoRef.current.play();
        setActiveVideo("dub");
      }
    }
    setIsPlaying(true);
  };

  const handleTimeUpdate = () => {
    if (activeVideo === "original" && originalVideoRef.current) {
      setCurrentTime(originalVideoRef.current.currentTime);
    } else if (activeVideo === "dub" && dubVideoRef.current) {
      setCurrentTime(dubVideoRef.current.currentTime);
    }
    if (originalVideoRef.current && dubVideoRef.current) {
      const maxDuration = Math.max(
        originalVideoRef.current.duration || 0,
        dubVideoRef.current.duration || 0
      );

      setDuration(maxDuration);
    }
  };

  const handleSeek = (value: number) => {
    const newTime = value;
    setCurrentTime(newTime);
    if (originalVideoRef.current)
      originalVideoRef.current.currentTime = newTime;
    if (dubVideoRef.current) dubVideoRef.current.currentTime = newTime;
  };

  const handleReplay = () => {
    setCurrentPlayingId(playerId);
    if (activeVideo === "original" && originalVideoRef.current) {
      originalVideoRef.current.play();
      setActiveVideo("original");
    } else if (activeVideo === "dub" && dubVideoRef.current) {
      dubVideoRef.current.play();
      setActiveVideo("dub");
    }
    setIsPlaying(true);
    setShowReplayButton(false);
  };

  const togglePlayPause = () => {
    if (isPlaying) {
      if (activeVideo === "original" && originalVideoRef.current)
        originalVideoRef.current.pause();
      if (activeVideo === "dub" && dubVideoRef.current)
        dubVideoRef.current.pause();
      setIsPlaying(false);
    } else {
      setCurrentPlayingId(playerId);
      if (activeVideo === "original" && originalVideoRef.current) {
        originalVideoRef.current.play();
      }
      if (activeVideo === "dub" && dubVideoRef.current) {
        dubVideoRef.current.play();
      }
      setIsPlaying(true);
    }
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setShowReplayButton(true);
  };

  return (
    <div
      className="relative group/player overflow-hidden rounded-lg border border-slate-200/20 bg-slate-100/10"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => isPlaying && setShowControls(false)}
      onMouseMove={() => setShowControls(true)}
    >
      <div className="relative aspect-video bg-black">
        {isLoading && (
          <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
        )}
        <video
          ref={originalVideoRef}
          className="h-full w-full"
          onLoadedData={() => setIsLoading(false)}
          poster={thumbnail}
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleEnded}
          style={
            activeVideo === "original"
              ? { display: "block" }
              : { display: "none" }
          }
          playsInline
          preload="true"
        >
          <source src={originalVideo} type="video/mp4" />
        </video>
        <video
          ref={dubVideoRef}
          poster={thumbnail}
          onLoadedData={() => setIsLoading(false)}
          className="h-full w-full"
          style={
            activeVideo === "dub" ? { display: "block" } : { display: "none" }
          }
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => setShowReplayButton(true)}
          playsInline
          preload="true"
        >
          <source src={dubVideo} type="video/mp4" />
        </video>
      </div>

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
              "active:scale-95"
            )}
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
          <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
            <Button
              variant="default"
              size="sm"
              className={`h-6 sm:h-8 px-2 text-[10px] sm:text-xs whitespace-nowrap shrink-0 font-medium py-0  ${
                activeVideo === "original"
                  ? "opacity-100 outline outline-2 outline-[#9333ea]"
                  : "opacity-75 "
              }`}
              onClick={() => handlePlay("original")}
            >
              <FlagButton
                key={"original"}
                flag={originalFlag}
                label={"original"}
              />
              Original
            </Button>
            <Button
              variant="default"
              size="sm"
              className={`h-6 sm:h-8 px-2 box-border text-[10px] sm:text-xs whitespace-nowrap shrink-0 font-medium  py-0 ${
                activeVideo === "dub"
                  ? "opacity-100 outline outline-2 outline-[#9333ea]"
                  : "opacity-75"
              }`}
              onClick={() => handlePlay("dub")}
            >
              <FlagButton key={"dub"} flag={dubFlag} label={"dub"} />
              Dubbed
            </Button>
          </div>

          <div className="flex items-center gap-1.5 sm:gap-2">
            <Slider
              value={currentTime}
              max={duration}
              step={0.01}
              onChange={handleSeek}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DualVideoPlayer;
