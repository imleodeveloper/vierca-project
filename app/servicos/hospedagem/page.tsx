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
  Server,
  Shield,
  Globe,
  Gift,
  BarChart3,
  Clock,
} from "lucide-react";
import Link from "next/link";

export default function HospedagemPage() {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-cyan-50 to-blue-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-6xl mb-6">🌐</div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Onde Hospedamos{" "}
              <span className="text-cyan-600">Seus Projetos?</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Infraestrutura segura e confiável. Utilizamos servidores de última
              geração com hospedagem inicial gratuita. Infraestrutura global,
              alta disponibilidade e performance otimizada para seus projetos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-cyan-600 hover:bg-cyan-700"
                asChild
              >
                <Link href="/contato">Solicitar Informações</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#infraestrutura">Nossa Infraestrutura</Link>
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
              Por que nossa hospedagem é diferente?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tecnologia de ponta com hospedagem inicial gratuita
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-2 hover:border-cyan-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <Gift className="w-6 h-6 text-cyan-600" />
                </div>
                <CardTitle>Hospedagem Inicial Gratuita</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Todo projeto inclui hospedagem gratuita sem custos iniciais
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-cyan-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <Server className="w-6 h-6 text-cyan-600" />
                </div>
                <CardTitle>Servidores Seguros</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Infraestrutura de última geração com máxima segurança
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-cyan-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-cyan-600" />
                </div>
                <CardTitle>CDN Global</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Conteúdo distribuído mundialmente para máxima velocidade
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-cyan-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-cyan-600" />
                </div>
                <CardTitle>SSL Gratuito</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Certificado SSL incluído para máxima segurança
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-cyan-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="w-6 h-6 text-cyan-600" />
                </div>
                <CardTitle>Backup Automático</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Seus dados sempre protegidos com backup automático
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 hover:border-cyan-200 transition-colors">
              <CardHeader>
                <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <Clock className="w-6 h-6 text-cyan-600" />
                </div>
                <CardTitle>Uptime 99.9%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Disponibilidade garantida com monitoramento 24/7
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section id="infraestrutura" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nossa Infraestrutura
            </h2>
            <p className="text-xl text-gray-600">
              Tecnologia de ponta para máxima performance
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-6">
                Servidores de Última Geração
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-600" />
                  <span>
                    <strong>Edge Computing:</strong> Processamento próximo aos
                    usuários
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-600" />
                  <span>
                    <strong>CDN Global:</strong> Conteúdo distribuído
                    mundialmente
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-600" />
                  <span>
                    <strong>Auto-scaling:</strong> Recursos que se ajustam
                    automaticamente
                  </span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-cyan-600" />
                  <span>
                    <strong>Serverless Functions:</strong> Execução eficiente de
                    código
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="text-center">
                <div className="text-4xl mb-4">🔒</div>
                <h4 className="text-xl font-semibold mb-4">
                  Segurança Avançada
                </h4>
                <ul className="text-left space-y-2">
                  <li>• SSL/TLS gratuito</li>
                  <li>• Proteção DDoS</li>
                  <li>• Firewall inteligente</li>
                  <li>• Monitoramento 24/7</li>
                </ul>
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
              Benefícios da Nossa Hospedagem
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🆓</div>
              <h3 className="text-xl font-semibold mb-2">
                Hospedagem Gratuita
              </h3>
              <p className="text-gray-600">Sem custos iniciais de hospedagem</p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">🔒</div>
              <h3 className="text-xl font-semibold mb-2">Máxima Segurança</h3>
              <p className="text-gray-600">Proteção avançada contra ameaças</p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Performance Global</h3>
              <p className="text-gray-600">
                Velocidade otimizada em qualquer lugar
              </p>
            </div>

            <div className="text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-semibold mb-2">Escalabilidade</h3>
              <p className="text-gray-600">Cresce conforme sua demanda</p>
            </div>
          </div>
        </div>
      </section>

      {/* Free Hosting Details */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Hospedagem Gratuita Inicial
            </h2>
            <p className="text-xl text-gray-600">Todo projeto VierCa inclui</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-cyan-200">
              <CardHeader>
                <CardTitle className="text-2xl text-center">
                  O que está incluído gratuitamente
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Largura de banda generosa</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Armazenamento suficiente</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Domínio personalizado por 1 ano gratuito</span>
                    </li>
                  </ul>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Certificado SSL</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>Suporte técnico</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* When Upgrade Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quando é Necessário Upgrade?
            </h2>
            <p className="text-xl text-gray-600">
              A hospedagem gratuita atende a maioria dos projetos
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-cyan-600">
                  Alto Tráfego
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Mais de 50.000 visitantes únicos/mês</li>
                  <li>• Picos de tráfego frequentes</li>
                  <li>• Campanhas de marketing intensivas</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-cyan-600">
                  Recursos Avançados
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Processamento intensivo de dados</li>
                  <li>• Múltiplas aplicações</li>
                  <li>• Integrações complexas</li>
                  <li>• Banco de dados grande</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-cyan-600">
                  Necessidades Específicas
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li>• Compliance específico</li>
                  <li>• Backup personalizado</li>
                  <li>• Suporte dedicado</li>
                  <li>• SLA customizado</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Paid Plans Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Planos de Hospedagem Paga
            </h2>
            <p className="text-xl text-gray-600">
              Quando necessário, oferecemos planos escaláveis
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Básico</CardTitle>
                <CardDescription>
                  Para sites com tráfego moderado
                </CardDescription>
                <div className="text-3xl font-bold text-cyan-600">
                  R$ 49,00<span className="text-lg text-gray-500">/mês</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>100GB de armazenamento</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Backup diário</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>100% gerenciado pela VierCa</span>
                  </li>
                </ul>
                <Button
                  className="w-full mt-6 bg-gray-300 hover:bg-gray-600 hover:text-white"
                  asChild
                >
                  <Link href="/contato">Contratar</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-cyan-500 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-cyan-500">Mais Popular</Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">Profissional</CardTitle>
                <CardDescription>Para empresas em crescimento</CardDescription>
                <div className="text-3xl font-bold text-cyan-600">
                  R$ 99,00<span className="text-lg text-gray-500">/mês</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>500GB de armazenamento</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Backup em tempo real</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>100% gerenciado pela VierCa</span>
                  </li>
                </ul>
                <Button
                  className="w-full mt-6 bg-cyan-600 hover:bg-cyan-700 text-white"
                  asChild
                >
                  <Link href="/contato">Contratar</Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <CardDescription>Para grandes empresas</CardDescription>
                <div className="text-3xl font-bold text-cyan-600">
                  R$ 199,00<span className="text-lg text-gray-500">/mês</span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>1TB de armazenamento</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>Backup customizado</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span>100% gerenciado pela VierCa</span>
                  </li>
                </ul>
                <Button
                  className="w-full mt-6 bg-gray-300 hover:bg-gray-600 hover:text-white"
                  asChild
                >
                  <Link href="/contato">Contratar</Link>
                </Button>
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
              "Edge Computing",
              "Global CDN",
              "Serverless Functions",
              "Auto-scaling",
              "SSL/TLS",
              "DDoS Protection",
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
            Pronto para Hospedar seu Projeto?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Comece com hospedagem gratuita e escale conforme necessário
          </p>
          <Button
            size="lg"
            variant="secondary"
            asChild
            className="bg-blue-500 hover:bg-blue-800"
          >
            <Link href="/contato">Falar com Especialista</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
