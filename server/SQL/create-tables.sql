-- Tabela para guardar informações de usuário
CREATE TABLE users (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  nome_completo TEXT NOT NULL,
  telefone TEXT,
  data_nascimento DATE NOT NULL,
  created_at TIMESTAMP DEFAULT now()
);

-- Tabela de categorias principais
CREATE TABLE product_categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome TEXT NOT NULL
);

-- Tabela de subcategorias, relacionadas a categorias
CREATE TABLE product_subcategories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  categoria_id UUID REFERENCES product_categories(id) ON DELETE CASCADE,
  nome TEXT NOT NULL
);

-- Inserção das categorias
INSERT INTO product_categories (nome) VALUES
  ('Chatbot'),
  ('Site com Chatbot'),
  ('Site para Empresas'),
  ('Página de Vendas'),
  ('Loja Virtual');


-- Inserção das subcategorias
-- Subcategorias para chatbot
INSERT INTO product_subcategories (categoria_id, nome)
SELECT id, nome_sub FROM product_categories, (
  VALUES ('Mensal'), ('Anual')
) AS sub(nome_sub)
WHERE nome = 'Chatbot';

-- Subcategorias para site com chatbot
INSERT INTO product_subcategories (categoria_id,  nome)
SELECT id, nome_sub FROM product_categories, (
  VALUES ('Starter'), ('Pro'), ('Business')
) AS sub(nome_sub)
WHERE nome = 'Site com Chatbot';

-- Subcaategorias para site para empresas
INSERT INTO product_subcategories (categoria_id, nome)
SELECT id, nome_sub FROM product_categories, (
  VALUES ('Institucional Básico'), ('Institucional Premium'), ('Corporativo')
) AS sub(nome_sub)
WHERE nome = 'Site para Empresas';

-- Subcategorias para Página de Vendas
INSERT INTO product_subcategories (categoria_id,  nome)
SELECT id, nome_sub FROM product_categories, (
  VALUES ('Simples'), ('Premium'), ('Completa')
) AS sub(nome_sub)
WHERE nome = 'Página de Vendas';

-- Subcategorias para Loja Virtual
INSERT INTO product_subcategories (categoria_id, nome)
SELECT id, nome_sub FROM product_categories, (
  VALUES ('Básica'), ('Profissional'), ('Marketplace')
) AS sub(nome_sub)
WHERE nome = 'Loja Virtual';


-- Criação da tabela de produtos/planos
CREATE TABLE plans (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  categoria_id UUID REFERENCES product_categories(id),
  subcategoria_id UUID REFERENCES product_subcategories(id),
  nome TEXT NOT NULL,
  descricao TEXT,
  preco NUMERIC(10,2) NOT NULL,
  preco_total NUMERIC(10,2),
  recorrencia TEXT NOT NULL, -- 'MENSAL, ANUAL E UNICO'
  conversas_mensais INTEGER,
  criado_em TIMESTAMP DEFAULT now()
);

-- Inserção dos produtos (planos)

-- 1. Chatbot - Anual
INSERT INTO plans (categoria_id, subcategoria_id, nome, descricao, preco, preco_total,recorrencia, conversas_mensais)
SELECT
  c.id,
  s.id,
  'Básico',
  'Aprox. 1.000 conversas por mês. Ideal para sites pessoais ou pequenos negócios em início de jornada com IA. Válido para 1 site (1 domínio)',
  91.58,
  91.58 * 12,
  'anual',
  1000
FROM product_categories c
JOIN product_subcategories s ON s.categoria_id = c.id
WHERE c.nome = 'Chatbot' AND s.nome = 'Anual';

INSERT INTO plans (categoria_id, subcategoria_id, nome, descricao, preco, preco_total,recorrencia, conversas_mensais)
SELECT 
  c.id, 
  s.id, 
  'Intermediário',
  'Aprox. 10.000 conversas por mês. Perfeito para negócios com tráfego moderado e atendimento ativo via chatbot. Válido para 1 site (1 domínio)',
  214.00,
  214.00 * 12,
  'anual',
  10000
FROM product_categories c
JOIN product_subcategories s ON s.categoria_id = c.id
WHERE c.nome = 'Chatbot' AND s.nome = 'Anual';

INSERT INTO plans (categoria_id, subcategoria_id, nome, descricao, preco, preco_total,recorrencia, conversas_mensais)
SELECT 
  c.id, 
  s.id, 
  'Profissional',
  'Aprox 20.000 conversas por mês. Solução robusta para empresas com grande volume de tráfego e atendimentos. Válido para 1 site (1 domínio)',
  379.00,
  379.00 * 12,
  'anual',
  20000
FROM product_categories c
JOIN product_subcategories s ON s.categoria_id = c.id
WHERE c.nome = 'Chatbot' AND s.nome = 'Anual';


-- 2. Chatbot - Mensal
INSERT INTO plans (categoria_id, subcategoria_id, nome, descricao, preco, recorrencia, conversas_mensais)
SELECT 
  c.id, 
  s.id, 
  'Básico',
  'Aprox. 1.000 conversas. Ideal para sites pessoais ou pequenos negócios em início de jornada com IA. Válido para 1 site (1 domínio)',
  115.00, 
  'mensal', 
  1000
