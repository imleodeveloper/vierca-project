"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { createClient } from "@supabase/supabase-js";

const languages = [
  { code: "pt", name: "Português", flag: "🇧🇷" },
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
];

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  {
    auth: {
      autoRefreshToken: true,
      persistSession: true,
    },
  }
);

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(languages[0]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userEmail, setUserEmail] = useState<string | null>(null);

  useEffect(() => {
    // Verificar sessão inicial
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      setIsAuthenticated(!!session);
      setUserEmail(session?.user?.email || null);
    };

    checkSession();

    // Listener para mudanças na autenticação
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      setIsAuthenticated(!!session);
      setUserEmail(session?.user?.email || null);
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setIsAuthenticated(false);
    setUserEmail(null);
  };

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center space-x-2 w-20 h-20 relative"
          >
            <Image
              src="/VierCa.png"
              alt="VierCa Logo"
              fill
              className="rounded-lg"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <DropdownMenu>
              <DropdownMenuTrigger
                className="flex items-center space-x-1
                        text-[#022041] hover:text-[#1e90ff] transition-colors cursor-pointer tracking-wide
                        relative
                        px-2 py-1
                        before:absolute after:absolute
                        before:bottom-0 after:bottom-0
                        before:left-0 after:right-0
                        before:h-0.5 after:h-0.5
                        before:bg-black after:bg-black
                        before:w-0 after:w-0
                        hover:before:w-1/2 hover:after:w-1/2
                        before:transition-all after:transition-all
                        before:duration-300 after:duration-300
                        before:content-[''] after:content-['']
                    "
              >
                <span>Explorar</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link
                    href="/sobre"
                    className="
                        text-[#022041] hover:text-[#1e90ff] transition-colors cursor-pointer tracking-wide
                        relative
                        px-2 py-1
                        before:absolute after:absolute
                        before:bottom-0 after:bottom-0
                        before:left-0 after:right-0
                        before:h-0.5 after:h-0.5
                        before:bg-black after:bg-black
                        before:w-0 after:w-0
                        hover:before:w-1/2 hover:after:w-1/2
                        before:transition-all after:transition-all
                        before:duration-300 after:duration-300
                        before:content-[''] after:content-['']
                    "
                  >
                    Sobre a VierCa
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    href="/blog"
                    className="
                        text-[#022041] hover:text-[#1e90ff] transition-colors cursor-pointer tracking-wide
                        relative
                        px-2 py-1
                        before:absolute after:absolute
                        before:bottom-0 after:bottom-0
                        before:left-0 after:right-0
                        before:h-0.5 after:h-0.5
                        before:bg-black after:bg-black
                        before:w-0 after:w-0
                        hover:before:w-1/2 hover:after:w-1/2
                        before:transition-all after:transition-all
                        before:duration-300 after:duration-300
                        before:content-[''] after:content-['']
                    "
                  >
                    Blog
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/chatbots"
              className="
                        text-[#022041] hover:text-[#1e90ff] transition-colors cursor-pointer tracking-wide
                        relative
                        px-2 py-1
                        before:absolute after:absolute
                        before:bottom-0 after:bottom-0
                        before:left-0 after:right-0
                        before:h-0.5 after:h-0.5
                        before:bg-black after:bg-black
                        before:w-0 after:w-0
                        hover:before:w-1/2 hover:after:w-1/2
                        before:transition-all after:transition-all
                        before:duration-300 after:duration-300
                        before:content-[''] after:content-['']
                    "
            >
              Chatbots
            </Link>

            <Link
              href="/sites"
              className="
                        text-[#022041] hover:text-[#1e90ff] transition-colors cursor-pointer tracking-wide
                        relative
                        px-2 py-1
                        before:absolute after:absolute
                        before:bottom-0 after:bottom-0
                        before:left-0 after:right-0
                        before:h-0.5 after:h-0.5
                        before:bg-black after:bg-black
                        before:w-0 after:w-0
                        hover:before:w-1/2 hover:after:w-1/2
                        before:transition-all after:transition-all
                        before:duration-300 after:duration-300
                        before:content-[''] after:content-['']
                    "
            >
              Sites
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger
                className="flex items-center space-x-1
                        text-[#022041] hover:text-[#1e90ff] transition-colors cursor-pointer tracking-wide
                        relative
                        px-2 py-1
                        before:absolute after:absolute
                        before:bottom-0 after:bottom-0
                        before:left-0 after:right-0
                        before:h-0.5 after:h-0.5
                        before:bg-black after:bg-black
                        before:w-0 after:w-0
                        hover:before:w-1/2 hover:after:w-1/2
                        before:transition-all after:transition-all
                        before:duration-300 after:duration-300
                        before:content-[''] after:content-['']
                    "
              >
                <span>Serviços</span>
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link
                    className="
                        text-[#022041] hover:text-[#1e90ff] transition-colors cursor-pointer tracking-wide
                        relative
                        px-2 py-1
                        before:absolute after:absolute
                        before:bottom-0 after:bottom-0
                        before:left-0 after:right-0
                        before:h-0.5 after:h-0.5
                        before:bg-black after:bg-black
                        before:w-0 after:w-0
                        hover:before:w-1/2 hover:after:w-1/2
                        before:transition-all after:transition-all
                        before:duration-300 after:duration-300
                        before:content-[''] after:content-['']
                    "
                    href="/servicos/chatbot"
                  >
                    Chatbot
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    className="
                        text-[#022041] hover:text-[#1e90ff] transition-colors cursor-pointer tracking-wide
                        relative
                        px-2 py-1
                        before:absolute after:absolute
                        before:bottom-0 after:bottom-0
                        before:left-0 after:right-0
                        before:h-0.5 after:h-0.5
                        before:bg-black after:bg-black
                        before:w-0 after:w-0
                        hover:before:w-1/2 hover:after:w-1/2
                        before:transition-all after:transition-all
                        before:duration-300 after:duration-300
                        before:content-[''] after:content-['']
                    "
                    href="/servicos/implementacao-chatbot"
                  >
                    Implementação de Chatbot
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    className="
                        text-[#022041] hover:text-[#1e90ff] transition-colors cursor-pointer tracking-wide
                        relative
                        px-2 py-1
                        before:absolute after:absolute
                        before:bottom-0 after:bottom-0
                        before:left-0 after:right-0
                        before:h-0.5 after:h-0.5
                        before:bg-black after:bg-black
                        before:w-0 after:w-0
                        hover:before:w-1/2 hover:after:w-1/2
                        before:transition-all after:transition-all
                        before:duration-300 after:duration-300
                        before:content-[''] after:content-['']
                    "
                    href="/servicos/sites-wordpress"
                  >
                    Sites em WordPress
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    className="
                        text-[#022041] hover:text-[#1e90ff] transition-colors cursor-pointer tracking-wide
                        relative
                        px-2 py-1
                        before:absolute after:absolute
                        before:bottom-0 after:bottom-0
                        before:left-0 after:right-0
                        before:h-0.5 after:h-0.5
                        before:bg-black after:bg-black
                        before:w-0 after:w-0
                        hover:before:w-1/2 hover:after:w-1/2
                        before:transition-all after:transition-all
                        before:duration-300 after:duration-300
                        before:content-[''] after:content-['']
                    "
                    href="/servicos/landing-page"
                  >
                    Landing Page
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    className="
                        text-[#022041] hover:text-[#1e90ff] transition-colors cursor-pointer tracking-wide
                        relative
                        px-2 py-1
                        before:absolute after:absolute
                        before:bottom-0 after:bottom-0
                        before:left-0 after:right-0
                        before:h-0.5 after:h-0.5
                        before:bg-black after:bg-black
                        before:w-0 after:w-0
                        hover:before:w-1/2 hover:after:w-1/2
                        before:transition-all after:transition-all
                        before:duration-300 after:duration-300
                        before:content-[''] after:content-['']
                    "
                    href="/servicos/ecommerce"
                  >
                    E-Commerce
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link
                    className="
                        text-[#022041] hover:text-[#1e90ff] transition-colors cursor-pointer tracking-wide
                        relative
                        px-2 py-1
                        before:absolute after:absolute
                        before:bottom-0 after:bottom-0
                        before:left-0 after:right-0
                        before:h-0.5 after:h-0.5
                        before:bg-black after:bg-black
                        before:w-0 after:w-0
                        hover:before:w-1/2 hover:after:w-1/2
                        before:transition-all after:transition-all
                        before:duration-300 after:duration-300
                        before:content-[''] after:content-['']
                    "
                    href="/servicos/hospedagem"
                  >
                    Onde Hospedamos?
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              href="/contato"
              className="
                        text-[#022041] hover:text-[#1e90ff] transition-colors cursor-pointer tracking-wide
                        relative
                        px-2 py-1
                        before:absolute after:absolute
                        before:bottom-0 after:bottom-0
                        before:left-0 after:right-0
                        before:h-0.5 after:h-0.5
                        before:bg-black after:bg-black
                        before:w-0 after:w-0
                        hover:before:w-1/2 hover:after:w-1/2
                        before:transition-all after:transition-all
                        before:duration-300 after:duration-300
                        before:content-[''] after:content-['']
                    "
            >
              Contato
            </Link>
          </nav>

          {/* Language Selector and Login */}
          {!isAuthenticated ? (
            <div className="hidden md:flex items-center space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-2 text-[#022041] hover:text-[#1e90ff] transition-colors">
                  <Image
                    src="/brazil-flag.jpg"
                    alt="Brasil"
                    width={20}
                    height={15}
                    className="rounded-sm"
                  />
                  <span>{currentLang.name}</span>
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => setCurrentLang(lang)}
                      className="flex items-center space-x-2"
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Button
                asChild
                variant="outline"
                className="border-[#022041] text-[#022041] hover:bg-[#022041] hover:text-white"
              >
                <Link href="/login">Entrar</Link>
              </Button>
            </div>
          ) : (
            <div className="hidden md:flex items-center space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center space-x-2 text-[#022041] hover:text-[#1e90ff] transition-colors">
                  <Image
                    src="/brazil-flag.jpg"
                    alt="Brasil"
                    width={20}
                    height={15}
                    className="rounded-sm"
                  />
                  <span>{currentLang.name}</span>
                  <ChevronDown className="h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {languages.map((lang) => (
                    <DropdownMenuItem
                      key={lang.code}
                      onClick={() => setCurrentLang(lang)}
                      className="flex items-center space-x-2"
                    >
                      <span>{lang.flag}</span>
                      <span>{lang.name}</span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <Button
                asChild
                variant="outline"
                className="border-[#022041] text-[#022041] hover:bg-[#022041] hover:text-white"
              >
                <Link href="/area-do-cliente">Área do Cliente</Link>
              </Button>
              <Button
                onClick={handleLogout}
                asChild
                variant="outline"
                className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white bg-transparent"
              >
                <span className="cursor-pointer">Sair</span>
              </Button>
            </div>
          )}

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t pt-4">
            <div className="flex flex-col space-y-4">
              {/* Explorar Submenu */}
              <div>
                <p className="font-semibold text-[#022041] mb-2">Explorar</p>
                <div className="pl-4 space-y-2">
                  <Link
                    href="/sobre"
                    className="block text-[#022041] hover:text-[#1e90ff] transition-colors"
                  >
                    Sobre a VierCa
                  </Link>
                  <Link
                    href="/blog"
                    className="block text-[#022041] hover:text-[#1e90ff] transition-colors"
                  >
                    Blog
                  </Link>
                </div>
              </div>

              <Link
                href="/chatbots"
                className="text-[#022041] hover:text-[#1e90ff] transition-colors"
              >
                Chatbots
              </Link>
              <Link
                href="/sites"
                className="text-[#022041] hover:text-[#1e90ff] transition-colors"
              >
                Sites
              </Link>

              {/* Serviços Submenu */}
              <div>
                <p className="font-semibold text-[#022041] mb-2">Serviços</p>
                <div className="pl-4 space-y-2">
                  <Link
                    href="/servicos/chatbot"
                    className="block text-[#022041] hover:text-[#1e90ff] transition-colors"
                  >
                    Chatbot
                  </Link>
                  <Link
                    href="/servicos/implementacao-chatbot"
                    className="block text-[#022041] hover:text-[#1e90ff] transition-colors"
                  >
                    Implementação de Chatbot
                  </Link>
                  <Link
                    href="/servicos/sites-wordpress"
                    className="block text-[#022041] hover:text-[#1e90ff] transition-colors"
                  >
                    Sites em WordPress
                  </Link>
                  <Link
                    href="/servicos/landing-page"
                    className="block text-[#022041] hover:text-[#1e90ff] transition-colors"
                  >
                    Landing Page
                  </Link>
                  <Link
                    href="/servicos/e-commerce"
                    className="block text-[#022041] hover:text-[#1e90ff] transition-colors"
                  >
                    E-Commerce
                  </Link>
                  <Link
                    href="/servicos/hospedagem"
                    className="block text-[#022041] hover:text-[#1e90ff] transition-colors"
                  >
                    Onde Hospedamos?
                  </Link>
                </div>
              </div>

              <Link
                href="/contato"
                className="text-[#022041] hover:text-[#1e90ff] transition-colors"
              >
                Contato
              </Link>

              {!isAuthenticated ? (
                <Button
                  asChild
                  variant="outline"
                  className="w-fit border-[#022041] text-[#022041]"
                >
                  <Link href="/login">Entrar</Link>
                </Button>
              ) : (
                <div className="flex justify-start items-center gap-4">
                  <Button
                    asChild
                    variant="outline"
                    className="w-fit border-[#022041] text-[#022041] hover:bg-[#022041] hover:text-white"
                  >
                    <Link href="/area-do-cliente">Área do Cliente</Link>
                  </Button>

                  <Button
                    onClick={handleLogout}
                    asChild
                    variant="outline"
                    className="w-fit border-red-500 text-red-500 hover:bg-red-500 hover:text-white "
                  >
                    <span className="cursor-pointer">Sair</span>
                  </Button>
                </div>
              )}
            </div>
          </nav>
        )}
      </div>
      <div className="md:hidden flex justify-center pb-4">
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center space-x-2 text-[#022041] hover:text-[#1e90ff] transition-colors">
            <Image
              src="/brazil-flag.jpg"
              alt="Brasil"
              width={35}
              height={20}
              className="rounded-sm"
            />
            <span>{currentLang.name}</span>
            <ChevronDown className="h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            {languages.map((lang) => (
              <DropdownMenuItem
                key={lang.code}
                onClick={() => setCurrentLang(lang)}
                className="flex items-center space-x-2"
              >
                <span>{lang.flag}</span>
                <span>{lang.name}</span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
