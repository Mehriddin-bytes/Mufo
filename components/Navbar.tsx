'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { siteConfig, navLinks } from '@/lib/data/siteData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
        isScrolled
          ? 'bg-[#FFFCF8]/98 backdrop-blur-sm shadow-[0_2px_20px_rgba(107,68,35,0.08)]'
          : 'bg-transparent'
      )}
    >
      {/* Top bar - visible on desktop when not scrolled */}
      <div
        className={cn(
          'hidden lg:block border-b transition-all duration-500 overflow-hidden',
          isScrolled
            ? 'max-h-0 opacity-0 border-transparent'
            : 'max-h-12 opacity-100 border-white/10'
        )}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between py-2.5 text-sm">
            <div className="flex items-center gap-6 text-white/70">
              <span>Mon - Sat: 8:00 AM - 6:00 PM</span>
            </div>
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\D/g, '')}`}
              className="flex items-center gap-2 text-white/90 hover:text-accent transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              {siteConfig.contact.phone}
            </a>
          </div>
        </div>
      </div>

      <nav className="container-custom">
        <div className="flex items-center justify-between h-[70px] lg:h-[80px]">
          {/* Logo */}
          <Link
            href="/"
            className="flex flex-col leading-none"
            onClick={closeMenu}
          >
            <span
              className={cn(
                'font-display text-2xl lg:text-[1.75rem] font-semibold tracking-wide transition-colors duration-300',
                isScrolled ? 'text-brand' : 'text-white'
              )}
            >
              Mufo
            </span>
            <span
              className={cn(
                'text-[0.65rem] uppercase tracking-[0.3em] font-medium transition-colors duration-300',
                isScrolled ? 'text-accent-hover' : 'text-accent-light'
              )}
            >
              Renovation
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'relative px-5 py-2 text-[0.9375rem] font-medium transition-colors duration-300',
                  'after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2',
                  'after:w-0 after:h-[2px] after:bg-accent after:transition-all after:duration-300',
                  'hover:after:w-6',
                  isScrolled
                    ? 'text-gray-700 hover:text-brand'
                    : 'text-white/90 hover:text-white'
                )}
              >
                {link.label}
              </Link>
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
            'lg:hidden fixed inset-x-0 top-[70px] bg-[#FFFCF8] border-t border-gray-200 transition-all duration-300 overflow-hidden',
            isOpen ? 'max-h-[calc(100vh-70px)] opacity-100' : 'max-h-0 opacity-0'
          )}
        >
          <div className="container-custom py-6">
            <div className="flex flex-col gap-1">
              {navLinks.map((link, index) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="py-3.5 px-4 text-lg text-gray-800 font-medium border-b border-gray-100 hover:text-brand hover:bg-gray-50 transition-colors"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  {link.label}
                </Link>
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
