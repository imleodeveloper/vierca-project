CREATE TABLE plans_chatbots (
  id uuid primary key default gen_random_uuid(),
  title_plan TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  features TEXT[],
  price numeric (10,2),
  original_price numeric (10,2),
  is_monthly_fee boolean default false,
  conversations_per_month integer,
  site_development boolean default false,
  chatbot_installation boolean default false,
  price_installation_separate numeric (10,2),
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now(),
  notes TEXT
);


-- Anual Chatbot

INSERT INTO public.plans_chatbots (
  title_plan, slug, description, features, price, original_price, is_monthly_fee, conversations_per_month, site_development, chatbot_installation, price_installation_separate
) VALUES
-- Chatbot Anual - Básico
(
  'Chatbot Anual Básico',
  'chatbot-anual-basic',
  'Ideal para sites pessoais ou pequenos negócios em início de jornada com IA. Válido para 1 site (1 domínio).',
  ARRAY[
      'Aproximadamente 12.000 conversas por ano',
      'Custo acessível para começar',
      'Ideal para sites pessoais e pequenos negócios',
      'Incluso desenvolvimento de site',
      'Incluso domínio 01 ano gratuito',
      'Incluso instalação de chatbot',
      'Incluso suporte técnico'
  ]::TEXT[],
  91.58,
  115.0,
  false,
  1000,
  true,
  true,
  0
),
-- Chatbot Anual - Intermediário
(
  'Chatbot Anual Intermediário',
  'chatbot-anual-intermediate',
  'Perfeito para negócios com tráfego moderado e atendimento ativo via chatbot. Válido para 1 site (1 domínio)',
  ARRAY[
      'Aproximadamente 120.000 conversas por ano',
      'Escalável e com bom custo-benefício',
      'Indicado para ecommerces, consultórios, prestadores de serviço',
      'Incluso desenvolvimento de site',
      'Incluso domínio 01 ano gratuito',
      'Incluso instalação de chatbot',
      'Incluso suporte técnico'
  ]::TEXT[],
  214.0,
  254.0,
  false,
  10000,
  true,
  true,
  0
),
-- Chatbot Anual - Profissional
(
  'Chatbot Anual Profissional',
  'chatbot-anual-profissional',
  'Solução robusta para empresas com grande volume de tráfego e atendimentos. Válido para 1 site (1 domínio)',
  ARRAY[
      'Aproximadamente 240.000 conversas por ano',
      'Estável, eficiente e preparado para alto volume',
      'Ideal para marketplaces, SaaS, franquias digitais',
      'Incluso desenvolvimento de site',
      'Incluso domínio 01 ano gratuito',
      'Incluso instalação de chatbot',
      'Incluso suporte técnico'
  ]::TEXT[],
  379.0,
  429.0,
  false,
  20000,
  true,
  true,
  0
),


-- Mensal Chatbot
-- Chatbot Mensal - Básico
(
 'Chatbot Mensal Básico',
 'chatbot-mensal-basic',
 'Ideal para sites pessoais ou pequenos negócios em início de jornada com IA. Válido para 1 site (1 domínio)',
 ARRAY[
      'Aproximadamente 1.000 conversas no mês',
      'Custo acessível para começar',
      'Incluso suporte técnico',
      'Instalação 100% por nossa conta'
 ]::TEXT[],
 115.0,
 0,
 true,
 1000,
 false,
 false,
 300
),
-- Chatbot Mensal - Intermediário
(
 'Chatbot Mensal Intermediário',
 'chatbot-mensal-intermediate',
 'Perfeito para negócios com tráfego moderado e atendimento ativo via chatbot. Válido para 1 site (1 domínio)',
 ARRAY[
      'Aproximadamente 10.000 conversas no mês',
      'Custo acessível para começar',
      'Instalação 100% por nossa conta',
      'Incluso suporte técnico'
 ]::TEXT[],
 254.0,
 0,
 true,
 10000,
 false,
 true,
 0
),
-- Chatbot Mensal - Profissional
(
 'Chatbot Mensal Profissional',
 'chatbot-mensal-profissional',
 'Solução robusta para empresas com grande volume de tráfego e atendimentos. Válido para 1 site (1 domínio)',
 ARRAY[
      'Aproximadamente 20.000 conversas no mês',
      'Custo acessível para começar',
      'Instalação 100% por nossa conta',
      'Incluso suporte técnico'
 ]::TEXT[],
 429.0,
 0,
 true,
 20000,
 false,
 true,
 0
),
-- Chatbot Mensal - Teste
(
 'Chatbot Mensal Teste',
 'chatbot-teste',
 'Solução robusta para empresas com grande volume de tráfego e atendimentos. Válido para 1 site (1 domínio)',
 ARRAY[
      'Aproximadamente 20.000 conversas no mês',
      'Custo acessível para começar',
      'Instalação 100% por nossa conta',
      'Incluso suporte técnico'
 ]::TEXT[],
 1.0,
 5.0,
 true,
 1000,
 false,
 false,
 1.5
)