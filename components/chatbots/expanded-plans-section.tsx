"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

const planCategories = [
  "Site com Chatbot",
  "Site para Empresas",
  "Página de Vendas/Produtos",
  "Loja Virtual",
];

export function ExpandedPlansSection() {
  const [activeCategory, setActiveCategory] = useState("Site com Chatbot");

  const siteWithChatbotPlans = [
    {
      name: "Starter Chatbot",
      description: "Landing Page com chatbot integrado",
      subtitle:
        "Ideal para pequenos negócios que querem automatizar o atendimento básico com presença online profissional.",
      price: "R$ 1.200,00",
      period:
        "*Pagamento único em até 12x de (R$ 122,12) + R$ 115,00/mês pelo chatbot",
      features: [
        "Site responsivo com até 7 seções",
        "Chatbot com respostas automáticas",
        "Atendimento 24/7 em seu site",
        "Aprox. 1.000 conversas mensais",
      ],
      link: "/checkout?plan=starter-chatbot",
    },
    {
      name: "Pro Chatbot",
      popular: true,
      description: "Site completo com chatbot avançado",
      subtitle:
        "Perfeito para empresas que precisam de presença online robusta com atendimento automatizado inteligente.",
      price: "R$ 2.500,00",
      period:
        "*Pagamento único em até 12x de (R$ 254,40) + R$ 254,00/mês pelo chatbot",
      features: [
        "Site responsivo com até 10 páginas",
        "Chatbot com IA avançada",
        "Direcionamento para contato",
        "Otimização para SEO",
        "Aprox. 10.000 conversas mensais",
      ],
      link: "/checkout?plan=pro-chatbot",
    },
    {
      name: "Business Chatbot",
      description: "Solução completa para grandes empresas",
      subtitle:
        "Para empresas que precisam de máxima performance, escalabilidade e recursos avançados de automação.",
      price: "R$ 4.500,00",
      period:
        "*Pagamento único em até 12x de (R$ 457,91) + R$ 429,00/mês pelo chatbot",
      features: [
        "Site ilimitado com design personalizado",
        "Chatbot multi-idioma com IA",
        "Integração com múltiplos sistemas",
        "Painel administrativo avançado",
        "Suporte dedicado",
        "Infraestrutura escalável",
        "Aprox. 20.000 conversas mensais",
      ],
      link: "/checkout?plan=business-chatbot",
    },
  ];

  const businessSitePlans = [
    {
      name: "Institucional Básico",
      description: "Site institucional profissional",
      subtitle:
        "Apresente sua empresa com credibilidade e profissionalismo online.",
      price: "R$ 800,00",
      period: "*Pagamento único em até 12x de (R$ 81,41)",
      features: [
        "Design responsivo e moderno",
        "Até 10 páginas institucionais",
        "Formulário de contato",
        "Otimização para SEO",
        "Hospedagem inicial gratuita",
      ],
      link: "/checkout?plan=site-institucional-basic",
    },
    {
      name: "Institucional Premium",
      popular: true,
      description: "Site institucional completo",
      subtitle:
        "Solução completa para empresas que querem se destacar no mercado digital.",
      price: "R$ 1.500,00",
      period: "*Pagamento único em até 12x de (R$ 152,64)",
      features: [
        "Design personalizado exclusivo",
        "Até 15 páginas + blog",
        "SEO avançado",
        "Hospedagem inicial gratuita",
      ],
      link: "/checkout?plan=site-institucional-premium",
    },
    {
      name: "Corporativo",
      description: "Portal corporativo avançado",
      subtitle:
        "Para grandes empresas que precisam de um portal robusto e funcionalidades avançadas.",
      price: "R$ 3.000,00",
      period:
        "*Pagamento único em até 12x de (R$ 305,28) + R$ 130,00/mês por manutenção preventiva",
      features: [
        "Portal multi-idioma",
        "Sistema de gestão de conteúdo",
        "Integração com sistemas internos",
        "Área do colaborador",
        "Suporte técnico dedicado",
        "Hospedagem inicial gratuita",
      ],
      link: "/checkout?plan=site-institucional-corporativo",
    },
  ];

  const salesPagePlans = [
    {
      name: "Landing Page Simples",
      description: "Página de vendas focada em conversão",
      subtitle:
        "Ideal para campanhas específicas, lançamentos de produtos ou captação de leads.",
      price: "R$ 600,00",
      period: "*Pagamento único em até 12x de (R$ 61,06)",
      features: [
        "Design otimizado para conversão",
        "Até 7 seções estratégicas",
        "Formulários de captação",
        "Integração com WhatsApp",
        "Hospedagem inicial gratuita",
      ],
      link: "/checkout?plan=landing-page-simples",
    },
    {
      name: "Landing Page Premium",
      popular: true,
      description: "Página de vendas com recursos avançados",
      subtitle:
        "Para campanhas de alto impacto com recursos de automação e análise detalhada.",
      price: "R$ 1.200,00",
      period: "*Pagamento único em até 12x de (R$ 122,11)",
      features: [
        "Design premium personalizado",
        "Otimização para anúncios pagos",
        "Formulários de captação",
        "Integração com WhatsApp",
        "Hospedagem inicial gratuita",
      ],
      link: "/checkout?plan=landing-page-premium",
    },
    {
      name: "Landing Page Completa",
      description: "Sistema completo de vendas online",
      subtitle:
        "Solução completa com múltiplas páginas e painel de vendas para maximizar conversões.",
      price: "R$ 2.500,00",
      period:
        "*Pagamento único em até 12x de (R$ 254,40) + R$ 130,00/mês por manutenção preventiva",
      features: [
        "Múltiplas páginas de vendas",
        "Sistema de pagamento integrado",
        "Automação completa de vendas",
        "Suporte especializado",
        "Hospedagem inicial gratuita",
      ],
      link: "/checkout?plan=landing-page-complete",
    },
  ];

  const ecommercePlans = [
    {
      name: "Loja Básica",
      description: "E-commerce para pequenos negócios",
      subtitle:
        "Comece a vender online com uma loja virtual completa e fácil de gerenciar.",
      price: "R$ 1.600,00",
      period:
        "*Pagamento único em até 12x de (R$ 162,81) + R$ 130,00/mês por manutenção preventiva",
      features: [
        "Até 100 produtos",
        "Carrinho de compras",
        "Integração com pagamentos",
        "Painel administrativo",
        "Hospedagem por 1 ano",
      ],
      link: "/checkout?plan=ecommerce-basic",
    },
    {
      name: "Loja Profissional",
      popular: true,
      description: "E-commerce completo e escalável",
      subtitle:
        "Solução robusta para empresas que querem crescer no comércio eletrônico.",
      price: "R$ 3.200,00",
      period:
        "*Pagamento único em até 12x de (R$ 325,63) + R$ 130,00/mês por manutenção preventiva",
      features: [
        "Produtos ilimitados",
        "Múltiplas formas de pagamento",
        "Sistema de cupons e promoções",
        "Gestão de estoque avançada",
        "Relatórios de vendas",
        "App mobile responsivo",
      ],
      link: "/checkout?plan=ecommerce-pro",
    },
    {
      name: "Marketplace",
      description: "Plataforma de vendas multi-vendor",
      subtitle:
        "Para empresas que querem criar um marketplace com múltiplos vendedores.",
      price: "R$ 6.500,00",
      period:
        "*Pagamento único em até 12x de (R$ 661,43) + R$ 130,00/mês por manutenção preventiva",
      features: [
        "Sistema multi-vendor",
        "Comissões automáticas",
        "Painel para vendedores",
        "Sistema de avaliações",
        "Logística integrada",
        "Suporte empresarial",
      ],
      link: "/checkout?plan=ecommerce-marketplace",
    },
  ];

  const getCurrentPlans = () => {
    switch (activeCategory) {
      case "Site com Chatbot":
        return siteWithChatbotPlans;
      case "Site para Empresas":
        return businessSitePlans;
      case "Página de Vendas/Produtos":
        return salesPagePlans;
      case "Loja Virtual":
        return ecommercePlans;
      default:
        return siteWithChatbotPlans;
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-[#022041] mb-4">
            Nossos Planos Completos
          </h2>
          <p className="text-lg text-gray-600">
            Soluções personalizadas para cada tipo de negócio
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
                </ul>
                <Link href={plan.link}>
                  <Button className="w-full bg-[#1e90ff] hover:bg-[#022041] text-white mb-3">
                    Escolher plano
                  </Button>
                </Link>
                <p className="text-xs text-center text-gray-500">
                  <strong>Detalhes:</strong> Solicitação de reembolso em até 30
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
