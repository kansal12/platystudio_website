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
import { ToastContainer } from "react-toastify";
import { Testimonials } from "@/components/testimonials";
import { Pricing } from "@/components/pricing";
import { DemoDialog } from "@/components/demo-dialog";

export default function Home() {
  const router = useRouter();
  // const [isModalOpen, setModalOpen] = useState(false);
  const [showDemo, setShowDemo] = useState(false);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get("popup") === "true") {
      setShowDemo(true);
      // setModalOpen(true);
    }
  }, []);

  const handleCloseModal = () => {
    setShowDemo(false);
    // setModalOpen(false);
    router.push("/"); // Clear the query params
  };
  return (
    <VideoPlayerProvider>
      <div className="relative min-h-screen w-full overflow-hidden ">
        {/* <DemoScheduler
          setShowDialog={setModalOpen}
          showDialog={isModalOpen}
          onClose={handleCloseModal}
        /> */}
        <DemoDialog
          open={showDemo}
          onOpenChange={setShowDemo}
          onClose={handleCloseModal}
        />
        <HeroSection />
        {/* <BrandLogos /> */}
        <Features />
        <Demo />
        <Testimonials />
        <CTASection />
        <FAQ />
        {/* <Pricing /> */}
      </div>
      <ToastContainer />
    </VideoPlayerProvider>
  );
}
