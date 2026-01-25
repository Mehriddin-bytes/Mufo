import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight, Phone, Home, Bath, Warehouse, Building2 } from 'lucide-react';
import { services, siteConfig } from '@/lib/data/siteData';
import { ScrollAnimation } from '@/components/ui';
import {
  ProcessSection,
  GallerySection,
  FAQSection,
  RelatedServicesSection,
  PageCTASection,
  ServiceNavigation,
} from '@/components/shared';

const serviceIcons = {
  'kitchen-renovation': Home,
  'bathroom-renovation': Bath,
  'basement-finishing': Warehouse,
  'full-home-renovation': Building2,
};

// Generate static params for all services
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

// Generate metadata for each service
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: 'Service Not Found | Mufo Renovation',
    };
  }

  return {
    title: `${service.title} | Mufo Renovation`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const Icon = serviceIcons[service.slug as keyof typeof serviceIcons] || Home;
  const currentIndex = services.findIndex((s) => s.slug === slug);
  const prevService = currentIndex > 0 ? services[currentIndex - 1] : null;
  const nextService = currentIndex < services.length - 1 ? services[currentIndex + 1] : null;
  const otherServices = services.filter((s) => s.slug !== slug);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 lg:pt-32 lg:pb-20 bg-brand overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand to-brand-light opacity-50" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />

        <div className="container-custom relative z-10">
          <ScrollAnimation direction="up">
            <div className="max-w-3xl">
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-xs text-white/60 mb-4">
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
                <span>/</span>
                <Link href="/services" className="hover:text-white transition-colors">Services</Link>
                <span>/</span>
                <span className="text-white">{service.title}</span>
              </nav>

              {/* Tagline */}
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-lg bg-white/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <span className="text-accent text-xs font-medium tracking-[0.15em] uppercase">
                  {service.tagline}
                </span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-tight mb-4">
                {service.title}
              </h1>

              <p className="text-base lg:text-lg text-white/70 max-w-xl mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-brand-dark text-sm font-medium hover:bg-accent-hover transition-all"
                >
                  Get Free Quote
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\D/g, '')}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/30 text-white text-sm font-medium hover:bg-white/10 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </div>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* About This Service */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <ScrollAnimation direction="left">
              {/* Main Image with smaller images */}
              <div className="relative">
                {/* Main large image */}
                <div className="relative aspect-[4/3] overflow-hidden mb-3">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand via-brand-light to-secondary" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white/40">
                      <Icon className="w-14 h-14 mx-auto mb-2" strokeWidth={1} />
                      <span className="text-xs">{service.gallery[0]?.caption || 'Main Image'}</span>
                    </div>
                  </div>
                </div>
                {/* Two smaller images below */}
                <div className="grid grid-cols-2 gap-3">
                  {service.gallery.slice(1, 3).map((img, index) => (
                    <div key={index} className="relative aspect-[4/3] overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-brand to-brand-dark" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-white/40 text-xs">{img.caption}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="right">
              <div>
                <span className="inline-flex items-center gap-3 mb-3">
                  <span className="w-8 h-px bg-accent" />
                  <span className="text-accent-hover text-xs font-medium tracking-[0.2em] uppercase">
                    About This Service
                  </span>
                </span>
                <h2 className="font-display text-2xl lg:text-3xl font-medium text-gray-900 mb-4">
                  Expert {service.shortTitle} Solutions
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.longDescription}
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-brand text-white text-sm font-medium hover:bg-brand-hover transition-all"
                  >
                    Start Your Project
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/projects"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 border border-gray-300 text-gray-700 text-sm font-medium hover:border-brand hover:text-brand transition-all"
                  >
                    View Our Work
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <ProcessSection steps={service.process} />

      {/* Gallery Section */}
      <GallerySection
        title={`${service.shortTitle} Project Gallery`}
        images={service.gallery}
      />

      {/* FAQ Section */}
      <FAQSection
        title={`Common Questions About ${service.shortTitle} Renovation`}
        faqs={service.faqs}
      />

      {/* Other Services */}
      <RelatedServicesSection services={otherServices} />

      {/* Navigation */}
      <ServiceNavigation
        prevService={prevService}
        nextService={nextService}
      />

      {/* CTA Section */}
      <PageCTASection
        title={`Let's Transform Your ${service.shortTitle}`}
        description={`Ready to start your ${service.title.toLowerCase()} project? Contact us today for a free consultation and let's discuss how we can bring your vision to life.`}
      />
    </main>
  );
}
