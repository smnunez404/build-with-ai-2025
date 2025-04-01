"use client";

export default function AboutSection() {
  return (
    <div>
      <section className="mb-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">¿Qué es <span className="text-primary">Build with AI</span>?</h2>
          <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-xl mb-12">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Build with AI es una <span className="font-semibold">iniciativa global impulsada por Google Developer Groups (GDG)</span>, 
              diseñada para capacitar a desarrolladores, estudiantes y profesionales en el uso de 
              Inteligencia Artificial (IA) generativa y herramientas avanzadas de Google, como:
            </p>
            <div className="flex flex-nowrap justify-center gap-4 mb-8 overflow-x-auto md:overflow-visible">
              <div className="w-56 flex-shrink-0 bg-gradient-to-br from-blue-50 to-purple-50 p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-blue-100 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-md">
                  <img 
                    src="https://brandlogo.org/wp-content/uploads/2024/06/Gemini-Icon-300x300.png.webp" 
                    alt="Gemini Logo" 
                    className="h-12 w-12"
                  />
                </div>
                <h4 className="font-bold text-lg text-primary mb-2">Gemini</h4>
                <p className="text-gray-700 text-sm">Modelos de IA de última generación.</p>
              </div>
              <div className="w-56 flex-shrink-0 bg-gradient-to-br from-indigo-50 to-pink-50 p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-indigo-100 flex flex-col items-center text-center">
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
              <div className="w-56 flex-shrink-0 bg-gradient-to-br from-green-50 to-teal-50 p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-green-100 flex flex-col items-center text-center">
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
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-12 rounded-xl mb-16">
        <div className="max-w-5xl mx-auto px-4">
          <h3 className="text-2xl font-bold mb-8 text-center">Aspectos destacados del evento</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
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
              <h4 className="font-bold text-lg mb-3">Hackathon de 48 horas</h4>
              <p className="text-gray-600">Desarrollo intensivo de soluciones innovadoras con las herramientas más avanzadas de IA.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
                </svg>
              </div>
              <h4 className="font-bold text-lg mb-3">Talleres prácticos</h4>
              <p className="text-gray-600">Formación guiada por expertos en tecnologías de IA antes y durante el evento.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover:shadow-lg transition-all duration-300">
              <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                </svg>
              </div>
              <h4 className="font-bold text-lg mb-3">Grandes premios</h4>
              <p className="text-gray-600">Más de $10,000 en efectivo, créditos en la nube y oportunidades de mentoría.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center">¿Por qué participar?</h3>
          <div className="space-y-4">
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="M12 5v14"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Aprende tecnologías de vanguardia</h4>
                  <p className="text-gray-600">Adquiere experiencia práctica con las herramientas más avanzadas de IA de Google, acompañado por expertos del ecosistema tecnológico.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-secondary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Networking de alto valor</h4>
                  <p className="text-gray-600">Conéctate con profesionales, mentores, industria y posibles socios o empleadores para impulsar tu carrera en tecnología e IA.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <line x1="3" y1="9" x2="21" y2="9"></line>
                    <line x1="9" y1="21" x2="9" y2="9"></line>
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-1">Proyectos con impacto real</h4>
                  <p className="text-gray-600">Desarrolla soluciones innovadoras que aborden desafíos concretos en salud, educación, fintech y más áreas prioritarias.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 