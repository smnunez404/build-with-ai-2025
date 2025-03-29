"use client";

import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-gray-100 pt-16 pb-24">
      <div className="container-custom mx-auto">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Comunidad de 
              <span className="text-primary"> Desarrolladores Google</span>
            </h1>
            <p className="text-gray-600 text-lg mb-8 max-w-lg">
              GDG Santa Cruz es una comunidad creada para compartir conocimientos y 
              desarrollar tecnologías Google en aplicaciones móviles, empresariales, 
              sociales, web o tecnología emergente o disruptiva.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="btn-primary px-8 py-3 text-lg">
                Próximo DevFest
              </button>
              <button className="border border-gray-300 px-8 py-3 rounded-md text-lg hover:bg-gray-50 transition-colors">
                Unirse a la comunidad
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="relative h-[400px] w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-100 to-green-100 rounded-2xl transform rotate-3 shadow-lg"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px]">
                  {/* En un proyecto real, aquí iría una imagen real del logo de GDG Santa Cruz */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-green-200 rounded-xl shadow-md flex items-center justify-center">
                    <span className="text-xl text-primary font-bold">GDG Santa Cruz</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 