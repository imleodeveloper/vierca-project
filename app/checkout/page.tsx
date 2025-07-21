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
  uuid: string;
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
  additional?: number;
  additionalMonthlyFee?: number;
  isMonthlyFee: boolean;
}

interface PlansChatbots {
  type: "chatbot";
  title_plan: string;
  slug: string;
  description: string;
  features: string[];
  price: number;
  originalPrice?: number;
  isMonthlyFee: boolean;
  conversationsPerMonth: number;
  site_development: boolean;
  chatbot_installation: boolean;
  price_installation_separate?: number;
  popular: boolean;
  benefits?: string;
  warning?: string;
}

interface PlansSites {
  type: "site";
  title_plan: string;
  slug: string;
  description: string;
  features: string[];
  price: number;
  originalPrice?: number;
  isMonthlyFee: boolean;
  additionalMonthlyFee?: number;
  chatbot_installation: boolean;
  popular: boolean;
  benefits?: string;
  warning?: string;
}

const plansChatbots: PlansChatbots[] = [
  {
    type: "chatbot",
    title_plan: "Chatbot Teste",
    slug: "chatbot-teste",
    description: "Chatbot com IA para seu site - pagamento mensal",
    features: [
      "Aproximadamente 1.000 conversas no mês",
      "Custo acessível para começar",
      "Incluso suporte técnico",
      "Instalação 100% por nossa conta",
    ],
    price: 1.0,
    originalPrice: 5.0,
    isMonthlyFee: true,
    conversationsPerMonth: 1000,
    site_development: false,
    chatbot_installation: false,
    price_installation_separate: 1.5,
    popular: false,
    warning:
      "Atenção: A contratação deste plano não inclui a instalação do chatbot. A instalação deve ser adquirida separadamente por um pagamento único de R$ 300,00.",
  },
  {
    type: "chatbot",
    title_plan: "Chatbot Mensal Básico",
    slug: "chatbot-mensal-basic",
    description: "Chatbot com IA para seu site - pagamento mensal",
    features: [
      "Aproximadamente 1.000 conversas no mês",
      "Custo acessível para começar",
      "Incluso suporte técnico",
      "Instalação 100% por nossa conta",
    ],
    price: 115.0,
    isMonthlyFee: true,
    conversationsPerMonth: 1000,
    site_development: false,
    chatbot_installation: false,
    price_installation_separate: 300,
    popular: false,
    warning:
      "Atenção: A contratação deste plano não inclui a instalação do chatbot. A instalação deve ser adquirida separadamente por um pagamento único de R$ 300,00.",
  },
  {
    type: "chatbot",
    title_plan: "Chatbot Mensal Intermediário",
    slug: "chatbot-mensal-intermediate",
    description: "Chatbot com IA para seu site - pagamento mensal",
    features: [
      "Aproximadamente 10.000 conversas no mês",
      "Custo acessível para começar",
      "Instalação 100% por nossa conta",
      "Incluso suporte técnico",
    ],
    price: 254.0,
    isMonthlyFee: true,
    conversationsPerMonth: 10000,
    site_development: false,
    chatbot_installation: true,
    popular: true,
    benefits: "A contratação deste plano inclui a instalação do chatbot.",
  },
  {
    type: "chatbot",
    title_plan: "Chatbot Mensal Profissional",
    slug: "chatbot-mensal-profissional",
    description: "Chatbot com IA para seu site - pagamento mensal",
    features: [
      "Aproximadamente 20.000 conversas no mês",
      "Custo acessível para começar",
      "Instalação 100% por nossa conta",
      "Incluso suporte técnico",
    ],
    price: 429.0,
    isMonthlyFee: true,
    conversationsPerMonth: 20000,
    site_development: false,
    chatbot_installation: true,
    popular: false,
    benefits: "A contratação deste plano inclui a instalação do chatbot.",
  },
  {
    type: "chatbot",
    title_plan: "Teste Básico",
    slug: "chatbot-teste2",
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
    price: 148.14,
    originalPrice: 2069.94 / 12,
    isMonthlyFee: false,
    conversationsPerMonth: 1000,
    site_development: true,
    chatbot_installation: true,
    popular: false,
    benefits:
      "Neste plano você tem incluso: Desenvolvimento de site, instalação do chatbot, domínio gratuíto por 1 ano e suporte técnico",
  },
  {
    type: "chatbot",
    title_plan: "Chatbot Anual Básico",
    slug: "chatbot-anual-basic",
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
    price: 91.58,
    originalPrice: 115.0,
    isMonthlyFee: false,
    conversationsPerMonth: 1000,
    site_development: true,
    chatbot_installation: true,
    popular: false,
    benefits:
      "Neste plano você tem incluso: Desenvolvimento de site, instalação do chatbot, domínio gratuíto por 1 ano e suporte técnico",
  },
  {
    type: "chatbot",
    title_plan: "Chatbot Anual Intermediário",
    slug: "chatbot-anual-intermediate",
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
    price: 214.0,
    originalPrice: 254.0,
    isMonthlyFee: false,
    conversationsPerMonth: 10000,
    site_development: true,
    chatbot_installation: true,
    popular: true,
    benefits:
      "Neste plano você tem incluso: Desenvolvimento de site, instalação do chatbot, domínio gratuíto por 1 ano e suporte técnico",
  },
  {
    type: "chatbot",
    title_plan: "Chatbot Anual Profissional",
    slug: "chatbot-anual-profissional",
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
    price: 379.0,
    originalPrice: 429.0,
    isMonthlyFee: false,
    conversationsPerMonth: 20000,
    site_development: true,
    chatbot_installation: true,
    popular: false,
    benefits:
      "Neste plano você tem incluso: Desenvolvimento de site, instalação do chatbot, domínio gratuíto por 1 ano e suporte técnico",
  },
];

