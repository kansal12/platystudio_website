// import React, { useEffect, useRef, useState } from "react";
// import Player from "@vimeo/player";

// interface VimeoPlayerProps {
//   videoId: string;
// }

// const VimeoPlayer: React.FC = () => {
//   const iframeRef = useRef<HTMLIFrameElement | null>(null);
//   const playerRef = useRef<Player | null>(null);

//   const [isPlaying, setIsPlaying] = useState(false);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(0);

//   useEffect(() => {
//     if (!iframeRef.current) return;

//     const player = new Player(iframeRef.current);
//     playerRef.current = player;

//     // Get video duration
//     player.getDuration().then((time) => setDuration(time));

//     // Listen for time updates
//     player.on("timeupdate", (data: { seconds: number }) => {
//       setCurrentTime(data.seconds);
//     });

//     // Play/Pause events
//     player.on("play", () => setIsPlaying(true));
//     player.on("pause", () => setIsPlaying(false));

//     return () => {
//       player.destroy();
//     };
//   }, []);

//   const handlePlayPause = () => {
//     if (!playerRef.current) return;
//     if (isPlaying) playerRef.current.pause();
//     else playerRef.current.play();
//   };

//   const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
//     if (!playerRef.current) return;
//     const time = parseFloat(e.target.value);

//     // Set current time and immediately play (important for controls=0)
//     playerRef.current.setCurrentTime(time).then(() => {
//       playerRef.current?.play();
//     });

//     setCurrentTime(time);
//   };

//   const formatTime = (seconds: number) => {
//     const min = Math.floor(seconds / 60);
//     const sec = Math.floor(seconds % 60);
//     return `${min}:${sec < 10 ? "0" : ""}${sec}`;
//   };

//   return (
//     <div
//       className="relative group/player overflow-hidden rounded-lg border border-slate-200/20 bg-slate-100/10"
//       // {...handlers}
//       onMouseEnter={() => {
//         setShowControls(true);
//         setSshowPlayPauseButton(true);
//       }}
//       onMouseLeave={() => {
//         if (isPlaying) {
//           setShowControls(false);
//           setSshowPlayPauseButton(false);
//         }
//       }}
//       onMouseMove={() => setShowControls(true)}
//       // Mobile touch support
//       onTouchStart={() => {
//         setShowControls(true);
//         setSshowPlayPauseButton(true);
//       }}
//       // onTouchEnd={() => {
//       //   // optional: auto-hide after a delay
//       //   setTimeout(() => {
//       //     if (isPlaying) {
//       //       setShowControls(false);
//       //       setSshowPlayPauseButton(false);
//       //     }
//       //   }, 10000);
//       // }}
//     >
//       <div className="relative pb-[56.25%] h-0 overflow-hidden bg-black">
//         <iframe
//           ref={iframeRef}
//           src={`https://player.vimeo.com/video/1116499503?controls=0&title=0&byline=0&portrait=0&dnt=1`}
//           className="absolute top-0 left-0 w-full h-full"
//           frameBorder="0"
//           allow="autoplay; picture-in-picture"
//           allowFullScreen
//           title="Vimeo Player"
//         />
//       </div>

//       <div className="mt-2 flex flex-col space-y-1">
//         <button
//           onClick={handlePlayPause}
//           className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
//         >
//           {isPlaying ? "Pause" : "Play"}
//         </button>

//         {/* Progress bar */}
//         <input
//           type="range"
//           min={0}
//           max={duration}
//           step={0.1}
//           value={currentTime}
//           onChange={handleSeek}
//           className="w-full"
//         />

//         <div className="flex justify-between text-sm text-gray-700">
//           <span>{formatTime(currentTime)}</span>
//           <span>{formatTime(duration)}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VimeoPlayer;

"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import Player from "@vimeo/player";
import { cn } from "@/lib/utils";
import { Play, Pause, RotateCcw } from "lucide-react";
import Slider from "./ui/slider";
import { useVideoPlayer } from "@/contexts/video-player-context";

interface VimeoPlayerProps {
  videoId: string;
  title?: string;
}
interface callbackParams {
  audioDuration: number;
}

