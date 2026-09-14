import React from 'react';
import Navbar from '@/components/Navbar';
import HeroBanner from '@/components/HeroBanner';
import SectionDivider from '@/components/SectionDivider';
import CustomWebAppSection from '@/components/CustomWebAppSection';
import Clients from '@/components/Clients';
import CollaborationShowcase from '@/components/CollaborationShowcase';
import AgileProcessRoadmap from '@/components/AgileProcessRoadmap';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080d14] text-slate-100 selection:bg-[#2bccaf] selection:text-slate-950 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#2bccaf]/10 blur-[150px] rounded-full pointer-events-none -z-10" />

      {/* Main Navbar */}
      <Navbar />

      {/* Hero Banner Section with Integrated Tech Stack Ribbon */}
      <HeroBanner />

      {/* Section Divider */}
      <SectionDivider />

      {/* Section: Custom Web Applications (with Integrated Demo Showcase) */}
      <CustomWebAppSection />

      {/* Section Divider */}
      <SectionDivider />

      {/* Section: Agile Squad Collaboration & Workshop Showcase */}
      <CollaborationShowcase />

      {/* Section Divider */}
      <SectionDivider />

      {/* Section: Development Process Lifecycle & Guarantees */}
      <AgileProcessRoadmap />

      {/* Section Divider */}
      <SectionDivider />

      {/* Section: Trusted Clients & Partners (Social Proof before Contact/Footer) */}
      <Clients />

      {/* Footer */}
      <Footer />
    </main>
  );
}
