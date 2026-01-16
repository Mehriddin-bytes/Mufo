import Link from 'next/link';
import { Phone, Mail, MapPin, ArrowUpRight } from 'lucide-react';
import { siteConfig, navLinks, services } from '@/lib/data/siteData';
import { getCurrentYear } from '@/lib/utils';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      {/* CTA Section */}
      <div className="bg-brand">
        <div className="container-custom py-16 lg:py-20">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="text-center lg:text-left">
              <h2 className="font-display text-3xl lg:text-4xl font-medium text-white mb-3">
                Ready to Transform Your Space?
              </h2>
              <p className="text-white/70 text-lg">
                Let&apos;s discuss your renovation project today.
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

      {/* Main Footer */}
      <div className="container-custom py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex flex-col mb-6">
              <span className="font-display text-3xl font-semibold tracking-wide">
                Mufo
              </span>
              <span className="text-[0.7rem] uppercase tracking-[0.3em] text-accent-light">
                Renovation
              </span>
            </Link>
            <p className="text-white/60 leading-relaxed mb-8 max-w-sm">
              {siteConfig.description}
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-accent hover:border-accent hover:text-brand-dark transition-all"
                aria-label="Facebook"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-accent hover:border-accent hover:text-brand-dark transition-all"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:bg-accent hover:border-accent hover:text-brand-dark transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-6">
              Navigation
            </h3>
            <ul className="space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-6">
              Services
            </h3>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-white/60 hover:text-white transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-accent mb-6">
              Contact
            </h3>
            <ul className="space-y-5">
              <li>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\D/g, '')}`}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Phone className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 uppercase tracking-wider mb-1">Phone</div>
                    <div className="text-white/80 group-hover:text-white transition-colors">
                      {siteConfig.contact.phone}
                    </div>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 group-hover:bg-accent/20 transition-colors">
                    <Mail className="w-4 h-4 text-accent" />
                  </div>
                  <div>
                    <div className="text-xs text-white/40 uppercase tracking-wider mb-1">Email</div>
                    <div className="text-white/80 group-hover:text-white transition-colors">
                      {siteConfig.contact.email}
                    </div>
                  </div>
                </a>
              </li>
              <li className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 text-accent" />
                </div>
                <div>
                  <div className="text-xs text-white/40 uppercase tracking-wider mb-1">Address</div>
                  <div className="text-white/80">
                    {siteConfig.contact.address.city}, {siteConfig.contact.address.province}
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm">
            <p className="text-white/40">
              © {getCurrentYear()} Mufo Renovation. All rights reserved.
            </p>
            <div className="flex gap-8">
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