const VimeoPlayer: React.FC<VimeoPlayerProps> = ({ videoId, title }) => {
  const stopVimeoVideoPlay = 0.5; // this is the value, which stop video before reaching to last portion of the video

  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const playerRef = useRef<Player | null>(null);

  const [currentTime, setCurrentTime] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const callbackParmas = useRef<callbackParams>({} as callbackParams);

  useEffect(() => {
    if (callbackParmas.current) {
      callbackParmas.current.audioDuration = duration;
    }
  }, [duration]);

  useEffect(() => {
    if (!iframeRef.current) return;

    const player = new Player(iframeRef.current);
    playerRef.current = player;

    // Get video duration
    player.getDuration().then((time) => setDuration(time));

    // Listen for time updates
    player.on("timeupdate", (data: { seconds: number }) => {
      const audioDuration = callbackParmas.current.audioDuration;
      console.log("duration:", audioDuration);
      console.log("data.seconds:", data.seconds);
      console.log("diff:", audioDuration - data.seconds);
      if (audioDuration && audioDuration - data.seconds <= stopVimeoVideoPlay) {
        console.log("trigger handle end, diff:", audioDuration - data.seconds);
        player.pause();
        handleEnded();
      }
      setCurrentTime(data.seconds);
    });

    // Play/Pause events
    player.on("play", () => setIsPlaying(true));
    player.on("pause", () => setIsPlaying(false));

    return () => {
      player.destroy();
    };
  }, []);

  const handlePlayPause = () => {
    // tell all other players to pause
    window.dispatchEvent(
      new CustomEvent("pauseOtherPlayers", {
        detail: { currentId: playerId },
      })
    );
    if (!playerRef.current) return;
    if (isPlaying) playerRef.current.pause();
    else playerRef.current.play();
  };

  const handleSeek = (value: number) => {
    if (!playerRef.current) return;
    const time = value;

    // Set current time and immediately play (important for controls=0)
    playerRef.current.setCurrentTime(time).then(() => {
      playerRef.current?.play();
    });

    setCurrentTime(time);
  };

  //  ========== //
  const originalVideoRef = useRef<HTMLVideoElement>(null);
  const [showReplayButton, setShowReplayButton] = useState<boolean>(false);
  const [showControls, setShowControls] = useState<boolean>(true);
  const [showPlayPauseButton, setSshowPlayPauseButton] =
    useState<boolean>(true);

  const playerId = useId();

  const { setCurrentPlayingId } = useVideoPlayer();

  // Listen for global pause events
  // useEffect(() => {
  //   const handlePauseOthers = (
  //     e: CustomEvent<{ currentId: string | null }>
  //   ) => {
  //     if (e.detail.currentId !== playerId && isPlaying) {
  //       if (originalVideoRef.current) originalVideoRef.current.pause();
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

  const handleReplay = () => {
    if (!playerRef.current) return;
    setCurrentPlayingId(playerId);
    setIsPlaying(true);
    // Set current time and immediately play (important for controls=0)
    playerRef.current.setCurrentTime(0).then(() => {
      playerRef.current?.play();
    });
    setCurrentTime(0);
    setShowReplayButton(false);
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setShowReplayButton(true);
  };

  return (
    <div
      // className="relative  mx-auto  group/player  rounded-lg border border-slate-200/20 bg-slate-100/10"
      className="relative  mx-auto  group/player overflow-hidden rounded-lg border border-slate-200/20 bg-slate-100/10"
      // {...handlers}
      onMouseEnter={() => {
        setShowControls(true);
        setSshowPlayPauseButton(true);
      }}
      onMouseLeave={() => {
        if (isPlaying) {
          setShowControls(false);
          setSshowPlayPauseButton(false);
        }
      }}
      onMouseMove={() => setShowControls(true)}
      // Mobile touch support
      onTouchStart={() => {
        setShowControls(true);
        setSshowPlayPauseButton(true);
      }}
    >
      <div className="w-full aspect-[16/9] mx-auto relative  bg-black ">
        {/* <div className="w-full h-full aspect-video bg-black "> */}
        <iframe
          ref={iframeRef}
          src={`https://player.vimeo.com/video/${videoId}?controls=0`}
          onEnded={handleEnded}
          // className="w-full h-full"
          className="absolute top-0 left-0 w-full h-full"
          frameBorder="0"
          allow="autoplay; picture-in-picture"
          allowFullScreen
          title="Vimeo Player"
          {...{ playsinline: "true" }}
        />
      </div>

      <div
        className={cn(
          "absolute w-full inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent transition-opacity duration-300",
          showControls ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="absolute w-full inset-0 flex items-center justify-center">
          {showPlayPauseButton && (
            <button
              onClick={showReplayButton ? handleReplay : handlePlayPause}
              className={cn(
                "flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-transform hover:scale-105 hover:bg-white/20",
                "active:scale-95"
              )}
            >
              {showReplayButton && (
                <RotateCcw className="h-6 w-6 sm:h-8 sm:w-8" />
              )}
              {!showReplayButton ? (
                isPlaying ? (
                  <Pause className="h-6 w-6 sm:h-8 sm:w-8" />
                ) : (
                  <Play className="h-6 w-6 sm:h-8 sm:w-8 pl-0.5 sm:pl-1" />
                )
              ) : (
                <> </>
              )}
            </button>
          )}
        </div>

        <div className="absolute bottom-0 w-full left-0 right-0 flex flex-col gap-1.5 sm:gap-2 md:gap-4 p-2 sm:p-3 md:p-4">
          {title && (
            <div className="flex justify-between">
              <div></div>
              <div className=" text-xs sm:text-sm font-medium bg-black/80 text-white rounded-md px-2 py-1 uppercase">
                {title}
              </div>
            </div>
          )}
          <Slider
            value={currentTime}
            max={duration - stopVimeoVideoPlay}
            step={0.01}
            onChange={handleSeek}
          />
        </div>
      </div>
    </div>
  );
};

export default VimeoPlayer;
