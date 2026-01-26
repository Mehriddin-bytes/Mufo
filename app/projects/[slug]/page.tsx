import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowLeft, MapPin, Calendar, Clock, Check } from 'lucide-react';
import { ScrollAnimation } from '@/components/ui';
import { projects, siteConfig } from '@/lib/data/siteData';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: 'Project Not Found' };
  }

  return {
    title: `${project.title} | Mufo Renovation Projects`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Find related projects (same category, excluding current)
  const relatedProjects = projects
    .filter((p) => p.categorySlug === project.categorySlug && p.id !== project.id)
    .slice(0, 3);

  // If not enough related projects, add from other categories
  if (relatedProjects.length < 3) {
    const otherProjects = projects
      .filter((p) => p.id !== project.id && !relatedProjects.some((rp) => rp.id === p.id))
      .slice(0, 3 - relatedProjects.length);
    relatedProjects.push(...otherProjects);
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 lg:pt-32 lg:pb-20 bg-brand overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
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
                <Link href="/projects" className="hover:text-white transition-colors">Projects</Link>
                <span>/</span>
                <span className="text-white">{project.title}</span>
              </nav>

              {/* Category Badge */}
              <span className="inline-block px-3 py-1 bg-accent/20 text-accent text-xs font-medium mb-4">
                {project.category}
              </span>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-tight mb-4">
                {project.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-white/70 text-sm mb-6">
                <span className="inline-flex items-center gap-1.5">
                  <MapPin className="w-4 h-4" />
                  {project.location}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" />
                  {project.completionDate}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  {project.duration}
                </span>
              </div>

              <p className="text-base lg:text-lg text-white/70 max-w-xl leading-relaxed">
                {project.description}
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Main Gallery */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container-custom">
          <ScrollAnimation direction="up">
            {/* Main Image */}
            <div className="relative aspect-[16/9] overflow-hidden mb-4 rounded-lg">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
              />
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-3 gap-4">
              {project.gallery.map((image, index) => (
                <div key={index} className="relative aspect-[4/3] overflow-hidden group cursor-pointer rounded-lg">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white text-sm font-medium">{image.caption || image.alt}</span>
                  </div>
                </div>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Project Details */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Left Column - Description */}
            <div className="lg:col-span-2">
              <ScrollAnimation direction="left">
                <span className="inline-flex items-center gap-3 mb-3">
                  <span className="w-8 h-px bg-accent" />
                  <span className="text-accent-hover text-xs font-medium tracking-[0.2em] uppercase">
                    Project Overview
                  </span>
                </span>
                <h2 className="font-display text-2xl lg:text-3xl font-medium text-gray-900 mb-4">
                  About This Project
                </h2>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Our team worked closely with the property managers to understand their vision and deliver results that exceed expectations. Every detail was carefully considered, from material selection to final finishing touches.
                </p>
              </ScrollAnimation>
            </div>

            {/* Right Column - Features */}
            <div>
              <ScrollAnimation direction="right">
                <div className="bg-white p-6 border border-gray-200">
                  <h3 className="font-display text-lg font-medium text-gray-900 mb-4">
                    Project Features
                  </h3>
                  <ul className="space-y-3">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-5 h-5 bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-accent-hover" />
                        </div>
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <Link
                      href="/contact"
                      className="group w-full flex items-center justify-center gap-2 px-5 py-3 bg-brand text-white text-sm font-medium hover:bg-brand-hover transition-all"
                    >
                      Start Similar Project
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <section className="py-12 lg:py-16 bg-white">
          <div className="container-custom">
            <ScrollAnimation direction="up">
              <div className="text-center max-w-2xl mx-auto mb-8">
                <span className="inline-flex items-center gap-3 justify-center mb-3">
                  <span className="w-8 h-px bg-accent" />
                  <span className="text-accent-hover text-xs font-medium tracking-[0.2em] uppercase">
                    More Work
                  </span>
                  <span className="w-8 h-px bg-accent" />
                </span>
                <h2 className="font-display text-2xl lg:text-3xl font-medium text-gray-900">
                  Related Projects
                </h2>
              </div>
            </ScrollAnimation>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {relatedProjects.map((relatedProject) => (
                <Link
                  key={relatedProject.id}
                  href={`/projects/${relatedProject.slug}`}
                  className="group bg-gray-50 overflow-hidden hover:shadow-md transition-all"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={relatedProject.image}
                      alt={relatedProject.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-display text-base font-medium text-gray-900 mb-1 group-hover:text-brand transition-colors">
                      {relatedProject.title}
                    </h3>
                    <div className="flex items-center gap-1 text-gray-500 text-xs">
                      <MapPin className="w-3 h-3" />
                      {relatedProject.location}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <ScrollAnimation direction="up">
              <div className="text-center mt-8">
                <Link
                  href="/projects"
                  className="group inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 text-gray-700 text-sm font-medium hover:border-brand hover:text-brand transition-all"
                >
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  Back to All Projects
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-12 lg:py-16 bg-brand">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-display text-2xl lg:text-3xl font-medium text-white mb-2">
                Love What You See?
              </h2>
              <p className="text-white/70 text-sm">
                Contact us today to discuss your renovation project.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={`tel:${siteConfig.contact.phone.replace(/\D/g, '')}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/30 text-white text-sm font-medium hover:bg-white/10 transition-all"
              >
                {siteConfig.contact.phone}
              </a>
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-brand-dark text-sm font-medium hover:bg-accent-hover transition-all"
              >
                Get Free Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
