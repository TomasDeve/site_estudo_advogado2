import React from 'react';

const Hero: React.FC = () => {
  return (
    <div id="home" className="relative bg-navy-900 h-screen min-h-[600px] flex items-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Escritório de Advocacia"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-900/80 to-navy-900/40"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
        <div className="max-w-3xl">
          <div className="inline-block px-3 py-1 mb-4 border-l-4 border-gold-500 bg-white/10 backdrop-blur-sm">
            <span className="text-gold-400 font-bold uppercase tracking-widest text-sm">Escritório de Advocacia Especializado</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight mb-6 text-shadow-md">
            Defendendo Seus Direitos com <span className="text-gold-500 italic">Excelência</span> e Integridade.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed max-w-2xl border-l-4 border-gray-500 pl-4">
            Comprometidos em entregar resultados jurídicos excepcionais. 
            Soluções estratégicas personalizadas para proteger o que é mais importante para você e sua empresa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="px-8 py-4 bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold text-lg rounded-sm transition-all transform hover:-translate-y-1 shadow-lg text-center flex items-center justify-center gap-2 group"
            >
              Agendar Consulta Gratuita
              <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
            <a
              href="#services"
              className="px-8 py-4 bg-transparent border-2 border-white/30 hover:border-white text-white font-bold text-lg rounded-sm transition-all text-center hover:bg-white/10"
            >
              Conhecer Áreas de Atuação
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <a href="#about" className="text-white/50 hover:text-white transition-colors">
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Hero;