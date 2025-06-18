import Link from "next/link";
import {
  Calendar,
  User,
  Clock,
  ArrowLeft,
  Share2,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface BlogPost {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content: string;
  subtitles: string;
}

interface BlogPostLayout3Props {
  post: BlogPost;
}

export function BlogPostLayout3({ post }: BlogPostLayout3Props) {
  return (
    <main className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 pt-8 pb-4">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Link href="/" className="hover:text-[#1e90ff]">
            Home
          </Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-[#1e90ff]">
            Blog
          </Link>
          <span>/</span>
          <span className="text-gray-400">{post.title}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1 order-2 lg:order-1">
            <div className="sticky top-8 space-y-6">
              <Button
                asChild
                variant="outline"
                className="w-full border-[#1e90ff] text-[#1e90ff]"
              >
                <Link href="/blog">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Voltar ao Blog
                </Link>
              </Button>

              <div className="bg-gray-50 rounded-lg p-6">
                <h4 className="font-bold text-[#022041] mb-4 flex items-center">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Neste Artigo
                </h4>
                <nav
                  className="space-y-2 text-sm flex flex-col"
                  dangerouslySetInnerHTML={{ __html: post.subtitles }}
                ></nav>
              </div>

              <div className="bg-[#1e90ff] rounded-lg p-6 text-white">
                <h4 className="font-bold mb-3">Precisa de Ajuda?</h4>
                <p className="text-sm text-white/90 mb-4">
                  Nossa equipe pode ajudar você a escolher a melhor solução para
                  seu projeto.
                </p>
                <Button
                  asChild
                  className="w-full bg-white text-[#1e90ff] hover:bg-gray-100"
                >
                  <Link href="/contato">Falar Conosco</Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 order-1 lg:order-2">
            <article>
              {/* Header */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <Badge className="bg-[#1e90ff] text-white">
                    {post.category}
                  </Badge>
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-[#1e90ff] text-[#1e90ff]"
                  >
                    <Share2 className="h-4 w-4 mr-2" />
                    Compartilhar
                  </Button>
                </div>

                <h1 className="text-4xl lg:text-5xl font-black text-[#022041] mb-6 leading-tight">
                  {post.title}
                </h1>

                <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                  {post.excerpt}
                </p>

                <div className="flex flex-wrap items-center gap-6 text-gray-600 pb-6 border-b">
                  <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-[#1e90ff] rounded-full flex items-center justify-center">
                      <User className="h-4 w-4 text-white" />
                    </div>
                    <span className="font-medium">{post.author}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime} de leitura</span>
                  </div>
                </div>
              </div>

              {/* Featured Image */}
              <div className="aspect-video bg-gradient-to-br from-[#1e90ff] to-[#022041] rounded-lg flex items-center justify-center mb-8">
                <div className="text-8xl">{post.image}</div>
              </div>

              {/* Article Content */}
              <div
                className="prose prose-lg max-w-none prose-headings:text-[#022041] prose-headings:font-black prose-a:text-[#1e90ff] prose-a:no-underline hover:prose-a:underline prose-table:text-sm"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Author Bio */}
              <div className="mt-12 p-6 bg-gray-50 rounded-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-[#1e90ff] rounded-full flex items-center justify-center">
                    <User className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[#022041] mb-2">
                      Equipe VierCa
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Nossa equipe de especialistas em desenvolvimento web está
                      sempre criando conteúdo útil para ajudar empresas a tomar
                      as melhores decisões tecnológicas.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </main>
  );
}
