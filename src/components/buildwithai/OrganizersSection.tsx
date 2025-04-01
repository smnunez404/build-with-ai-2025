"use client";

export default function OrganizersSection() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Organizadores</h2>
      <p className="text-lg text-center text-gray-600 mb-10 max-w-3xl mx-auto">
        Este evento es posible gracias a la colaboración de:
      </p>
      
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
        <div className="p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center text-center md:text-left">
            <div className="w-32 h-32 flex-shrink-0 mb-4 md:mb-0 md:mr-8">
              <img src="/images/gdg-logo.png" alt="GDG Santa Cruz" className="w-full h-full object-contain" />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2">Google Developer Group Santa Cruz</h3>
              <p className="text-gray-600 mb-4">
                Comunidad de desarrolladores apasionados por la tecnología de Google, con enfoque en compartir conocimiento, 
                crear networking y desarrollar soluciones innovadoras para problemas locales.
              </p>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                <a 
                  href="https://gdg.community.dev/gdg-santa-cruz-bolivia/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="16"></line>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                  </svg>
                  Sitio web
                </a>
                <a 
                  href="https://www.linkedin.com/company/gdg-santa-cruz-bolivia/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-50 text-blue-600 hover:bg-blue-100 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                  LinkedIn
                </a>
                <a 
                  href="https://www.instagram.com/gdgsantacruz/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-pink-50 text-pink-600 hover:bg-pink-100 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-bold mb-6 text-center">Equipo Organizador</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Roberto Gonzalez" className="w-24 h-24 rounded-full mb-4 object-cover" />
          <h4 className="font-bold text-xl mb-1">Roberto Gonzalez</h4>
          <p className="text-gray-600 mb-3">Lead Organizer</p>
          <p className="text-gray-500 text-sm">
            Full-stack developer, especializado en soluciones cloud y apasionado por la IA.
          </p>
          <div className="flex gap-3 mt-4">
            <a 
              href="#" 
              className="text-gray-400 hover:text-blue-500 transition-colors"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="Twitter"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center">
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Ana María López" className="w-24 h-24 rounded-full mb-4 object-cover" />
          <h4 className="font-bold text-xl mb-1">Ana María López</h4>
          <p className="text-gray-600 mb-3">Community Manager</p>
          <p className="text-gray-500 text-sm">
            Ingeniera de software y Women Techmakers Ambassador con enfoque en inclusión tecnológica.
          </p>
          <div className="flex gap-3 mt-4">
            <a 
              href="#" 
              className="text-gray-400 hover:text-blue-500 transition-colors"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="Twitter"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all flex flex-col items-center text-center">
          <img src="https://randomuser.me/api/portraits/men/67.jpg" alt="David Flores" className="w-24 h-24 rounded-full mb-4 object-cover" />
          <h4 className="font-bold text-xl mb-1">David Flores</h4>
          <p className="text-gray-600 mb-3">Technical Lead</p>
          <p className="text-gray-500 text-sm">
            Machine Learning Engineer con experiencia en proyectos de IA aplicada.
          </p>
          <div className="flex gap-3 mt-4">
            <a 
              href="#" 
              className="text-gray-400 hover:text-blue-500 transition-colors"
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
            <a 
              href="#" 
              className="text-gray-400 hover:text-blue-400 transition-colors"
              aria-label="Twitter"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <h3 className="text-2xl font-bold mb-6 text-center">Patrocinadores</h3>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center justify-center">
          <img src="/images/google-logo.png" alt="Google" className="h-12 object-contain" />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center justify-center">
          <img src="/images/ucb-logo.png" alt="Universidad Católica Boliviana" className="h-12 object-contain" />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center justify-center">
          <img src="/images/jalasoft-logo.png" alt="Jalasoft" className="h-12 object-contain" />
        </div>
        <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-all flex items-center justify-center">
          <img src="/images/assuresoft-logo.png" alt="AssureSoft" className="h-12 object-contain" />
        </div>
      </div>
    </div>
  );
} 