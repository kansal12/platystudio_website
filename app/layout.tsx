import { Inter } from "next/font/google";
import { Header } from "@/components/header";
import { PreloadImages } from "@/components/preload-images";
import { Footer } from "@/components/footer";
import "./globals.css";
import { Metadata } from "next";
import Analytics from "@/components/analytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Platy.Studio - The AI Video Production Studio",
  description: "Create Box-office quality Dubbing and Karaoke with AI",
  metadataBase: new URL("https://platy.studio"),
  alternates: {
    canonical: "https://platy.studio",
  },
  openGraph: {
    title: "Platy Studio - AI Video Production",
    description:
      "Box-Office-Quality Dubbing for Movies, OTT, Content Creators and Businesses.",
    url: "https://platy.studio/",
    siteName: "Platy Studio",
    type: "website",
    images: [{
      url: 'https://platy.studio/platy_icon.png',
      alt: 'Platy Studio Icon',
      width: 512,
      height: 512,
    }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* <NextSeo
          title="Platy Studio - AI-Powered, Box-Office-Quality Dubbing"
          description="High-quality AI dubbing services for content creators and businesses."
          canonical="https://platy.studio/"
          openGraph={{
            url: "https://platy.studio/",
            title: "Platy Studio - AI-Powered, Box-Office-Quality Dubbing",
            description:
              "High-quality AI dubbing services for content creators and businesses.",
            siteName: "Platy Studio",
          }}
        /> */}
        {/* Google tag (gtag.js)  */}
        <Analytics />
        <link rel="icon" href="/platy_icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Platy Studio",
              applicationCategory: "MultimediaApplication",
              url: "https://platy.studio",
              description:
                "AI-powered video dubbing studio for movies, OTT, and content creators.",
              offers: {
                "@type": "Offer",
                priceCurrency: "USD",
                price: "0",
                description: "Custom pricing based on project scope",
              },
              publisher: {
                "@type": "Organization",
                name: "Platy Studio LLC",
                url: "https://platy.studio",
                logo: "https://platy.studio/platy_icon.png",
                address: {
                  "@type": "PostalAddress",
                  addressLocality: "Seattle",
                  addressRegion: "WA",
                  addressCountry: "US",
                },
              },
            }),
          }}
        />
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
