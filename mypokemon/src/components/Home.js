import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  TextField,
  Card,
  CardContent,
  Typography,
  Container,
} from "@mui/material";
import "./Home.css";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const [pokemon, setPokemon] = useState(null);
  const [search, setSearch] = useState("");

  const getRandomPokemon = async () => {
    const randomId = Math.floor(Math.random() * 898) + 1;
    const response = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${randomId}`
    );
    setPokemon(response.data);
  };

  const getPokemonByName = async () => {
    try {
      const response = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${search.toLowerCase()}`
      );
      setPokemon(response.data);
    } catch (error) {
      alert("Pokémon not found!");
    }
  };

  const goToPokemonDetails = () => {
    navigate("/pokemon/" + pokemon.name);
  };

  return (
    <Container className="home-container">
      <Typography variant="h4" gutterBottom>
        Home
      </Typography>
      <Button variant="contained" color="primary" onClick={getRandomPokemon}>
        Search for a random Pokémon
      </Button>
      <TextField
        label="Pokémon Name"
        variant="outlined"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-input"
      />
      <Button variant="contained" color="secondary" onClick={getPokemonByName}>
        Search
      </Button>
      {pokemon && (
        <Card className="pokemon-card" onClick={goToPokemonDetails}>
          <CardContent>
            <Typography variant="h5">{pokemon.name}</Typography>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          </CardContent>
        </Card>
      )}
    </Container>
  );
};

export default Home;
