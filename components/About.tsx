import React from 'react';
import { STATS } from '../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Image Side */}
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-gold-500"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-gold-500"></div>
            <img
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              alt="Dr. Roberto Silva"
              className="w-full h-auto rounded-sm shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
            />
            {/* Quote Box */}
            <div className="absolute bottom-8 left-8 right-8 bg-white p-6 shadow-xl z-20 border-l-4 border-navy-900 hidden md:block">
              <p className="text-navy-800 font-serif italic text-lg">
                "A verdadeira justiça é alcançada quando a dedicação técnica encontra a paixão pela defesa dos direitos."
              </p>
              <p className="mt-2 text-gold-600 font-bold text-sm uppercase tracking-wider">— Dr. Roberto Silva</p>
            </div>
          </div>

          {/* Content Side */}
          <div>
            <h4 className="text-gold-600 font-bold uppercase tracking-widest text-sm mb-2">Sobre o Escritório</h4>
            <h2 className="text-4xl font-serif font-bold text-navy-900 mb-6">Tradição, Estratégia e Resultados.</h2>
            
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Fundado há mais de 15 anos, o escritório <strong>Silva Advocacia</strong> se consolidou como uma referência em excelência jurídica.
              Nossa abordagem combina o conhecimento profundo da lei com uma visão estratégica moderna, focada em resolver os problemas
              dos nossos clientes da forma mais eficiente e vantajosa possível.
            </p>
            
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Acreditamos que cada caso é único e merece uma dedicação exclusiva. Seja na esfera civil, trabalhista ou criminal,
              nossa equipe está preparada para lutar incansavelmente pelos seus interesses.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              {STATS.map((stat, index) => (
                <div key={index} className="border-l-2 border-gold-500 pl-4">
                  <span className="block text-3xl font-bold text-navy-900">{stat.value}</span>
                  <span className="text-sm text-gray-500 uppercase tracking-wide">{stat.label}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-10">
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/f6/Assinatura_exemplo.svg" alt="Assinatura" className="h-16 opacity-70" />
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default About;