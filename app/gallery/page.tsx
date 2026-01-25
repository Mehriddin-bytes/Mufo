'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, X, ChevronLeft, ChevronRight, ChevronDown, Grid3X3, LayoutGrid } from 'lucide-react';
import { galleryImages, galleryCategories } from '@/lib/data/siteData';
import { ScrollAnimation, StaggerAnimation } from '@/components/ui';

// Number of categories to show on mobile before "View More"
const MOBILE_VISIBLE_COUNT = 4;

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('grid');
  const [showAllCategories, setShowAllCategories] = useState(false);

  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.categorySlug === activeCategory);

  const currentIndex = selectedImage
    ? filteredImages.findIndex(img => img.id === selectedImage.id)
    : -1;

  const handlePrev = () => {
    if (currentIndex > 0) {
      setSelectedImage(filteredImages[currentIndex - 1]);
    } else {
      setSelectedImage(filteredImages[filteredImages.length - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[currentIndex + 1]);
    } else {
      setSelectedImage(filteredImages[0]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') handlePrev();
    if (e.key === 'ArrowRight') handleNext();
    if (e.key === 'Escape') setSelectedImage(null);
  };

  // Categories to display based on screen size and showAllCategories state
  const visibleCategories = showAllCategories
    ? galleryCategories
    : galleryCategories.slice(0, MOBILE_VISIBLE_COUNT);

  const hiddenCount = galleryCategories.length - MOBILE_VISIBLE_COUNT;

  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-brand overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand to-brand-light opacity-50" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />

        <div className="container-custom relative z-10">
          <ScrollAnimation direction="up">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-3 mb-6">
                <span className="w-12 h-px bg-accent" />
                <span className="text-accent text-sm font-medium tracking-[0.2em] uppercase">
                  Our Gallery
                </span>
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-white leading-tight mb-6">
                Project
                <br />
                <span className="text-accent-light">Gallery</span>
              </h1>
              <p className="text-lg text-white/70 max-w-xl">
                Browse through our collection of completed projects. Each image showcases
                the quality and craftsmanship we bring to every job.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Filter & Gallery Section */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="container-custom">
          {/* Filter Bar - Centered like Projects page */}
          <ScrollAnimation direction="up">
            <div className="flex flex-col items-center gap-4 mb-10">
              {/* Category Filters - Desktop: show all, Mobile: show limited with "View More" */}
              <div className="flex flex-wrap justify-center gap-2">
                {/* On desktop, show all categories */}
                <div className="hidden sm:flex flex-wrap justify-center gap-2">
                  {galleryCategories.map((cat) => (
                    <button
                      key={cat.slug}
                      onClick={() => setActiveCategory(cat.slug)}
                      className={`px-5 py-2.5 text-sm font-medium transition-all ${
                        activeCategory === cat.slug
                          ? 'bg-brand text-white'
                          : 'bg-white text-gray-600 border border-gray-200 hover:border-brand hover:text-brand'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>

                {/* On mobile, show limited categories with "View More" */}
                <div className="flex sm:hidden flex-wrap justify-center gap-2">
                  {visibleCategories.map((cat) => (
                    <button
                      key={cat.slug}
                      onClick={() => setActiveCategory(cat.slug)}
                      className={`px-4 py-2 text-sm font-medium transition-all ${
                        activeCategory === cat.slug
                          ? 'bg-brand text-white'
                          : 'bg-white text-gray-600 border border-gray-200 hover:border-brand hover:text-brand'
                      }`}
                    >
                      {cat.label}
                    </button>
                  ))}

                  {/* View More / View Less button */}
                  {hiddenCount > 0 && (
                    <button
                      onClick={() => setShowAllCategories(!showAllCategories)}
                      className="px-4 py-2 text-sm font-medium bg-gray-100 text-gray-600 border border-gray-200 hover:border-brand hover:text-brand transition-all flex items-center gap-1"
                    >
                      {showAllCategories ? 'Less' : `+${hiddenCount} More`}
                      <ChevronDown className={`w-4 h-4 transition-transform ${showAllCategories ? 'rotate-180' : ''}`} />
                    </button>
                  )}
                </div>
              </div>

              {/* View Toggle & Results Count */}
              <div className="flex items-center justify-center gap-4">
                <p className="text-gray-500 text-sm">
                  {filteredImages.length} {filteredImages.length === 1 ? 'photo' : 'photos'}
                </p>
                <div className="w-px h-4 bg-gray-300" />
                <div className="flex items-center gap-1 bg-white border border-gray-200 p-1 rounded-lg">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-1.5 rounded transition-colors ${
                      viewMode === 'grid' ? 'bg-brand text-white' : 'text-gray-500 hover:text-brand'
                    }`}
                    aria-label="Grid view"
                  >
                    <Grid3X3 className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('masonry')}
                    className={`p-1.5 rounded transition-colors ${
                      viewMode === 'masonry' ? 'bg-brand text-white' : 'text-gray-500 hover:text-brand'
                    }`}
                    aria-label="Masonry view"
                  >
                    <LayoutGrid className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </ScrollAnimation>

          {/* Gallery Grid */}
          {viewMode === 'grid' ? (
            <StaggerAnimation
              direction="up"
              staggerDelay={50}
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4"
            >
              {filteredImages.map((image) => (
                <button
                  key={image.id}
                  onClick={() => setSelectedImage(image)}
                  className="group relative aspect-square overflow-hidden rounded-lg sm:rounded-xl bg-gray-100"
                >
                  {/* Placeholder gradient - replace with actual images */}
                  <div className="absolute inset-0 bg-gradient-to-br from-brand via-brand-light to-secondary" />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />

                  {/* Content on hover */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-white font-medium text-sm text-center px-4">
                      {image.title}
                    </span>
                    <span className="text-white/70 text-xs mt-1">
                      {image.category}
                    </span>
                  </div>
                </button>
              ))}
            </StaggerAnimation>
          ) : (
            <StaggerAnimation
              direction="up"
              staggerDelay={50}
              className="columns-2 sm:columns-3 lg:columns-4 gap-3 sm:gap-4 space-y-3 sm:space-y-4"
            >
              {filteredImages.map((image, index) => {
                // Vary heights for masonry effect
                const heights = ['aspect-square', 'aspect-[3/4]', 'aspect-[4/3]', 'aspect-[3/4]'];
                const heightClass = heights[index % heights.length];

                return (
                  <button
                    key={image.id}
                    onClick={() => setSelectedImage(image)}
                    className={`group relative w-full ${heightClass} overflow-hidden rounded-lg sm:rounded-xl bg-gray-100 break-inside-avoid`}
                  >
                    {/* Placeholder gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-brand via-brand-light to-secondary" />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />

                    {/* Content on hover */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-white font-medium text-sm text-center px-4">
                        {image.title}
                      </span>
                      <span className="text-white/70 text-xs mt-1">
                        {image.category}
                      </span>
                    </div>
                  </button>
                );
              })}
            </StaggerAnimation>
          )}

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 mb-4">No photos found in this category.</p>
              <button
                onClick={() => setActiveCategory('all')}
                className="text-brand font-medium hover:underline"
              >
                View all photos
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-16 bg-brand">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="text-center lg:text-left">
              <h2 className="font-display text-2xl lg:text-3xl font-medium text-white mb-2">
                Ready to Start Your Project?
              </h2>
              <p className="text-white/70 text-sm">
                Let&apos;s discuss how we can transform your space.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-brand-dark text-sm font-medium hover:bg-accent-hover transition-all"
              >
                Get Free Quote
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 border border-white/20 text-white text-sm font-medium hover:bg-white/20 transition-all"
              >
                View Projects
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={() => setSelectedImage(null)}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Previous Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Image Container */}
          <div
            className="relative max-w-5xl max-h-[80vh] mx-auto px-12 sm:px-16"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Placeholder - Replace with actual image */}
            <div className="w-full aspect-[4/3] bg-gradient-to-br from-brand via-brand-light to-secondary rounded-lg" />

            {/* Image Info */}
            <div className="absolute bottom-0 left-12 right-12 sm:left-16 sm:right-16 p-4 sm:p-6 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
              <h3 className="text-white font-medium text-base sm:text-lg">{selectedImage.title}</h3>
              <p className="text-white/70 text-xs sm:text-sm">{selectedImage.category}</p>
            </div>
          </div>

          {/* Image Counter */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-xs sm:text-sm">
            {currentIndex + 1} / {filteredImages.length}
          </div>
        </div>
      )}
    </main>
  );
}
