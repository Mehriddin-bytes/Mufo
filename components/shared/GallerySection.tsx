import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ScrollAnimation, StaggerAnimation } from '@/components/ui';

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface GallerySectionProps {
  label?: string;
  title: string;
  images: GalleryImage[];
  viewAllLink?: string;
  viewAllText?: string;
  className?: string;
}

export default function GallerySection({
  label = 'Our Work',
  title,
  images,
  viewAllLink = '/projects',
  viewAllText = 'View All Projects',
  className = '',
}: GallerySectionProps) {
  return (
    <section className={`section-padding bg-gray-50 ${className}`}>
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

        <StaggerAnimation direction="up" staggerDelay={100} className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {images.map((img, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden cursor-pointer ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <div className={`relative ${index === 0 ? 'aspect-square md:aspect-[4/3]' : 'aspect-square'}`}>
                {/* Gradient placeholder - replace with actual images */}
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  index % 3 === 0
                    ? 'from-brand via-brand-light to-secondary'
                    : index % 3 === 1
                      ? 'from-secondary via-brand to-brand-dark'
                      : 'from-brand-dark via-secondary to-brand-light'
                } group-hover:scale-105 transition-transform duration-500`} />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/60 transition-all duration-300" />

                {/* Caption - shows on hover */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {img.caption && (
                    <span className="text-white font-medium text-lg">{img.caption}</span>
                  )}
                  <span className="text-white/60 text-sm mt-1">{img.alt}</span>
                </div>

                {/* Always visible caption on mobile */}
                {img.caption && (
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/60 to-transparent md:hidden">
                    <span className="text-white text-sm font-medium">{img.caption}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </StaggerAnimation>

        {viewAllLink && (
          <ScrollAnimation direction="up">
            <div className="text-center mt-10">
              <Link
                href={viewAllLink}
                className="group inline-flex items-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:border-brand hover:text-brand transition-all"
              >
                {viewAllText}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollAnimation>
        )}
      </div>
    </section>
  );
}
