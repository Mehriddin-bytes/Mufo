import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { ScrollAnimation } from '@/components/ui';

const highlights = [
  { number: '01', title: 'Personalized Approach', desc: 'Every project tailored to your unique vision' },
  { number: '02', title: 'Quality Materials', desc: 'Premium materials for lasting results' },
  { number: '03', title: 'Expert Craftsmen', desc: 'Skilled professionals with decades of experience' },
];

export default function AboutSection() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-24 items-center">
          {/* Image Side - Full width on mobile */}
          <ScrollAnimation direction="left">
            <div className="relative mb-8 lg:mb-0">
              {/* Main Image */}
              <div className="aspect-[4/3] lg:aspect-[4/5] bg-gray-200 overflow-hidden relative">
                <Image
                  src="/images/about/about-team.jpg"
                  alt="Mufo Renovation team at work"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating accent box - smaller and repositioned on mobile */}
              <div className="absolute -bottom-6 right-4 sm:-bottom-8 sm:-right-8 lg:-right-12 w-32 sm:w-48 lg:w-56 bg-accent p-4 sm:p-6 lg:p-8">
                <div className="font-display text-3xl sm:text-4xl lg:text-5xl text-brand-dark font-medium">12+</div>
                <div className="text-brand-dark/70 text-xs sm:text-sm mt-0.5 sm:mt-1">Years of Excellence</div>
              </div>

              {/* Decorative line */}
              <div className="absolute top-8 -left-4 w-px h-32 bg-accent/50 hidden lg:block" />
            </div>
          </ScrollAnimation>

          {/* Content Side - Centered on mobile */}
          <ScrollAnimation direction="right">
            <div className="text-center lg:text-left">
              <span className="section-label">About Us</span>
              <h2 className="section-heading mt-4 mb-4 sm:mb-6">
                We Create Spaces
                <br />
                <span className="text-accent-hover">That Inspire</span>
              </h2>

              <p className="text-gray-600 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                At Mufo Renovation, we believe that every home tells a story. For over a decade,
                we&apos;ve been helping families transform their living spaces into beautiful,
                functional environments that reflect their unique lifestyles.
              </p>

              <p className="text-gray-500 text-sm sm:text-base mb-8 sm:mb-10 leading-relaxed">
                Our approach combines traditional craftsmanship with modern design sensibilities,
                ensuring every project we undertake exceeds expectations and stands the test of time.
              </p>

              {/* Highlights - Grid on mobile */}
              <div className="grid sm:grid-cols-3 lg:grid-cols-1 gap-4 sm:gap-6 mb-8 sm:mb-10 text-left">
                {highlights.map((item) => (
                  <div key={item.number} className="flex gap-3 sm:gap-5 group">
                    <span className="font-display text-xl sm:text-2xl text-accent/40 group-hover:text-accent transition-colors">
                      {item.number}
                    </span>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-sm sm:text-base mb-0.5 sm:mb-1">{item.title}</h3>
                      <p className="text-gray-500 text-xs sm:text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link
                href="/about"
                className="group inline-flex items-center gap-3 text-brand font-medium hover:text-brand-hover transition-colors"
              >
                Discover Our Story
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
