import { Filter } from "lucide-react";
import Link from "next/link";

export function UserComponent() {
  return (
    <div className="grid grid-cols-1 w-full pl-[20%]">
      <div className="sub-header w-full flex justify-between items-center p-4 shadow-sm">
        <h2 className="text-2xl">Usuários</h2>
        <Link
          href="/"
          className="cursor-pointer rounded border border-black/80 px-2 py-1 mr-4 hover:bg-blue-600 hover:border-black/20 hover:text-white font-medium"
        >
          Voltar ao Site
        </Link>
      </div>
      <div className="min-w-full p-4 bg-gray-100 min-h-screen">
        <div className="min-w-full bg-white overflow-x-auto">
          <div className="flex items-center justify-between text-left px-4 py-2 text-lg	">
            Tabela de Usuários (01)
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
                <th className="border px-4 py-2 text-left text-white">ID</th>
                <th className="border px-4 py-2 text-left text-white">Nome</th>
                <th className="border px-4 py-2 text-left text-white">
                  Telefone
                </th>
                <th className="border px-4 py-2 text-left text-white">
                  Tem Plano?
                </th>
                <th className="border px-4 py-2 text-left text-white">
                  Nome Plano
                </th>
                <th className="border px-4 py-2 text-left text-white">
                  Status Plano
                </th>
                <th className="border px-4 py-2 text-left text-white">
                  Data de Compra
                </th>
                <th className="border px-4 py-2 text-left text-white">
                  Status Assinatura
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-gray-50">
                <td className="min-w-[250px] border px-4 py-2">
                  b34f-2344-1321fd-bdd...
                </td>
                <td className="min-w-[250px] border px-4 py-2">
                  Leonardo Vieira
                </td>
                <td className="min-w-[250px] border px-4 py-2">11967381402</td>
                <td className="min-w-[250px] border px-4 py-2">True</td>
                <td className="min-w-[250px] border px-4 py-2">
                  Chatbot Mensal Teste
                </td>
                <td className="min-w-[250px] border px-4 py-2">Ativado</td>
                <td className="min-w-[250px] border px-4 py-2">16/06/2025</td>
                <td className="min-w-[250px] border px-4 py-2">Não Ativada</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
