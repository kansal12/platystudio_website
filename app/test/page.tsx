// components/VimeoPlayer.tsx
"use client";
import Player from "@vimeo/player";
import React, { useEffect, useRef, useState } from "react";

interface CallbackParams {
  audioDuration: number;
}

const VimeoPlayer: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const playerRef = useRef<Player | null>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);

  const [showReplayButton, setShowReplayButton] = useState<boolean>(false);
  const [showControls, setShowControls] = useState<boolean>(true);
  const [showPlayPauseButton, setSshowPlayPauseButton] =
    useState<boolean>(true);

  const callbackParams = useRef<CallbackParams>({} as CallbackParams);

  // Keep callbackParams updated
  useEffect(() => {
    callbackParams.current.audioDuration = duration;
  }, [duration]);

  // Initialize Vimeo Player
  useEffect(() => {
    if (!iframeRef.current) return;

    const player = new Player(iframeRef.current);
    playerRef.current = player;

    player.ready().then(() => {
      // Get video duration
      player.getDuration().then((time) => setDuration(time));

      // Time update event
      player.on("timeupdate", (data: { seconds: number }) => {
        setCurrentTime(data.seconds);
      });

      // Play/Pause events
      player.on("play", () => setIsPlaying(true));
      player.on("pause", () => setIsPlaying(false));
    });

    return () => {
      player.destroy();
    };
  }, [iframeRef]);

  // Play/Pause toggle handler
  const handleToggle = async () => {
    if (!playerRef.current) return;

    try {
      if (isPlaying) {
        await playerRef.current.pause();
      } else {
        await playerRef.current.play();
      }
    } catch (err) {
      console.error("Vimeo play/pause error:", err);
    }
  };

  return (
    // <div
    //   // className="relative  mx-auto  group/player  rounded-lg border border-slate-200/20 bg-slate-100/10"
    //   className="relative  mx-auto  group/player overflow-hidden rounded-lg border border-slate-200/20 bg-slate-100/10"
    //   // {...handlers}
    //   onMouseEnter={() => {
    //     setShowControls(true);
    //     setSshowPlayPauseButton(true);
    //   }}
    //   onMouseLeave={() => {
    //     if (isPlaying) {
    //       setShowControls(false);
    //       setSshowPlayPauseButton(false);
    //     }
    //   }}
    //   onMouseMove={() => setShowControls(true)}
    //   // Mobile touch support
    //   onTouchStart={() => {
    //     setShowControls(true);
    //     setSshowPlayPauseButton(true);
    //   }}
    // >
    <div className="w-full h-[80vh] max-h-fit mx-auto relative  bg-black ">
      //{" "}
      <div className="relative h-[360px] w-full">
        <iframe
          ref={iframeRef}
          src="https://player.vimeo.com/video/1122400201?badge=0&autopause=0&watchlater=0&pip=0&title=0&like=0"
          // width={width}
          // height={height}
          frameBorder="0"
          allow=" fullscreen; picture-in-picture"
          allowFullScreen
          title="Vimeo Player"
          className="absolute top-0 left-0 w-full h-full"
        ></iframe>
      </div>
      //{" "}
    </div>
  );
};

export default VimeoPlayer;
