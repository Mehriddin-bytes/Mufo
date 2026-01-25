import Link from 'next/link';
import Image from 'next/image';
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
    <section className={`py-12 lg:py-16 bg-gray-50 ${className}`}>
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

        <StaggerAnimation direction="up" staggerDelay={100} className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden cursor-pointer rounded-lg ${
                index === 0 ? 'md:col-span-2 md:row-span-2' : ''
              }`}
            >
              <div className={`relative ${index === 0 ? 'aspect-square md:aspect-[4/3]' : 'aspect-square'}`}>
                {/* Real image */}
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/60 transition-all duration-300" />

                {/* Caption - shows on hover */}
                <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {img.caption && (
                    <span className="text-white font-medium text-base">{img.caption}</span>
                  )}
                  <span className="text-white/60 text-xs mt-1">{img.alt}</span>
                </div>

                {/* Always visible caption on mobile */}
                {img.caption && (
                  <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/60 to-transparent md:hidden">
                    <span className="text-white text-xs font-medium">{img.caption}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </StaggerAnimation>

        {viewAllLink && (
          <ScrollAnimation direction="up">
            <div className="text-center mt-8">
              <Link
                href={viewAllLink}
                className="group inline-flex items-center gap-2 px-5 py-2.5 border border-gray-300 text-gray-700 text-sm font-medium hover:border-brand hover:text-brand transition-all"
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