const plansSites: PlansSites[] = [
  {
    type: "site",
    title_plan: "Starter Chatbot - Site com Chatbot",
    slug: "starter-chatbot",
    description: "Landing Page e chatbot integrado",
    features: [
      "Site responsivo com até 7 seções",
      "Chatbot com respostas automáticas",
      "Atendimento 24/7 em seu site",
      "Aprox. 1.000 conversas mensais",
      "Suporte técnico",
      "Domínio gratuito por 01 ano",
    ],
    price: 1200.0,
    isMonthlyFee: true,
    additionalMonthlyFee: 115.0,
    chatbot_installation: true,
    popular: false,
    benefits: "O primeiro mês de uso do chatbot é totalmente gratuito.",
    warning:
      "Este plano acompanha o pacote mensal para o funcionamento do chatbot: R$ 115,00/mês",
  },
  {
    type: "site",
    title_plan: "Pro Chatbot - Site com Chatbot",
    slug: "pro-chatbot",
    description: "Site institucional e chatbot integrado",
    features: [
      "Site responsivo com até 10 páginas",
      "Chatbot com respostas automáticas",
      "Atendimento 24/7 em seu site",
      "Aprox. 10.000 conversas mensais",
      "Suporte técnico",
      "Domínio gratuito por 01 ano",
    ],
    price: 2500.0,
    isMonthlyFee: true,
    additionalMonthlyFee: 254.0,
    chatbot_installation: true,
    popular: true,
    benefits: "O primeiro mês de uso do chatbot é totalmente gratuito.",
    warning:
      "Este plano acompanha o pacote mensal para o funcionamento do chatbot: R$ 254,00/mês",
  },
  {
    type: "site",
    title_plan: "Business Chatbot - Site com Chatbot",
    slug: "business-chatbot",
    description: "Site com sistema e chatbot integrado",
    features: [
      "Site ilimitado com design personalizado",
      "Chatbot com respostas automáticas",
      "Integração com múltiplos sistemas",
      "Painel administrativo avançado",
      "Aprox. 20.000 conversas mensais",
      "Domínio gratuito por 01 ano",
      "Atendimento 24/7 em seu site",
    ],
    price: 4500.0,
    isMonthlyFee: true,
    additionalMonthlyFee: 429.0,
    chatbot_installation: true,
    popular: false,
    benefits: "O primeiro mês de uso do chatbot é totalmente gratuito.",
    warning:
      "Este plano acompanha o pacote mensal para o funcionamento do chatbot: R$ 429,00/mês",
  },
  {
    type: "site",
    title_plan: "Landing Page Simples",
    slug: "landing-page-simples",
    description: "Página de vendas otimizada focada em conversão",
    features: [
      "Design responsivo",
      "Otimização para conversão",
      "7 seções estratégicas",
      "Integração com formulários",
      "Suporte gratuito por 1 mês após término do site",
      "Domínio gratuito por 01 ano",
    ],
    price: 600.0,
    isMonthlyFee: false,
    chatbot_installation: false,
    popular: false,
  },
  {
    type: "site",
    title_plan: "Landing Page Premium",
    slug: "landing-page-premium",
    description: "Página de vendas otimizada focada em conversão",
    features: [
      "Design premium personalizado e responsivo",
      "Otimização para anúncios pagos",
      "Integração com formulários",
      "Integração com WhatsApp",
      "Suporte gratuito por 1 mês após término do site",
      "Domínio gratuito por 01 ano",
    ],
    price: 1200.0,
    isMonthlyFee: false,
    chatbot_installation: false,
    popular: true,
  },
  {
    type: "site",
    title_plan: "Landing Page Completa",
    slug: "landing-page-complete",
    description: "Página de vendas otimizada focada em conversão",
    features: [
      "Múltiplas páginas de vendas",
      "Sistema de pagamento integrado",
      "Automação completa de vendas",
      "Domínio gratuito por 01 ano",
    ],
    price: 2500.0,
    isMonthlyFee: true,
    additionalMonthlyFee: 130.0,
    chatbot_installation: false,
    popular: false,
    warning:
      "Este plano acompanha o pacote mensal para o funcionamento do sistema integrado: R$ 130,00/mês",
  },
  {
    type: "site",
    title_plan: "Site Institucional Básico",
    slug: "site-institucional-basic",
    description: "Site completo para sua empresa",
    features: [
      "Até 10 páginas",
      "Design responsivo",
      "SEO otimizado",
      "Formulário de contato",
      "Suporte 1 mês após finalização",
      "Domínio gratuito por 01 ano",
    ],
    price: 800.0,
    isMonthlyFee: false,
    chatbot_installation: false,
    popular: false,
  },
  {
    type: "site",
    title_plan: "Site Institucional Premium",
    slug: "site-institucional-premium",
    description: "Site completo para sua empresa",
    features: [
      "Até 15 páginas + blog",
      "Design personalizado exclusivo",
      "SEO otimizado",
      "Formulário de contato",
      "Suporte 1 mês após finalização",
      "Domínio gratuito por 01 ano",
    ],
    price: 1500.0,
    isMonthlyFee: false,
    chatbot_installation: false,
    popular: true,
  },
  {
    type: "site",
    title_plan: "Corporativo",
    slug: "site-institucional-corporativo",
    description: "Site completo para sua empresa",
    features: [
      "Portal multi-idioma",
      "Sistema de gestão de conteúdo",
      "Integração com sistemas internos",
      "Área do colaborador",
      "Suporte técnico dedicado",
      "Domínio gratuito por 01 ano",
    ],
    price: 3000.0,
    isMonthlyFee: true,
    chatbot_installation: false,
    additionalMonthlyFee: 130.0,
    benefits: "O primeiro mês de uso do site e sistema é totalmente gratuito.",
    warning:
      "Este plano acompanha o pacote mensal para o funcionamento do site e sistema integrado: R$ 130,00/mês",
    popular: false,
  },

  {
    type: "site",
    title_plan: "Loja Virtual Completa",
    slug: "ecommerce-basic",
    description: "Loja Básica - E-commerce",
    features: [
      "Catálogo de produtos",
      "Carrinho de compras",
      "Integração com pagamentos",
      "Painel administrativo",
      "SEO otimizado",
      "Hospedagem inicial gratuita",
    ],
    price: 1600.0,
    isMonthlyFee: true,
    chatbot_installation: false,
    additionalMonthlyFee: 130.0,
    benefits: "O primeiro mês de uso do site e sistema é totalmente gratuito.",
    warning:
      "Este plano acompanha o pacote mensal para o funcionamento do site e sistema integrado: R$ 130,00/mês",
    popular: false,
  },
  {
    type: "site",
    title_plan: "Loja Profissional - E-commerce",
    slug: "ecommerce-pro",
    description: "Loja virtual completa",
    features: [
      "Produtos ilimitados",
      "Múltiplas formas de pagamento",
      "Sistema de cupons e promoções",
      "Gestão de estoque avançada",
      "Relatórios de vendas",
    ],
    price: 3200.0,
    isMonthlyFee: true,
    chatbot_installation: false,
    additionalMonthlyFee: 130.0,
    benefits: "O primeiro mês de uso do site e sistema é totalmente gratuito.",
    warning:
      "Este plano acompanha o pacote mensal para o funcionamento do site e sistema integrado: R$ 130,00/mês",
    popular: true,
  },
  {
    type: "site",
    title_plan: "Marketplace - E-commerce",
    slug: "ecommerce-marketplace",
    description: "Plataforma de vendas multi-vendor",
    features: [
      "Sistema multi-vendor",
      "Comissões automáticas",
      "Painel para vendedores",
      "Sistema de avaliações",
      "Logística integrada",
      "Suporte empresarial",
    ],
    price: 6500.0,
    isMonthlyFee: true,
    chatbot_installation: false,
    additionalMonthlyFee: 500.0,
    benefits: "O primeiro mês de uso do site e sistema é totalmente gratuito.",
    warning:
      "Este plano acompanha o pacote mensal para o funcionamento do site e sistema integrado: R$ 500,00/mês",
    popular: false,
  },
];

