"use client";

import { useState, useEffect, useRef } from "react";
import { X, Send, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Oi! Sou o VierBot 🤖. Como posso te ajudar hoje?",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showFAQ, setShowFAQ] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const faqQuestions = [
    "Quero desenvolver um site com vocês",
    "Quero um chatbot para meu site",
    "Quais planos de desenvolvimento de site e chatbots vocês tem?",
  ];

  const handleFAQClick = async (question: string) => {
    setShowFAQ(false);
    await sendMessage(question);
  };

  const sendMessage = async (messageText: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: messageText,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setIsLoading(true);

    // Adiciona mensagem de loading
    const loadingMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: "...",
      isBot: true,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, loadingMessage]);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userMessage: messageText }),
      });

      const data = await response.json();
      const iaMessage =
        data.response ||
        "Ocorreu um erro com o sistema e não consigo gerar sua resposta.";

      // Remove a mensagem de loading e adiciona a resposta real
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          ...updated[updated.length - 1],
          text: iaMessage,
        };
        return updated;
      });
    } catch (error) {
      console.error("Erro ao chamar IA:", error);
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          ...updated[updated.length - 1],
          text: "Erro ao contactar o servidor de respostas",
        };
        return updated;
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const messageText = inputValue;
    setInputValue("");
    setShowFAQ(false);
    await sendMessage(messageText);
  };

  const resetChat = () => {
    setMessages([
      {
        id: "1",
        text: "Oi! Sou o VierBot 🤖. Como posso te ajudar hoje?",
        isBot: true,
        timestamp: new Date(),
      },
    ]);
    setShowFAQ(true);
    setInputValue("");
  };

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-[#1e90ff] hover:bg-[#022041] text-white shadow-lg z-50 flex items-center justify-center"
          size="icon"
        >
          <div className="w-12 h-12 relative flex justify-center items-center rounded-full overflow-hidden">
            <Image
              src="/vierbot-1-1.webp"
              alt="VierBot - Chatbot com Inteligência Artificial"
              title="Atendimento com o VierBot - Chatbot com Inteligência Artificial"
              fill
              className="object-cover"
            />
          </div>
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 h-96 bg-white rounded-lg shadow-xl border z-50 flex flex-col">
          {/* Header */}
          <div className="bg-[#1e90ff] text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="relative w-8 h-8 bg-white/20 rounded-full flex items-center justify-center overflow-hidden">
                <Image
                  src="/vierbot-1-1.webp"
                  alt="Vierbot - VierChat"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold">VierChat</h4>
                <p className="text-xs text-white/80">Online agora</p>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              <Button
                variant="ghost"
                size="icon"
                onClick={resetChat}
                className="text-white hover:bg-white/20 w-8 h-8"
                title="Reiniciar conversa"
              >
                <RotateCcw className="h-4 w-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 w-8 h-8"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {/* Bot presentation */}
            <div className="flex items-start space-x-2">
              <div className="relative w-8 h-8 bg-[#1e90ff]/10 rounded-full flex items-center justify-center flex-shrink-0 overflow-hidden">
                <Image
                  src="/vierbot-1-1.webp"
                  alt="Vierbot - VierChat"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="bg-gray-100 text-gray-800 p-3 rounded-lg max-w-[80%] text-sm">
                Oi! Sou o VierBot 🤖. Como posso te ajudar hoje?
              </div>
            </div>

            {/* FAQ Questions */}
            {showFAQ && (
              <div className="space-y-2">
                <p className="text-xs text-gray-500 px-2">
                  Perguntas frequentes:
                </p>
                {faqQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleFAQClick(question)}
                    className="w-full text-left p-2 text-sm bg-blue-50 hover:bg-blue-100 text-[#1e90ff] rounded-lg border border-blue-200 transition-colors"
                    disabled={isLoading}
                  >
                    {question}
                  </button>
                ))}
              </div>
            )}

            {/* Chat Messages */}
            {messages.slice(1).map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.isBot ? "justify-start" : "justify-end"
                }`}
              >
                {message.isBot && (
                  <div className="w-8 h-8 bg-[#1e90ff]/10 rounded-full flex items-center justify-center flex-shrink-0 mr-2">
                    <img
                      src="/vierbot-1-1.webp"
                      alt="Vier"
                      className="w-5 h-5"
                    />
                  </div>
                )}
                <div
                  className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    message.isBot
                      ? "bg-gray-100 text-gray-800"
                      : "bg-[#1e90ff] text-white"
                  }`}
                  dangerouslySetInnerHTML={{
                    __html: message.text.replace(
                      /https:\/\/wa\.me\/[^\s]+/g,
                      (url) =>
                        `<a href="${url}" target="_blank" rel="noopener noreferrer" class="underline hover:no-underline">WhatsApp</a>`
                    ),
                  }}
                />
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Como podemos ajudar você?"
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-1"
                disabled={isLoading}
              />
              <Button
                onClick={handleSendMessage}
                size="icon"
                className="bg-[#1e90ff] hover:bg-[#022041]"
                disabled={isLoading || !inputValue.trim()}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              A I.A pode produzir informações imprecisas
            </p>
          </div>
        </div>
      )}
    </>
  );
}
