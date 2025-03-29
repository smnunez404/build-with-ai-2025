"use client";

import Link from 'next/link';

// Datos de ejemplo para el próximo DevFest
const devfestEvent = {
  id: 1,
  title: 'DevFest 2024',
  date: '7 de Diciembre, 2024',
  time: '08:30 - 15:00',
  location: 'Universidad Privada UNIFRANZ, Santa Cruz',
  status: 'PRÓXIMAMENTE',
  badgeColor: 'bg-accent text-black',
  description: 'El evento de tecnología más esperado del año llega con una agenda repleta de innovaciones. Prepárate para una jornada llena de charlas, talleres y actividades donde podrás aprender, compartir y conectar con expertos.',
  ticketPrice: 'Bs 50.00',
  ticketFeatures: [
    'Actualización de conocimientos',
    'Networking',
    '2 Refrigerios',
    'Certificado de Asistencia',
    'Stickers',
    'Llavero'
  ]
};

// Datos de ejemplo para speakers
const speakers = [
  {
    id: 1,
    name: 'Luis Aviles',
    role: 'Google Developer Expert',
    image: 'speaker1.jpg'
  },
  {
    id: 2,
    name: 'Santiago',
    role: 'Google Developer Expert Machine Learning',
    image: 'speaker2.jpg'
  },
  {
    id: 3,
    name: 'Fernando Silva',
    role: 'Desarrollador Senior',
    image: 'speaker3.jpg'
  },
  {
    id: 4,
    name: 'Franklin Castillo',
    role: 'Producción FRIDOSA',
    image: 'speaker4.jpg'
  }
];

const DevFestSection = () => {
  return (
    <div className="container-custom mx-auto">
      <h2 className="section-title">Próximo DevFest 2024</h2>
      
      <div className="mb-12 bg-white rounded-xl overflow-hidden shadow-lg">
        <div className="p-6 md:p-8 flex flex-col md:flex-row">
          <div className="md:w-2/3 pr-0 md:pr-8 mb-6 md:mb-0">
            <span className={`event-badge ${devfestEvent.badgeColor} mb-4`}>
              {devfestEvent.status}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold mb-4">{devfestEvent.title}</h3>
            <div className="flex flex-col sm:flex-row mb-4 text-gray-600">
              <span className="mr-4 mb-2 sm:mb-0">📅 {devfestEvent.date}</span>
              <span className="mr-4 mb-2 sm:mb-0">⏰ {devfestEvent.time}</span>
              <span>📍 {devfestEvent.location}</span>
            </div>
            <p className="text-gray-600 mb-6">{devfestEvent.description}</p>
            <Link 
              href="/devfest"
              className="btn-primary inline-block px-6 py-3"
            >
              Más información
            </Link>
          </div>
          <div className="md:w-1/3 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
            <h4 className="text-xl font-semibold mb-4">Entrada estándar</h4>
            <div className="text-2xl font-bold text-primary mb-4">{devfestEvent.ticketPrice}</div>
            <ul className="space-y-2 mb-6">
              {devfestEvent.ticketFeatures.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-5 w-5 text-tertiary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Link 
              href="/tickets"
              className="bg-secondary text-white w-full block text-center py-2 rounded-md hover:bg-opacity-90 transition-colors"
            >
              Comprar ticket
            </Link>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-bold mb-8 text-center">Speakers confirmados</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
        {speakers.map((speaker) => (
          <div key={speaker.id} className="card hover:shadow-lg transition-shadow duration-300 text-center">
            <div className="p-6">
              <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center">
                <span className="text-xl text-primary">{speaker.name.charAt(0)}</span>
              </div>
              <h3 className="text-xl font-semibold mb-1">{speaker.name}</h3>
              <p className="text-gray-600 mb-4">{speaker.role}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <Link 
          href="/devfest" 
          className="inline-block border border-gray-300 rounded-md px-6 py-3 text-primary font-medium hover:bg-gray-50 transition-colors"
        >
          Ver agenda completa
        </Link>
      </div>
    </div>
  );
};

export default DevFestSection; 