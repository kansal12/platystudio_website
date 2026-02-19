"use client";

import { VideoPlayerProvider } from "@/contexts/video-player-context";
import { DemoDialog } from "@/components/demo-dialog";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";

export function HomeClientShell({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [showDemo, setShowDemo] = useState(false);

  useEffect(() => {
    if (searchParams.get("popup") === "true") {
      setShowDemo(true);
    }
  }, [searchParams]);

  const handleCloseModal = () => {
    setShowDemo(false);
    router.push("/");
  };

  return (
    <VideoPlayerProvider>
      <div className="relative min-h-screen w-full overflow-hidden">
        <DemoDialog
          open={showDemo}
          onOpenChange={setShowDemo}
          onClose={handleCloseModal}
        />
        {children}
      </div>
      <ToastContainer />
    </VideoPlayerProvider>
  );
}
