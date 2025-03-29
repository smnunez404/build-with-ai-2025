"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom mx-auto flex justify-between items-center py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <span className="font-bold text-xl flex items-center">
            <span className="text-primary">GDG</span> Santa Cruz
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/eventos" className="text-gray-700 hover:text-primary transition-colors">Eventos</Link>
          <Link href="/buildwithai" className="text-gray-700 hover:text-primary transition-colors">Build with AI</Link>
          <Link href="/#talleres" className="text-gray-700 hover:text-primary transition-colors">Talleres</Link>
          <Link href="/#comunidad" className="text-gray-700 hover:text-primary transition-colors">Comunidad</Link>
          <Link href="/#sobre-nosotros" className="text-gray-700 hover:text-primary transition-colors">Sobre Nosotros</Link>
        </nav>

        {/* User Profile/Login */}
        <div className="hidden md:flex items-center">
          <Link href="/registro" className="btn-primary">Registrarse</Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menú de navegación"
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            {isMenuOpen 
              ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            }
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md">
          <nav className="flex flex-col space-y-4">
            <Link 
              href="/eventos" 
              className="text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Eventos
            </Link>
            <Link 
              href="/buildwithai" 
              className="text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Build with AI
            </Link>
            <Link 
              href="/#talleres" 
              className="text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Talleres
            </Link>
            <Link 
              href="/#comunidad" 
              className="text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Comunidad
            </Link>
            <Link 
              href="/#sobre-nosotros" 
              className="text-gray-700 hover:text-primary transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre Nosotros
            </Link>
            <Link href="/registro" className="btn-primary w-full">Registrarse</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header; 