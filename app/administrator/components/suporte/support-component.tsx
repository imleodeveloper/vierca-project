import { Archive, Filter, Inbox, Square, Star, Trash } from "lucide-react";
import Link from "next/link";

export const SupportComponent = () => {
  return (
    <div className="grid grid-cols-1 w-full pl-[20%]">
      <div className="sub-header w-full flex justify-between items-center p-4 shadow-sm">
        <h2 className="text-2xl">Planos</h2>
        <Link
          href="/"
          className="cursor-pointer rounded border border-black/80 px-2 py-1 mr-4 hover:bg-blue-600 hover:border-black/20 hover:text-white font-medium"
        >
          Voltar ao Site
        </Link>
      </div>
      <div className="min-w-full p-4 bg-gray-100 min-h-screen">
        <div className="min-w-full bg-white rounded shadow-lg">
          <div className="min-w-full bg-gray-200">
            <ul className="grid grid-cols-4 w-full h-full">
              <li className="w-full h-full hover:bg-black/10 p-2 flex justify-center items-center gap-2 cursor-pointer">
                <Trash className="w-4 h-4"></Trash>
                Lixeira
              </li>
              <li className="w-full h-full hover:bg-black/10 p-2 flex justify-center items-center gap-2 cursor-pointer">
                <Star className="w-4 h-4"></Star>
                Favoritos
              </li>
              <li className="w-full h-full hover:bg-black/10 p-2 flex justify-center items-center gap-2 cursor-pointer">
                <Archive className="w-4 h-4"></Archive>
                Arquivados
              </li>
              <li className="w-full h-full hover:bg-black/10 p-2 flex justify-center items-center gap-2 cursor-pointer">
                <Inbox className="w-4 h-4"></Inbox>
                Caixa de Entrada
              </li>
            </ul>
          </div>
          <div className="group relative w-full py-2 px-4 flex justify-between items-center cursor-pointer overflow-hidden hover:bg-gray-200">
            <div className="flex justify-center items-center gap-2">
              <Square className="w-4 h-4"></Square>
              <Star className="w-4 h-4"></Star>
              <span className="text-base font-medium">Leonardo Vieira</span>
            </div>
            <div className="flex justify-center items-center gap-2 text-sm">
              <span className="strong-letter-email font-medium">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
              </span>
              <span className="light-letter-email">
                Assumenda neque tenetur cum mollitia quidem in.
              </span>
            </div>
            <div className="flex justify-center items-center text-xs font-medium">
              <span>Jul 21</span>
            </div>
            <div className="absolute opacity-0 translate-y-4 invisible group-hover:translate-y-0 group-hover:opacity-100 group-hover:visible transition-all duration-600 top-0 right-0 h-full flex bg-gray-200 justify-center items-center gap-4 p-5 text-gray-600">
              <span className="rounded-full w-8 h-8 flex justify-center items-center hover:bg-red-600 hover:text-black">
                <Trash className="w-4 h-4"></Trash>
              </span>
              <span className="rounded-full w-8 h-8 flex justify-center items-center hover:bg-yellow-300 hover:text-black">
                <Archive className="w-4 h-4"></Archive>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
