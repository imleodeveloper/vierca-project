import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Code, Zap, Users } from "lucide-react";

export default function AboutPage() {
  const technologies = [
    "HTML5",
    "CSS3",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "SQL",
    "WordPress",
    "Wix",
    "Nuvemshop",
    "OpenAI",
  ];

  const feedbacks = [
    {
      company: "ALLI Contabilidade",
      text: "Só tenho elogios, a VierCa fez meu site com agilidade, preocupação com os detalhes, caprichoso e ficou lindo do jeito que eu queria!! Parabéns!!",
      rating: 5,
    },
    {
      company: "Meca Importações",
      text: "A VierCa desempenha um excelente trabalho e, eu como cliente e parceiro, recomendo seus serviços. Sem dúvidas se surpreenderão com o resultado!",
      rating: 5,
    },
    {
      company: "Fábio Silva Contabilidade",
      text: "Gostariamos de agradecer a @viercatech por entregar até mais do que imaginávamos em questão de layout do site, ficou perfeito!",
      rating: 5,
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="gradient-bg py-20 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-black mb-6 text-white">
                Sobre a VierCa
              </h1>
              <p className="text-xl text-white/90 mb-8">
                Especializada em desenvolvimento de sites, sistemas e chatbots
                desde dezembro de 2024
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                <div className="text-center">
                  <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Code className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">
                    Tecnologia
                  </h3>
                  <p className="text-white/80 text-sm">
                    Soluções modernas e eficientes
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">
                    Agilidade
                  </h3>
                  <p className="text-white/80 text-sm">
                    Entrega rápida e qualidade
                  </p>
                </div>
                <div className="text-center">
                  <div className="bg-white/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-white">Suporte</h3>
                  <p className="text-white/80 text-sm">Atendimento 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-black text-[#022041] mb-6">
                    Nossa História
                  </h2>
                  <div className="space-y-4 text-gray-700">
                    <p>
                      A VierCa nasceu em dezembro de 2024, criada pela paixão na
                      tecnologia e pela necessidade de oferecer soluções
                      digitais completas e acessíveis para empresas de todos os
                      tamanhos.
                    </p>
                    <p>
                      Somos especialistas em desenvolvimento de sites, sistemas
                      e chatbots, sempre focando na inovação e na satisfação dos
                      nossos clientes. Nossa missão é democratizar o acesso à
                      tecnologia de ponta.
                    </p>
                    <p>
                      Com uma equipe dedicada e apaixonada por tecnologia,
                      oferecemos soluções personalizadas que atendem às
                      necessidades específicas de cada cliente, desde pequenos
                      negócios até grandes empresas.
                    </p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-[#01152b] to-[#1e90ff] rounded-2xl p-8 text-white">
                  <h3 className="text-2xl font-bold mb-6 text-white">
                    Nossos Valores
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start space-x-3">
                      <div className="bg-white/20 rounded-full p-1 mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span>Inovação constante em tecnologia</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="bg-white/20 rounded-full p-1 mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span>Qualidade em cada projeto</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="bg-white/20 rounded-full p-1 mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span>Suporte dedicado e personalizado</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <div className="bg-white/20 rounded-full p-1 mt-1">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                      <span>Transparência em todos os processos</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section id="tecnologias" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-black text-[#022041] mb-6">
                Tecnologias Utilizadas
              </h2>
              <p className="text-lg text-gray-600 mb-12">
                Trabalhamos com as mais modernas tecnologias do mercado
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-12">
                {technologies.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="p-3 text-center border-[#1e90ff] text-[#022041] hover:bg-[#1e90ff] hover:text-white transition-colors"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <Card className="card-hover">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-[#022041] mb-4">
                      Desenvolvimento Web
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Utilizamos HTML5, CSS3, JavaScript, React e Next.js para
                      criar sites modernos, responsivos e otimizados para SEO.
                    </p>
                  </CardContent>
                </Card>
                <Card className="card-hover">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-[#022041] mb-4">
                      Plataformas NoCode
                    </h3>
                    <p className="text-gray-600 text-sm">
                      Também trabalhamos com WordPress, Wix e Nuvemshop para
                      soluções rápidas e eficientes.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Feedbacks */}
        <section id="feedbacks" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-black text-[#022041] text-center mb-12">
                O que nossos clientes dizem
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {feedbacks.map((feedback, index) => (
                  <Card key={index} className="card-hover">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        {[...Array(feedback.rating)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                      <p className="text-gray-700 text-sm mb-4 italic">
                        "{feedback.text}"
                      </p>
                      <p className="font-semibold text-[#022041]">
                        {feedback.company}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="gradient-bg py-20 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-black mb-6 text-white">
              Pronto para começar seu projeto?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Entre em contato conosco e descubra como podemos ajudar sua
              empresa
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5511967381402"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#25D366] hover:bg-[#128C7E] text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Falar no WhatsApp
              </a>
              <a
                href="/chatbots"
                className="bg-white text-[#022041] hover:bg-[#757575] px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Ver Chatbots
              </a>
              <a
                href="/sites"
                className="bg-white text-[#022041] hover:bg-[#757575] px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Ver Sites
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
