import React, { useState } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';

export const MobileNav: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Hamburger button */}
      <button
        type="button"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="p-2 -mr-2 text-slate-300 hover:text-white transition-colors focus:outline-none cursor-pointer"
        aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
        aria-expanded={mobileMenuOpen}
      >
        {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#0f172a]/95 backdrop-blur-xl border-b border-white/5 shadow-2xl">
          <nav className="flex flex-col px-4 pt-2 pb-6 space-y-2">
            <a
              href="#vitrine"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
            >
              Categorias & Suprimentos
            </a>
            <a
              href="#outsourcing"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
            >
              Outsourcing de Impressão B2B
            </a>
            <a
              href="#servicos"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
            >
              Assistência Técnica
            </a>
            <a
              href="#calculadora"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors"
            >
              Simulador de Economia
            </a>
            
            <div className="pt-4 mt-2 border-t border-white/10">
              <a
                href={getWhatsAppLink('Olá! Vim pelo site da Mundo das Impressoras e gostaria de atendimento.')}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-3.5 px-4 text-sm font-semibold text-white bg-[#0891b2] hover:bg-[#067a96] rounded-xl transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chamar no WhatsApp</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};
