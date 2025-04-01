"use client";

export default function WorkshopsSection() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Talleres <span className="text-primary">Previos</span></h2>
      <p className="text-lg text-center text-gray-600 mb-10 max-w-3xl mx-auto">
        Prepárate para la hackathon con estos talleres gratuitos donde aprenderás lo básico para trabajar con herramientas de IA de Google.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
          <div className="h-3 bg-gradient-to-r from-primary to-blue-400"></div>
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                  <line x1="8" y1="21" x2="16" y2="21"></line>
                  <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">Intro a Gemini y AI Studio</h3>
                <p className="text-gray-500 text-sm">8 de junio, 2025 • 14:00 - 17:00</p>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">
                Aprende lo básico para trabajar con la API de Gemini y comenzar a construir tus primeras aplicaciones con IA generativa.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>Configuración de credenciales y entorno</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>Primeros pasos con Gemini API en JavaScript</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>Creación de un chat básico con IA</span>
                </li>
              </ul>
              <div className="flex items-center mt-6">
                <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Instructor" className="w-10 h-10 rounded-full mr-3" />
                <div>
                  <p className="font-medium">Juan Carlos Pérez</p>
                  <p className="text-sm text-gray-500">Google Developer Expert</p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-6 py-3 bg-gray-50 flex justify-between items-center">
            <span className="text-sm text-gray-500">Modalidad: Online</span>
            <a 
              href="#"
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Inscribirme →
            </a>
          </div>
        </div>
        
        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
          <div className="h-3 bg-gradient-to-r from-secondary to-purple-400"></div>
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 12m-10 0a10 10 0 1 0 20 0a10 10 0 1 0 -20 0"></path>
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2 -3 3 -3 3"></path>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">Introducción a Vertex AI</h3>
                <p className="text-gray-500 text-sm">15 de junio, 2025 • 14:00 - 17:00</p>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">
                Explora la plataforma Vertex AI de Google Cloud y aprende a utilizar sus modelos para crear aplicaciones de IA avanzadas.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>Acceso y configuración de Vertex AI</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>Implementación de modelos preentrenados</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>Fine-tuning básico para casos de uso específicos</span>
                </li>
              </ul>
              <div className="flex items-center mt-6">
                <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Instructor" className="w-10 h-10 rounded-full mr-3" />
                <div>
                  <p className="font-medium">María Rodríguez</p>
                  <p className="text-sm text-gray-500">ML Engineer @ Google</p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-6 py-3 bg-gray-50 flex justify-between items-center">
            <span className="text-sm text-gray-500">Modalidad: Presencial + Online</span>
            <a 
              href="#"
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Inscribirme →
            </a>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
          <div className="h-3 bg-gradient-to-r from-accent to-teal-400"></div>
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">Prompt Engineering Avanzado</h3>
                <p className="text-gray-500 text-sm">22 de junio, 2025 • 14:00 - 17:00</p>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">
                Domina el arte de crear prompts efectivos para obtener los mejores resultados de los modelos de IA generativa.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>Técnicas de prompting efectivas</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>Few-shot learning y ejemplos en contexto</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>Resolución de casos prácticos</span>
                </li>
              </ul>
              <div className="flex items-center mt-6">
                <img src="https://randomuser.me/api/portraits/men/67.jpg" alt="Instructor" className="w-10 h-10 rounded-full mr-3" />
                <div>
                  <p className="font-medium">Carlos Méndez</p>
                  <p className="text-sm text-gray-500">Prompt Engineer @ OpenAI</p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-6 py-3 bg-gray-50 flex justify-between items-center">
            <span className="text-sm text-gray-500">Modalidad: Online</span>
            <a 
              href="#"
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Inscribirme →
            </a>
          </div>
        </div>
        
        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
          <div className="h-3 bg-gradient-to-r from-yellow-500 to-amber-400"></div>
          <div className="p-6">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                  <rect x="9" y="9" width="6" height="6"></rect>
                  <line x1="9" y1="2" x2="9" y2="4"></line>
                  <line x1="15" y1="2" x2="15" y2="4"></line>
                  <line x1="9" y1="20" x2="9" y2="22"></line>
                  <line x1="15" y1="20" x2="15" y2="22"></line>
                  <line x1="20" y1="9" x2="22" y2="9"></line>
                  <line x1="20" y1="14" x2="22" y2="14"></line>
                  <line x1="2" y1="9" x2="4" y2="9"></line>
                  <line x1="2" y1="14" x2="4" y2="14"></line>
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-bold">Desarrollando con Multimodalidad</h3>
                <p className="text-gray-500 text-sm">23 de junio, 2025 • 14:00 - 17:00</p>
              </div>
            </div>
            <div className="space-y-4">
              <p className="text-gray-600">
                Aprende a combinar texto, imágenes y otros formatos para crear aplicaciones de IA más potentes y versátiles.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>Uso de modelos multimodales con Gemini Pro</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>Análisis y procesamiento de imágenes</span>
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  <span>Creación de interfaces conversacionales con multimedia</span>
                </li>
              </ul>
              <div className="flex items-center mt-6">
                <img src="https://randomuser.me/api/portraits/women/23.jpg" alt="Instructor" className="w-10 h-10 rounded-full mr-3" />
                <div>
                  <p className="font-medium">Ana Torres</p>
                  <p className="text-sm text-gray-500">AI Research Lead @ TensorFlow</p>
                </div>
              </div>
            </div>
          </div>
          <div className="px-6 py-3 bg-gray-50 flex justify-between items-center">
            <span className="text-sm text-gray-500">Modalidad: Presencial + Online</span>
            <a 
              href="#"
              className="text-sm font-medium text-primary hover:text-primary/80 transition-colors"
            >
              Inscribirme →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 