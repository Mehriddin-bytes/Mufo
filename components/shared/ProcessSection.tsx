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
  subtitle = 'A streamlined process designed for your convenience and peace of mind.',
  steps,
  className = '',
}: ProcessSectionProps) {
  return (
    <section className={`section-padding bg-white ${className}`}>
      <div className="container-custom">
        <ScrollAnimation direction="up">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-flex items-center gap-3 justify-center mb-4">
              <span className="w-10 h-px bg-accent" />
              <span className="text-accent-hover text-sm font-medium tracking-[0.2em] uppercase">
                {label}
              </span>
              <span className="w-10 h-px bg-accent" />
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-medium text-gray-900 mb-4">
              {title}
            </h2>
            {subtitle && (
              <p className="text-gray-600">{subtitle}</p>
            )}
          </div>
        </ScrollAnimation>

        <div className="max-w-4xl mx-auto">
          <StaggerAnimation direction="up" staggerDelay={150} className="space-y-6">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className="group flex gap-6 items-start"
              >
                {/* Step Number */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-full bg-brand flex items-center justify-center group-hover:bg-accent transition-colors">
                    <span className="font-display text-xl font-semibold text-white">
                      {String(step.step).padStart(2, '0')}
                    </span>
                  </div>
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="w-px h-16 bg-gray-200 mx-auto mt-2" />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <h3 className="font-display text-xl font-medium text-gray-900 mb-2 group-hover:text-brand transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
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
