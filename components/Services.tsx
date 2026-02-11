import React from 'react';
import { SERVICES } from '../constants';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h4 className="text-gold-600 font-bold uppercase tracking-widest text-sm mb-2">Áreas de Atuação</h4>
          <h2 className="text-4xl font-serif font-bold text-navy-900">Como Podemos Ajudar Você</h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white p-8 rounded-sm shadow-sm hover:shadow-xl transition-all duration-300 border-t-4 border-transparent hover:border-gold-500 group"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3 font-serif group-hover:text-gold-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                {service.description}
              </p>
              <a href="#contact" className="inline-block mt-4 text-gold-600 font-bold text-sm hover:text-navy-900 transition-colors">
                Saiba Mais &rarr;
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-navy-900 rounded-sm p-8 md:p-12 text-center md:flex md:justify-between md:items-center shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
          <div className="relative z-10 text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-serif font-bold text-white mb-2">Não encontrou o que procura?</h3>
            <p className="text-gray-400">Entre em contato para uma avaliação personalizada do seu caso.</p>
          </div>
          <div className="relative z-10">
            <a href="#contact" className="inline-block px-8 py-3 bg-gold-500 hover:bg-gold-600 text-navy-900 font-bold rounded-sm transition-colors shadow-lg">
              Fale Conosco Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;