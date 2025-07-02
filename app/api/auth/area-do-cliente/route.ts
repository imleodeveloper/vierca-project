import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  try {
    const authHeader = request.headers.get("authorization");
    const token = authHeader?.replace("Bearer ", "");

    if (!token) {
      return NextResponse.json(
        { error: "Token de autorização não fornecido" },
        { status: 401 }
      );
    }

    const { data: userData, error: userError } = await supabase.auth.getUser(
      token
    );

    if (userError || !userData.user) {
      console.error(
        "Erro POST area-do-cliente: ",
        userError?.message || "Usuário não encontrado"
      );
      return NextResponse.json(
        { error: "Usuário não autenticado" },
        { status: 401 }
      );
    }

    const userId = userData.user.id;
    const userEmail = userData.user.email;

    type Plan = {
      name: string;
      price: number;
      description: string;
      features: string[];
    };

    type UserPlanData = {
      plan_id: string;
      plan_start_date: string;
      status: string;
      plans: Plan;
    };

    // Busca plano ativo do usuário com join na tabela plans
    const { data: userPlanData, error: planError } = await supabase
      .from("user_plans")
      .select(
        `
        plan_id,
        plan_start_date,
        status,
        plans (
          name,
          price,
          description,
          features
        )
      `
      )
      .eq("user_id", userId)
      .eq("status", "active")
      .order("plan_start_date", { ascending: false })
      .limit(1);

    // Se não encontrou plano ativo, não é erro - usuário pode não ter plano
    const activePlan =
      userPlanData && userPlanData.length > 0
        ? (userPlanData[0] as UserPlanData)
        : null;

    // Busca informações do perfil do usuário se existir
    const { data: profileData } = await supabase
      .from("profiles")
      .select("full_name, phone")
      .eq("id", userId)
      .single();

    return NextResponse.json(
      {
        user: {
          id: userData.user.id,
          email: userEmail,
          full_name: profileData?.full_name || null,
          phone: profileData?.phone || null,
          plan_name: activePlan?.plans?.name || null,
          plan_price: activePlan?.plans?.price || null,
          plan_description: activePlan?.plans?.description || null,
          plan_features: activePlan?.plans?.features || [],
          plan_start_date: activePlan?.plan_start_date || null,
          plan_status: activePlan?.status || null,
        },
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Erro no servidor:", err);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
