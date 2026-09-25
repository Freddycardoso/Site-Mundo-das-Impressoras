import React from 'react';
import { MessageCircle, Zap } from 'lucide-react';
import { DISPLAY_PHONE, getWhatsAppLink, getOutsourcingWhatsAppLink } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  return (
    <>
      {/* Desktop Floating Action Widget (Bottom Right) */}
      <div className="hidden sm:block fixed bottom-6 right-6 z-40">
        <a
          href={getWhatsAppLink('Olá! Vim pelo site da Mundo das Impressoras e gostaria de atendimento.')}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-3 px-4 py-3 bg-white border border-blue-200 hover:border-blue-400 rounded-full shadow-xl shadow-blue-100/50 hover:shadow-blue-200/50 transition-all duration-300 hover:scale-105 active:scale-95"
          aria-label="Abrir WhatsApp da Mundo das Impressoras"
        >
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center text-white">
              <MessageCircle className="w-5 h-5" />
            </div>
            <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-emerald-400 border-2 border-white rounded-full animate-pulse" />
          </div>

          <div className="text-left pr-1">
            <div className="text-xs font-bold text-slate-800 group-hover:text-blue-600 transition-colors">
              WhatsApp Direto
            </div>
            <div className="text-[11px] text-slate-400 font-mono">
              Passos-MG · Online
            </div>
          </div>
        </a>
      </div>

      {/* Mobile Sticky Bottom Conversion Bar */}
      <div className="sm:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-blue-100 px-3 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] shadow-[0_-4px_12px_rgba(37,99,235,0.08)]">
        <div className="flex items-center gap-2">
          <a
            href={getWhatsAppLink('Olá! Vim pelo site da Mundo das Impressoras e gostaria de cotação.')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 px-3 bg-blue-600 active:bg-blue-700 text-white font-bold text-xs rounded-lg flex items-center justify-center gap-1.5 shadow-sm whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp (35) 99953-6494</span>
          </a>

          <a
            href={getOutsourcingWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-3 bg-blue-50 hover:bg-blue-100 text-blue-600 border border-blue-200 font-medium text-xs rounded-lg flex items-center justify-center gap-1 whitespace-nowrap"
          >
            <Zap className="w-3.5 h-3.5 text-blue-600" />
            <span>Estudo B2B</span>
          </a>
        </div>
      </div>
    </>
  );
};
