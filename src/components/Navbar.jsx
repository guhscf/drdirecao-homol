import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-gray-100 to-gray-200 text-gray-900 fixed top-0 w-full z-50 shadow-md transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-3">
        
        {/* Logo */}
        <div className="flex items-center gap-3 flex-shrink-0">
          <img
            src="/Logo_nova.png"
            alt="Logo DR Direção"
            className="h-14 w-auto"
          />
        </div>

        {/* Botão Mobile */}
        <button
          className="md:hidden focus:outline-none text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Links Desktop */}
        <div className="hidden md:flex gap-8 text-lg font-medium">
          <a href="#inicio" className="hover:text-purple-700">Início</a>
          <a href="#servicos" className="hover:text-purple-700">Serviços</a>
          <a href="#sobre" className="hover:text-purple-700">Sobre</a>
          <a href="#galeria" className="hover:text-purple-700">Galeria</a>
          <a href="#depoimentos" className="hover:text-purple-700">Depoimentos</a>
          <a href="#contato" className="hover:text-purple-700">Contato</a>
        </div>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="flex flex-col md:hidden bg-gray-100 p-4 space-y-3 text-lg text-gray-900 font-medium shadow-md">
          <a href="#inicio" className="hover:text-purple-700">Início</a>
          <a href="#servicos" className="hover:text-purple-700">Serviços</a>
          <a href="#sobre" className="hover:text-purple-700">Sobre</a>
          <a href="#galeria" className="hover:text-purple-700">Galeria</a>
          <a href="#depoimentos" className="hover:text-purple-700">Depoimentos</a>
          <a href="#contato" className="hover:text-purple-700">Contato</a>
        </div>
      )}
    </nav>
  );
}
