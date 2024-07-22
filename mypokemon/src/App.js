import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from "./components/Navbar";
import Home from "./components/Home";
import PokemonDetails from "./components/PokemonDetails";
import YourPokemon from "./components/YourPokemon";
import PokemonProvider from "./context/PokemonContext";
import "./components/App.css";
import { Container } from "@mui/material";

const App = () => {
  return (
    <PokemonProvider>
      <Router>
        <NavBar />
        <Container style={{ marginTop: "20px" }}>
          <Routes>
            <Route path="/" exact Component={Home} />
            <Route path="/your-pokemon" Component={YourPokemon} />
            <Route path="/pokemon/:name" Component={PokemonDetails} />
          </Routes>
        </Container>
      </Router>
    </PokemonProvider>
  );
};

export default App;