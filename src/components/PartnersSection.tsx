"use client";

import Link from 'next/link';

// Datos de ejemplo para sponsors
const sponsors = [
  { id: 1, name: 'Google', type: 'Principal', logo: 'google.svg' },
  { id: 2, name: 'UNIFRANZ', type: 'Venue', logo: 'unifranz.svg' },
  { id: 3, name: 'AXS', type: 'Gold', logo: 'axs.svg' },
  { id: 4, name: 'UTEPSA', type: 'Venue', logo: 'utepsa.svg' },
  { id: 5, name: 'AceleraTec', type: 'Silver', logo: 'aceleratec.svg' },
  { id: 6, name: 'Growists', type: 'Silver', logo: 'growists.svg' },
  { id: 7, name: 'MamaYatech', type: 'Community', logo: 'mamayatech.svg' },
  { id: 8, name: 'Aihoo', type: 'Community', logo: 'aihoo.svg' },
  { id: 9, name: 'Codemify', type: 'Community', logo: 'codemify.svg' },
  { id: 10, name: 'Rizz App', type: 'Community', logo: 'rizzapp.svg' }
];

const PartnersSection = () => {
  return (
    <div className="container-custom mx-auto">
      <h2 className="section-title">Nuestros sponsors y colaboradores</h2>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4 text-center">Patrocinador principal</h3>
        <div className="flex justify-center">
          <div className="w-32 h-32 rounded-full bg-white shadow flex items-center justify-center">
            <span className="text-2xl font-bold text-primary">G</span>
          </div>
        </div>
      </div>
      
      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-6 text-center">Patrocinadores Gold & Silver</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
          {sponsors.filter(s => s.type === 'Gold' || s.type === 'Silver').map((sponsor) => (
            <div key={sponsor.id} className="flex items-center justify-center p-4">
              <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center shadow-sm">
                <div className="text-primary font-semibold">{sponsor.name.charAt(0)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mb-12">
        <h3 className="text-xl font-semibold mb-6 text-center">Venues & Colaboradores</h3>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 justify-items-center">
          {sponsors.filter(s => s.type === 'Venue' || s.type === 'Community').map((sponsor) => (
            <div key={sponsor.id} className="flex items-center justify-center p-2">
              <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
                <div className="text-sm text-gray-600 font-semibold">{sponsor.name.charAt(0)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-12 text-center">
        <Link 
          href="/patrocinadores" 
          className="inline-block bg-tertiary text-white rounded-md px-6 py-3 font-medium hover:bg-opacity-90 transition-colors"
        >
          Conviértete en sponsor
        </Link>
      </div>
    </div>
  );
};

export default PartnersSection; 