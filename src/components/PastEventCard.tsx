"use client";

import Link from 'next/link';

type PastEventProps = {
  title: string;
  date: string;
  location: string;
  description: string;
  image?: string;
  slug: string;
};

const PastEventCard = ({ title, date, location, description, image, slug }: PastEventProps) => {
  return (
    <div className="card overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-40 bg-gray-200 relative">
        {/* En un proyecto real, aquí iría una imagen real del evento */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
          <span className="text-xl text-primary font-bold">{title.split(' ')[0]}</span>
        </div>
      </div>
      <div className="p-6">
        <span className="inline-block px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs mb-3">
          EVENTO PASADO
        </span>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <div className="flex flex-col text-sm text-gray-600 mb-4">
          <span className="mb-1">📅 {date}</span>
          <span>📍 {location}</span>
        </div>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        <Link 
          href={`/eventos/${slug}`}
          className="text-primary font-medium hover:underline"
        >
          Ver resumen
        </Link>
      </div>
    </div>
  );
};

export default PastEventCard; 