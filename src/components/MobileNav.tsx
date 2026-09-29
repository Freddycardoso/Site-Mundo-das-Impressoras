import React, { useState } from 'react';
import { ArrowUpRight, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';

export const MobileNav: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '#vitrine', label: 'Categorias & Suprimentos' },
    { href: '#outsourcing', label: 'Outsourcing B2B' },
    { href: '#servicos', label: 'Assistência Técnica' },
    { href: '#calculadora', label: 'Simulador de Economia' },
  ];

  return (
    <div className="md:hidden">
      {/* Morphing Hamburger Button */}
      <button
        type="button"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="relative w-10 h-10 flex flex-col items-center justify-center rounded-full bg-[#0a2540]/[0.04] border border-[#0a2540]/[0.08] text-[#0a2540] hover:bg-[#0a2540]/[0.08] transition-all duration-200 active:scale-[0.95] cursor-pointer"
        aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
        aria-expanded={mobileMenuOpen}
      >
        <span
          className={`block w-4 h-0.5 bg-current rounded-full transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            mobileMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'
          }`}
        />
        <span
          className={`block w-4 h-0.5 bg-current rounded-full transition-opacity duration-200 ${
            mobileMenuOpen ? 'opacity-0 scale-x-0' : 'opacity-100'
          }`}
        />
        <span
          className={`block w-4 h-0.5 bg-current rounded-full transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
            mobileMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'
          }`}
        />
      </button>

      {/* Floating Luminous Sheet Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-4 top-20 z-50 rounded-3xl bg-white/95 backdrop-blur-2xl border border-[#0a2540]/[0.08] shadow-[0_25px_60px_rgba(10,37,64,0.18)] p-6 animate-in fade-in zoom-in-95 duration-200 ease-[cubic-bezier(0.32,0.72,0,1)]">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link, idx) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{ animationDelay: `${idx * 40}ms` }}
                className="flex items-center justify-between px-4 py-3 text-sm font-semibold text-[#425466] hover:text-[#0a2540] hover:bg-[#0a2540]/[0.04] rounded-2xl transition-all duration-150 active:scale-[0.98]"
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#0052cc] opacity-70">→</span>
              </a>
            ))}

            <div className="pt-4 mt-2 border-t border-[#0a2540]/[0.06]">
              <a
                href={getWhatsAppLink('Olá! Vim pelo site da Mundo das Impressoras e gostaria de falar com um consultor corporativo.')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="group flex items-center justify-between w-full py-3.5 px-5 text-sm font-semibold text-white bg-[#0a2540] hover:bg-[#0052cc] rounded-2xl shadow-lg shadow-[#0a2540]/15 transition-all duration-200 active:scale-[0.97]"
              >
                <div className="flex items-center gap-2.5">
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Falar com Consultor B2B</span>
                </div>
                <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </a>
            </div>
          </nav>
        </div>
      )}
    </div>
  );
};

