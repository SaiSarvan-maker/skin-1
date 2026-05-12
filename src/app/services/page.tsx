import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServicesHero from './components/ServicesHero';
import ServicesCategoriesSection from './components/ServicesCategoriesSection';
import ServicesFAQ from './components/ServicesFAQ';
import ServicesCtaSection from './components/ServicesCtaSection';

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <ServicesHero />
      <ServicesCategoriesSection />
      <ServicesFAQ />
      <ServicesCtaSection />
      <Footer />
    </main>
  );
}