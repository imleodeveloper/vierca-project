"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Check, Info, Shield, CreditCard, AlertTriangle } from "lucide-react";
import { toast } from "@/hooks/use-toast";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: true,
    },
  }
);

interface Plan {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  description: string;
  features: string[];
  category: "chatbot" | "site";
  period?: "monthly" | "annual" | "one-time";
  popular?: boolean;
  benefits: string | null;
  warning?: string | null;
  installChatbot?: number;
  additionalMonthlyFee?: number;
}

const plans: Plan[] = [
  {
    id: "chatbot-mensal-basic",
    name: "Chatbot Mensal Básico",
    price: 115.0,
    description: "Chatbot com IA para seu site - pagamento mensal",
    features: [
      "Aproximadamente 1.000 conversas no mês",
      "Custo acessível para começar",
      "Incluso suporte técnico",
      "Instalação 100% por nossa conta",
    ],
    category: "chatbot",
    period: "monthly",
    benefits: null,
    installChatbot: 300.0,
    warning:
      "Atenção: A contratação deste plano não inclui a instalação do chatbot. A instalação deve ser adquirida separadamente por um pagamento único de R$ 300,00.",
  },
  {
    id: "chatbot-mensal-intermediate",
    name: "Chatbot Mensal Intermediário",
    price: 254.0,
    description: "Chatbot com IA para seu site - pagamento mensal",
    features: [
      "Aproximadamente 10.000 conversas no mês",
      "Custo acessível para começar",
      "Instalação 100% por nossa conta",
      "Incluso suporte técnico",
    ],
    category: "chatbot",
    period: "monthly",
    popular: true,
    benefits: "A contratação deste plano inclui a instalação do chatbot.",
    installChatbot: 0,
    warning: null,
  },
  {
    id: "chatbot-mensal-profissional",
    name: "Chatbot Mensal Profissional",
    price: 429.0,
    description: "Chatbot com IA para seu site - pagamento mensal",
    features: [
      "Aproximadamente 20.000 conversas no mês",
      "Custo acessível para começar",
      "Instalação 100% por nossa conta",
      "Incluso suporte técnico",
    ],
    category: "chatbot",
    period: "monthly",
    installChatbot: 0,
    benefits: "A contratação deste plano inclui a instalação do chatbot.",
    warning: null,
  },

  {
    id: "chatbot-anual-basic",
    name: "Chatbot Anual Básico",
    price: 91.58,
    originalPrice: 115.0,
    description: "Chatbot com IA e site incluso - pagamento anual",
    features: [
      "Aproximadamente 12.000 conversas por ano",
      "Custo acessível para começar",
      "Ideal para sites pessoais e pequenos negócios",
      "Incluso desenvolvimento de site",
      "Incluso domínio 01 ano gratuito",
      "Incluso instalação de chatbot",
      "Incluso suporte técnico",
    ],
    category: "chatbot",
    period: "annual",
    popular: false,
    benefits:
      "Neste plano você tem incluso: Desenvolvimento de site, instalação do chatbot, domínio gratuíto por 1 ano e suporte técnico",
  },
  {
    id: "chatbot-anual-intermediate",
    name: "Chatbot Anual Intermediário",
    price: 214.0,
    originalPrice: 254.0,
    description: "Chatbot com IA e site incluso - pagamento anual",
    features: [
      "Aproximadamente 120.000 conversas por ano",
      "Escalável e com bom custo-benefício",
      "Indicado para ecommerces, consultórios, prestadores de serviço",
      "Incluso desenvolvimento de site",
      "Incluso domínio 01 ano gratuito",
      "Incluso instalação de chatbot",
      "Incluso suporte técnico",
    ],
    category: "chatbot",
    period: "annual",
    popular: true,
    benefits:
      "Neste plano você tem incluso: Desenvolvimento de site, instalação do chatbot, domínio gratuíto por 1 ano e suporte técnico",
  },
  {
    id: "chatbot-anual-profissional",
    name: "Chatbot Anual Profissional",
    price: 379.0,
    originalPrice: 429.0,
    description: "Chatbot com IA e site incluso - pagamento anual",
    features: [
      "Aproximadamente 240.000 conversas por ano",
      "Estável, eficiente e preparado para alto volume",
      "Ideal para marketplaces, SaaS, franquias digitais",
      "Incluso desenvolvimento de site",
      "Incluso domínio 01 ano gratuito",
      "Incluso instalação de chatbot",
      "Incluso suporte técnico",
    ],
    category: "chatbot",
    period: "annual",
    popular: false,
    benefits:
      "Neste plano você tem incluso: Desenvolvimento de site, instalação do chatbot, domínio gratuíto por 1 ano e suporte técnico",
  },

  {
    id: "starter-chatbot",
    name: "Starter Chatbot - Site com Chatbot",
    price: 1200.0,
    description: "Landing Page e chatbot integrado",
    features: [
      "Site responsivo com até 7 seções",
      "Chatbot com respostas automáticas",
      "Atendimento 24/7 em seu site",
      "Aprox. 1.000 conversas mensais",
      "Suporte técnico",
      "Domínio gratuito por 01 ano",
    ],
    category: "chatbot",
    period: "one-time",
    popular: false,
    benefits: "O primeiro mês de uso do chatbot é totalmente gratuito.",
    warning:
      "Este plano acompanha o pacote mensal para o funcionamento do chatbot: R$ 115,00/mês",
    additionalMonthlyFee: 115.0,
  },
  {
    id: "pro-chatbot",
    name: "Pro Chatbot - Site com Chatbot",
    price: 2500.0,
    description: "Landing Page e chatbot integrado",
    features: [
      "Site responsivo com até 10 páginas",
      "Chatbot com respostas automáticas",
      "Atendimento 24/7 em seu site",
      "Aprox. 10.000 conversas mensais",
      "Suporte técnico",
      "Domínio gratuito por 01 ano",
    ],
    category: "chatbot",
    period: "one-time",
    popular: true,
    benefits: "O primeiro mês de uso do chatbot é totalmente gratuito.",
    warning:
      "Este plano acompanha o pacote mensal para o funcionamento do chatbot: R$ 254,00/mês",
    additionalMonthlyFee: 254.0,
  },
  {
    id: "business-chatbot",
    name: "Business Chatbot - Site com Chatbot",
    price: 4500.0,
    description: "Landing Page e chatbot integrado",
    features: [
      "Site ilimitado com design personalizado",
      "Chatbot com respostas automáticas",
      "Integração com múltiplos sistemas",
      "Painel administrativo avançado",
      "Aprox. 20.000 conversas mensais",
      "Domínio gratuito por 01 ano",
      "Atendimento 24/7 em seu site",
    ],
    category: "chatbot",
    period: "one-time",
    popular: true,
    benefits: "O primeiro mês de uso do chatbot é totalmente gratuito.",
    warning:
      "Este plano acompanha o pacote mensal para o funcionamento do chatbot: R$ 429,00/mês",
    additionalMonthlyFee: 429.0,
  },
  {
    id: "landing-page-simples",
    name: "Landing Page Simples",
    price: 600.0,
    description: "Página de vendas otimizada focada em conversão ",
    features: [
      "Design responsivo",
      "Otimização para conversão",
      "7 seções estratégicas",
      "Integração com formulários",
      "Suporte gratuito por 1 mês após término do site",
      "Domínio gratuito por 01 ano",
    ],
    category: "site",
    period: "one-time",
    benefits: null,
  },
  {
    id: "landing-page-premium",
    name: "Landing Page Premium",
    price: 1200.0,
    description: "Página de conversão otimizada",
    features: [
      "Design premium personalizado e responsivo",
      "Otimização para anúncios pagos",
      "Integração com formulários",
      "Integração com WhatsApp",
      "Suporte gratuito por 1 mês após término do site",
      "Domínio gratuito por 01 ano",
    ],
    category: "site",
    period: "one-time",
    benefits: null,
    popular: true,
  },
  {
    id: "landing-page-complete",
    name: "Landing Page Completa",
    price: 2500.0,
    description: "Página de conversão otimizada",
    features: [
      "Múltiplas páginas de vendas",
      "Sistema de pagamento integrado",
      "Automação completa de vendas",
      "Domínio gratuito por 01 ano",
    ],
    category: "site",
    period: "one-time",
    benefits: "O primeiro mês de uso do site e sistema é totalmente gratuito.",
    warning:
      "Este plano acompanha o pacote mensal para o funcionamento do sistema integrado: R$ 130,00/mês",
    additionalMonthlyFee: 130.0,
  },
  {
    id: "site-institucional-basic",
    name: "Site Institucional Básico",
    price: 800.0,
    description: "Site completo para sua empresa",
    features: [
      "Até 10 páginas",
      "Design responsivo",
      "SEO otimizado",
      "Formulário de contato",
      "Suporte 1 mês após finalização",
      "Domínio gratuito por 01 ano",
    ],
    category: "site",
    period: "one-time",
    popular: false,
    benefits: null,
  },
  {
    id: "site-institucional-premium",
    name: "Site Institucional Premium",
    price: 1500.0,
    description: "Site completo para sua empresa",
    features: [
      "Até 15 páginas + blog",
      "Design personalizado exclusivo",
      "SEO otimizado",
      "Formulário de contato",
      "Suporte 1 mês após finalização",
      "Domínio gratuito por 01 ano",
    ],
    category: "site",
    period: "one-time",
    popular: true,
    benefits: null,
  },
  {
    id: "site-institucional-corporativo",
    name: "Corporativo",
    price: 3000.0,
    description: "Site completo para sua empresa",
    features: [
      "Portal multi-idioma",
      "Sistema de gestão de conteúdo",
      "Integração com sistemas internos",
      "Área do colaborador",
      "Suporte técnico dedicado",
      "Domínio gratuito por 01 ano",
    ],
    category: "site",
    period: "one-time",
    popular: false,
    benefits: "O primeiro mês de uso do site e sistema é totalmente gratuito.",
    warning:
      "Este plano acompanha o pacote mensal para o funcionamento do site e sistema integrado: R$ 130,00/mês",
    additionalMonthlyFee: 130.0,
  },
  {
    id: "ecommerce-basic",
    name: "Loja Básica - E-commerce",
    price: 1600.0,
    description: "Loja virtual completa",
    features: [
      "Catálogo de produtos",
      "Carrinho de compras",
      "Integração com pagamentos",
      "Painel administrativo",
      "SEO otimizado",
      "Hospedagem inicial gratuita",
    ],
    category: "site",
    period: "one-time",
    benefits: "O primeiro mês de uso do site e sistema é totalmente gratuito.",
    warning:
      "Este plano acompanha o pacote mensal para o funcionamento do site e sistema integrado: R$ 130,00/mês",
    additionalMonthlyFee: 130.0,
  },
  {
    id: "ecommerce-pro",
    name: "Loja Profissional - E-commerce",
    price: 3200.0,
    description: "Loja virtual completa",
    features: [
      "Produtos ilimitados",
      "Múltiplas formas de pagamento",
      "Sistema de cupons e promoções",
      "Gestão de estoque avançada",
      "Relatórios de vendas",
    ],
    category: "site",
    period: "one-time",
    benefits: "O primeiro mês de uso do site e sistema é totalmente gratuito.",
    warning:
      "Este plano acompanha o pacote mensal para o funcionamento do site e sistema integrado: R$ 130,00/mês",
    additionalMonthlyFee: 130.0,
  },
  {
    id: "ecommerce-marketplace",
    name: "Marketplace - E-commerce",
    price: 6500.0,
    description: "Plataforma de vendas multi-vendor",
    features: [
      "Sistema multi-vendor",
      "Comissões automáticas",
      "Painel para vendedores",
      "Sistema de avaliações",
      "Logística integrada",
      "Suporte empresarial",
    ],
    category: "site",
    period: "one-time",
    benefits: "O primeiro mês de uso do site e sistema é totalmente gratuito.",
    warning:
      "Este plano acompanha o pacote mensal para o funcionamento do site e sistema integrado: R$ 500,00/mês",
    additionalMonthlyFee: 500.0,
  },
];

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const planId = searchParams.get("plan");

  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [period, setPeriod] = useState<string>("12");
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [customerData, setCustomerData] = useState({
    name: "",
    email: "",
    phone: "",
    document: "",
  });

  // Verificar autenticação de forma mais simples
  useEffect(() => {
    const checkAuth = async () => {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession();

        if (!session) {
          // Redirecionar para login apenas se não estiver autenticado
          const currentUrl = window.location.pathname + window.location.search;
          router.push(`/login?redirect=${encodeURIComponent(currentUrl)}`);
          return;
        }

        setIsAuthenticated(true);

        // Preencher dados do usuário se disponível
        if (session.user) {
          setCustomerData((prev) => ({
            ...prev,
            email: session.user.email || "",
            name: session.user.user_metadata?.full_name || "",
            phone: session.user.user_metadata?.phone || "",
          }));
        }
      } catch (error) {
        console.error("Erro ao verificar autenticação:", error);
        // Em caso de erro, permitir acesso mas mostrar aviso
        setIsAuthenticated(true);
      } finally {
        setIsCheckingAuth(false);
      }
    };

    checkAuth();
  }, [router]);

  useEffect(() => {
    if (planId) {
      const plan = plans.find((p) => p.id === planId);
      if (plan) {
        setSelectedPlan(plan);
      }
    }
  }, [planId]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  const calculateTotal = () => {
    if (!selectedPlan) return 0;

    let total = selectedPlan.price;

    if (selectedPlan.period === "annual") {
      const months = Number.parseInt(period);
      total = selectedPlan.price * months;
    }

    // Adicionar taxa de instalação se aplicável
    if (selectedPlan.installChatbot && selectedPlan.installChatbot > 0) {
      total += selectedPlan.installChatbot;
    }

    if (discount > 0) {
      total = total * (1 - discount / 100);
    }

    return total;
  };

  const calculateSavings = () => {
    if (!selectedPlan || !selectedPlan.originalPrice) return 0;

    if (selectedPlan.period === "annual") {
      const months = Number.parseInt(period);
      const originalTotal = selectedPlan.originalPrice * months;
      const currentTotal = selectedPlan.price * months;
      return originalTotal - currentTotal;
    }

    return 0;
  };

  const applyCoupon = () => {
    // Simulação de cupons de desconto
    const coupons: { [key: string]: number } = {
      DESCONTO10: 10,
      PRIMEIRA20: 20,
      VIERCA15: 15,
    };

    if (coupons[couponCode.toUpperCase()]) {
      setDiscount(coupons[couponCode.toUpperCase()]);
      toast({
        title: "Cupom aplicado!",
        description: `Desconto de ${
          coupons[couponCode.toUpperCase()]
        }% aplicado.`,
      });
    } else {
      toast({
        title: "Cupom inválido",
        description: "O cupom informado não é válido.",
        variant: "destructive",
      });
    }
  };

  const handleCheckout = async () => {
    if (!selectedPlan) return;

    setIsProcessing(true);

    try {
      const response = await fetch("/api/checkout/create-preference", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          plan: selectedPlan,
          period: period,
          customer: customerData,
          discount: discount,
          total: calculateTotal(),
        }),
      });

      const data = await response.json();

      if (data.init_point) {
        // Redirecionar para o Mercado Pago
        window.location.href = data.init_point;
      } else {
        throw new Error("Erro ao criar preferência de pagamento");
      }
    } catch (error) {
      console.error("Erro no checkout:", error);
      toast({
        title: "Erro no pagamento",
        description:
          "Ocorreu um erro ao processar o pagamento. Tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
  };

  // Loading state durante verificação de autenticação
  if (isCheckingAuth) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1e90ff] mx-auto mb-4"></div>
            <p className="text-gray-600">Carregando...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!selectedPlan) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-[#022041] mb-4">
              Plano não encontrado
            </h1>
            <p className="text-gray-600">
              O plano selecionado não foi encontrado. Volte e selecione um plano
              válido.
            </p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-[#022041] mb-8">
            Seu carrinho
          </h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Carrinho - Lado Esquerdo */}
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-[#022041]">
                    {selectedPlan.name}
                    {selectedPlan.popular && (
                      <Badge className="ml-2 bg-[#1e90ff] text-white">
                        Mais Popular
                      </Badge>
                    )}
                  </CardTitle>
                  <p className="text-gray-600">{selectedPlan.description}</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Seletor de Período para planos anuais */}
                  {selectedPlan.period === "annual" && (
                    <div>
                      <Label htmlFor="period">Período</Label>
                      <Select value={period} onValueChange={setPeriod}>
                        <SelectTrigger className="w-full">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-[#fff]">
                          <SelectItem value="12">12 meses</SelectItem>
                          <SelectItem
                            value="24"
                            className="pointer-events-none text-gray-300"
                          >
                            24 meses (Não disponível ainda)
                          </SelectItem>
                          <SelectItem
                            value="36"
                            className="pointer-events-none text-gray-300"
                          >
                            36 meses (Não disponível ainda)
                          </SelectItem>
                          <SelectItem
                            value="48"
                            className="pointer-events-none text-gray-300"
                          >
                            48 meses (Não disponível ainda)
                          </SelectItem>
                        </SelectContent>
                      </Select>

                      {calculateSavings() > 0 && (
                        <div className="mt-2 flex items-center justify-between">
                          <span className="text-2xl font-bold text-[#1e90ff]">
                            {formatPrice(selectedPlan.price)}
                            <span className="text-sm font-normal text-gray-600">
                              /mês
                            </span>
                          </span>
                          <Button
                            variant="outline"
                            className="bg-green-50 text-green-700 border-green-200"
                          >
                            ECONOMIZE {formatPrice(calculateSavings())}
                          </Button>
                        </div>
                      )}

                      <p className="text-sm text-gray-600 mt-2">
                        Renovação por {formatPrice(selectedPlan.price)}/mês para
                        1 ano. Cancele a qualquer momento.
                      </p>
                    </div>
                  )}

                  {/* Preço para planos únicos */}
                  {selectedPlan.period === "one-time" && (
                    <div className="text-2xl font-bold text-[#1e90ff]">
                      {formatPrice(selectedPlan.price)}
                      <span className="text-sm font-normal text-gray-600 ml-2">
                        pagamento único
                      </span>
                    </div>
                  )}

                  {/* Preço para planos mensais */}
                  {selectedPlan.period === "monthly" && (
                    <div className="text-2xl font-bold text-[#1e90ff]">
                      {formatPrice(selectedPlan.price)}
                      <span className="text-sm font-normal text-gray-600">
                        /mês
                      </span>
                    </div>
                  )}

                  {/* Benefícios inclusos */}
                  {selectedPlan.benefits && (
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="flex items-start space-x-2 text-green-700">
                        <Check className="h-5 w-5 mt-0.5 flex-shrink-0" />
                        <span className="font-semibold">
                          {selectedPlan.benefits}
                        </span>
                        <Info className="h-4 w-4 mt-0.5 flex-shrink-0" />
                      </div>
                    </div>
                  )}

                  {/* Aviso com valor adicional */}
                  {selectedPlan.warning && (
                    <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
                      <div className="flex items-start space-x-3">
                        <AlertTriangle className="h-6 w-6 text-orange-600 mt-0.5 flex-shrink-0" />
                        <div className="flex-1">
                          <p className="font-semibold text-orange-800 text-sm mb-2">
                            {selectedPlan.warning}
                          </p>
                          {selectedPlan.additionalMonthlyFee && (
                            <div className="bg-orange-100 p-2 rounded border border-orange-300">
                              <p className="text-orange-700 font-bold text-lg">
                                +{" "}
                                {formatPrice(selectedPlan.additionalMonthlyFee)}
                                /mês
                              </p>
                              <p className="text-orange-600 text-xs">
                                Taxa mensal adicional
                              </p>
                            </div>
                          )}
                          {selectedPlan.installChatbot &&
                            selectedPlan.installChatbot > 0 && (
                              <div className="bg-orange-100 p-2 rounded border border-orange-300 mt-2">
                                <p className="text-orange-700 font-bold text-lg">
                                  + {formatPrice(selectedPlan.installChatbot)}
                                </p>
                                <p className="text-orange-600 text-xs">
                                  Taxa única de instalação
                                </p>
                              </div>
                            )}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Dados do Cliente */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-[#022041]">
                      Dados do Cliente
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Nome Completo</Label>
                        <Input
                          id="name"
                          value={customerData.name}
                          onChange={(e) =>
                            setCustomerData({
                              ...customerData,
                              name: e.target.value,
                            })
                          }
                          placeholder="Seu nome completo"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">E-mail</Label>
                        <Input
                          id="email"
                          type="email"
                          value={customerData.email}
                          onChange={(e) =>
                            setCustomerData({
                              ...customerData,
                              email: e.target.value,
                            })
                          }
                          placeholder="seu@email.com"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Telefone</Label>
                        <Input
                          id="phone"
                          value={customerData.phone}
                          onChange={(e) =>
                            setCustomerData({
                              ...customerData,
                              phone: e.target.value,
                            })
                          }
                          placeholder="(11) 99999-9999"
                        />
                      </div>
                      <div>
                        <Label htmlFor="document">CPF/CNPJ</Label>
                        <Input
                          id="document"
                          value={customerData.document}
                          onChange={(e) =>
                            setCustomerData({
                              ...customerData,
                              document: e.target.value,
                            })
                          }
                          placeholder="000.000.000-00"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Resumo do Pedido - Lado Direito */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-[#022041]">
                    Resumo do pedido
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {/* Itens do pedido */}
                  <div className="space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="font-semibold text-[#022041]">
                          {selectedPlan.name}
                        </p>
                        {selectedPlan.period === "annual" && (
                          <p className="text-sm text-gray-600">
                            Plano de {period} meses
                          </p>
                        )}
                      </div>
                      <div className="text-right">
                        {selectedPlan.originalPrice && (
                          <p className="text-sm text-gray-400 line-through">
                            {formatPrice(
                              selectedPlan.originalPrice *
                                (selectedPlan.period === "annual"
                                  ? Number.parseInt(period)
                                  : 1)
                            )}
                          </p>
                        )}
                        <p className="font-bold text-[#1e90ff]">
                          {formatPrice(
                            selectedPlan.price *
                              (selectedPlan.period === "annual"
                                ? Number.parseInt(period)
                                : 1)
                          )}
                        </p>
                      </div>
                    </div>

                    {/* Benefícios inclusos */}
                    <div className="space-y-2 text-sm">
                      {selectedPlan.installChatbot === 300.0 && (
                        <div className="flex justify-between items-center bg-orange-50 p-2 rounded">
                          <span>Instalação chatbot</span>
                          <span className="text-orange-600 font-semibold">
                            + {formatPrice(selectedPlan.installChatbot)}
                          </span>
                        </div>
                      )}
                      {selectedPlan.installChatbot === 0 && (
                        <div className="flex justify-between">
                          <span>Instalação chatbot</span>
                          <div className="text-right">
                            <span className="text-gray-400 line-through text-xs">
                              R$300,00
                            </span>
                            <span className="text-green-600 font-semibold ml-2">
                              R$0,00
                            </span>
                          </div>
                        </div>
                      )}

                      {selectedPlan.period === "annual" && (
                        <div className="flex flex-col space-y-1">
                          <div className="flex justify-between">
                            <span>Instalação chatbot</span>
                            <div className="text-right">
                              <span className="text-gray-400 line-through text-xs">
                                R$300,00
                              </span>
                              <span className="text-green-600 font-semibold ml-2">
                                R$0,00
                              </span>
                            </div>
                          </div>
                          {selectedPlan.id === "chatbot-anual-basic" && (
                            <div className="flex justify-between">
                              <span>Desenvolvimento de site</span>
                              <div className="text-right">
                                <span className="text-gray-400 line-through text-xs">
                                  R$800,00
                                </span>
                                <span className="text-green-600 font-semibold ml-2">
                                  R$0,00
                                </span>
                              </div>
                            </div>
                          )}
                          {selectedPlan.id === "chatbot-anual-intermediate" && (
                            <div className="flex justify-between">
                              <span>Desenvolvimento de site</span>
                              <div className="text-right">
                                <span className="text-gray-400 line-through text-xs">
                                  R$1600,00
                                </span>
                                <span className="text-green-600 font-semibold ml-2">
                                  R$0,00
                                </span>
                              </div>
                            </div>
                          )}
                          {selectedPlan.id === "chatbot-anual-profissional" && (
                            <div className="flex justify-between">
                              <span>Desenvolvimento de site</span>
                              <div className="text-right">
                                <span className="text-gray-400 line-through text-xs">
                                  R$3200,00
                                </span>
                                <span className="text-green-600 font-semibold ml-2">
                                  R$0,00
                                </span>
                              </div>
                            </div>
                          )}
                          <div className="flex justify-between">
                            <span>Domínio por 1 ano</span>
                            <div className="text-right">
                              <span className="text-gray-400 line-through text-xs">
                                R$40,99
                              </span>
                              <span className="text-green-600 font-semibold ml-2">
                                R$0,00
                              </span>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <Separator />

                  {/* Impostos */}
                  <div className="flex justify-between">
                    <span>Impostos</span>
                    <span>-</span>
                  </div>
                  <p className="text-xs text-gray-500">
                    (Calculados após as informações de faturamento)
                  </p>

                  <Separator />

                  {/* Subtotal */}
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">Subtotal</span>
                    <div className="text-right">
                      {selectedPlan.originalPrice && (
                        <p className="text-sm text-gray-400 line-through">
                          {formatPrice(
                            selectedPlan.originalPrice *
                              (selectedPlan.period === "annual"
                                ? Number.parseInt(period)
                                : 1)
                          )}
                        </p>
                      )}
                      <p className="text-xl font-bold text-[#1e90ff]">
                        {formatPrice(calculateTotal())}
                      </p>
                    </div>
                  </div>

                  {/* Aviso sobre taxa mensal adicional */}
                  {selectedPlan.additionalMonthlyFee && (
                    <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-lg">
                      <div className="flex items-center space-x-2">
                        <Info className="h-4 w-4 text-yellow-600" />
                        <p className="text-yellow-800 text-sm font-medium">
                          Taxa mensal adicional:{" "}
                          {formatPrice(selectedPlan.additionalMonthlyFee)}/mês
                        </p>
                      </div>
                      <p className="text-yellow-700 text-xs mt-1">
                        Esta taxa será cobrada mensalmente após a compra
                      </p>
                    </div>
                  )}

                  {/* Cupom de desconto */}
                  <div className="space-y-2">
                    <button
                      className="text-purple-600 font-semibold text-sm"
                      onClick={() =>
                        document.getElementById("coupon-input")?.focus()
                      }
                    >
                      Tem um cupom de desconto?
                    </button>
                    <div className="flex space-x-2">
                      <Input
                        id="coupon-input"
                        placeholder="Código do cupom"
                        value={couponCode}
                        onChange={(e) => setCouponCode(e.target.value)}
                      />
                      <Button variant="outline" onClick={applyCoupon}>
                        Aplicar
                      </Button>
                    </div>
                    {discount > 0 && (
                      <p className="text-green-600 text-sm">
                        Desconto de {discount}% aplicado!
                      </p>
                    )}
                  </div>

                  {/* Botão de checkout */}
                  <Button
                    onClick={handleCheckout}
                    disabled={
                      isProcessing || !customerData.name || !customerData.email
                    }
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 text-lg"
                  >
                    {isProcessing ? "Processando..." : "Continuar"}
                    <CreditCard className="ml-2 h-5 w-5" />
                  </Button>

                  {/* Garantia */}
                  <div className="flex items-center justify-center space-x-2 text-sm text-gray-600">
                    <Shield className="h-4 w-4" />
                    <span>07 dias para pedir reembolso</span>
                  </div>

                  {/* Recursos inclusos */}
                  <div className="space-y-2 text-sm">
                    <h4 className="font-semibold text-[#022041]">
                      Incluído neste plano:
                    </h4>
                    <ul className="space-y-1">
                      {selectedPlan.features.map((feature, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