const plans: Plan[] = [
  {
    id: "chatbot-teste",
    uuid: "d34f9485-ffbe-4c41-b8af-be1a5cdd6b98",
    name: "Chatbot TESTE",
    price: 1.0,
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
    installChatbot: 2.0,
    warning:
      "Atenção: A contratação deste plano não inclui a instalação do chatbot. A instalação deve ser adquirida separadamente por um pagamento único de R$ 300,00.",
    isMonthlyFee: true,
    additionalMonthlyFee: 1.5,
    additional: 2.0,
  },
  {
    id: "chatbot-mensal-basic",
    uuid: "04cfd435-118b-4963-83b2-be5d93d49bc8",
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
    isMonthlyFee: true,
    additionalMonthlyFee: 115.0,
    additional: 300.0,
  },
  {
    id: "chatbot-mensal-intermediate",
    uuid: "fe739efb-3b3f-41c2-a308-de30cc87c207",
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
    additionalMonthlyFee: 0,
    isMonthlyFee: true,
  },
  {
    id: "chatbot-mensal-profissional",
    uuid: "39b3fe0a-725a-415d-a6c3-53a731f888dd",
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
    isMonthlyFee: true,
    additionalMonthlyFee: 0,
  },

  {
    id: "chatbot-anual-basic",
    uuid: "fa68bfb1-83fc-4732-a13a-14ec1179ddc4",
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
    isMonthlyFee: false,
    additionalMonthlyFee: 0,
  },
  {
    id: "chatbot-anual-intermediate",
    uuid: "888d577f-99c7-4c27-8678-2eca87d4adc7",
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
    isMonthlyFee: false,
    additionalMonthlyFee: 0,
  },
  {
    id: "chatbot-anual-profissional",
    uuid: "46829016-aed5-4360-90b7-7c4202de475f",
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
    isMonthlyFee: false,
    additionalMonthlyFee: 0,
  },

  {
    id: "starter-chatbot",
    uuid: "246929fd-5b15-43a9-b99d-9ae055b5fc05",
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
    period: "monthly",
    popular: false,
    benefits: "O primeiro mês de uso do chatbot é totalmente gratuito.",
    warning:
      "Este plano acompanha o pacote mensal para o funcionamento do chatbot: R$ 115,00/mês",
    additionalMonthlyFee: 115.0,
    isMonthlyFee: true,
  },
  {
    id: "pro-chatbot",
    uuid: "e89ded60-ca6b-429b-9085-945dd17fc87f",
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
    period: "monthly",
    popular: true,
    benefits: "O primeiro mês de uso do chatbot é totalmente gratuito.",
    warning:
      "Este plano acompanha o pacote mensal para o funcionamento do chatbot: R$ 254,00/mês",
    additionalMonthlyFee: 254.0,
    isMonthlyFee: true,
  },
  {
    id: "business-chatbot",
    uuid: "14644c24-40e0-4023-a93c-48a877b67e5e",
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
    period: "monthly",
    popular: true,
    benefits: "O primeiro mês de uso do chatbot é totalmente gratuito.",
    warning:
      "Este plano acompanha o pacote mensal para o funcionamento do chatbot: R$ 429,00/mês",
    additionalMonthlyFee: 429.0,
    isMonthlyFee: true,
  },
  {
    id: "landing-page-simples",
    uuid: "a1945d59-5cc8-4995-8123-480691781bdf",
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
    isMonthlyFee: false,
    additionalMonthlyFee: 0,
  },
  {
    id: "landing-page-premium",
    uuid: "c09199e1-b569-4e79-a69d-f449029670f0",
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
    isMonthlyFee: false,
    additionalMonthlyFee: 0,
  },
  {
    id: "landing-page-complete",
    uuid: "6b3f37bf-92b2-444e-9f2f-4463077c1ef6",
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
    period: "monthly",
    benefits: "O primeiro mês de uso do site e sistema é totalmente gratuito.",
    warning:
      "Este plano acompanha o pacote mensal para o funcionamento do sistema integrado: R$ 130,00/mês",
    additionalMonthlyFee: 130.0,
    isMonthlyFee: true,
  },
  {
    id: "site-institucional-basic",
    uuid: "9161ba24-105c-450d-bad3-365aa6e5a629",
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
    isMonthlyFee: false,
    additionalMonthlyFee: 0,
  },
  {
    id: "site-institucional-premium",
    uuid: "49d91bcb-d234-472d-9f8a-67df1d051fc5",
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
    isMonthlyFee: false,
    additionalMonthlyFee: 0,
  },
  {
    id: "site-institucional-corporativo",
    uuid: "255bd77f-05cf-4c94-be3a-40c2ac1e55ad",
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
    period: "monthly",
    popular: false,
    benefits: "O primeiro mês de uso do site e sistema é totalmente gratuito.",
    warning:
      "Este plano acompanha o pacote mensal para o funcionamento do site e sistema integrado: R$ 130,00/mês",
    additionalMonthlyFee: 130.0,
    isMonthlyFee: true,
  },
  {
    id: "ecommerce-basic",
    uuid: "615ceae0-6afd-4a65-ae77-14b0e9baf923",
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
    period: "monthly",
    benefits: "O primeiro mês de uso do site e sistema é totalmente gratuito.",
    warning:
      "Este plano acompanha o pacote mensal para o funcionamento do site e sistema integrado: R$ 130,00/mês",
    additionalMonthlyFee: 130.0,
    isMonthlyFee: true,
  },
  {
    id: "ecommerce-pro",
    uuid: "a9e33692-dcbf-445c-add2-fccbbc057383",
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
    period: "monthly",
    benefits: "O primeiro mês de uso do site e sistema é totalmente gratuito.",
    warning:
      "Este plano acompanha o pacote mensal para o funcionamento do site e sistema integrado: R$ 130,00/mês",
    additionalMonthlyFee: 130.0,
    isMonthlyFee: true,
  },
  {
    id: "ecommerce-marketplace",
    uuid: "24d50e11-1b51-41ba-8eba-19b7863c1c63",
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
    period: "monthly",
    benefits: "O primeiro mês de uso do site e sistema é totalmente gratuito.",
    warning:
      "Este plano acompanha o pacote mensal para o funcionamento do site e sistema integrado: R$ 500,00/mês",
    additionalMonthlyFee: 500.0,
    isMonthlyFee: true,
  },
];

