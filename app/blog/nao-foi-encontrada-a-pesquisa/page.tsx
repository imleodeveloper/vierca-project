import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BlogHeader } from "@/components/blog/blog-header";
import { BlogCategories } from "@/components/blog/blog-categories";
import { MainNotFoundBlog } from "@/components/blog/not-found-blog/main-not-found-blog";

export default function NotFoundBlogPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <BlogHeader />
      <main className="bg-gray-50">
        <MainNotFoundBlog />
        <BlogCategories />
      </main>
      <Footer />
    </div>
  );
}
