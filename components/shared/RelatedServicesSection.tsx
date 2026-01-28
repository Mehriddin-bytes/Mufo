import Link from 'next/link';
import { ArrowRight, Car, Building2, Home, Layers, PaintBucket, Building, Warehouse, Paintbrush, Droplets, LucideIcon } from 'lucide-react';
import { ScrollAnimation, StaggerAnimation } from '@/components/ui';

interface RelatedService {
  id: string;
  slug: string;
  title: string;
  description: string;
}

interface RelatedServicesSectionProps {
  label?: string;
  title?: string;
  services: RelatedService[];
  className?: string;
}

const serviceIcons: Record<string, LucideIcon> = {
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

export default function RelatedServicesSection({
  label = 'Explore More',
  title = 'Other Services',
  services,
  className = '',
}: RelatedServicesSectionProps) {
  return (
    <section className={`py-12 lg:py-16 bg-white ${className}`}>
      <div className="container-custom">
        <ScrollAnimation direction="up">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <span className="inline-flex items-center gap-3 justify-center mb-3">
              <span className="w-8 h-px bg-accent" />
              <span className="text-accent-hover text-xs font-medium tracking-[0.2em] uppercase">
                {label}
              </span>
              <span className="w-8 h-px bg-accent" />
            </span>
            <h2 className="font-display text-2xl lg:text-3xl font-medium text-gray-900">
              {title}
            </h2>
          </div>
        </ScrollAnimation>

        <StaggerAnimation direction="up" staggerDelay={100} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => {
            const Icon = serviceIcons[service.slug] || Home;
            return (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group block bg-gray-50 p-5 hover:bg-brand transition-colors duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon className="w-5 h-5 text-brand group-hover:text-accent transition-colors duration-300" />
                  <h3 className="font-display text-lg font-medium text-gray-900 group-hover:text-white transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm mb-3 group-hover:text-white/80 transition-colors duration-300 line-clamp-2">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 text-brand font-medium text-sm group-hover:text-accent transition-colors duration-300">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </Link>
            );
          })}
        </StaggerAnimation>
      </div>
    </section>
  );
}
