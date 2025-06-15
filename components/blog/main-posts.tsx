import Link from "next/link";
import { Calendar, User, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const blogPosts = [
  {
    id: 1,
    title: "React vs Next.js: Qual Escolher para seu Projeto em 2024?",
    excerpt:
      "Comparação detalhada entre React e Next.js, suas vantagens, desvantagens e quando usar cada um para desenvolvimento web moderno.",
    category: "Linguagens de Programação",
    author: "Equipe VierCa",
    date: "12 Dez, 2024",
    readTime: "8 min",
    image: "🚀",
    featured: true,
    link: "/blog/react-vs-nextjs-2024",
  },
  {
    id: 2,
    title: "WordPress vs Sites Customizados: Prós e Contras",
    excerpt:
      "Análise completa sobre quando escolher WordPress ou desenvolvimento customizado para seu projeto web.",
    category: "Desenvolvimento de Sites NoCode",
    author: "Equipe VierCa",
    date: "10 Dez, 2024",
    readTime: "6 min",
    image: "🌐",
    link: "/blog/wordpress-vs-sites-customizados",
  },
  {
    id: 3,
    title: "CSS3: Animações e Transições que Impressionam",
    excerpt:
      "Aprenda a criar animações fluidas e transições elegantes usando apenas CSS3, sem JavaScript.",
    category: "Design",
    author: "Equipe VierCa",
    date: "8 Dez, 2024",
    readTime: "10 min",
    image: "🎨",
    link: "/blog/css3-animacoes-transicoes",
  },
  {
    id: 4,
    title: "Node.js para Iniciantes: Construindo APIs Robustas",
    excerpt:
      "Guia prático para criar APIs escaláveis com Node.js, Express e melhores práticas de desenvolvimento.",
    category: "Desenvolvimento de Sites Codificados",
    author: "Equipe VierCa",
    date: "5 Dez, 2024",
    readTime: "12 min",
    image: "⚡",
    link: "/blog/nodejs-apis-robustas",
  },
  {
    id: 5,
    title: "E-commerce: Como Aumentar Conversões com UX",
    excerpt:
      "Estratégias de UX/UI comprovadas para aumentar vendas em lojas virtuais e melhorar a experiência do usuário.",
    category: "Design",
    author: "Equipe VierCa",
    date: "3 Dez, 2024",
    readTime: "7 min",
    image: "🛒",
    link: "/blog/ecommerce-conversoes-ux",
  },
  {
    id: 6,
    title: "SEO Técnico: Otimizações que Realmente Funcionam",
    excerpt:
      "Técnicas avançadas de SEO técnico para melhorar o ranking do seu site nos mecanismos de busca.",
    category: "SEO",
    author: "Equipe VierCa",
    date: "1 Dez, 2024",
    readTime: "9 min",
    image: "📈",
    link: "/blog/seo-tecnico-otimizacoes",
  },
];

export function MainPosts() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black text-[#022041] mb-8">
            Principais Publicações
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="card-hover border-0 shadow-md">
                <div className="relative">
                  <div className="aspect-video bg-gradient-to-br from-[#1e90ff] to-[#022041] rounded-t-lg flex items-center justify-center">
                    <div className="text-6xl">{post.image}</div>
                  </div>
                  {post.featured && (
                    <Badge className="absolute top-3 left-3 bg-[#1e90ff] text-white">
                      Destaque
                    </Badge>
                  )}
                </div>

                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <Badge
                      variant="outline"
                      className="text-xs border-[#1e90ff] text-[#1e90ff]"
                    >
                      {post.category}
                    </Badge>
                    <div className="flex items-center space-x-1 text-gray-500 text-xs">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-[#022041] mb-3 line-clamp-2 leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-[#1e90ff] rounded-full flex items-center justify-center">
                        <User className="h-3 w-3 text-white" />
                      </div>
                      <span className="text-xs text-gray-600">
                        {post.author}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1 text-gray-500 text-xs">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                  </div>

                  <Link
                    href={`${post.link}`}
                    className="block mt-4 text-[#1e90ff] hover:text-[#022041] font-medium text-sm transition-colors"
                  >
                    Ler mais →
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* 
          <div className="text-center mt-12">
            <Link
              href="/blog/todos"
              className="inline-block bg-[#1e90ff] hover:bg-[#022041] text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Ver todos os artigos
            </Link>
          </div>
          */}
        </div>
      </div>
    </section>
  );
}
