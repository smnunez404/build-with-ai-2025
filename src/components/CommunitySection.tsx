"use client";

import Link from 'next/link';

// Datos de ejemplo para artículos y eventos pasados
const articles = [
  {
    id: 1,
    title: 'Cómo sacarle el máximo provecho a Google Cloud Platform',
    image: 'article1.jpg',
    date: 'Junio 2024',
    link: '#'
  },
  {
    id: 2,
    title: 'Build With AI Bolivia 2025: Todo lo que necesitas saber',
    image: 'article2.jpg',
    date: 'Mayo 2024',
    link: '#'
  },
  {
    id: 3,
    title: 'Recap: International Women Day 2024 - Redefine Possible',
    image: 'article3.jpg',
    date: 'Marzo 2024',
    link: '#'
  },
  {
    id: 4,
    title: 'Introducción a Flutter: Desarrollo multiplataforma con Google',
    image: 'article4.jpg',
    date: 'Febrero 2024',
    link: '#'
  },
  {
    id: 5,
    title: 'DevFest 2023: Lo mejor del evento tecnológico del año',
    image: 'article5.jpg',
    date: 'Diciembre 2023',
    link: '#'
  }
];

const CommunitySection = () => {
  return (
    <div className="container-custom mx-auto">
      <h2 className="section-title">Nuestra comunidad en acción</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Link key={article.id} href={article.link}>
            <div className="card overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full">
              <div className="h-40 bg-gray-200 relative">
                {/* En un proyecto real, aquí iría una imagen real */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center text-gray-500">
                  Imagen del evento
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{article.date}</div>
                <h3 className="text-lg font-semibold hover:text-primary transition-colors">
                  {article.title}
                </h3>
              </div>
            </div>
          </Link>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <Link 
          href="/blog" 
          className="inline-block border border-gray-300 rounded-md px-6 py-3 text-primary font-medium hover:bg-gray-50 transition-colors"
        >
          Ver todos los artículos y eventos
        </Link>
      </div>
      
      <div className="mt-16 bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-8">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 mb-8 md:mb-0 md:pr-8">
            <h3 className="text-2xl font-bold mb-4">¿Quieres unirte a nuestra comunidad?</h3>
            <p className="text-gray-600 mb-6">
              GDG Santa Cruz es un grupo abierto a todas las personas con inquietud de conocer e investigar 
              las tecnologías Google e integrar aplicaciones. Únete a nosotros para aprender, compartir y 
              conectar con otros apasionados por la tecnología.
            </p>
            <Link 
              href="https://gdg.community.dev/gdg-santa-cruz/" 
              target="_blank"
              className="btn-primary inline-block px-6 py-3"
            >
              Unirse al GDG Santa Cruz
            </Link>
          </div>
          <div className="md:w-1/3 flex justify-center">
            <div className="w-40 h-40 rounded-full bg-white flex items-center justify-center shadow-md">
              <span className="text-2xl font-bold text-primary">GDG</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommunitySection; 