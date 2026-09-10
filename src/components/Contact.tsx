'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageSquare, ArrowRight, CheckCircle, Loader2 } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^[\d\s\-\+\(\)]{10,}$/.test(formData.phone)) newErrors.phone = 'Enter a valid phone number';
    if (!formData.service) newErrors.service = 'Please select a service';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setStatus('submitting');
    try {
      // Simulate API call - replace with actual endpoint
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus('success');
      setFormData({ name: '', phone: '', service: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const services = [
    { value: 'seo', label: 'SEO Services' },
    { value: 'google-ads', label: 'Google Ads Services' },
    { value: 'gbp', label: 'Google Business Profile' },
    { value: 'website', label: 'Website Design & Development' },
    { value: 'social', label: 'Social Media Marketing' },
    { value: 'other', label: 'Other / Multiple Services' },
  ];

  return (
    <section id="contact" className="relative py-20 md:py-32 bg-neogen-bg noise-overlay grid-pattern">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          className="mb-16 md:mb-24 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="section-number mb-4">// 05. Let's Talk</p>
          <h2 className="section-title mb-6">
            Tell Us What You Want to{' '}
            <span className="gradient-text-accent">Scale</span>
          </h2>
          <p className="text-body-lg text-neogen-fg-muted">
            This isn't an automated intake form. A founder reads every inbound, replies inside 4 business hours, and either books a call — or tells you honestly we're not the right fit. No sequences, no SDR follow-ups, no noise.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="card-base h-full sticky top-24">
              <h3 className="font-mono text-heading-md font-semibold text-neogen-fg mb-8">
                Start a Project
              </h3>

              <div className="space-y-6 mb-8">
                <a
                  href="https://maps.app.goo.gl/aXxLAXkidrw5g2eJ6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-neogen-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-neogen-accent/20 transition-colors">
                    <MapPin className="w-5 h-5 text-neogen-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-mono text-caption uppercase tracking-widest text-neogen-fg-subtle mb-1">Visit Us</p>
                    <address className="text-body text-neogen-fg-muted not-italic group-hover:text-neogen-fg transition-colors">
                      5th Ave, Gaur City 1, Sector 4, Greater Noida, Ghaziabad, Uttar Pradesh 201016
                    </address>
                  </div>
                </a>

                <a
                  href="tel:+919871530594"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-neogen-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-neogen-accent/20 transition-colors">
                    <Phone className="w-5 h-5 text-neogen-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-mono text-caption uppercase tracking-widest text-neogen-fg-subtle mb-1">Call Us</p>
                    <p className="text-body text-neogen-fg-muted group-hover:text-neogen-fg transition-colors">+91 98715 30594</p>
                    <p className="text-body-sm text-neogen-fg-subtle">Mon–Sat, 10AM–7PM IST</p>
                  </div>
                </a>

                <a
                  href="mailto:info@rkdigitalmedia.in"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-neogen-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-neogen-accent/20 transition-colors">
                    <Mail className="w-5 h-5 text-neogen-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-mono text-caption uppercase tracking-widest text-neogen-fg-subtle mb-1">Email Us</p>
                    <p className="text-body text-neogen-fg-muted group-hover:text-neogen-fg transition-colors">info@rkdigitalmedia.in</p>
                    <p className="text-body-sm text-neogen-fg-subtle">Replies within 4 business hours</p>
                  </div>
                </a>

                <a
                  href="https://wa.me/919871530594"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-neogen-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-neogen-accent/20 transition-colors">
                    <MessageSquare className="w-5 h-5 text-neogen-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="font-mono text-caption uppercase tracking-widest text-neogen-fg-subtle mb-1">WhatsApp</p>
                    <p className="text-body text-neogen-fg-muted group-hover:text-neogen-fg transition-colors">+91 98715 30594</p>
                    <p className="text-body-sm text-neogen-fg-subtle">Fastest response</p>
                  </div>
                </a>
              </div>

              {/* What happens next */}
              <div className="pt-8 border-t border-neogen-border space-y-4">
                <p className="font-mono text-caption uppercase tracking-widest text-neogen-accent">What Happens Next</p>
                <div className="space-y-3">
                  {[
                    'Founder reads your inbound personally — no SDR, no ticket queue',
                    '< 4 business hours: direct reply with sharpened questions or a booking link',
                    'Day 1–3: 30-min strategy call — honest, tactical, no deck',
                    'Day 3–7: Scoped proposal in writing — deliverables, timelines, pricing, exit terms',
                  ].map((step, i) => (
                    <div key={i} className="flex items-start gap-3 text-body-sm text-neogen-fg-muted">
                      <span className="font-mono text-neogen-accent flex-shrink-0">{String(i + 1).padStart(2, '0')}.</span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="card-base">
              <h3 className="font-mono text-heading-md font-semibold text-neogen-fg mb-8">
                Tell Us the Shape of the Problem
              </h3>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 bg-neogen-accent/10 border border-neogen-accent/30 rounded-xl mb-6 flex items-start gap-4"
                >
                  <CheckCircle className="w-6 h-6 text-neogen-accent flex-shrink-0 mt-0.5" aria-hidden="true" />
                  <div>
                    <p className="font-mono text-heading-sm font-semibold text-neogen-fg mb-1">Message Sent</p>
                    <p className="text-body text-neogen-fg-muted">We'll get back to you within 4 business hours. Check your WhatsApp too — we might ping you there.</p>
                  </div>
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-6 bg-red-500/10 border border-red-500/30 rounded-xl mb-6 flex items-start gap-4"
                >
                  <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                  <div>
                    <p className="font-mono text-heading-sm font-semibold text-red-500 mb-1">Something Went Wrong</p>
                    <p className="text-body text-red-400">Please try again or message us directly on WhatsApp.</p>
                  </div>
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="label-base">Full Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`input-base ${errors.name ? 'border-red-500 focus:border-red-500' : ''}`}
                      placeholder="Rohit Kumar"
                      disabled={status === 'submitting'}
                      aria-invalid={errors.name ? 'true' : 'false'}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1 text-body-sm text-red-500 font-mono text-caption">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="label-base">Phone / WhatsApp</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`input-base ${errors.phone ? 'border-red-500 focus:border-red-500' : ''}`}
                      placeholder="+91 98715 30594"
                      disabled={status === 'submitting'}
                      aria-invalid={errors.phone ? 'true' : 'false'}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                    />
                    {errors.phone && (
                      <p id="phone-error" className="mt-1 text-body-sm text-red-500 font-mono text-caption">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="label-base">Service Interested In</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className={`input-base ${errors.service ? 'border-red-500 focus:border-red-500' : ''}`}
                    disabled={status === 'submitting'}
                    aria-invalid={errors.service ? 'true' : 'false'}
                    aria-describedby={errors.service ? 'service-error' : undefined}
                  >
                    <option value="">Select a service...</option>
                    {services.map((s) => (
                      <option key={s.value} value={s.value}>{s.label}</option>
                    ))}
                  </select>
                  {errors.service && (
                    <p id="service-error" className="mt-1 text-body-sm text-red-500 font-mono text-caption">{errors.service}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="label-base">What\'s the Goal? <span className="text-neogen-fg-subtle font-normal">(revenue target, current blockers, timeline)</span></label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className={`input-base resize-y min-h-[140px] ${errors.message ? 'border-red-500 focus:border-red-500' : ''}`}
                    placeholder="e.g., We're a home services business in Noida Sector 62. Need 50+ qualified leads/month. Currently spending ₹80K on ads with 2× ROAS. Want to hit 6× in 6 months."
                    disabled={status === 'submitting'}
                    aria-invalid={errors.message ? 'true' : 'false'}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                  />
                  {errors.message && (
                    <p id="message-error" className="mt-1 text-body-sm text-red-500 font-mono text-caption">{errors.message}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="btn-primary w-full md:w-auto group"
                  data-cursor-text="Submit"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" aria-hidden="true" />
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>Send for Free Audit</span>
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </>
                  )}
                </button>

                <p className="text-body-sm text-neogen-fg-subtle text-center md:text-left">
                  By submitting, you agree to our{' '}
                  <a href="/privacy" className="text-neogen-accent hover:underline">Privacy Policy</a>{' '}
                  . We never share your details with third parties.
                </p>
              </form>
            </div>
          </motion.div>
        </div>

        {/* FAQ */}
        <motion.div
          className="mt-20 md:mt-28"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="section-number mb-4 text-center">// 06. FAQ</p>
          <h3 className="section-title text-center mb-12">
            Before You Send It —{' '}
            <span className="gradient-text-accent">Quick Answers</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                q: 'Do you work with businesses outside Greater Noida?',
                a: 'Yes — we serve clients across Noida, Greater Noida, Ghaziabad, Faridabad, Gurugram, and Delhi. For businesses outside NCR, we evaluate fit on a case-by-case basis.',
              },
              {
                q: 'What\'s the minimum commitment?',
                a: 'No long-term lock-ins. Most engagements start with a 3-month pilot so both sides can validate the partnership. After that, month-to-month with 30-day notice.',
              },
              {
                q: 'Can you recover a suspended Google Ads account?',
                a: 'Yes — this is a specialty. We diagnose root causes (policy, landing page, trust signals), fix them, and manage the appeal. Success rate is high for legitimate businesses.',
              },
              {
                q: 'How do you report results?',
                a: 'Live dashboard access + monthly Loom walkthrough + written summary. You see rankings, spend, leads, conversions, ROI — everything. No vanity metrics.',
              },
              {
                q: 'Do you build websites from scratch?',
                a: 'Yes — Next.js, WordPress, or Webflow. Performance-tuned, CRO-focused, SEO-ready from day one. We also redesign and migrate existing sites.',
              },
              {
                q: 'What\'s your typical response time?',
                a: 'Founder reads every inbound. Reply within 4 business hours with either a booking link or an honest "not a fit" referral. WhatsApp is fastest.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="card-base"
              >
                <h4 className="font-mono text-heading-sm font-semibold text-neogen-fg mb-3">{faq.q}</h4>
                <p className="text-body-sm text-neogen-fg-muted">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}