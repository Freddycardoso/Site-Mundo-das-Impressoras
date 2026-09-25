import React from 'react';

interface CategoryVisual3DProps {
  type: 'toner' | 'cartridge' | 'thermal' | 'multifunctional' | 'parts' | 'paper';
  accent: 'cyan' | 'emerald' | 'amber' | 'blue' | 'indigo' | 'purple';
}

export const CategoryVisual3D: React.FC<CategoryVisual3DProps> = ({ type }) => {
  const imageUrls = {
    toner: '/images/toners.jpg',
    cartridge: '/images/tintas.png',
    thermal: '/images/termicas.jpg',
    multifunctional: '/images/multifuncionais.png',
    parts: '/images/pecas.jpg',
    paper: '/images/bobinas.jpg',
  };

  return (
    <div className="relative w-full h-48 sm:h-52 overflow-hidden rounded-xl bg-slate-100 group">
      <img 
        src={imageUrls[type]} 
        alt={`Categoria ${type}`}
        loading="lazy"
        decoding="async"
        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
      />
      
      {/* Subtle overlay for contrast */}
      <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Floating Category Spec Dot */}
      <div className="absolute bottom-2.5 right-3 text-[11px] font-medium tracking-tight text-slate-700 bg-white/90 px-2 py-0.5 rounded border border-slate-200 backdrop-blur-sm shadow-sm">
        Passos · Pronta Entrega
      </div>
    </div>
  );
};
