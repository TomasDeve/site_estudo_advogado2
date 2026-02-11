import React from 'react';
import { NavItem, ServiceItem, StatItem, TestimonialItem } from './types';

// Icons as simple SVG components for constant usage
const GavelIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

export const NAV_ITEMS: NavItem[] = [
  { label: 'Início', href: '#home' },
  { label: 'Sobre', href: '#about' },
  { label: 'Áreas de Atuação', href: '#services' },
  { label: 'Depoimentos', href: '#testimonials' },
  { label: 'Contato', href: '#contact' },
];

export const STATS: StatItem[] = [
  { value: '15+', label: 'Anos de Experiência' },
  { value: '850+', label: 'Casos Resolvidos' },
  { value: '98%', label: 'Taxa de Sucesso' },
  { value: 'R$ 12M+', label: 'Recuperados para Clientes' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'civil',
    title: 'Direito Civil',
    description: 'Resolução de conflitos contratuais, indenizações, responsabilidade civil e defesa do consumidor com estratégia e rigor.',
    icon: (
      <svg className="w-10 h-10 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    id: 'family',
    title: 'Direito de Família',
    description: 'Atuação sensível e discreta em divórcios, guarda de filhos, pensão alimentícia e inventários, protegendo o que mais importa.',
    icon: (
      <svg className="w-10 h-10 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    id: 'labor',
    title: 'Direito Trabalhista',
    description: 'Defesa robusta de direitos trabalhistas, reversão de justa causa, rescisão indireta e assessoria preventiva para empresas.',
    icon: (
      <svg className="w-10 h-10 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    id: 'criminal',
    title: 'Direito Criminal',
    description: 'Atuação combativa em inquéritos policiais, processos criminais, habeas corpus e audiências de custódia. Plantão 24h.',
    icon: (
      <svg className="w-10 h-10 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    name: 'Carlos Mendes',
    role: 'Empresário',
    content: 'O Dr. Roberto foi fundamental para salvar minha empresa de um processo trabalhista injusto. Sua atenção aos detalhes e estratégia foram impecáveis.',
    rating: 5,
  },
  {
    id: '2',
    name: 'Mariana Souza',
    role: 'Cliente Civil',
    content: 'Profissionalismo e empatia definem. Fui acolhida em um momento difícil do meu divórcio e me senti protegida durante todo o processo. Recomendo de olhos fechados.',
    rating: 5,
  },
  {
    id: '3',
    name: 'João Pedro',
    role: 'Cliente',
    content: 'Excelente advogado. Transparência total sobre os riscos e possibilidades do caso. O resultado foi melhor do que eu esperava.',
    rating: 5,
  },
];