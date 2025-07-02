"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  ExternalLink,
  Code,
  Palette,
  Zap,
  Globe,
  BarChart3,
} from "lucide-react";

interface Project {
  id: string;
  title: string;
  client: string;
  category: string;
  date: string;
  dateFormatted: string;
  image: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  features: string[];
  results: string[];
  projectType: string;
  duration: string;
  url?: string;
}

const projects: Project[] = [
  {
    id: "meca-importacoes",
    title: "Meca Importações",
    client: "Importação & Exportação de Componentes Eletrônicos",
    category: "Site Institucional",
    date: "2025-01-16",
    dateFormatted: "16 de Janeiro de 2025",
    image: "/meca-importacoes.webp",
    description:
      "Site institucional moderno para empresa de importações, desenvolvido para apresentar serviços e facilitar contato com clientes.",
    fullDescription:
      "Desenvolvemos um site institucional completo para a Meca Importações, uma empresa especializada em importação de produtos industriais. O projeto foi criado especialmente para o lançamento da empresa, com foco em transmitir credibilidade e profissionalismo no mercado de importações. O site apresenta os serviços da empresa de forma clara e objetiva, facilitando o contato com potenciais clientes e parceiros comerciais.",
    technologies: [
      "React",
      "Swiper Slide",
      "HTML5/CSS3",
      "GSAP",
      "ViaCEP",
      "ReCAPTCHAv2",
    ],
    features: [
      "Design responsivo e moderno",
      "Seção de serviços detalhada",
      "Formulário de contato integrado",
      "Blog para atualizações do setor",
      "Integração com redes sociais",
      "SEO otimizado",
    ],
    results: [
      "Aumento de 100% nas consultas sobre a empresa online",
      "Melhoria na credibilidade da marca",
      "Redução de 50% no tempo de resposta a clientes",
      "Posicionamento no Google para palavras-chave do setor",
    ],
    projectType: "Site Institucional",
    duration: "4 semanas",
    url: "https://mecaimportacoes.com.br",
  },
  {
    id: "alli-contabilidade",
    title: "ALLI Contabilidade",
    client: "Contabilidade",
    category: "Site Institucional",
    date: "2025-01-31",
    dateFormatted: "31 de Janeiro de 2025",
    image: "/alli-contabilidade.webp",
    description:
      "Site institucional moderno para empresa de contabilidade, desenvolvido para apresentar serviços e facilitar contato com clientes.",
    fullDescription:
      "Desenvolvemos um site institucional completo para a ALLI Contabilidade, uma empresa especializada em assessoria contábil. O projeto foi criado especialmente para o lançamento da empresa, com foco em transmitir credibilidade e profissionalismo no mercado de contabilidade. O site apresenta os serviços da empresa de forma clara e objetiva, facilitando o contato com potenciais clientes e parceiros comerciais.",
    technologies: ["React", "Swiper Slide", "HTML5/CSS3"],
    features: [
      "Aumento de 100% nas consultas sobre a empresa online",
      "Seção de serviços detalhada",
      "Formulário de contato integrado",
      "Integração com redes sociais",
      "SEO otimizado",
    ],
    results: [
      "Aumento de 100% nas consultas sobre a empresa online",
      "Melhoria na credibilidade da marca",
      "Redução de 50% no tempo de resposta a clientes",
      "Posicionamento no Google para palavras-chave do setor",
    ],
    projectType: "Site Institucional",
    duration: "3 semanas",
  },
  {
    id: "lustra-omega",
    title: "Lustra Ômega",
    client: "Limpeza Industrial",
    category: "Site Institucional",
    date: "2025-04-14",
    dateFormatted: "14 de Abril de 2025",
    image: "/lustra-omega.webp",
    description:
      "Site institucional otimizado para informar sobre a empresa, para demonstrar credibilidade e profissionalismo.",
    fullDescription:
      "Site institucional moderno para empresa de limpeza industrial, desenvolvido para apresentar serviços e facilitar contato com clientes.",
    technologies: [
      "React",
      "Swiper Slide",
      "HTML5/CSS3",
      "ReCAPTCHAv2",
      "EmailJS",
    ],
    features: [
      "Design responsivo e moderno",
      "Seção de serviços detalhada",
      "Formulário de contato integrado",
      "Integração com redes sociais",
      "SEO otimizado",
      "Blog com informações sobre a área da empresa",
    ],
    results: [
      "Aumento de 100% nas consultas sobre a empresa online",
      "Melhoria na credibilidade da marca",
      "Redução de 50% no tempo de resposta a clientes",
      "Posicionamento no Google para palavras-chave do setor",
    ],
    projectType: "Site Institucional",
    duration: "3 semanas",
  },
  {
    id: "rx-consultoria",
    title: "RX Consultoria",
    client: "Consultoria Dermatológica e Auditoria",
    category: "Site + Venda de Curso",
    date: "2025-04-05",
    dateFormatted: "05 de Abril de 2025",
    image: "/rx-consultoria.webp",
    description: "Site institucional com sistema de venda de cursos integrado.",
    fullDescription:
      "Criamos uma solução completa para a RX Consultoria, combinando site institucional com sistema de vendas dos próprios cursos. O projeto incluiu catálogo de cursos, sistema de pagamentos online e área do cliente para acompanhamento do curso. A solução permitiu ao consultório reduzir dependência de aplicativos de terceiros e aumentar sua margem de lucro.",
    technologies: ["Plataforma WIX"],
    features: [
      "Catálogo de cursos digital",
      "Sistema de pagamentos online",
      "Painel do aluno",
      "Relatórios de vendas",
      "Design responsivo e moderno",
      "Seção de serviços detalhada",
      "Formulário de contato integrado",
      "Integração com redes sociais",
      "SEO otimizado",
    ],
    results: [
      "Redução de 40% nos custos com taxas",
      "Melhoria na credibilidade da marca",
      "Redução de 50% no tempo de resposta a clientes",
      "Posicionamento no Google para palavras-chave do setor",
    ],
    projectType: "Site + Sistema",
    duration: "4 semanas",
  },
  {
    id: "planejamento-e-habitos",
    title: "eBOOK: Agência LVC",
    client: "Agência de Marketing",
    category: "Landing Page",
    date: "2025-05-01",
    dateFormatted: "01 de Maio de 2025",
    image: "/planejamento-e-habitos.webp",
    description:
      "Landing Page desenvolvida para a Agência LVC, onde o principal foco é a conversão de leads.",
    fullDescription:
      "Desenvolvemos uma landing page moderna e interativa, com o principal foco em conversão de visitantes e leads",
    technologies: ["HTML5/CSS3", "JavaScript"],
    features: [
      "Design responsivo e moderno",
      "Seção de serviços detalhada",
      "Formulário de contato integrado",
      "Integração com redes sociais",
      "SEO otimizado",
    ],
    results: [
      "Aumento de 220% em consultas agendadas",
      "Redução de 50% no tempo de atendimento",
      "Melhoria na organização de processos",
      "Aumento de 300% no tráfego orgânico",
    ],
    projectType: "eBook",
    duration: "2 semanas",
  },
  {
    id: "fabio-silva-contabilidade",
    title: "Fábio Silva Contabilidade",
    client: "Contabilidade",
    category: "Site Institucional",
    date: "2025-06-27",
    dateFormatted: "27 de Junho de 2025",
    image: "/fabio-silva-contabilidade.webp",
    description:
      "Site institucional com foco principal em passar credibilidade para seus clientes.",
    fullDescription:
      "Criamos um site institucional, com o layout moderno e responsivo para a Fábio Silva Contabilidade, com o principal intuito de detalhar seus serviços e passar mais credibilidade aos seus clientes.",
    technologies: ["HTML5/CSS3", "JavaScript"],
    features: [
      "Design responsivo e moderno",
      "Seção de serviços detalhada",
      "Formulário de contato integrado",
      "Integração com redes sociais",
      "SEO otimizado",
      "Blog com informações sobre a área da empresa",
    ],
    results: [
      "Aumento de 100% nas consultas sobre a empresa online",
      "Melhoria na credibilidade da marca",
      "Redução de 50% no tempo de resposta a clientes",
      "Posicionamento no Google para palavras-chave do setor",
    ],
    projectType: "Site Institucional",
    duration: "3 semanas",
  },
  {
    id: "eunivida",
    title: "EUNIVIDA",
    client: "Consultoria Dermatológica",
    category: "Landing Page",
    date: "2025-06-27",
    dateFormatted: "27 de Junho de 2025",
    image: "/eunivida.webp",
    description:
      "Landing Page desenvolvido com o intuito de mostrar os serviços do consultorio.",
    fullDescription:
      "Landing Page desenvolvida com um dos principais intuitos em passar mais credibilidade para o cliente. Sobre a empresa, serviços prestados e tudo mais!",
    technologies: ["Plataforma WIX"],
    features: [
      "Design responsivo e moderno",
      "Seção de serviços detalhada",
      "Formulário de contato integrado",
      "Integração com redes sociais",
      "SEO otimizado",
    ],
    results: [
      "Aumento de 100% nas consultas sobre a empresa online",
      "Melhoria na credibilidade da marca",
      "Redução de 50% no tempo de resposta a clientes",
      "Posicionamento no Google para palavras-chave do setor",
    ],
    projectType: "Landing Page",
    duration: "3 semanas",
  },
];

