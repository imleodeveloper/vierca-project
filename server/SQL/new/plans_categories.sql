create table plan_categories (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  description text,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

INSERT INTO public.plan_categories (id, name, description)
VALUES
('a1e7c9d4-8f2b-4f58-9a13-df1e7f3b3b1c', 'Chatbot Anual', 'Planos de chatbot com pagamento anual e conversas mensais'),
('b2f8d0e5-7d9c-4c6e-8f75-1a2b3c4d5e6f', 'Chatbot Mensal', 'Planos de chatbot com pagamento mensal e conversas mensais'),
('c3a9e1f6-6e7d-5b4c-9d8e-2b3c4d5e6f7a', 'Site com chatbots', 'Sites com chatbots integrados e planos variados'),
('d4b0f2a7-5f8e-6c7d-0a9b-3c4d5e6f7a8b', 'Site para empresas', 'Sites institucionais e soluções para empresas'),
('e5c1a3b8-4f9a-7d8e-1b0c-4d5e6f7a8b9c', 'Loja Virtual', 'E-commerces e marketplaces com manutenção e suporte');
('4b5c6d7e-8f90-1234-5678-9abcdef01234', 'Página de Vendas', 'Influenciadores, produtos, eBooks e campanhas');