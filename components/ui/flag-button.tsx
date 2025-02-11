"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

interface FlagButtonProps {
  flag: string;
  label: string;
  // isSelected: boolean;
  // onClick: () => void;
}

export function FlagButton({
  flag,
  label,
}: // isSelected,
// onClick,
FlagButtonProps) {
  return (
    <motion.button
      // onClick={onClick}
      className={cn(
        "relative h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 overflow-hidden rounded-full transition-all duration-300"
        // isSelected
        //   ? "ring-2 sm:ring-[2.5px] ring-white"
        //   : "ring-[0.5px] sm:ring-1 ring-white/40 hover:ring-white/60",
      )}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <Image
        src={flag || "/placeholder.svg"}
        alt={label}
        fill
        className="object-cover"
      />
    </motion.button>
  );
}
