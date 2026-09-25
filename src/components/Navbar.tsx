import React, { useState } from 'react';
import { Menu, X, Infinity, MessageCircle } from 'lucide-react';
import { DISPLAY_PHONE, getWhatsAppLink } from '../utils/whatsapp';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0f172a]/60 backdrop-blur-[12px] border-b border-white/5 transition-colors">
      <nav className="flex items-center justify-between px-4 sm:px-[5%] py-3 sm:py-4 max-w-7xl mx-auto">
        
        <a href="/" className="flex items-center group outline-none transition-transform duration-300 hover:scale-105">
          <img 
            src="/logo.png" 
            alt="Mundo das Impressoras" 
            className="h-9 sm:h-11 w-auto object-contain drop-shadow-sm"
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#vitrine" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            Categorias
          </a>
          <a href="#outsourcing" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            Outsourcing
          </a>
          <a href="#servicos" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            Assistência
          </a>
          <a href="#calculadora" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
            Simulador
          </a>
        </div>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href={getWhatsAppLink('Olá, vim pelo site da Mundo das Impressoras e gostaria de falar com um atendente.')}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold text-white bg-transparent border border-[#0891b2] rounded-full hover:bg-[#0891b2] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#0891b2]/50"
          >
            Fale Conosco
          </a>

          {/* Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 -mr-2 text-slate-300 hover:text-white transition-colors focus:outline-none"
            aria-label="Abrir menu de navegação"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer (Absolute so it drops down over the page) */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-[#0f172a]/95 backdrop-blur-xl border-b border-white/5 shadow-2xl">
          <nav className="flex flex-col px-4 pt-2 pb-6 space-y-2">
            <a href="#vitrine" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors">
              Categorias & Suprimentos
            </a>
            <a href="#outsourcing" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors">
              Outsourcing de Impressão B2B
            </a>
            <a href="#servicos" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors">
              Assistência Técnica
            </a>
            <a href="#calculadora" onClick={() => setMobileMenuOpen(false)} className="px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/5 rounded-xl transition-colors">
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
    </header>
  );
};
