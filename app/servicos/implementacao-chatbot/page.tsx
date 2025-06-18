import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Wrench,
  Zap,
  RotateCcw,
  Headphones,
  BarChart3,
  Clock,
} from "lucide-react";
import Link from "next/link";

export default function ImplementacaoChatbotPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-50 to-blue-200 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">🔧</div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Implementação de <span className="text-cyan-600">Chatbot</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Adicione IA ao seu site existente. Já tem um site desenvolvido por
              outra empresa? Implementamos chatbots inteligentes em qualquer
              plataforma, com planos flexíveis e cancelamento a qualquer
              momento.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-cyan-600 hover:bg-cyan-700 text-white"
                asChild
              >
                <Link href="/contato">Solicitar Implementação</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="hover:bg-cyan-700 hover:text-white"
              >
                <Link href="#como-funciona">Como Funciona</Link>
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
              Por que escolher nossa implementação?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexibilidade total para sites já existentes
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-cyan-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="w-6 h-6 text-cyan-600" />
                </div>
                <CardTitle>Implementação em Sites Existentes</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Adicionamos chatbot ao seu site atual sem afetar o
                  funcionamento
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-cyan-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-cyan-600" />
                </div>
                <CardTitle>Compatível com Qualquer Plataforma</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  WordPress, Wix, Squarespace, sites customizados e muito mais
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-cyan-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <RotateCcw className="w-6 h-6 text-cyan-600" />
                </div>
                <CardTitle>Planos Mensais Flexíveis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Sem compromisso de longo prazo, ajuste conforme necessário
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-cyan-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-cyan-600" />
                </div>
                <CardTitle>Cancelamento a Qualquer Momento</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Total liberdade para cancelar quando quiser, sem multas
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-cyan-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <Headphones className="w-6 h-6 text-cyan-600" />
                </div>
                <CardTitle>Suporte Técnico Incluído</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Suporte contínuo e manutenção incluídos no plano mensal
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-cyan-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-cyan-600" />
                </div>
                <CardTitle>Treinamento Personalizado</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  IA treinada especificamente com informações do seu negócio
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section id="como-funciona" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Como Funciona
            </h2>
            <p className="text-xl text-gray-600">
              Taxa de instalação + plano mensal
            </p>
          </div>

          <div className="max-w-4xl mx-auto mb-12">
            <Card className="border-2 border-cyan-200 bg-cyan-50">
              <CardContent className="pt-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-cyan-600 mb-2">
                    Taxa de Instalação
                  </h3>
                  <div className="text-4xl font-bold text-gray-900 mb-2">
                    R$ 300,00
                  </div>
                  <p className="text-gray-600">
                    Pagamento único para implementação profissional
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Análise Técnica
                  </h3>
                  <p className="text-gray-600">
                    Avaliamos seu site atual e definimos a melhor estratégia de
                    implementação
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Desenvolvimento Custom
                  </h3>
                  <p className="text-gray-600">
                    Criamos o chatbot personalizado para sua marca e
                    necessidades
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Instalação Profissional
                  </h3>
                  <p className="text-gray-600">
                    Implementamos o chatbot sem afetar o funcionamento do seu
                    site
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Testes e Go-Live
                  </h3>
                  <p className="text-gray-600">
                    Realizamos testes completos antes de colocar o chatbot no ar
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefícios da Nossa Implementação
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-semibold mb-2">
                Implementação Rápida
              </h3>
              <p className="text-gray-600">
                Chatbot funcionando em até 5 dias úteis
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">🔄</div>
              <h3 className="text-xl font-semibold mb-2">
                Flexibilidade Total
              </h3>
              <p className="text-gray-600">
                Cancele ou altere seu plano a qualquer momento
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">🛠️</div>
              <h3 className="text-xl font-semibold mb-2">Suporte Contínuo</h3>
              <p className="text-gray-600">
                Manutenção e atualizações incluídas no plano
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-2">
                Relatórios Detalhados
              </h3>
              <p className="text-gray-600">
                Acompanhe performance e ROI do seu chatbot
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Compatibility Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Compatibilidade Universal
            </h2>
            <p className="text-xl text-gray-600">
              Nosso chatbot funciona em qualquer tipo de site
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Sites institucionais",
              "E-commerces",
              "Blogs e portais",
              "Sistemas personalizados",
              "Plataformas de ensino",
              "Aplicações web",
            ].map((platform) => (
              <Card key={platform} className="text-center">
                <CardContent className="pt-6">
                  <CheckCircle className="w-8 h-8 text-cyan-600 mx-auto mb-3" />
                  <p className="font-medium">{platform}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Planos de Implementação
            </h2>
            <p className="text-xl text-gray-600">
              Taxa de instalação (R$ 300,00) + plano mensal
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Básico</CardTitle>
                <CardDescription>Perfeito para começar</CardDescription>
                <div className="text-3xl font-bold text-cyan-600">
                  R$ 115,00<span className="text-lg text-gray-500">/mês</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Aprox 1.000 conversas/mês</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Atendimento simples e eficaz</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Custo acessível para começar</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-red-500" />
                    <span>Não incluso desenvolvimento de site</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-red-500" />
                    <span>Pagamento da instalação a parte</span>
                  </li>
                </ul>
                <Button
                  className="w-full mt-6 bg-gray-300 text-black hover:bg-cyan-700 hover:text-white"
                  asChild
                >
                  <Link href="/contato">Escolher Plano</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-cyan-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-cyan-500">Mais Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Intermediário</CardTitle>
                <CardDescription>Ideal para empresas ativas</CardDescription>
                <div className="text-3xl font-bold text-cyan-600">
                  R$ 254,00<span className="text-lg text-gray-500">/mês</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Aprox 10.000 conversas/mês</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Escalável e bom custo-benefício</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Indicado para negócios com tráfego moderado</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-red-500" />
                    <span>Não incluso desenvolvimento de site</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-red-500" />
                    <span>Pagamento da instalação a parte</span>
                  </li>
                </ul>
                <Button
                  className="w-full mt-6 bg-cyan-600 hover:bg-cyan-700"
                  asChild
                >
                  <Link href="/contato">Escolher Plano</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Profissional</CardTitle>
                <CardDescription>Para máximo desempenho</CardDescription>
                <div className="text-3xl font-bold text-cyan-600">
                  R$ 429,00<span className="text-lg text-gray-500">/mês</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Aprox 20.000 conversas/mês</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Preparado para alto volume</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>
                      Ideal para marketplaces, SaaS, franquias digitais
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-red-500" />
                    <span>Não incluso desenvolvimento de site</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-red-500" />
                    <span>Pagamento da instalação a parte</span>
                  </li>
                </ul>
                <Button
                  className="w-full mt-6 bg-gray-300 text-black hover:bg-cyan-700 hover:text-white"
                  asChild
                >
                  <Link href="/contato">Escolher Plano</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossas Garantias
            </h2>
            <p className="text-xl text-gray-600">
              Garantia total de funcionamento e satisfação
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Clock className="w-8 h-8 text-cyan-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">7 dias de teste gratuito</h3>
                <p className="text-sm text-gray-600">Após implementação</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Headphones className="w-8 h-8 text-cyan-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Suporte técnico</h3>
                <p className="text-sm text-gray-600">Durante todo o período</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <Wrench className="w-8 h-8 text-cyan-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Ajustes ilimitados</h3>
                <p className="text-sm text-gray-600">No primeiro mês</p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="pt-6">
                <CheckCircle className="w-8 h-8 text-cyan-600 mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Uptime 99.9%</h3>
                <p className="text-sm text-gray-600">
                  Garantia de funcionamento
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Tecnologias Utilizadas
            </h2>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {[
              "OpenAI GPT-4",
              "JavaScript Universal",
              "APIs REST",
              "Webhooks",
              "Integração Cross-Platform",
              "Analytics Avançado",
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
            Pronto para Adicionar IA ao seu Site?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Implemente um chatbot inteligente no seu site existente hoje mesmo
          </p>
          <Button
            size="lg"
            className="bg-blue-800 hover:bg-blue-500"
            variant="secondary"
            asChild
          >
            <Link href="/contato">Solicitar Implementação</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
