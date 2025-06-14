import Link from "next/link"
import { Calendar, User } from "lucide-react"

export function FeaturedPost() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-sm text-gray-500 mb-4 uppercase tracking-wide">Publicação em Destaque</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="relative">
              <div className="aspect-video bg-gradient-to-br from-[#1e90ff] to-[#022041] rounded-lg flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl font-bold mb-4">🤖</div>
                  <h3 className="text-2xl font-bold">VierChat</h3>
                  <p className="text-white/80">Inteligência Artificial</p>
                </div>
              </div>
            </div>

            <div>
              <h1 className="text-3xl lg:text-4xl font-black text-[#022041] mb-4 leading-tight">
                Como Implementar um ChatBot com IA em seu Site: Guia Completo 2024
              </h1>

              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Descubra como revolucionar o atendimento ao cliente do seu site com chatbots inteligentes. Aprenda sobre
                integração com OpenAI, configuração avançada e as melhores práticas para maximizar conversões e
                satisfação do cliente.
              </p>

              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-[#1e90ff] rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-gray-700">Equipe VierCa</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-500">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">15 Dez, 2024</span>
                </div>
              </div>

              <Link
                href="/blog/chatbot-ia-guia-completo"
                className="inline-block bg-[#1e90ff] hover:bg-[#022041] text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Ler artigo completo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
