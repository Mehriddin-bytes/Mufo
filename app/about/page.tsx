import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Gem, Eye, Clock, Shield } from 'lucide-react';
import { ScrollAnimation } from '@/components/ui';
import { stats, valueProps } from '@/lib/data/siteData';
import { TimelineSection, CertificationsSection } from '@/components/shared';

export const metadata = {
  title: 'About Us | Mufo Renovation',
  description: 'Learn about Mufo Renovation - over 12 years of expert craftsmanship, transforming homes across the Greater Toronto Area.',
};

const valueIcons = {
  Gem: Gem,
  Eye: Eye,
  Clock: Clock,
  Shield: Shield,
};

const milestones = [
  { year: '2012', title: 'Founded in Toronto', description: 'Started with a small team and a commitment to quality.' },
  { year: '2015', title: 'Expanded Services', description: 'Added full home renovation to our service offerings.' },
  { year: '2018', title: '200th Project', description: 'Celebrated our 200th completed renovation project.' },
  { year: '2021', title: 'Team Growth', description: 'Expanded to 25+ skilled craftsmen and professionals.' },
  { year: '2024', title: '350+ Projects', description: 'Continuing to transform homes across the GTA.' },
];

export default function AboutPage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-brand overflow-hidden">
        {/* Background Image */}
        <Image
          src="/images/masonry/masonry-web-2.jpg"
          alt="Professional construction work"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-brand/85" />
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand to-brand-light opacity-50" />

        <div className="container-custom relative z-10">
          <ScrollAnimation direction="up">
            <div className="max-w-3xl mx-auto text-center lg:mx-0 lg:text-left">
              <span className="inline-flex items-center gap-3 mb-6 justify-center lg:justify-start">
                <span className="w-12 h-px bg-accent" />
                <span className="text-accent text-sm font-medium tracking-[0.2em] uppercase">
                  Our Story
                </span>
              </span>
              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-medium text-white leading-tight mb-6">
                Building Dreams,
                <br />
                <span className="text-accent-light">One Home at a Time</span>
              </h1>
              <p className="text-lg text-white/70 max-w-xl mx-auto lg:mx-0">
                For over 12 years, Mufo Renovation has been transforming houses into homes.
                We combine traditional craftsmanship with modern design to create spaces
                that inspire and endure.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-6 sm:py-8 bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat) => (
              <div key={stat.id} className="text-center px-2">
                <div className="font-display text-2xl sm:text-3xl lg:text-4xl font-medium text-brand mb-0.5 sm:mb-1">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-gray-600 text-[10px] sm:text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-12 lg:py-16 bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Image - Full width on mobile */}
            <ScrollAnimation direction="left">
              <div className="relative mb-8 lg:mb-0">
                {/* Main Image */}
                <div className="aspect-[4/3] lg:aspect-[4/3] overflow-hidden relative">
                  <Image
                    src="/images/about/about-team.jpg"
                    alt="Mufo Renovation team at work"
                    fill
                    className="object-cover"
                  />
                </div>
                {/* Second Image - smaller on mobile */}
                <div className="absolute -bottom-4 right-4 lg:-bottom-6 lg:-right-8 w-24 sm:w-36 lg:w-48 aspect-square overflow-hidden shadow-xl">
                  <Image
                    src="/images/masonry/masonry-1.jpg"
                    alt="Mufo Renovation craftsmanship"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </ScrollAnimation>

            {/* Content - Centered on mobile */}
            <ScrollAnimation direction="right">
              <div className="text-center lg:text-left">
                <span className="inline-flex items-center gap-3 mb-3 justify-center lg:justify-start">
                  <span className="w-8 h-px bg-accent" />
                  <span className="text-accent-hover text-xs font-medium tracking-[0.2em] uppercase">
                    Who We Are
                  </span>
                </span>
                <h2 className="font-display text-2xl lg:text-3xl font-medium text-gray-900 mb-4">
                  A Legacy of Quality
                  <span className="text-accent-hover"> Craftsmanship</span>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
                  Founded in 2012, Mufo Renovation began with a simple belief: every home
                  deserves the finest craftsmanship. What started as a small team of passionate
                  craftsmen has grown into one of Toronto&apos;s most trusted renovation companies.
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Our founder, Michael Foley, brought together a team of skilled artisans who
                  share his commitment to excellence. Today, we continue that tradition, treating
                  every project with the same dedication to quality.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
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

      {/* Why Choose Us - Redesigned */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <ScrollAnimation direction="left">
              <div>
                <span className="inline-flex items-center gap-3 mb-4">
                  <span className="w-10 h-px bg-accent" />
                  <span className="text-accent-hover text-sm font-medium tracking-[0.2em] uppercase">
                    Why Choose Us
                  </span>
                </span>
                <h2 className="font-display text-3xl lg:text-4xl font-medium text-gray-900 mb-6">
                  What Sets Us
                  <span className="text-brand"> Apart</span>
                </h2>
                <p className="text-gray-600 leading-relaxed mb-8">
                  We don&apos;t just renovate buildings – we restore confidence. Our commitment to excellence,
                  combined with decades of industry experience, makes us the trusted choice for property
                  managers and building owners across the GTA.
                </p>

                {/* Stats Highlight */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="border-l-4 border-brand pl-4">
                    <div className="font-display text-3xl font-semibold text-brand">12+</div>
                    <div className="text-gray-600 text-sm">Years Experience</div>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <div className="font-display text-3xl font-semibold text-brand">350+</div>
                    <div className="text-gray-600 text-sm">Projects Completed</div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            {/* Right - Value Props Grid */}
            <ScrollAnimation direction="right">
              <div className="grid grid-cols-2 gap-4">
                {valueProps.map((prop, index) => {
                  const Icon = valueIcons[prop.icon as keyof typeof valueIcons] || Gem;
                  const isLarge = index === 0;
                  return (
                    <div
                      key={prop.id}
                      className={`group relative overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                        isLarge ? 'col-span-2 bg-brand' : 'bg-white shadow-md'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                        isLarge ? 'bg-accent' : 'bg-brand/10'
                      }`}>
                        <Icon className={`w-6 h-6 ${isLarge ? 'text-brand-dark' : 'text-brand'}`} />
                      </div>
                      <h3 className={`font-display text-lg font-medium mb-2 ${
                        isLarge ? 'text-white' : 'text-gray-900'
                      }`}>
                        {prop.title}
                      </h3>
                      <p className={`text-sm leading-relaxed ${
                        isLarge ? 'text-white/80' : 'text-gray-600'
                      }`}>
                        {prop.description}
                      </p>
                      {/* Decorative Element */}
                      <div className={`absolute -bottom-4 -right-4 w-24 h-24 rounded-full opacity-10 ${
                        isLarge ? 'bg-white' : 'bg-brand'
                      }`} />
                    </div>
                  );
                })}
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Our Journey / Timeline */}
      <TimelineSection milestones={milestones} />

      {/* Certifications Section */}
      <CertificationsSection />
    </main>
  );
}
