import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

export default function ServicesCtaSection() {
  return (
    <section className="py-16 px-6 lg:px-10">
      <div className="max-w-4xl mx-auto glass-card rounded-3xl p-8 lg:p-10 gradient-border text-center relative overflow-hidden">
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse, rgba(201,168,76,0.07) 0%, transparent 70%)' }}
          aria-hidden="true"
        />
        <div className="relative z-10">
          <Icon name="CalendarDaysIcon" size={32} className="text-accent mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-foreground mb-3">Ready to Start Your Treatment?</h2>
          <p className="text-muted-foreground text-sm leading-relaxed mb-6 max-w-xl mx-auto">
            Book a consultation with our specialist doctors and receive a personalized care plan designed for your skin and hair needs.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/contact" className="btn-primary relative px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2">
              <span className="relative z-10">Schedule Consultation</span>
              <Icon name="ArrowRightIcon" size={14} className="relative z-10" />
            </Link>
            <a href="tel:+918662455999" className="btn-outline-gold px-6 py-3 rounded-full text-sm font-semibold flex items-center gap-2">
              <Icon name="PhoneIcon" size={14} />
              +91 866-245-5999
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}