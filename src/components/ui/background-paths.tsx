"use client";

import { motion } from "framer-motion";

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 28 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 6 * position} -${189 + i * 7}C-${
      380 - i * 6 * position
    } -${189 + i * 7} -${312 - i * 6 * position} ${216 - i * 7} ${
      152 - i * 6 * position
    } ${343 - i * 7}C${616 - i * 6 * position} ${470 - i * 7} ${
      684 - i * 6 * position
    } ${875 - i * 7} ${684 - i * 6 * position} ${875 - i * 7}`,
    opacity: 0.035 + i * 0.004,
    width: 0.5 + i * 0.025,
    duration: 18 + (i % 7) * 1.5,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <svg className="w-full h-full text-[#e8282b]" viewBox="0 0 696 316" fill="none" preserveAspectRatio="none">
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={path.opacity}
            initial={{ pathLength: 0.35, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: [0, path.opacity, 0],
              pathOffset: [0, 1, 0],
            }}
            transition={{
              duration: path.duration,
              repeat: Infinity,
              ease: "linear",
              delay: path.id * 0.18,
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export default function BackgroundPaths() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(232,40,43,0.055),transparent_58%)]" />
    </div>
  );
}
