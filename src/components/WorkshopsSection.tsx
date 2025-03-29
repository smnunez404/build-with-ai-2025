"use client";

import Link from 'next/link';

// Datos de ejemplo para talleres
const workshops = [
  {
    id: 1,
    title: 'Taller de Flutter para Principiantes',
    date: 'Agosto 15, 2024',
    status: 'PRINCIPIANTES',
    badgeColor: 'bg-tertiary text-white',
    link: '#'
  },
  {
    id: 2,
    title: 'Codelab: Introducción a Firebase',
    date: 'Agosto 22, 2024',
    status: 'ONLINE',
    badgeColor: 'bg-primary text-white',
    link: '#'
  },
  {
    id: 3,
    title: 'Desarrollo Web con Angular y Google Cloud',
    date: 'Septiembre 5, 2024',
    status: 'AVANZADO',
    badgeColor: 'bg-secondary text-white',
    link: '#'
  },
  {
    id: 4,
    title: 'Machine Learning con TensorFlow',
    date: 'Septiembre 12, 2024',
    status: 'INTERMEDIOS',
    badgeColor: 'bg-accent text-black',
    link: '#'
  }
];

const WorkshopsSection = () => {
  return (
    <div className="container-custom mx-auto">
      <h2 className="section-title">Próximos talleres & codelabs</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {workshops.map((workshop) => (
          <div key={workshop.id} className="card hover:shadow-lg transition-shadow duration-300">
            <div className="p-6">
              <span className={`event-badge ${workshop.badgeColor} mb-4`}>
                {workshop.status}
              </span>
              <h3 className="text-lg font-semibold mb-2">{workshop.title}</h3>
              <p className="text-gray-600 mb-4">{workshop.date}</p>
              <Link 
                href={workshop.link}
                className="text-primary font-medium hover:underline"
              >
                Más información
              </Link>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center">
        <Link 
          href="/talleres" 
          className="inline-block border border-gray-300 rounded-md px-6 py-3 text-primary font-medium hover:bg-gray-50 transition-colors"
        >
          Ver todos los talleres
        </Link>
      </div>
    </div>
  );
};

export default WorkshopsSection; 