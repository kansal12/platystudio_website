"use client";

import { createContext, useContext, useState, useCallback } from "react";

type VideoPlayerContextType = {
  currentPlayingId: string | null;
  setCurrentPlayingId: (id: string | null) => void;
};

const VideoPlayerContext = createContext<VideoPlayerContextType>({
  currentPlayingId: null,
  setCurrentPlayingId: () => {},
});

export function VideoPlayerProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [currentPlayingId, setCurrentPlayingId] = useState<string | null>(null);

  const handleSetCurrentPlayingId = useCallback(
    (id: string | null) => {
      if (currentPlayingId && currentPlayingId !== id) {
        // Dispatch a custom event to pause other players
        window.dispatchEvent(
          new CustomEvent("pauseOtherPlayers", {
            detail: { currentId: id },
          }),
        );
      }
      setCurrentPlayingId(id);
    },
    [currentPlayingId],
  );

  return (
    <VideoPlayerContext.Provider
      value={{
        currentPlayingId,
        setCurrentPlayingId: handleSetCurrentPlayingId,
      }}
    >
      {children}
    </VideoPlayerContext.Provider>
  );
}

export const useVideoPlayer = () => useContext(VideoPlayerContext);
