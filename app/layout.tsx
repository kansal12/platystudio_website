"use client";
import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import { PreloadImages } from "@/components/preload-images";
import { Footer } from "@/components/footer";
import "./globals.css";
import { NextSeo } from "next-seo";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Platy.Studio - The AI Video Production Studio",
//   description: "Create Box-office quality Dubbing and Karaoke with AI",
//   metadataBase: new URL("https://platy.studio"),
//   alternates: {
//     canonical: "https://platy.studio",
//   },
//   openGraph: {
//     title: "Platy Studio - AI-Powered Dubbing & Voiceover",
//     description:
//       "High-quality AI dubbing services for content creators and businesses.",
//     url: "https://platy.studio/",
//     siteName: "Platy Studio",
//     type: "website",
//   },
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <NextSeo
          title="Platy Studio - AI-Powered Dubbing & Voiceover"
          description="High-quality AI dubbing services for content creators and businesses."
          canonical="https://platy.studio/"
          openGraph={{
            url: "https://platy.studio/",
            title: "Platy Studio - AI-Powered Dubbing & Voiceover",
            description:
              "High-quality AI dubbing services for content creators and businesses.",
            siteName: "Platy Studio",
          }}
        />
        <link rel="icon" href="/favicon.svg" />
        <PreloadImages />
      </head>
      <body className={`${inter.className} bg-black text-white antialiased`}>
        <Header />

        <main className="max-w-7xl mx-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
