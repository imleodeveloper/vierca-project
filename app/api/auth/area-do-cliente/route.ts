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

    const { data: userData, error: userError } =
      await supabase.auth.getUser(token);

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
      title_plan: string;
      description: string;
      features: string[];
      price: number;
      is_monthly_fee: boolean;
      conversations_per_month?: number;
      additional_price_monthly_fee?: number;
      chatbot_installation?: boolean;
    };

    type UserPlanData = {
      type_plan: string;
      slug_site: string;
      slug_chatbot: string;
      has_chatbot: boolean;
      conversations_per_month: number;
      price_plan: number;
      has_monthly_fee: boolean;
      price_monthly_fee: number;
      status: string;
      period: string;
      plan_start_date: string;
      already_active_plan: boolean;
      plans_chatbots?: Plan;
      plans_sites?: Plan;
    };

    // Busca plano ativo do usuário com join na tabela plans
    const { data: userPlanData, error: planError } = await supabase
      .from("user_plan")
      .select(
        `
        type_plan,
        slug_site,
        slug_chatbot,
        has_chatbot,
        conversations_per_month,
        price_plan,
        has_monthly_fee,
        price_monthly_fee,
        status,
        period,
        plan_start_date,
        already_active_plan,
        plans_chatbots!user_plan_slug_chatbot_fkey (
          title_plan,
          description,
          features,
          price,
          is_monthly_fee,
          conversations_per_month        
        ),
        plans_sites!user_plan_slug_site_fkey (
          title_plan,
          description,
          features,
          price,
          is_monthly_fee,
          additional_price_monthly_fee,
          chatbot_installation
        )
      `
      )
      .eq("user_id", userId)
      .eq("status", "active")
      .order("plan_start_date", { ascending: false })
      .limit(1);

    if (planError) {
      console.error(
        "Não foi possível encontrar o plano do usuário: ",
        userId,
        " Erro: ",
        planError
      );
      return;
    }

    console.log("UserPlanData: ", userPlanData);

    // Se não encontrou plano ativo, não é erro - usuário pode não ter plano
    const activePlan =
      userPlanData && userPlanData.length > 0
        ? (userPlanData[0] as unknown as UserPlanData)
        : null;

    // Pega o primeiro plano (caso venha como array)
    const plan = activePlan?.plans_chatbots;

    // Busca informações do perfil do usuário se existir
    const { data: profileData } = await supabase
      .from("profiles")
      .select("full_name, phone")
      .eq("id", userId)
      .single();

    //console.log("activePlan: ", activePlan);
    //console.log("plan: ", plan?.name);
    //console.log("plan: ", plan?.price);
    //console.log("plan: ", plan?.description);
    //console.log("plan: ", plan?.features);

    return NextResponse.json(
      {
        user: {
          id: userData.user.id,
          email: userEmail,
          full_name: profileData?.full_name || null,
          phone: profileData?.phone || null,
          plan_name: plan?.title_plan || null,
          plan_price: plan?.price || null,
          plan_description: plan?.description || null,
          plan_features: plan?.features || [],
          plan_period: activePlan?.period || null,
          plan_is_monthly_fee: plan?.is_monthly_fee || null,
          plan_start_date: activePlan?.plan_start_date || null,
          plan_already_active: activePlan?.already_active_plan ?? null,
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
