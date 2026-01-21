import Link from 'next/link';
import { ArrowRight, Home, Bath, Warehouse, Building2, LucideIcon } from 'lucide-react';
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
  'kitchen-renovation': Home,
  'bathroom-renovation': Bath,
  'basement-finishing': Warehouse,
  'full-home-renovation': Building2,
};

export default function RelatedServicesSection({
  label = 'Explore More',
  title = 'Other Services',
  services,
  className = '',
}: RelatedServicesSectionProps) {
  return (
    <section className={`section-padding bg-white ${className}`}>
      <div className="container-custom">
        <ScrollAnimation direction="up">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-flex items-center gap-3 justify-center mb-4">
              <span className="w-10 h-px bg-accent" />
              <span className="text-accent-hover text-sm font-medium tracking-[0.2em] uppercase">
                {label}
              </span>
              <span className="w-10 h-px bg-accent" />
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-medium text-gray-900">
              {title}
            </h2>
          </div>
        </ScrollAnimation>

        <StaggerAnimation direction="up" staggerDelay={100} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = serviceIcons[service.slug] || Home;
            return (
              <Link
                key={service.id}
                href={`/services/${service.slug}`}
                className="group bg-gray-50 rounded-xl p-6 hover:bg-brand hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-brand/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                  <Icon className="w-6 h-6 text-brand group-hover:text-white transition-colors" />
                </div>
                <h3 className="font-display text-xl font-medium text-gray-900 mb-2 group-hover:text-white transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 group-hover:text-white/70 transition-colors line-clamp-2">
                  {service.description}
                </p>
                <span className="inline-flex items-center gap-2 text-brand font-medium text-sm group-hover:text-accent transition-colors">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            );
          })}
        </StaggerAnimation>
      </div>
    </section>
  );
}
