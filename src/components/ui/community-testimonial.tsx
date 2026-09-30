'use client';

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
  direction?: 'left' | 'right';
  testimonials: Testimonial[];
}

export interface TestimonialsData {
  title: string;
  subtitle: string;
  rows: TestimonialRow[];
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const { quote, authorName, authorTitle, initials, rating = 5 } = testimonial;

  return (
    <article className="testimonial-card flex w-[86vw] max-w-[390px] flex-shrink-0 flex-col gap-5 rounded-xl border border-[var(--rkd-border)] bg-[var(--rkd-card)] p-6 md:w-[390px]">
      <div className="flex items-center justify-between gap-4">
        <span className="font-mono text-[0.625rem] uppercase tracking-[0.15em] text-[var(--rkd-muted)]">
          Google Review
        </span>
        <span className="font-mono text-xs tracking-[0.08em] text-[var(--rkd-primary)]" aria-label={rating + ' out of 5 stars'}>
          {'★★★★★'.slice(0, Math.max(0, Math.min(5, rating)))}
        </span>
      </div>

      <p className="min-h-[112px] font-outfit text-base leading-7 text-[var(--rkd-fg)]">
        “{quote}”
      </p>

      <div className="mt-auto flex items-center gap-3 border-t border-[var(--rkd-border)] pt-5">
        <div
          className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-[rgba(232,40,43,0.35)] bg-[var(--primary-muted)] font-montserrat text-sm font-bold text-[var(--rkd-primary)]"
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
}

function HorizontalScroller({
  testimonials,
  direction = 'left',
}: {
  testimonials: Testimonial[];
  direction?: 'left' | 'right';
}) {
  const animationClass =
    direction === 'right'
      ? 'animate-testimonial-scroll-reverse'
      : 'animate-testimonial-scroll';

  return (
    <div className="testimonial-scroller relative w-full overflow-hidden">
      <div className={'flex w-max items-stretch gap-5 px-3 ' + animationClass}>
        <div className="flex items-stretch gap-5">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
        <div className="flex items-stretch gap-5" aria-hidden="true">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={'duplicate-' + testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default function TestimonialsSection({ data }: { data: TestimonialsData }) {
  return (
    <section className="relative overflow-hidden border-y border-[var(--rkd-border)] bg-[var(--rkd-bg-secondary)] py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_50%_100%,rgba(232,40,43,0.12)_0%,transparent_70%)]" />

      <div className="relative z-10 mx-auto w-full max-w-[80rem]">
        <div className="mb-14 flex flex-col gap-6 px-4 md:flex-row md:items-end md:justify-between md:px-6">
          <div className="max-w-3xl">
            <p className="section-label mb-4">// WHAT CLIENTS SAY</p>
            <h2 className="section-heading section-heading-h2">
              Trusted by Businesses <span className="text-red-italic">Across Industries</span>
            </h2>
            <p className="section-subhead mt-5 max-w-2xl">
              Real feedback from businesses that have worked with R.K Digital Media across SEO,
              Google Business Profile, paid advertising and digital marketing.
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
            <HorizontalScroller
              key={row.id}
              testimonials={row.testimonials}
              direction={row.direction}
            />
          ))}
        </div>

        <p className="mt-8 px-4 text-center font-mono text-[0.625rem] uppercase tracking-[0.14em] text-[var(--rkd-muted)] md:px-6">
          Reviews shown as customer feedback · Google review wording retained
        </p>
      </div>
    </section>
  );
}
