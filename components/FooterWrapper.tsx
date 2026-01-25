'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer';

export default function FooterWrapper() {
  const pathname = usePathname();
  // Hide CTA on about, contact, and service detail pages
  const showCTA = !['/about', '/contact'].includes(pathname) && !pathname.startsWith('/services/');

  return <Footer showCTA={showCTA} />;
}
