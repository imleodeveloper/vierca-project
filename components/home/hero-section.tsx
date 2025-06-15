import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import Image from "next/image";

export function HeroSection() {
  return (
    <section className="hero-section py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl lg:text-5xl font-black text-[#022041] leading-tight mb-4">
                Tudo o que você precisa para ter seu ChatBot funcionando
              </h1>
              <div className="text-2xl font-bold text-[#1e90ff] mb-6">
                <span className="text-lg text-gray-600">A partir de:</span>
                <br />
                R$ 91,58/mês
              </div>
              <div className="flex items-center gap-5">
                <Button
                  asChild
                  className="bg-[#1e90ff] hover:bg-[#022041] text-white px-8 py-3 text-lg"
                >
                  <Link href="/chatbots">Planos Chatbots</Link>
                </Button>
                <Button
                  asChild
                  className="bg-[#1e90ff] hover:bg-[#022041] text-white px-8 py-3 text-lg"
                >
                  <Link href="/sites">Planos sites</Link>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 rounded-full p-1">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-sm">
                  30 dias para solicitar reembolso
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 rounded-full p-1">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-sm">Suporte aos seus clientes 24h</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 rounded-full p-1">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-sm">Instalação 100% por nossa conta</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 rounded-full p-1">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-sm">Economia de tempo e custo</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 rounded-full p-1">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-sm">Agilidade nas respostas</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="w-full max-w-md h-96 bg-gradient-to-br from-[#01152b] to-[#1e90ff] rounded-2xl flex items-center justify-center relative">
              {/* 
              <div className="text-white text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-10 h-10 bg-white rounded-full"></div>
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">
                  ChatBot VierCa
                </h3>
                <p className="text-white/80">Inteligência Artificial</p>
              </div>
              */}
              <Image src="/page-home.png" alt="" fill />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
