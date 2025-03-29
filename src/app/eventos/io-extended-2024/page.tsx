"use client";

import Link from 'next/link';

export default function IOExtendedPage() {
  return (
    <div className="container-custom mx-auto py-12">
      <div className="flex flex-col items-center justify-center mb-12">
        <span className="inline-block px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold mb-4">
          EVENTO PASADO
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-6">
          Google I/O Extended 2024
        </h1>
        <div className="w-24 h-1 bg-primary rounded mb-8"></div>
        <p className="text-xl text-gray-600 text-center max-w-3xl mb-8">
          Trasmisión en vivo del Google I/O con charlas locales sobre las nuevas tecnologías 
          y anuncios presentados en el evento global de Google para desarrolladores.
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
              <div className="text-3xl font-bold text-primary mb-2">150+</div>
              <p className="text-gray-600">Asistentes</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="text-4xl mb-2">🎤</div>
              <div className="text-3xl font-bold text-primary mb-2">8</div>
              <p className="text-gray-600">Charlas</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm text-center">
              <div className="text-4xl mb-2">💻</div>
              <div className="text-3xl font-bold text-primary mb-2">2</div>
              <p className="text-gray-600">Workshops</p>
            </div>
          </div>
          <p className="text-lg text-gray-600 mb-6">
            El Google I/O Extended 2024 se llevó a cabo el 14 de mayo en la Universidad UTEPSA, Santa Cruz.
            Durante este evento, transmitimos en vivo el Google I/O 2024 y complementamos con charlas locales
            sobre las nuevas tecnologías y anuncios presentados.
          </p>
          <p className="text-lg text-gray-600">
            Entre los temas destacados estuvieron las actualizaciones de Gemini, Android 15, nuevas funcionalidades
            de Firebase, Flutter y otras tecnologías de Google. Los asistentes pudieron participar en sesiones
            de preguntas y respuestas en vivo con expertos locales.
          </p>
        </div>
      </section>

      {/* Highlights del evento */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-6">Lo más destacado</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="card p-6">
            <h3 className="text-xl font-bold mb-4">Novedades de Google I/O 2024</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Lanzamiento de Gemini 2.0 con capacidades multimodales mejoradas</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Android 15: Nuevas APIs y mejoras en seguridad y privacidad</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Firebase: Actualizaciones y nuevas integraciones con Google Cloud</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>Flutter 3.16: Nuevos widgets y mejoras de rendimiento</span>
              </li>
            </ul>
          </div>
          <div className="card p-6">
            <h3 className="text-xl font-bold mb-4">Charlas locales destacadas</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>"Aplicando Gemini a proyectos locales en Bolivia" por María Torres</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>"Oportunidades de Firebase para startups" por Carlos Méndez</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>"Flutter en producción: Casos de éxito locales" por Fernando Rojas</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                </svg>
                <span>"Android en 2024: Lo que debes saber" por Juan Pérez</span>
              </li>
            </ul>
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
              <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-green-500/10 flex items-center justify-center">
                <span className="text-lg text-gray-500">Foto I/O {num}</span>
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
              "Increíble poder ver el Google I/O junto a otros desarrolladores locales. Las charlas complementarias
              ayudaron a contextualizar las novedades para nuestro mercado boliviano."
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                <span className="text-sm text-primary">DP</span>
              </div>
              <div>
                <p className="font-semibold">Daniel Palacios</p>
                <p className="text-sm text-gray-500">Desarrollador Android</p>
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-sm border-l-4 border-accent">
            <p className="text-gray-600 italic mb-4">
              "Mi primera vez asistiendo a un evento de Google y quedé fascinada con las posibilidades 
              de Gemini para mi proyecto. El networking fue de gran valor."
            </p>
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center mr-3">
                <span className="text-sm text-primary">LG</span>
              </div>
              <div>
                <p className="font-semibold">Laura Guzmán</p>
                <p className="text-sm text-gray-500">Emprendedora Tech</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Próximos eventos */}
      <section className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8 text-center">
        <h2 className="text-3xl font-bold mb-6">¿Te interesa este tipo de eventos?</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-3xl mx-auto">
          No te pierdas nuestro próximo gran evento: Build with AI Bolivia 2025, 
          donde podrás aprender y aplicar las últimas novedades en Inteligencia Artificial de Google.
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