import Link from 'next/link';
import { Phone, ArrowRight } from 'lucide-react';
import { ScrollAnimation } from '@/components/ui';
import { siteConfig } from '@/lib/data/siteData';

export default function CTASection() {
  return (
    <section className="section-padding bg-accent">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Content */}
          <ScrollAnimation direction="left" className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-gray-800 text-lg max-w-xl">
              Get in touch today for a free consultation and quote. Our team is ready
              to bring your vision to life.
            </p>
          </ScrollAnimation>

          {/* Actions */}
          <ScrollAnimation direction="right" className="flex flex-col sm:flex-row gap-4">
            <a
              href={`tel:${siteConfig.contact.phone.replace(/\D/g, '')}`}
              className="btn bg-gray-900 text-white hover:bg-gray-800 rounded-md px-8 py-4 group"
            >
              <Phone className="w-5 h-5" />
              {siteConfig.contact.phone}
            </a>
            <Link
              href="/contact"
              className="btn bg-white text-gray-900 hover:bg-gray-100 rounded-md px-8 py-4 group"
            >
              Get Free Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
}
