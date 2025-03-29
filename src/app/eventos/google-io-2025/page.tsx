"use client";

import Link from 'next/link';

export default function GoogleIOPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-primary text-white py-20">
        <div className="container-custom">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Google I/O Extended 2025
          </h1>
          <div className="flex flex-wrap gap-4 text-lg mb-8">
            <span className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              15 de Mayo, 2025
            </span>
            <span className="flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Universidad UTEPSA, Santa Cruz
            </span>
          </div>
          <div className="flex gap-4">
            <Link href="#registro" className="btn-primary">
              Registrarse
            </Link>
            <Link href="#agenda" className="bg-white text-primary px-6 py-2 rounded-md hover:bg-opacity-90">
              Ver Agenda
            </Link>
          </div>
        </div>
      </div>

      {/* Descripción del Evento */}
      <div className="py-16">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">¿Qué es Google I/O Extended?</h2>
            <p className="text-gray-600 mb-6">
              Google I/O Extended 2025 es la extensión local del evento global Google I/O, 
              donde traemos todas las novedades y anuncios de Google directamente a Santa Cruz. 
              Este año, nos enfocamos en las últimas innovaciones en IA, Cloud, Android, Flutter, 
              y otras tecnologías de Google.
            </p>

            <h3 className="text-2xl font-bold mb-4">Lo que aprenderás:</h3>
            <ul className="list-disc list-inside text-gray-600 mb-8">
              <li>Últimas novedades de Google I/O 2025</li>
              <li>Novedades en Android y Flutter</li>
              <li>Avances en IA y Machine Learning</li>
              <li>Nuevas herramientas de Google Cloud</li>
              <li>Mejores prácticas de desarrollo</li>
            </ul>

            <h3 className="text-2xl font-bold mb-4" id="agenda">Agenda del Evento</h3>
            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-bold">9:00 - 10:00</h4>
                <p className="text-gray-600">Registro y Networking</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-bold">10:00 - 11:30</h4>
                <p className="text-gray-600">Keynote: Resumen de Google I/O 2025</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-bold">11:30 - 12:30</h4>
                <p className="text-gray-600">Sesiones Técnicas Paralelas</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-bold">14:00 - 17:00</h4>
                <p className="text-gray-600">Workshops y Codelabs</p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <h4 className="font-bold">17:00 - 18:00</h4>
                <p className="text-gray-600">Networking y Cierre</p>
              </div>
            </div>

            <div id="registro" className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Registro</h3>
              <p className="text-gray-600 mb-4">
                El evento es gratuito pero los cupos son limitados. Regístrate ahora para asegurar tu lugar.
              </p>
              <Link href="https://gdg.community.dev/gdg-santa-cruz-bolivia/" 
                    className="btn-primary inline-block" 
                    target="_blank">
                Registrarse en GDG Community
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 