export function RecentProjects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, projects.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) =>
        (prev - 1 + Math.max(1, projects.length - 2)) %
        Math.max(1, projects.length - 2)
    );
  };

  const visibleProjects = projects.slice(currentIndex, currentIndex + 3);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Projetos Recentes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Conheça alguns dos projetos que desenvolvemos recentemente para
            nossos clientes
          </p>
        </div>

        {/* Slider Container */}
        <div className="relative max-w-7xl mx-auto">
          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-[#1e90ff] hover:text-white"
            onClick={prevSlide}
            disabled={projects.length <= 3}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-lg hover:bg-[#1e90ff] hover:text-white"
            onClick={nextSlide}
            disabled={projects.length <= 3}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-3 gap-8 px-12">
            {visibleProjects.map((project) => (
              <Card
                key={project.id}
                className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2"
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />

                  {/* Hover Overlay */}
                  {hoveredProject === project.id && (
                    <div className="absolute inset-0 bg-black bg-opacity-80 flex items-center justify-center transition-opacity duration-300">
                      <div className="text-center text-white p-4">
                        <div className="flex items-center justify-center gap-2 mb-2">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">
                            {project.dateFormatted}
                          </span>
                        </div>
                        <p className="text-sm mb-4">{project.description}</p>
                        <Button
                          size="sm"
                          className="bg-blue-600 hover:bg-blue-700"
                          onClick={() => setSelectedProject(project)}
                        >
                          Ver Mais
                        </Button>
                      </div>
                    </div>
                  )}
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                    <span className="text-xs text-gray-500">
                      {project.dateFormatted}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{project.client}</p>

                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full hover:bg-[#1e90ff] hover:text-white"
                    onClick={() => setSelectedProject(project)}
                  >
                    Ver Detalhes
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Dots Indicator */}
          {projects.length > 3 && (
            <div className="flex justify-center mt-8 gap-2">
              {Array.from({ length: Math.max(1, projects.length - 2) }).map(
                (_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? "bg-blue-600" : "bg-gray-300"
                    }`}
                    onClick={() => setCurrentIndex(index)}
                  />
                )
              )}
            </div>
          )}
        </div>

        {/* Project Details Modal */}
        <Dialog
          open={!!selectedProject}
          onOpenChange={() => setSelectedProject(null)}
        >
          <DialogContent className="bg-gray-300 max-w-2xl max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold">
                    {selectedProject.title}
                  </DialogTitle>
                </DialogHeader>

                <div className="space-y-6">
                  {/* Project Image */}
                  <div className="relative rounded-lg overflow-hidden">
                    <img
                      src={selectedProject.image || "/placeholder.svg"}
                      alt={selectedProject.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-blue-600 text-white hover:bg-blue-800">
                        {selectedProject.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                        <Globe className="w-5 h-5 text-blue-600" />
                        Informações do Projeto
                      </h3>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Cliente:</span>
                          <span className="font-medium">
                            {selectedProject.client}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Tipo:</span>
                          <span className="font-medium">
                            {selectedProject.projectType}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Duração:</span>
                          <span className="font-medium">
                            {selectedProject.duration}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Data:</span>
                          <span className="font-medium">
                            {selectedProject.dateFormatted}
                          </span>
                        </div>
                        {selectedProject.url && (
                          <div className="pt-2">
                            <Button
                              size="sm"
                              variant="outline"
                              asChild
                              className="hover:bg-[#1e90ff] hover:text-white"
                            >
                              <a
                                href={selectedProject.url}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="w-4 h-4 mr-2 " />
                                Visitar Site
                              </a>
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                        <Code className="w-5 h-5 text-green-600" />
                        Tecnologias Utilizadas
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {selectedProject.technologies.map((tech) => (
                          <Badge key={tech} variant="secondary">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <Palette className="w-5 h-5 text-purple-600" />
                      Sobre o Projeto
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {selectedProject.fullDescription}
                    </p>
                  </div>

                  {/* Features */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <Zap className="w-5 h-5 text-orange-600" />
                      Funcionalidades Desenvolvidas
                    </h3>
                    <div className="grid md:grid-cols-2 gap-2">
                      {selectedProject.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full" />
                          <span className="text-sm text-gray-700">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Results */}
                  <div>
                    <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
                      <BarChart3 className="w-5 h-5 text-emerald-600" />
                      Resultados Alcançados
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      {selectedProject.results.map((result, index) => (
                        <div
                          key={index}
                          className="bg-emerald-50 border border-emerald-200 rounded-lg p-3"
                        >
                          <span className="text-sm text-emerald-800 font-medium">
                            {result}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
