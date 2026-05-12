'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const DOCTORS = [
  {
    name: 'Dr. Ranganadh',
    title: 'Senior Dermatologist & Skin Specialist',
    image: '/assets/images/images__1_-1778591576604.jpg',
    alt: 'Dr. Ranganadh, Senior Dermatologist at Vipula Clinic Vijayawada in professional clinical attire, warm professional portrait',
    experience: '35+ Years',
    specialties: ['Clinical Dermatology', 'Skin Disorders', 'Laser Treatments', 'Pigmentation'],
    credentials: ['MBBS, MD (Dermatology)', 'IADVL Member', 'CDSI Certified'],
    color: 'from-primary/80 to-secondary/60',
  },
  {
    name: 'Dr. Rama Charan',
    title: 'Cosmetologist & Hair Specialist',
    image: '/assets/images/images-1778591576621.jpg',
    alt: 'Dr. Rama Charan, Cosmetologist and Hair Specialist at Vipula Clinic Vijayawada, professional portrait in white coat with stethoscope',
    experience: '20+ Years',
    specialties: ['Cosmetology', 'Hair Restoration', 'Anti-aging', 'Aesthetic Treatments'],
    credentials: ['MBBS, DVD', 'ACSI Member', 'Hair Transplant Certified'],
    color: 'from-secondary/80 to-primary/60',
  },
];

const STATS = [
  { value: '35+', label: 'Years of Expertise' },
  { value: '1900+', label: 'Patient Reviews' },
  { value: '4.7★', label: 'Average Rating' },
  { value: '10K+', label: 'Patients Treated' },
];

export default function DoctorsSection() {
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
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-10 px-6 lg:px-10 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px divider-gold" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(201,168,76,0.04) 0%, transparent 70%)' }}
        aria-hidden="true"
      />
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="section-reveal text-center mb-16">
          <div className="inline-flex items-center gap-2 glass-card-light rounded-full px-4 py-1.5 mb-5">
            <Icon name="UserGroupIcon" size={14} className="text-accent" />
            <span className="text-xs font-semibold text-accent uppercase tracking-widest">Our Specialists</span>
          </div>
          <h2 className="text-section-title font-bold text-foreground tracking-tight mb-4">
            Meet Your{' '}
            <span className="gold-gradient">Expert Doctors</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-2xl mx-auto leading-relaxed">
            Vijayawada&apos;s most trusted dermatology duo — combining decades of clinical expertise with a deeply personal approach to every patient&apos;s skin and hair health journey.
          </p>
        </div>

        {/* Stats bar */}
        <div className="section-reveal glass-card rounded-2xl px-6 py-5 mb-12 grid grid-cols-2 md:grid-cols-4 gap-6 gradient-border">
          {STATS?.map((stat) => (
            <div key={stat?.label} className="flex flex-col items-center gap-1 text-center">
              <span className="text-2xl lg:text-3xl font-bold gold-gradient">{stat?.value}</span>
              <span className="text-xs text-muted-foreground font-medium uppercase tracking-wider">{stat?.label}</span>
            </div>
          ))}
        </div>

        {/* Doctor cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {DOCTORS?.map((doc, idx) => (
            <div
              key={doc?.name}
              className="section-reveal card-hover-lift glass-card rounded-3xl overflow-hidden gradient-border group"
              style={{ transitionDelay: `${idx * 0.15}s` }}
            >
              <div className="flex flex-col sm:flex-row h-full">
                {/* Doctor photo */}
                <div className="relative sm:w-48 w-full h-52 sm:h-auto flex-shrink-0 overflow-hidden">
                  <AppImage
                    src={doc?.image}
                    alt={doc?.alt}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-r ${doc?.color} opacity-60`} />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent sm:bg-gradient-to-r" />
                  <div className="absolute bottom-3 left-3 sm:hidden">
                    <span className="glass-card rounded-full px-2 py-1 text-xs font-semibold text-accent">{doc?.experience}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 p-6 flex flex-col justify-between gap-4">
                  <div>
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-bold text-foreground">{doc?.name}</h3>
                        <p className="text-sm text-muted-foreground font-medium">{doc?.title}</p>
                      </div>
                      <span className="hidden sm:block glass-card-light rounded-full px-2.5 py-1 text-xs font-bold text-accent flex-shrink-0 ml-3">
                        {doc?.experience}
                      </span>
                    </div>

                    {/* Credentials */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {doc?.credentials?.map((cred) => (
                        <span key={cred} className="text-xs bg-muted/60 text-secondary-foreground rounded-full px-2.5 py-1 font-medium">
                          {cred}
                        </span>
                      ))}
                    </div>

                    {/* Specialties */}
                    <div className="flex flex-wrap gap-1.5">
                      {doc?.specialties?.map((spec) => (
                        <span key={spec} className="text-xs border border-accent/20 text-accent rounded-full px-2.5 py-1 font-medium">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="btn-outline-gold rounded-full px-4 py-2 text-sm font-semibold flex items-center gap-2 w-fit"
                  >
                    Book with Doctor
                    <Icon name="ArrowRightIcon" size={14} />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Memberships bar */}
        <div className="section-reveal mt-10 glass-card rounded-2xl px-6 py-4 flex flex-wrap items-center justify-center gap-6">
          <span className="text-xs text-muted-foreground uppercase tracking-widest font-semibold">Professional Memberships</span>
          <div className="w-px h-4 bg-border hidden sm:block" />
          {['IADVL', 'CDSI', 'ACSI', 'IDA']?.map((org) => (
            <div key={org} className="flex items-center gap-2">
              <Icon name="CheckBadgeIcon" size={14} className="text-accent" />
              <span className="text-sm font-semibold text-foreground">{org}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}