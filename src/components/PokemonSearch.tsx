import React, { useState, useRef } from "react";
import { Paper, Typography, Button, TextField } from "@material-ui/core";
import axios from "axios";
import { PokemonResult } from "./PokemonResult";
import { Pokemon } from "../types/types";

export const PokemonSearch: React.FC = () => {
  const pokemonNameEntered = useRef<HTMLInputElement>(null);
  const [pokemonDetails, setPokemonDetails] = useState<Pokemon | null>(null);

  const onSearchClick = () => {
    const pokemonToSearch = pokemonNameEntered.current.value;
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonToSearch}`)
      .then(response => {
        console.log(response.data);
        let newPokemon = {
          name: response.data.name,
          numberOfAbilities: response.data.abilities.length,
          baseExperience: response.data.base_experience,
          imageUrl: response.data.sprites.front_default
        };
        setPokemonDetails(newPokemon);
      });
  };

  return (
    <Paper style={{ margin: "20px", padding: "20px" }}>
      <Typography>Search for a Pokemon</Typography>
      <TextField inputRef={pokemonNameEntered} placeholder="Pikachu" />
      <br />
      <Button
        color="primary"
        variant="outlined"
        style={{ marginTop: "16px", marginBottom: "8px" }}
        onClick={onSearchClick}
      >
        Search!
      </Button>
      <PokemonResult></PokemonResult>
    </Paper>
  );
};
