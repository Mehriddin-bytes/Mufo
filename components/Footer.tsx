import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { siteConfig, services } from '@/lib/data/siteData';
import { getCurrentYear } from '@/lib/utils';

interface FooterProps {
  showCTA?: boolean;
}

// Split services into two columns for balanced display
const servicesColumn1 = services.slice(0, 5);
const servicesColumn2 = services.slice(5);

export default function Footer({ showCTA = true }: FooterProps) {
  return (
    <footer className="bg-brand-dark text-white">
      {/* CTA Section */}
      {showCTA && (
        <div className="bg-brand">
          <div className="container-custom py-16 lg:py-20">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="text-center lg:text-left">
                <h2 className="font-display text-3xl lg:text-4xl font-medium text-white mb-3">
                  Ready to Start Your Project?
                </h2>
                <p className="text-white/70 text-lg">
                  Let&apos;s discuss how we can transform your space.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\D/g, '')}`}
                  className="group flex items-center gap-3 px-8 py-4 bg-white/10 border border-white/20 text-white font-medium hover:bg-white/20 transition-all"
                >
                  <Phone className="w-5 h-5" />
                  {siteConfig.contact.phone}
                </a>
                <Link
                  href="/contact"
                  className="group flex items-center justify-center gap-2 px-8 py-4 bg-accent text-brand-dark font-medium hover:bg-accent-hover transition-all"
                >
                  Get Free Quote
                  <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Main Footer - Centered Layout */}
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Left: Company Info */}
          <div className="lg:col-span-4">
            <Link href="/" className="block mb-6 max-w-sm">
              <Image
                src="/logo.png"
                alt="Mufo Renovation"
                width={400}
                height={120}
                style={{ height: '120px', width: '100%', objectFit: 'contain', objectPosition: 'left', filter: 'brightness(0) invert(1)' }}
              />
            </Link>
            <p className="text-white/60 leading-relaxed mb-6 max-w-sm">
              Expert building restoration and renovation services. Quality craftsmanship, lasting results.
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-accent hover:border-accent hover:text-brand-dark transition-all"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-accent hover:border-accent hover:text-brand-dark transition-all"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-accent hover:border-accent hover:text-brand-dark transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          {/* Center: Links in 3 balanced columns */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-5">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-white/60 hover:text-white transition-colors text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-white/60 hover:text-white transition-colors text-sm">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-white/60 hover:text-white transition-colors text-sm">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="text-white/60 hover:text-white transition-colors text-sm">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-white/60 hover:text-white transition-colors text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white/60 hover:text-white transition-colors text-sm">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services Column 1 */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-5">
                Services
              </h3>
              <ul className="space-y-3">
                {servicesColumn1.map((service) => (
                  <li key={service.id}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-white/60 hover:text-white transition-colors text-sm"
                    >
                      {service.shortTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Column 2 */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-5 opacity-0 pointer-events-none">
                More
              </h3>
              <ul className="space-y-3">
                {servicesColumn2.map((service) => (
                  <li key={service.id}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-white/60 hover:text-white transition-colors text-sm"
                    >
                      {service.shortTitle}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Contact Info */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\D/g, '')}`}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Phone className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-white/70 group-hover:text-white transition-colors text-sm">
                    {siteConfig.contact.phone}
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-center gap-3 group"
                >
                  <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Mail className="w-4 h-4 text-accent" />
                  </div>
                  <span className="text-white/70 group-hover:text-white transition-colors text-sm break-all">
                    {siteConfig.contact.email}
                  </span>
                </a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-accent" />
                </div>
                <span className="text-white/70 text-sm">
                  {siteConfig.contact.address.city}, {siteConfig.contact.address.province}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-5">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-white/40 text-center sm:text-left">
              © {getCurrentYear()} {siteConfig.name}. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="text-white/40 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-white/40 hover:text-white transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
