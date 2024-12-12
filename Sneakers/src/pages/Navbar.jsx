import React, { useState } from "react";
import { ShoppingCartIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white backdrop-blur-md shadow-md fixed w-full">
      <div className="mx-auto px-4 sm:px-6 lg:px-2 p-0">
        <div className="flex justify-between items-center py-4">
          {/* Logo et Nom de la Marque */}
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <img className="h-10 w-auto" src="/logo.jpg" alt="Sneaksy Logo" />
            </div>
            <h1 className="text-2xl font-bold text-black pr-3">
              BallerStyle
            </h1>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/"
              className="text-black hover:text-gray-800 transition"
            >
              Accueil
            </Link>
            <a
              href="/Actualite"
              className="text-black hover:text-gray-800 transition"
            >
              Actualité
            </a>
            <div className="group relative">
              <button className="text-black hover:text-gray-800">
                Catégories
              </button>
              <div className="hidden group-hover:block absolute bg-white text-black mt-1">
                <Link
                  to="/categorie/maillot"
                  className="block px-4 py-2 text-black hover:bg-gray-800"
                >
                  Maillots
                </Link>
                <Link
                  to="/Categorie/chaussures"
                  className="block px-4 py-2 text-black hover:bg-gray-800"
                >
                  Chaussures
                </Link>
                <Link
                  to="/Categorie/accesoires"
                  className="block px-4 py-2 text-black hover:bg-gray-800"
                >
                  Accesoires
                </Link>
              </div>
            </div>
            <a
              href="/contact"
              className="text-black hover:text-gray-800 transition"
            >
              Contact
            </a>
          </nav>

          {/* Barre de recherche */}
          <div className="hidden md:block flex-grow mx-6 text-pink-300">
            <input
              type="text"
              placeholder="Rechercher des sneakers..."
              className="w-full px-4 py-2 border border-gray-300 bg-transparent rounded-full text-black placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-white"
            />
          </div>

          {/* Icônes */}
          <div className="flex items-center space-x-4 pr-2">
            <Link to="/panier">
              <ShoppingCartIcon className="h-6 w-6 text-gray-800 hover:text-gray-600 cursor-pointer " />
              <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                {isOpen ? (
                  <XIcon className="h-6 w-6 text-gray-300" />
                ) : (
                  <MenuIcon className="h-6 w-6 text-pink-300" />
                )}
              </button>
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link to="/login">
              <button className="bg-gray-800 px-4 py-2 rounded text-white hover:bg-gray-700">
                Connexion
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-gray-900 backdrop-blur-md">
          <nav className="space-y-2 px-4 py-2">
            <a href="#home" className="block text-white hover:text-pink-300">
              Accueil
            </a>
            <a href="#shop" className="block text-white hover:text-pink-300">
              Boutique
            </a>
            <a
              href="#about"
              className="block text-white hover:text-pink-300"
            >
              À Propos
            </a>
            <a
              href="#contact"
              className="block text-white hover:text-pink-300"
            >
              Contact
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
