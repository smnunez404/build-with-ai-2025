"use client";

export default function AgendaSection() {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Agenda del <span className="text-primary">Evento</span></h2>
      
      <div className="bg-white p-6 rounded-xl shadow-md mb-8">
        <h3 className="text-xl font-bold mb-4 flex items-center text-primary">
          <span className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 text-primary">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </span>
          Día 1: Viernes 27 de junio
        </h3>
        
        <div className="space-y-4 pl-11">
          <div className="border-l-2 border-primary/20 pl-4 pb-5 relative">
            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary"></div>
            <p className="text-sm text-gray-500 mb-1">09:00 - 10:00</p>
            <h4 className="font-semibold">Registro y desayuno</h4>
            <p className="text-gray-600">Bienvenida a los participantes, entrega de materiales</p>
          </div>
          
          <div className="border-l-2 border-primary/20 pl-4 pb-5 relative">
            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary"></div>
            <p className="text-sm text-gray-500 mb-1">10:00 - 11:00</p>
            <h4 className="font-semibold">Ceremonia de inauguración</h4>
            <p className="text-gray-600">Presentación del evento y keynote "El futuro de la IA Generativa"</p>
          </div>
          
          <div className="border-l-2 border-primary/20 pl-4 pb-5 relative">
            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary"></div>
            <p className="text-sm text-gray-500 mb-1">11:00 - 12:30</p>
            <h4 className="font-semibold">Explicación de la hackathon y formación de equipos</h4>
            <p className="text-gray-600">Reglas, criterios de evaluación y herramientas disponibles</p>
          </div>
          
          <div className="border-l-2 border-primary/20 pl-4 pb-5 relative">
            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary"></div>
            <p className="text-sm text-gray-500 mb-1">12:30 - 14:00</p>
            <h4 className="font-semibold">Almuerzo y networking</h4>
          </div>
          
          <div className="border-l-2 border-primary/20 pl-4 pb-5 relative">
            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary"></div>
            <p className="text-sm text-gray-500 mb-1">14:00 - 15:30</p>
            <h4 className="font-semibold">Workshop: Introducción a Gemini API y AI Studio</h4>
            <p className="text-gray-600">Sesión práctica para comenzar a trabajar con las herramientas</p>
          </div>
          
          <div className="border-l-2 border-primary/20 pl-4 pb-5 relative">
            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-primary"></div>
            <p className="text-sm text-gray-500 mb-1">15:30 - 23:00</p>
            <h4 className="font-semibold">Inicio de la hackathon</h4>
            <p className="text-gray-600">Mentores disponibles para consultas y sesiones de debugging</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-md mb-8">
        <h3 className="text-xl font-bold mb-4 flex items-center text-secondary">
          <span className="w-8 h-8 bg-secondary/10 rounded-full flex items-center justify-center mr-3 text-secondary">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </span>
          Día 2: Sábado 28 de junio
        </h3>
        
        <div className="space-y-4 pl-11">
          <div className="border-l-2 border-secondary/20 pl-4 pb-5 relative">
            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-secondary"></div>
            <p className="text-sm text-gray-500 mb-1">08:00 - 09:00</p>
            <h4 className="font-semibold">Desayuno</h4>
          </div>
          
          <div className="border-l-2 border-secondary/20 pl-4 pb-5 relative">
            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-secondary"></div>
            <p className="text-sm text-gray-500 mb-1">09:00 - 10:00</p>
            <h4 className="font-semibold">Lightning talks: Casos de uso de IA generativa</h4>
            <p className="text-gray-600">Presentaciones breves de expertos de la industria</p>
          </div>
          
          <div className="border-l-2 border-secondary/20 pl-4 pb-5 relative">
            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-secondary"></div>
            <p className="text-sm text-gray-500 mb-1">10:00 - 13:00</p>
            <h4 className="font-semibold">Hackathon (continuación)</h4>
            <p className="text-gray-600">Desarrollo de proyectos</p>
          </div>
          
          <div className="border-l-2 border-secondary/20 pl-4 pb-5 relative">
            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-secondary"></div>
            <p className="text-sm text-gray-500 mb-1">13:00 - 14:00</p>
            <h4 className="font-semibold">Almuerzo</h4>
          </div>
          
          <div className="border-l-2 border-secondary/20 pl-4 pb-5 relative">
            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-secondary"></div>
            <p className="text-sm text-gray-500 mb-1">14:00 - 15:00</p>
            <h4 className="font-semibold">Workshop: Mejores prácticas en UX para aplicaciones de IA</h4>
            <p className="text-gray-600">Tips para hacer interfaces intuitivas para sistemas de IA</p>
          </div>
          
          <div className="border-l-2 border-secondary/20 pl-4 pb-5 relative">
            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-secondary"></div>
            <p className="text-sm text-gray-500 mb-1">15:00 - 23:00</p>
            <h4 className="font-semibold">Hackathon (continuación)</h4>
            <p className="text-gray-600">Desarrollo de proyectos</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-bold mb-4 flex items-center text-accent">
          <span className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center mr-3 text-accent">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
              <line x1="16" y1="2" x2="16" y2="6"></line>
              <line x1="8" y1="2" x2="8" y2="6"></line>
              <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
          </span>
          Día 3: Domingo 29 de junio
        </h3>
        
        <div className="space-y-4 pl-11">
          <div className="border-l-2 border-accent/20 pl-4 pb-5 relative">
            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-accent"></div>
            <p className="text-sm text-gray-500 mb-1">08:00 - 09:00</p>
            <h4 className="font-semibold">Desayuno</h4>
          </div>
          
          <div className="border-l-2 border-accent/20 pl-4 pb-5 relative">
            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-accent"></div>
            <p className="text-sm text-gray-500 mb-1">09:00 - 12:00</p>
            <h4 className="font-semibold">Finalización de proyectos</h4>
            <p className="text-gray-600">Últimos ajustes y preparación de presentaciones</p>
          </div>
          
          <div className="border-l-2 border-accent/20 pl-4 pb-5 relative">
            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-accent"></div>
            <p className="text-sm text-gray-500 mb-1">12:00 - 13:00</p>
            <h4 className="font-semibold">Almuerzo</h4>
          </div>
          
          <div className="border-l-2 border-accent/20 pl-4 pb-5 relative">
            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-accent"></div>
            <p className="text-sm text-gray-500 mb-1">13:00 - 16:00</p>
            <h4 className="font-semibold">Presentaciones de proyectos</h4>
            <p className="text-gray-600">Cada equipo presenta su solución ante el jurado y audiencia</p>
          </div>
          
          <div className="border-l-2 border-accent/20 pl-4 pb-5 relative">
            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-accent"></div>
            <p className="text-sm text-gray-500 mb-1">16:00 - 17:00</p>
            <h4 className="font-semibold">Deliberación del jurado</h4>
            <p className="text-gray-600">Coffee break y networking para los participantes</p>
          </div>
          
          <div className="border-l-2 border-accent/20 pl-4 relative">
            <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-accent"></div>
            <p className="text-sm text-gray-500 mb-1">17:00 - 18:00</p>
            <h4 className="font-semibold">Ceremonia de premiación y clausura</h4>
            <p className="text-gray-600">Anuncio de ganadores, entrega de premios y cierre del evento</p>
          </div>
        </div>
      </div>
    </div>
  );
} 