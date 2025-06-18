import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PaymentTermsSection } from "@/components/home/payment-terms-section";
import { SiteTypesSection } from "@/components/chatbots/site-types-section";
import { ExpandedPlansSection } from "@/components/chatbots/expanded-plans-section";

export default function PricingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="gradient-bg py-20 text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-5xl font-black mb-6 text-white">
              Sites
            </h1>
            <h2 className="text-2xl font-black mb-6 text-white">
              Preços & Planos
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Desenvolva seu site conosco com planos e serviços acessíveis
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-3xl font-black mb-2">07 dias</div>
                <p className="text-white/80">Garantia</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black mb-2">24/7</div>
                <p className="text-white/80">
                  Atendimento disponível (via chatbot)
                </p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-black mb-2">100%</div>
                <p className="text-white/80">Instalação por nossa conta</p>
              </div>
            </div>
          </div>
        </section>

        <SiteTypesSection />
        <ExpandedPlansSection />
        <PaymentTermsSection />

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-black text-[#022041] text-center mb-12">
                Perguntas Frequentes
              </h2>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold text-[#022041] mb-3">
                    Como funciona a garantia de 07 dias?
                  </h3>
                  <p className="text-gray-700">
                    Todos os nossos planos incluem 07 dias para solicitação de
                    garantia, sem perguntas. Se não ficar satisfeito, devolvemos
                    100% do valor pago.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold text-[#022041] mb-3">
                    O chatbot funciona em qualquer site?
                  </h3>
                  <p className="text-gray-700">
                    Nossos chatbots funcionam em sites WordPress e sites
                    desenvolvidos com tecnologias web modernas (HTML5, CSS3,
                    JavaScript). Entre em contato para verificar
                    compatibilidade.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold text-[#022041] mb-3">
                    Posso parcelar o pagamento?
                  </h3>
                  <p className="text-gray-700">
                    Sim! Aceitamos parcelamento em até 12x no cartão de crédito.
                    Também aceitamos PIX, boleto e outros cartões.
                  </p>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-lg font-bold text-[#022041] mb-3">
                    Como é o suporte técnico?
                  </h3>
                  <p className="text-gray-700">
                    Oferecemos suporte 09:00 às 18:00 via WhatsApp e email.
                    Nossa equipe é especializada e você fala direto com quem
                    entende do assunto.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
