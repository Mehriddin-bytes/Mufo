'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Home, Bath, Warehouse, Building2, ChevronLeft, ChevronRight } from 'lucide-react';
import { ScrollAnimation, StaggerAnimation } from '@/components/ui';
import { services } from '@/lib/data/siteData';
import { useRef, useState, useEffect } from 'react';

const iconMap = {
  'kitchen-renovation': Home,
  'bathroom-renovation': Bath,
  'basement-finishing': Warehouse,
  'full-home-renovation': Building2,
};

const serviceImages: Record<string, string> = {
  'parking-restoration': '/images/parking/parking-web-1.jpg',
  'swing-stage-services': '/images/stage/stage-1.jpg',
  'balcony-restoration': '/images/balcony/balcony-1.jpg',
  'masonry-services': '/images/masonry/masonry-1.jpg',
  'stucco-services': '/images/caulking/caulking-3.jpg',
  'high-rise-renovation': '/images/wallpanel/wallpanel-4.jpg',
  'underground-parking': '/images/parking/parking-garage.png',
  'interior-exterior': '/images/tile/tile-2.jpg',
  'waterproofing': '/images/parking/parking-caulking-coating.jpg',
};

export default function ServicesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', checkScrollPosition);
      checkScrollPosition();
      return () => container.removeEventListener('scroll', checkScrollPosition);
    }
  }, []);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.clientWidth * 0.8;
      scrollContainerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <ScrollAnimation direction="up" className="text-center mb-14">
          <h2 className="section-heading">Our Services</h2>
        </ScrollAnimation>

        {/* Mobile Horizontal Scroll */}
        <div className="md:hidden relative">
          {/* Scroll Indicators */}
          {canScrollLeft && (
            <button
              onClick={() => scroll('left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 shadow-lg flex items-center justify-center rounded-full"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-5 h-5 text-brand" />
            </button>
          )}
          {canScrollRight && (
            <button
              onClick={() => scroll('right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/90 shadow-lg flex items-center justify-center rounded-full"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-5 h-5 text-brand" />
            </button>
          )}

          {/* Scrollable Container */}
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-auto scroll-snap-x no-scrollbar pb-4"
          >
            {services.map((service) => {
              const Icon = iconMap[service.slug as keyof typeof iconMap] || Home;

              return (
                <Link
                  key={service.id}
                  href={`/services/${service.slug}`}
                  className="group relative flex-shrink-0 w-[75vw] max-w-[280px] aspect-[3/4] overflow-hidden scroll-snap-start"
                >
                  {/* Background Image */}
                  <Image
                    src={serviceImages[service.slug] || '/images/parking/parking-web-1.jpg'}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 75vw, 280px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Content */}
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    {/* Icon */}
                    <div className="mb-3">
                      <Icon className="w-7 h-7 text-white/80" strokeWidth={1.5} />
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-lg text-white font-medium leading-tight">
                      {service.title}
                    </h3>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-brand/0 group-hover:bg-brand/40 transition-colors duration-300" />
                </Link>
              );
            })}
          </div>

          {/* Scroll hint text */}
          <p className="text-center text-xs text-gray-400 mt-3">Swipe to see more services</p>
        </div>

        {/* Desktop Grid */}
        <StaggerAnimation
          direction="up"
          staggerDelay={100}
          className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => {
            const Icon = iconMap[service.slug as keyof typeof iconMap] || Home;

            return (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group relative block aspect-[3/4] overflow-hidden"
              >
                {/* Background Image */}
                <Image
                  src={serviceImages[service.slug] || '/images/parking/parking-web-1.jpg'}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 25vw, 280px"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-6">
                  {/* Icon */}
                  <div className="mb-4">
                    <Icon className="w-8 h-8 text-white/80" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-xl lg:text-2xl text-white font-medium leading-tight">
                    {service.title}
                  </h3>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-brand/0 group-hover:bg-brand/40 transition-colors duration-300" />
              </Link>
            );
          })}
        </StaggerAnimation>
      </div>
    </section>
  );
}
