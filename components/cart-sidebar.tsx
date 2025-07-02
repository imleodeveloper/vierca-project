"use client";

import { useState } from "react";
import { X, ShoppingCart, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface Plan {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  category: "chatbot" | "site";
  popular?: boolean;
  link: string;
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
      price: 91.58,
      description: "Chatbot com IA e site incluso - pagamento anual",
      features: [
        "Aproximadamente 12.000 conversas por ano",
        "Custo acessível para começar",
        "Ideal para sites pessoais e pequenos negócios",
        "Incluso desenvolvimento de site",
        "Incluso domínio 01 ano grátis",
        "Incluso instalação de chatbot",
        "Incluso suporte técnico",
      ],
      category: "chatbot",
      popular: true,
      link: "/chatbots",
    },
    {
      id: "chatbot-mensal",
      name: "Chatbot Mensal",
      price: 115.0,
      description: "Chatbot com IA para seu site - pagamento mensal",
      features: [
        "Aproximadamente 1.000 conversas no mês",
        "Custo acessível para começar",
        "Indicado para ecommerces, consultórios, prestadores de serviço",
        "Incluso suporte técnico",
      ],
      category: "chatbot",
      link: "/chatbots",
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
        "SEO incluído",
        "Suporte 1 mês após finalização",
        "Hospedagem inicial gratuita",
      ],
      category: "site",
      link: "/sites",
    },
    {
      id: "site-institucional",
      name: "Site Institucional",
      price: 800.0,
      description: "Site completo para sua empresa",
      features: [
        "Até 10 páginas",
        "Design responsivo",
        "SEO otimizado",
        "Formulário de contato",
        "Suporte 1 mês após finalização",
        "Hospedagem inicial gratuita",
      ],
      category: "site",
      popular: true,
      link: "/sites",
    },
    {
      id: "ecommerce",
      name: "E-commerce",
      price: 1600.0,
      description: "Loja virtual completa",
      features: [
        "Catálogo de produtos",
        "Carrinho de compras",
        "Integração com pagamentos",
        "Painel administrativo",
        "SEO otimizado",
        "Hospedagem inicial gratuita",
      ],
      category: "site",
      link: "/sites",
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
        <div className="sticky relative z-[2] top-0 bg-white border-b border-gray-200 p-4 flex items-center justify-between">
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
                      {selectedPlan.id === "chatbot-anual" && (
                        <span className="text-sm font-normal text-gray-600">
                          /mês
                        </span>
                      )}
                    </div>
                    {selectedPlan.id === "chatbot-anual" && (
                      <div className="text-2xl font-bold text-[#1e90ff]">
                        {formatPrice(selectedPlan.price * 12)}
                        <span className="text-sm font-normal text-gray-600">
                          /ano
                        </span>
                      </div>
                    )}

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
                    {selectedPlan.id === "chatbot-mensal" && (
                      <div className="text-2xl font-bold text-[#1e90ff]">
                        {formatPrice(selectedPlan.price)}
                        <span className="text-sm font-normal text-gray-600">
                          /mês
                        </span>
                      </div>
                    )}
                    {selectedPlan.id === "chatbot-anual" && (
                      <div className="text-2xl font-bold text-[#1e90ff]">
                        {formatPrice(selectedPlan.price * 12)}
                      </div>
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
                  Planos de Chatbot Mais Populares
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
                          {plan.id === "chatbot-mensal" && (
                            <div className="text-lg font-bold text-[#1e90ff]">
                              {formatPrice(plan.price)}
                              <span className="text-sm font-normal">/mês</span>
                            </div>
                          )}
                          {plan.id === "chatbot-anual" && (
                            <div className="text-lg font-bold text-[#1e90ff]">
                              {formatPrice(plan.price)}
                              <span className="text-sm font-normal">
                                /{formatPrice(plan.price * 12)}
                              </span>
                            </div>
                          )}
                        </div>
                        <p className="text-sm text-gray-600">
                          {plan.description}
                        </p>
                      </CardHeader>
                      <CardContent className="flex justify-center items-center gap-2">
                        <Button
                          onClick={() => handleAddToCart(plan)}
                          className="w-full bg-[#1e90ff] hover:bg-[#022041] text-white"
                          size="sm"
                        >
                          Adicionar ao Carrinho
                        </Button>
                        <Button
                          className="w-full bg-[#1e90ff] hover:bg-[#022041] text-white"
                          size="sm"
                        >
                          <Link
                            href={plan.link}
                            className="w-full h-full flex justify-center items-center"
                          >
                            Saiba mais
                          </Link>
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
                      <CardContent className="flex justify-center items-center gap-2">
                        <Button
                          onClick={() => handleAddToCart(plan)}
                          className="w-full bg-[#1e90ff] hover:bg-[#022041] text-white"
                          size="sm"
                        >
                          Adicionar ao Carrinho
                        </Button>
                        <Button
                          className="w-full bg-[#1e90ff] hover:bg-[#022041] text-white"
                          size="sm"
                        >
                          <Link
                            href={plan.link}
                            className="w-full h-full flex justify-center items-center"
                          >
                            Saiba mais
                          </Link>
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
