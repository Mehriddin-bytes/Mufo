'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { ScrollAnimation } from '@/components/ui';
import { testimonials } from '@/lib/data/siteData';
import { cn } from '@/lib/utils';

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-brand">
      <div className="container-custom">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Side - Header */}
          <div className="lg:col-span-4">
            <ScrollAnimation direction="left">
              <span className="section-label text-accent-light">Testimonials</span>
              <h2 className="section-heading mt-4 text-white">
                Words From
                <br />
                <span className="text-accent-light">Our Clients</span>
              </h2>

              {/* Navigation */}
              <div className="flex gap-3 mt-8">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 border border-white/20 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-all"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 border border-white/20 flex items-center justify-center text-white/60 hover:bg-white/10 hover:text-white transition-all"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Dots */}
              <div className="flex gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      'h-1 rounded-full transition-all',
                      index === activeIndex
                        ? 'bg-accent w-8'
                        : 'bg-white/20 w-4 hover:bg-white/40'
                    )}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </ScrollAnimation>
          </div>

          {/* Right Side - Testimonial */}
          <div className="lg:col-span-8">
            <ScrollAnimation direction="right">
              <div className="relative">
                {/* Quote Icon */}
                <Quote className="w-12 h-12 text-accent/30 mb-6" />

                {/* Quote */}
                <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl text-white font-medium leading-snug mb-8">
                  &ldquo;{testimonials[activeIndex].content}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-4">
                  {/* Avatar placeholder */}
                  <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center">
                    <span className="font-display text-xl text-accent">
                      {testimonials[activeIndex].name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <div className="text-white font-semibold">
                      {testimonials[activeIndex].name}
                    </div>
                    <div className="text-white/50 text-sm">
                      {testimonials[activeIndex].role}
                      {testimonials[activeIndex].location && (
                        <span> — {testimonials[activeIndex].location}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  );
}
