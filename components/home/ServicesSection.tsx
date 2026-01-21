import Link from 'next/link';
import { Home, Bath, Warehouse, Building2 } from 'lucide-react';
import { ScrollAnimation, StaggerAnimation } from '@/components/ui';
import { services } from '@/lib/data/siteData';

const iconMap = {
  'kitchen-renovation': Home,
  'bathroom-renovation': Bath,
  'basement-finishing': Warehouse,
  'full-home-renovation': Building2,
};

export default function ServicesSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <ScrollAnimation direction="up" className="text-center mb-14">
          <h2 className="section-heading">Our Services</h2>
        </ScrollAnimation>

        {/* Services Grid */}
        <StaggerAnimation
          direction="up"
          staggerDelay={100}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => {
            const Icon = iconMap[service.slug as keyof typeof iconMap] || Home;

            return (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group relative block aspect-[3/4] overflow-hidden"
              >
                {/* Background Image Placeholder */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-light to-brand group-hover:scale-105 transition-transform duration-500" />

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
