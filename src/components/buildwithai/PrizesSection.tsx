"use client";

export default function PrizesSection() {
  return (
    <div>
      <section className="mb-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center">Premios y <span className="text-primary">Reconocimientos</span></h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="transform transition-all duration-300 hover:-translate-y-2">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border-t-8 border-yellow-500 relative pb-6">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-yellow-500 to-amber-400 rounded-full flex items-center justify-center shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="6"></circle>
                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
                  </svg>
                </div>
                <div className="pt-14 px-6">
                  <h3 className="text-2xl font-bold text-center mb-2">1er Lugar</h3>
                  <div className="w-16 h-1 bg-yellow-500 mx-auto mb-6"></div>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3 text-yellow-500">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium mb-1">$5,000 USD</p>
                        <p className="text-sm text-gray-500">En efectivo para el equipo</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3 text-yellow-500">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium mb-1">Incubación de 6 meses</p>
                        <p className="text-sm text-gray-500">Con mentores de Google y socios</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3 text-yellow-500">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium mb-1">$10,000 USD en créditos</p>
                        <p className="text-sm text-gray-500">Google Cloud para tu proyecto</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="transform transition-all duration-300 hover:-translate-y-2 mt-8">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border-t-8 border-primary relative pb-6">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-primary to-blue-400 rounded-full flex items-center justify-center shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="6"></circle>
                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
                  </svg>
                </div>
                <div className="pt-14 px-6">
                  <h3 className="text-2xl font-bold text-center mb-2">2do Lugar</h3>
                  <div className="w-16 h-1 bg-primary mx-auto mb-6"></div>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 text-primary">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium mb-1">$3,000 USD</p>
                        <p className="text-sm text-gray-500">En efectivo para el equipo</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 text-primary">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium mb-1">Cursos Premium</p>
                        <p className="text-sm text-gray-500">Acceso a Platzi/Coursera</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 text-primary">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium mb-1">$300 USD en créditos</p>
                        <p className="text-sm text-gray-500">Google Cloud para tu proyecto</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="transform transition-all duration-300 hover:-translate-y-2 mt-8">
              <div className="bg-white rounded-xl overflow-hidden shadow-lg border-t-8 border-tertiary relative pb-6">
                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-tertiary to-teal-400 rounded-full flex items-center justify-center shadow-md">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-9 w-9 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="6"></circle>
                    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"></path>
                  </svg>
                </div>
                <div className="pt-14 px-6">
                  <h3 className="text-2xl font-bold text-center mb-2">3er Lugar</h3>
                  <div className="w-16 h-1 bg-tertiary mx-auto mb-6"></div>
                  
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-tertiary/10 rounded-full flex items-center justify-center mr-3 text-tertiary">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium mb-1">$1,500 USD</p>
                        <p className="text-sm text-gray-500">En efectivo para el equipo</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-8 h-8 bg-tertiary/10 rounded-full flex items-center justify-center mr-3 text-tertiary">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="font-medium mb-1">Kit de Desarrollo</p>
                        <p className="text-sm text-gray-500">Gadgets y herramientas tecnológicas</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <h3 className="text-2xl font-bold mb-6 mt-16">Menciones Especiales</h3>
          <div className="space-y-8">
            <div className="bg-white shadow-md rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="bg-gradient-to-r from-secondary to-purple-500 h-3"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mr-4 text-secondary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="8" r="7"></circle>
                      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold">Mención "Impacto Social"</h4>
                </div>
                <p className="text-gray-700 mb-3">Mejor proyecto con beneficio comunitario:</p>
                <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                  <div className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center mr-3 text-secondary">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">$1,000 USD + Incubación por 3 meses</p>
                    <p className="text-sm text-gray-500">En una aceleradora local de startups</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white shadow-md rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="bg-gradient-to-r from-primary to-blue-500 h-3"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 text-primary">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="8" r="7"></circle>
                      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold">Mención "Innovación Técnica"</h4>
                </div>
                <p className="text-gray-700 mb-3">Uso más creativo de Gemini/Vertex AI:</p>
                <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                  <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 text-primary">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">Hardware tecnológico de última generación</p>
                    <p className="text-sm text-gray-500">Drone programable, sensores IoT o similar</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white shadow-md rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg">
              <div className="bg-gradient-to-r from-yellow-400 to-orange-400 h-3"></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-yellow-100 flex items-center justify-center mr-4 text-yellow-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="8" r="7"></circle>
                      <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold">Mención "Innovación No-Code/Low-Code"</h4>
                </div>
                <p className="text-gray-700 mb-3">Soluciones prácticas sin programación tradicional:</p>
                <div className="flex items-center bg-gray-50 p-3 rounded-lg">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3 text-yellow-600">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold">$500 USD + Mentoría de 1 mes</p>
                    <p className="text-sm text-gray-500">Cursos de introducción a IA/desarrollo</p>
                  </div>
                </div>
                <div className="mt-4 bg-yellow-50 p-3 rounded-lg text-sm">
                  <p className="text-yellow-700 font-medium">
                    <span className="font-bold">Nota:</span> Perfecta para diseñadores, emprendedores y principiantes. Premia el potencial de las ideas, no solo la complejidad técnica.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 