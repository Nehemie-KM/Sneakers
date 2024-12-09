import React, { useState } from "react";
import { ShoppingCartIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-transparent backdrop-blur-md shadow-md">
      <div className=" mx-auto px-4 sm:px-6 lg:px-2 p-0">
        <div className="flex justify-between items-center py-4">
          {/* Logo et Nom de la Marque */}
          <div className="flex items-center space-x-4">
            <div className="flex-shrink-0">
              <img className="h-10 w-auto" src="/logo.jpg" alt="Sneaksy Logo" />
            </div>
            <h1 className="text-2xl font-bold text-gray-600 pr-3">
              BallerStyle
            </h1>
          </div>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex space-x-8">
            <Link
              to="/home/homepublic"
              className="text-gray-600 hover:text-pink-700 transition"
            >
              Accueil
            </Link>
            <a
              href="/Actualite"
              className="text-gray-600 hover:text-pink-700 transition"
            >
              Actualité
            </a>
            <div className="group relative">
              <button className="text-gray-600 hover:text-pink-700">
                Catégories
              </button>
              <div className="hidden group-hover:block absolute bg-white text-black mt-1">
                <Link
                  to="/categorie/maillot"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Maillots
                </Link>
                <Link
                  to="/Categorie/chaussures"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Chaussures
                </Link>
                <Link
                  to="/Categorie/accesoires"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  Accesoires
                </Link>
              </div>
            </div>
            <a
              href="/contact"
              className="text-gray-600 hover:text-pink-700 transition"
            >
              Contact
            </a>
          </nav>

          {/* Barre de recherche */}
          <div className="hidden md:block flex-grow mx-6">
            <input
              type="text"
              placeholder="Rechercher des sneakers..."
              className="w-full px-4 py-2 border border-gray-300 bg-transparent rounded-full text-gray-600 placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-pink-700"
            />
          </div>

          {/* Icônes */}
          <div className="flex items-center space-x-4 pr-2">
            <Link to="/panier">
              <ShoppingCartIcon className="h-6 w-6 text-gray-600 hover:text-pink-700 cursor-pointer " />
              <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
                {isOpen ? (
                  <XIcon className="h-6 w-6 text-gray-600" />
                ) : (
                  <MenuIcon className="h-6 w-6 text-gray-600" />
                )}
              </button>
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link to="/login">
              <button className="bg-gray-400 px-4 py-2 rounded hover:bg-pink-700 ">
                Connexion
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Menu Mobile */}
      {isOpen && (
        <div className="md:hidden bg-transparent backdrop-blur-md">
          <nav className="space-y-2 px-4 py-2">
            <a href="#home" className="block text-gray-600 hover:text-pink-700">
              Accueil
            </a>
            <a href="#shop" className="block text-gray-600 hover:text-pink-700">
              Boutique
            </a>
            <a
              href="#about"
              className="block text-gray-600 hover:text-pink-700"
            >
              À Propos
            </a>
            <a
              href="#contact"
              className="block text-gray-600 hover:text-pink-700"
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
