import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Phone, Home, Bath, Warehouse, Building2, Car, Layers, PaintBucket, Building, Paintbrush, Droplets } from 'lucide-react';
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

// Map service slugs to actual images (hero image first, then content images - all different)
const serviceImageSets: Record<string, { hero: string; content: string[] }> = {
  'parking-restoration': {
    hero: '/images/parking/parking-structure.jpg',
    content: [
      '/images/parking/parking-web-1.jpg',
      '/images/parking/parking-web-2.jpg',
      '/images/parking/parking-web-3.jpg',
      '/images/parking/parking-2.jpg',
      '/images/parking/parking-8.jpg',
    ],
  },
  'swing-stage-services': {
    hero: '/images/stage/stage-1.jpg',
    content: [
      '/images/stage/stage-assembly.jpg',
      '/images/stage/stage-weight.jpg',
      '/images/wallpanel/wallpanel-2.jpg',
    ],
  },
  'balcony-restoration': {
    hero: '/images/balcony/balcony-1.jpg',
    content: [
      '/images/balcony/balcony-2.jpg',
      '/images/balcony/balcony-3.jpg',
      '/images/patching/patching-2.jpg',
    ],
  },
  'masonry-services': {
    hero: '/images/masonry/masonry-1.jpg',
    content: [
      '/images/masonry/masonry-5.jpg',
      '/images/masonry/masonry-8.jpg',
      '/images/masonry/masonry-12.jpg',
      '/images/masonry/masonry-16.jpg',
      '/images/masonry/masonry-20.jpg',
    ],
  },
  'stucco-services': {
    hero: '/images/caulking/caulking-3.jpg',
    content: [
      '/images/patching/patching-1.jpg',
      '/images/caulking/caulking-2.jpg',
      '/images/gallery/stucco-4.jpg',
      '/images/tile/tile-1.jpg',
      '/images/patching/patching-2.jpg',
    ],
  },
  'high-rise-renovation': {
    hero: '/images/wallpanel/wallpanel-4.jpg',
    content: [
      '/images/wallpanel/wallpanel-1.jpg',
      '/images/wallpanel/wallpanel-5.jpg',
      '/images/wallpanel/wallpanel-3.jpg',
      '/images/wallpanel/wallpanel-2.jpg',
    ],
  },
  'underground-parking': {
    hero: '/images/parking/parking-garage.png',
    content: [
      '/images/parking/parking-6.jpg',
      '/images/parking/parking-patching.jpg',
      '/images/parking/parking-rebar.jpg',
      '/images/parking/parking-2.jpg',
    ],
  },
  'interior-exterior': {
    hero: '/images/wallpanel/wallpanel-3.jpg',
    content: [
      '/images/tile/tile-2.jpg',
      '/images/tile/tile-1.jpg',
      '/images/tile/tile-3.jpg',
      '/images/siding/siding-2.png',
      '/images/wallpanel/wallpanel-1.jpg',
    ],
  },
  'waterproofing': {
    hero: '/images/parking/parking-caulking-coating.jpg',
    content: [
      '/images/caulking/caulking-coating.jpg',
      '/images/gallery/waterproofing-4.jpg',
      '/images/parking/parking-web-3.jpg',
      '/images/parking/parking-6.jpg',
    ],
  },
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

  // Get images for this service
  const imageSet = serviceImageSets[slug] || serviceImageSets['parking-restoration'];
  const heroImage = imageSet.hero;
  const contentImages = imageSet.content;

  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 lg:pt-32 lg:pb-20 bg-brand overflow-hidden">
        {/* Background Image - use hero image */}
        <Image
          src={heroImage}
          alt={`${service.title} background`}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-brand/85" />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand to-brand-light opacity-50" />

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
                <div className="relative aspect-[4/3] overflow-hidden mb-3 rounded-lg">
                  <Image
                    src={contentImages[0]}
                    alt={service.gallery[0]?.alt || service.title}
                    fill
                    className="object-cover"
                  />
                  {/* Caption overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent">
                    <span className="text-white text-sm font-medium">{service.gallery[0]?.caption || 'Featured Work'}</span>
                  </div>
                </div>
                {/* Two smaller images below */}
                <div className="grid grid-cols-2 gap-3">
                  {[1, 2].map((index) => (
                    <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-lg">
                      <Image
                        src={contentImages[index]}
                        alt={service.gallery[index]?.alt || `${service.title} work ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                      {/* Caption overlay */}
                      <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent">
                        <span className="text-white text-xs font-medium">{service.gallery[index]?.caption || `Project ${index + 1}`}</span>
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
        images={contentImages.map((src: string, index: number) => ({
          src,
          alt: service.gallery[index]?.alt || `${service.title} project ${index + 1}`,
          caption: service.gallery[index]?.caption || `Project ${index + 1}`,
        }))}
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
