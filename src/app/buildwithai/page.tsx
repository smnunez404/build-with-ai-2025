"use client";

import { useState } from 'react';
import Hero from '@/components/buildwithai/Hero';
import TabNavigation from '@/components/buildwithai/TabNavigation';
import AboutSection from '@/components/buildwithai/AboutSection';
import HackathonSection from '@/components/buildwithai/HackathonSection';
import AgendaSection from '@/components/buildwithai/AgendaSection';
import PrizesSection from '@/components/buildwithai/PrizesSection';
import WorkshopsSection from '@/components/buildwithai/WorkshopsSection';
import OrganizersSection from '@/components/buildwithai/OrganizersSection';
import FAQSection from '@/components/buildwithai/FAQSection';
 
export default function BuildWithAIPage() {
  const [activeTab, setActiveTab] = useState('sobre');

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Navegación por tabs */}
      <TabNavigation activeTab={activeTab} setActiveTab={setActiveTab} />

      <div className="container-custom mx-auto py-12">
        {/* Contenido según pestaña activa */}
        {activeTab === 'sobre' && <AboutSection />}
        {activeTab === 'hackathon' && <HackathonSection />}
        {activeTab === 'agenda' && <AgendaSection />}
        {activeTab === 'premios' && <PrizesSection />}
        {activeTab === 'talleres' && <WorkshopsSection />}
        {activeTab === 'organizadores' && <OrganizersSection />}
        {activeTab === 'faq' && <FAQSection />}
        
      </div>
    </div>
  );
} 