FROM product_categories c
JOIN product_subcategories s ON s.categoria_id = c.id
WHERE c.nome = 'Chatbot' AND s.nome = 'Mensal';

INSERT INTO plans (categoria_id, subcategoria_id, nome, descricao, preco, recorrencia, conversas_mensais)
SELECT 
  c.id, 
  s.id, 
  'Intermediário',
  'Aprox. 10.000 conversas. Perfeito para negócios com tráfego moderado e atendimento ativo via chatbot. Válido para 1 site (1 domínio)',
  254.00, 
  'mensal', 
  10000
FROM product_categories c
JOIN product_subcategories s ON s.categoria_id = c.id
WHERE c.nome = 'Chatbot' AND s.nome = 'Mensal';

INSERT INTO plans (categoria_id, subcategoria_id, nome, descricao, preco, recorrencia, conversas_mensais)
SELECT 
  c.id, 
  s.id, 
  'Profissional',
  'Aprox. 20.000 conversas. Solução robusta para empresas com grande volume de tráfego e atendimentos. Válido para 1 site (1 domínio)',
  429.00, 
  'mensal', 
  20000
FROM product_categories c
JOIN product_subcategories s ON s.categoria_id = c.id
WHERE c.nome = 'Chatbot' AND s.nome = 'Mensal';


-- 3. Site com Chatbot (subcategorias: Starter, Pro, Business)
INSERT INTO plans (categoria_id, subcategoria_id, nome, descricao, preco, recorrencia, conversas_mensais)
SELECT 
  c.id, 
  s.id, 
  'Starter Chatbot',
  'Landing Page com chatbot integrado. Ideal para pequenos negócios que querem automatizar o atendimento básico com presença online profissional.',
  1200.00, 
  'unico', 
  NULL
FROM product_categories c
JOIN product_subcategories s ON s.categoria_id = c.id
WHERE c.nome = 'Site com Chatbot' AND s.nome = 'Starter';

INSERT INTO plans (categoria_id, subcategoria_id, nome, descricao, preco, recorrencia, conversas_mensais)
SELECT 
  c.id, 
  s.id, 
  'Pro Chatbot',
  'Site completo com chatbot avançado. Perfeito para empresas que precisam de presença online robusta com atendimento automatizado inteligente.',
  2500.00, 
  'unico', 
  NULL
FROM product_categories c
JOIN product_subcategories s ON s.categoria_id = c.id
WHERE c.nome = 'Site com Chatbot' AND s.nome = 'Pro';

INSERT INTO plans (categoria_id, subcategoria_id, nome, descricao, preco, recorrencia, conversas_mensais)
SELECT 
  c.id, 
  s.id, 
  'Business Chatbot',
  'Solução completa para grandes empresas. Para empresas que precisam de máxima performance, escalabilidade e recursos avançados de automação.',
  4500.00, 
  'unico', 
  NULL
FROM product_categories c
JOIN product_subcategories s ON s.categoria_id = c.id
WHERE c.nome = 'Site com Chatbot' AND s.nome = 'Business';

-- 4. Site para Empresas (Institucional Básico, Premium, Corporativo)
INSERT INTO plans (categoria_id, subcategoria_id, nome, descricao, preco, recorrencia, conversas_mensais)
SELECT c.id, s.id, 'Institucional Básico',
  'Site institucional profissional. Apresente sua empresa com credibilidade e profissionalismo online.',
  800.00, 'unico', NULL
FROM product_categories c
JOIN product_subcategories s ON s.categoria_id = c.id
WHERE c.nome = 'Site para Empresas' AND s.nome = 'Institucional Básico';

INSERT INTO plans (categoria_id, subcategoria_id, nome, descricao, preco, recorrencia, conversas_mensais)
SELECT c.id, s.id, 'Institucional Premium',
  'Site institucional completo. Solução completa para empresas que querem se destacar no mercado digital.',
  1500.00, 'unico', NULL
FROM product_categories c
JOIN product_subcategories s ON s.categoria_id = c.id
WHERE c.nome = 'Site para Empresas' AND s.nome = 'Institucional Premium';

INSERT INTO plans (categoria_id, subcategoria_id, nome, descricao, preco, recorrencia, conversas_mensais)
SELECT c.id, s.id, 'Corporativo',
  'Portal corporativo avançado. Para grandes empresas que precisam de um portal robusto e funcionalidades avançadas.',
  3000.00, 'unico', NULL
FROM product_categories c
JOIN product_subcategories s ON s.categoria_id = c.id
WHERE c.nome = 'Site para Empresas' AND s.nome = 'Corporativo';

-- 5. Página de Vendas (Simples, Premium, Completa)
INSERT INTO plans (categoria_id, subcategoria_id, nome, descricao, preco, recorrencia, conversas_mensais)
SELECT c.id, s.id, 'Landing Page Simples',
  'Página de vendas focada em conversão. Ideal para campanhas específicas, lançamentos de produtos ou captação de leads.',
  600.00, 'unico', NULL
