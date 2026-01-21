import Link from 'next/link';
import { ArrowRight, Home, Bath, Warehouse, Building2, Check } from 'lucide-react';
import { services } from '@/lib/data/siteData';
import { ScrollAnimation, StaggerAnimation } from '@/components/ui';

const serviceIcons = {
  'kitchen-renovation': Home,
  'bathroom-renovation': Bath,
  'basement-finishing': Warehouse,
  'full-home-renovation': Building2,
};

// Different gradient placeholders for variety
const imagePlaceholders = [
  'from-brand via-brand-light to-secondary',
  'from-secondary via-brand to-brand-dark',
  'from-brand-dark via-secondary to-brand-light',
  'from-brand-light via-brand-dark to-brand',
];

export const metadata = {
  title: 'Our Services | Mufo Renovation',
  description: 'Explore our comprehensive renovation services including kitchen, bathroom, basement, and full home renovations.',
};

export default function ServicesPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-brand">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand to-brand-light opacity-50" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />

        <div className="container-custom relative z-10">
          <ScrollAnimation direction="up">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-3 mb-6">
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
              <p className="text-lg text-white/70 max-w-xl">
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
            className="space-y-20"
          >
            {services.map((service, index) => {
              const Icon = serviceIcons[service.slug as keyof typeof serviceIcons] || Home;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={service.id}
                  className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${
                    isEven ? '' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Image Side */}
                  <div className={`relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="relative aspect-[4/3] overflow-hidden">
                      {/* Gradient Placeholder */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${imagePlaceholders[index % imagePlaceholders.length]}`} />

                      {/* Overlay pattern */}
                      <div className="absolute inset-0 bg-black/10" />

                      {/* Placeholder text */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center text-white/40">
                          <Icon className="w-16 h-16 mx-auto mb-3" strokeWidth={1} />
                          <span className="text-sm">Image Placeholder</span>
                        </div>
                      </div>
                    </div>

                    {/* Floating number */}
                    <div className="absolute -bottom-6 -right-6 lg:-right-10 w-20 h-20 lg:w-24 lg:h-24 bg-accent flex items-center justify-center shadow-lg">
                      <span className="font-display text-3xl lg:text-4xl text-brand-dark font-semibold">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className={isEven ? 'lg:order-2' : 'lg:order-1'}>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-brand/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-brand" />
                      </div>
                      <span className="text-sm font-medium text-gray-400 uppercase tracking-wider">
                        Service {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <h2 className="font-display text-3xl lg:text-4xl font-medium text-gray-900 mb-4">
                      {service.title}
                    </h2>

                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <span className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-accent" />
                          </span>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/services/${service.slug}`}
                      className="group inline-flex items-center gap-3 px-6 py-3 bg-brand text-white font-medium hover:bg-brand-hover transition-all"
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
