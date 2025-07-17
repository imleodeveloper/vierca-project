CREATE TABLE user_plan (
  id uuid primary key default gen_random_uuid(),
  user_id UUID references auth.users(id),
  type_plan TEXT default NULL, -- 'chatbot' | 'site'

  slug_site TEXT references plans_sites(slug) default null,
  slug_chatbot TEXT references plans_chatbots(slug) default null,
    -- Garantir que só um dos dois seja preenchido
  CHECK (
    (slug_site IS NULL AND slug_chatbot IS NOT NULL)
    OR
    (slug_site IS NOT NULL AND slug_chatbot IS NULL)
  ),
  
  has_chatbot BOOLEAN DEFAULT FALSE,
  conversations_per_month numeric (10,2) DEFAULT NULL,
  price_plan numeric (10,2),
  has_monthly_fee BOOLEAN DEFAULT FALSE,
  price_monthly_fee numeric (10,2) DEFAULT NULL,
  status TEXT default 'none', --'active' | 'inactive' | 'expired' | 'cancelled'
  period TEXT default 'none', -- 'monthly' | 'annual' | 'one-time'
  plan_start_date TIMESTAMP NOT NULL DEFAULT now()


);