import React from 'react';
import { NAV_ITEMS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-navy-950 text-white pt-16 pb-8 border-t border-navy-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Brand Column */}
          <div>
            <a href="#home" className="text-white font-serif text-2xl font-bold tracking-wide flex items-center gap-2 mb-6">
              <span className="text-gold-500 text-3xl">§</span>
              <span>SILVA <span className="text-gold-500 font-light">ADVOCACIA</span></span>
            </a>
            <p className="text-gray-400 leading-relaxed mb-6">
              Defendendo seus direitos com integridade, estratégia e excelência. 
              Soluções jurídicas para os desafios mais complexos.
            </p>
            <div className="flex space-x-4">
              {/* Social Placeholders */}
              <div className="w-10 h-10 bg-navy-800 rounded-full flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-colors cursor-pointer">
                <span className="font-bold">in</span>
              </div>
              <div className="w-10 h-10 bg-navy-800 rounded-full flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-colors cursor-pointer">
                <span className="font-bold">ig</span>
              </div>
              <div className="w-10 h-10 bg-navy-800 rounded-full flex items-center justify-center hover:bg-gold-500 hover:text-navy-900 transition-colors cursor-pointer">
                <span className="font-bold">fb</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-gold-500 font-bold uppercase tracking-wider text-sm mb-6">Navegação Rápida</h3>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.label}>
                  <a href={item.href} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                    <span className="text-gold-500 text-xs">›</span> {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-gold-500 font-bold uppercase tracking-wider text-sm mb-6">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-gold-500 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-400">Av. Paulista, 1000 - Bela Vista<br/>São Paulo - SP, 01310-100</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-6 h-6 text-gold-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-400">(11) 3333-4444</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-6 h-6 text-gold-500 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-400">contato@silvaadvocacia.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Silva Advocacia. Todos os direitos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold-500 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-gold-500 transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;