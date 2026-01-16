import { stats } from '@/lib/data/siteData';
import { ScrollAnimation } from '@/components/ui';

export default function StatsSection() {
  return (
    <section className="bg-brand py-12">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <ScrollAnimation
              key={stat.id}
              direction="up"
              delay={index * 100}
            >
              <div className="text-center text-white">
                <div className="text-4xl md:text-5xl font-black mb-2">
                  {stat.value}
                  {stat.suffix && (
                    <span className="text-accent">{stat.suffix}</span>
                  )}
                </div>
                <div className="text-white/80 font-medium">{stat.label}</div>
              </div>
            </ScrollAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
