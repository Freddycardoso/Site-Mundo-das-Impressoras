import React, { useState } from 'react';
import { MessageCircle, Check, ArrowUpRight, Search, SlidersHorizontal, Sparkles } from 'lucide-react';
import { CATEGORIES, CategoryItem } from '../data/categories';
import { CategoryVisual3D } from './CategoryVisual3D';
import { getCategoryWhatsAppLink } from '../utils/whatsapp';
import { ModelModal } from './ModelModal';

export const CategoryShowcase: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<CategoryItem | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState<'all' | 'suprimentos' | 'equipamentos' | 'assistencia'>('all');

  const filteredCategories = CATEGORIES.filter((cat) => {
    if (activeFilter === 'suprimentos') return cat.id.includes('toner') || cat.id.includes('cartucho') || cat.id.includes('bobina');
    if (activeFilter === 'equipamentos') return cat.id.includes('termica') || cat.id.includes('corporativa');
    if (activeFilter === 'assistencia') return cat.id.includes('pecas') || cat.id.includes('toner');
    return true;
  });

  const handleOpenModelModal = (cat: CategoryItem) => {
    setSelectedCategory(cat);
    setModalOpen(true);
  };

  return (
    <section id="vitrine" className="relative py-24 bg-slate-100 border-b border-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-blue-100">
          <div className="space-y-3 max-w-2xl">
            <div className="text-xs font-mono text-blue-600 font-semibold tracking-wider uppercase">
              Vitrine de Categorias · Cotação Sem Burocracia
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-display text-balance">
              Suprimentos certificados e equipamentos para cada demanda.
            </h2>
            <p className="text-sm sm:text-base text-slate-600">
              Sem carrinhos complexos ou estoques desatualizados. Escolha a categoria e fale
              direto com nossa equipe técnica de Passos para receber disponibilidade e preço imediato.
            </p>
          </div>

          {/* Interactive filter segmented control */}
          <div className="flex items-center gap-1.5 p-1 bg-white border border-blue-100 rounded-xl shrink-0 self-start md:self-end shadow-md shadow-slate-200/50">
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeFilter === 'all'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-500 hover:text-blue-600'
              }`}
            >
              Todas (6)
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('suprimentos')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeFilter === 'suprimentos'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-500 hover:text-blue-600'
              }`}
            >
              Suprimentos
            </button>
            <button
              type="button"
              onClick={() => setActiveFilter('equipamentos')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-all ${
                activeFilter === 'equipamentos'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-500 hover:text-blue-600'
              }`}
            >
              Equipamentos
            </button>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 pt-10">
          {filteredCategories.map((category) => {
            const directWhatsAppUrl = getCategoryWhatsAppLink(category.title);

            return (
              <div
                key={category.id}
                className="group relative rounded-2xl bg-white border border-blue-100/60 p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 shadow-md shadow-slate-200/40 hover:shadow-xl hover:shadow-blue-900/10 hover:border-blue-200 flex flex-col justify-between"
              >
                {/* 3D Visual Artwork Component */}
                <div className="mb-5">
                  <CategoryVisual3D type={category.iconType} accent={category.accentColor} />
                </div>

                {/* Category Details */}
                <div className="space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    {/* Category badge */}
                    <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
                      <span className="text-blue-600 font-semibold">{category.badge}</span>
                      <span>Passos & Região</span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-display group-hover:text-blue-600 transition-colors">
                      {category.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {category.shortDesc}
                    </p>
                  </div>

                  {/* Feature Highlights */}
                  <div className="py-3 border-y border-blue-50 space-y-1.5">
                    {category.highlights.slice(0, 3).map((hl, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                        <span className="truncate">{hl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-2 space-y-2">
                    <a
                      href={directWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full min-h-[44px] py-2.5 px-4 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] rounded-xl flex items-center justify-center gap-2 transition-all shadow-md shadow-blue-600/15"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Cotar no WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => handleOpenModelModal(category)}
                      className="w-full min-h-[44px] py-2 px-3 text-xs font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                      <span>Tenho um modelo específico</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner for custom quotes */}
        <div className="mt-14 p-6 rounded-2xl bg-blue-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left space-y-1">
            <h4 className="text-base font-bold text-white font-display">
              Não encontrou o que procura ou precisa de cotação em grande lote?
            </h4>
            <p className="text-xs sm:text-sm text-blue-100/70">
              Trabalhamos sob encomenda rápida para marcas específicas com faturamento direto para empresas.
            </p>
          </div>

          <a
            href={getCategoryWhatsAppLink('Cotação Personalizada de Suprimentos')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 min-h-[44px] text-xs font-semibold text-blue-600 bg-white hover:bg-blue-50 rounded-xl flex items-center justify-center whitespace-nowrap active:scale-95 transition-all shrink-0"
          >
            Falar com Consultor
          </a>
        </div>

      </div>

      {/* Model drawer modal */}
      <ModelModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        category={selectedCategory}
      />
    </section>
  );
};
