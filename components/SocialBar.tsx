'use client';

import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { siteConfig } from '@/lib/data/siteData';
import { cn } from '@/lib/utils';

const STORAGE_KEY = 'mufo-social-bar-dismissed';

export default function SocialBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const dismissed = localStorage.getItem(STORAGE_KEY);
    if (!dismissed) {
      const timer = setTimeout(() => setIsVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    localStorage.setItem(STORAGE_KEY, 'true');
  };

  if (!isVisible) return null;

  return (
    <div
      className={cn(
        'fixed bottom-4 left-4 right-4 sm:left-6 sm:right-6 z-50 transition-all duration-500',
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      )}
    >
      <div
        className={cn(
          'max-w-4xl mx-auto rounded-2xl transition-all duration-500 shadow-lg',
          isScrolled
            ? 'bg-brand shadow-[0_4px_16px_rgba(0,0,0,0.12)]'
            : 'bg-white shadow-[0_4px_24px_rgba(0,0,0,0.1)]'
        )}
      >
        <div className="relative px-3 pr-12 sm:px-6 sm:pr-14">
          <div className="flex items-center justify-center py-3 sm:py-5">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6">
              <span
                className={cn(
                  'text-sm sm:text-lg font-bold tracking-wide transition-colors duration-500 text-center',
                  isScrolled ? 'text-white' : 'text-brand'
                )}
              >
                Now on Instagram and Facebook!
              </span>
              <div className="flex items-center gap-2 sm:gap-3">
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'inline-flex items-center gap-1.5 px-3 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-base font-bold rounded-full hover:scale-105 transition-all duration-500',
                    isScrolled
                      ? 'bg-white text-brand hover:bg-gray-100'
                      : 'bg-brand text-white hover:bg-brand-hover'
                  )}
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                  Instagram
                </a>
                <a
                  href={siteConfig.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    'inline-flex items-center gap-1.5 px-3 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-base font-bold rounded-full hover:scale-105 transition-all duration-500',
                    isScrolled
                      ? 'bg-white text-brand hover:bg-gray-100'
                      : 'bg-brand text-white hover:bg-brand-hover'
                  )}
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                  Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={handleDismiss}
            className={cn(
              'absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0 flex items-center justify-center rounded-lg transition-all duration-500',
              isScrolled
                ? 'bg-white text-brand hover:bg-gray-100'
                : 'bg-brand text-white hover:bg-brand-hover'
            )}
            aria-label="Dismiss"
          >
            <X className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
