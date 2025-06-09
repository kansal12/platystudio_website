"use client";
import { HeroSection } from "@/components/hero-section";
import { Features } from "@/components/features";
import { Demo } from "@/components/Demo";
import { FAQ } from "@/components/faq";
import { CTASection } from "@/components/cta-section";
import { VideoPlayerProvider } from "@/contexts/video-player-context";
import { DemoScheduler } from "@/components/demo-scheduler";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { BrandLogos } from "@/components/brand-logos";
import { Testimonials } from "@/components/testimonials";

export default function Home() {
  const router = useRouter();
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get("popup") === "true") {
      setModalOpen(true);
    }
  }, []);

  const handleCloseModal = () => {
    setModalOpen(false);
    router.push("/"); // Clear the query params
  };
  return (
    <VideoPlayerProvider>
      <div className="relative min-h-screen w-full overflow-hidden">
        <DemoScheduler
          setShowDialog={setModalOpen}
          showDialog={isModalOpen}
          onClose={handleCloseModal}
        />
        <HeroSection />
        <BrandLogos />
        <Demo />
        <Features />
        <Testimonials />
        <CTASection />
        <FAQ />
      </div>
      <ToastContainer />
    </VideoPlayerProvider>
  );
}
