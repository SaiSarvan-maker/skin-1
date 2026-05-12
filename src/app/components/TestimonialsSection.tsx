'use client';
import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const TESTIMONIALS = [
  {
    name: 'Priya Lakshmi',
    location: 'Vijayawada',
    rating: 5,
    treatment: 'PRP Hair Treatment',
    review: 'After struggling with hair loss for years, Dr. Ranganadh\'s PRP therapy has genuinely transformed my confidence. The team is professional, the clinic is immaculate, and the results speak for themselves. Highly recommend Vipula Clinic.',
    initials: 'PL',
  },
  {
    name: 'Ravi Kumar Reddy',
    location: 'Guntur',
    rating: 5,
    treatment: 'Acne Scar Treatment',
    review: 'Dr. Rama Charan handled my severe acne scarring with remarkable precision. Three months in and the improvement is incredible. The personalized treatment plan made all the difference. Best dermatologist in Vijayawada without question.',
    initials: 'RR',
  },
  {
    name: 'Sujatha Rao',
    location: 'Vijayawada',
    rating: 5,
    treatment: 'Laser Skin Toning',
    review: 'I visited Vipula for melasma treatment and the results have been outstanding. The doctors explained everything clearly and the treatment was comfortable. My skin tone has improved dramatically. Truly a world-class clinic.',
    initials: 'SR',
  },
  {
    name: 'Karthik Varma',
    location: 'Krishna District',
    rating: 5,
    treatment: 'Hair Transplant',
    review: 'The hair transplant procedure at Vipula was seamless. Dr. Ranganadh\'s expertise is unmatched — 35 years of experience truly shows. The results at 6 months are beyond what I expected. Professional, caring, and thorough.',
    initials: 'KV',
  },
  {
    name: 'Anitha Devi',
    location: 'Vijayawada',
    rating: 5,
    treatment: 'Anti-aging Therapy',
    review: 'Visited for anti-aging treatment and I am absolutely thrilled with the results. Dr. Rama Charan is incredibly knowledgeable and the staff is warm and welcoming. The clinic atmosphere itself puts you at ease immediately.',
    initials: 'AD',
  },
  {
    name: 'Suresh Babu',
    location: 'Machilipatnam',
    rating: 5,
    treatment: 'Psoriasis Treatment',
    review: 'Suffered from psoriasis for over 10 years. After visiting Vipula, Dr. Ranganadh created a comprehensive treatment plan that has brought my condition under control. Finally found a doctor who truly understands skin disorders.',
    initials: 'SB',
  },
];

export default function TestimonialsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.section-reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % TESTIMONIALS?.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 lg:px-10 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div
          className="absolute bottom-0 left-0 w-1/2 h-1/2"
          style={{ background: 'radial-gradient(ellipse 70% 60% at 10% 90%, rgba(22,40,71,0.4) 0%, transparent 70%)' }}
        />
      </div>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="section-reveal text-center mb-12">
          <div className="inline-flex items-center gap-2 glass-card-light rounded-full px-4 py-1.5 mb-5">
            <Icon name="StarIcon" size={14} className="text-accent" />
            <span className="text-xs font-semibold text-accent uppercase tracking-widest">Patient Stories</span>
          </div>
          <h2 className="text-section-title font-bold text-foreground tracking-tight mb-4">
            Trusted by{' '}
            <span className="gold-gradient">1,900+ Patients</span>
          </h2>

          {/* Rating display */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex items-center gap-1">
              {[1,2,3,4,5]?.map((s) => (
                <svg key={s} className="w-5 h-5 text-accent fill-current" viewBox="0 0 24 24">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <span className="text-2xl font-bold text-foreground">4.7</span>
            <span className="text-sm text-muted-foreground">from 1,900+ Google Reviews</span>
          </div>
        </div>

        {/* Featured testimonial */}
        <div className="section-reveal mb-8">
          <div className="glass-card rounded-3xl p-6 lg:p-8 gradient-border max-w-3xl mx-auto relative overflow-hidden">
            <div
              className="absolute top-0 right-0 w-40 h-40 rounded-full pointer-events-none"
              style={{ background: 'radial-gradient(ellipse, rgba(201,168,76,0.06) 0%, transparent 70%)' }}
              aria-hidden="true"
            />
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent/40 to-secondary flex items-center justify-center flex-shrink-0">
                <span className="text-sm font-bold text-accent">{TESTIMONIALS?.[activeIdx]?.initials}</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-bold text-foreground">{TESTIMONIALS?.[activeIdx]?.name}</span>
                  <span className="text-xs text-muted-foreground">·</span>
                  <span className="text-xs text-muted-foreground">{TESTIMONIALS?.[activeIdx]?.location}</span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: TESTIMONIALS?.[activeIdx]?.rating })?.map((_, i) => (
                      <svg key={i} className="w-3.5 h-3.5 text-accent fill-current" viewBox="0 0 24 24">
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-xs bg-muted/60 text-secondary-foreground rounded-full px-2 py-0.5 font-medium">
                    {TESTIMONIALS?.[activeIdx]?.treatment}
                  </span>
                </div>
              </div>
            </div>
            <blockquote className="text-base text-secondary-foreground leading-relaxed font-light italic">
              &ldquo;{TESTIMONIALS?.[activeIdx]?.review}&rdquo;
            </blockquote>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-2 mt-5">
            {TESTIMONIALS?.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIdx(i)}
                className={`rounded-full transition-all duration-300 ${i === activeIdx ? 'w-6 h-2 bg-accent' : 'w-2 h-2 bg-border hover:bg-muted-foreground'}`}
                aria-label={`View testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Mini cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {TESTIMONIALS?.map((t, i) => (
            <button
              key={t?.name}
              onClick={() => setActiveIdx(i)}
              className={`section-reveal glass-card rounded-2xl p-4 text-left transition-all duration-300 cursor-pointer ${i === activeIdx ? 'border border-accent/40 gold-glow' : 'hover:border-border/80'}`}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-accent/30 to-secondary flex items-center justify-center flex-shrink-0">
                  <span className="text-xs font-bold text-accent">{t?.initials}</span>
                </div>
                <div>
                  <p className="text-xs font-semibold text-foreground">{t?.name}</p>
                  <p className="text-xs text-muted-foreground">{t?.treatment}</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2">{t?.review}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}