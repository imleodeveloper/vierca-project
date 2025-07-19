"use client";

import type React from "react";

import { useState } from "react";
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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import {
  Mail,
  Phone,
  MessageCircle,
  Send,
  CheckCircle,
  Clock,
  Users,
} from "lucide-react";
import emailjs from "@emailjs/browser";

export default function ContatoPage() {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const { toast } = useToast();

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Configuração do EmailJS - substitua pelas suas chaves
      const serviceId =
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID";
      const templateId =
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID";
      const publicKey =
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY";

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        phone: formData.phone,
        company: formData.company,
        service: formData.service,
        budget: formData.budget,
        message: formData.message,
        to_email: "viercatech@gmail.com",
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em breve. Obrigado pelo interesse!",
      });

      // Limpar formulário
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        budget: "",
        message: "",
      });
    } catch (error) {
      console.error("Erro ao enviar email:", error);
      toast({
        title: "Erro ao enviar mensagem",
        description:
          "Tente novamente ou entre em contato diretamente pelo WhatsApp.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const whatsappUrl = `https://wa.me/5511967381402?text=Olá! Gostaria de saber mais sobre os serviços da VierCa.`;

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Entre em <span className="text-blue-600">Contato</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Pronto para transformar sua ideia em realidade? Nossa equipe está
              aqui para ajudar você a escolher a melhor solução para seu
              negócio.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Solicite um Orçamento
                  </CardTitle>
                  <CardDescription>
                    Preencha o formulário abaixo e entraremos em contato em até
                    24 horas
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Nome Completo *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Seu nome completo"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">E-mail *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="seu@email.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefone/WhatsApp</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="(11) 99999-9999"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company">Empresa</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Nome da sua empresa"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="service">Serviço de Interesse</Label>
                        <Select
                          onValueChange={(value) =>
                            handleSelectChange("service", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Selecione um serviço" />
                          </SelectTrigger>
                          <SelectContent className="bg-white">
                            <SelectItem
                              value="chatbot"
                              className="bg-white hover:bg-gray-800"
                            >
                              Chatbot com IA
                            </SelectItem>
                            <SelectItem value="ecommerce">
                              E-Commerce
                            </SelectItem>
                            <SelectItem value="landing-page">
                              Landing Page
                            </SelectItem>
                            <SelectItem value="site-customizado">
                              Site Customizado
                            </SelectItem>
                            <SelectItem value="wordpress">
                              Site WordPress
                            </SelectItem>
                            <SelectItem value="implementacao-chatbot">
                              Implementação de Chatbot
                            </SelectItem>
                            <SelectItem value="consultoria">
                              Consultoria
                            </SelectItem>
                            <SelectItem value="reembolso">Reembolso</SelectItem>
                            <SelectItem value="outro">Outro</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="budget">Orçamento Estimado</Label>
                        <Select
                          onValueChange={(value) =>
                            handleSelectChange("budget", value)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Faixa de investimento" />
                          </SelectTrigger>
                          <SelectContent className="bg-white">
                            <SelectItem value="ate-5k">Até R$ 5.000</SelectItem>
                            <SelectItem value="5k-15k">
                              R$ 5.000 - R$ 15.000
                            </SelectItem>
                            <SelectItem value="15k-30k">
                              R$ 15.000 - R$ 30.000
                            </SelectItem>
                            <SelectItem value="30k-50k">
                              R$ 30.000 - R$ 50.000
                            </SelectItem>
                            <SelectItem value="acima-50k">
                              Acima de R$ 50.000
                            </SelectItem>
                            <SelectItem value="nao-definido">
                              Ainda não definido
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Mensagem *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Conte-nos mais sobre seu projeto, objetivos e necessidades específicas..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-[#1e90ff] text-white hover:bg-blue-900"
                      size="lg"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Enviar Mensagem
                        </>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Fale Conosco
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Estamos prontos para transformar suas ideias em soluções
                  digitais inovadoras. Entre em contato e vamos conversar sobre
                  seu projeto!
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                <Card className="border-2 hover:border-green-200 transition-colors">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                        <MessageCircle className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">WhatsApp</h3>
                        <p className="text-gray-600 mb-3">
                          Resposta mais rápida
                        </p>
                        <Button
                          asChild
                          className="bg-green-600 hover:bg-green-700"
                        >
                          <a
                            href={whatsappUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <MessageCircle className="w-4 h-4 mr-2" />
                            (11) 96738-1402
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-blue-200 transition-colors">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Phone className="w-6 h-6 text-blue-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">Telefone</h3>
                        <p className="text-gray-600 mb-3">Ligações e SMS</p>
                        <Button variant="outline" asChild>
                          <a href="tel:+5511967381402">
                            <Phone className="w-4 h-4 mr-2" />
                            (11) 96738-1402
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-2 hover:border-purple-200 transition-colors">
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Mail className="w-6 h-6 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg">E-mail</h3>
                        <p className="text-gray-600 mb-3">
                          Para propostas detalhadas
                        </p>
                        <Button variant="outline" asChild>
                          <a href="mailto:viercatech@gmail.com">
                            <Mail className="w-4 h-4 mr-2" />
                            viercatech@gmail.com
                          </a>
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Response Time */}
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <Clock className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <h3 className="font-semibold text-lg mb-2">
                      Tempo de Resposta
                    </h3>
                    <p className="text-gray-600">
                      <strong>WhatsApp:</strong> Até 2 horas
                      <br />
                      <strong>E-mail:</strong> Até 24 horas
                      <br />
                      <strong>Formulário:</strong> Até 24 horas
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que escolher a VierCa?
            </h2>
            <p className="text-xl text-gray-600">
              Mais de 100 projetos entregues com excelência
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Qualidade Garantida
              </h3>
              <p className="text-gray-600">
                Código limpo, design moderno e performance otimizada
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Entrega no Prazo</h3>
              <p className="text-gray-600">
                Cumprimos rigorosamente os prazos acordados
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Suporte Contínuo</h3>
              <p className="text-gray-600">
                Acompanhamento e suporte após a entrega
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Qual o prazo médio de entrega?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Varia conforme o projeto: Landing Pages (2 dias), Sites
                  WordPress (7-15 dias), E-commerce e Sites Customizados (15-30
                  dias), Chatbots (5-7 dias).
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Vocês oferecem suporte pós-entrega?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Sim! Todos os projetos incluem suporte técnico por 30 dias.
                  Também oferecemos planos de manutenção mensais para
                  atualizações e melhorias contínuas.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Como funciona o processo de pagamento?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Trabalhamos com 50% no início do projeto e 50% na entrega.
                  Para projetos maiores, podemos dividir em mais parcelas
                  conforme as etapas de desenvolvimento.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>
                  Vocês trabalham com clientes de outras cidades/estados?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Sim! Atendemos clientes em todo o Brasil. Todo nosso processo
                  é digital, com reuniões online e comunicação via WhatsApp,
                  e-mail e videoconferência.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
