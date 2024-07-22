import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { PokemonContext } from '../context/PokemonContext';
import axios from 'axios';
import { Card, CardContent, Typography, Button, Container } from '@mui/material';
import './PokemonDetails.css';

const PokemonDetails = () => {
  const { name } = useParams();
  const { team, addToTeam, removeFromTeam } = useContext(PokemonContext);
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemon = async () => {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
      setPokemon(response.data);
    };

    fetchPokemon();
  }, [name]);

  const isInTeam = team.find(p => p.name === name);

  return (
    <Container>
      {pokemon ? (
        <Card className="pokemon-details-card">
          <CardContent>
            <Typography variant="h5">{pokemon.name}</Typography>
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
            <Typography variant="body1">Height: {pokemon.height}</Typography>
            <Typography variant="body1">Weight: {pokemon.weight}</Typography>
            <Typography variant="body1">Experience: {pokemon.base_experience}</Typography>
            <Typography variant="body1">Order: {pokemon.order}</Typography>
            <Typography variant="body1">Game Indices: {pokemon.game_indices.length}</Typography>
            <Typography variant="body1">Moves: {pokemon.moves.length}</Typography>

            <Button 
              variant="contained" 
              color={isInTeam ? 'secondary' : 'primary'} 
              onClick={() => isInTeam ? removeFromTeam(name) : addToTeam(pokemon)}
              style={{ marginTop: '20px' }}
            >
              {isInTeam ? 'Remove Pokemon from team' : 'Add Pokemon to team'}
            </Button>
          </CardContent>
        </Card>
      ) : (
        <Typography variant="h6">Loading...</Typography>
      )}
    </Container>
  );
};

export default PokemonDetails;