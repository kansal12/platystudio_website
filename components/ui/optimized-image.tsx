"use client";

import Image from "next/image";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  quality?: number;
}

export function OptimizedImage({
  src,
  alt,
  className,
  priority = false,
  fill = false,
  width,
  height,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  quality = 85,
}: OptimizedImageProps) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className={cn("overflow-hidden", fill && "relative w-full h-full")}>
      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={!fill ? width : undefined}
        height={!fill ? height : undefined}
        priority={priority}
        quality={quality}
        sizes={sizes}
        className={cn(
          "duration-700 ease-in-out",
          isLoading ? "scale-105 blur-lg" : "scale-100 blur-0",
          className,
        )}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
}
