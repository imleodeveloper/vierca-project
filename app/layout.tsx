import type React from "react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "@/components/auth-provider";
import { ChatBot } from "@/components/chat-bot";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
});

export const metadata: Metadata = {
  title: "VierCa - Desenvolvimento de Sites com ChatBots",
  description:
    "Especialistas em desenvolvimento de sites, sistemas e chatbots. Soluções completas para sua presença digital.",
  generator: "VierCa",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={`${poppins.className} overflow-x-hidden`}>
        <AuthProvider>
          {children}
          <ChatBot />
        </AuthProvider>
      </body>
    </html>
  );
}
