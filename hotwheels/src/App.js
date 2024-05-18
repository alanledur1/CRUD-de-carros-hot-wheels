// Importando as bibliotecas e componentes necessários.
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import Home from "./components/home/home.jsx";
import SobreConteudo from "./components/sobre/sobre.jsx";
import { Navigation } from "./components/navlink/navigation.jsx";
import ListCars from "./components/carros/Listcars.jsx";
import CarroAdd from "./components/adicionar/carroAdd.jsx";
import Carro from "./components/carros/carros.jsx";




// Definindo o componente App.
function App() {

  // Renderizando o componente.
  return (
    <Router>
      <div>
        <Navigation />
        <Container maxWidth="md">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Sobre" element={<SobreConteudo />} />
            <Route path="/list" element={<ListCars />} />
            <Route path="/addcar" element={<CarroAdd />} />
            <Route path="/cars/:id" element={<Carro />} />
          </Routes>
        </Container>
      </div>
    </Router>
  );
}

// Exportando o componente para ser usado em outros lugares.
export default App;
