import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './pages/Navbar';
import Login from './pages/Login'
import Register from './pages/Register'
import Panier from './pages/Panier'
import Homepublic from './pages/Home/homepublic'
import Homeadmin from './pages/Home/homeadmin'
import Sport from './pages/Categorie/Sport'
import Ville from './pages/Categorie/Ville'

import './App.css'

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
      <Route path="/" element={<Homepublic />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/panier" element={<Panier />} />
        <Route path="/home/homepublic" element={<Homepublic />} />
        <Route path="/home/homeadmin" element={<Homeadmin />} />
        <Route path="/categorie/sport" element={<Sport />} />
        <Route path="/categorie/ville" element={<Ville />} />

      </Routes>
    </Router>
  );
}


export default App
