"use client";

import Link from 'next/link';
import PastEventCard from './PastEventCard';

// Datos de eventos pasados
const pastEvents = [
  {
    id: 1,
    title: 'DevFest 2024',
    date: '7 de Diciembre, 2024',
    location: 'Universidad Privada UNIFRANZ, Santa Cruz',
    description: 'El evento tecnológico más importante del año, con charlas, talleres y actividades donde los asistentes pudieron aprender, compartir y conectar con expertos del ecosistema Google.',
    slug: 'devfest-2024',
    image: 'devfest-2024.jpg'
  },
  {
    id: 2,
    title: 'Google I/O Extended 2024',
    date: '14 de Mayo, 2024',
    location: 'UTEPSA, Santa Cruz',
    description: 'Trasmisión en vivo del Google I/O con charlas locales sobre las nuevas tecnologías y anuncios presentados en el evento global de Google para desarrolladores.',
    slug: 'google-io-extended-2024',
    image: 'io-extended-2024.jpg'
  },
  {
    id: 3,
    title: 'International Women Day 2024',
    date: '8 de Marzo, 2024',
    location: 'Universidad UTEPSA, Santa Cruz',
    description: 'Evento especial de Women Techmakers Santa Cruz bajo el lema "Redefine Possible" para celebrar los logros y contribuciones de las mujeres en tecnología.',
    slug: 'iwd-2024',
    image: 'iwd-2024.jpg'
  }
];

const PastEventsSection = () => {
  return (
    <div className="container-custom mx-auto">
      <h2 className="section-title">Eventos pasados</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {pastEvents.map((event) => (
          <PastEventCard 
            key={event.id}
            title={event.title}
            date={event.date}
            location={event.location}
            description={event.description}
            image={event.image}
            slug={event.slug}
          />
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <Link 
          href="/eventos" 
          className="inline-block border border-gray-300 rounded-md px-6 py-3 text-primary font-medium hover:bg-gray-50 transition-colors"
        >
          Ver todos los eventos pasados
        </Link>
      </div>
    </div>
  );
};

export default PastEventsSection; 