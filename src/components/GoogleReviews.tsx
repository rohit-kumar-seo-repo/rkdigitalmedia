'use client';
import { useState } from 'react';

const reviews = [
  { name: 'Mohini Bhardwaj', rating: 5, text: 'This digital marketing agency is the best agency I have seen ever. The work in this agency is best. I like the behaviour of employees also 😊🤝', date: '2 years ago', initials: 'MB' },
  { name: 'Diksha Mangla', rating: 5, text: 'Awesome and fast work. One of the best Digital marketing agency must try.', date: '2 years ago', initials: 'DM' },
  { name: 'Sonia Kumari', rating: 5, text: 'R.K digital media...Best digital marketing agency..must visit.', date: '2 years ago', initials: 'SK' },
  { name: 'Umar Farooq', rating: 5, text: 'Very good', date: '2 years ago', initials: 'UF' },
  { name: 'Deep Mala', rating: 5, text: 'My best experience with R.K Digital Media.', date: '2 years ago', initials: 'DM' },
  { name: 'Ravinder Singh', rating: 5, text: 'Great service and professional team.', date: '2 years ago', initials: 'RS' },
  { name: 'Insha Kamal', rating: 5, text: 'Excellent digital marketing services.', date: '2 years ago', initials: 'IK' },
];

function Stars({ n = 5 }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className={`w-4 h-4 ${i < n ? 'text-yellow-400' : 'text-gray-600'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  );
}

export function GoogleReviews() {
  const [active, setActive] = useState(0);
  const visible = [reviews[active], reviews[(active+1)%reviews.length], reviews[(active+2)%reviews.length]];

  return (
    <section className="py-20 md:py-32 bg-[var(--rkd-bg-secondary)] border-y border-[var(--rkd-border)]">
      <div className="max-w-[80rem] mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-14">
          <div>
            <p className="section-label mb-4">// WHAT CLIENTS SAY</p>
            <h2 className="font-montserrat font-black text-[var(--rkd-fg)]" style={{fontSize:'clamp(2rem,4vw,3.5rem)',lineHeight:'1.1'}}>
              Trusted by Businesses<br /><span style={{color:'#e8282b',fontStyle:'italic'}}>Across Industries</span>
            </h2>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex items-center gap-3">
              <svg className="w-8 h-8" viewBox="0 0 48 48"><path fill="#EA4335" d="M24 9.5c3.5 0 6.6 1.2 9.1 3.2l6.7-6.7C35.8 2.4 30.2 0 24 0 14.7 0 6.7 5.6 2.9 13.7l7.8 6C12.5 13.4 17.8 9.5 24 9.5z"/><path fill="#34A853" d="M46.1 24.6c0-1.7-.2-3.3-.5-4.9H24v9.3h12.4c-.5 2.9-2.2 5.3-4.7 6.9l7.4 5.7c4.3-4 6.8-10 6.8-17z"/><path fill="#4285F4" d="M10.7 28.3A14.4 14.4 0 0 1 9.5 24c0-1.5.2-2.9.6-4.3l-7.8-6A23.9 23.9 0 0 0 0 24c0 4 1 7.7 2.9 11l7.8-6.7z"/><path fill="#FBBC05" d="M24 48c6.2 0 11.4-2 15.2-5.5l-7.4-5.7c-2 1.4-4.6 2.2-7.8 2.2-6.2 0-11.5-4-13.3-9.4l-7.8 6.7C6.7 42.4 14.7 48 24 48z"/></svg>
              <div>
                <div className="font-montserrat font-black text-3xl text-[var(--rkd-fg)]">5.0</div>
                <div className="text-[var(--rkd-fg-muted)] text-xs">Google Rating · 7 Reviews</div>
              </div>
            </div>
            <Stars n={5} />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {visible.map((r, i) => (
            <div key={i} className="card-base p-6 flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--rkd-primary)] flex items-center justify-center font-montserrat font-bold text-white text-sm">{r.initials}</div>
                <div>
                  <div className="font-montserrat font-semibold text-[var(--rkd-fg)] text-sm">{r.name}</div>
                  <div className="text-[var(--rkd-fg-muted)] text-xs">{r.date}</div>
                </div>
              </div>
              <Stars n={r.rating} />
              <p className="text-[var(--rkd-fg-muted)] text-sm leading-relaxed font-outfit flex-1">"{r.text}"</p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center gap-3">
          <button onClick={() => setActive((active - 1 + reviews.length) % reviews.length)}
            className="w-10 h-10 rounded-full border border-[var(--rkd-border)] flex items-center justify-center text-[var(--rkd-fg-muted)] hover:border-[var(--rkd-primary)] hover:text-[var(--rkd-primary)] transition-colors">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          {reviews.map((_, i) => (
            <button key={i} onClick={() => setActive(i)}
              className={`w-2 h-2 rounded-full transition-colors ${i === active ? 'bg-[var(--rkd-primary)]' : 'bg-[var(--rkd-border)]'}`} />
          ))}
          <button onClick={() => setActive((active + 1) % reviews.length)}
            className="w-10 h-10 rounded-full border border-[var(--rkd-border)] flex items-center justify-center text-[var(--rkd-fg-muted)] hover:border-[var(--rkd-primary)] hover:text-[var(--rkd-primary)] transition-colors">
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </div>
    </section>
  );
}