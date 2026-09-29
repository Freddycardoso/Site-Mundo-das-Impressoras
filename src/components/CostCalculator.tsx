import React, { useState, useMemo } from 'react';
import { Calculator, ArrowRight, TrendingDown, Check, Building2, Sparkles } from 'lucide-react';
import { getOutsourcingWhatsAppLink } from '../utils/whatsapp';

export const CostCalculator: React.FC = () => {
  const [printersCount, setPrintersCount] = useState<number>(3);
  const [monthlyPages, setMonthlyPages] = useState<number>(6000);
  const [printType, setPrintType] = useState<'mono' | 'mixed'>('mono');
  const [companyName, setCompanyName] = useState<string>('');

  const calculations = useMemo(() => {
    const costPerPageCurrent = printType === 'mono' ? 0.16 : 0.28;
    const costPerPageOutsourcing = printType === 'mono' ? 0.095 : 0.17;
    const currentMonthlyMaintenance = printersCount * 85;
    const currentMonthlyTotal = (monthlyPages * costPerPageCurrent) + currentMonthlyMaintenance;
    const outsourcingMonthlyTotal = monthlyPages * costPerPageOutsourcing + (printersCount * 45);
    const monthlySavings = Math.max(0, currentMonthlyTotal - outsourcingMonthlyTotal);
    const yearlySavings = monthlySavings * 12;
    const percentageSavings = Math.round((monthlySavings / currentMonthlyTotal) * 100);

    return {
      currentMonthlyTotal,
      outsourcingMonthlyTotal,
      monthlySavings,
      yearlySavings,
      percentageSavings,
    };
  }, [printersCount, monthlyPages, printType]);

  const handleSendSimulation = () => {
    const message = [
      'Olá, equipe Mundo das Impressoras!',
      'Fiz uma simulação de Outsourcing no site com os seguintes dados:',
      companyName ? `Empresa: ${companyName}` : '',
      `• Impressoras ativas: ${printersCount}`,
      `• Volume mensal: ~${monthlyPages.toLocaleString('pt-BR')} páginas (${printType === 'mono' ? 'Preto e Branco' : 'Colorida + P&B'})`,
      `• Economia anual estimada no simulador: ~R$ ${Math.round(calculations.yearlySavings).toLocaleString('pt-BR')}/ano (${calculations.percentageSavings}%)`,
      'Gostaria de receber uma proposta detalhada para minha empresa.',
    ].filter(Boolean).join('\n');

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/5535999536494?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="calculadora" className="relative py-28 lg:py-36 bg-slate-950 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-3.5 py-1 text-[11px] font-semibold tracking-[0.2em] uppercase text-blue-400">
            Simulador Interativo · Passos e Região
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-[-0.035em] text-white font-display text-balance">
            Calcule quanto sua empresa pode economizar todo mês.
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
            Ajuste a quantidade de equipamentos e o volume impresso para descobrir a redução
            estimada de gastos ao migrar para a Mundo das Impressoras.
          </p>
        </div>

        {/* Calculator Hardware Shell (Double-Bezel Architecture) */}
        <div className="mt-16 max-w-5xl mx-auto rounded-[2.5rem] p-2 bg-white/5 border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
          <div className="rounded-[calc(2.5rem-0.5rem)] bg-slate-900/95 backdrop-blur-2xl border border-white/5 p-6 sm:p-10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Input Controls (Left Column) */}
              <div className="lg:col-span-7 space-y-7">
                
                {/* Optional Company Name Input */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-slate-200 flex items-center justify-between">
                    <span>Nome da sua empresa (opcional)</span>
                    <span className="text-[11px] text-slate-400">Para personalizar a proposta</span>
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
                    <input
                      type="text"
                      placeholder="Ex: Clínica São Lucas, Escritório Alpha, etc."
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 text-sm bg-slate-800/60 border border-white/10 rounded-full text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 transition-all"
                    />
                  </div>
                </div>

                {/* Slider 1: Number of printers */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-200">
                      Quantidade de Impressoras em Uso
                    </span>
                    <span className="text-lg font-bold text-blue-400 font-mono tabular-nums">
                      {printersCount} {printersCount === 1 ? 'impressora' : 'impressoras'}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="20"
                    step="1"
                    value={printersCount}
                    onChange={(e) => setPrintersCount(Number(e.target.value))}
                    className="w-full h-2 bg-slate-700/80 rounded-lg appearance-none cursor-pointer accent-blue-500 transition-all"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 font-mono mt-1 px-1">
                    <span>0</span>
                    <span>5</span>
                    <span>10</span>
                    <span>15</span>
                    <span>20+</span>
                  </div>
                </div>

                {/* Slider 2: Monthly page volume */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-slate-200">
                      Volume Médio de Páginas por Mês
                    </span>
                    <span className="text-lg font-bold text-blue-400 font-mono tabular-nums">
                      {monthlyPages.toLocaleString('pt-BR')} páginas
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="40000"
                    step="1000"
                    value={monthlyPages}
                    onChange={(e) => setMonthlyPages(Number(e.target.value))}
                    className="w-full h-2 bg-slate-700/80 rounded-lg appearance-none cursor-pointer accent-blue-500 transition-all"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 font-mono mt-1 px-1">
                    <span>0</span>
                    <span>10k</span>
                    <span>20k</span>
                    <span>30k</span>
                    <span>40k+</span>
                  </div>
                </div>

                {/* Segmented control: Print Type */}
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-slate-200">Perfil de Impressão</span>
                  <div className="grid grid-cols-2 gap-2 p-1 bg-slate-800/80 rounded-full border border-white/5">
                    <button
                      type="button"
                      onClick={() => setPrintType('mono')}
                      className={`py-2 px-3 text-xs font-semibold rounded-full transition-all duration-200 active:scale-[0.97] cursor-pointer ${
                        printType === 'mono'
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      Predominante Preto e Branco
                    </button>
                    <button
                      type="button"
                      onClick={() => setPrintType('mixed')}
                      className={`py-2 px-3 text-xs font-semibold rounded-full transition-all duration-200 active:scale-[0.97] cursor-pointer ${
                        printType === 'mixed'
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'text-slate-300 hover:text-white'
                      }`}
                    >
                      Misto (Preto + Colorido)
                    </button>
                  </div>
                </div>

              </div>

              {/* Results Display Box (Right Column) with Double-Bezel Console */}
              <div className="lg:col-span-5 rounded-2xl p-1 bg-white/5 border border-white/10 shadow-2xl">
                <div className="rounded-[calc(1rem-0.25rem)] bg-slate-950/80 p-6 sm:p-7 space-y-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
                  
                  <div className="space-y-1">
                    <span className="text-[11px] font-mono text-blue-400 font-semibold tracking-wider uppercase">
                      Economia Projetada
                    </span>
                    <div className="text-3xl sm:text-4xl font-black text-white font-mono tabular-nums tracking-tight">
                      ~R$ {Math.round(calculations.monthlySavings).toLocaleString('pt-BR')}
                      <span className="text-sm font-normal text-blue-300/60"> /mês</span>
                    </div>
                    <div className="text-xs text-emerald-400 font-semibold flex items-center gap-1.5 pt-1">
                      <TrendingDown className="w-4 h-4" />
                      <span>Economia de até {calculations.percentageSavings}% dos gastos</span>
                    </div>
                  </div>

                  {/* Annual projection banner */}
                  <div className="p-4 rounded-xl bg-blue-600/10 border border-blue-500/20 space-y-1">
                    <div className="text-[11px] text-blue-300/70">Economia no fluxo de caixa anual:</div>
                    <div className="text-xl font-extrabold text-blue-400 font-mono tabular-nums">
                      ~R$ {Math.round(calculations.yearlySavings).toLocaleString('pt-BR')} /ano
                    </div>
                    <div className="text-[11px] text-blue-300/50">
                      Sem contar o tempo economizado da sua equipe de TI.
                    </div>
                  </div>

                  {/* Breakdown list */}
                  <div className="space-y-2 text-xs border-t border-white/10 pt-4 text-slate-300">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-400">Custo atual estimado (avulso):</span>
                      <span className="font-mono tabular-nums text-slate-500 line-through">
                        R$ {Math.round(calculations.currentMonthlyTotal).toLocaleString('pt-BR')}
                      </span>
                    </div>
                    <div className="flex items-center justify-between font-semibold text-white">
                      <span>Plano Outsourcing estimado:</span>
                      <span className="font-mono tabular-nums text-blue-400">
                        R$ {Math.round(calculations.outsourcingMonthlyTotal).toLocaleString('pt-BR')}
                      </span>
                    </div>
                  </div>

                  {/* Action Button with Nested Island CTA */}
                  <button
                    type="button"
                    onClick={handleSendSimulation}
                    className="group w-full py-2.5 pl-6 pr-2 text-xs sm:text-sm font-bold text-white bg-blue-600 hover:bg-blue-500 active:scale-[0.97] rounded-full shadow-lg shadow-blue-600/30 flex items-center justify-between transition-all duration-200 cursor-pointer"
                  >
                    <span>Enviar Simulação no WhatsApp</span>
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </button>

                  <div className="text-[10px] text-center text-slate-400">
                    *Simulação baseada nas médias de mercado de Passos e Sudoeste Mineiro.
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
