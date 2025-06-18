"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const categories = [
  "Todos os blogs",
  "Chatbot",
  "Desenvolvimento de Sites Codificados",
  "Desenvolvimento de Sites NoCode",
  "E-commerce",
  "SEO",
  "Linguagens de Programação",
  "Design",
  "Tutoriais",
  "Dicas",
];

const blogTitles = [
  {
    title: "React vs Next.js: Qual Escolher para seu Projeto em 2024?",
    slug: "react-vs-nextjs-2024",
    description:
      "Comparação definitiva entre React e Next.js para projetos web em 2024. Entenda as vantagens, limitações, casos de uso ideais, impacto no SEO e performance, além de recomendações práticas para decidir entre flexibilidade total ou um framework mais estruturado. Ideal para desenvolvedores e gestores que buscam alinhar tecnologia com objetivos de negócio.",
  },
  {
    title: "WordPress vs Sites Customizados: Prós e Contras",
    slug: "wordpress-vs-sites-customizados",
    description:
      "Análise completa entre WordPress e sites customizados: prós, contras, custos, manutenção, flexibilidade e segurança. Saiba quando usar WordPress para agilidade e economia, ou quando optar por um site 100% sob medida com tecnologias como Next.js. Ideal para empresas em dúvida sobre qual caminho seguir no desenvolvimento web.",
  },
  {
    title: "CSS3: Animações e Transições que Impressionam",
    slug: "css3-animacoes-transicoes",
    description:
      "Aprenda como criar animações e transições modernas usando apenas CSS3. O artigo cobre desde propriedades básicas como transition até keyframes complexos, com exemplos práticos para botões, cards e loaders. Inclui boas práticas de performance, responsividade, acessibilidade e ferramentas úteis para quem quer elevar o design de interfaces web sem depender de JavaScript.",
  },
  {
    title: "Node.js para Iniciantes: Construindo APIs Robustas",
    slug: "nodejs-apis-robustas",
    description:
      "Guia prático para iniciantes construírem APIs robustas com Node.js e Express. Inclui setup com estrutura modular, middlewares, autenticação JWT, boas práticas de segurança como sanitização e validação de dados, testes com Jest e organização em arquivos escaláveis. Ideal para quem quer criar back-ends modernos, seguros e fáceis de manter.",
  },
  {
    title: "E-commerce: Como Aumentar Conversões com UX",
    slug: "ecommerce-conversoes-ux",
    description:
      "Descubra como otimizar a experiência do usuário (UX) em e-commerces para aumentar conversões. O artigo aborda boas práticas como navegação intuitiva, design responsivo, CTAs eficientes, prova social, checkout simplificado e uso de testes A/B. Repleto de insights aplicáveis para lojas virtuais que buscam melhorar resultados com foco no cliente.",
  },
  {
    title: "SEO Técnico: Otimizações que Realmente Funcionam",
    slug: "seo-tecnico-otimizacoes",
    description:
      "Checklist completo de SEO técnico para 2024 com foco em performance, rastreabilidade e indexação. Aprenda como melhorar Core Web Vitals, estrutura de URLs, sitemap, canonical tags, dados estruturados (JSON-LD), SEO para JavaScript, robots.txt e mais. Essencial para sites que dependem de tráfego orgânico para crescer.",
  },
  {
    title: "Como Implementar um ChatBot com IA em seu Site: Guia Completo 2024",
    slug: "chatbot-ia-guia-completo",
    description:
      "Descubra como revolucionar o atendimento ao cliente do seu site com chatbots inteligentes usando IA. Aprenda o que são chatbots com NLP, os benefícios para seu negócio, tecnologias como GPT e Node.js, e veja um passo a passo completo de análise, desenvolvimento, integração e otimização do bot no seu site. Guia essencial para empresas que querem escalar atendimento e aumentar conversões em 2024.",
  },
];

export function BlogHeader() {
  const [activeCategory, setActiveCategory] = useState("Todos os blogs");
  const [searchQuery, setSearchQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    const foundTitle = blogTitles.find((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const foundDescription = blogTitles.find((post) =>
      post.description.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const foundPost = foundTitle || foundDescription;

    if (foundPost) {
      router.push(`/blog/${foundPost.slug}`);
    } else {
      router.push("/blog/nao-foi-encontrada-a-pesquisa");
    }
  };

  return (
    <section className="gradient-bg py-8">
      <div className="container mx-auto px-4">
        {/* Search and View All */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 space-y-4 md:space-y-0">
          <div className="relative w-full md:w-96">
            <Input
              type="text"
              placeholder="Pesquisar artigos..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleSearch();
              }}
              className="pl-10 bg-white/90 border-white/20 text-gray-800 placeholder:text-gray-500"
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500"
              onClick={handleSearch}
            />
          </div>

          <Button
            variant="outline"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
            onClick={() => router.push("/blog")}
          >
            Visualizar todos os blogs
          </Button>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 md:gap-4">
          {categories.slice(0, 7).map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "secondary" : "ghost"}
              onClick={() => setActiveCategory(category)}
              className={`text-sm ${
                activeCategory === category
                  ? "bg-white text-[#022041] hover:bg-white/90"
                  : "text-white hover:bg-white/10 hover:text-white/100"
              }`}
            >
              {category}
            </Button>
          ))}

          {/* More Categories Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="text-white hover:bg-white/10">
                Mais <ChevronDown className="ml-1 h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {categories.slice(7).map((category) => (
                <DropdownMenuItem
                  key={category}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </section>
  );
}
