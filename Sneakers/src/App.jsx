import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Panier from "./pages/Panier";
import Homepublic from "./pages/Home/homepublic";
import Homeadmin from "./pages/Home/homeadmin";
import "./App.css";
import Contact from "./pages/Contact";
import Actualite from "./pages/Actualite";
import Chaussures from "./pages/Categorie/Chaussures";
import Maillot from "./pages/Categorie/Maillot";
import Accesoires from "./pages/Categorie/Accesoires";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepublic />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/panier" element={<Panier />} />
        <Route path="/home/homepublic" element={<Homepublic />} />
        <Route path="/home/homeadmin" element={<Homeadmin />} />
        <Route path="/categorie/maillot" element={<Maillot />} />
        <Route path="/categorie/accesoires" element={<Accesoires />} />
        <Route path="/categorie/chaussures" element={<Chaussures />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/panier" element={<Panier />} />
        <Route path="/actualite" element={<Actualite />} />
      </Routes>
    </Router>
  );
}

export default App;
