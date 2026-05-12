import React from 'react';
import Icon from '@/components/ui/AppIcon';

export default function ContactHero() {
  return (
    <section className="relative pt-28 pb-12 px-6 lg:px-10 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/25 via-background to-background" />
        <div
          className="absolute top-0 left-0 w-2/3 h-full"
          style={{ background: 'radial-gradient(ellipse 50% 70% at 10% 10%, rgba(201,168,76,0.05) 0%, transparent 70%)' }}
        />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="inline-flex items-center gap-2 glass-card-light rounded-full px-4 py-1.5 mb-5">
          <Icon name="MapPinIcon" size={14} className="text-accent" />
          <span className="text-xs font-semibold text-accent uppercase tracking-widest">Visit Us</span>
        </div>
        <h1 className="text-hero-xl font-bold text-foreground tracking-tight mb-4">
          Book Your{' '}
          <span className="gold-gradient">Consultation</span>
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl font-light">
          Take the first step toward better skin and hair health. Reach us by phone, WhatsApp, or complete the form below and we&apos;ll confirm your appointment promptly.
        </p>
      </div>
    </section>
  );
}