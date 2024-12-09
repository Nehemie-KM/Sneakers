import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import Navbar from "../Navbar"; // Assurez-vous que le chemin est correct

const Public = () => {
  return (
    <div className="h-full">
      {/* Navbar affichée */}
      <Navbar />

      <div className="bg-pink-300 text-white h-[70px] text-3xl flex items-center justify-center font-mono">
        LE STYLE QUI JOUE DANS LA COUR DES GRANDS
      </div>
      <div className="text-pink-300 flex items-center justify-center font-momo ">
        Bienvenue sur BallerStyle, la référence ultime pour ton flow sur le
        terrain et toute l’actu basket. Ici, tu marques des points à chaque
        visite !
      </div>
    </div>
  );
};

export default Public;
