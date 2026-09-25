/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryShowcase } from './components/CategoryShowcase';
import { Testimonials } from './components/Testimonials';
import { OutsourcingB2B } from './components/OutsourcingB2B';
import { CostCalculator } from './components/CostCalculator';
import { TechnicalServices } from './components/TechnicalServices';
import { RegionalTrust } from './components/RegionalTrust';
import { FAQSection } from './components/FAQSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-slate-100 text-slate-800 selection:bg-blue-900 selection:text-white relative font-sans">
      {/* Top Bar Navigation (Fluid Island) */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 pb-24 sm:pb-0">
        <Hero />
        <CategoryShowcase />
        <Testimonials />
        <OutsourcingB2B />
        <CostCalculator />
        <TechnicalServices />
        <RegionalTrust />
        <FAQSection />
      </main>

      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
