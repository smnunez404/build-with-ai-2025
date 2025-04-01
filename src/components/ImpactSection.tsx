"use client";

import React from 'react';

const stats = [
  {
    id: 1,
    value: '25+',
    label: 'Eventos realizados',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="6"></circle>
        <circle cx="12" cy="12" r="2"></circle>
      </svg>
    )
  },
  {
    id: 2,
    value: '50+',
    label: 'Talleres y codelabs',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
        <line x1="8" y1="21" x2="16" y2="21"></line>
        <line x1="12" y1="17" x2="12" y2="21"></line>
      </svg>
    )
  },
  {
    id: 3,
    value: '1,250+',
    label: 'Miembros de la comunidad',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    )
  },
  {
    id: 4,
    value: '10+',
    label: 'Años de experiencia',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="6"></circle>
        <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
      </svg>
    )
  },
  {
    id: 5,
    value: '15+',
    label: 'Speakers internacionales',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <path d="M2 12h20"></path>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>
    )
  },
  {
    id: 6,
    value: '5+',
    label: 'DevFests organizados',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 2L12 12 2 22"></path>
        <path d="M2 2L22 22"></path>
        <path d="M12 2v20"></path>
      </svg>
    )
  }
];

const ImpactSection = () => {
  return (
    <div className="container-custom mx-auto">
      <h2 className="section-title">Nuestro impacto en la comunidad</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stats.map((stat) => (
          <div key={stat.id} className="bg-white rounded-xl p-6 shadow-sm text-center hover:shadow-lg transition-shadow">
            <div className="mb-2 flex justify-center">{stat.icon}</div>
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImpactSection; 