export default function CheckoutPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const planId = searchParams.get("plan");

  const [selectedPlans, setSelectedPlans] = useState<{
    chatbot: PlansChatbots | null;
    site: PlansSites | null;
  }>({ chatbot: null, site: null });
  const [period, setPeriod] = useState<string>("12");
  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const [customerData, setCustomerData] = useState({
    planSlug: "",
    id: "",
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
            id: session.user.id,
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
      const planChatbot = plansChatbots.find((p) => p.slug === planId);
      const planSite = plansSites.find((p) => p.slug === planId);
      if (planChatbot) {
        setSelectedPlans((prev) => ({ ...prev, chatbot: planChatbot }));
      }

      if (planSite) {
        setSelectedPlans((prev) => ({ ...prev, site: planSite }));
      }
    }
  }, [planId, plansChatbots, plansSites]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  const calculateTotal = () => {
    let total = 0;

    // CALCULAR TOTAL DO PLANO CHATBOT
    if (selectedPlans.chatbot) {
      let chatbotTotal = selectedPlans.chatbot.price;

      if (!selectedPlans.chatbot.isMonthlyFee) {
        const months = Number.parseInt(period);
        chatbotTotal = selectedPlans.chatbot.price * months;
      }

      if (selectedPlans.chatbot.chatbot_installation === false) {
        chatbotTotal += selectedPlans.chatbot.price_installation_separate || 0;
      }

      if (discount > 0) {
        chatbotTotal *= 1 - discount / 100;
      }

      total += chatbotTotal;
    }

    // CALCULAR TOTAL DO PLANO SITE
    if (selectedPlans.site) {
      let siteTotal = selectedPlans.site.price;

      if (!selectedPlans.site.isMonthlyFee) {
        const months = Number.parseInt(period);
        siteTotal = selectedPlans.site.price * months;
      }

      if (selectedPlans.site.isMonthlyFee === false) {
        siteTotal = selectedPlans.site.price;
      }

      if (discount > 0) {
        siteTotal *= 1 - discount / 100;
      }

      total += siteTotal;
    }

    return total;
  };

  const calculateSavings = () => {
    let totalSavings: number = 0;
    // SAVINGS PLANO CHATBOT
    if (
      selectedPlans.chatbot &&
      selectedPlans.chatbot.originalPrice &&
      !selectedPlans.chatbot.isMonthlyFee
    ) {
      const months = Number.parseInt(period);
      const originalTotal = selectedPlans.chatbot.originalPrice * months;
      const currentTotal = selectedPlans.chatbot.price * months;
      totalSavings += originalTotal - currentTotal;
    }

    // SAVINGS PLANO SITE
    if (
      selectedPlans.site &&
      selectedPlans.site.originalPrice &&
      !selectedPlans.site.isMonthlyFee
    ) {
      const months = Number.parseInt(period);
      const originalTotal = selectedPlans.site.originalPrice * months;
      const currentTotal = selectedPlans.site.price * months;
      totalSavings += originalTotal - currentTotal;
    }

    return totalSavings;
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
    if (!selectedPlans.chatbot && !selectedPlans.site) {
      console.warn(
        "❌ selectedPlans.chatbot ou selectedPlans.site estão ausentes"
      );
      return;
    }

    setIsProcessing(true);

    try {
      // FETCH PARA CHATBOT
      if (selectedPlans.chatbot) {
        // Verifica se é um plano combo mensalidade + pagamento único - CHATBOT
        const isComboChatbot =
          selectedPlans.chatbot.isMonthlyFee === true &&
          selectedPlans.chatbot.price_installation_separate &&
          selectedPlans.chatbot.price_installation_separate > 0;

        const isOnlyMonthlyChatbot =
          !isComboChatbot && selectedPlans.chatbot.isMonthlyFee === true;

        const isOnlyOneTimeChatbot =
          !isComboChatbot && selectedPlans.chatbot.isMonthlyFee === false;

        if (isComboChatbot) {
          // Primeiro passo: cria o pagamento único
          const preferenceResponse = await fetch(
            "/api/checkout/create-preference",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                plan: selectedPlans,
                period,
                customer: customerData,
                discount,
                total: calculateTotal(),
              }),
            }
          );

          const preferenceData = await preferenceResponse.json();

          if (!preferenceData.init_point) {
            throw new Error("Erro ao criar preferência para pagamento único");
          }

          // Redireciona pro pagamento único
          window.location.href = preferenceData.init_point;
          return;
        }

        if (isOnlyMonthlyChatbot) {
          // Plano de assinatura direta (sem pagamento único)
          const subscriptionResponse = await fetch(
            "/api/checkout/create-subscription",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                plan: selectedPlans,
                period,
                customer: customerData,
                discount,
                total: calculateTotal(),
              }),
            }
          );

          const subscriptionData = await subscriptionResponse.json();

          if (!subscriptionData.init_point) {
            throw new Error("Erro ao criar assinatura");
          }

          window.location.href = subscriptionData.init_point;
          return;
        }

        if (isOnlyOneTimeChatbot) {
          // Pagamento único direto
          const oneTimeResponse = await fetch(
            "/api/checkout/create-preference",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                plan: selectedPlans,
                period,
                customer: customerData,
                discount,
                total: calculateTotal(),
              }),
            }
          );

          const oneTimeData = await oneTimeResponse.json();

          if (!oneTimeData.init_point) {
            throw new Error("Erro ao criar pagamento único");
          }

          window.location.href = oneTimeData.init_point;
          return;
        }
      }

      // FETCH PARA PLANOS DE SITE
      if (selectedPlans.site) {
        const isMonthlyFeeSite =
          selectedPlans.site.isMonthlyFee === true &&
          selectedPlans.site.additionalMonthlyFee;

        const isPaymentUniqueSite = selectedPlans.site.isMonthlyFee === false;

        if (isMonthlyFeeSite) {
          // Primeiro passo: cria o pagamento único
          const preferenceResponse = await fetch(
            "/api/checkout/create-preference",
            {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                plan: selectedPlans,
                period,
                customer: customerData,
                discount,
                total: calculateTotal(),
              }),
            }
          );

          const preferenceData = await preferenceResponse.json();

          if (!preferenceData.init_point) {
            throw new Error("Erro ao criar preferência para pagamento único");
          }

          // Redireciona pro pagamento único
          window.location.href = preferenceData.init_point;
          return;
        }

        if (isPaymentUniqueSite) {
          //Pagamento único direto
          const oneTimeResponse = await fetch(
            "/api/checkout/create-preference",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                plan: selectedPlans,
                period,
                customer: customerData,
                discount,
                total: calculateTotal(),
              }),
            }
          );

          const oneTimeData = await oneTimeResponse.json();

          if (!oneTimeData.init_point) {
            throw new Error("Erro ao criar o pagamento único");
          }

          window.location.href = oneTimeData.init_point;
          return;
        }
      }

      // 🔴 Segurança: se não cair em nenhum caso, lança erro
      throw new Error("Plano inválido ou mal configurado");
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

  if (!selectedPlans.chatbot && !selectedPlans.site) {
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
              {selectedPlans.chatbot && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-[#022041]">
                      {selectedPlans.chatbot.title_plan}
                      {selectedPlans.chatbot.popular && (
                        <Badge className="ml-2 bg-[#1e90ff] text-white">
                          Mais Popular
                        </Badge>
                      )}
                    </CardTitle>
                    <p className="text-gray-600">
                      {selectedPlans.chatbot.description}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Seletor de Período para planos anuais */}
                    {selectedPlans.chatbot.isMonthlyFee === false && (
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
                              {formatPrice(selectedPlans.chatbot.price)}
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

                        {/*
                        <p className="text-sm text-gray-600 mt-2">
                          Renovação por{" "}
                          {formatPrice(selectedPlans.chatbot.price)}/mês para 1
                          ano. Cancele a qualquer momento.
                        </p> */}
                      </div>
                    )}

                    {/* Preço para planos únicos */}
                    {selectedPlans.chatbot.isMonthlyFee === false && (
                      <div className="text-2xl font-bold text-[#1e90ff]">
                        {formatPrice(
                          selectedPlans.chatbot.price * Number(period)
                        )}
                        <span className="text-sm font-normal text-gray-600 ml-2">
                          pagamento único
                        </span>
                      </div>
                    )}

                    {/* Preço para planos mensais */}
                    {selectedPlans.chatbot.isMonthlyFee === true && (
                      <div className="text-2xl font-bold text-[#1e90ff]">
                        {formatPrice(selectedPlans.chatbot.price)}
                        <span className="text-sm font-normal text-gray-600">
                          /mês
                        </span>
                      </div>
                    )}

                    {/* Benefícios inclusos */}
                    {selectedPlans.chatbot.benefits && (
                      <div className="bg-green-50 p-4 rounded-lg">
                        <div className="flex items-start space-x-2 text-green-700">
                          <Check className="h-5 w-5 mt-0.5 flex-shrink-0" />
                          <span className="font-semibold">
                            {selectedPlans.chatbot.benefits}
                          </span>
                          <Info className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        </div>
                      </div>
                    )}

                    {/* Aviso com valor adicional */}
                    {selectedPlans.chatbot.warning && (
                      <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
                        <div className="flex items-start space-x-3">
                          <AlertTriangle className="h-6 w-6 text-orange-600 mt-0.5 flex-shrink-0" />
                          <div className="flex-1">
                            <p className="font-semibold text-orange-800 text-sm mb-2">
                              {selectedPlans.chatbot.warning}
                            </p>
                            {/*selectedPlans.chatbot
                              .price_installation_separate && (
                              <div className="bg-orange-100 p-2 rounded border border-orange-300">
                                <p className="text-orange-700 font-bold text-lg">
                                  + {formatPrice(selectedPlans.chatbot.price)}
                                  /mês
                                </p>
                                <p className="text-orange-600 text-xs">
                                  Taxa mensal adicional
                                </p>
                              </div>
                            )*/}
                            {selectedPlans.chatbot.chatbot_installation ===
                              false &&
                              selectedPlans.chatbot
                                .price_installation_separate && (
                                <div className="bg-orange-100 p-2 rounded border border-orange-300 mt-2">
                                  <p className="text-orange-700 font-bold text-lg">
                                    +{" "}
                                    {formatPrice(
                                      selectedPlans.chatbot
                                        .price_installation_separate
                                    )}
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
              )}
              {selectedPlans.site && (
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-[#022041]">
                      {selectedPlans.site.title_plan}
                      {selectedPlans.site.popular && (
                        <Badge className="ml-2 bg-[#1e90ff] text-white">
                          Mais Popular
                        </Badge>
                      )}
                    </CardTitle>
                    <p className="text-gray-600">
                      {selectedPlans.site.description}
                    </p>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {/* Preço para planos únicos */}
                    {selectedPlans.site.isMonthlyFee === false && (
                      <div className="text-2xl font-bold text-[#1e90ff]">
                        {formatPrice(selectedPlans.site.price)}
                        <span className="text-sm font-normal text-gray-600 ml-2">
                          pagamento único
                        </span>
                      </div>
                    )}

                    {/* Preço para planos mensais */}
                    {selectedPlans.site.isMonthlyFee === true && (
                      <div className="text-2xl flex flex-col gap-4 font-bold text-[#1e90ff]">
                        <div className="flex items-center justify-start gap-2">
                          {formatPrice(selectedPlans.site.price)}
                          <span className="text-sm font-normal text-gray-600">
                            pagamento único
                          </span>
                        </div>
                        <div className="flex items-center justify-start gap-2">
                          {formatPrice(
                            selectedPlans.site.additionalMonthlyFee || 0
                          )}
                          <span className="text-sm font-normal text-gray-600">
                            /mês
                          </span>
                        </div>
                      </div>
                    )}

                    {/* Benefícios inclusos */}
                    {selectedPlans.site.benefits && (
                      <div className="bg-green-50 p-4 rounded-lg">
                        <div className="flex items-start space-x-2 text-green-700">
                          <Check className="h-5 w-5 mt-0.5 flex-shrink-0" />
                          <span className="font-semibold">
                            {selectedPlans.site.benefits}
                          </span>
                          <Info className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        </div>
                      </div>
                    )}

                    {/* Aviso com valor adicional */}
                    {selectedPlans.site.warning && (
                      <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
                        <div className="flex items-start space-x-3">
                          <AlertTriangle className="h-6 w-6 text-orange-600 mt-0.5 flex-shrink-0" />
                          <div className="flex-1">
                            <p className="font-semibold text-orange-800 text-sm mb-2">
                              {selectedPlans.site.warning}
                            </p>
                            {selectedPlans.site.additionalMonthlyFee && (
                              <div className="bg-orange-100 p-2 rounded border border-orange-300">
                                <p className="text-orange-700 font-bold text-lg">
                                  +{" "}
                                  {formatPrice(
                                    selectedPlans.site.additionalMonthlyFee
                                  )}
                                  /mês
                                </p>
                                <p className="text-orange-600 text-xs">
                                  Taxa mensal adicional
                                </p>
                              </div>
                            )}
                            {/*selectedPlans.site.chatbot_installation &&
                              selectedPlans.site.additionalMonthlyFee && (
                                <div className="bg-orange-100 p-2 rounded border border-orange-300 mt-2">
                                  <p className="text-orange-700 font-bold text-lg">
                                    +{" "}
                                    {formatPrice(
                                      selectedPlans.site.additionalMonthlyFee
                                    )}
                                  </p>
                                  <p className="text-orange-600 text-xs">
                                    Taxa única de instalação
                                  </p>
                                </div>
                              )*/}
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
              )}
            </div>

            {/* Resumo do Pedido - Lado Direito */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-[#022041]">
                    Resumo do pedido
                  </CardTitle>
                </CardHeader>
                {selectedPlans.chatbot && (
                  <CardContent className="space-y-4">
                    {/* Itens do pedido */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-semibold text-[#022041]">
                            {selectedPlans.chatbot.title_plan}
                          </p>
                          {selectedPlans.chatbot.isMonthlyFee === false && (
                            <p className="text-sm text-gray-600">
                              Plano de {period} meses
                            </p>
                          )}
                        </div>
                        <div className="text-right">
                          {selectedPlans.chatbot.originalPrice && (
                            <p className="text-sm text-gray-400 line-through">
                              {formatPrice(
                                selectedPlans.chatbot.originalPrice *
                                  (selectedPlans.chatbot.isMonthlyFee === false
                                    ? Number.parseInt(period)
                                    : 1)
                              )}
                            </p>
                          )}
                          <p className="font-bold text-[#1e90ff]">
                            {formatPrice(
                              selectedPlans.chatbot.price *
                                (selectedPlans.chatbot.isMonthlyFee === false
                                  ? Number.parseInt(period)
                                  : 1)
                            )}
                          </p>
                        </div>
                      </div>

                      {/* Benefícios inclusos */}
                      <div className="space-y-2 text-sm">
                        {selectedPlans.chatbot.chatbot_installation ===
                          false && (
                          <div className="flex justify-between items-center bg-orange-50 p-2 rounded">
                            <span>Instalação chatbot</span>
                            <span className="text-orange-600 font-semibold">
                              +{" "}
                              {formatPrice(
                                selectedPlans.chatbot
                                  .price_installation_separate || 0
                              )}
                            </span>
                          </div>
                        )}
                        {selectedPlans.chatbot.chatbot_installation ===
                          true && (
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

                        {selectedPlans.chatbot.isMonthlyFee === false && (
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
                            {selectedPlans.chatbot.slug ===
                              "chatbot-anual-basic" && (
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
                            {selectedPlans.chatbot.slug ===
                              "chatbot-anual-intermediate" && (
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
                            {selectedPlans.chatbot.slug ===
                              "chatbot-anual-profissional" && (
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

                    {/* Impostos 
                  <div className="flex justify-between">
                  <span>Impostos</span>
                  <span>-</span>
                  </div>
                  <p className="text-xs text-gray-500">
                  (Calculados após as informações de faturamento)
                  </p>
                  */}

                    <Separator />

                    {/* Subtotal */}
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold">Subtotal</span>
                      <div className="text-right">
                        {selectedPlans.chatbot.originalPrice && (
                          <p className="text-sm text-gray-400 line-through">
                            {formatPrice(
                              selectedPlans.chatbot.originalPrice *
                                (selectedPlans.chatbot.isMonthlyFee === false
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

                    {/* Aviso sobre taxa mensal adicional
                    {selectedPlans.chatbot.price_installation_separate && (
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
                    */}

                    {/* Cupom de desconto 
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
                      */}

                    {/* Botão de checkout */}
                    <Button
                      onClick={handleCheckout}
                      disabled={
                        isProcessing ||
                        !customerData.name ||
                        !customerData.email
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
                        {selectedPlans.chatbot.features.map(
                          (feature, index) => (
                            <li
                              key={index}
                              className="flex items-start space-x-2"
                            >
                              <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </CardContent>
                )}
                {selectedPlans.site && (
                  <CardContent className="space-y-4">
                    {/* Itens do pedido */}
                    <div className="space-y-3">
                      <div className="flex justify-between items-start">
                        <div>
                          <p className="font-semibold text-[#022041]">
                            {selectedPlans.site.title_plan}
                          </p>
                        </div>
                        <div className="text-right">
                          {selectedPlans.site.originalPrice && (
                            <p className="text-sm text-gray-400 line-through">
                              {formatPrice(selectedPlans.site.originalPrice)}
                            </p>
                          )}
                          <p className="font-bold text-[#1e90ff]">
                            {formatPrice(selectedPlans.site.price)}
                          </p>
                        </div>
                      </div>

                      {/* Benefícios inclusos */}
                      <div className="space-y-2 text-sm">
                        {selectedPlans.site.isMonthlyFee === true && (
                          <div className="flex justify-between items-center bg-orange-50 p-2 rounded">
                            <span>Adicional mensal</span>
                            <span className="text-orange-600 font-semibold">
                              +{" "}
                              {formatPrice(
                                selectedPlans.site.additionalMonthlyFee || 0
                              )}
                            </span>
                          </div>
                        )}
                        {selectedPlans.site.chatbot_installation === true && (
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
                      </div>
                    </div>

                    {/* Impostos 
                  <div className="flex justify-between">
                  <span>Impostos</span>
                  <span>-</span>
                  </div>
                  <p className="text-xs text-gray-500">
                  (Calculados após as informações de faturamento)
                  </p>
                  */}

                    <Separator />

                    {/* Subtotal */}
                    <div className="flex justify-between items-center">
                      <span className="text-lg font-semibold">Subtotal</span>
                      <div className="text-right">
                        {selectedPlans.site.originalPrice && (
                          <p className="text-sm text-gray-400 line-through">
                            {formatPrice(selectedPlans.site.originalPrice)}
                          </p>
                        )}
                        <p className="text-xl font-bold text-[#1e90ff]">
                          {formatPrice(calculateTotal())}
                        </p>
                      </div>
                    </div>

                    {/* Aviso sobre taxa mensal adicional */}
                    {selectedPlans.site.additionalMonthlyFee && (
                      <div className="bg-yellow-50 border border-yellow-200 p-3 rounded-lg">
                        <div className="flex items-center space-x-2">
                          <Info className="h-4 w-4 text-yellow-600" />
                          <p className="text-yellow-800 text-sm font-medium">
                            Taxa mensal adicional:{" "}
                            {formatPrice(
                              selectedPlans.site.additionalMonthlyFee
                            )}
                            /mês
                          </p>
                        </div>
                        <p className="text-yellow-700 text-xs mt-1">
                          Esta taxa será cobrada mensalmente após a compra
                        </p>
                      </div>
                    )}

                    {/* Cupom de desconto 
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
                      */}

                    {/* Botão de checkout */}
                    <Button
                      onClick={handleCheckout}
                      disabled={
                        isProcessing ||
                        !customerData.name ||
                        !customerData.email
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
                        {selectedPlans.site.features.map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-start space-x-2"
                          >
                            <Check className="h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                )}
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
