"use client";

export default function HackathonSection() {
  return (
    <div>
      <section className="mb-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">La <span className="text-primary">Hackathon</span></h2>
          <div className="bg-gradient-to-br from-indigo-50 to-blue-50 p-8 rounded-xl mb-12">
            <p className="text-lg mb-6 leading-relaxed">
              48 horas de creatividad, aprendizaje e innovación donde desarrolladores, 
              diseñadores y entusiastas de la tecnología crearán soluciones impactantes utilizando 
              IA generativa.
            </p>
            
            <div className="flex items-center mb-6 p-4 bg-white rounded-lg shadow-sm">
              <div className="mr-4 w-12 h-12 flex-shrink-0 bg-primary/10 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold">27-29 de junio, 2025</h4>
                <p className="text-gray-600">Viernes a domingo, 48 horas de hackathon intensiva</p>
              </div>
            </div>
            
            <div className="flex items-center mb-6 p-4 bg-white rounded-lg shadow-sm">
              <div className="mr-4 w-12 h-12 flex-shrink-0 bg-primary/10 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold">Inicio: 9:00 AM del viernes</h4>
                <p className="text-gray-600">Recepción, inauguración y formación de equipos</p>
              </div>
            </div>
            
            <div className="flex items-center mb-6 p-4 bg-white rounded-lg shadow-sm">
              <div className="mr-4 w-12 h-12 flex-shrink-0 bg-primary/10 rounded-full flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <div>
                <h4 className="font-semibold">Universidad Católica Boliviana (UCB)</h4>
                <p className="text-gray-600">Campus Santa Cruz de la Sierra, Edificio de Ingeniería</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">Temática de la Hackathon</h3>
          <p className="text-lg text-gray-700 mb-6">
            El enfoque principal será <span className="font-semibold">Inteligencia Artificial Generativa</span> y herramientas de Google, incluyendo:
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4 mx-auto max-w-5xl">
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-blue-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-md">
                <img 
                  src="https://brandlogo.org/wp-content/uploads/2024/06/Gemini-Icon-300x300.png.webp" 
                  alt="Gemini Logo" 
                  className="h-12 w-12"
                />
              </div>
              <h4 className="font-bold text-lg text-primary mb-2">Gemini</h4>
              <p className="text-gray-700 text-sm">Modelos avanzados de IA para aplicaciones.</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-teal-50 p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-green-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-md">
                <img 
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Vertex_AI_Logo.svg/2048px-Vertex_AI_Logo.svg.png" 
                  alt="Vertex AI Logo" 
                  className="h-12 w-12"
                />
              </div>
              <h4 className="font-bold text-lg text-accent mb-2">Vertex AI</h4>
              <p className="text-gray-700 text-sm">Plataforma de machine learning en la nube.</p>
            </div>
            <div className="bg-gradient-to-br from-indigo-50 to-pink-50 p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-indigo-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-md">
                <img 
                  src="https://wpforms.com/wp-content/uploads/2024/08/google-ai-studio-logo.png" 
                  alt="AI Studio Logo" 
                  className="h-12 w-12"
                />
              </div>
              <h4 className="font-bold text-lg text-secondary mb-2">AI Studio</h4>
              <p className="text-gray-700 text-sm">Entorno de desarrollo para prototipos con IA.</p>
            </div>
          </div>
          
          <div className="flex justify-center mb-8">
            <div className="w-56 bg-gradient-to-br from-yellow-50 to-orange-50 p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-yellow-100 flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-yellow-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h4 className="font-bold text-lg text-yellow-600 mb-2">Soluciones con impacto</h4>
              <p className="text-gray-700 text-sm">Salud, educación, fintech, automatización y más.</p>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-gray-700">
              Los proyectos pueden ser nuevos o mejorar ideas existentes, siempre que apliquen IA innovadora.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">Formato y reglas</h3>
          
          <div className="space-y-5">
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
              <h4 className="font-semibold text-lg mb-3">Equipos</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  De 2 a 4 personas por equipo
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  Puedes formar tu equipo o unirte a uno en el evento
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  Se recomienda diversidad de habilidades (programación, diseño, negocio)
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
              <h4 className="font-semibold text-lg mb-3">Desarrollo</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  Todo el código debe ser escrito durante el evento
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  Uso de frameworks, librerías y APIs permitido
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  Mentores disponibles para consultas durante todo el evento
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  Créditos gratuitos para Google Cloud y APIs de IA
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
              <h4 className="font-semibold text-lg mb-3">Presentación</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  5 minutos de demo + 2 minutos de preguntas
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  Deben mostrar un prototipo funcional
                </li>
                <li className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                  Explicar el uso de IA en la solución
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 