"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const meteors = new Array(number || 20).fill(true);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {meteors.map((el, idx) => {
        const meteorCount = number || 20;
        // Calculate position to evenly distribute meteors across container width
        const position = (idx / meteorCount) * 100; // Spread across 100% width

        return (
          <span
            key={"meteor" + idx}
            className={cn(
              "animate-meteor-effect absolute h-1 w-1 rotate-[45deg] rounded-[9999px] bg-white/80 shadow-[0_0_6px_rgba(255,255,255,0.5)]",
              "before:absolute before:top-1/2 before:h-[2px] before:w-[80px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:from-white/70 before:to-transparent before:content-['']",
              className,
            )}
            style={{
              top: "10%", // Start from top of container
              left: position + "%",
              animationDelay: Math.random() * 8 + "s", // Random delay between 0-8s
              animationDuration: Math.floor(Math.random() * (12 - 8) + 8) + "s", // 8-12s duration
            }}
          ></span>
        );
      })}
    </motion.div>
  );
};