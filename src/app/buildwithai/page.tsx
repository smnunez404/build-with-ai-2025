"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function BuildWithAIPage() {
  const [activeTab, setActiveTab] = useState('sobre');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    if (expandedFaq === index) {
      setExpandedFaq(null);
    } else {
      setExpandedFaq(index);
    }
  };

  const faqs = [
    {
      question: "¿Puedo participar solo?",
      answer: "Sí, pero se recomienda formar equipos de 2 a 4 personas. Si no tienes equipo, te ayudaremos a encontrar uno durante el evento."
    },
    {
      question: "¿Hay costo de inscripción?",
      answer: "¡No! El evento es totalmente gratuito gracias a nuestros patrocinadores."
    },
    {
      question: "¿Qué nivel técnico necesito?",
      answer: "Desde principiantes (con nociones básicas de programación) hasta expertos. Habrá talleres previos para nivelar conocimientos."
    },
    {
      question: "¿Qué debo llevar al evento?",
      answer: "Laptop, cargador, entusiasmo y ¡buenas ideas!"
    },
    {
      question: "¿Puedo usar tecnologías que no sean de Google?",
      answer: "Sí, pero el proyecto debe integrar al menos una herramienta de Google AI (Gemini, Vertex AI, etc.) para ser elegible a premios."
    },
    {
      question: "¿Habrá comida durante el evento?",
      answer: "Sí, incluimos desayunos, almuerzos y snacks para todos los participantes."
    },
    {
      question: "¿Cómo se seleccionarán los ganadores?",
      answer: "Basado en la rúbrica de evaluación (innovación, impacto técnico, usabilidad y presentación)."
    },
    {
      question: "¿Pueden participar menores de edad?",
      answer: "Sí, desde los 16 años con autorización firmada de un tutor."
    },
    {
      question: "¿Habrá certificados de participación?",
      answer: "¡Sí! Todos los asistentes recibirán un certificado digital."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section mejorada con background y más atractiva visualmente */}
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
                  <div className="text-9xl opacity-20">🤖</div>
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

      {/* Navegación por tabs para facilitar el acceso a información */}
      <div className="sticky top-0 bg-white shadow-md z-10">
        <div className="container-custom mx-auto py-2">
          <div className="flex overflow-x-auto gap-1 md:gap-6 scrollbar-hide">
            <button 
              onClick={() => setActiveTab('sobre')}
              className={`px-4 py-3 whitespace-nowrap font-medium text-sm transition-colors ${activeTab === 'sobre' ? 'text-primary border-b-2 border-primary' : 'text-gray-500 hover:text-gray-800'}`}
            >
              Sobre el evento
            </button>
            <button 
              onClick={() => setActiveTab('hackathon')}
              className={`px-4 py-3 whitespace-nowrap font-medium text-sm transition-colors ${activeTab === 'hackathon' ? 'text-primary border-b-2 border-primary' : 'text-gray-500 hover:text-gray-800'}`}
            >
              La Hackathon
            </button>
            <button 
              onClick={() => setActiveTab('agenda')}
              className={`px-4 py-3 whitespace-nowrap font-medium text-sm transition-colors ${activeTab === 'agenda' ? 'text-primary border-b-2 border-primary' : 'text-gray-500 hover:text-gray-800'}`}
            >
              Agenda
            </button>
            <button 
              onClick={() => setActiveTab('premios')}
              className={`px-4 py-3 whitespace-nowrap font-medium text-sm transition-colors ${activeTab === 'premios' ? 'text-primary border-b-2 border-primary' : 'text-gray-500 hover:text-gray-800'}`}
            >
              Premios
            </button>
            <button 
              onClick={() => setActiveTab('talleres')}
              className={`px-4 py-3 whitespace-nowrap font-medium text-sm transition-colors ${activeTab === 'talleres' ? 'text-primary border-b-2 border-primary' : 'text-gray-500 hover:text-gray-800'}`}
            >
              Talleres previos
            </button>
            <button 
              onClick={() => setActiveTab('organizadores')}
              className={`px-4 py-3 whitespace-nowrap font-medium text-sm transition-colors ${activeTab === 'organizadores' ? 'text-primary border-b-2 border-primary' : 'text-gray-500 hover:text-gray-800'}`}
            >
              Organizadores
            </button>
            <button 
              onClick={() => setActiveTab('faq')}
              className={`px-4 py-3 whitespace-nowrap font-medium text-sm transition-colors ${activeTab === 'faq' ? 'text-primary border-b-2 border-primary' : 'text-gray-500 hover:text-gray-800'}`}
            >
              FAQ
            </button>
          </div>
        </div>
      </div>

      <div className="container-custom mx-auto py-12">
        {/* Contenido según pestaña activa */}
        {activeTab === 'sobre' && (
          <div>
            {/* Sección de Qué es Build with AI con diseño mejorado */}
            <section className="mb-16">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">¿Qué es <span className="text-primary">Build with AI</span>?</h2>
                <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-xl mb-12">
                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    Build with AI es una <span className="font-semibold">iniciativa global impulsada por Google Developer Groups (GDG)</span>, 
                    diseñada para capacitar a desarrolladores, estudiantes y profesionales en el uso de 
                    Inteligencia Artificial (IA) generativa y herramientas avanzadas de Google, como:
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex-shrink-0 w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                        <span className="text-primary text-xl">✨</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Gemini</h4>
                        <p className="text-gray-600">Modelos de IA de última generación.</p>
                      </div>
                    </li>
                    <li className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex-shrink-0 w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center mr-4">
                        <span className="text-secondary text-xl">🛠️</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">AI Studio</h4>
                        <p className="text-gray-600">Plataforma de desarrollo de IA.</p>
                      </div>
                    </li>
                    <li className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                      <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mr-4">
                        <span className="text-accent text-xl">☁️</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Vertex AI</h4>
                        <p className="text-gray-600">Solución de machine learning en la nube.</p>
                      </div>
                    </li>
                  </ul>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    A través de hackathones, talleres y mentorías, los participantes aprenden a 
                    construir soluciones innovadoras aplicando IA en proyectos reales.
                  </p>
                </div>
                
                <h3 className="text-2xl font-bold mt-14 mb-6">Build with AI en Bolivia</h3>
                <div className="bg-white shadow-md rounded-xl p-8 mb-10">
                  <p className="text-lg text-gray-600 mb-6">
                    En Bolivia, este evento es organizado por GDG Bolivia (comunidades de Santa Cruz, 
                    La Paz, Cochabamba, El Alto, Sucre y Tarija), con el objetivo de:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-blue-50 p-5 rounded-lg">
                      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center mb-4 text-white text-xl">🧠</div>
                      <h4 className="font-semibold mb-2">Promover talento local</h4>
                      <p className="text-gray-600 text-sm">Impulsar el desarrollo de habilidades en inteligencia artificial en Bolivia.</p>
                    </div>
                    <div className="bg-red-50 p-5 rounded-lg">
                      <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4 text-white text-xl">🤝</div>
                      <h4 className="font-semibold mb-2">Generar alianzas</h4>
                      <p className="text-gray-600 text-sm">Conectar academia, industria y emprendedores en un ecosistema colaborativo.</p>
                    </div>
                    <div className="bg-green-50 p-5 rounded-lg">
                      <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4 text-white text-xl">🌎</div>
                      <h4 className="font-semibold mb-2">Posicionar al país</h4>
                      <p className="text-gray-600 text-sm">Colocar a Bolivia en el mapa de innovación tecnológica regional.</p>
                    </div>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg flex items-center">
                    <div className="mr-4 text-3xl">📊</div>
                    <div>
                      <p className="text-gray-700">
                        <span className="font-semibold">Edición 2024 (La Paz):</span> +200 desarrolladores
                      </p>
                      <p className="text-gray-700">
                        <span className="font-semibold">Meta 2025 (Santa Cruz):</span> +300 asistentes
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold mb-3">Objetivos del Evento</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Fomentar el desarrollo de soluciones innovadoras con IA generativa</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Conectar talento emergente con empresas, mentores y oportunidades</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Fortalecer el ecosistema tecnológico boliviano a través de la colaboración</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Impulsar proyectos con impacto social y empresarial</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-16 max-w-4xl mx-auto">
                <h3 className="text-2xl font-bold mb-6 text-center">¿Por qué participar?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="bg-white shadow-sm rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">👨‍🏫</span>
                    </div>
                    <h4 className="font-semibold mb-2">Aprender de expertos</h4>
                    <p className="text-gray-600 text-sm">Expertos en IA de Bolivia y Latinoamérica</p>
                  </div>
                  <div className="bg-white shadow-sm rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                    <div className="w-14 h-14 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">💻</span>
                    </div>
                    <h4 className="font-semibold mb-2">Desarrollar proyectos</h4>
                    <p className="text-gray-600 text-sm">Con tecnologías avanzadas de Google</p>
                  </div>
                  <div className="bg-white shadow-sm rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                    <div className="w-14 h-14 bg-tertiary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">🏆</span>
                    </div>
                    <h4 className="font-semibold mb-2">Ganar premios</h4>
                    <p className="text-gray-600 text-sm">Premios, mentorías y visibilidad</p>
                  </div>
                  <div className="bg-white shadow-sm rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                    <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl">📈</span>
                    </div>
                    <h4 className="font-semibold mb-2">Sumar experiencia</h4>
                    <p className="text-gray-600 text-sm">Para tu currículum o emprendimiento</p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'hackathon' && (
          <div>
            <section className="mb-16">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Sobre la <span className="text-primary">Hackathon</span></h2>
                
                <div className="bg-white shadow-lg rounded-xl overflow-hidden mb-12">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">¿Qué es una Hackathon?</h3>
                    <p className="text-white/90">
                      Un evento intensivo de innovación y creación tecnológica
                    </p>
                  </div>
                  <div className="p-8">
                    <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                      Una hackathon es un evento de innovación donde desarrolladores, diseñadores, 
                      emprendedores y expertos en tecnología colaboran en equipos para crear soluciones 
                      tecnológicas en tiempo récord. Durante 48 horas continuas, los participantes:
                    </p>
                    <div className="space-y-4 mb-6">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 text-blue-600">
                          <span>1</span>
                        </div>
                        <div>
                          <p className="font-medium">Desarrollan prototipos funcionales</p>
                          <p className="text-gray-600">Usando IA y diversas herramientas tecnológicas</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-4 text-purple-600">
                          <span>2</span>
                        </div>
                        <div>
                          <p className="font-medium">Reciben mentorías de expertos</p>
                          <p className="text-gray-600">Con especialistas en inteligencia artificial</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-4 text-green-600">
                          <span>3</span>
                        </div>
                        <div>
                          <p className="font-medium">Compiten por premios</p>
                          <p className="text-gray-600">Mientras aprenden y amplían su red de contactos</p>
                        </div>
                      </div>
                    </div>
                    <p className="text-lg text-gray-700 font-medium italic">
                      Es una experiencia intensiva que combina aprendizaje, creatividad y trabajo en equipo.
                    </p>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-6">Temática de la Hackathon</h3>
                <div className="bg-gray-50 rounded-xl p-8 mb-12">
                  <p className="text-lg text-gray-700 mb-6">
                    El enfoque principal será <span className="font-semibold">Inteligencia Artificial Generativa</span> y herramientas de Google, incluyendo:
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white p-5 rounded-lg shadow-sm flex">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-4 text-white text-lg font-bold">G</div>
                      <div>
                        <h4 className="font-semibold mb-1">Gemini</h4>
                        <p className="text-gray-600 text-sm">Modelos avanzados de IA para desarrollo de aplicaciones.</p>
                      </div>
                    </div>
                    <div className="bg-white p-5 rounded-lg shadow-sm flex">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-500 rounded-lg flex items-center justify-center mr-4 text-white text-lg font-bold">V</div>
                      <div>
                        <h4 className="font-semibold mb-1">Vertex AI</h4>
                        <p className="text-gray-600 text-sm">Plataforma de machine learning en la nube.</p>
                      </div>
                    </div>
                    <div className="bg-white p-5 rounded-lg shadow-sm flex">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center mr-4 text-white text-lg font-bold">A</div>
                      <div>
                        <h4 className="font-semibold mb-1">AI Studio</h4>
                        <p className="text-gray-600 text-sm">Entorno de desarrollo para prototipos con IA.</p>
                      </div>
                    </div>
                    <div className="bg-white p-5 rounded-lg shadow-sm flex">
                      <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mr-4 text-white text-lg">🌟</div>
                      <div>
                        <h4 className="font-semibold mb-1">Soluciones con impacto</h4>
                        <p className="text-gray-600 text-sm">Salud, educación, fintech, automatización y más.</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-gray-700">
                      Los proyectos pueden ser nuevos o mejorar ideas existentes, siempre que apliquen IA innovadora.
                    </p>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-6">Participantes</h3>
                <div className="bg-white shadow-md rounded-xl overflow-hidden mb-12">
                  <div className="p-6 border-b">
                    <h4 className="text-xl font-bold mb-4">¿Quiénes pueden participar?</h4>
                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                          <span className="text-blue-600">👨‍🎓</span>
                        </div>
                        <div>
                          <p className="font-medium">Estudiantes</p>
                          <p className="text-sm text-gray-600">Universitarios o de bootcamps tecnológicos</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                          <span className="text-green-600">👩‍💻</span>
                        </div>
                        <div>
                          <p className="font-medium">Profesionales</p>
                          <p className="text-sm text-gray-600">Desarrolladores, ingenieros, diseñadores, emprendedores</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center mr-3">
                          <span className="text-purple-600">👥</span>
                        </div>
                        <div>
                          <p className="font-medium">Equipos multidisciplinarios</p>
                          <p className="text-sm text-gray-600">Máximo 4 personas por equipo</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 bg-yellow-50">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-10 h-10 bg-yellow-200 rounded-full flex items-center justify-center mr-4">
                        <span className="text-yellow-700">💡</span>
                      </div>
                      <div>
                        <p className="font-medium">No necesitas ser experto en IA</p>
                        <p className="text-gray-700">Habrá talleres previos para nivelar conocimientos. Lo importante es tu entusiasmo y ganas de aprender.</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mb-8">
                  <h3 className="text-2xl font-bold mb-4 flex items-center">
                    <span className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3 text-blue-600">📋</span>
                    Registro
                  </h3>
                  <div className="mb-6">
                    <div className="flex flex-col sm:flex-row sm:items-center mb-4">
                      <span className="bg-red-100 text-red-700 px-3 py-1 rounded-full text-sm font-medium inline-block mb-2 sm:mb-0 sm:mr-3">¡IMPORTANTE!</span>
                      <p className="font-medium">El registro cierra el 25 de abril o hasta agotar los cupos.</p>
                    </div>
                    <p className="text-gray-700 mb-4">Requisitos para participar:</p>
                    <ul className="space-y-2 mb-6">
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Formar un equipo (o registrarse individualmente para ser asignado a uno).</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Contar con conocimientos básicos en programación (Python recomendado).</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-5 w-5 text-primary mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Asistir a al menos 1 taller previo (obligatorio para equipos confirmados).</span>
                      </li>
                    </ul>
                  </div>
                  <div className="flex justify-center">
                    <Link 
                      href="/registro" 
                      className="btn-primary text-center px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all"
                    >
                      Inscribirme ahora
                    </Link>
                  </div>
                </div>
                
                <div className="bg-white shadow-sm rounded-xl p-6 border-l-4 border-blue-500">
                  <h4 className="font-semibold mb-2">Formato del Evento</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span><b>Presencial:</b> Auditorios de la Universidad Católica Boliviana, sede Santa Cruz.</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span><b>Duración:</b> 48 horas continuas (viernes a domingo).</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span><b>Idioma:</b> Español (algunos recursos técnicos podrían estar en inglés).</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span><b>Costo:</b> Gratuito (cupos limitados).</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'agenda' && (
          <div>
            <section id="agenda" className="mb-16 scroll-mt-16">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Agenda <span className="text-primary">Detallada</span></h2>
                
                <div className="flex justify-center mb-10">
                  <div className="inline-flex bg-gray-100 p-1 rounded-xl">
                    <div className="px-6 py-3 bg-white rounded-lg shadow-sm font-medium">
                      27-29 Junio, 2025
                    </div>
                  </div>
                </div>
                
                <div className="relative mb-16">
                  <div className="absolute left-1/2 -ml-0.5 w-1 h-full bg-gray-200 hidden md:block"></div>
                  
                  <div className="mb-12 text-center">
                    <div className="inline-block text-center mb-4">
                      <div className="w-20 h-20 bg-tertiary rounded-full flex items-center justify-center text-white mx-auto shadow-lg">
                        <span className="text-2xl">1</span>
                      </div>
                      <h3 className="text-xl font-bold mt-2">Día 1</h3>
                      <p className="text-gray-500">Viernes 27 de junio</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                      <div className="bg-white shadow-md rounded-xl overflow-hidden md:mt-8">
                        <div className="bg-tertiary h-2"></div>
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-sm font-semibold bg-tertiary/10 text-tertiary px-3 py-1 rounded-full">17:00 - 18:00</span>
                            <span className="text-xs text-gray-500">1h</span>
                          </div>
                          <h4 className="font-bold text-lg mb-2">Registro & Bienvenida</h4>
                          <p className="text-gray-600">Check-in, acreditaciones y entrega de materiales a los participantes.</p>
                          <div className="mt-4 pt-4 border-t border-gray-100">
                            <div className="flex items-center">
                              <span className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-2">📍</span>
                              <span className="text-sm text-gray-500">Hall Principal UCB</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white shadow-md rounded-xl overflow-hidden">
                        <div className="bg-tertiary h-2"></div>
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-sm font-semibold bg-tertiary/10 text-tertiary px-3 py-1 rounded-full">18:00 - 19:00</span>
                            <span className="text-xs text-gray-500">1h</span>
                          </div>
                          <h4 className="font-bold text-lg mb-2">Ceremonia de Apertura</h4>
                          <p className="text-gray-600">Charla inspiracional y presentación de los desafíos para la hackathon.</p>
                          <div className="mt-4 pt-4 border-t border-gray-100">
                            <div className="flex items-center">
                              <span className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-2">🎤</span>
                              <span className="text-sm text-gray-500">Auditorio Principal</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white shadow-md rounded-xl overflow-hidden md:ml-auto">
                        <div className="bg-tertiary h-2"></div>
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-sm font-semibold bg-tertiary/10 text-tertiary px-3 py-1 rounded-full">19:00 - 20:00</span>
                            <span className="text-xs text-gray-500">1h</span>
                          </div>
                          <h4 className="font-bold text-lg mb-2">Formación de equipos</h4>
                          <p className="text-gray-600">Actividades para conocerse y formar equipos para quienes aún no tengan grupo.</p>
                          <div className="mt-4 pt-4 border-t border-gray-100">
                            <div className="flex items-center">
                              <span className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-2">👥</span>
                              <span className="text-sm text-gray-500">Área común</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-white shadow-md rounded-xl overflow-hidden md:mt-8">
                        <div className="bg-tertiary h-2"></div>
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-sm font-semibold bg-tertiary/10 text-tertiary px-3 py-1 rounded-full">20:00 - 00:00</span>
                            <span className="text-xs text-gray-500">4h</span>
                          </div>
                          <h4 className="font-bold text-lg mb-2">Inicio de desarrollo</h4>
                          <p className="text-gray-600">Brainstorming y comienzo del desarrollo de los primeros prototipos.</p>
                          <div className="mt-4 pt-4 border-t border-gray-100">
                            <div className="flex items-center">
                              <span className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-2">💡</span>
                              <span className="text-sm text-gray-500">Espacios de trabajo</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg p-4 inline-flex items-center">
                        <span className="w-8 h-8 bg-tertiary/20 rounded-full flex items-center justify-center mr-2 text-tertiary">🌙</span>
                        <span className="font-medium">Hackeo continuo (Área de trabajo abierta toda la noche)</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-12 text-center">
                    <div className="inline-block text-center mb-4">
                      <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white mx-auto shadow-lg">
                        <span className="text-2xl">2</span>
                      </div>
                      <h3 className="text-xl font-bold mt-2">Día 2</h3>
                      <p className="text-gray-500">Sábado 28 de junio</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                      <div className="bg-white shadow-md rounded-xl overflow-hidden md:mt-8">
                        <div className="bg-primary h-2"></div>
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-sm font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">08:00 - 09:00</span>
                            <span className="text-xs text-gray-500">1h</span>
                          </div>
                          <h4 className="font-bold text-lg mb-2">Desayuno & Networking</h4>
                          <p className="text-gray-600">Un buen desayuno para recuperar energías y networking entre equipos.</p>
                        </div>
                      </div>
                      
                      <div className="bg-white shadow-md rounded-xl overflow-hidden">
                        <div className="bg-primary h-2"></div>
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-sm font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">09:00 - 12:00</span>
                            <span className="text-xs text-gray-500">3h</span>
                          </div>
                          <h4 className="font-bold text-lg mb-2">Mentorías 1:1</h4>
                          <p className="text-gray-600">Sesiones de feedback técnico personalizado con expertos en IA.</p>
                        </div>
                      </div>
                      
                      <div className="bg-white shadow-md rounded-xl overflow-hidden md:ml-auto">
                        <div className="bg-primary h-2"></div>
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-sm font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">12:00 - 14:00</span>
                            <span className="text-xs text-gray-500">2h</span>
                          </div>
                          <h4 className="font-bold text-lg mb-2">Taller técnico</h4>
                          <p className="text-gray-600">Cómo optimizar modelos con Vertex AI y usar eficientemente Gemini.</p>
                        </div>
                      </div>
                      
                      <div className="bg-white shadow-md rounded-xl overflow-hidden md:mt-8">
                        <div className="bg-primary h-2"></div>
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-sm font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">14:00 - 15:00</span>
                            <span className="text-xs text-gray-500">1h</span>
                          </div>
                          <h4 className="font-bold text-lg mb-2">Almuerzo</h4>
                          <p className="text-gray-600">Pausa para almorzar y recargar energías.</p>
                        </div>
                      </div>
                      
                      <div className="bg-white shadow-md rounded-xl overflow-hidden col-span-1 md:col-span-2">
                        <div className="bg-primary h-2"></div>
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-sm font-semibold bg-primary/10 text-primary px-3 py-1 rounded-full">15:00 - 20:00</span>
                            <span className="text-xs text-gray-500">5h</span>
                          </div>
                          <h4 className="font-bold text-lg mb-2">Desarrollo intensivo</h4>
                          <p className="text-gray-600">Continúa el desarrollo de proyectos con avances y consultas rápidas a mentores.</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6">
                      <div className="bg-gradient-to-r from-gray-100 to-gray-200 rounded-lg p-4 inline-flex items-center">
                        <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-2 text-primary">🌙</span>
                        <span className="font-medium">Hackeo nocturno (Soporte organizador hasta 02:00 AM)</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <div className="inline-block text-center mb-4">
                      <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center text-white mx-auto shadow-lg">
                        <span className="text-2xl">3</span>
                      </div>
                      <h3 className="text-xl font-bold mt-2">Día 3</h3>
                      <p className="text-gray-500">Domingo 29 de junio</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                      <div className="bg-white shadow-md rounded-xl overflow-hidden md:mt-8">
                        <div className="bg-secondary h-2"></div>
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-sm font-semibold bg-secondary/10 text-secondary px-3 py-1 rounded-full">08:00 - 10:00</span>
                            <span className="text-xs text-gray-500">2h</span>
                          </div>
                          <h4 className="font-bold text-lg mb-2">Últimos ajustes</h4>
                          <p className="text-gray-600">Tiempo para pruebas finales y preparación de la presentación.</p>
                        </div>
                      </div>
                      
                      <div className="bg-white shadow-md rounded-xl overflow-hidden">
                        <div className="bg-secondary h-2"></div>
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-sm font-semibold bg-secondary/10 text-secondary px-3 py-1 rounded-full">10:00 - 12:00</span>
                            <span className="text-xs text-gray-500">2h</span>
                          </div>
                          <h4 className="font-bold text-lg mb-2">Deadline de entrega</h4>
                          <p className="text-gray-600">Subida de proyectos a la plataforma oficial del evento.</p>
                        </div>
                      </div>
                      
                      <div className="bg-white shadow-md rounded-xl overflow-hidden md:ml-auto">
                        <div className="bg-secondary h-2"></div>
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-sm font-semibold bg-secondary/10 text-secondary px-3 py-1 rounded-full">12:00 - 14:00</span>
                            <span className="text-xs text-gray-500">2h</span>
                          </div>
                          <h4 className="font-bold text-lg mb-2">Pitch Final</h4>
                          <p className="text-gray-600">3 minutos por equipo para presentar su solución frente al jurado.</p>
                        </div>
                      </div>
                      
                      <div className="bg-white shadow-md rounded-xl overflow-hidden md:mt-8">
                        <div className="bg-secondary h-2"></div>
                        <div className="p-6">
                          <div className="flex items-center justify-between mb-4">
                            <span className="text-sm font-semibold bg-secondary/10 text-secondary px-3 py-1 rounded-full">14:00 - 15:30</span>
                            <span className="text-xs text-gray-500">1h 30m</span>
                          </div>
                          <h4 className="font-bold text-lg mb-2">Premiación & Cierre</h4>
                          <p className="text-gray-600">Anuncio de ganadores, entrega de premios y fotos oficiales.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-xl p-8">
                  <h3 className="text-2xl font-bold mb-6">Recursos Disponibles</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                      </div>
                      <h4 className="font-bold mb-2">Herramientas</h4>
                      <ul className="space-y-2 text-gray-600 text-sm">
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span>Acceso a Google Cloud Credits</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span>Datasets públicos (opcionales)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-blue-500 mr-2">•</span>
                          <span>Documentación técnica</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                      </div>
                      <h4 className="font-bold mb-2">Mentores</h4>
                      <ul className="space-y-2 text-gray-600 text-sm">
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>Especialistas en IA y Cloud</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>Google Developer Experts</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-green-500 mr-2">•</span>
                          <span>Representantes de empresas</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="w-12 h-12 bg-tertiary-100 rounded-full flex items-center justify-center mb-4 text-tertiary-600">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                      </div>
                      <h4 className="font-bold mb-2">Espacios</h4>
                      <ul className="space-y-2 text-gray-600 text-sm">
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>Áreas de descanso</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>Alimentación (3 comidas diarias)</span>
                        </li>
                        <li className="flex items-start">
                          <span className="text-yellow-500 mr-2">•</span>
                          <span>Kit de participación</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-8 bg-yellow-50 p-4 rounded-lg">
                    <div className="flex items-start">
                      <svg className="h-5 w-5 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <div>
                        <h4 className="font-medium mb-1">Notas Clave</h4>
                        <ul className="text-sm text-gray-700 space-y-1">
                          <li>• No es obligatorio quedarse las 48 horas, pero sí avanzar en el proyecto.</li>
                          <li>• Se permiten pausas (el espacio estará abierto todo el tiempo).</li>
                          <li>• Premiación por categorías: Mejor IA aplicada, Impacto Social, Innovación Técnica.</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'premios' && (
          <div>
            <section id="premios" className="mb-16 scroll-mt-16">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center"><span className="text-primary">Premios</span> y Reconocimientos</h2>
                
                <div className="relative py-10 mb-16">
                  <div className="relative z-10">
                    <div className="text-center mb-10">
                      <div className="inline-block bg-white px-6 py-2 rounded-full text-lg font-semibold shadow-md">
                        🏆 Premios Principales
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div className="transform transition-all duration-300 hover:-translate-y-2">
                        <div className="bg-white rounded-xl overflow-hidden shadow-lg border-t-8 border-accent relative pb-6">
                          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-accent to-yellow-400 rounded-full flex items-center justify-center shadow-md">
                            <span className="text-white text-3xl">🥇</span>
                          </div>
                          <div className="pt-14 px-6">
                            <h3 className="text-2xl font-bold text-center mb-2">1er Lugar</h3>
                            <div className="w-16 h-1 bg-accent mx-auto mb-6"></div>
                            
                            <ul className="space-y-4">
                              <li className="flex items-start">
                                <div className="flex-shrink-0 w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center mr-3 text-accent">
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
                                <div className="flex-shrink-0 w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center mr-3 text-accent">
                                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                  </svg>
                                </div>
                                <div className="flex-1">
                                  <p className="font-medium mb-1">Mentoría 1:1</p>
                                  <p className="text-sm text-gray-500">4 sesiones con expertos de Google</p>
                                </div>
                              </li>
                              <li className="flex items-start">
                                <div className="flex-shrink-0 w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center mr-3 text-accent">
                                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                                  </svg>
                                </div>
                                <div className="flex-1">
                                  <p className="font-medium mb-1">$500 USD en créditos</p>
                                  <p className="text-sm text-gray-500">Google Cloud para desarrollar tu proyecto</p>
                                </div>
                              </li>
                              <li className="flex items-start">
                                <div className="flex-shrink-0 w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center mr-3 text-accent">
                                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                  </svg>
                                </div>
                                <div className="flex-1">
                                  <p className="font-medium mb-1">Certificado</p>
                                  <p className="text-sm text-gray-500">De reconocimiento oficial</p>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="transform transition-all duration-300 hover:-translate-y-2 mt-8">
                        <div className="bg-white rounded-xl overflow-hidden shadow-lg border-t-8 border-primary relative pb-6">
                          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-primary to-blue-400 rounded-full flex items-center justify-center shadow-md">
                            <span className="text-white text-3xl">🥈</span>
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
                      
                      <div className="transform transition-all duration-300 hover:-translate-y-2 mt-12">
                        <div className="bg-white rounded-xl overflow-hidden shadow-lg border-t-8 border-tertiary relative pb-6">
                          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-tertiary to-orange-400 rounded-full flex items-center justify-center shadow-md">
                            <span className="text-white text-3xl">🥉</span>
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
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white -z-10"></div>
                </div>
                
                <div className="mb-16">
                  <h3 className="text-2xl font-bold mb-6 text-center">Menciones Especiales</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white shadow-md rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg">
                      <div className="bg-gradient-to-r from-secondary to-purple-500 h-3"></div>
                      <div className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mr-4 text-secondary text-xl">
                            🏅
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
                          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 text-primary text-xl">
                            🏅
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
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-8 mb-12">
                  <h3 className="text-2xl font-bold mb-6">Oportunidades Adicionales</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4 text-blue-600">
                        💼
                      </div>
                      <h4 className="font-bold mb-2">Pasantías</h4>
                      <p className="text-gray-600 text-sm">Los mejores equipos serán recomendados a empresas aliadas para pasantías o prácticas profesionales.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 text-purple-600">
                        🚀
                      </div>
                      <h4 className="font-bold mb-2">Incubación</h4>
                      <p className="text-gray-600 text-sm">6 meses de asesoría gratuita para desarrollar tu prototipo, con espacio de coworking, asesoría legal y de negocios.</p>
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-sm">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600">
                        📣
                      </div>
                      <h4 className="font-bold mb-2">Visibilidad</h4>
                      <p className="text-gray-600 text-sm">Publicación de tu proyecto en medios tecnológicos y presentación en eventos internacionales como Google I/O Extended.</p>
                    </div>
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-6">¿Por Qué Participar?</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                      <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-primary to-blue-400 rounded-full flex items-center justify-center text-white">
                        <span>💰</span>
                      </div>
                      <p className="font-semibold">Dinero en efectivo</p>
                      <p className="text-sm text-gray-600">Para impulsar tu proyecto o carrera</p>
                    </div>
                    <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                      <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-secondary to-purple-400 rounded-full flex items-center justify-center text-white">
                        <span>🔗</span>
                      </div>
                      <p className="font-semibold">Conexiones con la industria</p>
                      <p className="text-sm text-gray-600">Mentores, empresas e inversionistas</p>
                    </div>
                    <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                      <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-br from-tertiary to-yellow-500 rounded-full flex items-center justify-center text-white">
                        <span>🛠️</span>
                      </div>
                      <p className="font-semibold">Herramientas y recursos</p>
                      <p className="text-sm text-gray-600">Para seguir aprendiendo y creciendo</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mt-6">
                    * Los premios están sujetos a ajustes según patrocinadores adicionales.
                  </p>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'talleres' && (
          <div>
            <section className="mb-16">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Talleres <span className="text-primary">Previos</span></h2>
                
                <div className="bg-blue-50 p-8 rounded-xl mb-10">
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-blue-100 rounded-full flex items-center justify-center text-3xl">
                      📚
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-3">Talleres y Charlas Preparatorias</h3>
                      <p className="text-lg text-gray-700 mb-4">
                        Para que todos los participantes lleguen preparados y motivados a la Hackathon, 
                        organizaremos una serie de talleres técnicos gratuitos sobre herramientas clave de IA. 
                        Estos espacios servirán para:
                      </p>
                      <ul className="space-y-2 mb-0">
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-blue-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Nivelar conocimientos en inteligencia artificial.</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-blue-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Familiarizarse con las tecnologías de Google (Gemini, Vertex AI, AI Studio).</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 text-blue-500 mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Definir ideas de proyectos y formar equipos sólidos.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="mb-16">
                  <h3 className="text-2xl font-bold mb-6">Agenda de Talleres Previos</h3>
                  
                  <div className="overflow-hidden rounded-xl shadow-lg border border-gray-100">
                    <div className="bg-white p-4 border-b sticky top-0">
                      <div className="grid grid-cols-6 font-semibold text-gray-700">
                        <div className="col-span-1">Fecha</div>
                        <div className="col-span-1">Taller</div>
                        <div className="col-span-2">Temática</div>
                        <div className="col-span-1">Expositor(es)</div>
                        <div className="col-span-1">Modalidad</div>
                      </div>
                    </div>
                    
                    <div className="bg-white divide-y">
                      <div className="p-4 hover:bg-gray-50 transition-colors">
                        <div className="grid grid-cols-6 items-center">
                          <div className="col-span-1">
                            <div className="bg-blue-100 text-blue-800 font-medium px-3 py-1 rounded text-sm text-center">
                              10 Abril
                            </div>
                          </div>
                          <div className="col-span-1 font-semibold">Introducción a IA Generativa</div>
                          <div className="col-span-2">
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Conceptos básicos de IA y machine learning</li>
                              <li>• Casos de uso en industrias</li>
                            </ul>
                          </div>
                          <div className="col-span-1 text-sm">
                            <div className="flex items-center">
                              <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-2">
                                <span className="text-xs">AB</span>
                              </div>
                              <span>Alejandro Barrios<br /><span className="text-xs text-gray-500">Google Dev</span></span>
                            </div>
                          </div>
                          <div className="col-span-1">
                            <span className="inline-block bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded-full">
                              Virtual
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-4 hover:bg-gray-50 transition-colors">
                        <div className="grid grid-cols-6 items-center">
                          <div className="col-span-1">
                            <div className="bg-blue-100 text-blue-800 font-medium px-3 py-1 rounded text-sm text-center">
                              17 Abril
                            </div>
                          </div>
                          <div className="col-span-1 font-semibold">Gemini: Potencia tus Proyectos</div>
                          <div className="col-span-2">
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Uso de modelos Gemini en aplicaciones</li>
                              <li>• Demo práctica con API</li>
                            </ul>
                          </div>
                          <div className="col-span-1 text-sm">
                            <div className="flex items-center">
                              <div className="w-8 h-8 bg-blue-200 rounded-full flex items-center justify-center mr-2">
                                <span className="text-xs">MC</span>
                              </div>
                              <span>María Campos<br /><span className="text-xs text-gray-500">Google Dev Expert</span></span>
                            </div>
                          </div>
                          <div className="col-span-1">
                            <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                              Presencial
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-4 hover:bg-gray-50 transition-colors">
                        <div className="grid grid-cols-6 items-center">
                          <div className="col-span-1">
                            <div className="bg-blue-100 text-blue-800 font-medium px-3 py-1 rounded text-sm text-center">
                              24 Abril
                            </div>
                          </div>
                          <div className="col-span-1 font-semibold">Vertex AI & Cloud</div>
                          <div className="col-span-2">
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Entrenamiento y despliegue de modelos</li>
                              <li>• Uso de créditos gratuitos para hackathon</li>
                            </ul>
                          </div>
                          <div className="col-span-1 text-sm">
                            <div className="flex items-center">
                              <div className="w-8 h-8 bg-green-200 rounded-full flex items-center justify-center mr-2">
                                <span className="text-xs">CR</span>
                              </div>
                              <span>Carlos Rojas<br /><span className="text-xs text-gray-500">Cloud Architect</span></span>
                            </div>
                          </div>
                          <div className="col-span-1">
                            <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                              Híbrido
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-4 hover:bg-gray-50 transition-colors">
                        <div className="grid grid-cols-6 items-center">
                          <div className="col-span-1">
                            <div className="bg-blue-100 text-blue-800 font-medium px-3 py-1 rounded text-sm text-center">
                              8 Mayo
                            </div>
                          </div>
                          <div className="col-span-1 font-semibold">Pitch Perfect: Presenta tu Idea</div>
                          <div className="col-span-2">
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Cómo estructurar un proyecto ganador</li>
                              <li>• Tips para exponer frente al jurado</li>
                            </ul>
                          </div>
                          <div className="col-span-1 text-sm">
                            <div className="flex items-center">
                              <div className="w-8 h-8 bg-yellow-200 rounded-full flex items-center justify-center mr-2">
                                <span className="text-xs">LL</span>
                              </div>
                              <span>Laura López<br /><span className="text-xs text-gray-500">Mentor de startups</span></span>
                            </div>
                          </div>
                          <div className="col-span-1">
                            <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                              Presencial
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 p-4 border-t text-center text-sm">
                      <p className="text-gray-600">Todos los talleres serán grabados y compartidos con los inscritos.</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
                  <div className="bg-white shadow-md rounded-xl overflow-hidden">
                    <div className="bg-primary text-white p-6">
                      <h3 className="text-xl font-bold mb-1">Requisitos Técnicos</h3>
                      <p className="text-white/80">Lo que necesitas para los talleres previos</p>
                    </div>
                    <div className="p-6">
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 text-primary">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div>
                            <p className="font-semibold mb-1">Laptop obligatoria</p>
                            <p className="text-sm text-gray-600">Con al menos 8GB de RAM</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 text-primary">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.14 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                            </svg>
                          </div>
                          <div>
                            <p className="font-semibold mb-1">Conexión estable a internet</p>
                            <p className="text-sm text-gray-600">Para talleres virtuales/híbridos</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mr-3 text-primary">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <div>
                            <p className="font-semibold mb-1">Cuenta de Google</p>
                            <p className="text-sm text-gray-600">Necesaria para acceder a AI Studio y Google Cloud</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div className="bg-white shadow-md rounded-xl overflow-hidden">
                    <div className="bg-accent text-white p-6">
                      <h3 className="text-xl font-bold mb-1">Para el evento principal</h3>
                      <p className="text-white/80">Lo que necesitas para la Hackathon</p>
                    </div>
                    <div className="p-6">
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <div className="flex-shrink-0 w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center mr-3 text-accent">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                          </div>
                          <div>
                            <p className="font-semibold mb-1">Equipo propio</p>
                            <p className="text-sm text-gray-600">No se proveerán computadoras</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center mr-3 text-accent">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
                            </svg>
                          </div>
                          <div>
                            <p className="font-semibold mb-1">Cuenta en Google Cloud</p>
                            <p className="text-sm text-gray-600">Se asignarán créditos gratuitos a equipos seleccionados</p>
                          </div>
                        </li>
                        <li className="flex items-start">
                          <div className="flex-shrink-0 w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center mr-3 text-accent">
                            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                            </svg>
                          </div>
                          <div>
                            <p className="font-semibold mb-1">Conocimientos básicos de Python</p>
                            <p className="text-sm text-gray-600">Recomendado, pero no excluyente</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 rounded-xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">¿Cómo Prepararse?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white p-5 rounded-lg shadow-sm text-center">
                      <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-600">
                        <span className="text-xl">1</span>
                      </div>
                      <h4 className="font-semibold mb-2">Inscríbete a los talleres</h4>
                      <p className="text-sm text-gray-600">Cupos limitados, ¡no esperes!</p>
                    </div>
                    <div className="bg-white p-5 rounded-lg shadow-sm text-center">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
                        <span className="text-xl">2</span>
                      </div>
                      <h4 className="font-semibold mb-2">Revisa los materiales</h4>
                      <p className="text-sm text-gray-600">Que enviaremos después de cada sesión</p>
                    </div>
                    <div className="bg-white p-5 rounded-lg shadow-sm text-center">
                      <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4 text-purple-600">
                        <span className="text-xl">3</span>
                      </div>
                      <h4 className="font-semibold mb-2">Forma tu equipo</h4>
                      <p className="text-sm text-gray-600">O únete a uno en el evento</p>
                    </div>
                    <div className="bg-white p-5 rounded-lg shadow-sm text-center">
                      <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-600">
                        <span className="text-xl">4</span>
                      </div>
                      <h4 className="font-semibold mb-2">Ten listas tus herramientas</h4>
                      <p className="text-sm text-gray-600">Instala Python y explora AI Studio</p>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-lg">
                    <div className="flex">
                      <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="text-yellow-700 font-medium">
                          Los equipos que asistan a al menos 2 talleres tendrán prioridad en mentorías personalizadas durante la hackathon.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}

        {activeTab === 'organizadores' && (
          <div>
            <section className="mb-16">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Equipo de <span className="text-primary">Organización</span></h2>
                
                <div className="bg-white shadow-md rounded-xl overflow-hidden mb-12">
                  <div className="bg-gradient-to-r from-primary to-blue-600 p-8 text-white">
                    <h3 className="text-2xl font-bold mb-3">Organizadores Principales</h3>
                    <p className="text-white/90">
                      El evento es liderado por Google Developer Groups (GDG) Bolivia, una comunidad de 
                      desarrolladores apasionados por la tecnología, con el apoyo de voluntarios y colaboradores clave.
                    </p>
                  </div>
                  
                  <div className="p-8">
                    <h4 className="text-xl font-bold mb-6">Coordinación General</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                      <div className="flex items-center">
                        <div className="w-16 h-16 bg-blue-100 rounded-full overflow-hidden mr-4 flex items-center justify-center text-2xl">
                          👨‍💻
                        </div>
                        <div>
                          <p className="font-semibold text-lg">Marcos Rodríguez</p>
                          <p className="text-primary">Líder GDG Santa Cruz</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-16 h-16 bg-green-100 rounded-full overflow-hidden mr-4 flex items-center justify-center text-2xl">
                          👩‍💻
                        </div>
                        <div>
                          <p className="font-semibold text-lg">Carolina Flores</p>
                          <p className="text-primary">Coordinadora de Logística</p>
                        </div>
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-bold mb-6">Mentores & Jurados</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                      <div className="flex items-start">
                        <div className="w-16 h-16 bg-purple-100 rounded-full overflow-hidden mr-4 flex items-center justify-center text-2xl mt-1">
                          👨‍🏫
                        </div>
                        <div>
                          <p className="font-semibold text-lg">Juan Pérez</p>
                          <p className="text-primary mb-1">Especialista en IA (Google Developer Expert)</p>
                          <p className="text-sm text-gray-600">Con más de 10 años de experiencia en desarrollo de soluciones con inteligencia artificial.</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-16 h-16 bg-yellow-100 rounded-full overflow-hidden mr-4 flex items-center justify-center text-2xl mt-1">
                          👩‍🔬
                        </div>
                        <div>
                          <p className="font-semibold text-lg">Ana Torres</p>
                          <p className="text-primary mb-1">Científica de Datos en TechBiz</p>
                          <p className="text-sm text-gray-600">Especialista en modelos predictivos y desarrollo de algoritmos para empresas.</p>
                        </div>
                      </div>
                    </div>
                    
                    <h4 className="text-xl font-bold mb-6">Logística y Comunicación</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="flex items-center">
                        <div className="w-16 h-16 bg-red-100 rounded-full overflow-hidden mr-4 flex items-center justify-center text-2xl">
                          📱
                        </div>
                        <div>
                          <p className="font-semibold text-lg">Diego Montaño</p>
                          <p className="text-primary">Gestión de Redes Sociales</p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <div className="w-16 h-16 bg-indigo-100 rounded-full overflow-hidden mr-4 flex items-center justify-center text-2xl">
                          🤝
                        </div>
                        <div>
                          <p className="font-semibold text-lg">Patricia Mendoza</p>
                          <p className="text-primary">Coordinación de Patrocinios</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-8 text-center">
                      <p className="text-gray-500 italic">Lista completa de equipo se publicará cerca al evento</p>
                    </div>
                  </div>
                </div>
                
                <div className="mb-12">
                  <h3 className="text-2xl font-bold mb-6">¿Qué es GDG Bolivia?</h3>
                  <div className="bg-gray-50 rounded-xl p-8">
                    <div className="flex items-start mb-6">
                      <div className="flex-shrink-0 w-20 h-20 bg-white rounded-xl shadow-md flex items-center justify-center mr-6">
                        <svg className="w-12 h-12" viewBox="0 0 48 48">
                          <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
                          <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
                          <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
                          <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
                        </svg>
                      </div>
                      
                      <div>
                        <p className="text-lg text-gray-700 mb-3">
                          Google Developer Groups (GDG) es una comunidad global patrocinada por Google, que fomenta 
                          el aprendizaje, la innovación y la aplicación de tecnologías emergentes. 
                        </p>
                        <p className="text-lg text-gray-700">
                          En Bolivia, GDG está presente en 6 ciudades (Santa Cruz, La Paz, Cochabamba, El Alto, 
                          Sucre y Tarija), organizando actividades como:
                        </p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                      <div className="bg-white p-5 rounded-lg shadow-sm">
                        <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center mb-3 text-white text-sm">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                          </svg>
                        </div>
                        <h4 className="font-semibold mb-2">Hackathones</h4>
                        <p className="text-sm text-gray-600">Build With AI, Solution Challenge y otros eventos de creación</p>
                      </div>
                      <div className="bg-white p-5 rounded-lg shadow-sm">
                        <div className="w-10 h-10 bg-secondary rounded-full flex items-center justify-center mb-3 text-white text-sm">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                          </svg>
                        </div>
                        <h4 className="font-semibold mb-2">Talleres técnicos</h4>
                        <p className="text-sm text-gray-600">Android, Flutter, Cloud, IA y otras tecnologías</p>
                      </div>
                      <div className="bg-white p-5 rounded-lg shadow-sm">
                        <div className="w-10 h-10 bg-tertiary rounded-full flex items-center justify-center mb-3 text-white text-sm">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                        <h4 className="font-semibold mb-2">Charlas con expertos</h4>
                        <p className="text-sm text-gray-600">Google I/O Extended, DevFest y conferencias</p>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg mb-6">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 text-blue-600">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-semibold">Misión:</p>
                          <p className="text-gray-700 italic">
                            "Empoderar a desarrolladores, emprendedores y estudiantes bolivianos mediante la tecnología, 
                            creando puentes entre la academia y la industria."
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <h4 className="font-semibold mb-4">Eventos Anteriores</h4>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-start">
                        <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                        <div>
                          <p className="font-medium">Build With AI 2024 (La Paz)</p>
                          <p className="text-sm text-gray-600">200+ participantes, 15 proyectos con IA</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                        <div>
                          <p className="font-medium">DevFest 2023 (Cochabamba)</p>
                          <p className="text-sm text-gray-600">300+ asistentes, 20 charlas técnicas</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="inline-block w-3 h-3 bg-blue-500 rounded-full mt-1.5 mr-2"></span>
                        <div>
                          <p className="font-medium">Women Techmakers (Ediciones anuales)</p>
                          <p className="text-sm text-gray-600">Promoción de mujeres en STEM</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl p-8">
                  <h3 className="text-2xl font-bold mb-6 text-center">¿Quieres Unirte al GDG?</h3>
                  <p className="text-lg text-gray-700 text-center mb-6">
                    ¡Puedes ser parte como voluntario, mentor o participante en futuros eventos!
                  </p>
                  
                  <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <a 
                      href="https://gdgsantacruz.org" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 bg-white px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-all"
                    >
                      <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                      Sitio web oficial
                    </a>
                    
                    <div className="flex gap-3">
                      <a 
                        href="https://twitter.com/gdgsantacruz" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-white px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-all"
                      >
                        <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                        Twitter
                      </a>
                      <a 
                        href="https://www.facebook.com/gdgsantacruz" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-white px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-all"
                      >
                        <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                        Facebook
                      </a>
                      <a 
                        href="https://www.linkedin.com/company/gdgsantacruz" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 bg-white px-6 py-3 rounded-lg shadow-sm hover:shadow-md transition-all"
                      >
                        <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                        LinkedIn
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
        
        {activeTab === 'faq' && (
          <div>
            <section className="mb-16">
              <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Preguntas <span className="text-primary">Frecuentes</span></h2>
                
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-white via-primary/5 to-white -z-10"></div>
                  
                  <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
                    <div className="divide-y">
                      {faqs.map((faq, index) => (
                        <div key={index} className="p-6 border-b">
                          <button
                            className="flex justify-between items-center w-full text-left"
                            onClick={() => toggleFaq(index)}
                          >
                            <h3 className="text-lg font-semibold pr-8">{faq.question}</h3>
                            <div className={`transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`}>
                              <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </button>
                          
                          <div className={`mt-3 transition-all duration-300 overflow-hidden ${expandedFaq === index ? 'max-h-60' : 'max-h-0'}`}>
                            <p className="text-gray-600">{faq.answer}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-xl p-6 flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 text-blue-500">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">¿Aún tienes dudas?</h3>
                    <p className="text-gray-700 mb-4">
                      Si no encontraste respuesta a tu pregunta, no dudes en contactarnos:
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <a 
                        href="https://wa.me/59177776666"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                        </svg>
                        WhatsApp
                      </a>
                      <a 
                        href="mailto:contacto@gdgsantacruz.org"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                      >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        Email
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 text-center">
                  <h3 className="text-2xl font-bold mb-6">Enlaces Importantes</h3>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <a href="https://gdgsantacruz.org" target="_blank" rel="noopener noreferrer"
                      className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all"
                    >
                      <svg className="w-8 h-8 text-primary mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                      </svg>
                      <span className="text-sm font-medium">Sitio Web</span>
                    </a>
                    <a href="https://gdg.community.dev/gdg-santa-cruz-bolivia/" target="_blank" rel="noopener noreferrer"
                      className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all"
                    >
                      <svg className="w-8 h-8 text-tertiary mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                      <span className="text-sm font-medium">Comunidad</span>
                    </a>
                    <a href="/registro" 
                      className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all"
                    >
                      <svg className="w-8 h-8 text-secondary mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                      </svg>
                      <span className="text-sm font-medium">Registro</span>
                    </a>
                    <a href="https://twitter.com/hashtag/BuildWithAIBolivia2025" target="_blank" rel="noopener noreferrer"
                      className="flex flex-col items-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-all"
                    >
                      <svg className="w-8 h-8 text-blue-400 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
                      </svg>
                      <span className="text-sm font-medium">#BuildWithAIBolivia2025</span>
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>
        )}
      </div>

      {/* CTA Final - Visible en todas las secciones */}
      <div className="bg-gradient-to-br from-primary to-accent text-white py-20">
        <div className="container-custom mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Construye el futuro con IA</h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto mb-10">
            No pierdas la oportunidad de ser parte del evento de inteligencia artificial 
            más importante de Bolivia. ¡Inscríbete antes del 25 de abril!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/registro" 
              className="bg-white text-primary font-bold px-8 py-4 rounded-lg hover:bg-white/90 transition-all text-lg shadow-lg hover:shadow-xl"
            >
              Inscribirme ahora
            </Link>
            <a 
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white/10 transition-all text-lg"
            >
              Más información
            </a>
          </div>
          
          <div className="mt-10 text-white/60 text-sm">
            <p>Google Developer Groups Santa Cruz - Build with AI 2025</p>
            <p>Universidad Católica Boliviana, Santa Cruz, Bolivia</p>
          </div>
        </div>
      </div>
    </div>
  );
} 