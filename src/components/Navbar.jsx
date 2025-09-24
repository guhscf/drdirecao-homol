import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center py-3">
        <h1 className="text-xl font-bold">DR Direção</h1>

        {/* Botão hambúrguer (mobile) */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Menu desktop */}
        <div className="hidden md:flex gap-6">
          <a href="#inicio" className="hover:text-blue-400">Início</a>
          <a href="#servicos" className="hover:text-blue-400">Serviços</a>
          <a href="#sobre" className="hover:text-blue-400">Sobre</a>
          <a href="#galeria" className="hover:text-blue-400">Galeria</a>
          <a href="#depoimentos" className="hover:text-blue-400">Depoimentos</a>
          <a href="#contato" className="hover:text-blue-400">Contato</a>
        </div>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="flex flex-col md:hidden bg-gray-800 p-4 space-y-2">
          <a href="#inicio" className="hover:text-blue-400">Início</a>
          <a href="#servicos" className="hover:text-blue-400">Serviços</a>
          <a href="#sobre" className="hover:text-blue-400">Sobre</a>
          <a href="#galeria" className="hover:text-blue-400">Galeria</a>
          <a href="#depoimentos" className="hover:text-blue-400">Depoimentos</a>
          <a href="#contato" className="hover:text-blue-400">Contato</a>
        </div>
      )}
    </nav>
  );
}
