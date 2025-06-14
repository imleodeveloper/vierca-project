import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#01152b] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Sobre Nós */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Sobre Nós</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/sobre"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Sobre a VierCa
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Nosso Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Informações */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">
              Informações
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/chatbots"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Preços Chatbots
                </Link>
              </li>
              <li>
                <Link
                  href="/sites"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Preços Sites
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre#feedbacks"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Feedbacks dos Clientes
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos/implementacao-chatbot"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Implementação de Chatbot
                </Link>
              </li>
              <li>
                <Link
                  href="/sobre#tecnologias"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Tecnologias Utilizadas
                </Link>
              </li>
            </ul>
          </div>

          {/* Sites */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Sites</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/servicos/hospedagem"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Onde será hospedado?
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos/sites-wordpress"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Sites em WordPress
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos/landing-page"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Landing Page
                </Link>
              </li>
              <li>
                <Link
                  href="/servicos/e-commerce"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  E-Commerce
                </Link>
              </li>
            </ul>
          </div>

          {/* Suporte */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Suporte</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://wa.me/5511967381402"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Fale Conosco
                </a>
              </li>
              <li>
                <a
                  href="tel:11967381402"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  (11) 96738-1402
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Methods and Social Media */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-300">
                Métodos de Pagamento:
              </span>
              <div className="flex items-center space-x-2">
                <span className="text-xs bg-gray-700 px-2 py-1 rounded">
                  PIX
                </span>
                <span className="text-xs bg-gray-700 px-2 py-1 rounded">
                  BOLETO
                </span>
                <span className="text-xs bg-gray-700 px-2 py-1 rounded">
                  MASTERCARD
                </span>
                <span className="text-xs bg-gray-700 px-2 py-1 rounded">
                  VISA
                </span>
                <span className="text-xs bg-gray-700 px-2 py-1 rounded">
                  HIPERCARD
                </span>
                <span className="text-xs bg-gray-700 px-2 py-1 rounded">
                  ELO
                </span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors"
              >
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Legal Links and Logo */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap items-center space-x-6 text-sm">
              <Link
                href="/termos-de-servico"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Termos de Serviço
              </Link>
              <Link
                href="/politica-de-privacidade"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Política de Privacidade
              </Link>
              <Link
                href="/politica-de-reembolso"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Política de Reembolso
              </Link>
            </div>

            <div className="flex items-center space-x-2">
              <Image
                src="/android-chrome-512x512.png"
                alt="VierCa Logo"
                width={32}
                height={32}
                className="rounded"
              />
              <span className="text-sm font-semibold">VierCa</span>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-sm text-gray-300">
            © 2024 VierCa - Todos os direitos reservados - Desenvolvimento de
            sites com chatbots e sistemas.
          </p>
        </div>
      </div>
    </footer>
  );
}
