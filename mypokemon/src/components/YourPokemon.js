import React, { useContext} from "react";
import { PokemonContext } from "../context/PokemonContext";
import { Card, CardContent, Typography, Grid, Container, Button } from "@mui/material";
import "./YourPokemon.css";

import { useNavigate } from "react-router-dom";

const YourPokemon = () => {
  const navigate = useNavigate();

  const goToPokemonDetails = (name) => {
    navigate("/pokemon/" + name);
  };
  const { team } = useContext(PokemonContext);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        These are your Pokemon Team
      </Typography>
      <Grid container spacing={3}>
        {team.map((pokemon) => (
          <Grid item xs={12} sm={6} md={4} key={pokemon.name}>
           <Card className="team-card"  onClick={() => goToPokemonDetails(pokemon.name)}>
              <CardContent>
                <Typography variant="h5">{pokemon.name}</Typography>
                <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                <Button onClick={() =>goToPokemonDetails(pokemon.name)}> View more Details </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default YourPokemon;