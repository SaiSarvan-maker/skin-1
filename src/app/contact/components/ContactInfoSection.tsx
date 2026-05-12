'use client';
import React, { useEffect, useRef } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

const CLINIC_HOURS = [
  { day: 'Monday – Friday', hours: '9:30 AM – 7:30 PM', open: true },
  { day: 'Saturday', hours: '9:30 AM – 5:00 PM', open: true },
  { day: 'Sunday', hours: 'Closed', open: false },
];

export default function ContactInfoSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

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
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="flex flex-col gap-4">
      {/* Clinic image */}
      <div className="section-reveal glass-card rounded-3xl overflow-hidden gradient-border h-52 relative">
        <AppImage
          src="/assets/images/unnamed__1_-1778590561611.webp"
          alt="Vipula Hair and Skin Clinic interior, Vijayawada - professional medical clinic with modern equipment and clean clinical environment"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-card/70 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="glass-card rounded-xl px-3 py-2 flex items-center gap-2">
            <Icon name="BuildingOfficeIcon" size={14} className="text-accent" />
            <span className="text-xs font-semibold text-foreground">Vipula Hair & Skin Clinic</span>
          </div>
        </div>
      </div>

      {/* Quick contact */}
      <div className="section-reveal glass-card rounded-2xl p-5 gradient-border">
        <h3 className="text-sm font-bold text-foreground mb-4 uppercase tracking-wider">Contact Directly</h3>
        <div className="flex flex-col gap-3">
          <a
            href="tel:+918332887878"
            className="flex items-center gap-3 p-3 rounded-xl bg-muted/40 hover:bg-muted/70 transition-all duration-300 group"
          >
            <div className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
              <Icon name="PhoneIcon" size={16} className="text-accent" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Phone</p>
              <p className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">+91 83328 87878</p>
            </div>
          </a>
          <a
            href="https://wa.me/918662455999"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 p-3 rounded-xl bg-muted/40 hover:bg-muted/70 transition-all duration-300 group"
          >
            <div className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
              <Icon name="ChatBubbleLeftEllipsisIcon" size={16} className="text-accent" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground">WhatsApp</p>
              <p className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors">Message Us on WhatsApp</p>
            </div>
          </a>
        </div>
      </div>

      {/* Address */}
      <div className="section-reveal glass-card rounded-2xl p-5 gradient-border">
        <h3 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wider">Location</h3>
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0 mt-0.5">
            <Icon name="MapPinIcon" size={16} className="text-accent" />
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">Vipula Hair & Skin Clinic</p>
            <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
              Vijayawada, Andhra Pradesh, India
            </p>
            <a
              href="https://maps.google.com/?q=Vipula+Hair+Skin+Clinic+Vijayawada"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-accent hover:underline mt-2 font-medium"
            >
              Get Directions
              <Icon name="ArrowTopRightOnSquareIcon" size={12} />
            </a>
          </div>
        </div>
      </div>

      {/* Google Maps Embed */}
      <div className="section-reveal glass-card rounded-2xl overflow-hidden gradient-border">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.0!2d80.6480!3d16.5062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35eff9a4e7c4b7%3A0x0!2sVipula+Hair+%26+Skin+Clinic%2C+Vijayawada%2C+Andhra+Pradesh!5e0!3m2!1sen!2sin!4v1699999999999!5m2!1sen!2sin"
          width="100%"
          height="220"
          style={{ border: 0, display: 'block' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Vipula Hair & Skin Clinic location on Google Maps"
        />
      </div>

      {/* Hours */}
      <div className="section-reveal glass-card rounded-2xl p-5 gradient-border">
        <h3 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wider">Clinic Hours</h3>
        <div className="flex flex-col gap-2">
          {CLINIC_HOURS.map((item) => (
            <div key={item.day} className="flex items-center justify-between py-1.5 border-b border-border/30 last:border-0">
              <span className="text-sm text-muted-foreground">{item.day}</span>
              <div className="flex items-center gap-2">
                <span className={`w-1.5 h-1.5 rounded-full ${item.open ? 'bg-accent' : 'bg-muted-foreground'}`} />
                <span className={`text-sm font-medium ${item.open ? 'text-foreground' : 'text-muted-foreground'}`}>
                  {item.hours}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Trust indicators */}
      <div className="section-reveal glass-card rounded-2xl p-5 gradient-border">
        <div className="grid grid-cols-2 gap-3">
          {[
            { icon: 'ShieldCheckIcon', label: '35+ Years', sub: 'Experience' },
            { icon: 'StarIcon', label: '4.7★ Rating', sub: '1900+ Reviews' },
            { icon: 'CheckBadgeIcon', label: 'IADVL', sub: 'Certified' },
            { icon: 'UserGroupIcon', label: '10,000+', sub: 'Patients' },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-2.5 p-2.5 rounded-xl bg-muted/30">
              <Icon name={item.icon as Parameters<typeof Icon>[0]['name']} size={16} className="text-accent flex-shrink-0" />
              <div>
                <p className="text-xs font-bold text-foreground">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}