import Link from 'next/link';
import { ArrowRight, Gem, Eye, Clock, Shield, Users, Award, Target, Heart } from 'lucide-react';
import { ScrollAnimation, StaggerAnimation } from '@/components/ui';
import { siteConfig, stats, valueProps } from '@/lib/data/siteData';
import { PageCTASection } from '@/components/shared';

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

const teamMembers = [
  {
    name: 'Michael Foley',
    role: 'Founder & Lead Designer',
    bio: 'With over 20 years in renovation, Michael founded Mufo with a vision to bring exceptional craftsmanship to every home.',
  },
  {
    name: 'Sarah Chen',
    role: 'Project Manager',
    bio: 'Sarah ensures every project runs smoothly, coordinating teams and keeping clients informed at every step.',
  },
  {
    name: 'David Martinez',
    role: 'Master Craftsman',
    bio: 'David leads our carpentry team with precision and an eye for detail that defines our quality standard.',
  },
  {
    name: 'Emily Watson',
    role: 'Interior Design Consultant',
    bio: 'Emily helps clients envision their spaces, bringing fresh ideas and design expertise to every consultation.',
  },
];

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
        <div className="absolute inset-0 bg-gradient-to-br from-brand-dark via-brand to-brand-light opacity-50" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Cpath%20d%3D%22M36%2034v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6%2034v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6%204V0H4v4H0v2h4v4h2V6h4V4H6z%22%2F%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-30" />

        <div className="container-custom relative z-10">
          <ScrollAnimation direction="up">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-3 mb-6">
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
              <p className="text-lg text-white/70 max-w-xl">
                For over 12 years, Mufo Renovation has been transforming houses into homes.
                We combine traditional craftsmanship with modern design to create spaces
                that inspire and endure.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.id} className="text-center">
                <div className="font-display text-4xl lg:text-5xl font-medium text-brand mb-2">
                  {stat.value}{stat.suffix}
                </div>
                <div className="text-gray-600 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollAnimation direction="left">
              <div className="relative">
                {/* Main Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-brand via-brand-light to-secondary flex items-center justify-center">
                    <div className="text-center text-white/40">
                      <Users className="w-20 h-20 mx-auto mb-3" strokeWidth={1} />
                      <span className="text-sm">Team Photo</span>
                    </div>
                  </div>
                </div>
                {/* Second Image */}
                <div className="absolute -bottom-8 -right-8 lg:-right-12 w-48 lg:w-64 aspect-square overflow-hidden shadow-xl">
                  <div className="w-full h-full bg-gradient-to-br from-secondary via-brand to-brand-dark flex items-center justify-center">
                    <div className="text-center text-white/40">
                      <Award className="w-12 h-12 mx-auto mb-2" strokeWidth={1} />
                      <span className="text-xs">Workshop</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="right">
              <div>
                <span className="inline-flex items-center gap-3 mb-4">
                  <span className="w-10 h-px bg-accent" />
                  <span className="text-accent-hover text-sm font-medium tracking-[0.2em] uppercase">
                    Who We Are
                  </span>
                </span>
                <h2 className="font-display text-3xl lg:text-4xl font-medium text-gray-900 mb-6">
                  A Legacy of Quality
                  <br />
                  <span className="text-accent-hover">Craftsmanship</span>
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  Founded in 2012, Mufo Renovation began with a simple belief: every home
                  deserves the finest craftsmanship. What started as a small team of passionate
                  craftsmen has grown into one of Toronto&apos;s most trusted renovation companies.
                </p>
                <p className="text-gray-600 leading-relaxed mb-8">
                  Our founder, Michael Foley, brought together a team of skilled artisans who
                  share his commitment to excellence. Today, we continue that tradition, treating
                  every project—whether a bathroom update or a complete home transformation—with
                  the same dedication to quality that defined our first renovation over a decade ago.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contact"
                    className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-brand text-white font-medium hover:bg-brand-hover transition-all"
                  >
                    Start Your Project
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    href="/projects"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 text-gray-700 font-medium hover:border-brand hover:text-brand transition-all"
                  >
                    View Our Work
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <ScrollAnimation direction="up">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-flex items-center gap-3 justify-center mb-4">
                <span className="w-10 h-px bg-accent" />
                <span className="text-accent-hover text-sm font-medium tracking-[0.2em] uppercase">
                  Our Purpose
                </span>
                <span className="w-10 h-px bg-accent" />
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-medium text-gray-900">
                Mission & Vision
              </h2>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-8">
            <ScrollAnimation direction="left">
              <div className="bg-white p-8 lg:p-10 h-full">
                <div className="w-14 h-14 bg-brand/10 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-brand" />
                </div>
                <h3 className="font-display text-2xl font-medium text-gray-900 mb-4">
                  Our Mission
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To deliver exceptional renovation experiences that transform living spaces
                  and exceed client expectations. We achieve this through expert craftsmanship,
                  transparent communication, and an unwavering commitment to quality in every
                  detail of every project.
                </p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation direction="right">
              <div className="bg-white p-8 lg:p-10 h-full">
                <div className="w-14 h-14 bg-accent/20 flex items-center justify-center mb-6">
                  <Heart className="w-7 h-7 text-accent-hover" />
                </div>
                <h3 className="font-display text-2xl font-medium text-gray-900 mb-4">
                  Our Vision
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  To be the most trusted name in home renovation across the Greater Toronto Area,
                  known for creating beautiful, functional spaces that bring joy to families for
                  generations. We envision a future where every home reflects the unique personality
                  and needs of those who live in it.
                </p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-brand">
        <div className="container-custom">
          <ScrollAnimation direction="up">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-flex items-center gap-3 justify-center mb-4">
                <span className="w-10 h-px bg-accent" />
                <span className="text-accent text-sm font-medium tracking-[0.2em] uppercase">
                  Why Choose Us
                </span>
                <span className="w-10 h-px bg-accent" />
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-medium text-white">
                What Sets Us Apart
              </h2>
            </div>
          </ScrollAnimation>

          <StaggerAnimation direction="up" staggerDelay={100} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valueProps.map((prop) => {
              const Icon = valueIcons[prop.icon as keyof typeof valueIcons] || Gem;
              return (
                <div key={prop.id} className="bg-white/10 p-6 lg:p-8 hover:bg-white/15 transition-colors">
                  <div className="w-12 h-12 bg-accent/20 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-medium text-white mb-3">
                    {prop.title}
                  </h3>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              );
            })}
          </StaggerAnimation>
        </div>
      </section>

      {/* Our Journey / Timeline */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <ScrollAnimation direction="up">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-flex items-center gap-3 justify-center mb-4">
                <span className="w-10 h-px bg-accent" />
                <span className="text-accent-hover text-sm font-medium tracking-[0.2em] uppercase">
                  Our Journey
                </span>
                <span className="w-10 h-px bg-accent" />
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-medium text-gray-900">
                Milestones Along the Way
              </h2>
            </div>
          </ScrollAnimation>

          <div className="max-w-3xl mx-auto">
            <StaggerAnimation direction="up" staggerDelay={100} className="space-y-0">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="relative pl-8 pb-10 last:pb-0 border-l-2 border-gray-200 last:border-transparent">
                  {/* Timeline dot */}
                  <div className="absolute left-0 top-0 w-4 h-4 -translate-x-1/2 bg-accent" />
                  {/* Content */}
                  <div className="ml-6">
                    <span className="text-accent font-display text-lg font-medium">
                      {milestone.year}
                    </span>
                    <h3 className="font-display text-xl font-medium text-gray-900 mt-1 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-gray-600">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              ))}
            </StaggerAnimation>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="section-padding bg-gray-50">
        <div className="container-custom">
          <ScrollAnimation direction="up">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="inline-flex items-center gap-3 justify-center mb-4">
                <span className="w-10 h-px bg-accent" />
                <span className="text-accent-hover text-sm font-medium tracking-[0.2em] uppercase">
                  Our Team
                </span>
                <span className="w-10 h-px bg-accent" />
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-medium text-gray-900">
                Meet the Experts
              </h2>
              <p className="text-gray-600 mt-4">
                Our talented team brings decades of combined experience to every project.
              </p>
            </div>
          </ScrollAnimation>

          <StaggerAnimation direction="up" staggerDelay={100} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div key={member.name} className="bg-white overflow-hidden group">
                {/* Photo placeholder */}
                <div className="aspect-square bg-gradient-to-br from-brand via-brand-light to-secondary flex items-center justify-center">
                  <div className="text-center text-white/40">
                    <Users className="w-16 h-16 mx-auto mb-2" strokeWidth={1} />
                    <span className="text-xs">Photo</span>
                  </div>
                </div>
                {/* Info */}
                <div className="p-6">
                  <h3 className="font-display text-lg font-medium text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-accent-hover text-sm font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </StaggerAnimation>
        </div>
      </section>

      {/* CTA Section */}
      <PageCTASection
        label="Ready to Start?"
        title="Let's Build Something Beautiful Together"
        description="Whether you're planning a small update or a complete transformation, our team is ready to bring your vision to life. Contact us today for a free consultation."
      />
    </main>
  );
}
