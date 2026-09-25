import React from 'react';
import { CheckCircle, XCircle, ArrowRight, ShieldCheck, Zap, BarChart3, Clock, FileSpreadsheet, Building2, Wrench, RefreshCw } from 'lucide-react';
import { getOutsourcingWhatsAppLink } from '../utils/whatsapp';
import { GlowCard } from './ui/spotlight-card';

export const OutsourcingB2B: React.FC = () => {
  return (
    <section id="outsourcing" className="relative py-24 bg-slate-100 border-b border-blue-100">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="text-xs font-mono text-blue-600 font-semibold tracking-wider uppercase">
            Gestão Corporativa de Impressão (B2B)
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-slate-900 font-display text-balance">
            Por que as melhores empresas de Passos e região migraram para o Outsourcing?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Comprar impressoras imobiliza capital, gera compras desorganizadas de toner e causa
            paralisação no atendimento quando uma máquina quebra. No Outsourcing Mundo das Impressoras,
            sua empresa só paga pelas páginas impressas com tudo incluso.
          </p>
        </div>

        {/* 4 Pillars Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          
          <GlowCard customSize glowColor="blue" className="p-6 rounded-2xl bg-white border border-blue-100/60 shadow-md shadow-slate-200/50 hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-200 transition-all duration-300 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100/80 flex items-center justify-center text-blue-600">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-display">
              Zero Custo de Aquisição
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Modernize seu parque de impressão imediatamente com equipamentos industriais sem desembolsar capital de giro da empresa.
            </p>
          </GlowCard>

          <GlowCard customSize glowColor="blue" className="p-6 rounded-2xl bg-white border border-blue-100/60 shadow-md shadow-slate-200/50 hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-200 transition-all duration-300 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100/80 flex items-center justify-center text-blue-600">
              <Wrench className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-display">
              Manutenção Total Inclusa
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Peças, mão de obra, roletes e cabeças de impressão cobertas pelo contrato. Nunca mais receba um orçamento surpresa de oficina.
            </p>
          </GlowCard>

          <GlowCard customSize glowColor="blue" className="p-6 rounded-2xl bg-white border border-blue-100/60 shadow-md shadow-slate-200/50 hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-200 transition-all duration-300 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100/80 flex items-center justify-center text-blue-600">
              <RefreshCw className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-display">
              Máquina Reserva (Backup)
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Caso ocorra algum defeito complexo no equipamento, substituímos a máquina imediatamente para manter seu faturamento e atendimento rodando.
            </p>
          </GlowCard>

          <GlowCard customSize glowColor="blue" className="p-6 rounded-2xl bg-white border border-blue-100/60 shadow-md shadow-slate-200/50 hover:shadow-xl hover:shadow-blue-900/5 hover:border-blue-200 transition-all duration-300 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-blue-100/80 flex items-center justify-center text-blue-600">
              <BarChart3 className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 font-display">
              Bilhetagem e Rateio
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Tenha relatórios claros de quantas páginas cada departamento ou colaborador imprimiu, eliminando impressões desnecessárias.
            </p>
          </GlowCard>

        </div>

        {/* Comparison Table */}
        <div className="mt-16 rounded-2xl bg-white border border-blue-100/60 p-6 sm:p-8 shadow-xl shadow-slate-200/50 overflow-hidden">
          <div className="text-center sm:text-left mb-6 space-y-1">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 font-display">
              Comparativo Direto: Comprar vs Outsourcing
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Veja a diferença prática no fluxo de caixa e no tempo da sua equipe de TI ou administrativo:
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse min-w-[550px]">
              <thead>
                <tr className="border-b border-blue-100 text-slate-400 font-mono text-[11px] uppercase tracking-wider">
                  <th className="py-3 px-4">Item de Gestão</th>
                  <th className="py-3 px-4 text-red-500">Impressora Própria (Comprada)</th>
                  <th className="py-3 px-4 text-blue-600">Outsourcing Mundo das Impressoras</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-blue-50 text-slate-600">
                <tr>
                  <td className="py-3.5 px-4 font-medium text-slate-800">Investimento Inicial</td>
                  <td className="py-3.5 px-4 text-red-500/80">Alto (R$ 3.000 a R$ 20.000+ imobilizados)</td>
                  <td className="py-3.5 px-4 text-blue-600 font-medium">R$ 0,00 (Sem imobilização)</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-slate-800">Manutenção & Troca de Peças</td>
                  <td className="py-3.5 px-4 text-red-500/80">Pagas à parte (orçamentos caros e lentos)</td>
                  <td className="py-3.5 px-4 text-blue-600 font-medium">100% Inclusas sem surpresas</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-slate-800">Reposição de Toners</td>
                  <td className="py-3.5 px-4 text-red-500/80">Compras de urgência com frete caro</td>
                  <td className="py-3.5 px-4 text-blue-600 font-medium">Preventiva e automática em Passos</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-slate-800">Equipamento Reserva em Quebra</td>
                  <td className="py-3.5 px-4 text-red-500/80">Não existe (dias com a empresa parada)</td>
                  <td className="py-3.5 px-4 text-blue-600 font-medium">Substituição rápida imediata</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-slate-800">Depreciação & Obsolescência</td>
                  <td className="py-3.5 px-4 text-red-500/80">Prejuízo absorvido pela sua empresa</td>
                  <td className="py-3.5 px-4 text-blue-600 font-medium">Parque sempre atualizado</td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-medium text-slate-800">Controle de Custos</td>
                  <td className="py-3.5 px-4 text-red-500/80">Custo fantasma variável imprevisível</td>
                  <td className="py-3.5 px-4 text-blue-600 font-medium">Previsibilidade total por página impressa</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Primary Action Button */}
          <div className="mt-8 pt-6 border-t border-blue-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left space-y-0.5">
              <span className="text-xs font-mono text-blue-600">Diagnóstico Gratuito</span>
              <p className="text-sm font-semibold text-slate-800">
                Receba um estudo personalizado de economia sem compromisso.
              </p>
            </div>

            <a
              href={getOutsourcingWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 active:scale-95 rounded-xl shadow-lg shadow-blue-600/25 transition-all whitespace-nowrap"
            >
              <span>Solicitar Estudo de Redução de Custos</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
