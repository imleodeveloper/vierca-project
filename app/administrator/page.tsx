"use client";

import { useState } from "react";
import {
  Ban,
  BotMessageSquare,
  ChartNoAxesCombined,
  CircleDollarSign,
  ClipboardList,
  ClipboardPen,
  Headset,
  Logs,
  ShoppingBasket,
  User,
} from "lucide-react";
import { UserComponent } from "./components/usuarios/user-component";
import { SignatureComponent } from "./components/assinaturas/signature-component";
import { BuyComponent } from "./components/compras/buy-component";
import { DashboardComponent } from "./components/dashboard/dashboard-component";
import { CancellationsComponent } from "./components/cancelamentos/cancellations-component";
import { PlansComponent } from "./components/planos/plans-component";
import { SupportComponent } from "./components/suporte/support-component";

export default function Administrator() {
  const [optionMenu, setOptionMenu] = useState("Usuarios");

  return (
    <div className="flex justify-start items-start">
      <header className="bg-white shadow-lg border-b w-[20%] h-screen fixed">
        <div className="border-b border-black/10 mx-auto p-4 font-bold">
          <h2 className="text-2xl">VierCa Admin</h2>
        </div>
        <div className="grid grid-cols-1 p-4">
          <ul className="mb-4 border-black/10 border-b pb-2 space-y-2">
            <h3 className="text-lg font-bold">Gestão</h3>
            <li
              onClick={() => setOptionMenu("Usuarios")}
              className={`flex items-center text-sm text-black/80 hover:text-blue-700 cursor-pointer font-medium hover:bg-blue-200 p-2 rounded-xl ${optionMenu === "Usuarios" ? "bg-blue-200 text-blue-700" : ""}`}
            >
              <User className="w-4 h-4 mr-1"></User> Usuários
            </li>
            <li
              onClick={() => setOptionMenu("Assinaturas")}
              className={`flex items-center text-sm text-black/80 hover:text-blue-700 cursor-pointer font-medium hover:bg-blue-200 p-2 rounded-xl ${optionMenu === "Assinaturas" ? "bg-blue-200 text-blue-700" : ""} `}
            >
              <ClipboardPen className="w-4 h-4 mr-1"></ClipboardPen> Assinaturas
            </li>
            <li
              onClick={() => setOptionMenu("Compras")}
              className={`flex items-center text-sm text-black/80 hover:text-blue-700 cursor-pointer font-medium hover:bg-blue-200 p-2 rounded-xl ${optionMenu === "Compras" ? "bg-blue-200 text-blue-700" : ""} `}
            >
              <ShoppingBasket className="w-4 h-4 mr-1"></ShoppingBasket> Compras
            </li>
            <li
              onClick={() => setOptionMenu("Dashboard")}
              className={`flex items-center text-sm text-black/80 hover:text-blue-700 cursor-pointer font-medium hover:bg-blue-200 p-2 rounded-xl ${optionMenu === "Dashboard" ? "bg-blue-200 text-blue-700" : ""}`}
            >
              <ChartNoAxesCombined className="w-4 h-4 mr-1"></ChartNoAxesCombined>{" "}
              Dashboard
            </li>
            <li
              onClick={() => setOptionMenu("Cancelamentos")}
              className={`flex items-center text-sm text-black/80 hover:text-blue-700 cursor-pointer font-medium hover:bg-blue-200 p-2 rounded-xl ${optionMenu === "Cancelamentos" ? "bg-blue-200 text-blue-700" : ""}`}
            >
              <Ban className="w-4 h-4 mr-1"></Ban> Cancelamentos
            </li>
          </ul>
          <ul className="mb-4 border-black/10 border-b pb-2 space-y-2">
            <h3 className="text-lg font-bold">Admin</h3>

            <li
              onClick={() => setOptionMenu("Planos")}
              className={`flex items-center text-sm text-black/80 hover:text-blue-700 cursor-pointer font-medium hover:bg-blue-200 p-2 rounded-xl ${optionMenu === "Planos" ? "bg-blue-200 text-blue-700" : ""}`}
            >
              <ClipboardList className="w-4 h-4 mr-1"></ClipboardList> Planos
            </li>
            {/*
            <li
              className={`flex items-center text-sm text-black/80 hover:text-blue-700 cursor-pointer font-medium hover:bg-blue-200 p-2 rounded-xl ${optionMenu === "Logs de Atividades" ? "bg-blue-200 text-blue-700" : ""}`}
            >
              <Logs className="w-4 h-4 mr-1"></Logs> Logs de Atividades
            </li>

            <li
              className={`flex items-center text-sm text-black/80 hover:text-blue-700 cursor-pointer font-medium hover:bg-blue-200 p-2 rounded-xl ${optionMenu === "Faturamento" ? "bg-blue-200 text-blue-700" : ""}`}
            >
              <CircleDollarSign className="w-4 h-4 mr-1"></CircleDollarSign>{" "}
              Faturamento
            </li>
            */}
          </ul>
          <ul className="mb-4 border-black/10 border-b pb-2 space-y-2">
            <h3 className="text-lg font-bold">Suporte</h3>
            <li
              onClick={() => setOptionMenu("Suporte")}
              className={`flex items-center text-sm text-black/80 hover:text-blue-700 cursor-pointer font-medium hover:bg-blue-200 p-2 rounded-xl ${optionMenu === "Suporte" ? "bg-blue-200 text-blue-700" : ""}`}
            >
              <Headset className="w-4 h-4 mr-1"></Headset> Suporte
            </li>
            <li
              className={`flex items-center text-sm text-black/80 hover:text-blue-700 cursor-pointer font-medium hover:bg-blue-200 p-2 rounded-xl ${optionMenu === "Vierbot" ? "bg-blue-200 text-blue-700" : ""}`}
            >
              <BotMessageSquare className="w-4 h-4 mr-1"></BotMessageSquare>{" "}
              Continue Vierbot
            </li>
          </ul>
        </div>
      </header>
      {optionMenu === "Usuarios" && <UserComponent />}
      {optionMenu === "Assinaturas" && <SignatureComponent />}
      {optionMenu === "Compras" && <BuyComponent />}
      {optionMenu === "Dashboard" && <DashboardComponent />}
      {optionMenu === "Cancelamentos" && <CancellationsComponent />}
      {optionMenu === "Planos" && <PlansComponent />}
      {optionMenu === "Suporte" && <SupportComponent />}
    </div>
  );
}
