'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

export function Reveal({
  children,
  className = '',
  delay = 0,
  y = 24,
  duration = 0.6,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  duration?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={reduceMotion ? undefined : { duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className = '',
  delayChildren = 0,
  staggerChildren = 0.08,
}: {
  children: ReactNode;
  className?: string;
  delayChildren?: number;
  staggerChildren?: number;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : 'hidden'}
      whileInView={reduceMotion ? undefined : 'show'}
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: {},
        show: {
          transition: { delayChildren, staggerChildren },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={{
        hidden: reduceMotion ? {} : { opacity: 0, y: 18 },
        show: reduceMotion ? {} : { opacity: 1, y: 0 },
      }}
      transition={reduceMotion ? undefined : { duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function MotionHover({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.2, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}
