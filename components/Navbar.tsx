'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone, ArrowRight, ChevronDown, Car, Building2, Home, Layers, PaintBucket, Building, Warehouse, Paintbrush, Droplets } from 'lucide-react';
import { cn } from '@/lib/utils';
import { siteConfig, navLinks, services } from '@/lib/data/siteData';

const serviceIcons = {
  'parking-restoration': Car,
  'swing-stage-services': Building2,
  'balcony-restoration': Home,
  'masonry-services': Layers,
  'stucco-services': PaintBucket,
  'high-rise-renovation': Building,
  'underground-parking': Warehouse,
  'interior-exterior': Paintbrush,
  'waterproofing': Droplets,
};

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => {
    setIsOpen(false);
    setIsMobileServicesOpen(false);
  };

  // Check if a link is active
  const isLinkActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-white/98 backdrop-blur-sm shadow-[0_2px_20px_rgba(0,0,0,0.08)]'
          : 'bg-transparent'
      )}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between h-18 lg:h-24 mx-auto max-w-[1400px]">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center"
            onClick={closeMenu}
          >
            <Image
              src="/logo.png"
              alt="Mufo Renovation"
              width={140}
              height={100}
              style={{ height: '100px', width: 'auto', filter: isScrolled ? 'none' : 'brightness(0) invert(1)' }}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              link.label === 'Services' ? (
                <div
                  key={link.href}
                  className="relative group"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      'relative flex items-center gap-1.5 px-5 py-3 text-base font-medium transition-colors duration-300',
                      'after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2',
                      'after:h-[2px] after:bg-accent after:transition-all after:duration-300',
                      isLinkActive(link.href) ? 'after:w-10' : 'after:w-0 hover:after:w-10',
                      isScrolled
                        ? isLinkActive(link.href) ? 'text-brand' : 'text-gray-700 hover:text-brand'
                        : isLinkActive(link.href) ? 'text-white' : 'text-white/90 hover:text-white'
                    )}
                  >
                    {link.label}
                    <ChevronDown className={cn(
                      'w-4 h-4 transition-transform duration-200',
                      isServicesOpen && 'rotate-180'
                    )} />
                  </Link>

                  {/* Invisible bridge to prevent gap between link and dropdown */}
                  <div className={cn(
                    'absolute left-0 right-0 h-4',
                    isScrolled ? 'top-full' : 'top-full'
                  )} />

                  {/* Mega Menu Dropdown */}
                  <div
                    className={cn(
                      'fixed left-0 right-0 transition-all duration-300',
                      isScrolled ? 'top-24' : 'top-[4.5rem]',
                      isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                    )}
                  >
                    <div className="bg-white shadow-2xl border-t border-gray-100">
                      <div className="container-custom py-8">
                        <div className="grid grid-cols-12 gap-8">
                          {/* Left Column - Featured */}
                          <div className="col-span-3 bg-gradient-to-br from-brand to-brand-dark rounded-2xl p-6 text-white">
                            <span className="text-xs font-medium tracking-[0.2em] uppercase text-accent-light">
                              Our Expertise
                            </span>
                            <h3 className="font-display text-2xl font-medium mt-2 mb-3">
                              Professional Building Restoration
                            </h3>
                            <p className="text-white/70 text-sm leading-relaxed mb-6">
                              Trusted by property managers across the GTA for quality workmanship and reliable service.
                            </p>
                            <Link
                              href="/services"
                              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent text-brand-dark text-sm font-medium rounded-lg hover:bg-accent-hover transition-colors"
                            >
                              View All Services
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>

                          {/* Right Column - Services Grid */}
                          <div className="col-span-9">
                            <div className="grid grid-cols-3 gap-x-6 gap-y-4">
                              {services.map((service) => {
                                const Icon = serviceIcons[service.slug as keyof typeof serviceIcons] || Home;
                                return (
                                  <Link
                                    key={service.id}
                                    href={`/services/${service.slug}`}
                                    className="group flex items-center gap-3 py-3 px-4 rounded-xl hover:bg-gray-50 transition-all duration-200"
                                  >
                                    <div className="w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0 group-hover:bg-brand transition-colors duration-200">
                                      <Icon className="w-5 h-5 text-brand group-hover:text-white transition-colors duration-200" />
                                    </div>
                                    <div className="min-w-0">
                                      <h4 className="font-medium text-gray-900 group-hover:text-brand transition-colors text-sm">
                                        {service.title}
                                      </h4>
                                      <p className="text-xs text-gray-500 truncate">
                                        {service.features[0]}
                                      </p>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>

                            {/* Bottom CTA Bar */}
                            <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between">
                              <div className="flex items-center gap-3 text-sm text-gray-600">
                                <Phone className="w-4 h-4 text-brand" />
                                <span>Need help choosing? Call us at</span>
                                <a href={`tel:${siteConfig.contact.phone.replace(/\D/g, '')}`} className="font-medium text-brand hover:text-brand-hover">
                                  {siteConfig.contact.phone}
                                </a>
                              </div>
                              <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 px-5 py-2.5 bg-brand text-white text-sm font-medium rounded-lg hover:bg-brand-hover transition-colors"
                              >
                                Get Free Quote
                                <ArrowRight className="w-4 h-4" />
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative px-5 py-3 text-base font-medium transition-colors duration-300',
                    'after:absolute after:bottom-1 after:left-1/2 after:-translate-x-1/2',
                    'after:h-[2px] after:bg-accent after:transition-all after:duration-300',
                    isLinkActive(link.href) ? 'after:w-10' : 'after:w-0 hover:after:w-10',
                    isScrolled
                      ? isLinkActive(link.href) ? 'text-brand' : 'text-gray-700 hover:text-brand'
                      : isLinkActive(link.href) ? 'text-white' : 'text-white/90 hover:text-white'
                  )}
                >
                  {link.label}
                </Link>
              )
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-5">
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\D/g, '')}`}
              className={cn(
                'flex items-center gap-2 text-sm font-medium transition-colors duration-300',
                isScrolled
                  ? 'text-gray-600 hover:text-brand'
                  : 'text-white/80 hover:text-white',
                !isScrolled && 'hidden xl:flex'
              )}
            >
              <div className={cn(
                'w-9 h-9 rounded-full flex items-center justify-center transition-colors',
                isScrolled ? 'bg-accent/10' : 'bg-white/10'
              )}>
                <Phone className="w-4 h-4" />
              </div>
              <span className="hidden xl:inline">{siteConfig.contact.phone}</span>
            </a>
            <Link
              href="/contact"
              className={cn(
                'group flex items-center gap-2 px-6 py-3 text-sm font-medium transition-all duration-300',
                isScrolled
                  ? 'bg-brand text-white hover:bg-brand-hover'
                  : 'bg-accent text-brand-dark hover:bg-accent-hover'
              )}
            >
              Free Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className={cn(
              'lg:hidden w-11 h-11 flex items-center justify-center rounded-full transition-all duration-300',
              isScrolled
                ? 'text-brand bg-gray-100'
                : 'text-white bg-white/10'
            )}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            'lg:hidden fixed inset-x-0 top-[4.5rem] bg-white border-t border-gray-200 transition-all duration-300 overflow-hidden',
            isOpen ? 'max-h-[calc(100vh-4.5rem)] opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <div className="container-custom py-6 max-h-[calc(100vh-4.5rem)] overflow-y-auto">
            <div className="flex flex-col gap-1">
              {navLinks.map((link, index) => (
                link.label === 'Services' ? (
                  <div key={link.href}>
                    <button
                      onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                      className={cn(
                        'w-full flex items-center justify-between py-3.5 px-4 text-lg font-medium border-b border-gray-100 hover:bg-gray-50 transition-colors',
                        isLinkActive(link.href) ? 'text-brand' : 'text-gray-800 hover:text-brand'
                      )}
                    >
                      <span className="flex items-center gap-2">
                        {link.label}
                        {isLinkActive(link.href) && (
                          <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                        )}
                      </span>
                      <ChevronDown className={cn(
                        'w-5 h-5 transition-transform duration-200',
                        isMobileServicesOpen && 'rotate-180'
                      )} />
                    </button>
                    <div className={cn(
                      'overflow-hidden transition-all duration-300',
                      isMobileServicesOpen ? 'max-h-[500px]' : 'max-h-0'
                    )}>
                      <div className="py-2 pl-4 space-y-1">
                        {services.map((service) => {
                          const Icon = serviceIcons[service.slug as keyof typeof serviceIcons] || Home;
                          return (
                            <Link
                              key={service.id}
                              href={`/services/${service.slug}`}
                              onClick={closeMenu}
                              className="flex items-center gap-3 py-3 px-4 text-gray-600 hover:text-brand hover:bg-gray-50 rounded-lg transition-colors"
                            >
                              <Icon className="w-5 h-5 text-accent" />
                              {service.title}
                            </Link>
                          );
                        })}
                        <Link
                          href="/services"
                          onClick={closeMenu}
                          className="flex items-center gap-2 py-3 px-4 text-brand font-medium"
                        >
                          View All Services
                          <ArrowRight className="w-4 h-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className={cn(
                      'py-3.5 px-4 text-lg font-medium border-b border-gray-100 hover:bg-gray-50 transition-colors flex items-center gap-2',
                      isLinkActive(link.href) ? 'text-brand' : 'text-gray-800 hover:text-brand'
                    )}
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {link.label}
                    {isLinkActive(link.href) && (
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    )}
                  </Link>
                )
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\D/g, '')}`}
                className="flex items-center gap-3 py-3 px-4 text-gray-700"
              >
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-accent-hover" />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider">Call Us</div>
                  <div className="font-medium">{siteConfig.contact.phone}</div>
                </div>
              </a>
              <Link
                href="/contact"
                onClick={closeMenu}
                className="mt-4 flex items-center justify-center gap-2 w-full py-4 bg-brand text-white font-medium hover:bg-brand-hover transition-colors"
              >
                Get Free Quote
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
