'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [cursorSize, setCursorSize] = useState(32);
  const [isVisible, setIsVisible] = useState(true);
  const [isClicking, setIsClicking] = useState(false);
  const [hoverTarget, setHoverTarget] = useState<string | null>(null);

  useEffect(() => {
    // Disable on mobile/touch devices
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) {
      setIsVisible(false);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    // Handle hover on interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.dataset.cursorText) {
        setHoverTarget(target.dataset.cursorText);
        setCursorSize(64);
      } else if (target.closest('a, button, [role="button"], .card-interactive, .btn-primary, .btn-secondary, .link-primary')) {
        setHoverTarget('Click');
        setCursorSize(48);
      }
    };

    const handleMouseOut = () => {
      setHoverTarget(null);
      setCursorSize(32);
    };

    document.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseout', handleMouseOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  // Animate follower
  useEffect(() => {
    if (!isVisible || !followerRef.current) return;

    let frameId: number;
    let currentX = mousePos.x;
    let currentY = mousePos.y;

    const animate = () => {
      const follower = followerRef.current;
      if (!follower) return;

      // Smooth follow with spring physics
      currentX += (mousePos.x - currentX) * 0.15;
      currentY += (mousePos.y - currentY) * 0.15;

      follower.style.transform = `translate(${currentX - cursorSize / 2}px, ${currentY - cursorSize / 2}px)`;
      frameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(frameId);
  }, [mousePos, isVisible, cursorSize]);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        ref={cursorRef}
        className={cn(
          'fixed pointer-events-none z-[9999] transition-all duration-150 ease-expo',
          'w-2 h-2 rounded-full bg-[var(--rkd-primary)] mix-blend-difference',
          isClicking && 'scale-75',
          hoverTarget && 'scale-200 bg-[var(--rkd-primary)]/50'
        )}
        style={{
          transform: `translate(${mousePos.x - 4}px, ${mousePos.y - 4}px)`,
        }}
        aria-hidden="true"
      />

      {/* Follower ring */}
      <motion.div
        ref={followerRef}
        className={cn(
          'fixed pointer-events-none z-[9998] transition-all duration-300 ease-expo',
          'rounded-full border-2 border-[var(--rkd-primary)]/50',
          hoverTarget && 'border-[var(--rkd-primary)] bg-[var(--rkd-primary)]/10',
          isClicking && 'scale-75'
        )}
        style={{ width: cursorSize, height: cursorSize }}
        aria-hidden="true"
      />

      {/* Hover label */}
      {hoverTarget && (
        <motion.div
          className="fixed pointer-events-none z-[9999] font-mono text-meta-lg uppercase tracking-widest text-[var(--rkd-primary)] bg-[var(--rkd-bg)]/95 backdrop-blur-sm px-3 py-1 rounded border border-[var(--rkd-primary)]/30"
          style={{
            transform: `translate(${mousePos.x + 20}px, ${mousePos.y - 20}px)`,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2 }}
          aria-hidden="true"
        >
          {hoverTarget}
        </motion.div>
      )}
    </>
  );
}

export default CustomCursor;