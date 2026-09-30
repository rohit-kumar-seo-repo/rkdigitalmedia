'use client';

import React, { CSSProperties, ReactNode } from 'react';

export interface Testimonial {
  id: string;
  quote: string;
  authorName: string;
  authorTitle: string;
  initials: string;
  rating?: number;
}

export interface TestimonialRow {
  id: string;
  speed?: string;
  direction?: 'left' | 'right';
  testimonials: Testimonial[];
}

export interface TestimonialsData {
  title: string;
  subtitle: string;
  rows: TestimonialRow[];
}

export const TestimonialCard = ({
  quote,
  authorName,
  authorTitle,
  initials,
  rating = 5,
}: Testimonial) => {
  return (
    <article className="testimonial-card flex w-[min(86vw,390px)] flex-shrink-0 flex-col gap-5 rounded-xl border border-[var(--rkd-border)] bg-[var(--rkd-card)] p-6 md:w-[390px]">
      <div className="flex items-center justify-between gap-4">
        <div className="font-mono text-[0.625rem] uppercase tracking-[0.15em] text-[var(--rkd-muted)]">
          Google Review
        </div>
        <div className="flex gap-0.5" aria-label={String(rating) + ' out of 5 stars'}>
          {Array.from({ length: 5 }).map((_, index) => (
            <span
              key={index}
              className={index < rating ? 'text-[var(--rkd-primary)]' : 'text-[var(--rkd-border-hover)]'}
              aria-hidden="true"
            >
              ★
            </span>
          ))}
        </div>
      </div>

      <p className="min-h-[112px] font-outfit text-[1rem] leading-7 text-[var(--rkd-fg)]">
        “{quote}”
      </p>

      <div className="mt-auto flex items-center gap-3 border-t border-[var(--rkd-border)] pt-5">
        <div
          className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-[rgba(232,40,43,0.35)] bg-[var(--rkd-primary-muted)] font-montserrat text-sm font-bold text-[var(--rkd-primary)]"
          aria-hidden="true"
        >
          {initials}
        </div>
        <div className="min-w-0">
          <h3 className="truncate font-montserrat text-sm font-bold text-[var(--rkd-fg)]">
            {authorName}
          </h3>
          <p className="truncate font-outfit text-xs text-[var(--rkd-fg-muted)]">
            {authorTitle}
          </p>
        </div>
      </div>
    </article>
  );
};

export const HorizontalScroller = ({
  children,
  speed = '42s',
  direction = 'left',
}: {
  children: ReactNode;
  speed?: string;
  direction?: 'left' | 'right';
}) => {
  const style = { '--testimonial-scroll-duration': speed } as CSSProperties;

  return (
    <div className="testimonial-scroller group relative w-full overflow-hidden">
      <div
        className={
          'flex w-max items-stretch gap-5 px-3 ' +
          (direction === 'right'
            ? 'animate-testimonial-scroll-reverse'
            : 'animate-testimonial-scroll')
        }
        style={style}
      >
        <div className="flex items-stretch gap-5">{children}</div>
        <div className="flex items-stretch gap-5" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
};

export default function TestimonialsSection({ data }: { data: TestimonialsData }) {
  return (
    <section className="relative overflow-hidden border-y border-[var(--rkd-border)] bg-[var(--rkd-bg-secondary)] py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_100%,rgba(232,40,43,0.12)_0%,transparent_70%)]" />

      <div className="relative z-10 mx-auto w-full max-w-[80rem]">
        <div className="mb-14 flex flex-col gap-6 px-4 md:flex-row md:items-end md:justify-between md:px-6">
          <div className="max-w-3xl">
            <p className="section-label mb-4">// WHAT CLIENTS SAY</p>
            <h2 className="section-heading section-heading-h2">
              Trusted by Businesses{' '}
              <span className="text-red-italic">Across Industries</span>
            </h2>
            <p className="section-subhead mt-5 max-w-2xl">
              Real feedback from businesses that have worked with R.K Digital Media across
              SEO, Google Business Profile, paid advertising and digital marketing.
            </p>
          </div>

          <div className="flex flex-shrink-0 items-center gap-3 border border-[var(--rkd-border)] bg-[var(--rkd-card)] px-4 py-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white font-montserrat text-sm font-black text-[#4285F4]">
              G
            </div>
            <div>
              <div className="font-montserrat text-xl font-black text-[var(--rkd-fg)]">5.0</div>
              <div className="font-outfit text-xs text-[var(--rkd-fg-muted)]">Google rating</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          {data.rows.map((row) => (
            <HorizontalScroller key={row.id} speed={row.speed} direction={row.direction}>
              {row.testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} {...testimonial} />
              ))}
            </HorizontalScroller>
          ))}
        </div>

        <p className="mt-8 px-4 text-center font-mono text-[0.625rem] uppercase tracking-[0.14em] text-[var(--rkd-muted)] md:px-6">
          Reviews shown as customer feedback · Google review wording retained
        </p>
      </div>
    </section>
  );
}
