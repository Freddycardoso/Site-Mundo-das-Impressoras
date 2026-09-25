export const WHATSAPP_PHONE = '5535999536494';
export const DISPLAY_PHONE = '(35) 99953-6494';
export const DISPLAY_LOCATION = 'Passos - MG e Região';

/**
 * Generates a direct WhatsApp link with pre-formatted text.
 */
export function getWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message.trim());
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encoded}`;
}

export function getCategoryWhatsAppLink(categoryName: string, printerModel?: string): string {
  if (printerModel && printerModel.trim().length > 0) {
    return getWhatsAppLink(
      `Olá, vi o site da Mundo das Impressoras e tenho interesse na categoria "${categoryName}" para o equipamento/modelo: ${printerModel.trim()}. Gostaria de verificar disponibilidade e cotação.`
    );
  }
  return getWhatsAppLink(
    `Olá, vi o site e tenho interesse na categoria ${categoryName}.`
  );
}

export function getOutsourcingWhatsAppLink(companyData?: {
  companyName?: string;
  printersCount?: number;
  monthlyPages?: number;
}): string {
  if (companyData && (companyData.companyName || companyData.printersCount)) {
    const parts = [
      'Olá, equipe Mundo das Impressoras!',
      'Gostaria de solicitar um Estudo de Redução de Custos (Outsourcing de Impressão) para minha empresa.',
    ];
    if (companyData.companyName) {
      parts.push(`Empresa: ${companyData.companyName}`);
    }
    if (companyData.printersCount) {
      parts.push(`Parque estimado: ${companyData.printersCount} impressoras`);
    }
    if (companyData.monthlyPages) {
      parts.push(`Volume mensal estimado: ~${companyData.monthlyPages.toLocaleString('pt-BR')} páginas/mês`);
    }
    parts.push('Poderiam entrar em contato para conversarmos sobre um diagnóstico gratuito?');
    return getWhatsAppLink(parts.join('\n'));
  }

  return getWhatsAppLink(
    'Olá, gostaria de solicitar um Estudo de Redução de Custos com Outsourcing de Impressão para minha empresa.'
  );
}

export function getMaintenanceWhatsAppLink(serviceType?: string, equipmentModel?: string, problemDescription?: string): string {
  const parts = [
    'Olá, gostaria de agendar uma manutenção / solicitar coleta com a assistência técnica da Mundo das Impressoras.',
  ];
  if (serviceType) parts.push(`Tipo de serviço: ${serviceType}`);
  if (equipmentModel) parts.push(`Modelo da impressora: ${equipmentModel}`);
  if (problemDescription) parts.push(`Sintoma/Problema: ${problemDescription}`);
  parts.push('Estou localizado em Passos/região.');
  return getWhatsAppLink(parts.join('\n'));
}
