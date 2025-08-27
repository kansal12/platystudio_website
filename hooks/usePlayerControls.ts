import { useEffect, useState } from "react";

export function usePlayerControls(isPlaying: boolean) {
  const [showControls, setShowControls] = useState(false);
  const [showPlayPauseButton, setShowPlayPauseButton] = useState(false);

  // detect if mobile
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    setIsMobile("ontouchstart" in window || navigator.maxTouchPoints > 0);
    console.log(
      "touch:",
      "ontouchstart" in window || navigator.maxTouchPoints > 0
    );
    // setIsMobile(/Mobi|Android/i.test(navigator.userAgent));
  }, []);

  const handleEnter = () => {
    if (!isMobile) {
      setShowControls(true);
      setShowPlayPauseButton(true);
    }
  };

  const handleLeave = () => {
    if (!isMobile) {
      if (isPlaying) setShowControls(false);
      setShowPlayPauseButton(false);
    }
  };

  const handleMove = () => {
    if (!isMobile) setShowControls(true);
  };

  const handleTap = () => {
    if (isMobile) {
      // setShowControls((prev) => !prev);
      // setShowPlayPauseButton((prev) => !prev);
      setShowControls(true);
      setShowPlayPauseButton(true);
      // setTimeout(() => {
      //   if (isPlaying) {
      //     setShowControls(false);
      //     setShowPlayPauseButton(false);
      //   }
      // }, 2000);
    }
  };
  const handleTouchStart = () => {
    if (isMobile) {
      setShowControls(true);
      setShowPlayPauseButton(true);
    }
  };

  const handleTouchEnd = () => {
    if (isMobile) {
      setTimeout(() => {
        if (isPlaying) {
          setShowControls(false);
          setShowPlayPauseButton(false);
        }
      }, 2000);
    }
  };

  return {
    showControls,
    showPlayPauseButton,
    setShowControls,
    setShowPlayPauseButton,
    handlers: {
      onMouseEnter: handleEnter,
      onMouseLeave: handleLeave,
      onMouseMove: handleMove,
      onClick: handleTap, // works as tap on mobile

      // onTouchStart: handleTouchStart,
      // onTouchEnd: handleTouchEnd,
    },
  };
}
