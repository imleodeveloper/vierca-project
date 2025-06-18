import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  CheckCircle,
  Globe,
  Zap,
  DollarSign,
  Palette,
  Smartphone,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

export default function SitesWordpressPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-cyan-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">🌐</div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Sites em <span className="text-blue-600">WordPress</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Soluções rápidas e eficientes. Embora nosso foco principal seja
              desenvolvimento customizado, oferecemos soluções WordPress para
              projetos que precisam ir ao ar rapidamente com excelente
              custo-benefício.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white"
                asChild
              >
                <Link href="/contato">Solicitar Orçamento</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="hover:bg-blue-700 hover:text-white"
              >
                <Link href="#quando-escolher">Quando Escolher</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12 bg-yellow-50 border-y border-yellow-200">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-3xl mb-4">⚠️</div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Nossa Especialidade é Desenvolvimento Customizado
            </h2>
            <p className="text-lg text-gray-700">
              Trabalhamos principalmente com{" "}
              <strong>React, Next.js e Node.js</strong> para criar soluções
              únicas e escaláveis. WordPress é oferecido como alternativa para
              projetos com necessidades específicas de prazo e orçamento.
            </p>
          </div>
        </div>
      </section>

      {/* When to Choose WordPress */}
      <section id="quando-escolher" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quando Escolher WordPress
            </h2>
            <p className="text-xl text-gray-600">
              WordPress é uma excelente opção para
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Projetos com Prazo Apertado</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Precisa do site no ar rapidamente sem comprometer a qualidade
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <DollarSign className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Orçamento Limitado</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Quer uma solução profissional com investimento menor
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Gestão Interna</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Sua equipe precisa atualizar conteúdo facilmente
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Blogs e Portais</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Sites focados em conteúdo e SEO</p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>E-commerce Simples</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Lojas virtuais com WooCommerce</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossa Abordagem WordPress
            </h2>
            <p className="text-xl text-gray-600">
              Mantemos nossos padrões de qualidade mesmo com WordPress
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Palette className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Temas Customizados</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Nunca usamos templates genéricos, sempre personalizados
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Otimização de Performance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Sites rápidos e otimizados para melhor experiência
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>SEO Técnico</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Configuração completa para mecanismos de busca
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Segurança Reforçada</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Plugins e configurações de segurança avançadas
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Backup Automático</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Seus dados sempre protegidos automaticamente
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-blue-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle>Design Responsivo</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Perfeito em todos os dispositivos e tamanhos
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
              Diferencial VierCa
            </h2>
            <p className="text-xl text-gray-600">
              O que nos diferencia no desenvolvimento WordPress
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">
                Desenvolvimento Ágil
              </h3>
              <p className="text-gray-600">Sites prontos em 7-15 dias úteis</p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-2">Custo-Benefício</h3>
              <p className="text-gray-600">
                Solução econômica sem perder qualidade
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-semibold mb-2">
                Design Profissional
              </h3>
              <p className="text-gray-600">Layouts modernos e responsivos</p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-2">
                Fácil Gerenciamento
              </h3>
              <p className="text-gray-600">
                Interface intuitiva para atualizações
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nosso Processo
            </h2>
            <p className="text-xl text-gray-600">Do briefing à entrega</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Briefing Detalhado
                  </h3>
                  <p className="text-gray-600">
                    Entendemos suas necessidades e objetivos do projeto
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Design e Estrutura
                  </h3>
                  <p className="text-gray-600">
                    Criamos o layout e definimos a arquitetura do site
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Desenvolvimento
                  </h3>
                  <p className="text-gray-600">
                    Construímos o site com as melhores práticas WordPress
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Testes e Entrega
                  </h3>
                  <p className="text-gray-600">
                    Testamos tudo e entregamos com treinamento incluído
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Migration Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Migração para Desenvolvimento Customizado
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Começou com WordPress mas precisa de mais flexibilidade?
              Oferecemos migração para desenvolvimento customizado
            </p>

            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-4">
                  Como funciona a migração:
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span>Análise do site atual</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span>Planejamento da migração</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span>Desenvolvimento da nova versão</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span>Migração sem perda de dados ou SEO</span>
                  </li>
                </ul>
              </div>

              <Card className="border-2 border-blue-200 bg-blue-50">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <ArrowRight className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                    <h4 className="text-xl font-semibold mb-2">
                      Evolua seu Site
                    </h4>
                    <p className="text-gray-600">
                      Transforme seu WordPress em uma aplicação moderna com
                      React e Next.js
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Suporte e Manutenção
            </h2>
            <p className="text-xl text-gray-600">
              Todo site WordPress da VierCa inclui
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Atualizações de segurança",
              "Backup semanal automático",
              "Monitoramento de uptime",
              "Suporte técnico por 30 dias",
              "Treinamento para gestão do conteúdo",
            ].map((feature) => (
              <Card key={feature} className="text-center">
                <CardContent className="pt-6">
                  <CheckCircle className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                  <p className="font-medium">{feature}</p>
                </CardContent>
              </Card>
            ))}
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
              "WordPress CMS",
              "PHP/MySQL",
              "Custom Themes",
              "Plugin Development",
              "WooCommerce",
              "Elementor Pro",
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
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-100 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Precisa de um Site WordPress Profissional?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-[#022041]">
            Criamos sites WordPress de qualidade com nossos padrões de
            excelência
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="text-black bg-white hover:text-white hover:bg-gray-600"
            >
              <Link href="/contato">Solicitar Orçamento WordPress</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-blue-600 border-white text-white hover:bg-blue-800"
              asChild
            >
              <Link href="/servicos">Ver Desenvolvimento Customizado</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
