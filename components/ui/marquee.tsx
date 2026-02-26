import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef } from "react";

interface MarqueeProps extends ComponentPropsWithoutRef<"div"> {
  /**
   * Optional CSS class name to apply custom styles
   */
  className?: string;
  /**
   * Whether to reverse the animation direction
   * @default false
   */
  reverse?: boolean;
  /**
   * Whether to pause the animation on hover
   * @default false
   */
  pauseOnHover?: boolean;
  /**
   * Content to be displayed in the marquee
   */
  children: React.ReactNode;
  /**
   * Whether to animate vertically instead of horizontally
   * @default false
   */
  vertical?: boolean;
  /**
   * Number of times to repeat the content
   * @default 4
   */
  repeat?: number;
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group relative overflow-hidden p-2",
        className
      )}
    >
      <div
        className={cn(
          "flex w-max shrink-0 items-center gap-[var(--gap)] will-change-transform backface-hidden",
          !vertical ? "flex-row animate-marquee" : "flex-col animate-marquee-vertical",
          pauseOnHover && "group-hover:[animation-play-state:paused]",
          reverse && "[animation-direction:reverse]"
        )}
        style={
          {
            "--gap": "1rem",
            "--duration": "40s",
            WebkitTransform: "translateZ(0)",
          } as React.CSSProperties
        }
      >
        {children}
        {children}
      </div>
    </div>
  );
}