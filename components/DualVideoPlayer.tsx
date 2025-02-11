import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { Play, Pause, RotateCcw } from "lucide-react";
import { FlagButton } from "@/components/ui/flag-button";
import Slider from "./ui/slider";

interface DualVideoPlayerProps {
  originalVideo: string;
  dubVideo: string;
  title: string;
  originalFlag: string;
  dubFlag: string;
  originalLable: string;
  dubLable: string;
}
type videoType = "original" | "dub";
const DualVideoPlayer: React.FC<DualVideoPlayerProps> = ({
  originalVideo,
  dubVideo,
  title,
  originalFlag,
  dubFlag,
  originalLable,
  dubLable,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [activeVideo, setActiveVideo] = useState<videoType>("original");
  const [duration, setDuration] = useState<number>(0);
  const [showControls, setShowControls] = useState<boolean>(true);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [showReplayButton, setShowReplayButton] = useState<boolean>(false);

  const handlePlay = (videoType: videoType) => {
    // if (videoType === "original") {
    //   if (dubVideoRef.current) dubVideoRef.current.pause();
    //   if (originalVideoRef.current) {
    //     originalVideoRef.current.currentTime = currentTime;
    //     originalVideoRef.current.play();
    //     setActiveVideo("original");
    //   }
    // } else {
    //   if (originalVideoRef.current) originalVideoRef.current.pause();
    //   if (dubVideoRef.current) {
    //     dubVideoRef.current.currentTime = currentTime;
    //     dubVideoRef.current.play();
    //     setActiveVideo("dub");
    //   }
    // }
    if (videoType === "original") {
      if (videoRef.current) {
        setActiveVideo("original");
        videoRef.current.pause();
        videoRef.current.currentTime = currentTime;
        videoRef.current.play();
      }
    } else {
      if (videoRef.current) {
        setActiveVideo("dub");
        videoRef.current.pause();
        videoRef.current.currentTime = currentTime;
        videoRef.current.play();
      }
    }
    setIsPlaying(true);
  };

  const handleTimeUpdate = () => {
    // if (activeVideo === "original" && originalVideoRef.current) {
    //   setCurrentTime(originalVideoRef.current.currentTime);
    // } else if (activeVideo === "dub" && dubVideoRef.current) {
    //   setCurrentTime(dubVideoRef.current.currentTime);
    // }
    // if (originalVideoRef.current && dubVideoRef.current) {
    //   const maxDuration = Math.max(
    //     originalVideoRef.current.duration || 0,
    //     dubVideoRef.current.duration || 0
    //   );

    //   setDuration(maxDuration);
    // }
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
    }
    if (videoRef.current) {
      const maxDuration = videoRef.current.duration;

      setDuration(maxDuration);
    }
  };

  const handleSeek = (value: number) => {
    const newTime = value;
    setCurrentTime(newTime);
    // if (originalVideoRef.current)
    //   originalVideoRef.current.currentTime = newTime;
    // if (dubVideoRef.current) dubVideoRef.current.currentTime = newTime;
    if (videoRef.current) videoRef.current.currentTime = newTime;
  };

  const handleReplay = () => {
    // if (activeVideo === "original" && originalVideoRef.current) {
    //   originalVideoRef.current.play();
    //   setActiveVideo("original");
    // } else if (activeVideo === "dub" && dubVideoRef.current) {
    //   dubVideoRef.current.play();
    //   setActiveVideo("dub");
    // }
    // setIsPlaying(true);
    // setShowReplayButton(false);
    if (activeVideo === "original" && videoRef.current) {
      setActiveVideo("original");
      videoRef.current.play();
    } else if (activeVideo === "dub" && videoRef.current) {
      setActiveVideo("dub");
      videoRef.current.play();
    }
    setIsPlaying(true);
    setShowReplayButton(false);
  };

  const togglePlayPause = () => {
    // if (isPlaying) {
    //   if (activeVideo === "original" && originalVideoRef.current)
    //     originalVideoRef.current.pause();
    //   if (activeVideo === "dub" && dubVideoRef.current)
    //     dubVideoRef.current.pause();
    //   setIsPlaying(false);
    // } else {
    //   if (activeVideo === "original" && originalVideoRef.current) {
    //     originalVideoRef.current.play();
    //   }
    //   if (activeVideo === "dub" && dubVideoRef.current) {
    //     dubVideoRef.current.play();
    //   }
    //   setIsPlaying(true);
    // }
    if (isPlaying) {
      if (activeVideo === "original" && videoRef.current)
        videoRef.current.pause();
      if (activeVideo === "dub" && videoRef.current) videoRef.current.pause();
      setIsPlaying(false);
    } else {
      if (activeVideo === "original" && videoRef.current) {
        videoRef.current.play();
      }
      if (activeVideo === "dub" && videoRef.current) {
        videoRef.current.play();
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
        <video
          //   ref={originalVideoRef}
          ref={videoRef}
          className="h-full w-full"
          onTimeUpdate={handleTimeUpdate}
          onEnded={handleEnded}
          //   style={
          //     activeVideo === "original"
          //       ? { display: "block" }
          //       : { display: "none" }
          //   }
          playsInline
          preload="true"
        >
          <source
            src={activeVideo === "original" ? originalVideo : dubVideo}
            type="video/mp4"
          />
        </video>
        {/* <video
          ref={dubVideoRef}
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
        </video> */}
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
            <FlagButton
              key={"original"}
              flag={originalFlag}
              label={"original"}
              isSelected={activeVideo === "original"}
              onClick={() => handlePlay("original")}
            />
            <FlagButton
              key={"dub"}
              flag={dubFlag}
              label={"dub"}
              isSelected={activeVideo === "dub"}
              onClick={() => handlePlay("dub")}
            />
            <span className="ml-1.5 sm:ml-2 text-xs sm:text-sm font-medium text-white">
              {activeVideo === "original" ? originalLable : dubLable}
            </span>
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

// import React, { useRef, useEffect, useState } from "react";
// import videojs from "video.js";
// import "video.js/dist/video-js.css";

// const VideoPlayer = ({ videoSrc, audioTracks }) => {
//   const videoRef = useRef(null);
//   const playerRef = useRef(null);
//   const [selectedTrack, setSelectedTrack] = useState(audioTracks[0]);

//   useEffect(() => {
//     if (!playerRef.current) {
//       playerRef.current = videojs(videoRef.current, {
//         controls: true,
//         responsive: true,
//         fluid: true,
//         sources: [{ src: videoSrc, type: "video/mp4" }],
//       });
//     }
//     return () => {
//       if (playerRef.current) {
//         playerRef.current.dispose();
//         playerRef.current = null;
//       }
//     };
//   }, [videoSrc]);

//   useEffect(() => {
//     if (playerRef.current) {
//       const videoElement = playerRef.current.el().querySelector("video");
//       if (videoElement) {
//         const existingAudio = videoElement.querySelector("audio");
//         if (existingAudio) {
//           existingAudio.remove();
//         }

//         const audioElement = document.createElement("audio");
//         audioElement.src = selectedTrack.src;
//         audioElement.crossOrigin = "anonymous";
//         audioElement.autoplay = true;
//         audioElement.volume = playerRef.current.volume();

//         videoElement.appendChild(audioElement);

//         audioElement
//           .play()
//           .catch((err) => console.error("Error playing audio track:", err));
//       }
//     }
//   }, [selectedTrack]);

//   return (
//     <div>
//       <div data-vjs-player>
//         <video ref={videoRef} className="video-js vjs-default-skin" />
//       </div>
//       <div>
//         <label>Audio Track: </label>
//         <select
//           onChange={(e) =>
//             setSelectedTrack(
//               audioTracks.find((track) => track.id === e.target.value)
//             )
//           }
//           value={selectedTrack.id}
//         >
//           {audioTracks.map((track) => (
//             <option key={track.id} value={track.id}>
//               {track.label}
//             </option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );
// };

// export default VideoPlayer;
