import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { VideoPlayerProvider } from "@/contexts/video-player-context";
import { Header } from "@/components/header";
import { PreloadImages } from "@/components/preload-images";
import { Footer } from "@/components/footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Platy.Studio - The AI Video Production Studio",
  description: "Create Box-office quality Dubbing and Karaoke with AI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <PreloadImages />
      </head>
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <Header />
        <VideoPlayerProvider>
          <main className="max-w-7xl mx-auto">{children}</main>
        </VideoPlayerProvider>
        <Footer />
      </body>
    </html>
  );
}
