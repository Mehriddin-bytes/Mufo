import { ScrollAnimation, StaggerAnimation } from '@/components/ui';

interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

interface ProcessSectionProps {
  label?: string;
  title?: string;
  subtitle?: string;
  steps: ProcessStep[];
  className?: string;
}

export default function ProcessSection({
  label = 'Our Process',
  title = 'How We Work',
  subtitle,
  steps,
  className = '',
}: ProcessSectionProps) {
  return (
    <section className={`py-12 lg:py-16 bg-gray-50 ${className}`}>
      <div className="container-custom">
        <ScrollAnimation direction="up">
          <div className="text-center max-w-2xl mx-auto mb-10">
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
            {subtitle && (
              <p className="text-gray-600 text-sm mt-2">{subtitle}</p>
            )}
          </div>
        </ScrollAnimation>

        {/* Horizontal Layout */}
        <div className="relative">
          {/* Horizontal connecting line - visible on lg screens */}
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-px bg-gray-200" style={{ left: '10%', right: '10%' }} />

          <StaggerAnimation
            direction="up"
            staggerDelay={100}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4"
          >
            {steps.map((step) => (
              <div key={step.step} className="group relative text-center">
                {/* Step Number */}
                <div className="relative z-10 mx-auto mb-4">
                  <div className="w-12 h-12 rounded-full bg-brand flex items-center justify-center mx-auto group-hover:bg-accent transition-colors shadow-md">
                    <span className="font-display text-sm font-semibold text-white">
                      {String(step.step).padStart(2, '0')}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="px-2">
                  <h3 className="font-display text-base font-medium text-gray-900 mb-2 group-hover:text-brand transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </StaggerAnimation>
        </div>
      </div>
    </section>
  );
}
