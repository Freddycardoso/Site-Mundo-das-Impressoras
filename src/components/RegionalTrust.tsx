import React from 'react';
import { MapPin, Phone, ShieldCheck, Clock, Truck, FileText, CheckCircle2 } from 'lucide-react';
import { REGIONAL_CITIES } from '../data/categories';
import { DISPLAY_PHONE, getWhatsAppLink } from '../utils/whatsapp';

export const RegionalTrust: React.FC = () => {
  return (
    <section id="localizacao" className="relative py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left: Authority statement */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-2">
              <div className="text-xs font-mono text-blue-600 font-semibold tracking-wider uppercase">
                Presença e Atendimento Local
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-50 font-display text-balance">
                A segurança de comprar e contratar com quem está em Passos - MG.
              </h2>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Chega de comprar cartucho ou toner na internet e esperar semanas pelo frete dos Correios,
                ou ficar desamparado quando a impressora trava no fechamento do mês.
              </p>
            </div>

            {/* Differential Points */}
            <div className="space-y-3.5 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="text-slate-50">Entrega Expressa no Mesmo Dia em Passos:</strong> Se o toner da sua empresa acabou, levamos até você rapidamente.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="text-slate-50">Garantia Imediata de Balcão:</strong> Sem burocracia de logística reversa. Se houver qualquer falha, a troca é realizada na hora.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-lg bg-white/10 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
                  <FileText className="w-3.5 h-3.5" />
                </div>
                <div>
                  <strong className="text-slate-50">Faturamento Facilitado para Empresas:</strong> Emissão de Nota Fiscal Eletrônica e condições de boleto faturado para CNPJ cadastrado.
                </div>
              </div>
            </div>

            {/* Direct Contact Button */}
            <div className="pt-2">
              <a
                href={getWhatsAppLink('Olá! Gostaria de consultar se vocês atendem meu endereço na região de Passos-MG.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-colors shadow-md shadow-blue-600/20"
              >
                <Phone className="w-4 h-4" />
                <span>Falar com Atendimento Regional: {DISPLAY_PHONE}</span>
              </a>
            </div>
          </div>

          {/* Right: Regional Map & Cities Matrix */}
          <div className="lg:col-span-6 rounded-2xl bg-white/5 border border-white/10 p-6 sm:p-8 space-y-6 shadow-xl shadow-black/50 backdrop-blur-sm">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span className="font-bold text-slate-50 text-base font-display">Cidades Atendidas no Sudoeste de Minas</span>
              </div>
              <span className="text-[11px] font-mono text-blue-400">Ponto Base: Passos/MG</span>
            </div>

            <p className="text-xs text-slate-300">
              Atendemos indústrias, comércio, escolas, escritórios contábeis, órgãos públicos e clientes finais nas seguintes localidades:
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
              {REGIONAL_CITIES.map((city) => (
                <div
                  key={city}
                  className="p-2.5 rounded-lg bg-white/5 border border-white/10 shadow-sm text-xs text-slate-200 flex items-center gap-2 transition-colors hover:bg-white/10"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                  <span className="truncate">{city}</span>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-blue-900/50 border border-blue-500/20 text-xs text-blue-200 leading-relaxed">
              <span className="font-semibold text-blue-400">Sua cidade não está na lista?</span> Para as demais cidades da região, atendemos exclusivamente empresas sob contrato de Outsourcing de Impressão (B2B). Clientes particulares e serviços avulsos devem trazer o equipamento até nossa loja física em Passos.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
