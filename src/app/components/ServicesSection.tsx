'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const SERVICES = [
  {
    id: 'hair',
    title: 'Hair Treatments',
    icon: 'SparklesIcon',
    description: 'Advanced hair restoration, PRP therapy, and scalp treatments for all hair loss conditions.',
    treatments: ['PRP Hair Therapy', 'Hair Transplant', 'Scalp Analysis', 'Anti-hair fall'],
    colSpan: 'lg:col-span-5',
    accent: '#C9A84C',
  },
  {
    id: 'skin',
    title: 'Skin Treatments',
    icon: 'SunIcon',
    description: 'Medical-grade skin care addressing acne, scars, texture, and overall skin health.',
    treatments: ['Acne Treatment', 'Chemical Peels', 'Skin Brightening', 'Scar Revision'],
    colSpan: 'lg:col-span-4',
    accent: '#8BA3C7',
  },
  {
    id: 'laser',
    title: 'Laser Treatments',
    icon: 'BoltIcon',
    description: 'State-of-the-art laser technology for hair removal, skin resurfacing, and rejuvenation.',
    treatments: ['Laser Hair Removal', 'CO2 Resurfacing', 'Laser Toning', 'Vascular Laser'],
    colSpan: 'lg:col-span-3',
    accent: '#C9A84C',
  },
  {
    id: 'cosmetology',
    title: 'Cosmetology',
    icon: 'FaceSmileIcon',
    description: 'Premium aesthetic treatments for facial enhancement and skin perfection.',
    treatments: ['Botox', 'Dermal Fillers', 'Thread Lift', 'Mesotherapy'],
    colSpan: 'lg:col-span-4',
    accent: '#8BA3C7',
  },
  {
    id: 'pigmentation',
    title: 'Pigmentation & Scars',
    icon: 'SwatchIcon',
    description: 'Targeted treatments for melasma, dark spots, post-acne marks, and scar management.',
    treatments: ['Melasma Treatment', 'Dark Spot Removal', 'Acne Scar Therapy', 'Keloid Care'],
    colSpan: 'lg:col-span-4',
    accent: '#C9A84C',
  },
  {
    id: 'antiaging',
    title: 'Anti-aging & Rejuvenation',
    icon: 'ArrowPathIcon',
    description: 'Turn back the clock with advanced rejuvenation therapies and collagen stimulation.',
    treatments: ['HydraFacial', 'RF Tightening', 'PRP Facial', 'Vampire Facial'],
    colSpan: 'lg:col-span-4',
    accent: '#8BA3C7',
  },
  {
    id: 'clinical',
    title: 'Clinical Dermatology',
    icon: 'BeakerIcon',
    description: 'Comprehensive medical dermatology for psoriasis, eczema, vitiligo, fungal, and all skin disorders.',
    treatments: ['Psoriasis', 'Eczema Management', 'Vitiligo', 'Fungal Infections', 'Urticaria', 'Skin Allergy Testing'],
    colSpan: 'lg:col-span-12',
    accent: '#C9A84C',
  },
];

export default function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.section-reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 80);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 lg:px-10 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl h-96 rounded-full"
          style={{ background: 'radial-gradient(ellipse, rgba(13,31,60,0.6) 0%, transparent 70%)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="section-reveal text-center mb-12">
          <div className="inline-flex items-center gap-2 glass-card-light rounded-full px-4 py-1.5 mb-5">
            <Icon name="Squares2X2Icon" size={14} className="text-accent" />
            <span className="text-xs font-semibold text-accent uppercase tracking-widest">Our Treatments</span>
          </div>
          <h2 className="text-section-title font-bold text-foreground tracking-tight mb-4">
            Advanced Care for Every{' '}
            <span className="gold-gradient">Skin & Hair Need</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto leading-relaxed">
            From clinical dermatology to aesthetic cosmetology — comprehensive, medically supervised treatments tailored to your unique needs.
          </p>
        </div>

        {/* BENTO GRID AUDIT:
            Array has 7 cards: Hair(cs-5), Skin(cs-4), Laser(cs-3), Cosmetology(cs-4), Pigmentation(cs-4), Anti-aging(cs-4), Clinical(cs-12)
            Row 1: [col-1..5: Hair cs-5] [col-6..9: Skin cs-4] [col-10..12: Laser cs-3]
            Row 2: [col-1..4: Cosmetology cs-4] [col-5..8: Pigmentation cs-4] [col-9..12: Anti-aging cs-4]
            Row 3: [col-1..12: Clinical cs-12]
            Placed 7/7 cards ✓
        */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-3">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div className="section-reveal text-center mt-10">
          <Link href="/services" className="btn-outline-gold px-8 py-3.5 rounded-full text-sm font-semibold inline-flex items-center gap-2">
            View All Treatments
            <Icon name="ArrowRightIcon" size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: typeof SERVICES[number] }) {
  const isWide = service.colSpan === 'lg:col-span-12';

  return (
    <div
      className={`section-reveal glass-card rounded-2xl p-5 group service-card-glow card-hover-lift gradient-border transition-all duration-400 ${service.colSpan} ${isWide ? 'flex flex-col sm:flex-row items-start sm:items-center gap-6' : 'flex flex-col'}`}
    >
      {/* Icon */}
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mb-3 group-hover:scale-110 transition-transform duration-300"
        style={{ background: `${service.accent}18`, border: `1px solid ${service.accent}30` }}
      >
        <Icon name={service.icon as Parameters<typeof Icon>[0]['name']} size={20} style={{ color: service.accent }} />
      </div>

      <div className={isWide ? 'flex-1' : ''}>
        <h3 className="text-base font-bold text-foreground mb-1.5 group-hover:text-accent transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-xs text-muted-foreground leading-relaxed mb-3">
          {service.description}
        </p>

        <div className={`flex flex-wrap gap-1.5 ${isWide ? '' : ''}`}>
          {service.treatments.map((t) => (
            <span
              key={t}
              className="text-xs rounded-full px-2.5 py-1 font-medium"
              style={{
                background: `${service.accent}12`,
                color: service.accent,
                border: `1px solid ${service.accent}25`,
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {isWide && (
        <Link
          href="/services"
          className="btn-outline-gold rounded-full px-4 py-2 text-xs font-semibold flex items-center gap-1.5 flex-shrink-0 mt-3 sm:mt-0"
        >
          Learn More
          <Icon name="ArrowRightIcon" size={12} />
        </Link>
      )}
    </div>
  );
}