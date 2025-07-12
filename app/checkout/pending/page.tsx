import { Suspense } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, Mail, Phone } from "lucide-react";
import Link from "next/link";

function PendingContent() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <Card>
            <CardHeader>
              <div className="flex justify-center mb-4">
                <Clock className="h-16 w-16 text-yellow-500" />
              </div>
              <CardTitle className="text-2xl text-[#022041]">
                Pagamento em Análise
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-600">
                Seu pagamento está sendo processado. Aguarde a confirmação que
                pode levar alguns minutos.
              </p>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-800 mb-2">
                  Status do Pagamento:
                </h3>
                <ul className="text-sm text-yellow-700 space-y-1 text-left">
                  <li>• Pagamento enviado para análise</li>
                  <li>• Aguardando confirmação do banco</li>
                  <li>• Você receberá um email com o resultado</li>
                  <li>• Tempo estimado: até 2 horas</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">
                  Próximos Passos:
                </h3>
                <ul className="text-sm text-blue-700 space-y-1 text-left">
                  <li>• Aguarde o email de confirmação</li>
                  <li>• Verifique sua caixa de entrada e spam</li>
                  <li>• Em caso de aprovação, entraremos em contato</li>
                  <li>• Se rejeitado, você poderá tentar novamente</li>
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
                    <span>viercatech@gmail.com</span>
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
                <Button
                  asChild
                  className="bg-[#1e90ff] hover:bg-[#022041] text-white"
                >
                  <Link href="/area-do-cliente">Acompanhar Status</Link>
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

export default function PendingPage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <PendingContent />
    </Suspense>
  );
}
