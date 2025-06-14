import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const categories = [
  {
    name: "Desenvolvimento de Sites Codificado",
    description: "HTML5, CSS3, JavaScript, React, Next.js, Node.js",
    count: 25,
    icon: "💻",
    color: "bg-blue-50 border-blue-200",
  },
  {
    name: "Desenvolvimento de Sites NoCode",
    description: "WordPress, Wix, Shopify e plataformas visuais",
    count: 15,
    icon: "🎨",
    color: "bg-purple-50 border-purple-200",
  },
  {
    name: "Chatbot",
    description: "Inteligência artificial e automação",
    count: 12,
    icon: "🤖",
    color: "bg-cyan-50 border-cyan-200",
  },
  {
    name: "E-commerce",
    description: "Lojas virtuais e vendas online",
    count: 18,
    icon: "🛒",
    color: "bg-green-50 border-green-200",
  },
  {
    name: "SEO",
    description: "Otimização para mecanismos de busca",
    count: 10,
    icon: "📈",
    color: "bg-yellow-50 border-yellow-200",
  },
  {
    name: "Design",
    description: "UX/UI e experiência do usuário",
    count: 8,
    icon: "🎯",
    color: "bg-pink-50 border-pink-200",
  },
]

export function BlogCategories() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-black text-[#022041] mb-8 text-center">Categorias</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category) => (
              <Link key={category.name} href={`/blog/categoria/${category.name.toLowerCase()}`}>
                <Card className={`${category.color} card-hover border-2 h-full`}>
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h3 className="text-lg font-bold text-[#022041] mb-2">{category.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{category.description}</p>
                    <div className="text-xs text-gray-500">{category.count} artigos</div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
