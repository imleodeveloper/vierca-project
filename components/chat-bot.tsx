"use client"

import { useState } from "react"
import { MessageCircle, X, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useAuth } from "@/components/auth-provider"

interface Message {
  id: string
  text: string
  isBot: boolean
  timestamp: Date
}

export function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Olá! Sou o VierChat, seu assistente virtual. Como posso ajudá-lo hoje?",
      isBot: true,
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const { isAuthenticated } = useAuth()

  // Only show chatbot if user is authenticated
  if (!isAuthenticated) {
    return null
  }

  const handleSendMessage = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isBot: false,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(inputValue),
        isBot: true,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botResponse])
    }, 1000)
  }

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()

    if (input.includes("preço") || input.includes("plano") || input.includes("valor")) {
      return "Nossos planos começam a partir de R$ 91,58/mês. Temos opções de chatbot anual, mensal e implementação única. Gostaria de saber mais sobre algum plano específico?"
    }

    if (input.includes("chatbot") || input.includes("bot")) {
      return "Nossos chatbots são desenvolvidos com tecnologia OpenAI e funcionam 24/7 para atender seus clientes. Eles podem responder dúvidas frequentes e direcionar para WhatsApp quando necessário."
    }

    if (input.includes("site") || input.includes("website")) {
      return "Desenvolvemos sites responsivos com HTML5, CSS3, JavaScript, React e Next.js. Oferecemos Landing Pages, Sites Institucionais e E-commerce. Todos incluem chatbot integrado!"
    }

    if (input.includes("suporte") || input.includes("ajuda")) {
      return "Nosso suporte está disponível via WhatsApp (11) 96738-1402 ou e-mail. Atendemos em português e inglês, e você fala direto com quem entende!"
    }

    if (input.includes("reembolso") || input.includes("cancelar")) {
      return "Todos os nossos planos têm 30 dias para solicitação de reembolso, sem risco! Você pode cancelar a qualquer momento."
    }

    return "Entendi sua pergunta! Para informações mais detalhadas, recomendo entrar em contato com nosso suporte via WhatsApp (11) 96738-1402. Posso ajudar com mais alguma coisa?"
  }

  return (
    <>
      {/* Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-[#1e90ff] hover:bg-[#022041] text-white shadow-lg z-50"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-80 h-96 bg-white rounded-lg shadow-xl border z-50 flex flex-col">
          {/* Header */}
          <div className="bg-[#1e90ff] text-white p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="h-4 w-4" />
              </div>
              <div>
                <h4 className="font-semibold">VierChat</h4>
                <p className="text-xs text-white/80">Online agora</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-white/20"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-3">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}>
                <div
                  className={`max-w-[80%] p-3 rounded-lg text-sm ${
                    message.isBot ? "bg-gray-100 text-gray-800" : "bg-[#1e90ff] text-white"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex space-x-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Digite sua mensagem..."
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                className="flex-1"
              />
              <Button onClick={handleSendMessage} size="icon" className="bg-[#1e90ff] hover:bg-[#022041]">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
