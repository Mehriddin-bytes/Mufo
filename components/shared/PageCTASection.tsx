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
    <section className={`py-20 lg:py-28 bg-brand ${className}`}>
      <div className="container-custom">
        <ScrollAnimation direction="up">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-flex items-center gap-3 justify-center mb-6">
              <span className="w-10 h-px bg-accent" />
              <span className="text-accent text-sm font-medium tracking-[0.2em] uppercase">
                {label}
              </span>
              <span className="w-10 h-px bg-accent" />
            </span>
            <h2 className="font-display text-3xl lg:text-4xl font-medium text-white mb-6">
              {title}
            </h2>
            <p className="text-white/70 text-lg mb-8">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href={primaryButtonLink}
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-accent text-brand-dark font-medium hover:bg-accent-hover transition-all"
              >
                {primaryButtonText}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              {showPhone && (
                <a
                  href={`tel:${siteConfig.contact.phone.replace(/\D/g, '')}`}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/30 text-white font-medium hover:bg-white/10 transition-all"
                >
                  <Phone className="w-5 h-5" />
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
