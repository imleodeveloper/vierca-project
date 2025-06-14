"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const planCategories = ["Implementação Chatbot", "Chatbot Anual", "Chatbot Mensal", "Sites"]

export function PlansSection() {
  const [activeCategory, setActiveCategory] = useState("Implementação Chatbot")

  const implementationPlans = [
    {
      name: "Tradicional",
      popular: true,
      description: "Um chatbot para um site",
      subtitle:
        "Ideal para sites pessoais, institucionais ou pequenos negócios que precisam automatizar atendimentos básicos com inteligência artificial.",
      price: "R$ 799,99",
      period: "*Pagamento único.",
      features: [
        "Responde dúvidas frequentes",
        "Direciona para WhatsApp ou canais externos",
        "Sem necessidade de painel ou suporte técnico contínuo",
      ],
    },
    {
      name: "Negócios",
      description: "Dois chatbots para dois sites",
      subtitle:
        "Perfeito para empresas com duas frentes de atuação, marcas distintas ou filiais que precisam de atendimento automatizado em sites separados.",
      price: "R$ 1.499,99",
      period: "*Pagamento único.",
      features: [
        "Um chatbot por site (até 2 sites)",
        "Ideal para múltiplas marcas",
        "Pronto para responder e direcionar atendimentos",
      ],
    },
    {
      name: "Empresarial",
      description: "Cinco chatbots para cinco sites",
      subtitle:
        "Solução para empresas maiores, com diversas marcas, produtos ou áreas de atuação, que precisam de chatbots distribuídos em vários domínios.",
      price: "R$ 3.499,99",
      period: "*Pagamento único.",
      features: [
        "Atendimento automatizado em (até 5 sites)",
        "Comunicação inteligente com visitantes",
        "Direcionamento estratégico para canais externos",
      ],
    },
  ]

  const annualPlans = [
    {
      name: "Básico",
      description: "Aprox. 1.000 conversas por mês",
      subtitle:
        "Ideal para sites pessoais ou pequenos negócios em início de jornada com IA. Válido para 1 site (1 domínio)",
      price: "R$ 91,58/mês",
      period: "*Estimativa mensal para referência. Plano anual com pagamento à vista.",
      features: [
        "Aproximadamente 12.000 conversas no ano",
        "Atendimento simples e eficaz",
        "Custo acessível para começar",
        "Incluso desenvolvimento de site",
      ],
    },
    {
      name: "Intermediário",
      popular: true,
      description: "Aprox. 10.000 conversas por mês",
      subtitle:
        "Perfeito para negócios com tráfego moderado e atendimento ativo via chatbot. Válido para 1 site (1 domínio)",
      price: "R$ 214,00/mês",
      period: "*Estimativa mensal para referência. Plano anual com pagamento à vista.",
      features: [
        "Aproximadamente 120.000 conversas no ano",
        "Escalável e com bom custo-benefício",
        "Indicado para ecommerces, consultórios, prestadores de serviço",
        "Incluso desenvolvimento de site",
      ],
    },
    {
      name: "Profissional",
      description: "Aprox 20.000 conversas por mês",
      subtitle:
        "Solução robusta para empresas com grande volume de tráfego e atendimentos. Válido para 1 site (1 domínio)",
      price: "R$ 379,00/mês",
      period: "*Estimativa mensal para referência. Plano anual com pagamento à vista.",
      features: [
        "Aproximadamente 240.000 conversas no ano",
        "Estável, eficiente e preparado para alto volume",
        "Ideal para marketplaces, SaaS, franquias digitais",
        "Incluso desenvolvimento de site",
      ],
    },
  ]

  const monthlyPlans = [
    {
      name: "Básico",
      description: "Aprox. 1.000 conversas",
      subtitle:
        "Ideal para sites pessoais ou pequenos negócios em início de jornada com IA. Válido para 1 site (1 domínio)",
      price: "R$ 115,00/mês",
      period: "*Plano mensal. Cancele a qualquer momento.",
      features: ["Atendimento simples e eficaz", "Custo acessível para começar"],
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
    },
    {
      name: "Profissional",
      description: "Aprox. 20.000 conversas",
      subtitle:
        "Solução robusta para empresas com grande volume de tráfego e atendimentos. Válido para 1 site (1 domínio)",
      price: "R$ 429,00/mês",
      period: "*Plano mensal. Cancele a qualquer momento.",
      features: [
        "Estável, eficiente e preparado para alto volume",
        "Ideal para marketplaces, SaaS, franquias digitais",
      ],
    },
  ]

  const sitePlans = [
    {
      name: "Landing Page",
      popular: true,
      description: "Site objetivo de uma única página com foco em conversão.",
      subtitle:
        "Ideal para campanhas, lançamentos, captação de leads e apresentação de serviços. Recomendado para autônomos, profissionais liberais e microempreendedores.",
      price: "R$ 600,00",
      period: "*Pagamento único",
      features: [
        "Layout moderno e responsivo",
        "Foco em chamada para ação (CTA)",
        "Integração com WhatsApp ou formulário",
      ],
    },
    {
      name: "Site Institucional",
      description: "Site com múltiplas páginas, ideal para apresentar sua empresa com profissionalismo",
      subtitle: "Indicado para empresas de serviços, clínicas, escritórios e projetos profissionais.",
      price: "R$ 800,00",
      period: "*Pagamento único",
      features: [
        "Página inicial + páginas internas (sobre, serviços, contato, etc.)",
        "Layout moderno e responsivo",
        "Otimização para SEO",
      ],
    },
    {
      name: "Loja Virtual",
      description: "Plataforma de e-commerce com sistema de produtos, carrinho e painel de gestão",
      subtitle: "Ideal para marcas, lojas e revendedores que desejam vender pela internet.",
      price: "R$ 1.600,00",
      period: "*Pagamento único",
      features: [
        "Cadastro de produtos com imagens e preços",
        "Carrinho de compras e integração com pagamento",
        "Área do cliente + painel administrador",
      ],
    },
  ]

  const getCurrentPlans = () => {
    switch (activeCategory) {
      case "Implementação Chatbot":
        return implementationPlans
      case "Chatbot Anual":
        return annualPlans
      case "Chatbot Mensal":
        return monthlyPlans
      case "Sites":
        return sitePlans
      default:
        return implementationPlans
    }
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-[#022041] mb-4">Confira um de nossos planos para você!</h2>
          <p className="text-lg text-gray-600">
            Nossos planos possuem 30 dias para solicitação de reembolso, zero risco!
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
            <Card key={index} className="relative card-hover border-2 hover:border-[#1e90ff]">
              {plan.popular && <div className="popular-badge">Popular</div>}
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-xl font-bold text-[#022041] mb-2">{plan.name}</CardTitle>
                <p className="text-sm font-medium text-gray-600 mb-2">{plan.description}</p>
                <p className="text-sm text-gray-500 mb-4">{plan.subtitle}</p>
                <div className="text-center">
                  <div className="text-2xl font-black text-[#1e90ff] mb-1">{plan.price}</div>
                  <p className="text-xs text-gray-500">{plan.period}</p>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <div className="bg-green-100 rounded-full p-1 mt-0.5">
                        <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      </div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-[#1e90ff] hover:bg-[#022041] text-white mb-3">Escolher plano</Button>
                <p className="text-xs text-center text-gray-500">
                  <strong>Detalhes:</strong> Solicitação de reembolso em até 30 dias. Cancele a qualquer momento.
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
