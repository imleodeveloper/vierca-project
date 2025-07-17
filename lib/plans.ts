interface PlansChatbots {
  type: "chatbot";
  title_plan: string;
  slug: string;
  description: string;
  features: string[];
  price: number;
  originalPrice?: number;
  isMonthlyFee: boolean;
  conversationsPerMonth: number;
  site_development: boolean;
  chatbot_installation: boolean;
  price_installation_separate?: number;
  popular: boolean;
  benefits?: string;
  warning?: string;
}

interface PlansSites {
  type: "site";
  title_plan: string;
  slug: string;
  description: string;
  features: string[];
  price: number;
  originalPrice?: number;
  isMonthlyFee: boolean;
  additionalMonthlyFee?: number;
  chatbot_installation: boolean;
  popular: boolean;
  benefits?: string;
  warning?: string;
}

export const plans_chatbots: PlansChatbots[] = [
  {
    type: "chatbot",
    title_plan: "Chatbot Teste",
    slug: "chatbot-teste",
    description: "Chatbot com IA para seu site - pagamento mensal",
    features: [
      "Aproximadamente 1.000 conversas no mês",
      "Custo acessível para começar",
      "Incluso suporte técnico",
      "Instalação 100% por nossa conta",
    ],
    price: 1.0,
    originalPrice: 5.0,
    isMonthlyFee: true,
    conversationsPerMonth: 1000,
    site_development: false,
    chatbot_installation: false,
    price_installation_separate: 1.5,
    popular: false,
    warning:
      "Atenção: A contratação deste plano não inclui a instalação do chatbot. A instalação deve ser adquirida separadamente por um pagamento único de R$ 300,00.",
  },
  {
    type: "chatbot",
    title_plan: "Chatbot Mensal Básico",
    slug: "chatbot-mensal-basic",
    description: "Chatbot com IA para seu site - pagamento mensal",
    features: [
      "Aproximadamente 1.000 conversas no mês",
      "Custo acessível para começar",
      "Incluso suporte técnico",
      "Instalação 100% por nossa conta",
    ],
    price: 115.0,
    isMonthlyFee: true,
    conversationsPerMonth: 1000,
    site_development: false,
    chatbot_installation: false,
    price_installation_separate: 300,
    popular: false,
    warning:
      "Atenção: A contratação deste plano não inclui a instalação do chatbot. A instalação deve ser adquirida separadamente por um pagamento único de R$ 300,00.",
  },
  {
    type: "chatbot",
    title_plan: "Chatbot Mensal Intermediário",
    slug: "chatbot-mensal-intermediate",
    description: "Chatbot com IA para seu site - pagamento mensal",
    features: [
      "Aproximadamente 10.000 conversas no mês",
      "Custo acessível para começar",
      "Instalação 100% por nossa conta",
      "Incluso suporte técnico",
    ],
    price: 254.0,
    isMonthlyFee: true,
    conversationsPerMonth: 10000,
    site_development: false,
    chatbot_installation: true,
    popular: true,
    benefits: "A contratação deste plano inclui a instalação do chatbot.",
  },
  {
    type: "chatbot",
    title_plan: "Chatbot Mensal Profissional",
    slug: "chatbot-mensal-profissional",
    description: "Chatbot com IA para seu site - pagamento mensal",
    features: [
      "Aproximadamente 20.000 conversas no mês",
      "Custo acessível para começar",
      "Instalação 100% por nossa conta",
      "Incluso suporte técnico",
    ],
    price: 429.0,
    isMonthlyFee: true,
    conversationsPerMonth: 20000,
    site_development: false,
    chatbot_installation: true,
    popular: false,
    benefits: "A contratação deste plano inclui a instalação do chatbot.",
  },
  {
    type: "chatbot",
    title_plan: "Chatbot Anual Básico",
    slug: "chatbot-anual-basic",
    description: "Chatbot com IA e site incluso - pagamento anual",
    features: [
      "Aproximadamente 12.000 conversas por ano",
      "Custo acessível para começar",
      "Ideal para sites pessoais e pequenos negócios",
      "Incluso desenvolvimento de site",
      "Incluso domínio 01 ano gratuito",
      "Incluso instalação de chatbot",
      "Incluso suporte técnico",
    ],
    price: 91.58,
    originalPrice: 115.0,
    isMonthlyFee: false,
    conversationsPerMonth: 1000,
    site_development: true,
    chatbot_installation: true,
    popular: false,
    benefits:
      "Neste plano você tem incluso: Desenvolvimento de site, instalação do chatbot, domínio gratuíto por 1 ano e suporte técnico",
  },
  {
    type: "chatbot",
    title_plan: "Chatbot Anual Intermediário",
    slug: "chatbot-anual-intermediate",
    description: "Chatbot com IA e site incluso - pagamento anual",
    features: [
      "Aproximadamente 120.000 conversas por ano",
      "Escalável e com bom custo-benefício",
      "Indicado para ecommerces, consultórios, prestadores de serviço",
      "Incluso desenvolvimento de site",
      "Incluso domínio 01 ano gratuito",
      "Incluso instalação de chatbot",
      "Incluso suporte técnico",
    ],
    price: 214.0,
    originalPrice: 254.0,
    isMonthlyFee: false,
    conversationsPerMonth: 10000,
    site_development: true,
    chatbot_installation: true,
    popular: true,
    benefits:
      "Neste plano você tem incluso: Desenvolvimento de site, instalação do chatbot, domínio gratuíto por 1 ano e suporte técnico",
  },
  {
    type: "chatbot",
    title_plan: "Chatbot Anual Profissional",
    slug: "chatbot-anual-profissional",
    description: "Chatbot com IA e site incluso - pagamento anual",
    features: [
      "Aproximadamente 240.000 conversas por ano",
      "Estável, eficiente e preparado para alto volume",
      "Ideal para marketplaces, SaaS, franquias digitais",
      "Incluso desenvolvimento de site",
      "Incluso domínio 01 ano gratuito",
      "Incluso instalação de chatbot",
      "Incluso suporte técnico",
    ],
    price: 379.0,
    originalPrice: 429.0,
    isMonthlyFee: false,
    conversationsPerMonth: 20000,
    site_development: true,
    chatbot_installation: true,
    popular: false,
    benefits:
      "Neste plano você tem incluso: Desenvolvimento de site, instalação do chatbot, domínio gratuíto por 1 ano e suporte técnico",
  },
];

