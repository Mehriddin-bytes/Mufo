import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface NavService {
  slug: string;
  title: string;
}

interface ServiceNavigationProps {
  prevService?: NavService | null;
  nextService?: NavService | null;
  allServicesLink?: string;
  allServicesText?: string;
  className?: string;
}

export default function ServiceNavigation({
  prevService,
  nextService,
  allServicesLink = '/services',
  allServicesText = 'All Services',
  className = '',
}: ServiceNavigationProps) {
  return (
    <section className={`py-8 border-t border-gray-200 bg-gray-50 ${className}`}>
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {prevService ? (
            <Link
              href={`/services/${prevService.slug}`}
              className="group flex items-center gap-3 text-gray-600 hover:text-brand transition-colors"
            >
              <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
              <div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Previous</div>
                <div className="font-medium">{prevService.title}</div>
              </div>
            </Link>
          ) : (
            <div />
          )}

          <Link
            href={allServicesLink}
            className="hidden sm:flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-gray-600 hover:border-brand hover:text-brand transition-all"
          >
            {allServicesText}
          </Link>

          {nextService ? (
            <Link
              href={`/services/${nextService.slug}`}
              className="group flex items-center gap-3 text-gray-600 hover:text-brand transition-colors text-right"
            >
              <div>
                <div className="text-xs text-gray-400 uppercase tracking-wider">Next</div>
                <div className="font-medium">{nextService.title}</div>
              </div>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </section>
  );
}
