'use client';

import Link from 'next/link';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { ScrollAnimation } from '@/components/ui';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  label?: string;
  title: string;
  description?: string;
  faqs: FAQ[];
  contactLink?: string;
  contactText?: string;
  className?: string;
}

export default function FAQSection({
  label = 'FAQ',
  title,
  description = "Have questions? We have answers. If you don't see your question here, feel free to contact us.",
  faqs,
  contactLink = '/contact',
  contactText = 'Contact Us',
  className = '',
}: FAQSectionProps) {
  return (
    <section className={`py-12 lg:py-16 bg-white ${className}`}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <ScrollAnimation direction="left">
            <div className="lg:sticky lg:top-24">
              <span className="inline-flex items-center gap-3 mb-3">
                <span className="w-8 h-px bg-accent" />
                <span className="text-accent-hover text-xs font-medium tracking-[0.2em] uppercase">
                  {label}
                </span>
              </span>
              <h2 className="font-display text-2xl lg:text-3xl font-medium text-gray-900 mb-4">
                {title}
              </h2>
              {description && (
                <p className="text-gray-600 text-sm mb-6">{description}</p>
              )}
              {contactLink && (
                <Link
                  href={contactLink}
                  className="group inline-flex items-center gap-2 text-brand text-sm font-medium hover:text-brand-hover transition-colors"
                >
                  {contactText}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="right">
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-gray-50 border border-gray-200 overflow-hidden hover:border-accent/30 transition-colors"
                >
                  <summary className="flex items-center justify-between gap-4 p-4 cursor-pointer list-none">
                    <h3 className="font-medium text-sm text-gray-900 group-hover:text-brand transition-colors">
                      {faq.question}
                    </h3>
                    <ChevronDown className="w-4 h-4 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" />
                  </summary>
                  <div className="px-4 pb-4 pt-0">
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </details>
              ))}
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
