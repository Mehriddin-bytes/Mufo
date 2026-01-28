'use client';

import { useState, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { ScrollAnimation } from '@/components/ui';
import { testimonials } from '@/lib/data/siteData';
import { cn } from '@/lib/utils';

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const cardWidth = 450;
  const gap = 24;

  const handleDragStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging) return;
    const diff = clientX - startX;
    setTranslateX(diff);
  };

  const handleDragEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);

    const threshold = 80;
    if (translateX > threshold && activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    } else if (translateX < -threshold && activeIndex < testimonials.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
    setTranslateX(0);
  };

  const nextTestimonial = () => {
    if (activeIndex < testimonials.length - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  const prevTestimonial = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  // Touch events
  const handleTouchStart = (e: React.TouchEvent) => {
    handleDragStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    handleDragMove(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    handleDragEnd();
  };

  // Mouse events
  const handleMouseDown = (e: React.MouseEvent) => {
    handleDragStart(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    handleDragMove(e.clientX);
  };

  const handleMouseUp = () => {
    handleDragEnd();
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleDragEnd();
    }
  };

  return (
    <section className="section-padding bg-gradient-to-b from-gray-100 to-gray-50 overflow-hidden">
      <div className="container-custom">
        {/* Header */}
        <ScrollAnimation direction="up">
          <div className="text-center mb-12">
            <span className="section-label">Testimonials</span>
            <h2 className="section-heading mt-4">
              What Our <span className="text-brand">Clients Say</span>
            </h2>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Don&apos;t just take our word for it. Here&apos;s what property managers and homeowners say about working with us.
            </p>
          </div>
        </ScrollAnimation>

        {/* Cards Container */}
        <div className="relative">
          {/* Navigation Buttons - Desktop */}
          <button
            onClick={prevTestimonial}
            className={cn(
              'hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-14 h-14 rounded-full bg-white shadow-lg items-center justify-center text-gray-600 hover:text-brand hover:shadow-xl transition-all',
              activeIndex === 0 && 'opacity-40 cursor-not-allowed'
            )}
            disabled={activeIndex === 0}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={nextTestimonial}
            className={cn(
              'hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-14 h-14 rounded-full bg-white shadow-lg items-center justify-center text-gray-600 hover:text-brand hover:shadow-xl transition-all',
              activeIndex === testimonials.length - 1 && 'opacity-40 cursor-not-allowed'
            )}
            disabled={activeIndex === testimonials.length - 1}
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Swipable Container */}
          <div
            ref={containerRef}
            className="overflow-visible cursor-grab active:cursor-grabbing px-4"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className={cn(
                'flex gap-6 transition-transform',
                !isDragging && 'duration-500 ease-out'
              )}
              style={{
                transform: `translateX(calc(-${activeIndex * (cardWidth + gap)}px + ${translateX}px + (50% - ${cardWidth / 2}px)))`,
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={cn(
                    'flex-shrink-0 w-[450px] p-10 bg-white rounded-2xl shadow-md border border-gray-100 transition-all duration-500 select-none',
                    index === activeIndex
                      ? 'scale-100 opacity-100 shadow-xl'
                      : 'scale-95 opacity-70'
                  )}
                >
                  {/* Stars */}
                  <div className="flex gap-1.5 mb-6">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={cn(
                          'w-6 h-6',
                          i < testimonial.rating
                            ? 'text-accent fill-accent'
                            : 'text-gray-200'
                        )}
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-800 text-xl leading-relaxed mb-8 font-medium">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-brand flex items-center justify-center">
                      <span className="font-display text-xl text-white">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-lg">
                        {testimonial.name}
                      </div>
                      <div className="text-gray-500">
                        {testimonial.role}
                        {testimonial.location && (
                          <span> — {testimonial.location}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Pagination */}
          <div className="flex justify-center gap-1 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className="p-3 -m-1"
                aria-label={`Go to testimonial ${index + 1}`}
              >
                <span
                  className={cn(
                    'block h-2 rounded-full transition-all duration-300',
                    index === activeIndex
                      ? 'bg-brand w-8'
                      : 'bg-gray-300 w-2 hover:bg-gray-400'
                  )}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
