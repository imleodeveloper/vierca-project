import { type NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Verificar se é uma notificação do Mercado Pago
    if (body.type === "payment") {
      const paymentId = body.data.id;

      // Buscar detalhes do pagamento
      const accessToken = process.env.MERCADO_PAGO_ACCESS_TOKEN;

      if (!accessToken) {
        console.error("MERCADO_PAGO_ACCESS_TOKEN não configurado");
        return NextResponse.json(
          { error: "Token não configurado" },
          { status: 500 }
        );
      }

      const paymentResponse = await fetch(
        `https://api.mercadopago.com/v1/payments/${paymentId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      if (!paymentResponse.ok) {
        console.error(
          "Erro ao buscar pagamento:",
          await paymentResponse.text()
        );
        return NextResponse.json(
          { error: "Erro ao buscar pagamento" },
          { status: 500 }
        );
      }

      const paymentData = await paymentResponse.json();

      // Processar o pagamento baseado no status
      switch (paymentData.status) {
        case "approved":
          // Pagamento aprovado
          console.log("Pagamento aprovado:", paymentData);
          await handleApprovedPayment(paymentData);
          break;

        case "pending":
          // Pagamento pendente
          console.log("Pagamento pendente:", paymentData);
          await handlePendingPayment(paymentData);
          break;

        case "rejected":
          // Pagamento rejeitado
          console.log("Pagamento rejeitado:", paymentData);
          await handleRejectedPayment(paymentData);
          break;

        case "cancelled":
          // Pagamento cancelado
          console.log("Pagamento cancelado:", paymentData);
          await handleCancelledPayment(paymentData);
          break;

        default:
          console.log("Status desconhecido:", paymentData.status);
      }
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Erro no webhook:", error);
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}

async function handleApprovedPayment(paymentData: any) {
  const external = paymentData.external_reference; //vierca|planSlug|userId|timestamp
  const parts = external.split("|");
  console.log(external);
  const planSlug = parts[1];
  console.log("PlanId", planSlug);
  const userId = parts[2];
  console.log("userId", userId);

  // VALIDAÇÃO DE UUID
  const isValidUUID =
    /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(
      userId
    );

  if (!isValidUUID) {
    console.error("userId inválido recebido do external_reference:", userId);
    return;
  }

  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const { data: existing } = await supabase
    .from("user_plans")
    .select("*")
    .eq("user_id", userId)
    .eq("slug", planSlug)
    .limit(1);

  if (!existing || existing.length === 0) {
    const { error } = await supabase.from("user_plans").insert({
      user_id: userId,
      slug: planSlug,
      plan_start_date: new Date(),
      status: "active",
    });

    if (error) {
      console.error("Erro ao salvar plano no banco:", error);
    } else {
      console.log("Plano salvo com sucesso para o usuário:", userId);
    }
  } else {
    console.log("Plano já está registrado com esse usuário: ", userId);
  }

  console.log("Processando pagamento aprovado:", {
    id: paymentData.id,
    external_reference: paymentData.external_reference,
    transaction_amount: paymentData.transaction_amount,
    payer_email: paymentData.payer.email,
  });

  await sendEmailConfirmation({
    customerEmail: paymentData.payer.email,
    customerName: `${paymentData.payer.first_name} ${paymentData.payer.last_name}`,
    planName: planSlug,
    amount: paymentData.transaction_amount,
  });
}

async function handlePendingPayment(paymentData: any) {
  // Implementar lógica para pagamento pendente
  // Exemplos:
  // - Enviar email informando sobre o status
  // - Manter pedido em análise

  console.log("Processando pagamento pendente:", {
    id: paymentData.id,
    external_reference: paymentData.external_reference,
    status_detail: paymentData.status_detail,
  });
}

async function handleRejectedPayment(paymentData: any) {
  // Implementar lógica para pagamento rejeitado
  // Exemplos:
  // - Enviar email informando sobre a rejeição
  // - Sugerir nova tentativa de pagamento

  console.log("Processando pagamento rejeitado:", {
    id: paymentData.id,
    external_reference: paymentData.external_reference,
    status_detail: paymentData.status_detail,
  });
}

async function handleCancelledPayment(paymentData: any) {
  // Implementar lógica para pagamento cancelado
  // Exemplos:
  // - Limpar carrinho
  // - Enviar email de cancelamento

  console.log("Processando pagamento cancelado:", {
    id: paymentData.id,
    external_reference: paymentData.external_reference,
  });
}

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendEmailConfirmation({
  customerEmail,
  customerName,
  planName,
  amount,
}: {
  customerEmail: string;
  customerName: string;
  planName: string;
  amount: number;
}) {
  try {
    //Envia para o cliente
    await resend.emails.send({
      from: "VierCa Tech <viercatech@gmail.com>",
      to: customerEmail,
      subject: "Confirmação de pagamento - VierCa Tech",
      html: `
        <h2>Olá, ${customerName}!</h2>
        <p>Seu pagamento foi aprovado com sucesso.</p>
        <p><strong>Plano:</strong> ${planName}<br/>
        <strong>Valor:</strong> R$ ${amount.toFixed(2)}</p>
        <p>Seja bem-vindo(a) à VierBarber!</p>
      `,
    });

    //Envia para VierCa
    await resend.emails.send({
      from: "Sistema VierCa Tech - <viercatech@gmail.com>",
      to: "viercatech@gmail.com",
      subject: "Novo venda realizada",
      html: `
        <h2>Novo pagamento confirmado</h2>
        <p><strong>Cliente:</strong> ${customerName} (${customerEmail})<br/>
        <strong>Plano:</strong> ${planName}<br/>
        <strong>Valor:</strong> R$ ${amount.toFixed(2)}</p>
      `,
    });

    console.log("Emails enviados com sucesso. ");
  } catch (err) {
    console.error("Erro ao enviar e-mail: ", err);
  }
}
