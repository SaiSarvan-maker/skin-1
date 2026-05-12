'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const CATEGORIES = [
  {
    id: 'hair',
    title: 'Hair Treatments',
    icon: 'SparklesIcon',
    description: 'Advanced, medically supervised hair restoration and scalp health solutions for all types of hair loss and scalp conditions.',
    treatments: [
      { name: 'PRP Hair Therapy', desc: 'Platelet-rich plasma injections to stimulate hair follicle growth and thickness.' },
      { name: 'Hair Transplant (FUE)', desc: 'Minimally invasive follicular unit extraction for permanent, natural-looking results.' },
      { name: 'Scalp Analysis & Treatment', desc: 'Advanced trichoscopy-guided diagnosis and targeted scalp care protocols.' },
      { name: 'Anti-hair Fall Treatment', desc: 'Customized medical protocols addressing nutritional, hormonal, and genetic causes.' },
      { name: 'Mesotherapy for Hair', desc: 'Microinjections of hair growth serums directly into the scalp for rapid results.' },
      { name: 'Low-Level Laser Therapy', desc: 'FDA-cleared laser phototherapy to stimulate dormant follicles and reduce shedding.' },
    ],
    accent: '#C9A84C',
  },
  {
    id: 'skin',
    title: 'Skin Treatments',
    icon: 'SunIcon',
    description: 'Medical-grade skin care addressing acne, scars, uneven texture, dullness, and overall skin health with proven dermatological protocols.',
    treatments: [
      { name: 'Acne & Pimple Treatment', desc: 'Comprehensive acne management combining topical, oral, and procedural therapies.' },
      { name: 'Chemical Peels', desc: 'Controlled exfoliation using medical-grade acids for skin renewal and brightening.' },
      { name: 'Skin Brightening & Lightening', desc: 'Evidence-based protocols for achieving even, luminous skin tone.' },
      { name: 'Scar Revision', desc: 'Multi-modality approach for acne scars, surgical scars, and traumatic marks.' },
      { name: 'Microdermabrasion', desc: 'Physical exfoliation for smoother texture and improved product absorption.' },
      { name: 'Skin Hydration Therapy', desc: 'Intensive hydration treatments restoring skin barrier and moisture balance.' },
    ],
    accent: '#8BA3C7',
  },
  {
    id: 'laser',
    title: 'Laser Treatments',
    icon: 'BoltIcon',
    description: 'State-of-the-art laser technology delivering precise, effective results for hair removal, skin resurfacing, and targeted rejuvenation.',
    treatments: [
      { name: 'Laser Hair Removal', desc: 'Permanent hair reduction using advanced diode and Nd:YAG laser systems.' },
      { name: 'CO2 Laser Resurfacing', desc: 'Fractional CO2 ablation for deep scar revision, wrinkle reduction, and skin renewal.' },
      { name: 'Laser Toning (Q-Switch)', desc: 'Q-switched Nd:YAG for pigmentation, tattoo removal, and skin brightening.' },
      { name: 'Vascular Laser', desc: 'Targeted treatment for spider veins, rosacea, and vascular birthmarks.' },
      { name: 'Laser Acne Treatment', desc: 'Blue light and photodynamic therapy for active acne and sebaceous regulation.' },
      { name: 'Fractional Laser', desc: 'Micro-fractional resurfacing for texture, pores, and overall skin quality.' },
    ],
    accent: '#C9A84C',
  },
  {
    id: 'cosmetology',
    title: 'Cosmetology',
    icon: 'FaceSmileIcon',
    description: 'Premium aesthetic treatments for facial enhancement, contouring, and skin perfection — performed by certified cosmetologists.',
    treatments: [
      { name: 'Botox / Dysport', desc: 'Precision neuromodulator injections for dynamic wrinkle relaxation and facial harmony.' },
      { name: 'Dermal Fillers', desc: 'Hyaluronic acid volumization for lips, cheeks, jawline, and under-eye hollows.' },
      { name: 'Thread Lift', desc: 'Minimally invasive PDO thread lift for immediate lifting and collagen stimulation.' },
      { name: 'Mesotherapy', desc: 'Cocktail microinjections for skin hydration, brightening, and rejuvenation.' },
      { name: 'Lip Enhancement', desc: 'Natural-looking lip augmentation and definition using advanced filler techniques.' },
      { name: 'Under-eye Treatment', desc: 'Targeted filler and PRP protocols for dark circles and hollowing.' },
    ],
    accent: '#8BA3C7',
  },
  {
    id: 'pigmentation',
    title: 'Pigmentation & Scar Care',
    icon: 'SwatchIcon',
    description: 'Targeted, evidence-based treatments for melasma, dark spots, post-inflammatory hyperpigmentation, and all types of scars.',
    treatments: [
      { name: 'Melasma Treatment', desc: 'Comprehensive multi-modal approach for stubborn hormonal and sun-induced melasma.' },
      { name: 'Dark Spot Removal', desc: 'Targeted laser and chemical treatments for age spots, freckles, and sun damage.' },
      { name: 'Acne Scar Therapy', desc: 'Combined laser, microneedling, and filler protocols for all acne scar types.' },
      { name: 'Keloid & Hypertrophic Scars', desc: 'Intralesional injections, laser, and compression therapy for raised scars.' },
      { name: 'Vitiligo Treatment', desc: 'NB-UVB phototherapy and targeted topical protocols for vitiligo management.' },
      { name: 'Post-Inflammatory Marks', desc: 'Rapid clearance protocols for post-acne, post-eczema, and trauma marks.' },
    ],
    accent: '#C9A84C',
  },
  {
    id: 'antiaging',
    title: 'Anti-aging & Rejuvenation',
    icon: 'ArrowPathIcon',
    description: 'Advanced rejuvenation therapies combining collagen stimulation, skin tightening, and cellular renewal for visibly younger skin.',
    treatments: [
      { name: 'HydraFacial', desc: 'Multi-step vortex cleansing, exfoliation, extraction, and hydration treatment.' },
      { name: 'RF Skin Tightening', desc: 'Radiofrequency energy for deep dermal tightening and collagen remodeling.' },
      { name: 'PRP Facial (Vampire Facial)', desc: 'Autologous platelet-rich plasma for cellular renewal and collagen induction.' },
      { name: 'Ultherapy / HIFU', desc: 'High-intensity focused ultrasound for non-surgical brow and neck lifting.' },
      { name: 'Microneedling RF', desc: 'Fractional radiofrequency microneedling for deep collagen stimulation and remodeling.' },
      { name: 'IV Skin Brightening', desc: 'Medical-grade intravenous glutathione and vitamin infusions for systemic skin health.' },
    ],
    accent: '#8BA3C7',
  },
  {
    id: 'clinical',
    title: 'Clinical Dermatology',
    icon: 'BeakerIcon',
    description: 'Comprehensive medical dermatology for diagnosis and management of all skin disorders — from common conditions to complex chronic diseases.',
    treatments: [
      { name: 'Psoriasis Management', desc: 'Biologic, phototherapy, and topical protocols for all psoriasis types and severity.' },
      { name: 'Eczema / Dermatitis', desc: 'Personalized management plans for atopic, contact, and seborrheic dermatitis.' },
      { name: 'Vitiligo', desc: 'NB-UVB, topical immunomodulators, and surgical repigmentation for vitiligo.' },
      { name: 'Fungal Infections', desc: 'Accurate diagnosis and targeted antifungal protocols for all dermatophyte infections.' },
      { name: 'Urticaria & Angioedema', desc: 'Investigation-guided management of acute and chronic urticaria.' },
      { name: 'Skin Allergy Testing', desc: 'Comprehensive patch testing and allergen identification for contact allergies.' },
      { name: 'Warts & Molluscum', desc: 'Cryotherapy, electrocautery, and immunotherapy for viral skin lesions.' },
      { name: 'Nail Disorders', desc: 'Diagnosis and treatment of onychomycosis, psoriatic nails, and nail dystrophies.' },
    ],
    accent: '#C9A84C',
  },
];

