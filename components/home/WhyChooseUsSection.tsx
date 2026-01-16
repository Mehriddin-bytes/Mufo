import { Gem, Eye, Clock, Shield } from 'lucide-react';
import { ScrollAnimation, StaggerAnimation } from '@/components/ui';
import { valueProps } from '@/lib/data/siteData';

const iconMap = {
  Gem,
  Eye,
  Clock,
  Shield,
};

export default function WhyChooseUsSection() {
  return (
    <section className="section-padding bg-[#FFFCF8]">
      <div className="container-custom">
        {/* Section Header */}
        <ScrollAnimation direction="up" className="text-center mb-16">
          <span className="section-label">Why Mufo</span>
          <h2 className="section-heading mt-4 mb-6">
            The Difference Is
            <br />
            <span className="text-accent-hover">In The Details</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We don&apos;t just renovate spaces—we transform how you live.
            Here&apos;s what sets us apart from the rest.
          </p>
        </ScrollAnimation>

        {/* Value Props Grid */}
        <StaggerAnimation
          direction="up"
          staggerDelay={100}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {valueProps.map((prop, index) => {
            const Icon = iconMap[prop.icon as keyof typeof iconMap] || Gem;

            return (
              <div
                key={prop.id}
                className="group text-center"
              >
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-7 h-7 text-accent" />
                </div>

                {/* Number */}
                <span className="text-xs text-gray-400 tracking-widest">
                  0{index + 1}
                </span>

                {/* Title */}
                <h3 className="font-display text-xl text-gray-900 font-medium mt-2 mb-3">
                  {prop.title}
                </h3>

                {/* Description */}
                <p className="text-gray-500 text-sm leading-relaxed">
                  {prop.description}
                </p>
              </div>
            );
          })}
        </StaggerAnimation>
      </div>
    </section>
  );
}
