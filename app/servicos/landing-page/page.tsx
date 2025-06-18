import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Target,
  Zap,
  Smartphone,
  BarChart3,
  Clock,
  Gift,
} from "lucide-react";
import Link from "next/link";

export default function LandingPagePage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-50 to-cyan-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">🎯</div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Landing Pages de{" "}
              <span className="text-cyan-600">Alta Conversão</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Páginas que convertem visitantes em clientes. Landing pages
              estratégicas com 7 seções otimizadas para gerar leads e maximizar
              conversões. Desenvolvimento em até 2 dias úteis com hospedagem
              inicial gratuita.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-cyan-600 hover:bg-cyan-700 text-white"
                asChild
              >
                <Link href="/contato">Solicitar Orçamento</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="hover:text-white hover:bg-cyan-700"
              >
                <Link href="#secoes">Ver Estrutura</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que nossas Landing Pages convertem mais?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Metodologia comprovada com foco total em resultados
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-cyan-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-cyan-600" />
                </div>
                <CardTitle>7 Seções Estratégicas</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Estrutura otimizada que guia o usuário através do funil de
                  conversão
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-cyan-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-cyan-600" />
                </div>
                <CardTitle>Foco Total em Conversão</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Cada elemento é pensado para maximizar a geração de leads
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-cyan-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-cyan-600" />
                </div>
                <CardTitle>Desenvolvimento em 2 Dias</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Sua landing page no ar em apenas 2 dias úteis
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-cyan-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <Gift className="w-6 h-6 text-cyan-600" />
                </div>
                <CardTitle>Hospedagem Inicial Gratuita</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Hospedagem profissional sem custos adicionais
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-cyan-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-cyan-600" />
                </div>
                <CardTitle>Design Responsivo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Perfeita em todos os dispositivos e tamanhos de tela
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-cyan-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-cyan-600" />
                </div>
                <CardTitle>Otimizada para SEO</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Configuração completa para mecanismos de busca
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* 7 Sections */}
      <section id="secoes" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              As 7 Seções Estratégicas
            </h2>
            <p className="text-xl text-gray-600">
              Cada seção tem um propósito específico na jornada de conversão
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="border-l-4 border-l-cyan-500">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    1
                  </div>
                  <CardTitle>Hero Section</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Proposta de valor clara e CTA principal que captura a atenção
                  imediatamente
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-cyan-500">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    2
                  </div>
                  <CardTitle>Benefícios</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Principais vantagens do seu produto/serviço apresentadas de
                  forma convincente
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-cyan-500">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    3
                  </div>
                  <CardTitle>Social Proof</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Depoimentos e cases de sucesso que geram confiança e
                  credibilidade
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-cyan-500">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    4
                  </div>
                  <CardTitle>Características</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Detalhes técnicos e diferenciais que justificam a escolha
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-cyan-500">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    5
                  </div>
                  <CardTitle>Objeções</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Resposta às principais dúvidas que podem impedir a conversão
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-cyan-500">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    6
                  </div>
                  <CardTitle>Urgência</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Elementos que incentivam ação imediata e reduzem
                  procrastinação
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-cyan-500">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    7
                  </div>
                  <CardTitle>CTA Final</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Última oportunidade de conversão com chamada para ação
                  irresistível
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefícios das Nossas Landing Pages
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2">
                Entrega Ultra-Rápida
              </h3>
              <p className="text-gray-600">
                Sua landing page no ar em apenas 2 dias úteis
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-2">
                Alta Taxa de Conversão
              </h3>
              <p className="text-gray-600">
                Estrutura otimizada para maximizar leads
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">🆓</div>
              <h3 className="text-xl font-semibold mb-2">
                Hospedagem Gratuita
              </h3>
              <p className="text-gray-600">
                Hospedagem inicial sem custos adicionais
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2">Mobile-First</h3>
              <p className="text-gray-600">Perfeita em todos os dispositivos</p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Desenvolvimento Ágil
            </h2>
            <p className="text-xl text-gray-600">
              Processo otimizado para entrega em 2 dias
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Estratégia de Conversão
                  </h3>
                  <p className="text-gray-600">
                    Definimos objetivos, público-alvo e jornada do usuário
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Design e Copywriting
                  </h3>
                  <p className="text-gray-600">
                    Criamos layout e textos focados em conversão
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Desenvolvimento Rápido
                  </h3>
                  <p className="text-gray-600">
                    Codificamos a landing page em até 2 dias úteis
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Testes e Otimização
                  </h3>
                  <p className="text-gray-600">
                    Testamos todos os elementos e otimizamos performance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Casos de Uso Ideais
            </h2>
            <p className="text-xl text-gray-600">
              Landing pages são perfeitas para
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Lançamento de produtos",
              "Campanhas de marketing digital",
              "Captura de leads para webinars",
              "Promoções e ofertas especiais",
              "Testes de mercado",
              "Eventos e inscrições",
            ].map((useCase) => (
              <Card key={useCase} className="text-center">
                <CardContent className="pt-6">
                  <CheckCircle className="w-8 h-8 text-cyan-600 mx-auto mb-3" />
                  <p className="font-medium">{useCase}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tecnologias Utilizadas
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "Next.js",
              "React",
              "TailwindCSS",
              "TypeScript",
              "Analytics Integration",
              "A/B Testing Ready",
            ].map((tech) => (
              <Badge
                key={tech}
                variant="secondary"
                className="px-4 py-2 text-sm"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para Gerar Mais Leads?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Crie sua landing page de alta conversão e veja seus resultados
            decolarem
          </p>
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="bg-white text-cyan-600 hover:bg-cyan-800 hover:text-white"
          >
            <Link href="/contato">Solicitar Landing Page</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
