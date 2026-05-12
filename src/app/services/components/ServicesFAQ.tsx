'use client';
import React, { useEffect, useRef, useState } from 'react';
import Icon from '@/components/ui/AppIcon';

const FAQS = [
  {
    q: 'How do I know which treatment is right for me?',
    a: 'During your initial consultation, Dr. Ranganadh or Dr. Rama Charan will conduct a thorough skin/hair analysis, review your medical history, and recommend a personalized treatment plan tailored to your specific concerns and goals.',
  },
  {
    q: 'Are the treatments at Vipula Clinic safe?',
    a: 'Absolutely. All treatments are performed by qualified, experienced dermatologists using certified medical equipment. We follow strict sterilization protocols and international safety standards. Each procedure is preceded by a thorough medical evaluation.',
  },
  {
    q: 'How many sessions will I need?',
    a: 'The number of sessions varies depending on the treatment and individual response. During your consultation, your doctor will provide a realistic treatment timeline based on your specific condition, skin type, and desired outcomes.',
  },
  {
    q: 'What is the difference between a dermatologist and a cosmetologist?',
    a: 'A dermatologist (like Dr. Ranganadh) is a medical doctor specializing in diagnosing and treating skin, hair, and nail diseases. A cosmetologist (like Dr. Rama Charan) focuses on aesthetic enhancement treatments. Vipula Clinic uniquely offers both under one roof.',
  },
  {
    q: 'Do you offer packages or payment plans?',
    a: 'Yes, we offer treatment packages for multi-session therapies like laser hair removal, PRP, and chemical peel series. Please speak with our team during your consultation for pricing and package details.',
  },
  {
    q: 'Is there downtime after treatments?',
    a: 'Downtime varies by treatment. Procedures like chemical peels or laser resurfacing may require 3-7 days of recovery, while treatments like Botox or laser toning have minimal to no downtime. Your doctor will advise you fully before each procedure.',
  },
  {
    q: 'Can I book an online consultation?',
    a: 'Yes, we offer both in-clinic and telephonic consultations. You can reach us via phone, WhatsApp, or our contact form. Our team will help schedule a convenient time for you.',
  },
];

export default function ServicesFAQ() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [openIdx, setOpenIdx] = useState<number | null>(0);

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
      { threshold: 0.1 }
    );
    if (sectionRef?.current) observer?.observe(sectionRef?.current);
    return () => observer?.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 lg:px-10 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute top-0 left-0 right-0 h-px divider-gold" />
      </div>
      <div className="max-w-3xl mx-auto">
        <div className="section-reveal text-center mb-12">
          <div className="inline-flex items-center gap-2 glass-card-light rounded-full px-4 py-1.5 mb-5">
            <Icon name="QuestionMarkCircleIcon" size={14} className="text-accent" />
            <span className="text-xs font-semibold text-accent uppercase tracking-widest">FAQ</span>
          </div>
          <h2 className="text-section-title font-bold text-foreground tracking-tight mb-4">
            Common Questions
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            Everything you need to know before your first visit to Vipula Clinic.
          </p>
        </div>

        <div className="flex flex-col gap-2">
          {FAQS?.map((faq, i) => (
            <div
              key={i}
              className="section-reveal glass-card rounded-2xl overflow-hidden gradient-border"
            >
              <button
                className="w-full flex items-center justify-between px-5 py-4 text-left gap-4"
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                aria-expanded={openIdx === i}
              >
                <span className="text-sm font-semibold text-foreground leading-relaxed">{faq?.q}</span>
                <Icon
                  name={openIdx === i ? 'ChevronUpIcon' : 'ChevronDownIcon'}
                  size={16}
                  className={`text-accent flex-shrink-0 transition-transform duration-300 ${openIdx === i ? 'rotate-0' : ''}`}
                />
              </button>
              {openIdx === i && (
                <div className="px-5 pb-5 border-t border-border/40">
                  <p className="text-sm text-muted-foreground leading-relaxed pt-3">{faq?.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}