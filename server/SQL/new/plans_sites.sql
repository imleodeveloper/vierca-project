CREATE TABLE plans_sites (
  id uuid primary key default gen_random_uuid(),
  title_plan TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  features TEXT[],
  price numeric (10,2),
  original_price numeric (10,2),
  is_monthly_fee boolean default false,
  additional_price_monthly_fee numeric (10,2),
  chatbot_installation boolean default false,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now(),
  notes TEXT
);

INSERT INTO public.plans_sites (
  title_plan, slug, description, features, price, original_price, is_monthly_fee, additional_price_monthly_fee, chatbot_installation
)
VALUES

-- Sites com chatbot
-- Starter Chatbot - Site com Chatbot 
(
  'Starter Chatbot - Site com Chatbot',
  'starter-chatbot',
  'Ideal para pequenos negócios que querem automatizar o atendimento básico com presença online profissional.',
  ARRAY[
      'Site responsivo com até 7 seções',
      'Chatbot com respostas automáticas',
      'Atendimento 24/7 em seu site',
      'Aprox. 1.000 conversas mensais',
      'Suporte técnico',
      'Domínio gratuito por 01 ano'
  ]::TEXT[],
  1200.0,
  0,
  true,
  115.0,
  true
),
-- Pro Chatbot - Site com Chatbot 
(
  'Pro Chatbot - Site com Chatbot',
  'pro-chatbot',
  'Perfeito para empresas que precisam de presença online robusta com atendimento automatizado inteligente.',
  ARRAY[
      'Site responsivo com até 10 páginas',
      'Chatbot com respostas automáticas',
      'Atendimento 24/7 em seu site',
      'Aprox. 10.000 conversas mensais',
      'Suporte técnico',
      'Domínio gratuito por 01 ano'
  ]::TEXT[],
  2500.0,
  0,
  true,
  254.0,
  true
),
-- Business Chatbot - Site com Chatbot 
(
  'Business Chatbot - Site com Chatbot',
  'business-chatbot',
  'Para empresas que precisam de máxima performance, escalabilidade e recursos avançados de automação.',
  ARRAY[
      'Site ilimitado com design personalizado',
      'Chatbot com respostas automáticas',
      'Integração com múltiplos sistemas',
      'Painel administrativo avançado',
      'Aprox. 20.000 conversas mensais',
      'Domínio gratuito por 01 ano',
      'Atendimento 24/7 em seu site'
  ]::TEXT[],
  4500.0,
  0,
  true,
  429.0,
  true
),


-- Landing Pages
-- Landing Page Simples
(
  'Landing Page Simples',
  'landing-page-simples',
  'Ideal para campanhas específicas, lançamentos de produtos ou captação de leads.',
  ARRAY[
      'Design responsivo',
      'Otimização para conversão',
      '7 seções estratégicas',
      'Integração com formulários',
      'Suporte gratuito por 1 mês após término do site',
      'Domínio gratuito por 01 ano'
  ]::TEXT[],
  600.0,
  0,
  false,
  0,
  false
),
-- Landing Page Premium
(
  'Landing Page Premium',
  'landing-page-premium',
  'Para campanhas de alto impacto com recursos de automação e análise detalhada.',
  ARRAY[
      'Design premium personalizado e responsivo',
      'Otimização para anúncios pagos',
      'Integração com formulários',
      'Integração com WhatsApp',
      'Suporte gratuito por 1 mês após término do site',
      'Domínio gratuito por 01 ano'
  ]::TEXT[],
  1200.0,
  0,
  false,
  0,
  false
),
-- Landing Page Completa
(
  'Landing Page Completa',
  'landing-page-complete',
  'Solução completa com múltiplas páginas e painel de vendas para maximizar conversões.',
  ARRAY[
      'Múltiplas páginas de vendas',
      'Sistema de pagamento integrado',
      'Automação completa de vendas',
      'Domínio gratuito por 01 ano'
  ]::TEXT[],
  2500.0,
  0,
  true,
  130.0,
  false
),

-- Site Institucional Básico
(
  'Site Institucional Básico',
  'site-institucional-basic',
  'Apresente sua empresa com credibilidade e profissionalismo online.',
  ARRAY[
      'Até 10 páginas',
      'Design responsivo',
      'SEO otimizado',
      'Formulário de contato',
      'Suporte 1 mês após finalização',
      'Domínio gratuito por 01 ano'
  ]::TEXT[],
  800.0,
  0,
  false,
  0,
  false
),
-- Site Institucional Premium
(
  'Site Institucional Premium',
  'site-institucional-premium',
  'Solução completa para empresas que querem se destacar no mercado digital.',
  ARRAY[
      'Até 15 páginas + blog',
      'Design personalizado exclusivo',
      'SEO otimizado',
      'Formulário de contato',
      'Suporte 1 mês após finalização',
      'Domínio gratuito por 01 ano'
  ]::TEXT[],
  1500.0,
  0,
  false,
  0,
  false
),
-- Site Institucional Corporativo
(
  'Corporativo',
  'site-institucional-corporativo',
  'Para grandes empresas que precisam de um portal robusto e funcionalidades avançadas.',
  ARRAY[
      'Portal multi-idioma',
      'Sistema de gestão de conteúdo',
      'Integração com sistemas internos',
      'Área do colaborador',
      'Suporte técnico dedicado',
      'Domínio gratuito por 01 ano'
  ]::TEXT[],
  3000.0,
  0,
  true,
  130.0,
  false
),

-- Loja Virtual
-- BÁSICA
(
  'Loja Virtual Completa',
  'ecommerce-basic',
  'Comece a vender online com uma loja virtual completa e fácil de gerenciar.',
  ARRAY[
      'Catálogo de produtos',
      'Carrinho de compras',
      'Integração com pagamentos',
      'Painel administrativo',
      'SEO otimizado',
      'Hospedagem inicial gratuita'
  ]::TEXT[],
  1600.0,
  0,
  true,
  130.0,
  false
),
-- PROFISSIONAL
(
  'Loja Profissional - E-commerce',
  'ecommerce-pro',
  'Solução robusta para empresas que querem crescer no comércio eletrônico.',
  ARRAY[
      'Produtos ilimitados',
      'Múltiplas formas de pagamento',
      'Sistema de cupons e promoções',
      'Gestão de estoque avançada',
      'Relatórios de vendas'
  ]::TEXT[],
  3200.0,
  0,
  true,
  130.0,
  false
),
-- MARKETPLACE
(
  'Marketplace - E-commerce',
  'ecommerce-marketplace',
  'Para empresas que querem criar um marketplace com múltiplos vendedores.',
  ARRAY[
      'Sistema multi-vendor',
      'Comissões automáticas',
      'Painel para vendedores',
      'Sistema de avaliações',
      'Logística integrada',
      'Suporte empresarial'
  ]::TEXT[],
  6500.0,
  0,
  true,
  500.0,
  false
);