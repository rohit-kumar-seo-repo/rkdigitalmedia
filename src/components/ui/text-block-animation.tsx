"use client";

import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(SplitText);

type TextBlockAnimationProps = {
  children: React.ReactNode;
  animateOnScroll?: boolean;
  delay?: number;
  blockColor?: string;
  stagger?: number;
  duration?: number;
};

export default function TextBlockAnimation({
  children,
  animateOnScroll = true,
  delay = 0,
  blockColor = "#000",
  stagger = 0.1,
  duration = 0.6,
}: TextBlockAnimationProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const container = containerRef.current;
    if (!container || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Split the heading itself. Splitting the wrapper made GSAP deep-slice the <h1>
    // into one <h1> copy per line, which search engines then read as several H1s.
    const target = (container.firstElementChild as HTMLElement | null) ?? container;

    const split = SplitText.create(target, {
      type: "lines",
      linesClass: "block-line-parent",
      tag: "span",
      // Re-split once web fonts load or the width changes, so line breaks match the real font.
      autoSplit: true,
      onSplit(self) {
        const lines = self.lines as HTMLElement[];
        const blocks = lines.map((line) => {
          line.style.display = "block";

          const wrapper = document.createElement("span");
          wrapper.style.position = "relative";
          wrapper.style.display = "block";
          wrapper.style.overflow = "hidden";

          const block = document.createElement("span");
          block.style.position = "absolute";
          block.style.inset = "0";
          block.style.backgroundColor = blockColor;
          block.style.zIndex = "2";
          block.style.transform = "scaleX(0)";
          block.style.transformOrigin = "left center";
          block.setAttribute("aria-hidden", "true");

          line.parentNode?.insertBefore(wrapper, line);
          wrapper.appendChild(line);
          wrapper.appendChild(block);
          return block;
        });

        gsap.set(lines, { opacity: 0 });

        // Returned so GSAP can carry the animation over when it re-splits.
        return gsap
          .timeline({
            defaults: { ease: "expo.inOut" },
            delay,
            ...(animateOnScroll
              ? {
                  scrollTrigger: {
                    trigger: container,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                  },
                }
              : {}),
          })
          .to(blocks, { scaleX: 1, duration, stagger, transformOrigin: "left center" })
          .set(lines, { opacity: 1, stagger }, `<${duration / 2}`)
          .to(blocks, { scaleX: 0, duration, stagger, transformOrigin: "right center" }, `<${duration * 0.4}`);
      },
    });

    return () => split.revert();
  }, {
    scope: containerRef,
    dependencies: [animateOnScroll, delay, blockColor, stagger, duration],
  });

  return (
    <div ref={containerRef} style={{ position: "relative" }}>
      {children}
    </div>
  );
}
