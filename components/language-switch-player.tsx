"use client";

import { useState, useRef, useEffect, useId } from "react";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { Play, Pause, RotateCcw } from "lucide-react";
import { useVideoPlayer } from "@/contexts/video-player-context";
import { useInView } from "react-intersection-observer";
import { FlagButton } from "@/components/ui/flag-button";

interface Language {
  src: string;
  flag: string;
  label: string;
}

interface LanguageSwitchPlayerProps {
  video: string;
  languages?: Language[];
  title?: string;
}

type AudioRefs = {
  [key: string]: HTMLAudioElement | null;
};

export function LanguageSwitchPlayer({
  video,
  languages = [],
  title,
}: LanguageSwitchPlayerProps) {
  const playerId = useId();
  const { setCurrentPlayingId } = useVideoPlayer();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(true);
  const [currentLangIndex, setCurrentLangIndex] = useState(0);
  const [showReplayButton, setShowReplayButton] = useState(false);
  const isDragging = false;
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRefs = useRef<AudioRefs>({});

  const containerElementRef = useRef<HTMLDivElement>(null);
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.5,
  });

  // Combine refs
  const setRefs = (element: HTMLDivElement | null) => {
    containerElementRef.current = element;
    inViewRef(element);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const togglePlayPause = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      Object.values(audioRefs.current).forEach((audio) => audio?.pause());
      setCurrentPlayingId(null);
    } else {
      videoRef.current.play();
      audioRefs.current[`lang${currentLangIndex}`]?.play();
      setCurrentPlayingId(playerId);
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (value: number[]) => {
    if (!videoRef.current) return;
    const newTime = value[0];
    if (Number.isFinite(newTime)) {
      videoRef.current.currentTime = newTime;
      Object.values(audioRefs.current).forEach((audio) => {
        if (audio) audio.currentTime = newTime;
      });
      setCurrentTime(newTime);
    }
  };

  const handleLanguageSwitch = (index: number) => {
    if (!videoRef.current || index >= languages.length) return;

    const currentTime = videoRef.current.currentTime;
    audioRefs.current[`lang${currentLangIndex}`]?.pause();

    const newAudio = audioRefs.current[`lang${index}`];
    if (newAudio) {
      newAudio.currentTime = currentTime;
      if (isPlaying) newAudio.play();
    }

    setCurrentLangIndex(index);
  };

  const handleReplay = () => {
    if (!videoRef.current || !audioRefs.current[`lang${currentLangIndex}`])
      return;
    videoRef.current.currentTime = 0;
    audioRefs.current[`lang${currentLangIndex}`]!.currentTime = 0;
    videoRef.current.play();
    audioRefs.current[`lang${currentLangIndex}`]!.play();
    setIsPlaying(true);
    setShowReplayButton(false);
    setCurrentPlayingId(playerId);
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      if (!isDragging) {
        setCurrentTime(video.currentTime);
      }
    };

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
      setCurrentTime(0);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      setShowReplayButton(true);
      setCurrentPlayingId(null);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("ended", handleEnded);

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("ended", handleEnded);
    };
  }, [isDragging, setCurrentPlayingId]);

  useEffect(() => {
    if (!inView && isPlaying) {
      videoRef.current?.pause();
      Object.values(audioRefs.current).forEach((audio) => audio?.pause());
      setIsPlaying(false);
      setCurrentPlayingId(null);
    }
  }, [inView, isPlaying, setCurrentPlayingId]);

  const setAudioRef = (key: string, el: HTMLAudioElement | null) => {
    audioRefs.current[key] = el;
  };

  useEffect(() => {
    const handlePauseOthers = (
      e: CustomEvent<{ currentId: string | null }>
    ) => {
      if (e.detail.currentId !== playerId && isPlaying) {
        videoRef.current?.pause();
        Object.values(audioRefs.current).forEach((audio) => audio?.pause());
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
  }, [playerId, isPlaying]);

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

  return (
    <div
      ref={setRefs}
      className="relative group/player overflow-hidden rounded-lg border border-slate-200/20 bg-slate-100/10"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => isPlaying && setShowControls(false)}
      onMouseMove={() => setShowControls(true)}
    >
      <div className="relative aspect-video bg-black">
        <video
          ref={videoRef}
          src={video}
          // poster="/assets/img/thumbnail-d.png"
          className="h-full w-full"
          playsInline
          muted
        />

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
              {languages.map((lang, index) => (
                <FlagButton
                  key={index}
                  flag={lang.flag}
                  label={lang.label}
                  isSelected={currentLangIndex === index}
                  onClick={() => handleLanguageSwitch(index)}
                />
              ))}
              <span className="ml-1.5 sm:ml-2 text-xs sm:text-sm font-medium text-white">
                {languages[currentLangIndex]?.label || "Select language"}
              </span>
            </div>

            <div className="flex items-center gap-1.5 sm:gap-2">
              <span className="min-w-[35px] sm:min-w-[40px] text-center text-xs sm:text-sm text-white/80">
                {formatTime(currentTime)}
              </span>
              <Slider
                value={[currentTime]}
                max={duration}
                step={0.1}
                onValueChange={handleSeek}
                className="flex-1"
              />
              <span className="min-w-[35px] sm:min-w-[40px] text-center text-xs sm:text-sm text-white/80">
                {formatTime(duration)}
              </span>
            </div>
          </div>
        </div>
      </div>

      {languages.map((lang, index) => (
        <audio
          key={index}
          ref={(el) => setAudioRef(`lang${index}`, el)}
          src={lang.src}
          onEnded={() => setShowReplayButton(true)}
        />
      ))}
    </div>
  );
}
