import React, { useState } from 'react';
import { ChevronDown, HelpCircle, MessageCircle } from 'lucide-react';
import { getWhatsAppLink } from '../utils/whatsapp';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'O toner compatível pode danificar minha impressora?',
      a: 'Não! Nossos toners compatíveis são 100% novos de fábrica (não são recarregados), fabricados sob rigorosas normas de qualidade ISO 9001 e ISO/IEC 19752. O pó de toner tem a mesma fusão e granulação do original, garantindo nitidez e preservando a vida útil do fusor e do cilindro.',
    },
    {
      q: 'Como funciona o contrato de Outsourcing de Impressão para empresas?',
      a: 'Nós instalamos as impressoras ideais para o seu fluxo de trabalho sem custo de aquisição. O contrato inclui todos os toners necessários, manutenção preventiva, peças de reposição e máquina backup em caso de falha. Sua empresa só paga uma franquia mensal com valor fixo por página impressa, gerando economia de até 40%.',
    },
    {
      q: 'Vocês emitem Nota Fiscal e faturam para empresas (CNPJ)?',
      a: 'Sim, emitimos Nota Fiscal Eletrônica (NF-e) para todos os produtos e serviços. Para empresas cadastradas da região de Passos, disponibilizamos faturamento com boleto bancário quinzenal ou mensal.',
    },
    {
      q: 'Qual é o prazo de entrega de suprimentos em Passos e região?',
      a: 'Para Passos-MG, pedidos de itens em estoque confirmados até as 14h são entregues no mesmo dia. Para cidades vizinhas (como São Sebastião do Paraíso, Alpinópolis, Itaú de Minas), realizamos rotas programadas ou envio expresso com entrega em 24h.',
    },
    {
      q: 'Como funciona a coleta para assistência técnica e conserto?',
      a: 'Basta nos chamar no WhatsApp informando o modelo e o defeito apresentado. Se você está em Passos, agendamos a coleta do equipamento no seu local ou você pode entregar em nossa base para avaliação técnica imediata.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-24 bg-slate-100 border-b border-blue-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center space-y-3 mb-12">
          <div className="text-xs font-mono text-blue-600 font-semibold tracking-wider uppercase">
            Perguntas Frequentes
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 font-display">
            Tire suas dúvidas antes de solicitar
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Respostas diretas sobre suprimentos, garantia e o modelo de Outsourcing.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="rounded-xl bg-white border border-blue-100/60 shadow-sm shadow-slate-200/40 transition-colors overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 focus:outline-none cursor-pointer hover:bg-blue-50/50 transition-colors"
                >
                  <span className="text-sm sm:text-base font-semibold text-slate-800 font-display">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-blue-600 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-blue-100">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions banner */}
        <div className="mt-12 text-center p-6 rounded-2xl bg-blue-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left space-y-1">
            <h4 className="text-sm sm:text-base font-bold text-white">
              Ainda tem alguma dúvida específica?
            </h4>
            <p className="text-xs text-blue-100/70">
              Converse diretamente com nosso suporte técnico de Passos no WhatsApp.
            </p>
          </div>

          <a
            href={getWhatsAppLink('Olá, tenho uma dúvida que não encontrei no site da Mundo das Impressoras.')}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 text-xs font-semibold text-blue-600 bg-white hover:bg-blue-50 rounded-xl whitespace-nowrap active:scale-95 transition-all shrink-0 flex items-center gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Falar no WhatsApp</span>
          </a>
        </div>

      </div>
    </section>
  );
};
