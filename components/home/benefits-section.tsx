import { Clock, Globe, Wrench } from "lucide-react"

export function BenefitsSection() {
  return (
    <section className="benefits-section py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-black text-white mb-4">Constância, Agilidade & Eficiência.</h2>
          <h3 className="text-xl text-white/90">
            Tenha um de nossos sites de alta qualidade com chatbots e proporcione uma experiência rápida para seus
            visitantes!
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Clock className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-lg font-bold text-white mb-3">99,9% Online e trabalhando.</h4>
            <p className="text-white/80 text-sm">
              Seu site e chatbot 24/7. Seu site sempre online, trabalhando e prestando suporte aos seus visitantes.
              Evolua o atendimento com o chatbot!
            </p>
          </div>

          <div className="text-center">
            <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Globe className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-lg font-bold text-white mb-3">
              Site responsivo, estruturado para o melhor desempenho e SEO!
            </h4>
            <p className="text-white/80 text-sm">
              Tenha uma presença online eficiente: estrutura pensada para carregar rápido, aparecer no Google e oferecer
              atendimento automatizado.
            </p>
          </div>

          <div className="text-center">
            <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Wrench className="h-8 w-8 text-white" />
            </div>
            <h4 className="text-lg font-bold text-white mb-3">Cuidamos de tudo para você, do site ao chatbot!</h4>
            <p className="text-white/80 text-sm">
              Desenvolvemos e hospedamos seu site do zero, com o chatbot já instalado e funcionando. Você não se
              preocupa com nada técnico — entregamos tudo pronto e otimizado.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
