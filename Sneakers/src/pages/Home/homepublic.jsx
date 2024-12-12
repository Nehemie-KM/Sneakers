import React, { useEffect, useState } from "react";
import { ShoppingCartIcon } from "@heroicons/react/outline";
import Navbar from "../Navbar";

function Public() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:1337/api/produits?populate=*");
        if (!response.ok) {
          throw new Error("Erreur lors du chargement des produits");
        }
        const data = await response.json();
        setProducts(data.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) return <div>Chargement des produits...</div>;
  if (error) return <div>Erreur : {error}</div>;

  return (
    <div className="h-full bg-slate-200">
     
      <Navbar />

      
      <div
        className=" h-[50vh] bg-[url('/src/assets/sneakerss.jpg')] bg-center"
      >

        <div className=" z-10 flex flex-col items-center justify-center h-full text-white ">
          <h1 className="text-5xl font-bold text-center px-4">
            LE STYLE QUI JOUE DANS LA COUR DES GRANDS
          </h1>
          <p className="text-lg mt-4">
            Bienvenue sur BallerStyle, la référence ultime pour ton flow sur le
            terrain et toute l’actu basket.
          </p>
        </div>
      </div>

     
      <div className="py-12  text-center text-gray-800">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Marque ta différence sur le terrain
        </h2>
        <p className="text-xl max-w-3xl mx-auto px-4">
          Ici, chaque visite est une opportunité pour découvrir les meilleurs
          produits basket, de la mode à l'équipement.
        </p>
      </div>

      <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((produit) => (
          <div
            key={produit.id}
            className="border border-gray-300 p-4 rounded-md shadow-lg bg-white hover:shadow-3xl transition duration-300"
          >
            
            {produit.image?.url ? (
                <img  src={`http://localhost:1337${produit.image.url}`} alt={produit.name} className="w-42 h-42 object-cover mb-4" />
              ) : (
                <div className="w-32 h-32 bg-gray-400 mb-4 flex items-center justify-center text-white">Pas d'image</div>
              )}
              
            <h2 className="text-xl font-bold text-gray-700 mt-4">
              {produit.name}
            </h2>
            <p className="text-gray-700 mt-2">{produit.description}</p>
            <p className="text-gray-500 font-semibold mt-2">
              {produit.Prix} €
            </p>
            <button className="mt-4 w-full py-2 bg-gray-600 text-white font-bold rounded-md hover:bg-gray-400 transition">
              Ajouter au panier
            </button>
          </div>
        ))}
      </div>

      <div className="bg-black py-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Envie d'en savoir plus ?</h2>
        <p className="text-xl mb-6">
        Découvrer l'Actualité basket pour rester à jour sur ta passion avec les meilleurs détail car en info basket, on est le GOAT.
        </p>
        <a
          href="./actualite"
          className="inline-block px-6 py-3 bg-gray-600 text-white font-semibold rounded-md hover:bg-gray-400 transition"
        >
          Découvre l'Actualité des Ballers
        </a>
      </div>
    </div>
  );
}

export default Public;
