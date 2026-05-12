'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

const CREDENTIALS = [
  { icon: 'AcademicCapIcon', label: 'IADVL Member', sub: 'Dermatology' },
  { icon: 'ShieldCheckIcon', label: '35+ Years', sub: 'Experience' },
  { icon: 'StarIcon', label: '4.7★ Rating', sub: '1900+ Reviews' },
  { icon: 'UserGroupIcon', label: 'CDSI · ACSI', sub: 'Certified' },
];

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  // Ambient particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    const particles: Array<{
      x: number; y: number; vx: number; vy: number;
      size: number; opacity: number; life: number; maxLife: number; color: string;
    }> = [];

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const colors = [
      'rgba(201,168,76,', 'rgba(200,216,240,', 'rgba(139,163,199,',
    ];

    const spawnParticle = () => {
      const maxLife = 120 + Math.random() * 180;
      particles.push({
        x: Math.random() * canvas.width,
        y: canvas.height + 10,
        vx: (Math.random() - 0.5) * 0.6,
        vy: -(0.3 + Math.random() * 0.8),
        size: 1 + Math.random() * 2.5,
        opacity: 0,
        life: 0,
        maxLife,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    };

    let frame = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      frame++;
      if (frame % 4 === 0 && particles.length < 80) spawnParticle();

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.life++;
        p.x += p.vx;
        p.y += p.vy;
        const progress = p.life / p.maxLife;
        p.opacity = progress < 0.1 ? progress * 10 : progress > 0.8 ? (1 - progress) * 5 : 0.6;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = `${p.color}${p.opacity * 0.7})`;
        ctx.fill();

        if (p.life >= p.maxLife || p.y < -10) particles.splice(i, 1);
      }
      animId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    });
  };

  return (
    <section
      className="relative min-h-screen flex flex-col overflow-hidden noise-overlay"
      onMouseMove={handleMouseMove}
    >
      {/* Ambient gradient background layers */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 transition-all duration-700"
          style={{
            background: `radial-gradient(ellipse 100% 80% at ${mousePos.x * 100}% ${mousePos.y * 60}%, rgba(22,40,71,0.6) 0%, rgba(7,15,30,1) 60%)`,
          }}
        />
        {/* Deep blue base */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/30 to-background" />
        {/* Gold accent glow — top right */}
        <div
          className="absolute top-0 right-0 w-1/2 h-2/3 animate-pulse-glow"
          style={{
            background: 'radial-gradient(ellipse 60% 50% at 80% 20%, rgba(201,168,76,0.08) 0%, transparent 70%)',
          }}
        />
        {/* Blue glow — bottom left */}
        <div
          className="absolute bottom-0 left-0 w-1/2 h-1/2"
          style={{
            background: 'radial-gradient(ellipse 60% 60% at 20% 90%, rgba(13,31,60,0.8) 0%, transparent 70%)',
          }}
        />
      </div>

      {/* Particle canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full z-0 pointer-events-none"
        aria-hidden="true"
      />

      {/* Beam lines */}
      <div className="beam-line-v absolute left-1/4 top-0 bottom-0 z-0" style={{ animationDelay: '0s' }} />
      <div className="beam-line-v absolute left-3/4 top-0 bottom-0 z-0" style={{ animationDelay: '3s' }} />

      {/* Floating geometric shapes */}
      <div
        className="absolute top-20 right-16 w-32 h-32 rounded-full border border-accent/10 animate-float-slow pointer-events-none z-0"
        style={{ animationDelay: '0s' }}
        aria-hidden="true"
      />
      <div
        className="absolute top-40 right-32 w-16 h-16 rounded-full border border-accent/15 animate-float-medium pointer-events-none z-0"
        style={{ animationDelay: '1.5s' }}
        aria-hidden="true"
      />
      <div
        className="absolute bottom-40 left-16 w-24 h-24 rounded-full border border-secondary-foreground/10 animate-float-slow pointer-events-none z-0"
        style={{ animationDelay: '2s' }}
        aria-hidden="true"
      />

      {/* Hero content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center pt-28 pb-16 px-6 lg:px-10 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left column: Text content */}
          <div className="lg:col-span-6 flex flex-col gap-6">
            {/* Trust badge */}
            <div className="animate-fade-slide-up" style={{ animationDelay: '0.1s', animationFillMode: 'forwards', opacity: 0 }}>
              <div className="inline-flex items-center gap-2.5 glass-card-light rounded-full px-4 py-2 w-fit">
                <div className="flex items-center gap-1">
                  {[1,2,3,4,5].map((s) => (
                    <svg key={s} className="w-3 h-3 text-accent fill-current" viewBox="0 0 24 24">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs font-semibold text-accent">4.7 Rating</span>
                <span className="w-px h-3 bg-border" />
                <span className="text-xs text-muted-foreground">1,900+ Patient Reviews</span>
              </div>
            </div>

            {/* Main headline */}
            <div className="animate-fade-slide-up" style={{ animationDelay: '0.2s', animationFillMode: 'forwards', opacity: 0 }}>
              <h1 className="text-hero-xl font-bold tracking-tight text-foreground leading-tight">
                Vijayawada&apos;s Most{' '}
                <span className="gold-shimmer">Trusted</span>
                <br />
                Skin & Hair Experts
              </h1>
            </div>

            {/* Sub headline */}
            <div className="animate-fade-slide-up" style={{ animationDelay: '0.3s', animationFillMode: 'forwards', opacity: 0 }}>
              <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl font-light">
                Dr. Ranganadh & Dr. Rama Charan bring <strong className="text-secondary-foreground font-semibold">35+ years</strong> of specialist expertise in dermatology, cosmetology, laser treatments, and advanced hair restoration — delivering medically precise, personally tailored care.
              </p>
            </div>

            {/* CTAs */}
            <div className="animate-fade-slide-up flex flex-wrap gap-3" style={{ animationDelay: '0.4s', animationFillMode: 'forwards', opacity: 0 }}>
              <Link href="/contact" className="btn-primary relative px-6 py-3.5 rounded-full text-sm font-bold flex items-center gap-2">
                <span className="relative z-10">Book Consultation</span>
                <Icon name="ArrowRightIcon" size={16} className="relative z-10" />
              </Link>
              <Link href="/services" className="btn-outline-gold px-6 py-3.5 rounded-full text-sm font-semibold flex items-center gap-2">
                Explore Treatments
                <Icon name="ChevronRightIcon" size={16} />
              </Link>
            </div>

            {/* Credential badges row */}
            <div className="animate-fade-slide-up grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2" style={{ animationDelay: '0.55s', animationFillMode: 'forwards', opacity: 0 }}>
              {CREDENTIALS.map((cred) => (
                <div key={cred.label} className="credential-badge rounded-xl px-3 py-2.5 flex flex-col gap-1">
                  <Icon name={cred.icon as Parameters<typeof Icon>[0]['name']} size={16} className="text-accent" />
                  <span className="text-xs font-semibold text-foreground leading-tight">{cred.label}</span>
                  <span className="text-xs text-muted-foreground leading-tight">{cred.sub}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column: Visual card */}
          <div className="lg:col-span-6 relative animate-scale-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards', opacity: 0 }}>
            <div className="relative rounded-3xl overflow-hidden gradient-border group" style={{ minHeight: '520px' }}>
              {/* Main image */}
              <AppImage
                src="/assets/images/unnamed__1_-1778590561611.webp"
                alt="Dr. Ranganadh and Dr. Rama Charan at Vipula Clinic Vijayawada, professional dermatologists in clinical setting with soft blue ambient lighting"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                priority
              />
              {/* Dark scrim — bottom to top for text legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/30 to-transparent" />
              {/* Gold accent overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-accent/10" />

              {/* Floating stat cards */}
              <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-3 z-10">
                {/* Experience card */}
                <div className="glass-card rounded-2xl px-4 py-3 flex items-center justify-between animate-float-medium" style={{ animationDelay: '1s' }}>
                  <div>
                    <p className="text-xs text-muted-foreground font-medium">Combined Experience</p>
                    <p className="text-xl font-bold text-accent">35+ Years</p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <Icon name="AcademicCapIcon" size={20} className="text-accent" />
                  </div>
                </div>

                {/* Doctor names */}
                <div className="glass-card rounded-2xl px-4 py-3 flex items-center gap-3">
                  <div className="flex -space-x-2">
                    <div className="w-9 h-9 rounded-full bg-muted border-2 border-border overflow-hidden">
                      <AppImage
                        src="/assets/images/unnamed__2_-1778590561558.webp"
                        alt="Dr. Ranganadh, Senior Dermatologist at Vipula Clinic"
                        width={36}
                        height={36}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div className="w-9 h-9 rounded-full bg-secondary border-2 border-border overflow-hidden">
                      <AppImage
                        src="/assets/images/unnamed__3_-1778590561601.webp"
                        alt="Dr. Rama Charan, Cosmetologist at Vipula Clinic"
                        width={36}
                        height={36}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground">Dr. Ranganadh & Dr. Rama Charan</p>
                    <p className="text-xs text-muted-foreground">Dermatologist · Cosmetologist</p>
                  </div>
                </div>
              </div>

              {/* Top right: Location badge */}
              <div className="absolute top-5 right-5 z-10">
                <div className="glass-card rounded-full px-3 py-1.5 flex items-center gap-1.5 animate-float-slow" style={{ animationDelay: '0.5s' }}>
                  <Icon name="MapPinIcon" size={12} className="text-accent" />
                  <span className="text-xs font-semibold text-foreground">Vijayawada, AP</span>
                </div>
              </div>
            </div>

            {/* Decorative floating ring */}
            <div
              className="absolute -top-8 -right-8 w-40 h-40 rounded-full border border-accent/10 pointer-events-none animate-float-slow"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
    </section>
  );
}