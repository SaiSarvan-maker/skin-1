'use client';
import React from 'react';
import Icon from '@/components/ui/AppIcon';

export default function ServicesHero() {
  return (
    <section className="relative pt-28 pb-16 px-6 lg:px-10 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/30 via-background to-background" />
        <div
          className="absolute top-0 right-0 w-2/3 h-full"
          style={{ background: 'radial-gradient(ellipse 60% 80% at 90% 10%, rgba(201,168,76,0.06) 0%, transparent 70%)' }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 glass-card-light rounded-full px-4 py-1.5 mb-6">
            <Icon name="Squares2X2Icon" size={14} className="text-accent" />
            <span className="text-xs font-semibold text-accent uppercase tracking-widest">Our Services</span>
          </div>
          <h1 className="text-hero-xl font-bold text-foreground tracking-tight mb-5">
            Comprehensive Treatments for{' '}
            <span className="gold-gradient">Every Skin & Hair Need</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl font-light">
            From clinical dermatology to advanced aesthetic cosmetology — Vipula Clinic offers medically supervised, personalized treatments backed by 35+ years of specialist expertise.
          </p>
        </div>
      </div>
    </section>
  );
}