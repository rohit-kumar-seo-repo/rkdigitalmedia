'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [followerPos, setFollowerPos] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState('');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Smooth follower animation
  useEffect(() => {
    let frameId: number;
    const animate = () => {
      if (followerRef.current) {
        setFollowerPos((prev) => ({
          x: prev.x + (mousePos.x - prev.x) * 0.15,
          y: prev.y + (mousePos.y - prev.y) * 0.15,
        }));
      }
      frameId = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(frameId);
  }, [mousePos]);

  // Detect hoverable elements
  useEffect(() => {
    const hoverableElements = document.querySelectorAll(
      'a, button, [role="button"], input, textarea, select, .card-interactive, .btn-primary, .btn-secondary, .btn-ghost, .link-primary'
    );

    const handleMouseOver = (e: Event) => {
      const target = e.target as HTMLElement;
      setIsHovering(true);
      if (target.dataset.cursorText) {
        setCursorText(target.dataset.cursorText);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
      setCursorText('');
    };

    hoverableElements.forEach((el) => {
      el.addEventListener('mouseover', handleMouseOver);
      el.addEventListener('mouseout', handleMouseOut);
    });

    return () => {
      hoverableElements.forEach((el) => {
        el.removeEventListener('mouseover', handleMouseOver);
        el.removeEventListener('mouseout', handleMouseOut);
      });
    };
  }, [isHovering]);

  if (typeof window === 'undefined') return null;

  return (
    <>
      <style jsx global>{`
        * {
          cursor: none !important;
        }
        a, button, [role="button"], input, textarea, select, .card-interactive, .btn-primary, .btn-secondary, .btn-ghost, .link-primary {
          cursor: none !important;
        }
      `}</style>
      <motion.div
        ref={cursorRef}
        className={`fixed pointer-events-none z-[9999] w-2 h-2 rounded-full bg-neogen-accent mix-blend-difference transition-opacity duration-200 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${isHovering ? 'w-6 h-6 -translate-x-1/2 -translate-y-1/2' : '-translate-x-1/2 -translate-y-1/2'}`}
        style={{
          left: mousePos.x,
          top: mousePos.y,
          transform: isHovering ? 'translate(-50%, -50%)' : 'translate(-50%, -50%)',
        }}
        animate={{ scale: isHovering ? 0 : 1 }}
        transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
        aria-hidden="true"
      />
      <motion.div
        ref={followerRef}
        className={`fixed pointer-events-none z-[9998] w-16 h-16 rounded-full border border-neogen-accent/30 bg-neogen-accent/5 -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ease-expo ${
          isVisible ? 'opacity-100' : 'opacity-0'
        } ${isHovering ? 'w-24 h-24 border-neogen-accent/50 bg-neogen-accent/10' : ''}`}
        style={{
          left: followerPos.x,
          top: followerPos.y,
        }}
        animate={{
          scale: isHovering ? 1.2 : 1,
          borderRadius: isHovering ? '50%' : '50%',
        }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        aria-hidden="true"
      >
        {isHovering && cursorText && (
          <motion.div
            className="absolute inset-0 flex items-center justify-center text-neogen-accent font-mono text-caption uppercase tracking-widest opacity-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            {cursorText}
          </motion.div>
        )}
      </motion.div>
    </>
  );
}