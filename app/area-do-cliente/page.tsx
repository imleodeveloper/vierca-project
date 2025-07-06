"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  User,
  Mail,
  Phone,
  CreditCard,
  Calendar,
  Settings,
  LogOut,
  Crown,
  AlertCircle,
} from "lucide-react";
import { createClient } from "@supabase/supabase-js";
import { toast } from "@/hooks/use-toast";

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

interface UserData {
  id: string;
  email: string;
  full_name: string | null;
  phone: string | null;
  plan_name: string | null;
  plan_price: number | null;
  plan_description: string | null;
  plan_features: string[];
  plan_start_date: string | null;
  plan_status: string | null;
}

export default function AreaDoClientePage() {
  const router = useRouter();
  const [userData, setUserData] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const {
          data: { session },
          error: sessionError,
        } = await supabase.auth.getSession();

        if (sessionError || !session) {
          router.push("/login?redirect=/area-do-cliente");
          return;
        }

        // Buscar dados do usuário usando a API
        const response = await fetch("/api/auth/area-do-cliente", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session.access_token}`,
          },
        });

        if (!response.ok) {
          throw new Error("Erro ao buscar dados do usuário");
        }

        const data = await response.json();
        setUserData(data.user);
      } catch (err) {
        console.error("Erro ao carregar dados:", err);
        setError("Erro ao carregar dados do usuário");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [router]);

  const handleLogout = async () => {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) {
        console.error("Erro ao fazer logout:", error);
        toast({
          title: "Erro ao sair",
          description: "Ocorreu um erro ao fazer logout",
          variant: "destructive",
        });
      } else {
        toast({
          title: "Logout realizado",
          description: "Você foi desconectado com sucesso",
        });
        router.push("/");
      }
    } catch (err) {
      console.error("Erro no logout:", err);
      toast({
        title: "Erro ao sair",
        description: "Ocorreu um erro inesperado",
        variant: "destructive",
      });
    }
  };

  const formatDate = (dateString: string | null) => {
    if (!dateString) return "N/A";
    return new Date(dateString).toLocaleDateString("pt-BR");
  };

  const formatPrice = (price: number | null) => {
    if (!price) return "N/A";
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1e90ff] mx-auto mb-4"></div>
            <p className="text-gray-600">Carregando seus dados...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="container mx-auto px-4 py-20">
          <div className="text-center">
            <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-red-600 mb-2">Erro</h1>
            <p className="text-gray-600 mb-4">{error}</p>
            <Button onClick={() => window.location.reload()}>
              Tentar novamente
            </Button>
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
          {/* Header da área do cliente */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-[#022041]">
                Área do Cliente
              </h1>
              <p className="text-gray-600">
                Bem-vindo, {userData?.full_name || userData?.email}!
              </p>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="text-red-600 border-red-200 bg-transparent hover:bg-red-500 hover:text-white"
            >
              <LogOut className="h-4 w-4 mr-2" />
              Sair
            </Button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Informações do Usuário */}
            <div className="lg:col-span-2 space-y-6">
              {/* Dados Pessoais */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-[#022041]">
                    <User className="h-5 w-5 mr-2" />
                    Dados Pessoais
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-4 w-4 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-600">Email</p>
                        <p className="font-medium">{userData?.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <User className="h-4 w-4 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-600">Nome Completo</p>
                        <p className="font-medium">
                          {userData?.full_name || "Não informado"}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Phone className="h-4 w-4 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-600">Telefone</p>
                        <p className="font-medium">
                          {userData?.phone || "Não informado"}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Settings className="h-4 w-4 text-gray-400" />
                      <div>
                        <p className="text-sm text-gray-600">ID do Usuário</p>
                        <p className="font-medium text-xs text-gray-500">
                          {userData?.id}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Plano Atual */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-[#022041]">
                    <Crown className="h-5 w-5 mr-2" />
                    Plano Atual
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {userData?.plan_name ? (
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-[#1e90ff]">
                            {userData.plan_name}
                          </h3>
                          <p className="text-gray-600">
                            {userData.plan_description}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-[#1e90ff]">
                            {formatPrice(userData.plan_price)}
                          </p>
                          <Badge
                            className={
                              userData.plan_status === "active"
                                ? "bg-green-100 text-green-800"
                                : "bg-red-100 text-red-800"
                            }
                          >
                            {userData.plan_status === "active"
                              ? "Ativo"
                              : "Inativo"}
                          </Badge>
                        </div>
                      </div>

                      <Separator />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="flex items-center space-x-3">
                          <Calendar className="h-4 w-4 text-gray-400" />
                          <div>
                            <p className="text-sm text-gray-600">
                              Data de Início
                            </p>
                            <p className="font-medium">
                              {formatDate(userData.plan_start_date)}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CreditCard className="h-4 w-4 text-gray-400" />
                          <div>
                            <p className="text-sm text-gray-600">Status</p>
                            <p className="font-medium">
                              {userData.plan_status === "active"
                                ? "Ativo"
                                : "Inativo"}
                            </p>
                          </div>
                        </div>
                      </div>

                      {userData.plan_features &&
                        userData.plan_features.length > 0 && (
                          <>
                            <Separator />
                            <div>
                              <h4 className="font-semibold text-[#022041] mb-2">
                                Recursos Inclusos:
                              </h4>
                              <ul className="space-y-1">
                                {userData.plan_features.map(
                                  (feature, index) => (
                                    <li
                                      key={index}
                                      className="flex items-start space-x-2 text-sm"
                                    >
                                      <div className="h-1.5 w-1.5 bg-[#1e90ff] rounded-full mt-2 flex-shrink-0"></div>
                                      <span>{feature}</span>
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>
                          </>
                        )}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <Crown className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-gray-600 mb-2">
                        Nenhum plano ativo
                      </h3>
                      <p className="text-gray-500 mb-4">
                        Você ainda não possui um plano ativo. Escolha um plano
                        para começar!
                      </p>
                      <Button
                        onClick={() => router.push("/")}
                        className="bg-[#1e90ff] hover:bg-[#022041] text-white"
                      >
                        Ver Planos Disponíveis
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Sidebar com ações rápidas */}
            <div className="space-y-6">
              {/* Ações Rápidas */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#022041]">
                    Ações Rápidas
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent hover:bg-gray-300"
                    onClick={() => router.push("/")}
                  >
                    <Crown className="h-4 w-4 mr-2" />
                    Ver Planos
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent hover:bg-gray-300"
                    onClick={() => router.push("/contato")}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Suporte
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full justify-start bg-transparent hover:bg-gray-300"
                    onClick={() => router.push("/blog")}
                  >
                    <Settings className="h-4 w-4 mr-2" />
                    Blog
                  </Button>
                </CardContent>
              </Card>

              {/* Informações de Suporte */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-[#022041]">
                    Precisa de Ajuda?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 mb-4">
                    Nossa equipe está pronta para ajudar você com qualquer
                    dúvida ou problema.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4 text-[#1e90ff]" />
                      <span>viercatech@gmail.com</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4 text-[#1e90ff]" />
                      <span>(11) 96738-1402</span>
                    </div>
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
