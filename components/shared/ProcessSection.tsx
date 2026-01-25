import { ScrollAnimation } from '@/components/ui';

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

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gray-200" />

            <div className="space-y-0">
              {steps.map((step, index) => (
                <ScrollAnimation key={step.step} direction="left" delay={index * 100}>
                  <div className="relative flex gap-5 group">
                    {/* Step Number */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-10 h-10 rounded-full bg-brand flex items-center justify-center group-hover:bg-accent transition-colors">
                        <span className="font-display text-sm font-semibold text-white">
                          {String(step.step).padStart(2, '0')}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 pb-8 pt-1">
                      <h3 className="font-display text-lg font-medium text-gray-900 mb-1 group-hover:text-brand transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
