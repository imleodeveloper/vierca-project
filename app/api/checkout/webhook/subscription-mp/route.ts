import { type NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    if (body.type === "preapproval") {
      const subscriptionId = body.data.id;

      const accessToken = process.env.MERCADO_PAGO_ACCESS_TOKEN;
      if (!accessToken) {
        console.error("Token do Mercado Pago não configurado");
        return NextResponse.json({ error: "Sem token" }, { status: 500 });
      }

      const response = await fetch(
        `https://api.mercadopago.com/preapproval/${subscriptionId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!response.ok) {
        console.error("Erro ao buscar assinatura:", await response.text());
        return NextResponse.json({ error: "Erro assinatura" }, { status: 500 });
      }

      const subscriptionData = await response.json();

      // exemplo: external_reference: "sub|starter-chatbot|USERID|timestamp"
      const parts = subscriptionData.external_reference.split("|");
      const planSlug = parts[1];
      const userId = parts[2];

      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
      );

      // ✅ Atualiza o campo already_active_plan para true
      const { error } = await supabase
        .from("user_plan")
        .update({ already_active_plan: true })
        .eq("user_id", userId)
        .eq("slug", planSlug);

      if (error) {
        console.error("Erro ao atualizar plano como ativo:", error);
      } else {
        console.log(
          `Assinatura ativada para userId=${userId}, plano=${planSlug}`
        );
      }

      return NextResponse.json({ received: true });
    }

    // Ignorar outros tipos
    return NextResponse.json({ ignored: true });
  } catch (error) {
    console.error("Erro no webhook de subscription:", error);
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}
