import React, { createContext, useState, useEffect } from 'react';

export const PokemonContext = createContext();

const PokemonProvider = ({ children }) => {
  const [team, setTeam] = useState(() => {
    const savedTeam = localStorage.getItem('pokemonTeam');
    return savedTeam ? JSON.parse(savedTeam) : [];
  });

  useEffect(() => {
    localStorage.setItem('pokemonTeam', JSON.stringify(team));
  }, [team]);

  const addToTeam = (pokemon) => {
    if (team.length < 6 && !team.find(p => p.name === pokemon.name)) {
      setTeam([...team, pokemon]);
    }
  };

  const removeFromTeam = (name) => {
    setTeam(team.filter(pokemon => pokemon.name !== name));
  };

  return (
    <PokemonContext.Provider value={{ team, addToTeam, removeFromTeam }}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;