'use client';

import { useEffect, useState, useRef } from 'react';
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
  {
    name: 'Canadian Federation of Apartment Associations',
    abbr: 'CFAA',
    logo: '/certifications/cfaa.png',
    url: 'https://rentalhousingcanada.ca'
  },
];

export default function CertificationsSection({
  label = 'Certified & Insured',
  title = 'Our Certifications & Memberships',
  subtitle = 'We maintain the highest industry standards with full insurance coverage and professional certifications.',
  certifications = defaultCertifications,
  className = '',
}: CertificationsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const [itemWidth, setItemWidth] = useState(0);

  const totalItems = certifications.length;
  // Triple the items for infinite scroll
  const extendedCerts = [...certifications, ...certifications, ...certifications];

  // Calculate item width on mount and resize
  useEffect(() => {
    const calculateWidth = () => {
      if (trackRef.current) {
        const containerWidth = trackRef.current.parentElement?.offsetWidth || 0;
        const gap = 16; // gap-4
        const visibleItems = 6;
        const width = (containerWidth - (gap * (visibleItems - 1))) / visibleItems;
        setItemWidth(width);
      }
    };

    calculateWidth();
    window.addEventListener('resize', calculateWidth);
    return () => window.removeEventListener('resize', calculateWidth);
  }, []);

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

  const translateX = currentIndex * (itemWidth + 16); // itemWidth + gap

  return (
    <section className={`py-12 lg:py-16 bg-gray-50 ${className}`}>
      <div className="container-custom">
        <ScrollAnimation direction="up">
          <div className="text-center mb-10">
            <span className="inline-flex items-center gap-3 justify-center mb-3">
              <span className="w-8 h-px bg-accent" />
              <span className="text-accent-hover text-xs font-medium tracking-[0.2em] uppercase">
                {label}
              </span>
              <span className="w-8 h-px bg-accent" />
            </span>
            <h2 className="font-display text-2xl lg:text-3xl font-medium text-gray-900 mb-3">
              {title}
            </h2>
            <p className="text-gray-600 text-sm max-w-xl mx-auto">
              {subtitle}
            </p>
          </div>
        </ScrollAnimation>

        {/* Carousel */}
        <div className="relative px-12 lg:px-16">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-brand hover:border-accent transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-10 h-10 bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-brand hover:border-accent transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Carousel Track */}
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex gap-4 transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${translateX}px)`,
              }}
            >
              {extendedCerts.map((cert, idx) => (
                <a
                  key={`${cert.abbr}-${idx}`}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 group"
                  style={{ width: itemWidth > 0 ? `${itemWidth}px` : 'calc((100% - 5rem) / 6)' }}
                  title={cert.name}
                >
                  <div className={`h-20 lg:h-24 border border-gray-100 hover:border-accent/40 hover:shadow-md flex items-center justify-center p-4 transition-all duration-300 ${
                    cert.darkBg ? 'bg-brand' : 'bg-white'
                  }`}>
                    <Image
                      src={cert.logo}
                      alt={cert.name}
                      width={120}
                      height={60}
                      className={`max-h-12 lg:max-h-14 w-auto object-contain transition-all duration-300 ${
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
      </div>
    </section>
  );
}
