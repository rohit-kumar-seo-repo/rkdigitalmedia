"use client";

import { usePathname } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import CustomCursor from '@/components/ui/CustomCursor';
import WhatsAppFloat from '@/components/WhatsAppFloat';

function isBuildersFlow(pathname: string | null) {
  return Boolean(pathname && (
    pathname === '/google-ads-for-builders' ||
    pathname.startsWith('/google-ads-for-builders/')
  ));
}

export function SiteHeaderChrome() {
  const pathname = usePathname();
  if (isBuildersFlow(pathname)) return null;

  return (
    <>
      <CustomCursor />
      <Header />
    </>
  );
}

export function SiteFooterChrome() {
  const pathname = usePathname();
  if (isBuildersFlow(pathname)) return null;

  return (
    <>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
