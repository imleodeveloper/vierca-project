import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function SiteTypesSection() {
  const siteTypes = [
    {
      title: "Ideal para campanhas",
      name: "Landing Page",
      description:
        "Uma landing page com até 7 seções principais, focada em conversão e otimizada para campanhas de tráfego pago e captação de leads.",
      features: [
        { name: "Simplicidade", level: "Alta" },
        { name: "Foco em conversão", level: "Alta" },
        { name: "Velocidade de entrega", level: "Alta" },
      ],
      color: "bg-blue-50 border-blue-200",
    },
    {
      title: "Presença profissional",
      name: "Site Institucional",
      description:
        "Um site institucional completo com até 10 seções principais, ideal para apresentar sua empresa, serviços, equipe e manter presença online com credibilidade.",
      features: [
        { name: "Autoridade de marca", level: "Alta" },
        { name: "Flexibilidade de conteúdo", level: "Média" },
        { name: "Escalabilidade", level: "Média" },
      ],
      color: "bg-green-50 border-green-200",
    },
    {
      title: "Venda online com estrutura robusta",
      name: "Loja Virtual",
      description:
        "Loja virtual com estrutura escalável, sistema de cadastro de produtos, carrinho de compras, integração com meios de pagamento e pronta para vender 24h por dia.",
      features: [
        { name: "Escalabilidade", level: "Alta" },
        { name: "Gestão de produtos", level: "Alta" },
        { name: "Flexibilidade de conteúdo", level: "Média" },
      ],
      color: "bg-purple-50 border-purple-200",
    },
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-[#022041] mb-4">Encontre o site ideal para você!</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {siteTypes.map((site, index) => (
            <Card key={index} className={`${site.color} card-hover`}>
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <p className="text-sm text-gray-600 mb-2">{site.title}</p>
                  <h3 className="text-xl font-bold text-[#022041] mb-4">{site.name}</h3>
                  <p className="text-sm text-gray-700">{site.description}</p>
                </div>

                <div className="space-y-3">
                  {site.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center justify-between">
                      <span className="text-sm font-medium text-gray-700">{feature.name}</span>
                      <Badge
                        variant="outline"
                        className={`text-xs ${
                          feature.level === "Alta"
                            ? "border-green-500 text-green-700 bg-green-50"
                            : "border-yellow-500 text-yellow-700 bg-yellow-50"
                        }`}
                      >
                        {feature.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
