import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Printer, Sparkles, Building2 } from 'lucide-react';
import { getOutsourcingWhatsAppLink, DISPLAY_PHONE } from '../utils/whatsapp';

export const Hero: React.FC = () => {
  return (
    <section className="mesh-container pt-28 pb-20 lg:pt-36 lg:pb-28">

      {/* Dynamic Mesh Blobs */}
      <div className="mesh-blob-1" />
      <div className="mesh-blob-2" />

      <div className="mesh-content max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          
          {/* Left Column: Value Proposition & Conversion Hooks */}
          <div className="lg:col-span-7 space-y-7 z-10">
            
            {/* Regional trust marker */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/30 bg-blue-500/10 px-3.5 py-1.5 text-xs font-medium text-blue-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
              </span>
              <span>Atendimento Expresso: Passos & Região</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.5rem] font-extrabold tracking-tighter text-white font-display text-balance leading-[1.1]">
              Locação de Impressoras para Empresas:{' '}
              <span className="text-blue-400">
                Reduza seus custos em até 40%.
              </span>
            </h1>

            {/* Concrete Value Description */}
            <p className="text-base sm:text-lg text-blue-100/60 max-w-2xl leading-relaxed">
              Elimine gastos imprevistos com manutenção e reposição de peças. 
              Fornecemos equipamentos de alta produtividade e suporte presencial imediato.
            </p>

            {/* Direct CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-2">
              <a
                href={getOutsourcingWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center min-h-[48px] gap-3 rounded-full bg-[#25D366] px-7 py-3 text-sm font-semibold text-white transition-all duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-[#1ebd5a] active:scale-[0.98] shadow-[0_4px_24px_rgba(37,211,102,0.35)] whitespace-nowrap"
              >
                <span>Solicitar Estudo de Redução de Custos</span>
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </a>

              <a
                href="#vitrine"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[48px] text-sm font-medium text-blue-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/15 rounded-full transition-colors whitespace-nowrap active:scale-[0.98]"
              >
                <span>Ver Vitrine de Categorias</span>
              </a>
            </div>



          </div>

          {/* Right Column: Floating Hardware Composition */}
          <div className="lg:col-span-5 relative mt-16 lg:mt-0 flex flex-col items-center justify-center">
            {/* Main Container */}
            <div className="relative w-full max-w-lg sm:max-w-xl lg:max-w-full mx-auto lg:translate-x-4">
              {/* Central Printer Image */}
              <div className="relative z-10 animate-float lg:scale-110 xl:scale-125 transform-gpu">
                <img 
                  src="/printer-hero.png" 
                  alt="Impressora de Alta Performance"
                  className="w-full h-auto object-contain drop-shadow-[0_20px_30px_rgba(0,0,0,0.5)]"
                  fetchPriority="high"
                />
              </div>

              {/* Floor Shadow */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] lg:w-[100%] h-[24px] bg-black rounded-[50%] blur-[20px] animate-shadow z-0 lg:scale-110 xl:scale-125 transform-gpu" />

              {/* UI Badges - Absolute on Desktop, Flow on Mobile */}
              <div className="
                static flex flex-col gap-3 mt-12 w-full
                md:absolute md:inset-0 md:block md:mt-0 md:w-auto
              ">
                
                {/* Badge 1: Top Right */}
                <div className="
                  md:absolute md:-right-4 lg:-right-8 xl:-right-12 md:top-8 lg:top-6 xl:top-2 md:z-20 md:animate-float md:float-delay-0
                  flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/10 shadow-2xl
                ">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20 text-blue-400">
                    <Zap className="w-4 h-4" />
                  </div>
                  <span className="text-[#F8FAFC] font-medium text-sm lg:text-base whitespace-nowrap">Reposição Automática</span>
                </div>

                {/* Badge 2: Center Left */}
                <div className="
                  md:absolute md:-left-8 lg:-left-12 xl:-left-16 md:top-1/2 md:-translate-y-1/2 md:z-20 md:animate-float md:float-delay-1
                  flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/10 shadow-2xl
                ">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span className="text-[#F8FAFC] font-medium text-sm lg:text-base whitespace-nowrap">Manutenção Inclusa</span>
                </div>

                {/* Badge 3: Bottom Right */}
                <div className="
                  md:absolute md:-right-8 lg:-right-12 xl:-right-16 md:bottom-12 lg:bottom-8 xl:bottom-4 md:z-20 md:animate-float md:float-delay-2
                  flex items-center gap-3 px-4 py-2.5 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/10 shadow-2xl
                ">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500/20 text-purple-400">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <span className="text-[#F8FAFC] font-medium text-sm lg:text-base whitespace-nowrap">Monitoramento Ativo</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
