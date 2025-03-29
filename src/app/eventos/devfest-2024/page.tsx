"use client";

import Link from 'next/link';

export default function DevFestPage() {
  return (
    <div className="container-custom mx-auto py-12">
      <div className="flex flex-col items-center justify-center mb-12">
        <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold mb-4">
          EVENTO PASADO
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          DevFest 2024
        </h1>
        <div className="w-24 h-1 bg-primary rounded mb-8"></div>
        <p className="text-xl text-gray-600 text-center max-w-3xl mb-8">
          El evento más importante del año organizado por GDG Santa Cruz,
          donde se reunieron desarrolladores, diseñadores y entusiastas
          de la tecnología para aprender y compartir conocimientos.
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
              <div className="text-3xl font-bold text-primary mb-2">300+</div>
              <p className="text-gray-600">Asistentes</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="text-4xl mb-2">🎤</div>
              <div className="text-3xl font-bold text-primary mb-2">15</div>
              <p className="text-gray-600">Charlas</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="text-4xl mb-2">💻</div>
              <div className="text-3xl font-bold text-primary mb-2">5</div>
              <p className="text-gray-600">Workshops</p>
            </div>
          </div>
          <p className="text-lg text-gray-600 mb-6">
            El DevFest 2024 se llevó a cabo el 7 de diciembre en la Universidad Privada UNIFRANZ, Santa Cruz.
            Durante todo el día, los asistentes pudieron disfrutar de charlas técnicas sobre Flutter, Firebase,
            Android, Google Cloud, Machine Learning y otras tecnologías de Google.
          </p>
          <p className="text-lg text-gray-600">
            Además, contamos con actividades de networking, sorteos de premios y acceso a talleres prácticos
            donde los participantes pudieron mejorar sus habilidades técnicas con la guía de expertos.
          </p>
        </div>
      </section>

      {/* Speakers destacados */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Speakers destacados</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="card hover:shadow-lg transition-shadow duration-300 text-center">
            <div className="p-6">
              <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center">
                <span className="text-xl text-primary">L</span>
              </div>
              <h3 className="text-xl font-semibold mb-1">Luis Aviles</h3>
              <p className="text-gray-600 mb-4">Google Developer Expert</p>
              <p className="text-sm text-gray-500">Angular & TypeScript: Patrones avanzados para aplicaciones escalables</p>
            </div>
          </div>
          <div className="card hover:shadow-lg transition-shadow duration-300 text-center">
            <div className="p-6">
              <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center">
                <span className="text-xl text-primary">S</span>
              </div>
              <h3 className="text-xl font-semibold mb-1">Santiago</h3>
              <p className="text-gray-600 mb-4">Google Developer Expert ML</p>
              <p className="text-sm text-gray-500">El futuro de LLMs: Gemini y la nueva era de modelos fundacionales</p>
            </div>
          </div>
          <div className="card hover:shadow-lg transition-shadow duration-300 text-center">
            <div className="p-6">
              <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center">
                <span className="text-xl text-primary">F</span>
              </div>
              <h3 className="text-xl font-semibold mb-1">Fernando Silva</h3>
              <p className="text-gray-600 mb-4">Desarrollador Senior</p>
              <p className="text-sm text-gray-500">Flutter en producción: Lecciones aprendidas en apps de alta escala</p>
            </div>
          </div>
          <div className="card hover:shadow-lg transition-shadow duration-300 text-center">
            <div className="p-6">
              <div className="w-24 h-24 rounded-full bg-gray-200 mx-auto mb-4 flex items-center justify-center">
                <span className="text-xl text-primary">F</span>
              </div>
              <h3 className="text-xl font-semibold mb-1">Franklin Castillo</h3>
              <p className="text-gray-600 mb-4">Producción FRIDOSA</p>
              <p className="text-sm text-gray-500">Automatización industrial con Google Cloud IoT Core</p>
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
              <div className="w-full h-full bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                <span className="text-lg text-gray-500">Foto {num}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonios */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Lo que dijeron los asistentes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-primary">
            <p className="text-gray-600 italic mb-4">
              "El DevFest 2024 superó todas mis expectativas. La calidad de las charlas y la calidez 
              de la comunidad hicieron que este evento fuera una experiencia increíble."
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                <span className="text-sm text-primary">MR</span>
              </div>
              <div>
                <p className="font-semibold">María Rodríguez</p>
                <p className="text-sm text-gray-500">Desarrolladora Frontend</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-accent">
            <p className="text-gray-600 italic mb-4">
              "Como estudiante, pude conectar con profesionales de la industria y expandir mi red de contactos. 
              Las charlas técnicas me dieron claridad sobre qué tecnologías aprender."
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                <span className="text-sm text-primary">JL</span>
              </div>
              <div>
                <p className="font-semibold">Juan López</p>
                <p className="text-sm text-gray-500">Estudiante de Ingeniería</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Próximos eventos */}
      <section className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-6">¿Te perdiste el DevFest 2024?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
          No te preocupes, tenemos más eventos preparados para ti. 
          El próximo gran evento será Build with AI Bolivia 2025, ¡no te lo pierdas!
        </p>
        <Link 
          href="/buildwithai" 
          className="btn-primary px-8 py-3 text-lg inline-block"
        >
          Ver Build with AI 2025
        </Link>
      </section>
    </div>
  );
} 