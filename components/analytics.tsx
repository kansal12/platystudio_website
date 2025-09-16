"use client";

import { usePathname } from "next/navigation";
import Script from "next/script";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    gtag?: (
      type: "config" | "event",
      action: string,
      params?: Record<string, unknown>
    ) => void;
  }
}

export default function Analytics() {
  const pathname = usePathname();
  const startTime = useRef<number>(Date.now());

  useEffect(() => {
    // send page_view event on route change
    if (window.gtag) {
      window.gtag("event", "page_view", {
        page_path: pathname,
      });
    }

    // reset timer on route change
    startTime.current = Date.now();
  }, [pathname]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      const timeSpent = Date.now() - startTime.current;

      if (window.gtag) {
        window.gtag("event", "time_spent", {
          page_path: pathname,
          time_spent_ms: timeSpent,
        });
      }
    };

    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, [pathname]);

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
