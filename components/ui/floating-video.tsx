"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export function FloatingVideo() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start({
        y: [0, -10, 0],
        transition: {
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        },
      });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      className="absolute right-4 top-4 h-48 w-64 overflow-hidden rounded-lg border border-white/10 shadow-2xl"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full object-cover"
      >
        <source src="/placeholder.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
    </motion.div>
  );
}
