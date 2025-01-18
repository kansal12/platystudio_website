"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { type LucideIcon } from "lucide-react";

interface ModeButtonProps {
  icon: LucideIcon;
  isSelected: boolean;
  onClick: () => void;
}

export function ModeButton({
  icon: Icon,
  isSelected,
  onClick,
}: ModeButtonProps) {
  return (
    <motion.button
      onClick={onClick}
      className={cn(
        "relative flex h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm transition-all duration-300",
        isSelected
          ? "bg-white text-black ring-2 ring-white"
          : "text-black/70 hover:bg-white hover:text-black",
      )}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      layout
    >
      <Icon className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-4 md:w-4 relative z-10" />
    </motion.button>
  );
}
