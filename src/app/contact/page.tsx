import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactHero from './components/ContactHero';
import ContactFormSection from './components/ContactFormSection';
import ContactInfoSection from './components/ContactInfoSection';

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background overflow-x-hidden">
      <Header />
      <ContactHero />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7">
            <ContactFormSection />
          </div>
          <div className="lg:col-span-5">
            <ContactInfoSection />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}