export interface CategoryItem {
  id: string;
  title: string;
  shortDesc: string;
  longDesc: string;
  badge: string;
  highlights: string[];
  popularModels: string[];
  accentColor: 'cyan' | 'emerald' | 'amber' | 'blue' | 'indigo' | 'purple';
  iconType: 'toner' | 'cartridge' | 'thermal' | 'multifunctional' | 'parts' | 'paper';
}

export const CATEGORIES: CategoryItem[] = [
  {
    id: 'toners-compativeis',
    title: 'Toners Compatíveis & Originais',
    shortDesc: 'Laser monocromático e colorido de alto rendimento para escritórios e indústrias.',
    longDesc: 'Toners 100% novos com certificação de rendimento por página ISO/IEC 19752. Até 65% de economia em relação ao original de balcão sem perder nitidez ou densidade de preto.',
    badge: 'Alta Economia',
    highlights: [
      'Chip atualizado com reconhecimento imediato',
      'Rendimento real de 1.000 a 25.000 páginas',
      'Pó magnético micropulverizado de fusão rápida',
      'Garantia total contra falhas de impressão',
    ],
    popularModels: ['HP 105A / W1105A', 'Brother TN1060 / TN2370', 'Samsung D111S', 'Kyocera TK-1175', 'HP CF217A (17A)'],
    accentColor: 'cyan',
    iconType: 'toner',
  },
  {
    id: 'cartuchos-tintas',
    title: 'Cartuchos Originais & Tintas EcoTank',
    shortDesc: 'Tintas corantes e pigmentadas de alta pureza para impressoras tanque e cartuchos.',
    longDesc: 'Refis de tinta para garrafas EcoTank (Epson), Mega Tank (Canon) e Ink Tank (HP). Cores vibrantes com secagem ultra-rápida, evitando entupimento dos bicos da cabeça micropiezo.',
    badge: 'Fidelidade Cromática',
    highlights: [
      'Frascos com bico inteligente antivazamento',
      'Compatível com Epson linha L3150, L3250, L4260',
      'Resistência ao desbotamento por raios UV',
      'Cartuchos originais selados com chip de fábrica',
    ],
    popularModels: ['Epson T544 (Preto e Cores)', 'Canon GI-190', 'HP GT53 / GT52', 'Epson T504', 'Brother BTD60BK'],
    accentColor: 'blue',
    iconType: 'cartridge',
  },
  {
    id: 'impressoras-termicas',
    title: 'Impressoras Térmicas & Automação',
    shortDesc: 'Agilidade comprovada para emissão de pedidos iFood, cupons não fiscais e etiquetas.',
    longDesc: 'Equipamentos robustos para balcões comerciais, mercados, farmácias, logística e expedição. Impressão térmica direta sem uso de fita ou tinta, com guilhotina de corte rápido.',
    badge: 'Automação Comercial',
    highlights: [
      'Velocidade de até 260 mm/segundo',
      'Compatibilidade com iFood, Anota AI, ERPs e PDV',
      'Interfaces USB, Ethernet e Bluetooth',
      'Impressão de código de barras 1D e QR Code 2D',
    ],
    popularModels: ['Elgin i9 / i7', 'Epson TM-T20X', 'Bematech MP-4200', 'Zebra ZD220 (Etiquetas)', 'Xprinter Térmica 80mm'],
    accentColor: 'amber',
    iconType: 'thermal',
  },
  {
    id: 'multifuncionais-corporativas',
    title: 'Multifuncionais Corporativas (B2B)',
    shortDesc: 'Máquinas robustas para alto volume, frente e verso automático e gestão em rede.',
    longDesc: 'Equipamentos prontos para fluxo intenso de trabalho em escritórios contábeis, advocacia, clínicas e fábricas. Disponíveis para locação imediata (Outsourcing) ou aquisição direta.',
    badge: 'Alto Desempenho',
    highlights: [
      'Alimentador automático de originais (ADF) duplex',
      'Digitalização direta para e-mail e nuvem',
      'Controle por PIN e bilhetagem de usuários',
      'Conexão Wi-Fi, cabo Gigabit e painel touchscreen',
    ],
    popularModels: ['Brother DCP-L5652DN', 'Brother MFC-L6902DW', 'HP LaserJet Pro M428fdw', 'Kyocera Ecosys M2040dn'],
    accentColor: 'emerald',
    iconType: 'multifunctional',
  },
  {
    id: 'pecas-assistencia',
    title: 'Peças & Componentes Técnicos',
    shortDesc: 'Cabeças de impressão, películas de fusor, dampers e roletes de tração originais.',
    longDesc: 'Linha completa de componentes para reposição técnica imediata. Peças testadas em bancada para solucionar atolamento de papel, borrões, falhas de tração e códigos de erro.',
    badge: 'Reposição Imediata',
    highlights: [
      'Cabeças de impressão originais Epson e Brother',
      'Películas de fusor metálicas e de teflon de alta caloria',
      'Roletes pick-up rollers em borracha de alta aderência',
      'Placas lógicas, fontes e almofadas de descarte',
    ],
    popularModels: ['Cabeça Epson L3150/L3250', 'Película Fusor HP 107w/135w', 'Pick-up Roller Brother L5652', 'Kit Almofadas Reset'],
    accentColor: 'indigo',
    iconType: 'parts',
  },
  {
    id: 'bobinas-papeis',
    title: 'Bobinas Térmicas & Papéis Especiais',
    shortDesc: 'Bobinas homologadas para cupom fiscal/PDV e papéis fotográficos microporosos.',
    longDesc: 'Papel térmico de alta densidade sem liberação de pó de celulose que desgasta a cabeça térmica. Durabilidade de impressão de até 5 anos em condições normais de arquivo.',
    badge: 'Linha Homologada',
    highlights: [
      'Medidas 80mm x 40m, 80mm x 30m e 57mm x 300m',
      'Gramatura 48g e 55g com papel térmico original',
      'Papéis fotográficos glossy e matte (180g / 230g)',
      'Caixas econômicas no atacado para comércios locais',
    ],
    popularModels: ['Bobina Térmica 80x40 (Caixa 30 un)', 'Bobina Térmica Cartão 57x30', 'Papel Glossy A4 180g (Pacote 100 fls)'],
    accentColor: 'purple',
    iconType: 'paper',
  },
];

export const REGIONAL_CITIES = [
  'Passos',
  'Itaú de Minas',
  'Fortaleza de Minas'
];

export const SUPPORTED_BRANDS = [
  { name: 'Brother', category: 'Laser & Multifuncionais' },
  { name: 'Epson', category: 'EcoTank & Matricial' },
  { name: 'HP', category: 'LaserJet & InkAdvantage' },
  { name: 'Canon', category: 'MegaTank & Profissional' },
  { name: 'Zebra', category: 'Impressoras de Etiquetas' },
  { name: 'Elgin', category: 'Automação Comercial & PDV' },
  { name: 'Kyocera', category: 'Alto Volume Corporativo' },
  { name: 'Samsung', category: 'Laser Monocromático' },
];
