'use client';
import React, { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const TREATMENT_OPTIONS = [
  'Hair Treatment / PRP',
  'Hair Transplant',
  'Skin Treatment / Acne',
  'Laser Hair Removal',
  'Laser Skin Treatment',
  'Cosmetology / Botox / Fillers',
  'Pigmentation / Melasma',
  'Anti-aging / Rejuvenation',
  'Clinical Dermatology',
  'General Consultation',
];

const TIME_SLOTS = [
  'Morning (9:30 AM – 12:00 PM)',
  'Afternoon (12:00 PM – 3:00 PM)',
  'Evening (3:00 PM – 7:30 PM)',
];

export default function ContactFormSection() {
  const [formState, setFormState] = useState({
    name: '',
    phone: '',
    email: '',
    treatment: '',
    preferredTime: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const whatsappNumber = '918332887878';
    const message = [
      `🏥 *Appointment Request – Vipula Hair & Skin Clinic*`,
      ``,
      `👤 *Name:* ${formState.name}`,
      `📞 *Phone:* ${formState.phone}`,
      formState.email ? `📧 *Email:* ${formState.email}` : null,
      `💆 *Treatment:* ${formState.treatment}`,
      formState.preferredTime ? `🕐 *Preferred Time:* ${formState.preferredTime}` : null,
      formState.message ? `📝 *Notes:* ${formState.message}` : null,
    ]
      .filter(Boolean)
      .join('\n');

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="glass-card rounded-3xl p-8 gradient-border text-center flex flex-col items-center gap-4 py-16">
        <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center gold-glow">
          <Icon name="CheckCircleIcon" size={32} className="text-accent" />
        </div>
        <h3 className="text-xl font-bold text-foreground">Consultation Request Received!</h3>
        <p className="text-muted-foreground text-sm leading-relaxed max-w-sm">
          Thank you, {formState.name}. Our team will contact you within 2-4 hours to confirm your appointment. For urgent queries, call us directly.
        </p>
        <a href="tel:+918662455999" className="btn-primary relative px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 mt-2">
          <span className="relative z-10">Call Now</span>
          <Icon name="PhoneIcon" size={14} className="relative z-10" />
        </a>
      </div>
    );
  }

  return (
    <div className="glass-card rounded-3xl p-6 lg:p-8 gradient-border">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-foreground mb-1">Request an Appointment</h2>
        <p className="text-sm text-muted-foreground">Fill in your details and we&apos;ll get back to you promptly.</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Name + Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1.5">
            <label htmlFor="name" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Full Name *
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formState.name}
              onChange={handleChange}
              placeholder="Your full name"
              className="w-full bg-[#1A2D4F] border border-border/60 rounded-xl px-4 py-3 text-sm text-white placeholder:text-[#8BA3C7] focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-all duration-300"
              suppressHydrationWarning
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <label htmlFor="phone" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Phone Number *
            </label>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              value={formState.phone}
              onChange={handleChange}
              placeholder="+91 XXXXX XXXXX"
              className="w-full bg-[#1A2D4F] border border-border/60 rounded-xl px-4 py-3 text-sm text-white placeholder:text-[#8BA3C7] focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-all duration-300"
              suppressHydrationWarning
            />
          </div>
        </div>

        {/* Email */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formState.email}
            onChange={handleChange}
            placeholder="your@email.com"
            className="w-full bg-[#1A2D4F] border border-border/60 rounded-xl px-4 py-3 text-sm text-white placeholder:text-[#8BA3C7] focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-all duration-300"
            suppressHydrationWarning
          />
        </div>

        {/* Treatment */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="treatment" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Treatment Interest *
          </label>
          <select
            id="treatment"
            name="treatment"
            required
            value={formState.treatment}
            onChange={handleChange}
            className="w-full bg-[#1A2D4F] border border-border/60 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-all duration-300"
            suppressHydrationWarning
          >
            <option value="" className="bg-card">Select a treatment area</option>
            {TREATMENT_OPTIONS.map((opt) => (
              <option key={opt} value={opt} className="bg-card">{opt}</option>
            ))}
          </select>
        </div>

        {/* Preferred time */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="preferredTime" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Preferred Time Slot
          </label>
          <select
            id="preferredTime"
            name="preferredTime"
            value={formState.preferredTime}
            onChange={handleChange}
            className="w-full bg-[#1A2D4F] border border-border/60 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-all duration-300"
            suppressHydrationWarning
          >
            <option value="" className="bg-card">Any time is fine</option>
            {TIME_SLOTS.map((slot) => (
              <option key={slot} value={slot} className="bg-card">{slot}</option>
            ))}
          </select>
        </div>

        {/* Message */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="message" className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            Additional Notes
          </label>
          <textarea
            id="message"
            name="message"
            rows={3}
            value={formState.message}
            onChange={handleChange}
            placeholder="Describe your concern or any specific questions..."
            className="w-full bg-[#1A2D4F] border border-border/60 rounded-xl px-4 py-3 text-sm text-white placeholder:text-[#8BA3C7] focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-all duration-300 resize-none"
            suppressHydrationWarning
          />
        </div>

        <button
          type="submit"
          className="btn-primary relative w-full py-3.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 mt-2"
          suppressHydrationWarning
        >
          <span className="relative z-10">Submit Appointment Request</span>
          <Icon name="ArrowRightIcon" size={16} className="relative z-10" />
        </button>

        <p className="text-xs text-muted-foreground text-center">
          We respect your privacy. Your information is used only for appointment scheduling.
        </p>
      </form>
    </div>
  );
}