"use client";

import Link from 'next/link';

export default function BuildWithAIHero() {
  return (
    <div className="bg-gradient-to-br from-primary to-accent/70 text-white py-20">
      <div className="container-custom mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="md:w-7/12">
            <div className="inline-flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <span className="animate-pulse bg-accent w-2 h-2 rounded-full mr-2"></span>
              27-29 JUNIO 2025 • SANTA CRUZ, BOLIVIA
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Build with AI <span className="text-accent">Bolivia 2025</span>
            </h1>
            <p className="text-xl mb-8 text-white/90 max-w-2xl">
              Una iniciativa global impulsada por Google Developer Groups para capacitar a 
              desarrolladores, estudiantes y profesionales en el uso de 
              <span className="font-semibold"> Inteligencia Artificial Generativa</span>.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/registro" 
                className="bg-white text-primary font-semibold px-8 py-3 rounded-lg hover:bg-opacity-90 transition-all text-lg shadow-lg hover:shadow-xl"
              >
                Inscribirme ahora
              </Link>
              <a 
                href="#agenda" 
                className="bg-white/10 backdrop-blur-sm border border-white/30 px-8 py-3 rounded-lg hover:bg-white/20 transition-all text-lg"
              >
                Ver agenda
              </a>
            </div>
            <div className="mt-6 text-sm font-medium">
              <p className="mb-2">El registro cierra el 25 de abril o hasta agotar los cupos.</p>
              <div className="flex items-center gap-2">
                <div className="w-12 h-1 bg-white/30 rounded-full">
                  <div className="w-8 h-1 bg-white rounded-full"></div>
                </div>
                <span>Cupos limitados: 300 participantes</span>
              </div>
            </div>
          </div>
          <div className="md:w-5/12 relative">
            <div className="w-full h-72 md:h-96 bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-32 h-32 opacity-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-1H2a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"/>
                  <rect x="7" y="12" width="2" height="2"/>
                  <rect x="15" y="12" width="2" height="2"/>
                  <path d="M8 16s1.5 1 4 1 4-1 4-1"/>
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-6">
                <p className="font-semibold text-white">Hackathon de IA</p>
                <p className="text-white/80 text-sm">Universidad Católica Boliviana, Santa Cruz</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 