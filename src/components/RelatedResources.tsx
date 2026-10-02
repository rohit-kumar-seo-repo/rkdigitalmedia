import Link from 'next/link';

export type RelatedResource = {
  label: string;
  href: string;
  description: string;
};

export default function RelatedResources({ links }: { links: RelatedResource[] }) {
  return (
    <section className="mb-12">
      <p className="section-label mb-4">// RELATED RESOURCES</p>
      <div className="grid sm:grid-cols-2 gap-4">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="group card-base p-5 border border-[var(--rkd-border)] hover:border-[var(--rkd-primary)] transition-colors"
          >
            <span className="block font-montserrat font-bold text-sm text-[var(--rkd-fg)] group-hover:text-[var(--rkd-primary)] transition-colors">
              {link.label}
            </span>
            <span className="block mt-2 text-[13px] leading-6 text-[var(--rkd-fg-muted)]">
              {link.description}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
