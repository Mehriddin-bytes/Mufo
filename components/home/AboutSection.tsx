import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ScrollAnimation } from '@/components/ui';

const highlights = [
  { number: '01', title: 'Personalized Approach', desc: 'Every project tailored to your unique vision' },
  { number: '02', title: 'Quality Materials', desc: 'Premium materials for lasting results' },
  { number: '03', title: 'Expert Craftsmen', desc: 'Skilled professionals with decades of experience' },
];

export default function AboutSection() {
  return (
    <section className="section-padding bg-[#FFFCF8]">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Side */}
          <ScrollAnimation direction="left">
            <div className="relative">
              {/* Main Image */}
              <div className="aspect-[4/5] bg-gray-200 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-secondary to-brand flex items-center justify-center text-white/30 text-sm">
                  Image Placeholder
                </div>
              </div>

              {/* Floating accent box */}
              <div className="absolute -bottom-8 -right-8 lg:-right-12 w-48 lg:w-56 bg-accent p-6 lg:p-8">
                <div className="font-display text-4xl lg:text-5xl text-brand-dark font-medium">12+</div>
                <div className="text-brand-dark/70 text-sm mt-1">Years of Excellence</div>
              </div>

              {/* Decorative line */}
              <div className="absolute top-8 -left-4 w-px h-32 bg-accent/50 hidden lg:block" />
            </div>
          </ScrollAnimation>

          {/* Content Side */}
          <ScrollAnimation direction="right">
            <div>
              <span className="section-label">About Us</span>
              <h2 className="section-heading mt-4 mb-6">
                We Create Spaces
                <br />
                <span className="text-accent-hover">That Inspire</span>
              </h2>

              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                At Mufo Renovation, we believe that every home tells a story. For over a decade,
                we&apos;ve been helping families transform their living spaces into beautiful,
                functional environments that reflect their unique lifestyles.
              </p>

              <p className="text-gray-500 mb-10 leading-relaxed">
                Our approach combines traditional craftsmanship with modern design sensibilities,
                ensuring every project we undertake exceeds expectations and stands the test of time.
              </p>

              {/* Highlights */}
              <div className="space-y-6 mb-10">
                {highlights.map((item) => (
                  <div key={item.number} className="flex gap-5 group">
                    <span className="font-display text-2xl text-accent/40 group-hover:text-accent transition-colors">
                      {item.number}
                    </span>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-500 text-sm">{item.desc}</p>
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
