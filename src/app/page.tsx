"use client";

import Hero from '@/components/Hero';
import BuildWithAISection from '@/components/BuildWithAISection';
import WorkshopsSection from '@/components/WorkshopsSection';
import ImpactSection from '@/components/ImpactSection';
import CommunitySection from '@/components/CommunitySection';
import PartnersSection from '@/components/PartnersSection';
import PastEventsSection from '@/components/PastEventsSection';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <div id="buildwithai" className="py-16 bg-gray-50">
        <BuildWithAISection />
      </div>
      <div id="eventos-pasados" className="py-16">
        <PastEventsSection />
      </div>
      <div id="talleres" className="py-16 bg-gray-50">
        <WorkshopsSection />
      </div>
      <div id="impacto" className="py-16">
        <ImpactSection />
      </div>
      <div id="comunidad" className="py-16 bg-gray-50">
        <CommunitySection />
      </div>
      <div id="patrocinadores" className="py-16">
        <PartnersSection />
      </div>
    </div>
  );
} 