import Link from "next/link"
import { Calendar, User, Clock, ArrowLeft, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

interface BlogPost {
  title: string
  excerpt: string
  author: string
  date: string
  readTime: string
  category: string
  image: string
  content: string
}

interface BlogPostLayout2Props {
  post: BlogPost
}

export function BlogPostLayout2({ post }: BlogPostLayout2Props) {
  return (
    <article className="py-8 bg-gray-50">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 mb-6">
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

      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <Button asChild variant="outline" className="border-[#1e90ff] text-[#1e90ff]">
                <Link href="/blog">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Voltar ao Blog
                </Link>
              </Button>

              <Badge className="bg-[#1e90ff] text-white">{post.category}</Badge>
            </div>

            <h1 className="text-4xl lg:text-5xl font-black text-[#022041] mb-6 leading-tight">{post.title}</h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">{post.excerpt}</p>

            <div className="flex flex-wrap items-center gap-6 text-gray-600">
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
              <Button variant="outline" size="sm" className="ml-auto border-[#1e90ff] text-[#1e90ff]">
                <Share2 className="h-4 w-4 mr-2" />
                Compartilhar
              </Button>
            </div>
          </div>

          {/* Content */}
          <div className="bg-white rounded-lg shadow-sm p-8">
            {/* Featured Image */}
            <div className="aspect-video bg-gradient-to-br from-[#1e90ff] to-[#022041] rounded-lg flex items-center justify-center mb-8">
              <div className="text-8xl">{post.image}</div>
            </div>

            {/* Article Content */}
            <div
              className="prose prose-lg max-w-none prose-headings:text-[#022041] prose-headings:font-black prose-a:text-[#1e90ff] prose-a:no-underline hover:prose-a:underline prose-table:text-sm"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </div>

          {/* Related Articles */}
          <div className="mt-12 bg-white rounded-lg shadow-sm p-8">
            <h3 className="text-2xl font-bold text-[#022041] mb-6">Artigos Relacionados</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/blog/css3-animacoes-transicoes" className="group">
                <div className="border rounded-lg p-4 hover:border-[#1e90ff] transition-colors">
                  <h4 className="font-bold text-[#022041] group-hover:text-[#1e90ff] mb-2">
                    CSS3: Animações e Transições que Impressionam
                  </h4>
                  <p className="text-sm text-gray-600">Aprenda a criar animações fluidas usando apenas CSS3...</p>
                </div>
              </Link>
              <Link href="/blog/nodejs-apis-robustas" className="group">
                <div className="border rounded-lg p-4 hover:border-[#1e90ff] transition-colors">
                  <h4 className="font-bold text-[#022041] group-hover:text-[#1e90ff] mb-2">
                    Node.js para Iniciantes: Construindo APIs Robustas
                  </h4>
                  <p className="text-sm text-gray-600">Guia prático para criar APIs escaláveis com Node.js...</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
