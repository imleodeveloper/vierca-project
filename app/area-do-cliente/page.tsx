"use client"

import Link from "next/link"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/components/auth-provider"
import { Calendar, CreditCard, User, LogOut } from "lucide-react"

export default function ClientAreaPage() {
  const { user, isAuthenticated, logout } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login")
    }
  }, [isAuthenticated, router])

  if (!isAuthenticated || !user) {
    return null
  }

  const handleLogout = () => {
    logout()
    router.push("/")
  }

  const calculateDaysRemaining = () => {
    if (!user.planStartDate) return 0
    const startDate = new Date(user.planStartDate)
    const endDate = new Date(startDate)
    endDate.setFullYear(endDate.getFullYear() + 1) // Assuming annual plan
    const today = new Date()
    const diffTime = endDate.getTime() - today.getTime()
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    return Math.max(0, diffDays)
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-3xl font-black text-[#022041] mb-2">Área do Cliente</h1>
                <p className="text-gray-600">Bem-vindo, {user.name}!</p>
              </div>
              <Button
                onClick={handleLogout}
                variant="outline"
                className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
              >
                <LogOut className="h-4 w-4 mr-2" />
                Sair
              </Button>
            </div>

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
                      <strong>Nome:</strong> {user.name}
                    </p>
                    <p>
                      <strong>Email:</strong> {user.email}
                    </p>
                    <p>
                      <strong>ID:</strong> #{user.id}
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
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-[#1e90ff] text-white">{user.plan}</Badge>
                    </div>
                    <p className="text-sm text-gray-600">Plano ativo e funcionando</p>
                    <div className="text-lg font-bold text-green-600">R$ 214,00/mês</div>
                  </div>
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
                  <div className="space-y-2">
                    <p>
                      <strong>Início:</strong> {new Date(user.planStartDate!).toLocaleDateString("pt-BR")}
                    </p>
                    <p>
                      <strong>Renovação:</strong>{" "}
                      {new Date(
                        new Date(user.planStartDate!).setFullYear(new Date(user.planStartDate!).getFullYear() + 1),
                      ).toLocaleDateString("pt-BR")}
                    </p>
                    <div className="text-lg font-bold text-[#1e90ff]">{calculateDaysRemaining()} dias restantes</div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Plan Details */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Detalhes do Plano</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-[#022041] mb-3">Recursos Inclusos:</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Aproximadamente 120.000 conversas no ano</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Escalável e com bom custo-benefício</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Indicado para ecommerces, consultórios, prestadores de serviço</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Incluso desenvolvimento de site</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#022041] mb-3">Suporte:</h4>
                    <div className="space-y-3">
                      <p className="text-sm">
                        <strong>WhatsApp:</strong> (11) 96738-1402
                      </p>
                      <p className="text-sm">
                        <strong>Email:</strong> suporte@vierca.com
                      </p>
                      <p className="text-sm">
                        <strong>Horário:</strong> 24/7
                      </p>
                      <Button asChild className="bg-[#25D366] hover:bg-[#128C7E] text-white">
                        <a href="https://wa.me/5511967381402" target="_blank" rel="noopener noreferrer">
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
                className="border-[#1e90ff] text-[#1e90ff] hover:bg-[#1e90ff] hover:text-white"
              >
                <a href="https://wa.me/5511967381402" target="_blank" rel="noopener noreferrer">
                  Solicitar Suporte
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-[#1e90ff] text-[#1e90ff] hover:bg-[#1e90ff] hover:text-white"
              >
                <Link href="/precos">Alterar Plano</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white"
              >
                <Link href="/politica-de-reembolso">Solicitar Reembolso</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
