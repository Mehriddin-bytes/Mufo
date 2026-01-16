import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { ScrollAnimation, StaggerAnimation } from '@/components/ui';
import { services } from '@/lib/data/siteData';

export default function ServicesSection() {
  return (
    <section className="section-padding bg-brand-dark">
      <div className="container-custom">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <ScrollAnimation direction="up">
            <span className="section-label text-accent">Our Services</span>
            <h2 className="section-heading mt-4 text-white">
              Renovation Services
              <br />
              <span className="text-accent-light">Tailored to You</span>
            </h2>
          </ScrollAnimation>

          <ScrollAnimation direction="up" delay={100}>
            <p className="text-white/60 max-w-md lg:text-right">
              From kitchen makeovers to complete home transformations,
              we offer comprehensive renovation solutions.
            </p>
          </ScrollAnimation>
        </div>

        {/* Services Grid */}
        <StaggerAnimation
          direction="up"
          staggerDelay={100}
          className="grid md:grid-cols-2 gap-6"
        >
          {services.map((service, index) => (
            <Link
              key={service.id}
              href={`/services/${service.slug}`}
              className="group relative bg-white/5 border border-white/10 p-8 lg:p-10 hover:bg-white/10 hover:border-accent/30 transition-all duration-300"
            >
              {/* Number */}
              <span className="absolute top-6 right-6 font-display text-5xl text-white/5 group-hover:text-accent/20 transition-colors">
                0{index + 1}
              </span>

              {/* Content */}
              <div className="relative">
                <h3 className="font-display text-2xl lg:text-3xl text-white font-medium mb-4 group-hover:text-accent-light transition-colors">
                  {service.title}
                </h3>

                <p className="text-white/50 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-8">
                  {service.features.slice(0, 3).map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-white/40 text-sm">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Link */}
                <span className="inline-flex items-center gap-2 text-accent font-medium group-hover:gap-3 transition-all">
                  Learn More
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </StaggerAnimation>

        {/* Bottom CTA */}
        <ScrollAnimation direction="up" delay={300} className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-brand-dark font-medium hover:bg-accent-hover transition-all"
          >
            View All Services
            <ArrowUpRight className="w-5 h-5" />
          </Link>
        </ScrollAnimation>
      </div>
    </section>
  );
}
