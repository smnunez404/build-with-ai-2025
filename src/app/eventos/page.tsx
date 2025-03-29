"use client";

import Link from 'next/link';
import { useEffect, useState } from 'react';

// Tipos para los eventos
type EventStatus = 'past' | 'upcoming' | 'current';

interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  status: EventStatus;
  slug: string;
}

export default function EventosPage() {
  const [activeFilter, setActiveFilter] = useState<EventStatus | 'all'>('all');
  const [filteredEvents, setFilteredEvents] = useState<Event[]>([]);

  // Simulación de datos de eventos
  const events: Event[] = [
    {
      id: '1',
      title: 'Build with AI Bolivia 2025',
      date: '27-29 Junio, 2025',
      location: 'Universidad Católica Boliviana, Santa Cruz',
      description: 'Hackathon de tres días enfocado en construir soluciones con Inteligencia Artificial generativa.',
      image: '/images/eventos/buildwithai.jpg',
      status: 'upcoming',
      slug: 'buildwithai'
    },
    {
      id: '2',
      title: 'Google I/O Extended 2025',
      date: '15 Mayo, 2025',
      location: 'Universidad UTEPSA, Santa Cruz',
      description: 'Extensión local del evento global Google I/O, donde traemos todas las novedades y anuncios de Google directamente a Santa Cruz.',
      image: '/images/eventos/io-extended.jpg',
      status: 'upcoming',
      slug: 'google-io-2025'
    },
    {
      id: '3',
      title: 'DevFest 2024',
      date: '7 Diciembre, 2024',
      location: 'Universidad Privada UNIFRANZ, Santa Cruz',
      description: 'El evento más importante del año organizado por GDG Santa Cruz, reuniendo desarrolladores y entusiastas de tecnología.',
      image: '/images/eventos/devfest.jpg',
      status: 'past',
      slug: 'devfest-2024'
    },
    {
      id: '4',
      title: 'Google I/O Extended 2024',
      date: '14 Mayo, 2024',
      location: 'UTEPSA, Santa Cruz',
      description: 'Transmisión local del evento Google I/O con charlas locales sobre las nuevas tecnologías presentadas.',
      image: '/images/eventos/io-extended.jpg',
      status: 'past',
      slug: 'io-extended-2024'
    },
    {
      id: '5',
      title: 'International Women Day 2024',
      date: '8 Marzo, 2024',
      location: 'Universidad UTEPSA, Santa Cruz',
      description: 'Celebración del día internacional de la mujer con enfoque en mujeres en tecnología.',
      image: '/images/eventos/iwd.jpg',
      status: 'past',
      slug: 'iwd-2024'
    }
  ];

  // Filtrar eventos cuando cambie el filtro activo
  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredEvents(events);
    } else {
      setFilteredEvents(events.filter(event => event.status === activeFilter));
    }
  }, [activeFilter]);

  // Función auxiliar para obtener el color según el estado del evento
  const getStatusColor = (status: EventStatus) => {
    switch (status) {
      case 'upcoming':
        return 'bg-blue-100 text-blue-800';
      case 'current':
        return 'bg-green-100 text-green-800';
      case 'past':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  // Función auxiliar para obtener el texto según el estado del evento
  const getStatusText = (status: EventStatus) => {
    switch (status) {
      case 'upcoming':
        return 'Próximamente';
      case 'current':
        return 'En curso';
      case 'past':
        return 'Finalizado';
      default:
        return 'Desconocido';
    }
  };

  return (
    <div className="container-custom mx-auto py-12">
      <div className="text-center mb-12">
        <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold mb-4">
          EVENTOS GDG SANTA CRUZ
        </span>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Nuestros Eventos
        </h1>
        <div className="w-24 h-1 bg-primary rounded mx-auto mb-8"></div>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Descubre todos los eventos organizados por GDG Santa Cruz, desde hackathons 
          y conferencias hasta talleres prácticos y sesiones de networking.
        </p>
      </div>

      {/* Filtros */}
      <div className="flex justify-center mb-10">
        <div className="inline-flex flex-wrap gap-3 bg-gray-100 p-2 rounded-xl">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeFilter === 'all' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
            }`}
          >
            Todos
          </button>
          <button
            onClick={() => setActiveFilter('upcoming')}
            className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeFilter === 'upcoming' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
            }`}
          >
            Próximos
          </button>
          <button
            onClick={() => setActiveFilter('current')}
            className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeFilter === 'current' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
            }`}
          >
            En curso
          </button>
          <button
            onClick={() => setActiveFilter('past')}
            className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeFilter === 'past' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
            }`}
          >
            Pasados
          </button>
        </div>
      </div>

      {/* Lista de eventos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {filteredEvents.map(event => (
          <div key={event.id} className="card hover:shadow-lg transition-shadow duration-300 overflow-hidden">
            <div className="h-48 bg-gradient-to-r from-blue-100 to-green-100 relative">
              <div className="absolute top-4 left-4">
                <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(event.status)}`}>
                  {getStatusText(event.status)}
                </span>
              </div>
              {/* Esta sería la imagen en un caso real */}
              <div className="w-full h-full flex items-center justify-center">
                <span className="text-lg text-gray-400">{event.title}</span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{event.title}</h3>
              <div className="flex items-center mb-3 text-gray-500">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                </svg>
                <span className="text-sm">{event.date}</span>
              </div>
              <div className="flex items-center mb-4 text-gray-500">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                </svg>
                <span className="text-sm">{event.location}</span>
              </div>
              <p className="text-gray-600 mb-5 line-clamp-3">
                {event.description}
              </p>
              <Link 
                href={`/eventos/${event.slug}`} 
                className="text-primary font-medium hover:underline inline-flex items-center"
              >
                Ver detalles
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Sección de suscripción */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">
          ¿No quieres perderte ningún evento?
        </h2>
        <p className="text-lg text-gray-600 mb-6 max-w-3xl mx-auto">
          Suscríbete a nuestro boletín y recibe notificaciones sobre nuestros próximos eventos, 
          talleres y oportunidades de networking.
        </p>
        <div className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <input 
            type="email" 
            placeholder="Tu correo electrónico" 
            className="flex-grow p-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary"
          />
          <button className="btn-primary px-6 py-3">
            Suscribirse
          </button>
        </div>
      </div>
    </div>
  );
} 