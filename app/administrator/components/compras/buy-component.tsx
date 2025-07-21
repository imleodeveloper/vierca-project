import Link from "next/link";
import { Filter } from "lucide-react";

export const BuyComponent = () => {
  return (
    <div className="grid grid-cols-1 w-full pl-[20%]">
      <div className="sub-header w-full flex justify-between items-center p-4 shadow-sm">
        <h2 className="text-2xl">Compras</h2>
        <Link
          href="/"
          className="cursor-pointer rounded border border-black/80 px-2 py-1 mr-4 hover:bg-blue-600 hover:border-black/20 hover:text-white font-medium"
        >
          Voltar ao Site
        </Link>
      </div>
      <div className="min-w-full p-4 bg-gray-100 min-h-screen">
        <div className="min-w-full bg-white">
          <div className="flex items-center justify-between text-left px-4 py-2 text-lg	">
            Tabela de Usuários com Planos (01)
            <div className="bg-white rounded-xl">
              <button className="flex items-center gap-2 bg-gray-200 hover:bg-gray-100 text-black font-medium py-2 px-4 rounded">
                <Filter className="w-4 h-4 mr-1"></Filter>
                Filtro
              </button>
            </div>
          </div>
          <table className="min-w-full table-auto border border-gray-300">
            <thead className="bg-blue-500">
              <tr>
                <th className="border px-4 py-2 text-left text-white">
                  Nome do Plano
                </th>
                <th className="border px-4 py-2 text-left text-white">
                  Status do Plano
                </th>
                <th className="border px-4 py-2 text-left text-white">
                  Usuário
                </th>
                <th className="border px-4 py-2 text-left text-white">ID</th>
                <th className="border px-4 py-2 text-left text-white">
                  Data de Compra
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="min-w-[250px] border px-4 py-2">
                  Landing Page Básica
                </td>
                <td className="min-w-[250px] border px-4 py-2">Ativo</td>
                <td className="min-w-[250px] border px-4 py-2 overflow-x-auto">
                  Leonardo Vieira
                </td>
                <td className="min-w-[250px] border px-4 py-2 overflow-x-auto">
                  b34f-3123-dadke-3123-4...
                </td>
                <td className="min-w-[250px] border px-4 py-2">16/06/2025</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
