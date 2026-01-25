'use client';

import { useState, useEffect } from 'react';
import { ScrollAnimation } from '@/components/ui';

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
  const [isAnimating, setIsAnimating] = useState(false);

  const handleSelect = (index: number) => {
    if (index === activeIndex || isAnimating) return;
    setIsAnimating(true);
    setActiveIndex(index);
    setTimeout(() => setIsAnimating(false), 400);
  };

  // Auto-advance every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % milestones.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [milestones.length]);

  return (
    <section className={`py-12 lg:py-16 bg-brand overflow-hidden ${className}`}>
      <div className="container-custom">
        {/* Header */}
        <ScrollAnimation direction="up">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-8 lg:mb-10">
            <div>
              <span className="inline-flex items-center gap-3 mb-3">
                <span className="w-8 h-px bg-accent" />
                <span className="text-accent text-xs font-medium tracking-[0.2em] uppercase">
                  {label}
                </span>
              </span>
              <h2 className="font-display text-2xl lg:text-3xl font-medium text-white">
                {title}
              </h2>
            </div>
            {subtitle && (
              <p className="text-white/60 lg:max-w-sm lg:text-right text-xs">
                {subtitle}
              </p>
            )}
          </div>
        </ScrollAnimation>

        {/* Timeline Container */}
        <div className="relative">
          {/* Large Year Display */}
          <div className="absolute top-0 right-0 lg:right-10 pointer-events-none select-none">
            <span
              key={activeIndex}
              className="font-display text-[80px] lg:text-[140px] font-bold text-white/5 leading-none animate-fade-in"
            >
              {milestones[activeIndex].year}
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Left: Timeline Navigation */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-[9px] top-0 bottom-0 w-px bg-white/20" />

              {/* Progress Fill */}
              <div
                className="absolute left-[9px] top-0 w-px bg-accent transition-all duration-500 ease-out"
                style={{
                  height: `${((activeIndex + 1) / milestones.length) * 100}%`,
                }}
              />

              {/* Milestone Items */}
              <div className="space-y-0">
                {milestones.map((milestone, index) => (
                  <button
                    key={milestone.year}
                    onClick={() => handleSelect(index)}
                    className={`relative flex items-start gap-4 w-full text-left py-3 group transition-all duration-300 ${
                      index === activeIndex ? 'opacity-100' : 'opacity-50 hover:opacity-80'
                    }`}
                  >
                    {/* Dot */}
                    <div className="relative z-10 flex-shrink-0">
                      <div
                        className={`w-5 h-5 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                          index === activeIndex
                            ? 'border-accent bg-accent scale-100'
                            : 'border-white/40 bg-transparent scale-75 group-hover:scale-90 group-hover:border-white/60'
                        }`}
                      >
                        {index === activeIndex && (
                          <div className="w-1.5 h-1.5 rounded-full bg-brand-dark" />
                        )}
                      </div>
                      {index === activeIndex && (
                        <div className="absolute inset-0 rounded-full bg-accent/30 animate-ping" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 -mt-0.5">
                      <span
                        className={`font-display text-xs font-semibold transition-colors ${
                          index === activeIndex ? 'text-accent' : 'text-white/50'
                        }`}
                      >
                        {milestone.year}
                      </span>
                      <h3
                        className={`font-display text-sm font-medium transition-colors ${
                          index === activeIndex ? 'text-white' : 'text-white/70'
                        }`}
                      >
                        {milestone.title}
                      </h3>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Right: Active Content */}
            <div className="lg:sticky lg:top-24">
              <div
                key={activeIndex}
                className="animate-slide-up"
              >
                {/* Year Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/20 mb-4">
                  <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                  <span className="text-accent text-xs font-medium">
                    {milestones[activeIndex].year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-xl lg:text-2xl font-medium text-white mb-3">
                  {milestones[activeIndex].title}
                </h3>

                {/* Description */}
                <p className="text-white/70 leading-relaxed text-sm">
                  {milestones[activeIndex].description}
                </p>

                {/* Progress */}
                <div className="mt-6 pt-6 border-t border-white/10">
                  <div className="flex items-center gap-6">
                    <div>
                      <div className="font-display text-2xl font-semibold text-accent">
                        {activeIndex + 1}/{milestones.length}
                      </div>
                      <div className="text-white/50 text-xs">Milestone</div>
                    </div>
                    <div className="flex-1 h-1 bg-white/10 overflow-hidden">
                      <div
                        className="h-full bg-accent transition-all duration-500"
                        style={{ width: `${((activeIndex + 1) / milestones.length) * 100}%` }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animations */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.4s ease-out;
        }
      `}</style>
    </section>
  );
}
