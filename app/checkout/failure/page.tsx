import { Suspense } from "react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { XCircle, RefreshCw, Mail, Phone } from "lucide-react";
import Link from "next/link";

function FailureContent() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <Card>
            <CardHeader>
              <div className="flex justify-center mb-4">
                <XCircle className="h-16 w-16 text-red-500" />
              </div>
              <CardTitle className="text-2xl text-[#022041]">
                Pagamento Não Realizado
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-gray-600">
                Infelizmente, não foi possível processar seu pagamento. Isso
                pode ter acontecido por diversos motivos.
              </p>

              <div className="bg-red-50 p-4 rounded-lg">
                <h3 className="font-semibold text-red-800 mb-2">
                  Possíveis causas:
                </h3>
                <ul className="text-sm text-red-700 space-y-1 text-left">
                  <li>• Dados do cartão incorretos</li>
                  <li>• Limite insuficiente</li>
                  <li>• Cartão bloqueado ou vencido</li>
                  <li>• Problemas na conexão</li>
                  <li>• Transação rejeitada pelo banco</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-800 mb-2">
                  O que fazer agora:
                </h3>
                <ul className="text-sm text-blue-700 space-y-1 text-left">
                  <li>• Verifique os dados do seu cartão</li>
                  <li>• Tente novamente com outro cartão</li>
                  <li>• Entre em contato com seu banco</li>
                  <li>• Fale conosco se o problema persistir</li>
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
                <Button className="bg-[#1e90ff] hover:bg-[#022041] flex items-center space-x-2 text-white">
                  <RefreshCw className="h-4 w-4" />
                  <span>Tentar Novamente</span>
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

export default function FailurePage() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <FailureContent />
    </Suspense>
  );
}
