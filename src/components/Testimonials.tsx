'use client';

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Founder · HomeCare Services, Noida",
    text: "R.K Digital Media transformed our local SEO. We went from invisible to dominating the map pack across Greater Noida. 12× ROAS in 6 months — completely changed our business.",
    tag: "LOCAL SEO"
  },
  {
    name: "Priya Mehta",
    role: "Marketing Head · E-commerce Brand, Delhi NCR",
    text: "After our Google Ads got suspended, we thought it was over. RK got us reinstated in 3 weeks and scaled us to ₹15L/month spend at 8.5× ROAS. Exceptional team.",
    tag: "GOOGLE ADS"
  },
  {
    name: "Arun Gupta",
    role: "Director · Industrial Supplier, Greater Noida",
    text: "They built us an actual B2B lead engine — not just ads. 1,200+ qualified leads, ₹3.8Cr pipeline. Probably the best investment we've made in digital.",
    tag: "B2B GROWTH"
  },
  {
    name: "Dr. Kavita Singh",
    role: "Owner · Multi-Location Dental Clinic, Noida",
    text: "Three locations, zero coordination. RK gave us a unified digital strategy. Now all three GMB profiles rank #1 and we get 350+ appointments a month.",
    tag: "HEALTHCARE"
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-[var(--rkd-bg)] overflow-hidden">
      <div className="max-w-[80rem] mx-auto px-4 md:px-6">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-body-sm font-montserrat text-[var(--rkd-fg-subtle)] tracking-widest uppercase">// WHAT CLIENTS SAY</span>
        </div>
        <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-[var(--rkd-fg)] mb-4">
          Perfect 5.0 on Google.<br />
          <span className="text-[var(--rkd-primary)]">Every client referenceable.</span>
        </h2>
        <p className="text-[var(--rkd-fg-muted)] text-lg mb-16 max-w-2xl">Real results from real clients. Unedited, verifiable.</p>
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="bg-[var(--rkd-card)] border border-[var(--rkd-border)] rounded-xl p-8 flex flex-col gap-6 hover:border-[var(--rkd-primary)] transition-colors duration-300">
              <span className="text-xs font-montserrat tracking-widest text-[var(--rkd-primary)]">{t.tag}</span>
              <p className="text-[var(--rkd-fg)] text-lg leading-relaxed">"{t.text}"</p>
              <div>
                <div className="font-montserrat font-semibold text-[var(--rkd-fg)] text-sm">{t.name}</div>
                <div className="text-[var(--rkd-fg-muted)] text-sm mt-1">{t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;