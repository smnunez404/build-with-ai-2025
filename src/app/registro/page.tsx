"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function RegistroPage() {
  const [formData, setFormData] = useState({
    nombre: '',
    apellido: '',
    email: '',
    telefono: '',
    ciudad: '',
    ocupacion: '',
    institucion: '',
    experienciaIA: 'principiante',
    tipoRegistro: 'individual',
    nombreEquipo: '',
    miembrosEquipo: '',
    motivacion: '',
    comoEntero: '',
    aceptaPolitica: false
  });

  const [enviando, setEnviando] = useState(false);
  const [mensajeExito, setMensajeExito] = useState('');
  const [mensajeError, setMensajeError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.aceptaPolitica) {
      setMensajeError('Debes aceptar la política de privacidad para continuar');
      return;
    }
    
    setEnviando(true);
    
    // Simulación de envío de formulario
    setTimeout(() => {
      setEnviando(false);
      setMensajeExito('¡Registro completado! Te hemos enviado un correo con los detalles.');
      
      // Reiniciar el formulario
      setFormData({
        nombre: '',
        apellido: '',
        email: '',
        telefono: '',
        ciudad: '',
        ocupacion: '',
        institucion: '',
        experienciaIA: 'principiante',
        tipoRegistro: 'individual',
        nombreEquipo: '',
        miembrosEquipo: '',
        motivacion: '',
        comoEntero: '',
        aceptaPolitica: false
      });
    }, 1500);
  };

  return (
    <div className="container-custom mx-auto py-12">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Registro para Build with AI Bolivia 2025</h1>
          <p className="text-gray-600">
            Llena el siguiente formulario para asegurar tu lugar en la hackathon.
            El registro cierra el 25 de abril o hasta agotar cupos.
          </p>
        </div>
        
        {mensajeExito ? (
          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-lg mb-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-lg font-medium text-green-800">{mensajeExito}</p>
                <div className="mt-4 flex">
                  <Link href="/buildwithai" className="text-green-700 font-medium hover:underline">
                    Volver a la página del evento →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8">
            {mensajeError && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6 rounded">
                <p className="text-red-700">{mensajeError}</p>
              </div>
            )}
            
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4 pb-2 border-b">Información Personal</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="nombre" className="block text-gray-700 mb-2">Nombre <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="apellido" className="block text-gray-700 mb-2">Apellido <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    id="apellido"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">Email <span className="text-red-500">*</span></label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="telefono" className="block text-gray-700 mb-2">Teléfono <span className="text-red-500">*</span></label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="ciudad" className="block text-gray-700 mb-2">Ciudad <span className="text-red-500">*</span></label>
                  <input
                    type="text"
                    id="ciudad"
                    name="ciudad"
                    value={formData.ciudad}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="ocupacion" className="block text-gray-700 mb-2">Ocupación <span className="text-red-500">*</span></label>
                  <select
                    id="ocupacion"
                    name="ocupacion"
                    value={formData.ocupacion}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="estudiante">Estudiante</option>
                    <option value="profesional">Profesional</option>
                    <option value="docente">Docente</option>
                    <option value="emprendedor">Emprendedor</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="institucion" className="block text-gray-700 mb-2">Institución/Empresa</label>
                  <input
                    type="text"
                    id="institucion"
                    name="institucion"
                    value={formData.institucion}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="experienciaIA" className="block text-gray-700 mb-2">Experiencia en IA <span className="text-red-500">*</span></label>
                  <select
                    id="experienciaIA"
                    name="experienciaIA"
                    value={formData.experienciaIA}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="principiante">Principiante</option>
                    <option value="intermedio">Intermedio</option>
                    <option value="avanzado">Avanzado</option>
                  </select>
                </div>
              </div>
            </div>
            
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4 pb-2 border-b">Información de Participación</h2>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2">Tipo de registro <span className="text-red-500">*</span></label>
                <div className="flex space-x-4">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="tipoRegistro"
                      value="individual"
                      checked={formData.tipoRegistro === 'individual'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Individual
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="tipoRegistro"
                      value="equipo"
                      checked={formData.tipoRegistro === 'equipo'}
                      onChange={handleChange}
                      className="mr-2"
                    />
                    Con equipo
                  </label>
                </div>
              </div>
              
              {formData.tipoRegistro === 'equipo' && (
                <div className="grid grid-cols-1 gap-6 mb-4">
                  <div>
                    <label htmlFor="nombreEquipo" className="block text-gray-700 mb-2">Nombre del equipo <span className="text-red-500">*</span></label>
                    <input
                      type="text"
                      id="nombreEquipo"
                      name="nombreEquipo"
                      value={formData.nombreEquipo}
                      onChange={handleChange}
                      required={formData.tipoRegistro === 'equipo'}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label htmlFor="miembrosEquipo" className="block text-gray-700 mb-2">
                      Miembros del equipo (nombres y emails, separados por comas) <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="miembrosEquipo"
                      name="miembrosEquipo"
                      value={formData.miembrosEquipo}
                      onChange={handleChange}
                      required={formData.tipoRegistro === 'equipo'}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Ej: Juan Pérez (juan@email.com), María López (maria@email.com), ..."
                    ></textarea>
                  </div>
                </div>
              )}
              
              <div>
                <label htmlFor="motivacion" className="block text-gray-700 mb-2">
                  ¿Por qué quieres participar en Build with AI? <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="motivacion"
                  name="motivacion"
                  value={formData.motivacion}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                ></textarea>
              </div>
            </div>
            
            <div className="mb-8">
              <label htmlFor="comoEntero" className="block text-gray-700 mb-2">¿Cómo te enteraste del evento?</label>
              <select
                id="comoEntero"
                name="comoEntero"
                value={formData.comoEntero}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Selecciona una opción</option>
                <option value="redesSociales">Redes sociales</option>
                <option value="amigos">Amigos/Conocidos</option>
                <option value="universidad">Universidad</option>
                <option value="trabajo">Trabajo</option>
                <option value="otro">Otro</option>
              </select>
            </div>
            
            <div className="mb-8">
              <label className="flex items-start">
                <input
                  type="checkbox"
                  name="aceptaPolitica"
                  checked={formData.aceptaPolitica}
                  onChange={handleChange}
                  required
                  className="mt-1 mr-2"
                />
                <span className="text-gray-700">
                  Acepto la <Link href="/privacidad" className="text-primary hover:underline">política de privacidad</Link> y que mis
                  datos sean utilizados para comunicaciones relacionadas con el evento. <span className="text-red-500">*</span>
                </span>
              </label>
            </div>
            
            <div className="flex justify-end">
              <button
                type="submit"
                className="btn-primary px-8 py-3"
                disabled={enviando}
              >
                {enviando ? 'Enviando...' : 'Enviar registro'}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
} 