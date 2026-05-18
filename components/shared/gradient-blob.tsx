"use client";

import { motion } from "framer-motion";

export function GradientBlob({ className }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.5, 0.35],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-1/3 -left-1/4 h-[560px] w-[560px] rounded-full bg-[#00d2ff]/25 blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1.1, 1, 1.1],
          opacity: [0.3, 0.45, 0.3],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -bottom-1/3 -right-1/4 h-[520px] w-[520px] rounded-full bg-[#7a5af8]/30 blur-[120px]"
      />
    </div>
  );
}