FROM product_categories c
JOIN product_subcategories s ON s.categoria_id = c.id
WHERE c.nome = 'Página de Vendas' AND s.nome = 'Simples';

INSERT INTO plans (categoria_id, subcategoria_id, nome, descricao, preco, recorrencia, conversas_mensais)
SELECT c.id, s.id, 'Landing Page Premium',
  'Página de vendas com recursos avançados. Para campanhas de alto impacto com recursos de automação e análise detalhada.',
  1200.00, 'unico', NULL
FROM product_categories c
JOIN product_subcategories s ON s.categoria_id = c.id
WHERE c.nome = 'Página de Vendas' AND s.nome = 'Premium';

INSERT INTO plans (categoria_id, subcategoria_id, nome, descricao, preco, recorrencia, conversas_mensais)
SELECT c.id, s.id, 'Landing Page Completa',
  'Sistema completo de vendas online. Solução completa com múltiplas páginas e painel de vendas para maximizar conversões.',
  2500.00, 'unico', NULL
FROM product_categories c
JOIN product_subcategories s ON s.categoria_id = c.id
WHERE c.nome = 'Página de Vendas' AND s.nome = 'Completa';

-- 6. Loja Virtual (Básica, Profissional, Marketplace)
INSERT INTO plans (categoria_id, subcategoria_id, nome, descricao, preco, recorrencia, conversas_mensais)
SELECT c.id, s.id, 'Loja Básica',
  'E-commerce para pequenos negócios. Comece a vender online com uma loja virtual completa e fácil de gerenciar.',
  1600.00, 'unico', NULL
FROM product_categories c
JOIN product_subcategories s ON s.categoria_id = c.id
WHERE c.nome = 'Loja Virtual' AND s.nome = 'Básica';

INSERT INTO plans (categoria_id, subcategoria_id, nome, descricao, preco, recorrencia, conversas_mensais)
SELECT c.id, s.id, 'Loja Profissional',
  'E-commerce completo e escalável. Solução robusta para empresas que querem crescer no comércio eletrônico.',
  3200.00, 'unico', NULL
FROM product_categories c
JOIN product_subcategories s ON s.categoria_id = c.id
WHERE c.nome = 'Loja Virtual' AND s.nome = 'Profissional';

INSERT INTO plans (categoria_id, subcategoria_id, nome, descricao, preco, recorrencia, conversas_mensais)
SELECT c.id, s.id, 'Marketplace',
  'Plataforma de vendas multi-vendor. Para empresas que querem criar um marketplace com múltiplos vendedores.',
  6500.00, 'unico', NULL
FROM product_categories c
JOIN product_subcategories s ON s.categoria_id = c.id
WHERE c.nome = 'Loja Virtual' AND s.nome = 'Marketplace';


-- Tabela para assinatura e contratos
CREATE TABLE subscriptions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES users(id),
  plan_id UUID NOT NULL REFERENCES plans(id),
  status TEXT NOT NULL CHECK (status IN ('ativa', 'pendente', 'cancelada', 'expirada')),
  data_inicio DATE NOT NULL,
  data_termino DATE,
  renovacao_automatica BOOLEAN DEFAULT TRUE,
  data_ultima_cobranca DATE,
  criado_em TIMESTAMP DEFAULT now(),
  atualizado_em TIMESTAMP DEFAULT now()
);

-- Tabela de gestão de pagamentos/transações
CREATE TABLE payments (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  subscription_id UUID NOT NULL REFERENCES subscriptions(id),
  plano_id UUID NOT NULL REFERENCES plans(id),
  valor NUMERIC(10,2) NOT NULL,
  status TEXT NOT NULL, -- ex: 'pending', 'paid', 'failed', 'refunded', 'cancelled'
  metodo_pagamento TEXT, -- ex: 'credit_card', 'boleto', 'pix', 'paypal'
  data_pagamento TIMESTAMP, -- quando o pagamento foi confirmado
  data_vencimento TIMESTAMP NOT NULL, -- data limite para pagamento
  data_criacao TIMESTAMP DEFAULT now(),
  tentativa INTEGER DEFAULT 1, -- controle de tentativas de pagamento
  codigo_transacao TEXT, -- ID da transação no gateway, para rastreamento
  descricao TEXT -- informações adicionais ou motivo de falha
);


-- POLÍTICAS NECESSÁRIAS

-- RLS USERS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Usuário pode ver seus próprios dados"
ON users
FOR SELECT
USING (
  id = auth.uid()
);

CREATE POLICY "Usuário pode atualizar seus próprios dados"
ON users
FOR UPDATE
USING (
  id = auth.uid()
);

-- RLS SUBSCRIPTIONS
ALTER TABLE subscriptions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Usuário pode ver suas próprias assinaturas/planos"
ON subscriptions
FOR SELECT
USING (
  user_id = auth.uid()
);

-- RLS PAYMENTS
ALTER TABLE payments ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Usuário pode ver seus próprios pagamentos"
ON payments
FOR SELECT
USING (
  subscription_id IN (
    SELECT id FROM subscriptions WHERE user_id = auth.uid()
  )
);

