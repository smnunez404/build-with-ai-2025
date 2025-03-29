"use client";

import Link from 'next/link';
import { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí iría la lógica para procesar la suscripción
    console.log('Email suscrito:', email);
    setEmail('');
    alert('¡Gracias por suscribirte!');
  };

  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container-custom mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Newsletter */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center mr-2">
                <span className="text-white text-sm">📧</span>
              </div>
              <h3 className="text-lg font-semibold">Recibe las últimas noticias y actualizaciones sobre GDG Santa Cruz</h3>
            </div>
            <form onSubmit={handleSubmit} className="flex max-w-md">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Tu correo electrónico"
                required
                className="flex-grow px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="bg-primary text-white px-4 py-2 rounded-r-md hover:bg-opacity-90 transition-colors"
              >
                Suscribir
              </button>
            </form>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h4 className="font-semibold mb-4">Eventos</h4>
            <ul className="space-y-2">
              <li><Link href="/eventos" className="text-gray-600 hover:text-primary">Todos los eventos</Link></li>
              <li><Link href="/buildwithai" className="text-gray-600 hover:text-primary">Build with AI 2025</Link></li>
              <li><Link href="/eventos/google-io-2025" className="text-gray-600 hover:text-primary">Google I/O 2025</Link></li>
              <li><Link href="/eventos/devfest-2024" className="text-gray-600 hover:text-primary">DevFest 2024</Link></li>
              <li><Link href="/eventos/io-extended-2024" className="text-gray-600 hover:text-primary">I/O Extended 2024</Link></li>
            </ul>
          </div>

          {/* Comunidad */}
          <div>
            <h4 className="font-semibold mb-4">Comunidad</h4>
            <ul className="space-y-2">
              <li><Link href="/#sobre-nosotros" className="text-gray-600 hover:text-primary">Sobre Nosotros</Link></li>
              <li><Link href="/eventos/iwd-2024" className="text-gray-600 hover:text-primary">Women Techmakers</Link></li>
              <li><Link href="/#patrocinadores" className="text-gray-600 hover:text-primary">Patrocinadores</Link></li>
              <li><Link href="/registro" className="text-gray-600 hover:text-primary">Registro</Link></li>
              <li><Link href="/#comunidad" className="text-gray-600 hover:text-primary">Contacto</Link></li>
            </ul>
          </div>
        </div>

        {/* Pie de página */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} GDG Santa Cruz. Todos los derechos reservados.</p>
          
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="https://twitter.com/gdgsantacruz" target="_blank" className="hover:text-primary">
              <span>Twitter</span>
            </Link>
            <Link href="https://www.linkedin.com/company/gdgsantacruz" target="_blank" className="hover:text-primary">
              <span>LinkedIn</span>
            </Link>
            <Link href="https://www.facebook.com/gdgsantacruz" target="_blank" className="hover:text-primary">
              <span>Facebook</span>
            </Link>
            <Link href="https://www.instagram.com/gdgsantacruz" target="_blank" className="hover:text-primary">
              <span>Instagram</span>
            </Link>
            <Link href="https://www.youtube.com/gdgsantacruz" target="_blank" className="hover:text-primary">
              <span>YouTube</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 