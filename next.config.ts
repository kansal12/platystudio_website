import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "platy.studio" },
      { protocol: "https", hostname: "platy-studio.vercel.app" },
      { protocol: "https", hostname: "startup-template-sage.vercel.app" },
      { protocol: "https", hostname: "vz-c5817d00-065.b-cdn.net" },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