export const plans_sites: PlansSites[] = [
  {
    type: "site",
    title_plan: "Starter Chatbot - Site com Chatbot",
    slug: "starter-chatbot",
    description: "Landing Page e chatbot integrado",
    features: [
      "Site responsivo com até 7 seções",
      "Chatbot com respostas automáticas",
      "Atendimento 24/7 em seu site",
      "Aprox. 1.000 conversas mensais",
      "Suporte técnico",
      "Domínio gratuito por 01 ano",
    ],
    price: 1200.0,
    isMonthlyFee: true,
    additionalMonthlyFee: 115.0,
    chatbot_installation: true,
    popular: false,
    benefits: "O primeiro mês de uso do chatbot é totalmente gratuito.",
    warning:
      "Este plano acompanha o pacote mensal para o funcionamento do chatbot: R$ 115,00/mês",
  },
  {
    type: "site",
    title_plan: "Pro Chatbot - Site com Chatbot",
    slug: "pro-chatbot",
    description: "Site institucional e chatbot integrado",
    features: [
      "Site responsivo com até 10 páginas",
      "Chatbot com respostas automáticas",
      "Atendimento 24/7 em seu site",
      "Aprox. 10.000 conversas mensais",
      "Suporte técnico",
      "Domínio gratuito por 01 ano",
    ],
    price: 2500.0,
    isMonthlyFee: true,
    additionalMonthlyFee: 254.0,
    chatbot_installation: true,
    popular: true,
    benefits: "O primeiro mês de uso do chatbot é totalmente gratuito.",
    warning:
      "Este plano acompanha o pacote mensal para o funcionamento do chatbot: R$ 254,00/mês",
  },
  {
    type: "site",
    title_plan: "Business Chatbot - Site com Chatbot",
    slug: "business-chatbot",
    description: "Site com sistema e chatbot integrado",
    features: [
      "Site ilimitado com design personalizado",
      "Chatbot com respostas automáticas",
      "Integração com múltiplos sistemas",
      "Painel administrativo avançado",
      "Aprox. 20.000 conversas mensais",
      "Domínio gratuito por 01 ano",
      "Atendimento 24/7 em seu site",
    ],
    price: 4500.0,
    isMonthlyFee: true,
    additionalMonthlyFee: 429.0,
    chatbot_installation: true,
    popular: false,
    benefits: "O primeiro mês de uso do chatbot é totalmente gratuito.",
    warning:
      "Este plano acompanha o pacote mensal para o funcionamento do chatbot: R$ 429,00/mês",
  },
  {
    type: "site",
    title_plan: "Landing Page Simples",
    slug: "landing-page-simples",
    description: "Página de vendas otimizada focada em conversão",
    features: [
      "Design responsivo",
      "Otimização para conversão",
      "7 seções estratégicas",
      "Integração com formulários",
      "Suporte gratuito por 1 mês após término do site",
      "Domínio gratuito por 01 ano",
    ],
    price: 600.0,
    isMonthlyFee: false,
    chatbot_installation: false,
    popular: false,
  },
  {
    type: "site",
    title_plan: "Landing Page Premium",
    slug: "landing-page-premium",
    description: "Página de vendas otimizada focada em conversão",
    features: [
      "Design premium personalizado e responsivo",
      "Otimização para anúncios pagos",
      "Integração com formulários",
      "Integração com WhatsApp",
      "Suporte gratuito por 1 mês após término do site",
      "Domínio gratuito por 01 ano",
    ],
    price: 1200.0,
    isMonthlyFee: false,
    chatbot_installation: false,
    popular: true,
  },
  {
    type: "site",
    title_plan: "Landing Page Completa",
    slug: "landing-page-complete",
    description: "Página de vendas otimizada focada em conversão",
    features: [
      "Múltiplas páginas de vendas",
      "Sistema de pagamento integrado",
      "Automação completa de vendas",
      "Domínio gratuito por 01 ano",
    ],
    price: 2500.0,
    isMonthlyFee: true,
    additionalMonthlyFee: 130.0,
    chatbot_installation: false,
    popular: false,
    warning:
      "Este plano acompanha o pacote mensal para o funcionamento do sistema integrado: R$ 130,00/mês",
  },
  {
    type: "site",
    title_plan: "Site Institucional Básico",
    slug: "site-institucional-basic",
    description: "Site completo para sua empresa",
    features: [
      "Até 10 páginas",
      "Design responsivo",
      "SEO otimizado",
      "Formulário de contato",
      "Suporte 1 mês após finalização",
      "Domínio gratuito por 01 ano",
    ],
    price: 800.0,
    isMonthlyFee: false,
    chatbot_installation: false,
    popular: false,
  },
  {
    type: "site",
    title_plan: "Site Institucional Premium",
    slug: "site-institucional-premium",
    description: "Site completo para sua empresa",
    features: [
      "Até 15 páginas + blog",
      "Design personalizado exclusivo",
      "SEO otimizado",
      "Formulário de contato",
      "Suporte 1 mês após finalização",
      "Domínio gratuito por 01 ano",
    ],
    price: 1500.0,
    isMonthlyFee: false,
    chatbot_installation: false,
    popular: true,
  },
  {
    type: "site",
    title_plan: "Corporativo",
    slug: "site-institucional-corporativo",
    description: "Site completo para sua empresa",
    features: [
      "Portal multi-idioma",
      "Sistema de gestão de conteúdo",
      "Integração com sistemas internos",
      "Área do colaborador",
      "Suporte técnico dedicado",
      "Domínio gratuito por 01 ano",
    ],
    price: 3000.0,
    isMonthlyFee: true,
    chatbot_installation: false,
    additionalMonthlyFee: 130.0,
    benefits: "O primeiro mês de uso do site e sistema é totalmente gratuito.",
    warning:
      "Este plano acompanha o pacote mensal para o funcionamento do site e sistema integrado: R$ 130,00/mês",
    popular: false,
  },

  {
    type: "site",
    title_plan: "Loja Virtual Completa",
    slug: "ecommerce-basic",
    description: "Loja Básica - E-commerce",
    features: [
      "Catálogo de produtos",
      "Carrinho de compras",
      "Integração com pagamentos",
      "Painel administrativo",
      "SEO otimizado",
      "Hospedagem inicial gratuita",
    ],
    price: 1600.0,
    isMonthlyFee: true,
    chatbot_installation: false,
    additionalMonthlyFee: 130.0,
    benefits: "O primeiro mês de uso do site e sistema é totalmente gratuito.",
    warning:
      "Este plano acompanha o pacote mensal para o funcionamento do site e sistema integrado: R$ 130,00/mês",
    popular: false,
  },
  {
    type: "site",
    title_plan: "Loja Profissional - E-commerce",
    slug: "ecommerce-pro",
    description: "Loja virtual completa",
    features: [
      "Produtos ilimitados",
      "Múltiplas formas de pagamento",
      "Sistema de cupons e promoções",
      "Gestão de estoque avançada",
      "Relatórios de vendas",
    ],
    price: 3200.0,
    isMonthlyFee: true,
    chatbot_installation: false,
    additionalMonthlyFee: 130.0,
    benefits: "O primeiro mês de uso do site e sistema é totalmente gratuito.",
    warning:
      "Este plano acompanha o pacote mensal para o funcionamento do site e sistema integrado: R$ 130,00/mês",
    popular: true,
  },
  {
    type: "site",
    title_plan: "Marketplace - E-commerce",
    slug: "ecommerce-marketplace",
    description: "Plataforma de vendas multi-vendor",
    features: [
      "Sistema multi-vendor",
      "Comissões automáticas",
      "Painel para vendedores",
      "Sistema de avaliações",
      "Logística integrada",
      "Suporte empresarial",
    ],
    price: 6500.0,
    isMonthlyFee: true,
    chatbot_installation: false,
    additionalMonthlyFee: 500.0,
    benefits: "O primeiro mês de uso do site e sistema é totalmente gratuito.",
    warning:
      "Este plano acompanha o pacote mensal para o funcionamento do site e sistema integrado: R$ 500,00/mês",
    popular: false,
  },
];
