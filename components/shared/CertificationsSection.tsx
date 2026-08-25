'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import Image from 'next/image';
import { ScrollAnimation } from '@/components/ui';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Certification {
  name: string;
  abbr: string;
  logo: string;
  url: string;
  darkBg?: boolean;
}

interface CertificationsSectionProps {
  label?: string;
  title?: string;
  subtitle?: string;
  certifications?: Certification[];
  className?: string;
}

const defaultCertifications: Certification[] = [
  {
    name: 'Home Construction Regulatory Authority',
    abbr: 'HCRA',
    logo: '/certifications/hcra.png',
    url: 'https://www.hcraontario.ca'
  },
  {
    name: 'Workplace Safety & Insurance Board',
    abbr: 'WSIB',
    logo: '/certifications/wsib.svg',
    url: 'https://www.wsib.ca'
  },
  {
    name: 'Tarion Warranty Corporation',
    abbr: 'Tarion',
    logo: '/certifications/tarion.svg',
    url: 'https://www.tarion.com'
  },
  {
    name: 'Building Industry and Land Development',
    abbr: 'BILD',
    logo: '/certifications/bild.png',
    url: 'https://www.bildgta.ca'
  },
  {
    name: 'Ontario Home Builders Association',
    abbr: 'OHBA',
    logo: '/certifications/ohba.svg',
    url: 'https://www.ohba.ca',
    darkBg: true
  },
  {
    name: 'ACMO Associate Member',
    abbr: 'ACMO',
    logo: '/certifications/acmo.png',
    url: 'https://www.acmo.org'
  },
  {
    name: 'Siding and Window Association',
    abbr: 'SWA',
    logo: '/certifications/swa.jpg',
    url: 'https://www.swacanada.ca'
  },
  {
    name: 'Toronto Construction Association',
    abbr: 'TCA',
    logo: '/certifications/tca.svg',
    url: 'https://www.tcaconnect.com',
    darkBg: true
  },
  {
    name: 'Canadian Condominium Institute',
    abbr: 'CCI',
    logo: '/certifications/cci.svg',
    url: 'https://ccitoronto.ca',
    darkBg: true
  },
  {
    name: 'Federation of Rental-housing Providers',
    abbr: 'FRPO',
    logo: '/certifications/frpo.jpg',
    url: 'https://frpo.org'
  },
];

export default function CertificationsSection({
  label = 'Certified & Insured',
  title = 'Our Certifications & Memberships',
  certifications = defaultCertifications,
  className = '',
}: CertificationsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [itemWidth, setItemWidth] = useState(0);
  const [visibleItems, setVisibleItems] = useState(6);
  const [gap, setGap] = useState(16);

  const totalItems = certifications.length;
  // Triple the items for infinite scroll
  const extendedCerts = [...certifications, ...certifications, ...certifications];

  // Calculate visible items based on screen width
  const getVisibleItems = useCallback(() => {
    if (typeof window === 'undefined') return 6;
    const width = window.innerWidth;
    if (width < 480) return 2;      // Mobile small
    if (width < 640) return 3;      // Mobile
    if (width < 768) return 4;      // Tablet small
    if (width < 1024) return 5;     // Tablet
    return 6;                       // Desktop
  }, []);

  // Calculate item width on mount and resize
  useEffect(() => {
    const calculateWidth = () => {
      if (trackRef.current) {
        const containerWidth = trackRef.current.parentElement?.offsetWidth || 0;
        const items = getVisibleItems();
        const currentGap = window.innerWidth < 640 ? 12 : 16;
        setGap(currentGap);
        setVisibleItems(items);
        const width = (containerWidth - (currentGap * (items - 1))) / items;
        setItemWidth(width);
      }
    };

    calculateWidth();
    window.addEventListener('resize', calculateWidth);
    return () => window.removeEventListener('resize', calculateWidth);
  }, [getVisibleItems]);

  // Auto-rotate
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1;
        // Reset to middle when we've gone through one full set
        if (next >= totalItems * 2) {
          return totalItems;
        }
        return next;
      });
    }, 2500);

    return () => clearInterval(interval);
  }, [totalItems]);

  // Start from middle set
  useEffect(() => {
    setCurrentIndex(totalItems);
  }, [totalItems]);

  const handlePrev = () => {
    setCurrentIndex((prev) => {
      if (prev <= 0) return totalItems;
      return prev - 1;
    });
  };

  const handleNext = () => {
    setCurrentIndex((prev) => {
      if (prev >= totalItems * 2) return totalItems;
      return prev + 1;
    });
  };

  const translateX = currentIndex * (itemWidth + gap);

  return (
    <section className={`py-10 lg:py-12 bg-gray-50 ${className}`}>
      <div className="container-custom">
        <ScrollAnimation direction="up">
          <div className="text-center mb-6">
            <span className="inline-flex items-center gap-2 justify-center mb-2">
              <span className="w-6 h-px bg-accent" />
              <span className="text-accent-hover text-[10px] sm:text-xs font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase">
                {label}
              </span>
              <span className="w-6 h-px bg-accent" />
            </span>
            <h2 className="font-display text-lg sm:text-xl lg:text-2xl font-medium text-gray-900">
              {title}
            </h2>
          </div>
        </ScrollAnimation>

        {/* Carousel */}
        <div className="relative px-8 sm:px-10 lg:px-12">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-7 h-7 sm:w-8 sm:h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-brand hover:border-accent transition-colors shadow-sm"
            aria-label="Previous"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-7 h-7 sm:w-8 sm:h-8 bg-white border border-gray-200 rounded-full flex items-center justify-center text-gray-600 hover:text-brand hover:border-accent transition-colors shadow-sm"
            aria-label="Next"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Carousel Track */}
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${translateX}px)`,
                gap: `${gap}px`,
              }}
            >
              {extendedCerts.map((cert, idx) => (
                <a
                  key={`${cert.abbr}-${idx}`}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 group"
                  style={{ width: itemWidth > 0 ? `${itemWidth}px` : `calc((100% - ${(visibleItems - 1) * gap}px) / ${visibleItems})` }}
                  title={cert.name}
                >
                  <div className={`h-16 sm:h-18 lg:h-20 border border-gray-100 hover:border-accent/40 hover:shadow-md rounded-lg flex items-center justify-center p-2 sm:p-3 transition-all duration-300 ${
                    cert.darkBg ? 'bg-brand' : 'bg-white'
                  }`}>
                    <Image
                      src={cert.logo}
                      alt={cert.name}
                      width={120}
                      height={60}
                      className={`max-h-10 sm:max-h-12 lg:max-h-14 w-auto object-contain transition-all duration-300 ${
                        cert.darkBg
                          ? 'opacity-90 group-hover:opacity-100'
                          : 'grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100'
                      }`}
                    />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile indicator dots */}
        <div className="flex sm:hidden justify-center gap-1.5 mt-4">
          {Array.from({ length: Math.ceil(totalItems / 2) }).map((_, idx) => (
            <div
              key={idx}
              className={`w-1.5 h-1.5 rounded-full transition-colors ${
                Math.floor(currentIndex % totalItems / 2) === idx ? 'bg-brand' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
