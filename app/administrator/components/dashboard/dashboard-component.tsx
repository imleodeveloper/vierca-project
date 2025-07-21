"use client";
import {
  AppWindowMac,
  Bot,
  ChevronDown,
  ChevronRight,
  CircleDollarSign,
  ClipboardList,
  ClipboardPen,
  Filter,
  X,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export const DashboardComponent = () => {
  const [dashboardCattegory, setDashboardCattegory] = useState("Visão Geral");

  return (
    <div className="grid grid-cols-1 w-full pl-[20%]">
      <div className="sub-header w-full flex justify-between items-center p-4 shadow-sm">
        <h2 className="text-2xl">Dashboard</h2>
        <Link
          href="/"
          className="cursor-pointer rounded border border-black/80 px-2 py-1 mr-4 hover:bg-blue-600 hover:border-black/20 hover:text-white font-medium"
        >
          Voltar ao Site
        </Link>
      </div>
      {dashboardCattegory === "Visão Geral" && (
        <div className="min-w-full p-4 bg-gray-100 min-h-screen">
          <div className="flex justify-between items-center">
            <div className="bg-gray-200 rounded p-1">
              <button
                onClick={() => setDashboardCattegory("Visão Geral")}
                className={`text-sm font-medium px-2 py-2 rounded ${dashboardCattegory === "Visão Geral" ? "bg-white" : ""}`}
              >
                Visão Geral
              </button>
              <button
                onClick={() => setDashboardCattegory("Serviços Detalhados")}
                className={`text-sm font-medium px-2 py-2 rounded`}
              >
                Detalhes
              </button>
            </div>

            <div className="rounded py-1 px-2 flex justify-center items-center">
              <Filter className="w-4 h-4 mr-2"></Filter>
              <span className="text-sm font-medium mr-2">Mês:</span>
              <button
                className="bg-white border rounded p-2 flex justify-between items-center"
                value="07/2025"
              >
                07/2025
                <ChevronDown className="w-4 h-4 ml-4"></ChevronDown>
              </button>
            </div>
          </div>
          <div className="mt-8">
            <div className="grid grid-cols-3 gap-4">
              <div className="w-full bg-white border rounded p-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Cancelamentos do Mês</span>
                  <X className="text-red-600 w-5 h-5"></X>
                </div>
                <div className="mt-4">
                  <span className="text-red-600 text-3xl font-medium">0</span>
                </div>
              </div>
              <div className="w-full bg-white border rounded p-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Planos do Mês</span>
                  <ClipboardList className="text-green-600 w-5 h-5"></ClipboardList>
                </div>
                <div className="mt-4">
                  <span className="text-green-600 text-3xl font-medium">0</span>
                </div>
              </div>
              <div className="w-full bg-white border rounded p-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Assinaturas do Mês</span>
                  <ClipboardPen className="text-blue-600 w-5 h-5"></ClipboardPen>
                </div>
                <div className="mt-4">
                  <span className="text-blue-600 text-3xl font-medium">0</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-[1fr_2fr] mt-8 gap-4">
              <div className="bg-white border rounded p-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Valores do Mês</span>
                  <CircleDollarSign className="text-blue-600 w-5 h-5"></CircleDollarSign>
                </div>
                <div className="mt-4">
                  <span className="text-blue-600 text-3xl font-medium">
                    R$ 0,00
                  </span>
                </div>
              </div>
              <div className="w-full bg-white border rounded p-4">
                <span className="text-2xl font-medium">
                  Serviços mais utilizados
                </span>
                <div className=""></div>
              </div>
            </div>
          </div>
        </div>
      )}
      {dashboardCattegory === "Serviços Detalhados" && (
        <div className="min-w-full p-4 bg-gray-100 min-h-screen">
          <div className="flex justify-between items-center">
            <div className="bg-gray-200 rounded p-1">
              <button
                onClick={() => setDashboardCattegory("Visão Geral")}
                className={`text-sm font-medium px-2 py-2 rounded`}
              >
                Visão Geral
              </button>
              <button
                onClick={() => setDashboardCattegory("Serviços Detalhados")}
                className={`text-sm font-medium px-2 py-2 rounded ${dashboardCattegory === "Serviços Detalhados" ? "bg-white" : ""}`}
              >
                Detalhes
              </button>
            </div>

            <div className="rounded py-1 px-2 flex justify-center items-center">
              <Filter className="w-4 h-4 mr-2"></Filter>
              <span className="text-sm font-medium mr-2">Mês:</span>
              <button
                className="bg-white border rounded p-2 flex justify-between items-center"
                value="07/2025"
              >
                07/2025
                <ChevronDown className="w-4 h-4 ml-4"></ChevronDown>
              </button>
            </div>
          </div>
          <div className="mt-8 bg-white p-6 rounded">
            <span className="text-2xl font-medium">
              Todos os Detalhes - 01/1910
            </span>
            <div className="grid grid-cols-3 gap-4 mt-4">
              <div className="w-full bg-white border rounded p-4 hover:bg-gray-100 cursor-pointer">
                <div className="flex justify-between items-center">
                  <span className="text-base flex items-center">
                    <AppWindowMac className="text-gray-600 w-4 h-4 mr-1"></AppWindowMac>
                    Desenvolvimento de Site
                  </span>
                  <ChevronRight className="text-gray-400 w-4 h-4"></ChevronRight>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm">Quantidade:</span>
                  <span className="text-gray-600 text-sm font-medium">0</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm">Valor Total:</span>
                  <span className="text-green-600 text-sm font-medium">
                    R$ 0,00
                  </span>
                </div>
              </div>
              <div className="w-full bg-white border rounded p-4 hover:bg-gray-100 cursor-pointer">
                <div className="flex justify-between items-center">
                  <span className="text-base flex items-center">
                    <Bot className="text-gray-600 w-4 h-4 mr-1"></Bot>
                    Desenvolvimento de Chatbot
                  </span>
                  <ChevronRight className="text-gray-400 w-4 h-4"></ChevronRight>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm">Quantidade:</span>
                  <span className="text-gray-600 text-sm font-medium">0</span>
                </div>
                <div className="flex justify-between items-center mt-2">
                  <span className="text-sm">Valor Total:</span>
                  <span className="text-green-600 text-sm font-medium">
                    R$ 0,00
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
