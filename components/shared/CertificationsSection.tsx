'use client';

import { useEffect, useState, useRef } from 'react';
import { ScrollAnimation } from '@/components/ui';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Certification {
  name: string;
  abbr: string;
  url: string;
}

interface CertificationsSectionProps {
  label?: string;
  title?: string;
  subtitle?: string;
  certifications?: Certification[];
  className?: string;
}

const defaultCertifications: Certification[] = [
  { name: 'Workplace Safety & Insurance Board', abbr: 'WSIB', url: 'https://www.wsib.ca' },
  { name: 'Tarion Warranty Corporation', abbr: 'Tarion', url: 'https://www.tarion.com' },
  { name: 'Building Industry and Land Development', abbr: 'BILD', url: 'https://www.bildgta.ca' },
  { name: 'Ontario Home Builders Association', abbr: 'OHBA', url: 'https://www.ohba.ca' },
  { name: 'RenoMark Certified', abbr: 'RenoMark', url: 'https://www.renomark.ca' },
  { name: 'Home Construction Regulatory Authority', abbr: 'HCRA', url: 'https://www.hcraontario.ca' },
  { name: 'National Kitchen & Bath Association', abbr: 'NKBA', url: 'https://nkba.org' },
  { name: 'Better Business Bureau', abbr: 'BBB', url: 'https://www.bbb.org' },
  { name: 'Technical Standards & Safety Authority', abbr: 'TSSA', url: 'https://www.tssa.org' },
  { name: 'Electrical Safety Authority', abbr: 'ESA', url: 'https://esasafe.com' },
  { name: 'Canadian Construction Association', abbr: 'CCA', url: 'https://www.cca-acc.com' },
  { name: 'Homestars Verified', abbr: 'Homestars', url: 'https://homestars.com' },
];

export default function CertificationsSection({
  label = 'Certified & Insured',
  title = 'Our Certifications & Memberships',
  subtitle = 'We maintain the highest industry standards with full insurance coverage and professional certifications.',
  certifications = defaultCertifications,
  className = '',
}: CertificationsSectionProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  const itemsToShow = 6; // Number of visible items
  const totalItems = certifications.length;

  // Auto-rotate
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalItems);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalItems]);

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % totalItems);
  };

  // Get visible items with wrap-around
  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < itemsToShow; i++) {
      const index = (currentIndex + i) % totalItems;
      items.push({ ...certifications[index], originalIndex: index });
    }
    return items;
  };

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
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-6 z-10 w-10 h-10 bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-brand hover:border-accent transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-6 z-10 w-10 h-10 bg-white border border-gray-200 flex items-center justify-center text-gray-600 hover:text-brand hover:border-accent transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Carousel Track */}
          <div
            ref={scrollRef}
            className="overflow-hidden mx-6"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <div className="flex gap-4 transition-transform duration-500 ease-in-out">
              {getVisibleItems().map((cert, idx) => (
                <a
                  key={`${cert.abbr}-${idx}`}
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 w-[calc((100%-5*1rem)/6)] min-w-[120px] group"
                  title={cert.name}
                >
                  <div className="h-20 lg:h-24 bg-white border border-gray-100 hover:border-accent/40 hover:shadow-md flex flex-col items-center justify-center p-4 transition-all duration-300">
                    <span className="font-display text-lg lg:text-xl font-semibold text-gray-700 group-hover:text-brand transition-colors">
                      {cert.abbr}
                    </span>
                    <span className="text-[10px] text-gray-400 text-center mt-1 line-clamp-2 leading-tight">
                      {cert.name}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Progress Dots */}
          <div className="flex justify-center gap-1.5 mt-6">
            {certifications.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(idx);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'bg-accent w-6'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
