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
    <section id="calculadora" className="relative py-28 lg:py-36 bg-[#fbfbfa] border-b border-[#0a2540]/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0a2540]/[0.08] bg-white px-3.5 py-1 text-[11px] font-semibold tracking-[0.18em] uppercase text-[#0a2540] shadow-sm">
            Auditoria Orçamentária Interativa · Passos e Região
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-[-0.035em] text-[#0a2540] font-display text-balance">
            Simulador Executivo: Projeção de Economia Financeira.
          </h2>
          <p className="text-sm sm:text-base text-[#425466] leading-relaxed font-normal">
            Ajuste a quantidade de equipamentos e a demanda mensal estimada da sua empresa para
            visualizar o comparativo fiscal entre a compra própria desordenada e o Outsourcing gerenciado.
          </p>
        </div>

        {/* Executive Balancesheet Card (Swiss Double-Bezel Architecture) */}
        <div className="mt-16 max-w-5xl mx-auto rounded-[2rem] p-2 bg-[#0a2540]/[0.04] border border-[#0a2540]/[0.08] shadow-[0_20px_50px_rgba(10,37,64,0.06)]">
          <div className="rounded-[calc(2rem-0.5rem)] bg-white p-6 sm:p-10 shadow-sm border border-[#0a2540]/[0.04]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              
              {/* Input Controls (Left Column) */}
              <div className="lg:col-span-7 space-y-7">
                
                {/* Optional Company Name Input */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-[#0a2540] flex items-center justify-between">
                    <span>Razão Social / Nome da Empresa (opcional)</span>
                    <span className="text-[11px] text-[#425466]">Para personalização do laudo</span>
                  </label>
                  <div className="relative">
                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#425466]" />
                    <input
                      type="text"
                      placeholder="Ex: Clínica Santa Rita, Advocacia Silva, Indústria Alfa..."
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 text-sm bg-[#fbfbfa] border border-[#0a2540]/[0.1] rounded-xl text-[#0a2540] placeholder:text-slate-400 focus:outline-none focus:border-[#0052cc] focus:ring-2 focus:ring-[#0052cc]/15 transition-all"
                    />
                  </div>
                </div>

                {/* Slider 1: Number of printers */}
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-[#0a2540]">
                      Quantidade de Impressoras Necessárias
                    </span>
                    <span className="text-lg font-bold text-[#0052cc] font-mono tabular-nums">
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
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0a2540] transition-all"
                  />
                  <div className="flex justify-between text-[11px] text-[#425466] font-mono mt-1 px-1">
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
                    <span className="text-sm font-semibold text-[#0a2540]">
                      Volume Mensal Estimado de Páginas
                    </span>
                    <span className="text-lg font-bold text-[#0052cc] font-mono tabular-nums">
                      {monthlyPages.toLocaleString('pt-BR')} páginas/mês
                    </span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="40000"
                    step="1000"
                    value={monthlyPages}
                    onChange={(e) => setMonthlyPages(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-[#0a2540] transition-all"
                  />
                  <div className="flex justify-between text-[11px] text-[#425466] font-mono mt-1 px-1">
                    <span>0</span>
                    <span>10k</span>
                    <span>20k</span>
                    <span>30k</span>
                    <span>40k+</span>
                  </div>
                </div>

                {/* Segmented control: Print Type */}
                <div className="space-y-2">
                  <span className="text-xs font-semibold text-[#0a2540]">Perfil Cromático de Impressão</span>
                  <div className="grid grid-cols-2 gap-2 p-1 bg-[#0a2540]/[0.04] border border-[#0a2540]/[0.06] rounded-xl">
                    <button
                      type="button"
                      onClick={() => setPrintType('mono')}
                      className={`py-2 px-3 text-xs font-semibold rounded-lg transition-all duration-200 active:scale-[0.97] cursor-pointer ${
                        printType === 'mono'
                          ? 'bg-[#0a2540] text-white shadow-sm'
                          : 'text-[#425466] hover:text-[#0a2540]'
                      }`}
                    >
                      Preto e Branco (Documental)
                    </button>
                    <button
                      type="button"
                      onClick={() => setPrintType('mixed')}
                      className={`py-2 px-3 text-xs font-semibold rounded-lg transition-all duration-200 active:scale-[0.97] cursor-pointer ${
                        printType === 'mixed'
                          ? 'bg-[#0a2540] text-white shadow-sm'
                          : 'text-[#425466] hover:text-[#0a2540]'
                      }`}
                    >
                      Misto (P&B + Gráficos Coloridos)
                    </button>
                  </div>
                </div>

              </div>

              {/* Balancete Executivo Box (Right Column) */}
              <div className="lg:col-span-5 rounded-2xl p-1 bg-[#0a2540]/[0.04] border border-[#0a2540]/[0.08] shadow-md">
                <div className="rounded-[calc(1rem-0.25rem)] bg-[#fbfbfa] p-6 sm:p-7 space-y-6 border border-[#0a2540]/[0.04]">
                  
                  <div className="space-y-1.5">
                    <span className="text-[11px] font-mono text-[#0052cc] font-semibold tracking-wider uppercase">
                      Balanço Comparativo Mensal
                    </span>
                    <div className="text-3xl sm:text-4xl font-extrabold text-[#00875a] font-mono tabular-nums tracking-tight">
                      ~R$ {Math.round(calculations.monthlySavings).toLocaleString('pt-BR')}
                      <span className="text-sm font-normal text-[#425466]"> /mês economizados</span>
                    </div>
                    <div>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-xs font-semibold text-emerald-800">
                        <TrendingDown className="w-3.5 h-3.5" />
                        <span>Redução estimada de {calculations.percentageSavings}% no custo total</span>
                      </span>
                    </div>
                  </div>

                  {/* Annual projection audited memo */}
                  <div className="p-4 rounded-xl bg-white border border-[#0a2540]/[0.08] space-y-1 shadow-sm">
                    <div className="text-[11px] font-mono font-medium text-[#425466]">Economia Líquida Anual Projetada:</div>
                    <div className="text-2xl font-black text-[#00875a] font-mono tabular-nums">
                      ~R$ {Math.round(calculations.yearlySavings).toLocaleString('pt-BR')} /ano
                    </div>
                    <div className="text-[11px] text-[#425466]">
                      Sem incluir a eliminação do passivo de técnicos avulsos e compras paradas.
                    </div>
                  </div>

                  {/* Breakdown balance rows */}
                  <div className="space-y-2.5 text-xs border-t border-[#0a2540]/[0.08] pt-4 text-[#425466]">
                    <div className="flex items-center justify-between">
                      <span>Cenário Compra Avulsa (sem gestão):</span>
                      <span className="font-mono tabular-nums text-slate-400 line-through">
                        R$ {Math.round(calculations.currentMonthlyTotal).toLocaleString('pt-BR')}
                      </span>
                    </div>
                    <div className="flex items-center justify-between font-semibold text-[#0a2540]">
                      <span>Proposta Outsourcing Gerenciado:</span>
                      <span className="font-mono tabular-nums text-[#0052cc] font-bold">
                        R$ {Math.round(calculations.outsourcingMonthlyTotal).toLocaleString('pt-BR')}
                      </span>
                    </div>
                  </div>

                  {/* Action Button with Nested Island CTA */}
                  <button
                    type="button"
                    onClick={handleSendSimulation}
                    className="group w-full py-3 pl-6 pr-2 text-xs sm:text-sm font-semibold text-white bg-[#0a2540] hover:bg-[#0052cc] active:scale-[0.97] rounded-full shadow-lg shadow-[#0a2540]/20 flex items-center justify-between transition-all duration-200 cursor-pointer"
                  >
                    <span>Receber Laudo Oficial no WhatsApp</span>
                    <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center transition-transform duration-200 group-hover:translate-x-0.5">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </button>

                  <div className="text-[10px] text-center text-[#425466]">
                    *Simulação executiva fundamentada na média de custos corporativos de Passos e Sudoeste Mineiro.
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
