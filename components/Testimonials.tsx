import React from 'react';
import { TESTIMONIALS } from '../constants';

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-20 bg-navy-900 text-white relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
         <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full">
            <path d="M0 100 L100 0 L100 100 Z" fill="white" />
         </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h4 className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-2">Depoimentos</h4>
          <h2 className="text-4xl font-serif font-bold">O Que Nossos Clientes Dizem</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-navy-800 p-8 rounded-sm shadow-lg border border-navy-700 relative">
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-2 text-gold-500 opacity-20">
                <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21L14.017 18C14.017 16.096 15.321 14.553 17.241 14.421C18.291 14.349 18.949 13.918 19.167 13.125C19.262 12.78 19.102 12.428 18.736 12.23C18.571 12.14 18.397 12.094 18.223 12.094C16.892 12.094 15.688 11.458 14.997 10.23C14.303 9 14.414 7.424 15.289 6.29C15.686 5.776 16.208 5.378 16.804 5.122C17.26 4.925 17.755 4.823 18.252 4.823C19.977 4.823 21.381 6.227 21.381 7.952C21.381 8.875 20.953 9.753 20.207 10.334C20.697 11.231 20.941 12.247 20.941 13.279C20.941 17.537 17.838 21 14.017 21ZM6.195 21L6.195 18C6.195 16.096 7.499 14.553 9.419 14.421C10.469 14.349 11.127 13.918 11.345 13.125C11.44 12.78 11.28 12.428 10.914 12.23C10.749 12.14 10.575 12.094 10.401 12.094C9.07 12.094 7.866 11.458 7.175 10.23C6.481 9 6.592 7.424 7.467 6.29C7.864 5.776 8.386 5.378 8.982 5.122C9.438 4.925 9.933 4.823 10.43 4.823C12.155 4.823 13.559 6.227 13.559 7.952C13.559 8.875 13.131 9.753 12.385 10.334C12.875 11.231 13.119 12.247 13.119 13.279C13.119 17.537 10.016 21 6.195 21Z" />
                </svg>
              </div>

              <div className="flex text-gold-500 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-gray-300 italic mb-6 leading-relaxed">"{testimonial.content}"</p>
              
              <div className="flex items-center">
                <div className="ml-0">
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-gold-500 text-sm uppercase tracking-wide">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;