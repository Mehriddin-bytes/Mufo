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
    <section className={`section-padding bg-white ${className}`}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <ScrollAnimation direction="left">
            <div className="lg:sticky lg:top-32">
              <span className="inline-flex items-center gap-3 mb-4">
                <span className="w-10 h-px bg-accent" />
                <span className="text-accent-hover text-sm font-medium tracking-[0.2em] uppercase">
                  {label}
                </span>
              </span>
              <h2 className="font-display text-3xl lg:text-4xl font-medium text-gray-900 mb-6">
                {title}
              </h2>
              {description && (
                <p className="text-gray-600 mb-8">{description}</p>
              )}
              {contactLink && (
                <Link
                  href={contactLink}
                  className="group inline-flex items-center gap-2 text-brand font-medium hover:text-brand-hover transition-colors"
                >
                  {contactText}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              )}
            </div>
          </ScrollAnimation>

          <ScrollAnimation direction="right">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-gray-50 rounded-xl border border-gray-200 overflow-hidden hover:border-accent/30 transition-colors"
                >
                  <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none">
                    <h3 className="font-medium text-gray-900 group-hover:text-brand transition-colors">
                      {faq.question}
                    </h3>
                    <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" />
                  </summary>
                  <div className="px-6 pb-6 pt-0">
                    <p className="text-gray-600 leading-relaxed">
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
