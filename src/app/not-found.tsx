import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center bg-[var(--rkd-bg)]">
      <div className="max-w-[80rem] mx-auto w-full px-4 md:px-6 py-24">
        <p className="section-label mb-5">// 404 — PAGE NOT FOUND</p>
        <h1 className="hero-headline max-w-4xl mb-6">
          This page took a <span className="text-red-italic">wrong turn.</span>
        </h1>
        <p className="text-body-lg text-[var(--rkd-fg-muted)] max-w-2xl mb-9">
          The page may have moved, the URL may be outdated, or the link may no longer exist.
          Start from the services, case studies or homepage instead.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/" className="btn-primary">
            Back to Home <ArrowRight className="w-5 h-5" />
          </Link>
          <Link href="/services" className="btn-secondary">
            Explore Services <ArrowLeft className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </main>
  );
}
