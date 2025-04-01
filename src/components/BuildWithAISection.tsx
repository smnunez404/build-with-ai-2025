"use client";

import Link from 'next/link';

// Datos del evento Build with AI 2025
const buildWithAIEvent = {
  id: 1,
  title: 'Build with AI Bolivia 2025',
  date: '27 al 29 de Junio, 2025',
  time: '48 horas continuas',
  location: 'Universidad Católica Boliviana, Santa Cruz',
  status: 'INSCRIPCIONES ABIERTAS',
  badgeColor: 'bg-accent text-black',
  description: 'Hackathon de Inteligencia Artificial organizada por Google Developer Groups Bolivia. Aprende, desarrolla y compite creando soluciones innovadoras con Gemini, AI Studio y Vertex AI durante un fin de semana intensivo.',
  registrationCloses: 'El registro cierra el 25 de abril o hasta agotar los cupos.',
  ticketPrice: 'Gratis',
  ticketFeatures: [
    'Talleres técnicos',
    'Mentorías personalizadas',
    'Alimentación durante el evento',
    'Certificado de Participación',
    'Posibilidad de ganar premios en efectivo',
    'Networking con expertos'
  ],
  prizes: [
    '1er lugar: $5,000 USD',
    '2do lugar: $3,000 USD',
    '3er lugar: $1,500 USD'
  ]
};

// Datos para los organizadores
const organizers = [
  {
    id: 1,
    name: 'GDG Santa Cruz',
    role: 'Organizador principal',
    image: 'gdgscz.jpg'
  },
  {
    id: 2,
    name: 'GDG La Paz',
    role: 'Co-organizador',
    image: 'gdglpz.jpg'
  },
  {
    id: 3,
    name: 'GDG Cochabamba',
    role: 'Co-organizador',
    image: 'gdgcbba.jpg'
  },
  {
    id: 4,
    name: 'GDG Sucre',
    role: 'Co-organizador',
    image: 'gdgsucre.jpg'
  }
];

const BuildWithAISection = () => {
  return (
    <div className="container-custom mx-auto">
      <h2 className="section-title">Build with AI Bolivia 2025</h2>
      
      <div className="mb-8 text-center">
        <span className="inline-block px-4 py-2 bg-primary text-white rounded-full text-sm font-semibold">
          Hackathon 48 horas &bull; UCB Santa Cruz &bull; 27-29 Junio
        </span>
      </div>
      
      <div className="mb-12 bg-white rounded-xl overflow-hidden shadow-lg">
        <div className="p-6 md:p-8 flex flex-col md:flex-row">
          <div className="md:w-2/3 pr-0 md:pr-8 mb-6 md:mb-0">
            <span className={`event-badge ${buildWithAIEvent.badgeColor} mb-4`}>
              {buildWithAIEvent.status}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">{buildWithAIEvent.title}</h3>
            <div className="flex flex-col sm:flex-row mb-4 text-gray-600">
              <span className="mr-4 mb-2 sm:mb-0 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
                {buildWithAIEvent.date}
              </span>
              <span className="mr-4 mb-2 sm:mb-0 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
                {buildWithAIEvent.time}
              </span>
              <span className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                {buildWithAIEvent.location}
              </span>
            </div>
            <p className="text-gray-600 mb-4">{buildWithAIEvent.description}</p>
            <p className="text-red-500 font-medium mb-6">{buildWithAIEvent.registrationCloses}</p>
            
            <Link 
              href="/buildwithai"
              className="btn-primary inline-block px-6 py-3"
            >
              Más información
            </Link>
            <Link 
              href="/registro"
              className="ml-4 inline-block border border-gray-300 px-6 py-3 rounded-md hover:bg-gray-50 transition-colors"
            >
              Inscribirme
            </Link>
          </div>
          <div className="md:w-1/3 bg-gradient-to-br from-blue-50 to-green-50 rounded-xl p-6">
            <h4 className="text-xl font-semibold mb-4">Participación</h4>
            <div className="text-2xl font-bold text-tertiary mb-4">{buildWithAIEvent.ticketPrice}</div>
            <ul className="space-y-2 mb-6">
              {buildWithAIEvent.ticketFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-5 w-5 text-tertiary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mb-4">
              <h5 className="font-semibold mb-2">Premios:</h5>
              <ul className="space-y-1">
                {buildWithAIEvent.prizes.map((prize, index) => (
                  <li key={index} className="text-sm flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="8" r="6"></circle>
                      <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
                    </svg>
                    {prize}
                  </li>
                ))}
              </ul>
            </div>
            <Link 
              href="/buildwithai#premios"
              className="bg-primary text-white w-full block text-center py-2 rounded-md hover:bg-opacity-90 transition-colors"
            >
              Ver todos los premios
            </Link>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-bold mb-8 text-center">Organizado por GDG Bolivia</h3>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {organizers.map((organizer) => (
          <div key={organizer.id} className="card hover:shadow-lg transition-shadow duration-300 text-center">
            <div className="p-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-blue-100 to-green-100 mx-auto mb-4 flex items-center justify-center">
                <span className="text-xl text-primary font-bold">{organizer.name.split(' ')[1][0]}</span>
              </div>
              <h3 className="text-xl font-semibold mb-1">{organizer.name}</h3>
              <p className="text-gray-600 mb-4">{organizer.role}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <Link 
          href="/buildwithai" 
          className="inline-block border border-gray-300 rounded-md px-6 py-3 text-primary font-medium hover:bg-gray-50 transition-colors"
        >
          Conocer más detalles
        </Link>
      </div>
    </div>
  );
};

export default BuildWithAISection; 