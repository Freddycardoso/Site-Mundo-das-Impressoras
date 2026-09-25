import React, { useState } from 'react';
import { Wrench, CheckCircle2, Truck, Clock, ShieldAlert, ChevronRight, MessageCircle } from 'lucide-react';
import { SUPPORTED_BRANDS } from '../data/categories';
import { getMaintenanceWhatsAppLink, DISPLAY_PHONE } from '../utils/whatsapp';
import { GlowCard } from './ui/spotlight-card';

export const TechnicalServices: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>('Manutenção Corretiva');
  const [equipmentModel, setEquipmentModel] = useState<string>('');
  const [problemDescription, setProblemDescription] = useState<string>('');

  const servicesList = [
    {
      title: 'Desentupimento de Cabeça de Impressão',
      desc: 'Processo técnico por ultrassom e solventes específicos para recuperar bicos obstruídos em impressoras Epson EcoTank, Canon MegaTank e Brother.',
      badge: 'Recuperação 95%',
    },
    {
      title: 'Troca de Almofadas & Reset de Contador',
      desc: 'Substituição das esponjas coletoras saturadas de tinta e reset de software das impressoras que travam com mensagem de fim da vida útil.',
      badge: 'Solução Imediata',
    },
    {
      title: 'Reparo de Fusor & Película Térmica',
      desc: 'Solução para impressoras laser que amassam papel, mancham o verso da folha ou apresentam erro de aquecimento do fusor.',
      badge: 'Laser Mono e Cor',
    },
    {
      title: 'Troca de Roletes Tracionadores (Pick-up Rollers)',
      desc: 'Troca da borracha de tração que patina e não puxa o papel da gaveta, eliminando o clássico atolamento contínuo.',
      badge: 'Todas as Marcas',
    },
    {
      title: 'Manutenção Preventiva & Higienização Completa',
      desc: 'Desmontagem, aspiração de pó de toner ou poeira de papel, lubrificação técnica dos trilhos e calibração de sensores ópticos.',
      badge: 'Vida Útil Longa',
    },
    {
      title: 'Conserto de Placa Lógica e Fonte de Alimentação',
      desc: 'Reparo em nível de componente eletrônico para impressoras que não ligam ou não comunicam via USB/Rede após oscilação elétrica.',
      badge: 'Laboratório Próprio',
    },
  ];

  const handleScheduleMaintenance = (e: React.FormEvent) => {
    e.preventDefault();
    const url = getMaintenanceWhatsAppLink(selectedService, equipmentModel, problemDescription);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="servicos" className="relative py-24 bg-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="text-xs font-mono text-blue-600 font-semibold tracking-wider uppercase">
            Assistência Técnica Especializada · Passos - MG
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-display text-balance">
            Conserto rápido com peças de qualidade e laboratório local.
          </h2>
          <p className="text-xs sm:text-base text-slate-600">
            Sua impressora parou? Nossa equipe técnica realiza diagnóstico transparente,
            com opção de coleta no seu endereço comercial em Passos e região.
          </p>
        </div>

        {/* Brands Ticker / Logo Grid */}
        <div className="mt-12 py-8">
          <div className="text-center text-xs font-medium text-slate-400 mb-6">
            Marcas atendidas com peças de reposição em estoque:
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10">
            {SUPPORTED_BRANDS.map((brand) => (
              <div
                key={brand.name}
                className="flex flex-col items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300 ease-in-out cursor-default"
              >
                <div className="text-xl sm:text-2xl font-black text-slate-800 font-display tracking-tight">
                  {brand.name}
                </div>
                <div className="text-[10px] text-slate-500 font-medium tracking-wide">
                  {brand.category}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 2-Column: Services Grid + Fast Collection Request Form */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: Services list */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 font-display flex items-center gap-2">
              <Wrench className="w-5 h-5 text-blue-600" />
              <span>Principais Reparos Realizados em Nossa Bancada</span>
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {servicesList.map((srv, idx) => (
                <GlowCard
                  key={idx}
                  customSize
                  glowColor="blue"
                  className="p-5 rounded-2xl bg-white shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05),0_2px_4px_-1px_rgba(0,0,0,0.03)] hover:shadow-md transition-all space-y-2"
                >
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-semibold text-slate-800">{srv.title}</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {srv.desc}
                  </p>
                  <div className="text-[11px] font-mono text-blue-600 pt-1">
                    {srv.badge}
                  </div>
                </GlowCard>
              ))}
            </div>

            {/* Quick trust metrics */}
            <div className="p-4 rounded-xl bg-blue-50 border border-blue-100 flex flex-wrap items-center justify-between gap-4 text-xs text-blue-800">
              <span className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-blue-600" />
                <span>Serviço de Coleta e Entrega em Passos</span>
              </span>
              <span className="flex items-center gap-2">
                <ShieldAlert className="w-4 h-4 text-blue-600" />
                <span>Garantia de 90 dias nos reparos</span>
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-blue-600" />
                <span>Orçamento sem surpresas</span>
              </span>
            </div>
          </div>

          {/* Right Column: Direct Maintenance / Collection Request Box */}
          <div className="lg:col-span-5 rounded-[16px] bg-slate-900 p-6 sm:p-7 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] space-y-5 my-4 lg:my-0">
            <div className="space-y-1">
              <div className="text-xs font-mono text-blue-400 font-semibold uppercase">
                Passo 1 de 1 · Atendimento Ágil
              </div>
              <h3 className="text-xl font-bold font-display text-white">
                Agendar Manutenção ou Coleta
              </h3>
              <p className="text-xs text-slate-300">
                Preencha os dados abaixo para adiantar seu atendimento direto no WhatsApp técnico.
              </p>
            </div>

            <form onSubmit={handleScheduleMaintenance} className="space-y-4">
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-300">
                  Qual serviço você precisa?
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-3 py-2.5 text-xs sm:text-sm bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 [&>option]:bg-slate-800 [&>option]:text-white"
                >
                  <option value="Manutenção Corretiva Geral">Manutenção Corretiva Geral</option>
                  <option value="Desentupimento de Cabeça">Desentupimento de Cabeça</option>
                  <option value="Troca de Almofadas / Reset">Troca de Almofadas / Reset de Contador</option>
                  <option value="Atolamento de Papel (Roletes)">Atolamento de Papel (Roletes)</option>
                  <option value="Problema no Fusor / Barulho">Problema no Fusor / Barulho</option>
                  <option value="Solicitar Coleta de Equipamento">Solicitar Coleta em Passos</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-300">
                  Marca e Modelo da Impressora
                </label>
                <input
                  type="text"
                  placeholder="Ex: Epson L3150, HP 107w, Brother L5652..."
                  value={equipmentModel}
                  onChange={(e) => setEquipmentModel(e.target.value)}
                  className="w-full px-3 py-2.5 text-xs sm:text-sm bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-medium text-slate-300">
                  O que está acontecendo com ela? (Opcional)
                </label>
                <textarea
                  rows={3}
                  placeholder="Ex: Não puxa o papel, luz vermelha piscando, mancha preta no meio da folha..."
                  value={problemDescription}
                  onChange={(e) => setProblemDescription(e.target.value)}
                  className="w-full px-3 py-2.5 text-xs sm:text-sm bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-slate-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 rounded-xl shadow-lg shadow-blue-600/20 flex items-center justify-center gap-2 transition-all cursor-pointer"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Solicitar Coleta / Agendamento no WhatsApp</span>
              </button>

              <div className="text-[11px] text-center text-slate-400">
                Atendimento presencial em Passos - MG · Resposta rápida
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
