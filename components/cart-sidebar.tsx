"use client";

import { useState } from "react";
import { X, ShoppingCart, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Plan {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  category: "chatbot" | "site";
  popular?: boolean;
}

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CartSidebar({ isOpen, onClose }: CartSidebarProps) {
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);

  const chatbotPlans: Plan[] = [
    {
      id: "chatbot-anual",
      name: "Chatbot Anual",
      price: 1099.0,
      description: "Chatbot com IA para seu site por 12 meses",
      features: [
        "Aproximadamente 120.000 conversas no ano",
        "Escalável e com bom custo-benefício",
        "Indicado para ecommerces, consultórios, prestadores de serviço",
        "Incluso desenvolvimento de site",
        "Suporte técnico incluído",
      ],
      category: "chatbot",
      popular: true,
    },
    {
      id: "chatbot-mensal",
      name: "Chatbot Mensal",
      price: 91.58,
      description: "Chatbot com IA para seu site - pagamento mensal",
      features: [
        "Aproximadamente 10.000 conversas por mês",
        "Flexibilidade de cancelamento",
        "Ideal para testes e pequenos negócios",
        "Suporte técnico incluído",
      ],
      category: "chatbot",
    },
    {
      id: "chatbot-implementacao",
      name: "Implementação Única",
      price: 1500.0,
      description: "Implementação única do chatbot (cliente gerencia)",
      features: [
        "Desenvolvimento completo do chatbot",
        "Implementação no seu site",
        "Treinamento da equipe",
        "Cliente gerencia custos da OpenAI",
        "Suporte inicial de 30 dias",
      ],
      category: "chatbot",
    },
  ];

  const sitePlans: Plan[] = [
    {
      id: "landing-page",
      name: "Landing Page",
      price: 600.0,
      description: "Página de conversão otimizada",
      features: [
        "Design responsivo",
        "Otimização para conversão",
        "Integração com formulários",
        "SEO básico incluído",
        "Chatbot integrado",
      ],
      category: "site",
    },
    {
      id: "site-institucional",
      name: "Site Institucional",
      price: 700.0,
      description: "Site completo para sua empresa",
      features: [
        "Até 5 páginas",
        "Design responsivo",
        "Painel administrativo",
        "SEO otimizado",
        "Chatbot integrado",
        "Formulário de contato",
      ],
      category: "site",
      popular: true,
    },
    {
      id: "ecommerce",
      name: "E-commerce",
      price: 1200.0,
      description: "Loja virtual completa",
      features: [
        "Catálogo de produtos ilimitado",
        "Carrinho de compras",
        "Integração com pagamentos",
        "Painel administrativo",
        "Chatbot integrado",
        "SEO otimizado",
      ],
      category: "site",
    },
  ];

  const allPlans = [...chatbotPlans, ...sitePlans];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  const handleAddToCart = (plan: Plan) => {
    setSelectedPlan(plan);
  };

  const handleCheckout = () => {
    if (selectedPlan) {
      // Aqui você implementaria a lógica de checkout
      // Por exemplo, redirecionar para uma página de pagamento
      const whatsappMessage = `Olá! Gostaria de contratar o plano ${
        selectedPlan.name
      } por ${formatPrice(
        selectedPlan.price
      )}. Podem me ajudar com o processo?`;
      const whatsappUrl = `https://wa.me/5511967381402?text=${encodeURIComponent(
        whatsappMessage
      )}`;
      window.open(whatsappUrl, "_blank");
    }
  };

  const handleRemoveFromCart = () => {
    setSelectedPlan(null);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Overlay */}
      <div className="flex-1 bg-black bg-opacity-50" onClick={onClose} />

      {/* Sidebar */}
      <div className="w-full max-w-md bg-white shadow-xl overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <ShoppingCart className="h-5 w-5 text-[#1e90ff]" />
            <h2 className="text-lg font-semibold text-[#022041]">
              Carrinho de Planos
            </h2>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Content */}
        <div className="p-4">
          {selectedPlan ? (
            /* Cart with selected plan */
            <div className="space-y-4">
              <h3 className="text-lg font-semibold text-[#022041]">
                Plano Selecionado
              </h3>

              <Card className="border-[#1e90ff]">
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg text-[#022041]">
                      {selectedPlan.name}
                    </CardTitle>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={handleRemoveFromCart}
                      className="text-red-500 hover:text-red-700"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-sm text-gray-600">
                    {selectedPlan.description}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="text-2xl font-bold text-[#1e90ff]">
                      {formatPrice(selectedPlan.price)}
                      {selectedPlan.id === "chatbot-mensal" && (
                        <span className="text-sm font-normal text-gray-600">
                          /mês
                        </span>
                      )}
                    </div>

                    <ul className="space-y-1 text-sm">
                      {selectedPlan.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-3 pt-4 border-t">
                <div className="flex items-center justify-between text-lg font-semibold">
                  <span>Total:</span>
                  <span className="text-[#1e90ff]">
                    {formatPrice(selectedPlan.price)}
                    {selectedPlan.id === "chatbot-mensal" && (
                      <span className="text-sm font-normal">/mês</span>
                    )}
                  </span>
                </div>

                <Button
                  onClick={handleCheckout}
                  className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white"
                >
                  Finalizar via WhatsApp
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Você será redirecionado para o WhatsApp para finalizar a
                  compra
                </p>
              </div>
            </div>
          ) : (
            /* Empty cart - show plans */
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-[#022041] mb-2">
                  Escolha seu Plano
                </h3>
                <p className="text-sm text-gray-600">
                  Selecione o plano ideal para suas necessidades
                </p>
              </div>

              {/* Chatbot Plans */}
              <div>
                <h4 className="text-md font-semibold text-[#022041] mb-3">
                  Planos de Chatbot
                </h4>
                <div className="space-y-3">
                  {chatbotPlans.map((plan) => (
                    <Card key={plan.id} className="relative">
                      {plan.popular && (
                        <Badge className="absolute -top-2 left-4 bg-[#1e90ff] text-white">
                          Mais Popular
                        </Badge>
                      )}
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-md text-[#022041]">
                            {plan.name}
                          </CardTitle>
                          <div className="text-lg font-bold text-[#1e90ff]">
                            {formatPrice(plan.price)}
                            {plan.id === "chatbot-mensal" && (
                              <span className="text-sm font-normal">/mês</span>
                            )}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600">
                          {plan.description}
                        </p>
                      </CardHeader>
                      <CardContent>
                        <Button
                          onClick={() => handleAddToCart(plan)}
                          className="w-full bg-[#1e90ff] hover:bg-[#022041] text-white"
                          size="sm"
                        >
                          Adicionar ao Carrinho
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Site Plans */}
              <div>
                <h4 className="text-md font-semibold text-[#022041] mb-3">
                  Planos de Sites
                </h4>
                <div className="space-y-3">
                  {sitePlans.map((plan) => (
                    <Card key={plan.id} className="relative">
                      {plan.popular && (
                        <Badge className="absolute -top-2 left-4 bg-[#1e90ff] text-white">
                          Mais Popular
                        </Badge>
                      )}
                      <CardHeader className="pb-3">
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-md text-[#022041]">
                            {plan.name}
                          </CardTitle>
                          <div className="text-lg font-bold text-[#1e90ff]">
                            {formatPrice(plan.price)}
                          </div>
                        </div>
                        <p className="text-sm text-gray-600">
                          {plan.description}
                        </p>
                      </CardHeader>
                      <CardContent>
                        <Button
                          onClick={() => handleAddToCart(plan)}
                          className="w-full bg-[#1e90ff] hover:bg-[#022041] text-white"
                          size="sm"
                        >
                          Adicionar ao Carrinho
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
