"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const planCategories = ["Chatbot Anual", "Chatbot Mensal", "Site com Chatbot"];

export function PlansSection() {
  const [activeCategory, setActiveCategory] = useState("Chatbot Anual");

  const annualPlans = [
    {
      name: "Básico",
      description: "Aprox. 1.000 conversas por mês",
      subtitle:
        "Ideal para sites pessoais ou pequenos negócios em início de jornada com IA. Válido para 1 site (1 domínio)",
      price: "R$ 91,58/mês",
      period:
        "*Estimativa mensal para referência. Plano anual com pagamento à vista.",
      features: [
        "Aproximadamente 12.000 conversas no ano",
        "Atendimento simples e eficaz",
        "Custo acessível para começar",
        "Incluso desenvolvimento de site",
        "Incluso instalação chatbot",
      ],
    },
    {
      name: "Intermediário",
      popular: true,
      description: "Aprox. 10.000 conversas por mês",
      subtitle:
        "Perfeito para negócios com tráfego moderado e atendimento ativo via chatbot. Válido para 1 site (1 domínio)",
      price: "R$ 214,00/mês",
      period:
        "*Estimativa mensal para referência. Plano anual com pagamento à vista.",
      features: [
        "Aproximadamente 120.000 conversas no ano",
        "Escalável e com bom custo-benefício",
        "Indicado para ecommerces, consultórios, prestadores de serviço",
        "Incluso desenvolvimento de site",
        "Incluso instalação chatbot",
      ],
    },
    {
      name: "Profissional",
      description: "Aprox 20.000 conversas por mês",
      subtitle:
        "Solução robusta para empresas com grande volume de tráfego e atendimentos. Válido para 1 site (1 domínio)",
      price: "R$ 379,00/mês",
      period:
        "*Estimativa mensal para referência. Plano anual com pagamento à vista.",
      features: [
        "Aproximadamente 240.000 conversas no ano",
        "Estável, eficiente e preparado para alto volume",
        "Ideal para marketplaces, SaaS, franquias digitais",
        "Incluso desenvolvimento de site",
        "Incluso instalação chatbot",
      ],
    },
  ];

  const monthlyPlans = [
    {
      name: "Básico",
      description: "Aprox. 1.000 conversas",
      subtitle:
        "Ideal para sites pessoais ou pequenos negócios em início de jornada com IA. Válido para 1 site (1 domínio)",
      price: "R$ 115,00/mês",
      period: "*Plano mensal. Cancele a qualquer momento.",
      features: [
        "Atendimento simples e eficaz",
        "Custo acessível para começar",
      ],
      notFeatures: [
        "Não incluso desenvolvimento de site",
        "Pagamento da instalação de chatbot a parte",
      ],
    },
    {
      name: "Intermediário",
      popular: true,
      description: "Aprox. 10.000 conversas",
      subtitle:
        "Perfeito para negócios com tráfego moderado e atendimento ativo via chatbot. Válido para 1 site (1 domínio)",
      price: "R$ 254,00/mês",
      period: "*Plano mensal. Cancele a qualquer momento.",
      features: [
        "Escalável e com bom custo-benefício",
        "Indicado para ecommerces, consultórios, prestadores de serviço",
      ],
      notFeatures: [
        "Não incluso desenvolvimento de site",
        "Pagamento da instalação de chatbot a parte",
      ],
    },
    {
      name: "Profissional",
      description: "Aprox. 20.000 conversas",
      subtitle:
        "Solução robusta para empresas com grande volume de tráfego e atendimentos. Válido para 1 site (1 domínio)",
      price: "R$ 429,00/mês",
      period: "*Plano mensal. Cancele a qualquer momento.",
      features: [
        "Preparado para alto volume",
        "Ideal para marketplaces, SaaS, franquias digitais",
      ],
      notFeatures: [
        "Não incluso desenvolvimento de site",
        "Pagamento da instalação de chatbot a parte",
      ],
    },
  ];

  const sitePlans = [
    {
      name: "Starter Chatbot",
      description: "Landing Page com chatbot integrado",
      subtitle:
        "Ideal para pequenos negócios que querem automatizar o atendimento básico com presença online profissional.",
      price: "R$ 1.200,00",
      period: "*Pagamento único em até 12x + R$ 115,00/mês pelo chatbot",
      features: [
        "Site responsivo com até 7 seções",
        "Chatbot com respostas automáticas",
        "Atendimento 24/7 em seu site",
        "Aprox. 1.000 conversas mensais",
      ],
    },
    {
      name: "Pro Chatbot",
      popular: true,
      description: "Site completo com chatbot avançado",
      subtitle:
        "Perfeito para empresas que precisam de presença online robusta com atendimento automatizado inteligente.",
      price: "R$ 2.500,00",
      period: "*Pagamento único em até 12x + R$ 254,00/mês pelo chatbot",
      features: [
        "Site responsivo com até 10 páginas",
        "Chatbot com IA avançada",
        "Direcionamento para contato",
        "Otimização para SEO",
        "Aprox. 10.000 conversas mensais",
      ],
    },
    {
      name: "Business Chatbot",
      description: "Solução completa para grandes empresas",
      subtitle:
        "Para empresas que precisam de máxima performance, escalabilidade e recursos avançados de automação.",
      price: "R$ 4.500,00",
      period: "*Pagamento único em até 12x + R$ 429,00/mês pelo chatbot",
      features: [
        "Site ilimitado com design personalizado",
        "Chatbot multi-idioma com IA",
        "Integração com múltiplos sistemas",
        "Painel administrativo avançado",
        "Suporte dedicado",
        "Infraestrutura escalável",
        "Aprox. 20.000 conversas mensais",
      ],
    },
  ];

  const getCurrentPlans = () => {
    switch (activeCategory) {
      case "Chatbot Anual":
        return annualPlans;
      case "Chatbot Mensal":
        return monthlyPlans;
      case "Site com Chatbot":
        return sitePlans;
      default:
        return annualPlans;
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-[#022041] mb-4">
            Confira um de nossos planos para você!
          </h2>
          <p className="text-lg text-gray-600">
            Nossos planos possuem 07 dias para solicitação de reembolso, zero
            risco!
          </p>
        </div>

        {/* Plan Category Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {planCategories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 ${
                activeCategory === category
                  ? "bg-[#1e90ff] hover:bg-[#022041] text-white"
                  : "border-[#022041] text-[#022041] hover:bg-[#022041] hover:text-white"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {getCurrentPlans().map((plan, index) => (
            <Card
              key={index}
              className="relative card-hover border-2 hover:border-[#1e90ff]"
            >
              {plan.popular && <div className="popular-badge">Popular</div>}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-bold text-[#022041] mb-2">
                  {plan.name}
                </CardTitle>
                <p className="text-sm font-medium text-gray-600 mb-2">
                  {plan.description}
                </p>
                <p className="text-sm text-gray-500 mb-4">{plan.subtitle}</p>
                <div className="text-center">
                  <div className="text-2xl font-black text-[#1e90ff] mb-1">
                    {plan.price}
                  </div>
                  <p className="text-xs text-gray-500">{plan.period}</p>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start space-x-2"
                    >
                      <div className="bg-green-100 rounded-full p-1 mt-0.5">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      </div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                  {plan.notFeatures &&
                    plan.notFeatures.map((notFeature, notFeatureIndex) => (
                      <li
                        key={notFeatureIndex}
                        className="flex items-start space-x-2"
                      >
                        <div className="bg-red-100 rounded-full p-1 mt-0.5">
                          <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                        </div>
                        <span className="text-sm text-gray-600">
                          {notFeature}
                        </span>
                      </li>
                    ))}
                </ul>
                <Button className="w-full bg-[#1e90ff] hover:bg-[#022041] text-white mb-3">
                  Escolher plano
                </Button>
                <p className="text-xs text-center text-gray-500">
                  <strong>Detalhes:</strong> Solicitação de reembolso em até 07
                  dias. Cancele a qualquer momento.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
