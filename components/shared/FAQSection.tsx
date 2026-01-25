'use client';

import Link from 'next/link';
import { ArrowRight, ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
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
    <section className={`py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50 ${className}`}>
      <div className="container-custom">
        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Left Column - Header */}
          <ScrollAnimation direction="left" className="lg:col-span-2">
            <div className="lg:sticky lg:top-28">
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-brand/10 flex items-center justify-center mb-6">
                <HelpCircle className="w-7 h-7 text-brand" />
              </div>

              <span className="inline-flex items-center gap-3 mb-4">
                <span className="w-10 h-px bg-accent" />
                <span className="text-accent-hover text-sm font-medium tracking-[0.2em] uppercase">
                  {label}
                </span>
              </span>

              <h2 className="font-display text-3xl lg:text-4xl font-medium text-gray-900 mb-5 leading-tight">
                {title}
              </h2>

              {description && (
                <p className="text-gray-600 text-base mb-8 leading-relaxed">{description}</p>
              )}

              {contactLink && (
                <div className="p-5 bg-brand rounded-xl">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-medium mb-1">Still have questions?</h4>
                      <p className="text-white/70 text-sm mb-3">We&apos;re here to help you with your project.</p>
                      <Link
                        href={contactLink}
                        className="group inline-flex items-center gap-2 text-accent text-sm font-medium hover:text-accent-light transition-colors"
                      >
                        {contactText}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollAnimation>

          {/* Right Column - FAQs */}
          <ScrollAnimation direction="right" className="lg:col-span-3">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <details
                  key={index}
                  className="group bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md hover:border-brand/20 transition-all duration-300"
                >
                  <summary className="flex items-center justify-between gap-4 p-5 lg:p-6 cursor-pointer list-none">
                    <div className="flex items-start gap-4">
                      <span className="w-8 h-8 rounded-lg bg-brand/10 flex items-center justify-center flex-shrink-0 text-brand font-semibold text-sm group-open:bg-brand group-open:text-white transition-colors">
                        {index + 1}
                      </span>
                      <h3 className="font-medium text-base text-gray-900 group-hover:text-brand transition-colors pt-1">
                        {faq.question}
                      </h3>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0 group-hover:bg-brand/10 transition-colors">
                      <ChevronDown className="w-5 h-5 text-gray-500 group-open:rotate-180 transition-transform duration-300" />
                    </div>
                  </summary>
                  <div className="px-5 lg:px-6 pb-5 lg:pb-6 pt-0">
                    <div className="pl-12 border-l-2 border-accent/30">
                      <p className="text-gray-600 text-base leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
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