export default function ServicesCategoriesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState('hair');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.querySelectorAll('.section-reveal').forEach((el, i) => {
              setTimeout(() => el.classList.add('revealed'), i * 60);
            });
          }
        });
      },
      { threshold: 0.05 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const active = CATEGORIES.find((c) => c.id === activeCategory) || CATEGORIES[0];

  return (
    <section ref={sectionRef} className="py-8 px-6 lg:px-10 relative">
      <div className="max-w-7xl mx-auto">
        {/* Category tabs */}
        <div className="section-reveal mb-8 overflow-x-auto scrollbar-hide">
          <div className="flex gap-2 min-w-max pb-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 whitespace-nowrap ${
                  activeCategory === cat.id
                    ? 'bg-accent text-accent-foreground shadow-lg'
                    : 'glass-card text-muted-foreground hover:text-foreground hover:border-border/60'
                }`}
              >
                <Icon name={cat.icon as Parameters<typeof Icon>[0]['name']} size={14} />
                {cat.title}
              </button>
            ))}
          </div>
        </div>

        {/* Active category detail */}
        <div className="section-reveal glass-card rounded-3xl p-6 lg:p-8 gradient-border mb-8">
          <div className="flex items-start gap-4 mb-6">
            <div
              className="w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0"
              style={{ background: `${active.accent}18`, border: `1px solid ${active.accent}30` }}
            >
              <Icon name={active.icon as Parameters<typeof Icon>[0]['name']} size={24} style={{ color: active.accent }} />
            </div>
            <div>
              <h2 className="text-xl font-bold text-foreground mb-1">{active.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">{active.description}</p>
            </div>
          </div>

          {/* Treatments grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {active.treatments.map((t) => (
              <div key={t.name} className="glass-card-light rounded-xl p-4 card-hover-lift group">
                <div className="flex items-center gap-2 mb-2">
                  <div
                    className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                    style={{ background: active.accent }}
                  />
                  <h3 className="text-sm font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                    {t.name}
                  </h3>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">{t.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-6 border-t border-border/40 flex items-center justify-between flex-wrap gap-4">
            <p className="text-sm text-muted-foreground">
              All treatments supervised by <strong className="text-foreground">Dr. Ranganadh & Dr. Rama Charan</strong>
            </p>
            <Link
              href="/contact"
              className="btn-primary relative px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2"
            >
              <span className="relative z-10">Book This Treatment</span>
              <Icon name="ArrowRightIcon" size={14} className="relative z-10" />
            </Link>
          </div>
        </div>

        {/* All categories compact grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`section-reveal glass-card rounded-2xl p-4 text-left transition-all duration-300 card-hover-lift ${
                activeCategory === cat.id ? 'border border-accent/40' : ''
              }`}
            >
              <Icon name={cat.icon as Parameters<typeof Icon>[0]['name']} size={20} style={{ color: cat.accent }} className="mb-2" />
              <p className="text-sm font-semibold text-foreground">{cat.title}</p>
              <p className="text-xs text-muted-foreground mt-1">{cat.treatments.length} treatments</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}