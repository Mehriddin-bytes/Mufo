'use client';

import { usePathname } from 'next/navigation';
import Footer from './Footer';

export default function FooterWrapper() {
  const pathname = usePathname();
  // Hide CTA on pages that have their own CTA sections
  const showCTA = !['/about', '/contact', '/projects'].includes(pathname)
    && !pathname.startsWith('/services/')
    && !pathname.startsWith('/projects/');

  return <Footer showCTA={showCTA} />;
}
