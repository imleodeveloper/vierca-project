import { type NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

// Tipos para o Mercado Pago
interface MercadoPagoItem {
  id: string;
  title: string;
  description: string;
  quantity: number;
  currency_id: string;
  unit_price: number;
}

interface MercadoPagoPayer {
  name: string;
  surname: string;
  email: string;
  phone?: {
    area_code: string;
    number: string;
  };
  identification?: {
    type: string;
    number: string;
  };
}

interface MercadoPagoPreference {
  items: MercadoPagoItem[];
  payer: MercadoPagoPayer;
  back_urls: {
    success: string;
    failure: string;
    pending: string;
  };
  auto_return: string;
  payment_methods: {
    excluded_payment_methods: Array<{ id: string }>;
    excluded_payment_types: Array<{ id: string }>;
    installments: number;
  };
  notification_url: string;
  external_reference: string;
  expires: boolean;
  expiration_date_from?: string;
  expiration_date_to?: string;
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { plan, period, customer, discount, total } = body;

    // Validações básicas
    if (!plan || !customer.name || !customer.email) {
      return NextResponse.json(
        { error: "Dados obrigatórios não fornecidos" },
        { status: 400 }
      );
    }

    //Validação se é pagamento recorrente / mensal / anual
    if (plan.isRecurring) {
      return NextResponse.json(
        { error: "Este plano usa pagamento recorrente. Use outra rota." },
        { status: 400 }
      );
    }
    // Configuração do Mercado Pago
    const accessToken = process.env.MERCADO_PAGO_ACCESS_TOKEN;

    if (!accessToken) {
      console.error("MERCADO_PAGO_ACCESS_TOKEN não configurado");
      return NextResponse.json(
        { error: "Configuração de pagamento não encontrada" },
        { status: 500 }
      );
    }

    // Preparar dados do item
    const quantity = plan.period === "annual" ? Number.parseInt(period) : 1;
    const unitPrice = plan.price;
    const finalPrice =
      discount > 0 ? unitPrice * (1 - discount / 100) : unitPrice;

    // Separar nome e sobrenome
    const nameParts = customer.name.trim().split(" ");
    const firstName = nameParts[0];
    const lastName = nameParts.slice(1).join(" ") || firstName;

    // Preparar telefone
    let phone;
    if (customer.phone) {
      const phoneClean = customer.phone.replace(/\D/g, "");
      if (phoneClean.length >= 10) {
        phone = {
          area_code: phoneClean.substring(0, 2),
          number: phoneClean.substring(2),
        };
      }
    }

    // Preparar documento
    let identification;
    if (customer.document) {
      const docClean = customer.document.replace(/\D/g, "");
      identification = {
        type: docClean.length === 11 ? "CPF" : "CNPJ",
        number: docClean,
      };
    }

    // Criar preferência do Mercado Pago
    const preference: MercadoPagoPreference = {
      items: [
        {
          id: plan.id,
          title: plan.name,
          description: plan.description,
          quantity: quantity,
          currency_id: "BRL",
          unit_price: finalPrice,
        },
      ],
      payer: {
        name: firstName,
        surname: lastName,
        email: customer.email,
        ...(phone && { phone }),
        ...(identification && { identification }),
      },
      back_urls: {
        success: `${
          process.env.NEXT_PUBLIC_BASE_URL
        }/checkout/success?combo=1&planId=${
          plan.id
        }&planName=${encodeURIComponent(
          plan.name
        )}&planDesc=${encodeURIComponent(plan.description)}&monthly=${
          plan.additionalMonthlyFee || plan.price
        }&email=${encodeURIComponent(customer.email)}&name=${encodeURIComponent(
          customer.name
        )}`,
        failure: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/failure`,
        pending: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout/pending`,
      },
      auto_return: "approved",
      payment_methods: {
        excluded_payment_methods: [],
        excluded_payment_types: [],
        installments: 12, // Máximo de 12 parcelas
      },
      notification_url: `${process.env.NEXT_PUBLIC_BASE_URL}/api/checkout/webhook`,
      external_reference: `vierca|${plan.id}|${customer.id}|${Date.now()}`,
      expires: true,
      expiration_date_to: new Date(
        Date.now() + 24 * 60 * 60 * 1000
      ).toISOString(), // 24 horas
    };

    // DEBUG
    console.log("Preferência sendo enviada:", preference);
    console.log("UUID: ", customer.id);

    // Fazer requisição para o Mercado Pago
    const response = await fetch(
      "https://api.mercadopago.com/checkout/preferences",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${accessToken}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(preference),
      }
    );

    if (!response.ok) {
      const errorData = await response.text();
      console.error("Erro do Mercado Pago:", errorData);
      return NextResponse.json(
        { error: "Erro ao criar preferência de pagamento" },
        { status: 500 }
      );
    }

    const preferenceData = await response.json();

    // Salvar dados do pedido no banco (opcional)
    // Aqui vpode salvar os dados do pedido em banco de dados
    // para controle interno e acompanhamento

    return NextResponse.json({
      id: preferenceData.id,
      init_point: preferenceData.init_point,
      sandbox_init_point: preferenceData.sandbox_init_point,
    });
  } catch (error) {
    console.error("Erro no checkout:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}
