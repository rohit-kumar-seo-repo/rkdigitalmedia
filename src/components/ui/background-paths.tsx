"use client";

import { motion } from "framer-motion";

function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 22 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 8 * position} -${189 + i * 8}C-${
      380 - i * 8 * position
    } -${189 + i * 8} -${310 - i * 8 * position} ${210 - i * 7} ${
      150 - i * 8 * position
    } ${340 - i * 7}C${610 - i * 8 * position} ${465 - i * 7} ${
      690 - i * 8 * position
    } ${850 - i * 7} ${690 - i * 8 * position} ${850 - i * 7}`,
    opacity: 0.07 + i * 0.006,
    width: 0.7 + i * 0.035,
    duration: 14 + (i % 6) * 1.8,
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
            initial={{ pathLength: 0.2, pathOffset: 0, opacity: 0 }}
            animate={{
              pathLength: [0.2, 1],
              pathOffset: [0, 1],
              opacity: [0, path.opacity, path.opacity, 0],
            }}
            transition={{
              duration: path.duration,
              repeat: Infinity,
              ease: "linear",
              delay: path.id * 0.22,
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

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(232,40,43,0.09),transparent_62%)]" />

      <div
        className="absolute inset-x-0 bottom-0 h-1/2 opacity-50"
        style={{
          background:
            "radial-gradient(ellipse at center bottom, rgba(232,40,43,0.12), transparent 65%)",
        }}
      />
    </div>
  );
}
