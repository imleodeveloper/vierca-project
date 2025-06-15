"use client";

import { useState } from "react";
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

export function BlogHeader() {
  const [activeCategory, setActiveCategory] = useState("Todos os blogs");
  const [searchQuery, setSearchQuery] = useState("");

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
              className="pl-10 bg-white/90 border-white/20 text-gray-800 placeholder:text-gray-500"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
          </div>

          <Button
            variant="outline"
            className="bg-white/10 border-white/20 text-white hover:bg-white/20"
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
