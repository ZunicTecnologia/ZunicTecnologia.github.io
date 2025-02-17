import React, { useState, useEffect } from 'react';
import { MessageCircle, Code, Globe, Mail, Github, ChevronDown, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-xl font-bold">Zunic Tecnología</h1>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <button onClick={() => scrollToSection('sobre-mi')} className="text-gray-300 hover:text-white transition-colors">
                Sobre Mí
              </button>
              <button onClick={() => scrollToSection('servicios')} className="text-gray-300 hover:text-white transition-colors">
                Servicios
              </button>
              <button onClick={() => scrollToSection('contacto')} className="text-gray-300 hover:text-white transition-colors">
                Contacto
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-gray-300 hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-sm">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('sobre-mi')}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
              >
                Sobre Mí
              </button>
              <button
                onClick={() => scrollToSection('servicios')}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection('contacto')}
                className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-gray-700 rounded-md"
              >
                Contacto
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <header className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-600/20 to-gray-900/50 z-10"></div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center bg-no-repeat opacity-20"></div>
        
        <div className="container mx-auto px-4 text-center relative z-20">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            Zunic Tecnología
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Desarrollo de páginas web estáticas profesionales sin costos mensuales
          </p>
          <button
            onClick={() => scrollToSection('servicios')}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full flex items-center mx-auto gap-2 transform hover:scale-105 transition-all duration-300"
          >
            Descubre nuestros servicios
            <ChevronDown size={20} />
          </button>
        </div>
      </header>

      {/* About Section */}
      <section id="sobre-mi" className="py-20 relative">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Sobre Mí
          </h2>
          <div className="max-w-3xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-700">
              <p className="text-gray-300 mb-6 leading-relaxed">
                Soy un desarrollador web especializado en la creación de páginas web estáticas modernas y eficientes. 
                Mi enfoque se centra en proporcionar soluciones web que no requieren costos mensuales de hosting,
                aprovechando la potencia de GitHub Pages.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Cada proyecto es una oportunidad para crear algo único y memorable, 
                utilizando las últimas tecnologías y mejores prácticas de desarrollo web.
                Mi objetivo es ayudarte a establecer una presencia en línea profesional sin complicaciones ni gastos recurrentes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-20 bg-gray-800/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Servicios</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-700 transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Globe size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Páginas Web Estáticas</h3>
              <p className="text-gray-300">
                Desarrollo de sitios web optimizados y responsivos, alojados gratuitamente en GitHub Pages.
                Sin costos mensuales de hosting ni dominio.
              </p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-700 transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Code size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Desarrollo Frontend</h3>
              <p className="text-gray-300">
                Implementación de diseños modernos y responsivos utilizando las últimas tecnologías web.
                Experiencias de usuario excepcionales en todos los dispositivos.
              </p>
            </div>
            
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-700 transform hover:scale-105 transition-all duration-300">
              <div className="bg-gradient-to-br from-blue-500 to-blue-700 w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Github size={28} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Despliegue en GitHub</h3>
              <p className="text-gray-300">
                Configuración y despliegue profesional de tu sitio web en GitHub Pages.
                Mantenimiento y actualizaciones sin costos adicionales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Contacto</h2>
          <div className="max-w-lg mx-auto bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-700">
            <div className="flex flex-col items-center gap-6">
              <p className="text-gray-300 text-center mb-4">
                ¿Listo para dar el siguiente paso? Contáctame para discutir tu proyecto
                y crear una presencia web excepcional.
              </p>
              <a
                href="https://wa.me/tu-numero"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl flex items-center justify-center gap-2 transform hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <MessageCircle size={24} />
                Contactar por WhatsApp
              </a>
              <a
                href="mailto:tu-email@ejemplo.com"
                className="text-gray-300 hover:text-white flex items-center gap-2 transition-colors"
              >
                <Mail size={20} />
                tu-email@ejemplo.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900/80 backdrop-blur-sm py-8 border-t border-gray-800">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Zunic Tecnología. Todos los derechos reservados.</p>
        </div>
      </footer>

      {/* Fixed WhatsApp Button */}
      <a
        href="https://wa.me/tu-numero"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 z-50"
      >
        <MessageCircle size={24} />
      </a>
    </div>
  );
}

export default App;