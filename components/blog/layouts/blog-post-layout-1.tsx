import Link from "next/link";
import { Calendar, User, Clock, ArrowLeft, Share2 } from "lucide-react";
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
}

interface BlogPostLayout1Props {
  post: BlogPost;
}

export function BlogPostLayout1({ post }: BlogPostLayout1Props) {
  return (
    <article className="py-8">
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

      {/* Hero Section */}
      <div className="gradient-bg py-16 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-white/20 text-white border-white/30">
              {post.category}
            </Badge>
            <h1 className="text-4xl lg:text-5xl font-black mb-6 text-white leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              {post.excerpt}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5" />
                </div>
                <span className="font-medium">{post.author}</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center space-x-2 text-white/80">
                <Clock className="h-4 w-4" />
                <span>{post.readTime} de leitura</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <Button
              asChild
              variant="outline"
              className="border-[#1e90ff] text-[#1e90ff]"
            >
              <Link href="/blog">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar ao Blog
              </Link>
            </Button>

            <Button
              variant="outline"
              className="border-[#1e90ff] text-[#1e90ff]"
            >
              <Share2 className="h-4 w-4 mr-2" />
              Compartilhar
            </Button>
          </div>

          {/* Featured Image */}
          <div className="aspect-video bg-gradient-to-br from-[#1e90ff] to-[#022041] rounded-lg flex items-center justify-center mb-12">
            <div className="text-8xl">{post.image}</div>
          </div>

          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none prose-headings:text-[#022041] prose-headings:font-black prose-a:text-[#1e90ff] prose-a:no-underline hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Call to Action */}
          <div className="mt-12 p-8 bg-gradient-to-r from-[#1e90ff] to-[#022041] rounded-lg text-white text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">
              Pronto para implementar um chatbot em seu site?
            </h3>
            <p className="text-white/90 mb-6">
              Nossa equipe especializada pode ajudar você a criar a solução
              perfeita para seu negócio.
            </p>
            <Button
              asChild
              className="bg-white text-[#022041] hover:bg-gray-100"
            >
              <Link href="/contato">Falar com Especialista</Link>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}
