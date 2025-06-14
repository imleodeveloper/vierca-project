import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BlogHeader } from "@/components/blog/blog-header"
import { FeaturedPost } from "@/components/blog/featured-post"
import { MainPosts } from "@/components/blog/main-posts"
import { BlogCategories } from "@/components/blog/blog-categories"

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <BlogHeader />
      <main className="bg-gray-50">
        <FeaturedPost />
        <MainPosts />
        <BlogCategories />
      </main>
      <Footer />
    </div>
  )
}
