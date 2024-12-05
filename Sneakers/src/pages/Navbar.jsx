import React from 'react';
import { ShoppingCartIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { useState } from 'react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
<header className="bg-[#2C3E50] shadow-md">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center py-4">
      {/* Logo et Nom de la Marque */}
       {/* Logo et Nom de la Marque */}
       <div className="flex items-center space-x-4">
        <div className="flex-shrink-0">
          <img
            className="h-10 w-auto"
            src="/logo.jpg"
            alt="Sneaksy Logo"
          />
        </div>
        <h1 className="text-2xl font-bold text-white">Sneaksy</h1>
      </div>


      {/* Navigation Desktop */}
      <nav className="hidden md:flex space-x-8">
        <a href="#home" className="text-white hover:text-[#1ABC9C] transition">
          Accueil
        </a>
        <a href="#shop" className="text-white hover:text-[#1ABC9C] transition">
          Boutique
        </a>
        <a href="#about" className="text-white hover:text-[#1ABC9C] transition">
          À Propos
        </a>
        <a href="#contact" className="text-white hover:text-[#1ABC9C] transition">
          Contact
        </a>
      </nav>

      {/* Barre de recherche */}
      <div className="hidden md:block flex-grow mx-6">
        <input
          type="text"
          placeholder="Rechercher des sneakers..."
          className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#1ABC9C]"
        />
      </div>

      {/* Icônes */}
      <div className="flex items-center space-x-4">
        <ShoppingCartIcon className="h-6 w-6 text-white hover:text-[#1ABC9C] cursor-pointer" />
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          {isOpen ? (
            <XMarkIcon className="h-6 w-6 text-white" />
          ) : (
            <MenuIcon className="h-6 w-6 text-white" />
          )}
        </button>
      </div>
    </div>
  </div>

  {/* Menu Mobile */}
  {isOpen && (
    <div className="md:hidden bg-[#2C3E50]">
      <nav className="space-y-2 px-4 py-2">
        <a href="#home" className="block text-white hover:text-[#1ABC9C]">
          Accueil
        </a>
        <a href="#shop" className="block text-white hover:text-[#1ABC9C]">
          Boutique
        </a>
        <a href="#about" className="block text-white hover:text-[#1ABC9C]">
          À Propos
        </a>
        <a href="#contact" className="block text-white hover:text-[#1ABC9C]">
          Contact
        </a>
      </nav>
    </div>
  )}
</header>


  );
};

export default Navbar;
