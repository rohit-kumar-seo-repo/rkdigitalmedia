"use client";

import { motion } from "framer-motion";

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    opacity: 0.07 + i * 0.0038,
    width: 0.5 + i * 0.03,
    duration: 20 + (i % 8) * 1.5,
  }));

  return (
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <svg
        className="w-full h-full text-[#e8282b]"
        viewBox="0 0 696 316"
        fill="none"
        preserveAspectRatio="none"
      >
        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={path.opacity}
            vectorEffect="non-scaling-stroke"
            initial={{
              pathLength: 0.3,
              pathOffset: 0,
              opacity: path.opacity * 0.7,
            }}
            animate={{
              pathLength: 1,
              pathOffset: [0, 1, 0],
              opacity: [
                path.opacity * 0.7,
                path.opacity,
                path.opacity * 0.8,
                path.opacity * 0.7,
              ],
            }}
            transition={{
              duration: path.duration,
              delay: path.id * 0.15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export default function BackgroundPaths() {
  return (
    <div
      className="absolute inset-0 z-[1] overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(232,40,43,0.08),transparent_65%)]" />

      <FloatingPaths position={1} />
      <FloatingPaths position={-1} />

      <div
        className="absolute inset-x-0 bottom-0 h-1/2 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at center bottom, rgba(232,40,43,0.10), transparent 65%)",
        }}
      />
    </div>
  );
}
