"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface VideoAmbientLightProps {
  className?: string;
  intensity?: number;
  size?: string;
  children: React.ReactNode;
}

export function VideoAmbientLight({
  className,
  intensity = 0.6, // Increased default intensity
  size = "300px", // Increased default size
  children,
}: VideoAmbientLightProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const updateAmbientLight = () => {
      requestAnimationFrame(() => {
        const video = container.querySelector("video");
        if (!video) return;

        // Create a canvas to analyze video frames
        const canvas = document.createElement("canvas");
        const context = canvas.getContext("2d");
        if (!context) return;

        // Increased canvas size for better color sampling
        canvas.width = 32;
        canvas.height = 32;

        // Draw current video frame
        context.drawImage(video, 0, 0, canvas.width, canvas.height);

        // Get color data from multiple points for better averaging
        const topEdge = context.getImageData(16, 0, 1, 1).data;
        const bottomEdge = context.getImageData(16, 31, 1, 1).data;
        const leftEdge = context.getImageData(0, 16, 1, 1).data;
        const rightEdge = context.getImageData(31, 16, 1, 1).data;

        // Calculate weighted average color
        const avgColor = {
          r: Math.round(
            (topEdge[0] + bottomEdge[0] + leftEdge[0] + rightEdge[0]) / 4,
          ),
          g: Math.round(
            (topEdge[1] + bottomEdge[1] + leftEdge[1] + rightEdge[1]) / 4,
          ),
          b: Math.round(
            (topEdge[2] + bottomEdge[2] + leftEdge[2] + rightEdge[2]) / 4,
          ),
        };

        // Enhance color saturation
        const saturationBoost = 1.2;
        avgColor.r = Math.min(255, Math.round(avgColor.r * saturationBoost));
        avgColor.g = Math.min(255, Math.round(avgColor.g * saturationBoost));
        avgColor.b = Math.min(255, Math.round(avgColor.b * saturationBoost));

        // Apply the enhanced glow effect with blur
        container.style.setProperty(
          "--ambient-light-color",
          `rgba(${avgColor.r}, ${avgColor.g}, ${avgColor.b}, ${intensity})`,
        );
      });
    };

    // Update ambient light more frequently
    const interval = setInterval(updateAmbientLight, 50);

    return () => clearInterval(interval);
  }, [intensity]);

  return (
    <div
      ref={containerRef}
      className={cn(
        "relative rounded-2xl",
        // Increased glow effect and always visible
        "before:absolute before:-inset-[60px] before:rounded-[inherit]",
        "before:bg-[radial-gradient(circle_at_50%_50%,var(--ambient-light-color,transparent),transparent_80%)]",
        "before:blur-2xl before:opacity-100",
        // Add multiple layers for stronger effect
        "after:absolute after:-inset-[40px] after:rounded-[inherit]",
        "after:bg-[radial-gradient(circle_at_50%_50%,var(--ambient-light-color,transparent),transparent_60%)]",
        "after:blur-xl after:opacity-50",
        className,
      )}
      style={
        {
          "--ambient-light-size": size,
        } as React.CSSProperties
      }
    >
      {children}
    </div>
  );
}
