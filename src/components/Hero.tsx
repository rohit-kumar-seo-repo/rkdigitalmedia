'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouse = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    let animId: number;
    let t = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX / window.innerWidth;
      mouse.current.y = e.clientY / window.innerHeight;
    };
    window.addEventListener('mousemove', onMouseMove);

    const drawWave = (yBase: number, amplitude: number, speed: number, opacity: number, mx: number, my: number) => {
      ctx.beginPath();
      ctx.moveTo(0, canvas.height);
      for (let x = 0; x <= canvas.width; x += 4) {
        const progress = x / canvas.width;
        const y = yBase
          + Math.sin(progress * Math.PI * 3 + t * speed + mx * 1.5) * amplitude
          + Math.sin(progress * Math.PI * 5 + t * speed * 0.7 + my * 2) * (amplitude * 0.5)
          - my * 80;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(canvas.width, canvas.height);
      ctx.closePath();
      const grad = ctx.createLinearGradient(0, yBase - amplitude, 0, canvas.height);
      grad.addColorStop(0, `rgba(232,40,43,${opacity})`);
      grad.addColorStop(0.5, `rgba(120,10,12,${opacity * 0.6})`);
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grad;
      ctx.fill();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const mx = mouse.current.x;
      const my = mouse.current.y;
      const h = canvas.height;

      drawWave(h * 0.75, 60, 0.4, 0.15, mx, my);
      drawWave(h * 0.65, 80, 0.3, 0.12, mx, my);
      drawWave(h * 0.55, 100, 0.2, 0.10, mx, my);

      t += 0.01;
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden hero-background">
      {/* Animated wave canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ zIndex: 0 }}
      />

      {/* Corner brackets like reference site */}
      <span className="absolute top-8 left-8 w-6 h-6 border-t-2 border-l-2 border-[var(--rkd-primary)] opacity-60" style={{zIndex:1}} />
      <span className="absolute top-8 right-8 w-6 h-6 border-t-2 border-r-2 border-[var(--rkd-primary)] opacity-60" style={{zIndex:1}} />
      <span className="absolute bottom-8 left-8 w-6 h-6 border-b-2 border-l-2 border-[var(--rkd-primary)] opacity-60" style={{zIndex:1}} />
      <span className="absolute bottom-8 right-8 w-6 h-6 border-b-2 border-r-2 border-[var(--rkd-primary)] opacity-60" style={{zIndex:1}} />

      <div className="relative max-w-[80rem] mx-auto px-4 md:px-6 py-20 md:py-32 flex flex-col items-center justify-center min-h-[calc(100vh-120px)]" style={{zIndex:2}}>
        {/* Status bar */}
        <div className="mb-8 md:mb-12 flex flex-wrap items-center justify-between gap-4 md:gap-8">
          <div className="flex items-center gap-2 text-xs font-montserrat tracking-widest uppercase text-[var(--rkd-primary)]">
            <span className="w-8 h-px bg-[var(--rkd-primary)]" />
            Scaling Businesses Worldwide, Daily.
            <span className="w-8 h-px bg-[var(--rkd-primary)]" />
          </div>
          <div className="flex items-center gap-2 text-xs text-[var(--rkd-fg-muted)] font-montserrat tracking-widest">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            ONLINE
          </div>
        </div>

        {/* H1 */}
        <div className="mb-8 md:mb-12 max-w-5xl mx-auto text-center">
          <h1
            className="font-montserrat font-black text-[var(--rkd-fg)] leading-[1.0] tracking-tight text-center w-full"
            style={{ fontSize: 'clamp(1.8rem, 3.5vw, 3.2rem)' }}
          >
            AI-Powered Marketing &<br />
            <span style={{ color: '#e8282b', fontStyle: 'italic' }}>Automation</span>{' '}
            Agency
          </h1>
        </div>

        {/* Subheadline */}
        <div className="mb-10 max-w-2xl mx-auto text-center">
          <p className="font-outfit text-[var(--rkd-fg-muted)] leading-relaxed"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}>
            One partner for digital marketing. Full growth stack. AI automation at every layer.
            Systems that compound over time.
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <a href="/contact" className="btn-primary inline-flex items-center gap-2 px-8 py-4 rounded-full font-montserrat font-bold text-white bg-[var(--rkd-primary)]">
            Book a Strategy Call
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
          <a href="/case-studies" className="inline-flex items-center gap-2 font-montserrat font-semibold text-[var(--rkd-fg)] hover:text-[var(--rkd-primary)] transition-colors">
            See Our Work
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M7 7h10v10"/></svg>
          </a>
        </div>

        {/* Featured Case Pill */}
        <div className="mt-16 mb-6 hero-fade-up mb-16 md:mb-20">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-[var(--rkd-card)] border border-[var(--rkd-border)] rounded-full">
            <span className="inline-flex items-center gap-1.5 text-[var(--rkd-primary)]">
              <span className="w-2 h-2 rounded-full bg-[var(--rkd-primary)]" aria-hidden="true" />
              FEATURED CASE
            </span>
            <span className="text-[var(--rkd-fg-muted)]">|</span>
            <span className="text-[var(--rkd-fg)] font-outfit font-medium text-sm">500+ Projects</span>
            <span className="text-[var(--rkd-fg-muted)]">·</span>
            <span className="text-[var(--rkd-fg)] font-outfit font-medium text-sm">98% Retention</span>
            <span className="text-[var(--rkd-fg-muted)]">·</span>
            <span className="text-[var(--rkd-fg)] font-outfit font-medium text-sm">8+ Years</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block animate-pulse">
          <div className="flex flex-col items-center gap-2 text-[var(--rkd-fg-subtle)]">
            <span className="section-label">SCROLL ↓</span>
            <div className="w-1 h-6 bg-[var(--rkd-primary)]/30 rounded-full overflow-hidden">
              <div className="w-full h-full bg-[var(--rkd-primary)] animate-bounce" style={{ animationDuration: '1.5s' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Two-row marquee banner */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden" style={{zIndex: 2}}>
        {/* Row 1 — Red background, services */}
        <div className="bg-[#e8282b] py-3 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap">
            {[...Array(3)].map((_, i) => (
              <span key={i} className="flex items-center shrink-0">
                <span className="font-montserrat font-black text-white text-sm md:text-base tracking-widest uppercase px-6">/ PERFORMANCE MARKETING</span>
                <span className="font-montserrat font-black text-white text-sm md:text-base tracking-widest uppercase px-6">/ SEO & CONTENT</span>
                <span className="font-montserrat font-black text-white text-sm md:text-base tracking-widest uppercase px-6">/ AI AUTOMATION</span>
                <span className="font-montserrat font-black text-white text-sm md:text-base tracking-widest uppercase px-6">/ WEB DEVELOPMENT</span>
                <span className="font-montserrat font-black text-white text-sm md:text-base tracking-widest uppercase px-6">/ CRM & GROWTH</span>
                <span className="font-montserrat font-black text-white text-sm md:text-base tracking-widest uppercase px-6">/ CREATIVE & BRANDING</span>
              </span>
            ))}
          </div>
        </div>

        {/* Row 2 — Dark background, results */}
        <div className="bg-[#0d0d0d] border-t border-[#1f1f1f] py-3 overflow-hidden">
          <div className="flex animate-marquee-reverse whitespace-nowrap">
            {[...Array(3)].map((_, i) => (
              <span key={i} className="flex items-center shrink-0">
                <span className="font-montserrat font-bold text-white text-sm md:text-base tracking-widest uppercase px-6">500+ PROJECTS DELIVERED</span>
                <span className="font-montserrat font-bold text-[var(--rkd-primary)] px-2">·</span>
                <span className="font-montserrat font-bold text-white text-sm md:text-base tracking-widest uppercase px-6">12× PEAK ROAS</span>
                <span className="font-montserrat font-bold text-[var(--rkd-primary)] px-2">·</span>
                <span className="font-montserrat font-bold text-white text-sm md:text-base tracking-widest uppercase px-6">/ PERFECT 5.0 ON GOOGLE</span>
                <span className="font-montserrat font-bold text-[var(--rkd-primary)] px-2">·</span>
                <span className="font-montserrat font-bold text-white text-sm md:text-base tracking-widest uppercase px-6">200% AVG TRAFFIC GROWTH</span>
                <span className="font-montserrat font-bold text-[var(--rkd-primary)] px-2">·</span>
                <span className="font-montserrat font-bold text-white text-sm md:text-base tracking-widest uppercase px-6">GREATER NOIDA & NCR</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;