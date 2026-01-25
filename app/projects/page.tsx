'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin } from 'lucide-react';
import { ScrollAnimation, StaggerAnimation } from '@/components/ui';
import { projects, projectCategories, stats } from '@/lib/data/siteData';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.categorySlug === activeCategory);

  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-28 pb-16 lg:pt-32 lg:pb-20 bg-brand overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand to-brand-light opacity-50" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />

        <div className="container-custom relative z-10">
          <ScrollAnimation direction="up">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-3 mb-4">
                <span className="w-10 h-px bg-accent" />
                <span className="text-accent text-xs font-medium tracking-[0.2em] uppercase">
                  Our Portfolio
                </span>
              </span>
              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-medium text-white leading-tight mb-4">
                Projects That
                <span className="text-accent-light"> Inspire</span>
              </h1>
              <p className="text-base lg:text-lg text-white/70 max-w-xl leading-relaxed">
                From building envelope repairs to large-scale renovations, our work reflects
                the quality, precision, and expertise we bring to every job.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-6 bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <div key={stat.id} className="text-center">
                <div className="font-display text-2xl lg:text-3xl font-medium text-brand mb-0.5">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-gray-500 text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter & Projects Grid */}
      <section className="py-12 lg:py-16 bg-gray-50">
        <div className="container-custom">
          {/* Category Filter */}
          <ScrollAnimation direction="up">
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {projectCategories.map((category) => (
                <button
                  key={category.slug}
                  onClick={() => setActiveCategory(category.slug)}
                  className={`px-5 py-2.5 text-sm font-medium transition-all ${
                    activeCategory === category.slug
                      ? 'bg-brand text-white'
                      : 'bg-white text-gray-600 border border-gray-200 hover:border-brand hover:text-brand'
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </ScrollAnimation>

          {/* Projects Grid */}
          <StaggerAnimation direction="up" staggerDelay={100} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                href={`/projects/${project.slug}`}
                className="group bg-white overflow-hidden hover:shadow-lg transition-all"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-brand via-brand-light to-secondary" />
                  {/* Placeholder content - replace with actual Image component when images available */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white/30 text-xs">{project.title}</span>
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/40 transition-all duration-300" />
                  {/* Category Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-3 py-1 bg-white/90 text-brand text-xs font-medium">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-display text-lg font-medium text-gray-900 mb-2 group-hover:text-brand transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1.5 text-gray-500 text-xs mb-3">
                    <MapPin className="w-3.5 h-3.5" />
                    {project.location}
                  </div>
                  <p className="text-gray-600 text-sm line-clamp-2 mb-4">
                    {project.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-brand font-medium text-sm group-hover:gap-3 transition-all">
                    View Project
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </StaggerAnimation>

          {/* Empty State */}
          {filteredProjects.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 mb-4">No projects found in this category.</p>
              <button
                onClick={() => setActiveCategory('all')}
                className="text-brand font-medium hover:underline"
              >
                View all projects
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 lg:py-16 bg-brand">
        <div className="container-custom">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h2 className="font-display text-2xl lg:text-3xl font-medium text-white mb-2">
                Ready to Start Your Project?
              </h2>
              <p className="text-white/70 text-sm">
                Let&apos;s discuss how we can transform your space.
              </p>
            </div>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 px-6 py-3 bg-accent text-brand-dark text-sm font-medium hover:bg-accent-hover transition-all"
            >
              Get Free Quote
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
