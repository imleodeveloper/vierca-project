import { NextResponse } from "next/server";
import { supabase, supabaseAdmin } from "@/lib/supabase";

export async function POST(request: Request) {
  const { email, password, phone, fullName } = await request.json();

  // 1) verificação mais segura – usa trim
  if (!email?.trim() || !password?.trim() || !phone?.trim()) {
    return NextResponse.json(
      { error: "Email e senha são obrigatórios" },
      { status: 400 }
    );
  }

  //(2) Usa a API de administração pra checar se o email já existe
  const { data: usersExists, error: adminError } =
    await supabaseAdmin.auth.admin.listUsers();

  if (adminError) {
    console.error("Erro ao verificar usuários: ", adminError);
    return NextResponse.json(
      { error: "Erro ao verificar o email" },
      { status: 500 }
    );
  }

  const emailExists = usersExists.users.some((user) => user.email === email);
  if (emailExists) {
    return NextResponse.json(
      { error: "O email informado já está cadastrado" },
      { status: 400 }
    );
  }

  //(3) Tenta cadastrar no supabase
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    phone,
  });

  if (error) {
    console.error("Erro no signUp: ", error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }

  return NextResponse.json({ user: data.user }, { status: 200 });
}
