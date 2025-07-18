import { supabase } from "@/lib/supabase";
import { NextResponse, NextRequest } from "next/server";

interface Plan {
  title_plan: string;
}

interface UserPlan {
  user_id: string;
  slug_site: string;
  slug_chatbot: string;
  price_plan: number;
  has_monthly_fee: boolean;
  price_monthly_fee: number;
  already_active_plan: boolean;
  plans_chatbots: Plan;
  plans_sites: Plan;
}

// Rota POST
export async function POST(request: NextRequest) {
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

    const body = await request.json();
    const { plan_title } = body;

    const { data: userPlan, error: userPlanError } = await supabase
      .from("user_plan")
      .select(
        `
        user_id,
        slug_site,
        slug_chatbot,
        price_plan,
        has_monthly_fee,
        price_monthly_fee,
        already_active_plan,
        plans_chatbots!user_plan_slug_chatbot_fkey (
          title_plan     
        ),
        plans_sites!user_plan_slug_site_fkey (
          title_plan
        )   
    `
      )
      .eq("user_id", userId)
      .limit(1);

    if (userPlanError || !userPlan) {
      console.error(
        "Não foi possível encontrar o plano do usuário: ",
        userId,
        " erro: ",
        userPlanError
      );
      return;
    }

    console.log("UserPlanData", userPlan);
    const activePlan =
      userPlan.length > 0 ? (userPlan[0] as unknown as UserPlan) : null;

    if (!plan_title) {
      return NextResponse.json(
        { error: "Falta de informações do plano." },
        { status: 400 }
      );
    }

    // token do Mercado Pago
    const accessToken = process.env.MERCADO_PAGO_ACCESS_TOKEN;
    if (!accessToken) {
      return NextResponse.json(
        { error: "MERCADO_PAGO_ACCESS_TOKEN não identificada" },
        { status: 500 }
      );
    }

    const whatsPlan = activePlan?.plans_sites || activePlan?.plans_chatbots;
    const slug = activePlan?.slug_chatbot || activePlan?.slug_site;

    const frequency_type = "months";
    const frequency = activePlan?.has_monthly_fee === false ? 12 : 1;

    const subscriptionData = {
      reason: whatsPlan?.title_plan,
      auto_recurring: {
        frequency,
        frequency_type,
        transaction_amount: activePlan?.price_monthly_fee,
        currency_id: "BRL",
        start_date: new Date().toISOString(), //Começa agora
        end_date: new Date(
          new Date().setFullYear(new Date().getFullYear() + 5)
        ).toISOString(), // Dura 5 anos
      },
      back_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/success`,
      payer_email: userEmail,
      external_reference: `sub|${slug}|${userId}|${Date.now()}`,
    };

    // Envia para o mercado pago
    const response = await fetch("https://api.mercadopago.com/preapproval", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(subscriptionData),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Erro Mercado Pago: ", data);
      return NextResponse.json(
        { error: "Erro ao criar assinatura" },
        { status: 500 }
      );
    }

    // Retorna o link de pagamento
    return NextResponse.json({ init_point: data.init_point });
  } catch (err) {
    console.error("Erro interno ", err);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
