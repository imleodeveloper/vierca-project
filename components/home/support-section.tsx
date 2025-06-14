import { Check } from "lucide-react"
import Image from "next/image"

export function SupportSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-black text-[#022041] mb-8">Estamos sempre disponível para lhe atender</h2>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="bg-green-100 rounded-full p-1 mt-1">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-gray-700">Suporte especializado à sua disposição, via e-mail ou WhatsApp.</span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="bg-green-100 rounded-full p-1 mt-1">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-gray-700">
                  Atendimento bilíngue, falamos português e inglês para melhor atender você.
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <div className="bg-green-100 rounded-full p-1 mt-1">
                  <Check className="h-4 w-4 text-green-600" />
                </div>
                <span className="text-gray-700">Suporte ágil, você fala direto com quem entende.</span>
              </li>
            </ul>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <Image
                src="/VierChat-SupportSection.png"
                alt="VierChat Interface"
                width={400}
                height={320}
                className="rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
