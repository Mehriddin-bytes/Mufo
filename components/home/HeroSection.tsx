'use client';

import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { siteConfig } from '@/lib/data/siteData';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        {/* Gradient background - replace with image later */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand to-brand-light" />
        {/* Decorative pattern overlay */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
        {/* Warm overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="max-w-3xl">
          {/* Label */}
          <div className="inline-flex items-center gap-3 mb-8">
            <span className="w-12 h-px bg-accent" />
            <span className="text-accent text-sm font-medium tracking-[0.2em] uppercase">
              {siteConfig.tagline}
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-[1.1] mb-8">
            Transforming Homes
            <br />
            <span className="text-accent-light">With Precision</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-white/70 max-w-xl mb-10 leading-relaxed">
            From stunning kitchens to complete home renovations, we bring your vision
            to life with expert craftsmanship and attention to every detail.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent text-brand-dark font-medium hover:bg-accent-hover transition-all"
            >
              Start Your Project
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\D/g, '')}`}
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/30 text-white font-medium hover:bg-white/10 transition-all"
            >
              <Phone className="w-5 h-5" />
              {siteConfig.contact.phone}
            </a>
          </div>
        </div>

        {/* Decorative element */}
        <div className="hidden lg:block absolute right-8 bottom-20">
          <div className="flex flex-col items-end gap-4 text-white/40 text-sm">
            <span className="writing-vertical">Scroll to explore</span>
            <div className="w-px h-20 bg-gradient-to-b from-white/40 to-transparent" />
          </div>
        </div>
      </div>

      {/* Bottom stats bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-brand-dark/80 backdrop-blur-sm border-t border-white/10">
        <div className="container-custom py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="font-display text-3xl lg:text-4xl text-white font-medium">12+</div>
              <div className="text-white/50 text-sm mt-1">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl lg:text-4xl text-white font-medium">350+</div>
              <div className="text-white/50 text-sm mt-1">Projects Done</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl lg:text-4xl text-white font-medium">98%</div>
              <div className="text-white/50 text-sm mt-1">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="font-display text-3xl lg:text-4xl text-white font-medium">25+</div>
              <div className="text-white/50 text-sm mt-1">Expert Team</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
