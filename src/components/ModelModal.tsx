import React, { useState } from 'react';
import { X, MessageCircle, Printer, ArrowRight, Sparkles } from 'lucide-react';
import { CategoryItem } from '../data/categories';
import { getCategoryWhatsAppLink } from '../utils/whatsapp';

interface ModelModalProps {
  isOpen: boolean;
  onClose: () => void;
  category: CategoryItem | null;
}

export const ModelModal: React.FC<ModelModalProps> = ({ isOpen, onClose, category }) => {
  const [modelInput, setModelInput] = useState('');

  if (!isOpen || !category) return null;

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const url = getCategoryWhatsAppLink(category.title, modelInput);
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  const handleQuickSelect = (model: string) => {
    setModelInput(model);
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="relative w-full max-w-lg rounded-2xl bg-white border border-blue-100 p-6 sm:p-7 shadow-2xl space-y-5"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg text-slate-500 hover:text-blue-700 hover:bg-blue-50 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="space-y-1.5 pr-8">
          <div className="text-xs font-mono text-blue-600 font-semibold tracking-wider uppercase">
            Cotação Direta WhatsApp
          </div>
          <h3 id="modal-title" className="text-xl font-bold font-display text-slate-900">
            {category.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500">
            Informe o modelo da sua impressora para conferirmos a compatibilidade exata em nosso estoque de Passos-MG.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSend} className="space-y-4">
          <div className="space-y-1.5">
            <label htmlFor="printer-model-input" className="block text-xs font-medium text-slate-600">
              Modelo da sua impressora ou código do suprimento
            </label>
            <div className="relative">
              <Printer className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                id="printer-model-input"
                type="text"
                autoFocus
                placeholder="Ex: HP LaserJet 107w, Epson L3250, Brother TN-1060..."
                value={modelInput}
                onChange={(e) => setModelInput(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-50 border border-blue-100 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all"
              />
            </div>
          </div>

          {/* Quick select chips for popular models */}
          {category.popularModels && category.popularModels.length > 0 && (
            <div className="space-y-2">
              <span className="text-[11px] text-slate-400 font-medium">Modelos frequentes na região:</span>
              <div className="flex flex-wrap gap-1.5">
                {category.popularModels.map((model) => (
                  <button
                    key={model}
                    type="button"
                    onClick={() => handleQuickSelect(model)}
                    className="text-xs px-2.5 py-1 rounded-lg bg-blue-50 hover:bg-blue-100 hover:text-blue-700 border border-blue-100 hover:border-blue-300 text-blue-700 transition-all cursor-pointer text-left"
                  >
                    + {model}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5">
            <button
              type="submit"
              className="w-full sm:flex-1 min-h-[44px] py-3 px-4 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 active:scale-[0.98] rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Verificar Disponibilidade no WhatsApp</span>
            </button>
            <button
              type="button"
              onClick={onClose}
              className="w-full sm:w-auto min-h-[44px] py-3 px-4 text-xs font-medium text-slate-500 hover:text-slate-700 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors"
            >
              Cancelar
            </button>
          </div>
        </form>

        <div className="text-[11px] text-center text-slate-400">
          Você será direcionado diretamente ao WhatsApp com a mensagem pronta.
        </div>
      </div>
    </div>
  );
};
