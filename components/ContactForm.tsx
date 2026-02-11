import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setStatus('success');
    setTimeout(() => setStatus('idle'), 3000);
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
            placeholder="Seu nome"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone / WhatsApp</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
            placeholder="(11) 99999-9999"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all"
          placeholder="seu@email.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Relate seu caso brevemente</label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-gold-500 focus:border-transparent outline-none transition-all resize-none"
          placeholder="Como podemos te ajudar?"
        ></textarea>
      </div>

      <button
        type="submit"
        className="w-full bg-navy-900 text-white font-bold py-4 rounded-sm hover:bg-navy-800 transition-colors shadow-lg uppercase tracking-wider text-sm flex justify-center items-center gap-2"
      >
        {status === 'success' ? (
          <>
            <svg className="w-5 h-5 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Mensagem Enviada!
          </>
        ) : (
          'Enviar Mensagem'
        )}
      </button>
      <p className="text-xs text-gray-500 text-center mt-4">
        Seus dados estão protegidos. Retornaremos em até 24 horas úteis.
      </p>
    </form>
  );
};

export default ContactForm;