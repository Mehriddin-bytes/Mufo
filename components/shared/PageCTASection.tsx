import Link from 'next/link';
import { ArrowRight, Phone } from 'lucide-react';
import { ScrollAnimation } from '@/components/ui';
import { siteConfig } from '@/lib/data/siteData';

interface PageCTASectionProps {
  label?: string;
  title: string;
  description: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  showPhone?: boolean;
  className?: string;
}

export default function PageCTASection({
  label = 'Ready to Start?',
  title,
  description,
  primaryButtonText = 'Get Your Free Quote',
  primaryButtonLink = '/contact',
  showPhone = true,
  className = '',
}: PageCTASectionProps) {
  return (
    <section className={`py-12 lg:py-16 bg-brand ${className}`}>
      <div className="container-custom">
        <ScrollAnimation direction="up">
          <div className="max-w-2xl mx-auto text-center">
            <span className="inline-flex items-center gap-2 justify-center mb-4">
              <span className="w-8 h-px bg-accent" />
              <span className="text-accent text-xs font-medium tracking-[0.2em] uppercase">
                {label}
              </span>
              <span className="w-8 h-px bg-accent" />
            </span>
            <h2 className="font-display text-2xl lg:text-3xl font-medium text-white mb-4">
              {title}
            </h2>
            <p className="text-white/70 text-sm mb-6">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href={primaryButtonLink}
                className="group inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent text-brand-dark text-sm font-medium hover:bg-accent-hover transition-all"
              >
                {primaryButtonText}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              {showPhone && (
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\D/g, '')}`}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-white/30 text-white text-sm font-medium hover:bg-white/10 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  {siteConfig.contact.phone}
                </a>
              )}
            </div>
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
