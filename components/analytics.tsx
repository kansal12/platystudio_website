"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";

export default function Analytics() {
  const pathname = usePathname();

  // Track page views
  useEffect(() => {
    if (typeof window !== "undefined" && (window as any).gtag) {
      (window as any).gtag("config", "G-BKLK1TYP9W", {
        page_path: pathname,
      });
    }
  }, [pathname]);

  // Track time spent
  useEffect(() => {
    let startTime = Date.now();

    const handleBeforeUnload = () => {
      let timeSpent = Date.now() - startTime;
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", "time_spent", {
          page_path: window.location.pathname,
          time_spent_ms: timeSpent,
        });
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      handleBeforeUnload();
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <>
      {/* GA Scripts */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-BKLK1TYP9W"
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-BKLK1TYP9W');
        `}
      </Script>
    </>
  );
}
