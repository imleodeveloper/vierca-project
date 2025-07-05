import { Suspense } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Mail, Phone } from "lucide-react";
import Link from "next/link";

function SuccessContent() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <Card>
            <CardHeader>
              <div className="flex justify-center mb-4">
                <CheckCircle className="h-16 w-16 text-green-500" />
              </div>
              <CardTitle className="text-2xl text-[#022041]">
                Pagamento Realizado com Sucesso!
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-600">
                Obrigado por escolher a VierCa Tech! Seu pagamento foi
                processado com sucesso.
              </p>

              <div className="bg-green-50 p-4 rounded-lg">
                <h3 className="font-semibold text-green-800 mb-2">
                  Próximos Passos:
                </h3>
                <ul className="text-sm text-green-700 space-y-1 text-left">
                  <li>• Você receberá um email de confirmação em breve</li>
                  <li>• Nossa equipe entrará em contato em até 24 horas</li>
                  <li>• O desenvolvimento será iniciado conforme acordado</li>
                  <li>• Você terá acesso ao painel do cliente</li>
                </ul>
              </div>

              <div className="border-t pt-6">
                <h3 className="font-semibold text-[#022041] mb-4">
                  Precisa de ajuda?
                </h3>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="outline"
                    className="flex items-center space-x-2 bg-transparent"
                  >
                    <Mail className="h-4 w-4" />
                    <span>contato@vierca.com.br</span>
                  </Button>
                  <Button
                    variant="outline"
                    className="flex items-center space-x-2 bg-transparent"
                  >
                    <Phone className="h-4 w-4" />
                    <span>(11) 96738-1402</span>
                  </Button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                <Button asChild className="bg-[#1e90ff] hover:bg-[#022041]">
                  <Link href="/area-do-cliente">Acessar Área do Cliente</Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/">Voltar ao Início</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function SuccessPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <SuccessContent />
    </Suspense>
  );
}
