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
    <section className={`py-16 lg:py-24 bg-brand overflow-hidden ${className}`}>
      <div className="container-custom">
        {/* Header */}
        <ScrollAnimation direction="up">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
            <div>
              <span className="inline-flex items-center gap-3 mb-4">
                <span className="w-10 h-px bg-accent" />
                <span className="text-accent text-xs font-medium tracking-[0.2em] uppercase">
                  {label}
                </span>
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-medium text-white">
                {title}
              </h2>
            </div>
            {subtitle && (
              <p className="text-white/60 lg:max-w-sm lg:text-right text-sm">
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
              className="font-display text-[120px] lg:text-[200px] font-bold text-white/5 leading-none animate-fade-in"
            >
              {milestones[activeIndex].year}
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-start">
            {/* Left: Timeline Navigation */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-[11px] top-0 bottom-0 w-px bg-white/20" />

              {/* Progress Fill */}
              <div
                className="absolute left-[11px] top-0 w-px bg-accent transition-all duration-500 ease-out"
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
                    className={`relative flex items-start gap-6 w-full text-left py-5 group transition-all duration-300 ${
                      index === activeIndex ? 'opacity-100' : 'opacity-50 hover:opacity-80'
                    }`}
                  >
                    {/* Dot */}
                    <div className="relative z-10 flex-shrink-0">
                      <div
                        className={`w-6 h-6 rounded-full border-2 transition-all duration-300 flex items-center justify-center ${
                          index === activeIndex
                            ? 'border-accent bg-accent scale-100'
                            : 'border-white/40 bg-transparent scale-75 group-hover:scale-90 group-hover:border-white/60'
                        }`}
                      >
                        {index === activeIndex && (
                          <div className="w-2 h-2 rounded-full bg-brand-dark" />
                        )}
                      </div>
                      {/* Pulse effect for active */}
                      {index === activeIndex && (
                        <div className="absolute inset-0 rounded-full bg-accent/30 animate-ping" />
                      )}
                    </div>

                    {/* Content */}
                    <div className="flex-1 -mt-1">
                      <span
                        className={`font-display text-sm font-semibold transition-colors ${
                          index === activeIndex ? 'text-accent' : 'text-white/50'
                        }`}
                      >
                        {milestone.year}
                      </span>
                      <h3
                        className={`font-display text-lg font-medium transition-colors ${
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
            <div className="lg:sticky lg:top-32">
              <div
                key={activeIndex}
                className="animate-slide-up"
              >
                {/* Year Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 mb-6">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span className="text-accent text-sm font-medium">
                    {milestones[activeIndex].year}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl lg:text-3xl font-medium text-white mb-4">
                  {milestones[activeIndex].title}
                </h3>

                {/* Description */}
                <p className="text-white/70 leading-relaxed text-lg">
                  {milestones[activeIndex].description}
                </p>

                {/* Stats or additional info could go here */}
                <div className="mt-8 pt-8 border-t border-white/10">
                  <div className="flex items-center gap-8">
                    <div>
                      <div className="font-display text-3xl font-semibold text-accent">
                        {activeIndex + 1}/{milestones.length}
                      </div>
                      <div className="text-white/50 text-sm">Milestone</div>
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
