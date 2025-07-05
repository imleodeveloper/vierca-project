import { type NextRequest, NextResponse } from "next/server";

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
  // Implementar lógica para pagamento aprovado
  // Exemplos:
  // - Ativar o serviço do cliente
  // - Enviar email de confirmação
  // - Atualizar status no banco de dados
  // - Criar conta do cliente

  console.log("Processando pagamento aprovado:", {
    id: paymentData.id,
    external_reference: paymentData.external_reference,
    transaction_amount: paymentData.transaction_amount,
    payer_email: paymentData.payer.email,
  });

  // Aqui você implementaria:
  // 1. Salvar no banco de dados
  // 2. Enviar email de boas-vindas
  // 3. Ativar serviços contratados
  // 4. Criar acesso ao painel do cliente
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
