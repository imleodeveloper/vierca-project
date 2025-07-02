CREATE TABLE user_plans (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id),
  plan_id UUID REFERENCES plans(id),
  plan_start_date TIMESTAMP NOT NULL DEFAULT now(),
  status TEXT DEFAULT 'active' -- ativo, cancelado, expirado, etc
);