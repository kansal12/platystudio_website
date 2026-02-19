import { Suspense } from "react";
import { Pricing } from "@/components/pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - Platy Studio | AI Video Dubbing",
  description:
    "Custom pricing for AI-powered video dubbing tailored to your project scale. Get a quote for movies, OTT content, and more.",
  alternates: { canonical: "https://platy.studio/pricing" },
};

export default function Price() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Pricing />
    </Suspense>
  );
}
