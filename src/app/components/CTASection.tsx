'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const CONTACT_INFO = [
  { icon: 'PhoneIcon', label: 'Call Us', value: '+91 866-245-5999', href: 'tel:+918662455999' },
  { icon: 'MapPinIcon', label: 'Location', value: 'Vijayawada, Andhra Pradesh', href: '/contact' },
  { icon: 'ClockIcon', label: 'Hours', value: 'Mon–Sat: 9:30 AM – 7:30 PM', href: null },
];

export default function CTASection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.section-reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 120);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 lg:px-10 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(13,31,60,0.5) 0%, transparent 70%)' }}
        />
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="section-reveal glass-card rounded-3xl p-8 lg:p-12 gradient-border relative overflow-hidden text-center">
          {/* Background glow */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full pointer-events-none animate-pulse-glow"
            style={{ background: 'radial-gradient(ellipse, rgba(201,168,76,0.08) 0%, transparent 70%)' }}
            aria-hidden="true"
          />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 glass-card-light rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-xs font-semibold text-accent uppercase tracking-widest">Now Accepting Patients</span>
            </div>

            <h2 className="text-section-title font-bold text-foreground tracking-tight mb-4">
              Begin Your Skin & Hair{' '}
              <span className="gold-gradient">Transformation</span>
            </h2>
            <p className="text-muted-foreground text-base max-w-xl mx-auto leading-relaxed mb-8">
              Schedule a consultation with Dr. Ranganadh or Dr. Rama Charan and receive a personalized treatment plan crafted for your unique needs.
            </p>

            <div className="flex flex-wrap gap-3 justify-center mb-10">
              <Link href="/contact" className="btn-primary relative px-8 py-3.5 rounded-full text-sm font-bold flex items-center gap-2">
                <span className="relative z-10">Book Consultation</span>
                <Icon name="ArrowRightIcon" size={16} className="relative z-10" />
              </Link>
              <a
                href="tel:+918662455999"
                className="btn-outline-gold px-8 py-3.5 rounded-full text-sm font-semibold flex items-center gap-2"
              >
                <Icon name="PhoneIcon" size={16} />
                Call Now
              </a>
            </div>

            {/* Contact info strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8 border-t border-border/40">
              {CONTACT_INFO.map((info) => (
                <div key={info.label} className="flex flex-col items-center gap-1.5">
                  <Icon name={info.icon as Parameters<typeof Icon>[0]['name']} size={18} className="text-accent" />
                  <span className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">{info.label}</span>
                  {info.href ? (
                    <a href={info.href} className="text-sm text-foreground font-medium hover:text-accent transition-colors">
                      {info.value}
                    </a>
                  ) : (
                    <span className="text-sm text-foreground font-medium">{info.value}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}