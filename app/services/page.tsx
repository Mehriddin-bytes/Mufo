import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Car, Building2, Home, Layers, PaintBucket, Building, Warehouse, Paintbrush, Droplets, Check } from 'lucide-react';
import { services } from '@/lib/data/siteData';
import { ScrollAnimation, StaggerAnimation } from '@/components/ui';

const serviceIcons = {
  'parking-restoration': Car,
  'swing-stage-services': Building2,
  'balcony-restoration': Home,
  'masonry-services': Layers,
  'stucco-services': PaintBucket,
  'high-rise-renovation': Building,
  'underground-parking': Warehouse,
  'interior-exterior': Paintbrush,
  'waterproofing': Droplets,
};

// Service images mapping
const serviceImages: Record<string, string> = {
  'parking-restoration': '/images/parking/parking-1.jpg',
  'swing-stage-services': '/images/stage/stage-1.jpg',
  'balcony-restoration': '/images/balcony/balcony-1.jpg',
  'masonry-services': '/images/masonry/masonry-1.jpg',
  'stucco-services': '/images/stucco/stucco-1.jpg',
  'high-rise-renovation': '/images/coating/coating-2.jpg',
  'underground-parking': '/images/parking/parking-8.jpg',
  'interior-exterior': '/images/coating/coating-6.jpg',
  'waterproofing': '/images/parking/parking-waterproofing.jpg',
};

export const metadata = {
  title: 'Our Services | Mufo Renovation',
  description: 'Explore our comprehensive renovation services including kitchen, bathroom, basement, and full home renovations.',
};

export default function ServicesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-brand overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/masonry/masonry-1.jpg"
          alt="Construction site background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-brand/85" />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand to-brand-light opacity-50" />

        <div className="container-custom relative z-10">
          <ScrollAnimation direction="up">
            <div className="max-w-3xl mx-auto text-center lg:mx-0 lg:text-left">
              <span className="inline-flex items-center gap-3 mb-6 justify-center lg:justify-start">
                <span className="w-12 h-px bg-accent" />
                <span className="text-accent text-sm font-medium tracking-[0.2em] uppercase">
                  What We Do
                </span>
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-white leading-tight mb-6">
                Our Renovation
                <br />
                <span className="text-accent-light">Services</span>
              </h1>
              <p className="text-lg text-white/70 max-w-xl mx-auto lg:mx-0">
                From kitchens to complete home makeovers, we bring expertise and craftsmanship
                to every project. Explore our services and find the perfect solution for your home.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <StaggerAnimation
            direction="up"
            staggerDelay={150}
            className="space-y-16 lg:space-y-20"
          >
            {services.map((service, index) => {
              const Icon = serviceIcons[service.slug as keyof typeof serviceIcons] || Home;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.id}
                  className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Image Side - Full width on mobile */}
                  <div className={`relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative aspect-[16/10] sm:aspect-[4/3] overflow-hidden">
                      {/* Service Image */}
                      <Image
                        src={serviceImages[service.slug] || '/images/parking/parking-1.jpg'}
                        alt={service.title}
                        fill
                        className="object-cover"
                      />

                      {/* Overlay pattern */}
                      <div className="absolute inset-0 bg-black/10" />
                    </div>

                    {/* Floating number - smaller on mobile */}
                    <div className="absolute -bottom-4 right-4 sm:-bottom-6 sm:-right-6 lg:-right-10 w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-accent flex items-center justify-center shadow-lg">
                      <span className="font-display text-xl sm:text-3xl lg:text-4xl text-brand-dark font-semibold">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>

                  {/* Content Side - Centered on mobile */}
                  <div className={`text-center lg:text-left mt-6 lg:mt-0 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    {/* Side by side labels with title centered below */}
                    <div className="mb-4 sm:mb-6">
                      <div className="flex items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-2 sm:mb-3">
                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-brand/10 flex items-center justify-center">
                          <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-brand" />
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-accent uppercase tracking-wider">
                          {service.shortTitle || service.title.split(' ').slice(0, 2).join(' ')}
                        </span>
                      </div>
                      <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium text-gray-900">
                        {service.title}
                      </h2>
                    </div>

                    <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features - 2 columns on mobile */}
                    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2 sm:gap-3 mb-6 sm:mb-8 text-left">
                      {service.features.slice(0, 4).map((feature) => (
                        <li key={feature} className="flex items-center gap-2 sm:gap-3">
                          <span className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                            <Check className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-accent" />
                          </span>
                          <span className="text-gray-600 text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/services/${service.slug}`}
                      className="group inline-flex items-center gap-2 sm:gap-3 px-5 sm:px-6 py-2.5 sm:py-3 bg-brand text-white text-sm sm:text-base font-medium hover:bg-brand-hover transition-all"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </StaggerAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gray-50">
        <div className="container-custom">
          <ScrollAnimation direction="up">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="font-display text-3xl lg:text-4xl font-medium text-gray-900 mb-6">
                Ready to Transform Your Space?
              </h2>
              <p className="text-gray-600 text-lg mb-8">
                Let&apos;s discuss your project and create something beautiful together.
                Get a free consultation and quote today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-brand text-white font-medium hover:bg-brand-hover transition-all"
                >
                  Get Free Quote
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href="tel:+14165550123"
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-gray-300 text-gray-700 font-medium hover:border-brand hover:text-brand transition-all"
                >
                  Call Us Now
                </a>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>
    </main>
  );
}
