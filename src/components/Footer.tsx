import React from 'react';
import { MessageCircle, Phone, MapPin, Mail } from 'lucide-react';
import { DISPLAY_PHONE, DISPLAY_LOCATION, getWhatsAppLink } from '../utils/whatsapp';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-blue-100 bg-[#0a1628] text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-28 sm:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-10 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center">
              <img 
                src="/logo.png" 
                alt="Mundo das Impressoras" 
                className="h-10 w-auto object-contain drop-shadow-sm"
              />
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Especialistas em Outsourcing de Impressão corporativo, suprimentos de alto rendimento e assistência técnica em Passos-MG e região.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-2">
            <div className="text-xs font-semibold text-white uppercase tracking-wider font-display">
              Navegação
            </div>
            <ul className="space-y-1.5 text-xs">
              <li>
                <a href="#vitrine" className="hover:text-blue-400 transition-colors">
                  Vitrine de Categorias
                </a>
              </li>
              <li>
                <a href="#outsourcing" className="hover:text-blue-400 transition-colors">
                  Outsourcing de Impressão (B2B)
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-blue-400 transition-colors">
                  Assistência Técnica e Coleta
                </a>
              </li>
              <li>
                <a href="#calculadora" className="hover:text-blue-400 transition-colors">
                  Simulador de Economia
                </a>
              </li>
            </ul>
          </div>

          {/* Suprimentos */}
          <div className="space-y-2">
            <div className="text-xs font-semibold text-white uppercase tracking-wider font-display">
              Principais Linhas
            </div>
            <ul className="space-y-1.5 text-xs">
              <li>Toners Brother, HP, Samsung e Kyocera</li>
              <li>Tintas EcoTank e MegaTank originais</li>
              <li>Impressoras Térmicas e Bobinas Cupom</li>
              <li>Peças, fusores e cabeças de impressão</li>
            </ul>
          </div>

          {/* Contact & Location */}
          <div className="space-y-2.5">
            <div className="text-xs font-semibold text-white uppercase tracking-wider font-display">
              Atendimento Regional
            </div>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-400">
                <MapPin className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>Passos - Minas Gerais</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Phone className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                <span>WhatsApp: {DISPLAY_PHONE}</span>
              </div>
              <a
                href={getWhatsAppLink('Olá, gostaria de falar com a Mundo das Impressoras.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 mt-2 text-blue-400 hover:text-blue-300 font-medium"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Abrir conversa no WhatsApp</span>
              </a>
            </div>
          </div>

        </div>

        {/* Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Mundo das Impressoras. Todos os direitos reservados.
          </div>
          <div className="text-center sm:text-right">
            Atendimento B2B e B2C · Passos e Região · Fotos e marcas registradas pertencem a seus respectivos titulares.
          </div>
        </div>
      </div>
    </footer>
  );
};
