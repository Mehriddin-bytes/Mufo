'use client';

import { useState, useEffect } from 'react';
import { ScrollAnimation } from '@/components/ui';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Milestone {
  year: string;
  title: string;
  description: string;
}

interface TimelineSectionProps {
  label?: string;
  title?: string;
  subtitle?: string;
  milestones: Milestone[];
  className?: string;
}

export default function TimelineSection({
  label = 'Our Journey',
  title = 'Milestones Along the Way',
  subtitle,
  milestones,
  className = '',
}: TimelineSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : milestones.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < milestones.length - 1 ? prev + 1 : 0));
  };

  // Auto-advance every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % milestones.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [milestones.length]);

  return (
    <section className={`py-16 lg:py-24 bg-white overflow-hidden ${className}`}>
      <div className="container-custom">
        {/* Header */}
        <ScrollAnimation direction="up">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-3 justify-center mb-4">
              <span className="w-10 h-px bg-accent" />
              <span className="text-accent-hover text-sm font-medium tracking-[0.2em] uppercase">
                {label}
              </span>
              <span className="w-10 h-px bg-accent" />
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-medium text-gray-900">
              {title}
            </h2>
            {subtitle && (
              <p className="text-gray-600 mt-3">{subtitle}</p>
            )}
          </div>
        </ScrollAnimation>

        {/* Horizontal Timeline */}
        <div className="relative">
          {/* Navigation Buttons */}
          <div className="hidden lg:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={handlePrev}
              className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-gray-600 hover:text-brand hover:border-brand transition-colors"
              aria-label="Previous milestone"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>
          <div className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={handleNext}
              className="w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-gray-600 hover:text-brand hover:border-brand transition-colors"
              aria-label="Next milestone"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Timeline Track */}
          <div className="relative px-4 lg:px-16">
            {/* Horizontal Line */}
            <div className="absolute left-4 right-4 lg:left-16 lg:right-16 top-[28px] h-0.5 bg-gray-200" />

            {/* Progress Line */}
            <div
              className="absolute left-4 lg:left-16 top-[28px] h-0.5 bg-brand transition-all duration-500"
              style={{
                width: `calc(${(activeIndex / (milestones.length - 1)) * 100}% * (100% - 8rem) / 100%)`,
              }}
            />

            {/* Milestone Points */}
            <div className="relative flex justify-between">
              {milestones.map((milestone, index) => (
                <button
                  key={milestone.year}
                  onClick={() => setActiveIndex(index)}
                  className="group flex flex-col items-center"
                >
                  {/* Year Circle */}
                  <div
                    className={`relative z-10 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300 ${
                      index === activeIndex
                        ? 'bg-brand text-white scale-110 shadow-lg shadow-brand/30'
                        : index < activeIndex
                        ? 'bg-brand text-white'
                        : 'bg-white border-2 border-gray-200 text-gray-500 group-hover:border-brand group-hover:text-brand'
                    }`}
                  >
                    <span className="font-display text-xs font-semibold">{milestone.year}</span>
                    {index === activeIndex && (
                      <div className="absolute inset-0 rounded-full bg-brand/30 animate-ping" />
                    )}
                  </div>

                  {/* Title (visible on larger screens) */}
                  <div className={`hidden lg:block mt-4 text-center transition-all duration-300 ${
                    index === activeIndex ? 'opacity-100' : 'opacity-60'
                  }`}>
                    <h4 className={`font-display text-sm font-medium whitespace-nowrap ${
                      index === activeIndex ? 'text-brand' : 'text-gray-700'
                    }`}>
                      {milestone.title}
                    </h4>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Active Milestone Content */}
          <div className="mt-12 lg:mt-16">
            <div
              key={activeIndex}
              className="max-w-2xl mx-auto text-center animate-fade-up"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand/10 rounded-full mb-4">
                <div className="w-2 h-2 bg-brand rounded-full" />
                <span className="text-brand text-sm font-semibold">
                  {milestones[activeIndex].year}
                </span>
              </div>
              <h3 className="font-display text-2xl lg:text-3xl font-medium text-gray-900 mb-4">
                {milestones[activeIndex].title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                {milestones[activeIndex].description}
              </p>
            </div>
          </div>

          {/* Mobile Navigation Dots */}
          <div className="flex lg:hidden justify-center gap-2 mt-8">
            {milestones.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex ? 'bg-brand w-8' : 'bg-gray-300'
                }`}
                aria-label={`Go to milestone ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-up {
          animation: fade-up 0.4s ease-out;
        }
      `}</style>
    </section>
  );
}
