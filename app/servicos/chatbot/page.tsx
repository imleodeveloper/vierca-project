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
import { CheckCircle, Bot, Zap, Target, BarChart3 } from "lucide-react";
import Link from "next/link";

export default function ChatbotPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">🤖</div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Chatbot com{" "}
              <span className="text-blue-600">Inteligência Artificial</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Revolucione seu atendimento com IA avançada. Transforme a
              experiência dos seus clientes com chatbots inteligentes que
              funcionam 24/7, aumentam conversões e reduzem custos operacionais.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-900 text-white"
                asChild
              >
                <Link
                  href="https://wa.me/5511967381402"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solicitar Orçamento
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="hover:bg-[#1e90ff] hover:text-white"
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
              Por que escolher nosso Chatbot para site?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tecnologia de ponta com implementação completa por nossa conta
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Instalação 100% por nossa conta</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Cuidamos de toda a implementação e configuração do seu chatbot
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Bot className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Integração com API OpenAI</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Utilizamos a mesma tecnologia do ChatGPT para respostas
                  inteligentes
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Suporte Multiplataforma</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  WordPress, Nuvemshop, Shopify e outras plataformas
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Respostas Contextuais</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  IA treinada especificamente com informações do seu negócio
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Aprendizado Contínuo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  O chatbot melhora suas respostas com cada interação
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Relatórios Detalhados</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Acompanhe todas as conversas e métricas de performance
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Benefícios para seu Negócio
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🕒</div>
              <h3 className="text-xl font-semibold mb-2">Atendimento 24/7</h3>
              <p className="text-gray-600">
                Seus clientes recebem suporte a qualquer hora do dia
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-2">Redução de Custos</h3>
              <p className="text-gray-600">
                Automatize respostas frequentes e libere sua equipe
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-2">
                Aumento de Conversões
              </h3>
              <p className="text-gray-600">
                Guie visitantes através do funil de vendas
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-semibold mb-2">Respostas Precisas</h3>
              <p className="text-gray-600">
                IA treinada especificamente para seu negócio
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="como-funciona" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Como Funciona
            </h2>
            <p className="text-xl text-gray-600">
              Processo simples e eficiente
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Análise do Negócio
                  </h3>
                  <p className="text-gray-600">
                    Estudamos seu negócio e definimos os objetivos do chatbot
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Desenvolvimento
                  </h3>
                  <p className="text-gray-600">
                    Criamos e treinamos o chatbot com conhecimento específico da
                    sua empresa
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Integração</h3>
                  <p className="text-gray-600">
                    Instalamos o chatbot em sua plataforma de forma seamless
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Testes e Otimização
                  </h3>
                  <p className="text-gray-600">
                    Realizamos testes extensivos e otimizamos as respostas
                  </p>
                </div>
              </div>
            </div>
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
              "OpenAI GPT",
              "JavaScript/Node.js",
              "Webhooks",
              "APIs REST",
              "Machine Learning",
              "Processamento de Linguagem Natural",
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

      {/* Pricing Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Planos de Chatbot Anual
            </h2>
            <p className="text-xl text-gray-600">
              Escolha o plano ideal para seu negócio
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Básico</CardTitle>
                <CardDescription>Ideal para pequenos negócios</CardDescription>
                <div className="text-3xl font-bold text-blue-600">
                  R$ 91,58<span className="text-lg text-gray-500">/mês</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Aprox. 12.000 conversas no ano</span>
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
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Incluso desenvolvimento de site</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Incluso instalação chatbot</span>
                  </li>
                </ul>
                <Button
                  className="w-full mt-6 bg-gray-300 text-black hover:bg-blue-600 hover:text-white"
                  asChild
                >
                  <Link href="/contato">Escolher Plano</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-blue-500">Mais Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Intermediário</CardTitle>
                <CardDescription>Para empresas em crescimento</CardDescription>
                <div className="text-3xl font-bold text-blue-600">
                  R$ 214,00<span className="text-lg text-gray-500">/mês</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Aprox 120.000 conversas no ano</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Escalável e bom custo-benefício</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Negócios com tráfego moderado</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Incluso site e instalação de chatbot</span>
                  </li>
                </ul>
                <Button
                  className="w-full mt-6 bg-blue-600 hover:bg-blue-900 text-white"
                  asChild
                >
                  <Link href="/contato">Escolher Plano</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Profissional</CardTitle>
                <CardDescription>Para grandes empresas</CardDescription>
                <div className="text-3xl font-bold text-blue-600">
                  R$ 379,00<span className="text-lg text-gray-500">/mês</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Aproximadamente 240.000 conversas no ano</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Estável, eficiente e preparado para alto volume</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>
                      Ideal para marketplaces, SaaS, franquias digitais
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>
                      Incluso desenvolvimento de site e instalação chatbot
                    </span>
                  </li>
                </ul>
                <Button
                  className="w-full mt-6 bg-gray-300 text-black hover:bg-blue-600 hover:text-white"
                  asChild
                >
                  <Link href="/contato">Escolher Plano</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Pronto para Revolucionar seu Atendimento?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Implemente um chatbot inteligente hoje mesmo e veja seus resultados
            melhorarem
          </p>
          <Button
            size="lg"
            className="bg-gray-300 text-black hover:bg-blue-800 hover:text-white"
            variant="secondary"
            asChild
          >
            <Link href="/contato">Solicitar Demonstração</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
