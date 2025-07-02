create table plans (
  id uuid primary key default gen_random_uuid(),
  category_id uuid references plan_categories(id) on delete cascade,
  name text not null,
  description text,
  price numeric(10,2) not null,
    price_type TEXT NOT NULL, -- 'mensal' | 'único' | outro
  billing_period text not null, -- ex: 'mensal', 'anual', 'único'
  conversations_per_month integer, -- aproximação do número de conversas/mês
  includes_site_development boolean default false,
  includes_chatbot_installation boolean default false,
    features TEXT,
  notes text,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Anual Chatbot

INSERT INTO public.plans (
  category_id, name, description, price, price_type, billing_period, conversations_per_month, features
) VALUES
-- Chatbot Anual - Básico
(
  'a1e7c9d4-8f2b-4f58-9a13-df1e7f3b3b1c',
  'Básico',
  'Ideal para sites pessoais ou pequenos negócios em início de jornada com IA. Válido para 1 site (1 domínio). Atendimento simples e eficaz. Incluso desenvolvimento de site e instalação chatbot.',
  91.58,
  'mensal',
  'anual',
  1000,
  ARRAY[
    'Atendimento simples e eficaz', 
    'Custo acessível', 
    'Incluso desenvolvimento de site', 
    'Incluso instalação chatbot'
  ]
),
-- Chatbot Anual - Intermediário
(
  'a1e7c9d4-8f2b-4f58-9a13-df1e7f3b3b1c',
  'Intermediário',
  'Perfeito para negócios com tráfego moderado e atendimento ativo via chatbot. Válido para 1 site (1 domínio). Escalável e com bom custo-benefício. Incluso desenvolvimento de site e instalação chatbot.',
  214.00,
  'mensal',
  'anual',
  10000,
  ARRAY[
    'Escalável e com bom custo-benefício', 
    'Indicado para ecommerces', 
    'consultórios', 
    'prestadores de serviço', 
    'Incluso desenvolvimento de site', 
    'Incluso instalação chatbot'
  ]
),
-- Chatbot Anual - Profissional
(
  'a1e7c9d4-8f2b-4f58-9a13-df1e7f3b3b1c',
  'Profissional',
  'Solução robusta para empresas com grande volume de tráfego e atendimentos. Válido para 1 site (1 domínio). Estável, eficiente e preparado para alto volume. Incluso desenvolvimento de site e instalação chatbot.',
  379.00,
  'mensal',
  'anual',
  20000,
  ARRAY[
    'Estável, eficiente e preparado para alto volume', 
    'Ideal para marketplaces', 
    'SaaS', 
    'franquias digitais', 
    'Incluso desenvolvimento de site', 
    'Incluso instalação chatbot'
  ]
);



INSERT INTO public.plans (
  category_id, name, description, price, price_type, billing_period, conversations_per_month, features
) VALUES
-- Chatbot Mensal - Básico
(
  'b2f8d0e5-7d9c-4c6e-8f75-1a2b3c4d5e6f',
  'Básico',
  'Ideal para sites pessoais ou pequenos negócios em início de jornada com IA. Válido para 1 site (1 domínio). Atendimento simples e eficaz. Não incluso desenvolvimento de site. Pagamento da instalação chatbot à parte.',
  115.00,
  'mensal',
  'mensal',
  1000,
  ARRAY[
    'Atendimento simples e eficaz', 
    'Custo acessível para começar', 
    'Não incluso desenvolvimento de site', 
    'Pagamento da instalação chatbot à parte'
  ]
),
-- Chatbot Mensal - Intermediário
(
  'b2f8d0e5-7d9c-4c6e-8f75-1a2b3c4d5e6f',
  'Intermediário',
  'Perfeito para negócios com tráfego moderado e atendimento ativo via chatbot. Válido para 1 site (1 domínio). Escalável e com bom custo-benefício. Não incluso desenvolvimento de site. Pagamento da instalação chatbot à parte.',
  254.00,
  'mensal',
  'mensal',
  10000,
  ARRAY[
    'Escalável e com bom custo-benefício', 
    'Indicado para ecommerces', 
    'consultórios', 
    'prestadores de serviço', 
    'Não incluso desenvolvimento de site', 
    'Pagamento da instalação chatbot à parte'
  ]
),
-- Chatbot Mensal - Profissional
(
  'b2f8d0e5-7d9c-4c6e-8f75-1a2b3c4d5e6f',
  'Profissional',
  'Solução robusta para empresas com grande volume de tráfego e atendimentos. Válido para 1 site (1 domínio). Preparado para alto volume. Não incluso desenvolvimento de site. Pagamento da instalação chatbot à parte.',
  429.00,
  'mensal',
  'mensal',
  20000,
  ARRAY[
    'Preparado para alto volume', 
    'Ideal para marketplaces', 
    'SaaS', 
    'franquias digitais', 
    'Não incluso desenvolvimento de site', 
    'Pagamento da instalação chatbot à parte'
  ]
);



INSERT INTO public.plans (
  category_id, name, description, price, price_type, billing_period, conversations_per_month, features
) VALUES
-- Starter Chatbot
(
  'c3a9e1f6-6e7d-5b4c-9d8e-2b3c4d5e6f7a', -- category_id para Site com chatbots
  'Starter Chatbot',
  'Landing Page com chatbot integrado. Ideal para pequenos negócios que querem automatizar o atendimento básico com presença online profissional. Site responsivo com até 7 seções, chatbot com respostas automáticas, atendimento 24/7 em seu site.',
  1200.00,
  'único',
  'único',
  1000,
  Array[
    'Site responsivo com até 7 seções', 
    'Chatbot com respostas automáticas', 
    'Atendimento 24/7 em seu site'
  ]
),
-- Pro Chatbot
(
  'c3a9e1f6-6e7d-5b4c-9d8e-2b3c4d5e6f7a',
  'Pro Chatbot',
  'Site completo com chatbot avançado. Perfeito para empresas que precisam de presença online robusta com atendimento automatizado inteligente. Site responsivo com até 10 páginas, chatbot com IA avançada, direcionamento para contato, otimização para SEO.',
  2500.00,
  'único',
  'único',
  10000,
  ARRAY[
    'Site responsivo com até 10 páginas', 
    'Chatbot com IA avançada', 
    'Direcionamento para contato', 
    'Otimização para SEO'
  ]
),
-- Business Chatbot
(
  'c3a9e1f6-6e7d-5b4c-9d8e-2b3c4d5e6f7a',
  'Business Chatbot',
  'Solução completa para grandes empresas. Site ilimitado com design personalizado, chatbot multi-idioma com IA, integração com múltiplos sistemas, painel administrativo avançado, suporte dedicado, infraestrutura escalável.',
  4500.00,
  'único',
  'único',
  20000,
  ARRAY[
    'Site ilimitado com design personalizado', 
    'Chatbot multi-idioma com IA', 
    'Integração com múltiplos sistemas', 
    'Painel administrativo avançado', 
    'Suporte dedicado', 
    'Infraestrutura escalável'
  ]
);



-- Sites

INSERT INTO public.plans (
  category_id, name, description, price, price_type, billing_period, conversations_per_month, features
) VALUES
-- Institucional Básico
(
  'd4b0f2a7-5f8e-6c7d-0a9b-3c4d5e6f7a8b', -- category_id para Site para empresas
  'Institucional Básico',
  'Site institucional profissional. Apresente sua empresa com credibilidade e profissionalismo online. Design responsivo e moderno, até 10 páginas institucionais, formulário de contato, otimização para SEO, hospedagem inicial gratuita.',
  800.00,
  'único',
  'único',
  NULL,
  ARRAY[
    'Design responsivo e moderno', 
    'Até 10 páginas institucionais', 
    'Formulário de contato', 
    'Otimização para SEO', 
    'Hospedagem inicial gratuita'
  ]
),
-- Institucional Premium
(
  'd4b0f2a7-5f8e-6c7d-0a9b-3c4d5e6f7a8b',
  'Institucional Premium',
  'Site institucional completo. Solução completa para empresas que querem se destacar no mercado digital. Design personalizado exclusivo, até 15 páginas + blog, SEO avançado, hospedagem inicial gratuita.',
  1500.00,
  'único',
  'único',
  NULL,
  ARRAY[
    'Design personalizado exclusivo', 
    'Até 15 páginas + blog', 
    'SEO avançado', 
    'Hospedagem inicial gratuita'
  ]
),
-- Corporativo
(
  'd4b0f2a7-5f8e-6c7d-0a9b-3c4d5e6f7a8b',
  'Corporativo',
  'Portal corporativo avançado. Para grandes empresas que precisam de um portal robusto e funcionalidades avançadas. Portal multi-idioma, sistema de gestão de conteúdo, integração com sistemas internos, área do colaborador, suporte técnico dedicado, hospedagem inicial gratuita.',
  3000.00,
  'único',
  'único',
  NULL,
  ARRAY[
    'Portal multi-idioma', 
    'Sistema de gestão de conteúdo', 
    'Integração com sistemas internos', 
    'Área do colaborador', 
    'Suporte técnico dedicado', 
    'Hospedagem inicial gratuita'
  ]
),

-- Landing Pages
-- Landing Page Simples
(
  '4b5c6d7e-8f90-1234-5678-9abcdef01234',
  'Landing Page Simples',
  'Página de vendas focada em conversão. Ideal para campanhas específicas, lançamentos de produtos ou captação de leads. Design otimizado para conversão, até 7 seções estratégicas, formulários de captação, integração com WhatsApp, hospedagem inicial gratuita.',
  600.00,
  'único',
  'único',
  NULL,
  ARRAY[
    'Design otimizado para conversão', 
    'Até 7 seções estratégicas', 
    'Formulários de captação', 
    'Integração com WhatsApp', 
    'Hospedagem inicial gratuita'
  ]
),
-- Landing Page Premium
(
  '4b5c6d7e-8f90-1234-5678-9abcdef01234',
  'Landing Page Premium',
  'Página de vendas com recursos avançados. Para campanhas de alto impacto com recursos de automação e análise detalhada. Design premium personalizado, otimização para anúncios pagos, formulários de captação, integração com WhatsApp, hospedagem inicial gratuita.',
  1200.00,
  'único',
  'único',
  NULL,
  ARRAY[
    'Design premium personalizado', 
    'Otimização para anúncios pagos', 
    'Formulários de captação', 
    'Integração com WhatsApp', 
    'Hospedagem inicial gratuita'
  ]
),
-- Landing Page Completa
(
  '4b5c6d7e-8f90-1234-5678-9abcdef01234',
  'Landing Page Completa',
  'Sistema completo de vendas online. Solução completa com múltiplas páginas e painel de vendas para maximizar conversões. Múltiplas páginas de vendas, sistema de pagamento integrado, automação completa de vendas, suporte especializado, hospedagem inicial gratuita.',
  2500.00,
  'único',
  'único',
  NULL,
  ARRAY[
    'Múltiplas páginas de vendas', 
    'Sistema de pagamento integrado', 
    'Automação completa de vendas', 
    'Suporte especializado', 
    'Hospedagem inicial gratuita'
  ]
);


INSERT INTO public.plans (
  category_id, name, description, price, price_type, billing_period, conversations_per_month, features
) VALUES
-- Loja Básica
(
  'e5c1a3b8-4f9a-7d8e-1b0c-4d5e6f7a8b9c', -- category_id para Loja Virtual
  'Loja Básica',
  'E-commerce para pequenos negócios. Comece a vender online com uma loja virtual completa e fácil de gerenciar. Até 100 produtos, carrinho de compras, integração com pagamentos, painel administrativo, hospedagem por 1 ano.',
  1600.00,
  'único',
  'único',
  NULL,
  ARRAY[ 
    'Até 100 produtos', 
    'Carrinho de compras', 
    'Integração com pagamentos', 
    'Painel administrativo', 
    'Hospedagem por 1 ano'
  ]
),
-- Loja Profissional
(
  'e5c1a3b8-4f9a-7d8e-1b0c-4d5e6f7a8b9c',
  'Loja Profissional',
  'E-commerce completo e escalável. Solução robusta para empresas que querem crescer no comércio eletrônico. Produtos ilimitados, múltiplas formas de pagamento, sistema de cupons e promoções, gestão de estoque avançada, relatórios de vendas, app mobile responsivo.',
  3200.00,
  'único',
  'único',
  NULL,
  ARRAY[
    'Produtos ilimitados', 
    'Múltiplas formas de pagamento', 
    'Sistema de cupons e promoções', 
    'Gestão de estoque avançada', 
    'Relatórios de vendas', 
    'App mobile responsivo'
  ]
),
-- Marketplace
(
  'e5c1a3b8-4f9a-7d8e-1b0c-4d5e6f7a8b9c',
  'Marketplace',
  'Plataforma de vendas multi-vendor. Para empresas que querem criar um marketplace com múltiplos vendedores. Sistema multi-vendor, comissões automáticas, painel para vendedores, sistema de avaliações, logística integrada, suporte empresarial.',
  6500.00,
  'único',
  'único',
  NULL,
  ARRAY[
    'Sistema multi-vendor', 
    'Comissões automáticas', 
    'Painel para vendedores', 
    'Sistema de avaliações', 
    'Logística integrada', 
    'Suporte empresarial'
  ]
);