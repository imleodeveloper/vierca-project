-- Adicionar coluna whats_plan na tabela profiles para referenciar o plano atual do usuário
ALTER TABLE profiles ADD COLUMN IF NOT EXISTS whats_plan UUID;

-- Adicionar comentário para documentar a coluna
COMMENT ON COLUMN profiles.whats_plan IS 'ID do plano atual do usuário, referencia a tabela plans';

-- Adicionar foreign key constraint para referenciar a tabela plans (se ela existir)
-- ALTER TABLE profiles ADD CONSTRAINT fk_profiles_whats_plan 
-- FOREIGN KEY (whats_plan) REFERENCES plans(id) ON DELETE SET NULL;

-- Comentário: Descomente a constraint acima se a tabela 'plans' existir
-- e tiver uma coluna 'id' do tipo UUID

-- Atualizar a função handle_new_user para incluir a nova coluna
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO public.profiles (id, full_name, email, phone, whats_plan)
  VALUES (
    NEW.id,
    COALESCE(NEW.raw_user_meta_data->>'full_name', ''),
    NEW.email,
    COALESCE(NEW.raw_user_meta_data->>'phone', ''),
    NULL
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;
