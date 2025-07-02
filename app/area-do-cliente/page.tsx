"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/navigation";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  CreditCard,
  User,
  LogOut,
  AlertCircle,
  ShoppingCart,
} from "lucide-react";
import { createClient } from "@supabase/supabase-js";
import { CartSidebar } from "@/components/cart-sidebar";

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

type UserData = {
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
};

export default function ClientAreaPage() {
  const router = useRouter();
  const [user, setUser] = useState<UserData | null>(null);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const hasFetched = useRef(false);

  const fetchUser = async () => {
    // Evita múltiplas chamadas desnecessárias
    if (hasFetched.current) return;

    setIsLoading(true);
    setError("");

    try {
      // Verifica a sessão
      const {
        data: { session },
        error: sessionError,
      } = await supabase.auth.getSession();

      if (sessionError || !session) {
        console.log("Sessão não encontrada:", sessionError?.message);
        setError("Sessão não encontrada. Faça login novamente.");
        router.push("/login");
        return;
      }

      // Chama a API para obter dados adicionais do usuário
      const response = await fetch("/api/auth/area-do-cliente", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${session.access_token}`,
        },
      });

      const result = await response.json();

      if (!response.ok || result.error) {
        setError(result.error || "Erro ao buscar dados do usuário");
        if (response.status === 401) {
          router.push("/login");
        }
        return;
      }

      setUser(result.user);
      hasFetched.current = true;
    } catch (err) {
      console.error("Erro no fetch:", err);
      setError("Erro ao conectar com o servidor");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  // Listener para mudanças na sessão - removido para evitar recarregamentos
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_OUT" || !session) {
        router.push("/login");
      }
      // Removido o SIGNED_IN para evitar recarregamento ao trocar de aba
    });

    return () => subscription.unsubscribe();
  }, [router]);

  // Previne recarregamento ao focar na janela
  useEffect(() => {
    const handleFocus = () => {
      // Não faz nada - evita recarregamento ao voltar para a aba
    };

    const handleVisibilityChange = () => {
      // Não faz nada - evita recarregamento ao trocar de aba
    };

    window.addEventListener("focus", handleFocus);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("focus", handleFocus);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      setUser(null);
      hasFetched.current = false;
      router.push("/");
    } catch (err) {
      console.error("Erro ao fazer logout:", err);
    }
  };

  const calculateDaysRemaining = () => {
    if (!user?.plan_start_date) return 0;
    const startDate = new Date(user.plan_start_date);
    const endDate = new Date(startDate);
    endDate.setFullYear(endDate.getFullYear() + 1); // Assumindo plano anual
    const today = new Date();
    const diffTime = endDate.getTime() - today.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return Math.max(0, diffDays);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("pt-BR");
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1e90ff] mx-auto"></div>
              <p className="mt-4 text-gray-600">Carregando...</p>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error && !user) {
    return (
      <div className="min-h-screen">
        <Header />
        <main className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <AlertCircle className="h-12 w-12 text-red-500 mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-red-600 mb-2">
                Erro de Acesso
              </h1>
              <p className="text-gray-600 mb-4">{error}</p>
              <Button
                onClick={() => router.push("/login")}
                className="bg-[#1e90ff] hover:bg-[#022041]"
              >
                Fazer Login
              </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-black text-[#022041] mb-2">
                  Área do Cliente
                </h1>
                <p className="text-gray-600">
                  Bem-vindo, {user.full_name || user.email}!
                </p>
              </div>
              <Button
                onClick={handleLogout}
                variant="outline"
                className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white bg-transparent"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sair
              </Button>
            </div>

            {error && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600">{error}</p>
              </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* User Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <User className="h-5 w-5 text-[#1e90ff]" />
                    <span>Informações Pessoais</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <p>
                      <strong>Nome:</strong> {user.full_name || "Não informado"}
                    </p>
                    <p>
                      <strong>Email:</strong> {user.email}
                    </p>
                    <p>
                      <strong>Telefone:</strong> {user.phone || "Não informado"}
                    </p>
                    <p>
                      <strong>ID:</strong> #{user.id.slice(0, 8)}...
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Current Plan */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <CreditCard className="h-5 w-5 text-[#1e90ff]" />
                    <span>Plano Atual</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {user.plan_name ? (
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Badge className="bg-[#1e90ff] text-white">
                          {user.plan_name}
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">
                        {user.plan_description || "Plano ativo e funcionando"}
                      </p>
                      {user.plan_price && (
                        <div className="text-lg font-bold text-green-600">
                          {formatPrice(user.plan_price)}
                        </div>
                      )}
                    </div>
                  ) : (
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Badge
                          variant="outline"
                          className="border-gray-400 text-gray-600"
                        >
                          Nenhum Plano
                        </Badge>
                      </div>
                      <p className="text-sm text-gray-600">
                        Você ainda não possui um plano ativo.
                      </p>
                      <Button
                        onClick={() => setIsCartOpen(true)}
                        size="sm"
                        className="bg-[#1e90ff] text-white hover:bg-[#022041]"
                      >
                        <ShoppingCart className="h-4 w-4 mr-1" />
                        Contratar Plano
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Plan Duration */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Calendar className="h-5 w-5 text-[#1e90ff]" />
                    <span>Período do Contrato</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {user.plan_start_date ? (
                    <div className="space-y-2">
                      <p>
                        <strong>Início:</strong>{" "}
                        {formatDate(user.plan_start_date)}
                      </p>
                      <p>
                        <strong>Renovação:</strong>{" "}
                        {formatDate(
                          new Date(
                            new Date(user.plan_start_date).setFullYear(
                              new Date(user.plan_start_date).getFullYear() + 1
                            )
                          ).toISOString()
                        )}
                      </p>
                      <div className="text-lg font-bold text-[#1e90ff]">
                        {calculateDaysRemaining()} dias restantes
                      </div>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <p className="text-sm text-gray-600">
                        Nenhum contrato ativo no momento.
                      </p>
                      <Button
                        onClick={() => setIsCartOpen(true)}
                        size="sm"
                        className="bg-[#1e90ff] text-white hover:bg-[#022041]"
                      >
                        <ShoppingCart className="h-4 w-4 mr-1" />
                        Contratar Plano
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Plan Details */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>
                  {user.plan_name
                    ? "Detalhes do Plano"
                    : "Recursos Disponíveis"}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-[#022041] mb-3">
                      {user.plan_name
                        ? "Recursos Inclusos:"
                        : "Recursos dos Nossos Planos:"}
                    </h4>
                    <ul className="space-y-2 text-sm">
                      {user.plan_features && user.plan_features.length > 0 ? (
                        user.plan_features.map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-center space-x-2"
                          >
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <span>{feature}</span>
                          </li>
                        ))
                      ) : (
                        <>
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span>
                              Aproximadamente 120.000 conversas no ano
                            </span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span>Escalável e com bom custo-benefício</span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span>
                              Indicado para ecommerces, consultórios,
                              prestadores de serviço
                            </span>
                          </li>
                          <li className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <span>Incluso desenvolvimento de site</span>
                          </li>
                        </>
                      )}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#022041] mb-3">
                      Suporte:
                    </h4>
                    <div className="space-y-3">
                      <p className="text-sm">
                        <strong>WhatsApp:</strong> (11) 96738-1402
                      </p>
                      <p className="text-sm">
                        <strong>Email:</strong> vierca@gmail.com
                      </p>
                      <p className="text-sm">
                        <strong>Horário:</strong> 09:00 às 18:00 - Seg à Sex
                      </p>
                      <Button
                        asChild
                        className="bg-[#25D366] hover:bg-[#128C7E] text-white"
                      >
                        <a
                          href="https://wa.me/5511967381402"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Falar no WhatsApp
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button
                asChild
                variant="outline"
                className="border-[#1e90ff] text-[#1e90ff] hover:bg-[#1e90ff] hover:text-white bg-transparent"
              >
                <a
                  href="https://wa.me/5511967381402"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Solicitar Suporte
                </a>
              </Button>
              <Button
                onClick={() => setIsCartOpen(true)}
                variant="outline"
                className="border-[#1e90ff] text-[#1e90ff] hover:bg-[#1e90ff] hover:text-white bg-transparent"
              >
                <ShoppingCart className="h-4 w-4 mr-1" />
                {user.plan_name ? "Alterar Plano" : "Ver Planos"}
              </Button>
              {user.plan_name && (
                <Button
                  asChild
                  variant="outline"
                  className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white bg-transparent"
                >
                  <Link href="/politica-de-reembolso">Solicitar Reembolso</Link>
                </Button>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />

      {/* Cart Sidebar */}
      <CartSidebar isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </div>
  );
}
