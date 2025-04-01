"use client";

import { useState } from 'react';

export default function FAQSection() {
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
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Preguntas Frecuentes</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className={`bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 ${expandedFaq === index ? 'shadow-md' : ''}`}
          >
            <button 
              onClick={() => toggleFaq(index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center font-medium hover:bg-gray-50 transition-colors"
            >
              <span>{faq.question}</span>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${expandedFaq === index ? 'transform rotate-180' : ''}`} 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div 
              className={`overflow-hidden transition-all duration-300 ${expandedFaq === index ? 'max-h-60' : 'max-h-0'}`}
            >
              <div className="px-6 pb-4 text-gray-600">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 