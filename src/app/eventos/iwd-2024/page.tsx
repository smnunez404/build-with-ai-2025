"use client";

import Link from 'next/link';

export default function IWDPage() {
  return (
    <div className="container-custom mx-auto py-12">
      <div className="flex flex-col items-center justify-center mb-12">
        <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold mb-4">
          EVENTO PASADO
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          International Women Day 2024
        </h1>
        <div className="w-24 h-1 bg-primary rounded mb-8"></div>
        <p className="text-xl text-gray-600 text-center max-w-3xl mb-8">
          Evento especial de Women Techmakers Santa Cruz bajo el lema "Redefine Possible" 
          para celebrar los logros y contribuciones de las mujeres en tecnología.
        </p>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <a 
            href="#galeria" 
            className="btn-primary px-8 py-3 text-lg"
          >
            Ver galería
          </a>
          <Link 
            href="/eventos" 
            className="border border-gray-300 px-8 py-3 rounded-md text-lg hover:bg-gray-50 transition-colors text-center"
          >
            Ver otros eventos
          </Link>
        </div>
      </div>

      {/* Resumen del evento */}
      <section className="mb-16">
        <div className="bg-gray-50 p-8 rounded-xl">
          <h2 className="text-3xl font-bold mb-6">Resumen del evento</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="text-4xl mb-2">👥</div>
              <div className="text-3xl font-bold text-primary mb-2">120+</div>
              <p className="text-gray-600">Asistentes</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="text-4xl mb-2">🎤</div>
              <div className="text-3xl font-bold text-primary mb-2">6</div>
              <p className="text-gray-600">Ponentes</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="text-4xl mb-2">💼</div>
              <div className="text-3xl font-bold text-primary mb-2">3</div>
              <p className="text-gray-600">Talleres</p>
            </div>
          </div>
          <p className="text-lg text-gray-600 mb-6">
            El International Women Day 2024 se llevó a cabo el 8 de marzo en la Universidad UTEPSA, Santa Cruz.
            Este evento, organizado por Women Techmakers Santa Cruz en colaboración con GDG Santa Cruz, 
            fue un espacio para inspirar, conectar y empoderar a mujeres en el ámbito tecnológico.
          </p>
          <p className="text-lg text-gray-600">
            Durante el evento, contamos con ponentes destacadas que compartieron sus experiencias profesionales,
            talleres prácticos en diversas tecnologías, y actividades de networking para fomentar la colaboración
            entre profesionales y estudiantes.
          </p>
        </div>
      </section>

      {/* Ponentes destacados */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Ponentes destacadas</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="card hover:shadow-lg transition-shadow duration-300 text-center">
            <div className="p-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 mx-auto mb-4 flex items-center justify-center">
                <span className="text-xl text-primary">CS</span>
              </div>
              <h3 className="text-xl font-semibold mb-1">Carolina Silva</h3>
              <p className="text-gray-600 mb-4">CTO en TechnoImpact</p>
              <p className="text-sm text-gray-500">"Liderazgo femenino en empresas tecnológicas"</p>
            </div>
          </div>
          <div className="card hover:shadow-lg transition-shadow duration-300 text-center">
            <div className="p-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 mx-auto mb-4 flex items-center justify-center">
                <span className="text-xl text-primary">MF</span>
              </div>
              <h3 className="text-xl font-semibold mb-1">Mariana Flores</h3>
              <p className="text-gray-600 mb-4">Google Developer Expert ML</p>
              <p className="text-sm text-gray-500">"IA para todos: Eliminando barreras"</p>
            </div>
          </div>
          <div className="card hover:shadow-lg transition-shadow duration-300 text-center">
            <div className="p-6">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 mx-auto mb-4 flex items-center justify-center">
                <span className="text-xl text-primary">AR</span>
              </div>
              <h3 className="text-xl font-semibold mb-1">Ana Robles</h3>
              <p className="text-gray-600 mb-4">Fundadora de CodeGirls</p>
              <p className="text-sm text-gray-500">"Del aula al startup: Mujeres en la industria tech"</p>
            </div>
          </div>
        </div>
      </section>

      {/* Talleres */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Talleres realizados</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="card p-6">
            <h3 className="text-xl font-bold mb-3">Desarrollo Web para Principiantes</h3>
            <p className="text-gray-600 mb-4">
              Taller práctico sobre fundamentos de HTML, CSS y JavaScript dirigido
              a mujeres que están comenzando en el desarrollo web.
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span className="font-medium">Facilitadora:</span>
              <span className="ml-2">Patricia Gómez</span>
            </div>
          </div>
          <div className="card p-6">
            <h3 className="text-xl font-bold mb-3">Introducción a Cloud Computing</h3>
            <p className="text-gray-600 mb-4">
              Taller hands-on sobre Google Cloud Platform y sus servicios esenciales
              para desarrolladoras que quieren incursionar en la nube.
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span className="font-medium">Facilitadora:</span>
              <span className="ml-2">Laura Martínez</span>
            </div>
          </div>
          <div className="card p-6">
            <h3 className="text-xl font-bold mb-3">Data Science con Python</h3>
            <p className="text-gray-600 mb-4">
              Taller introductorio a la ciencia de datos utilizando Python, pandas y
              scikit-learn para análisis y visualización de datos.
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span className="font-medium">Facilitadora:</span>
              <span className="ml-2">Sofía Vargas</span>
            </div>
          </div>
        </div>
      </section>

      {/* Galería de fotos */}
      <section id="galeria" className="mb-16 scroll-mt-16">
        <h2 className="text-3xl font-bold mb-6">Galería de fotos</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
            <div key={num} className="h-48 md:h-64 bg-gray-200 rounded-lg overflow-hidden">
              {/* En un proyecto real, aquí iría una imagen real */}
              <div className="w-full h-full bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                <span className="text-lg text-gray-500">Foto IWD {num}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonios */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Lo que dijeron las participantes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-primary">
            <p className="text-gray-600 italic mb-4">
              "Este evento ha sido una gran fuente de inspiración para mí. Ver a tantas mujeres talentosas
              compartiendo sus experiencias me ha dado la confianza para seguir en el campo tecnológico."
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                <span className="text-sm text-primary">VT</span>
              </div>
              <div>
                <p className="font-semibold">Valentina Torres</p>
                <p className="text-sm text-gray-500">Estudiante de Ingeniería</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-accent">
            <p className="text-gray-600 italic mb-4">
              "Los talleres prácticos fueron excelentes. Aprendí nuevas habilidades y, lo más importante,
              conecté con una comunidad de mujeres que apoyan mi crecimiento profesional."
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                <span className="text-sm text-primary">CM</span>
              </div>
              <div>
                <p className="font-semibold">Claudia Mendoza</p>
                <p className="text-sm text-gray-500">Desarrolladora Frontend</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Próximos eventos */}
      <section className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-6">¿Te interesa este tipo de eventos?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
          Sigue conectada con nuestra comunidad para conocer los próximos eventos de Women Techmakers y GDG Santa Cruz.
          ¡No te pierdas nuestro próximo evento Build with AI Bolivia 2025!
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Link 
            href="/buildwithai" 
            className="btn-primary px-8 py-3 text-lg inline-block"
          >
            Ver Build with AI 2025
          </Link>
          <a 
            href="https://womentechmakers.google.com/" 
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-300 px-8 py-3 rounded-md text-lg hover:bg-gray-50 transition-colors text-center"
          >
            Conocer Women Techmakers
          </a>
        </div>
      </section>
    </div>
  );
} 