import { NextResponse, NextRequest } from "next/server";

// Rota POST
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { plan, customer, period, discount, total } = body;
    const planSite = plan.site;
    const planChatbot = plan.chatbot;
    const planSelected = planSite || planChatbot;
    console.log("PlanSelected ", planSelected);

    // Validação básica
    if (!planSelected || !customer.email || !customer.name) {
      return NextResponse.json(
        { error: "Dados obrigatórios não fornecidos" },
        { status: 400 }
      );
    }

    // Preference de CHATBOT MENSAL
    if (planSelected.type === "chatbot") {
      // Validação se é pagamento somente de assinatura
      if (planSelected.isMonthlyFee === false) {
        return NextResponse.json(
          { error: "Este plano utiliza pagamento único. Use outra rota" },
          { status: 400 }
        );
      }
    }

    // token do Mercado Pago
    const accessToken = process.env.MERCADO_PAGO_ACCESS_TOKEN;
    if (!accessToken) {
      return NextResponse.json(
        { error: "MERCADO_PAGO_ACCESS_TOKEN não identificada" },
        { status: 500 }
      );
    }

    // Frequência da assinatura
    const frequency_type = "months";
    const frequency = planSelected.isMonthlyFee === false ? 12 : 1; // Todo mês ou ano

    // Criando objeto de assinatura
    const subscriptionData = {
      reason: planSelected.title_plan,
      auto_recurring: {
        frequency, // 12 ou 1
        frequency_type,
        transaction_amount: planSelected.price,
        currency_id: "BRL",
        start_date: new Date().toISOString(), // Começa agora
        end_date: new Date(
          new Date().setFullYear(new Date().getFullYear() + 5)
        ).toISOString(), // Dura 5 anos
      },
      back_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/success`,
      payer_email: customer.email,
      external_reference: `sub|${planSelected.slug}|${customer.id}|${Date.now()}`,
    };

    //Enviar para o mercado pago
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
