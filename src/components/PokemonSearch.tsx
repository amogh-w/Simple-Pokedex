import React, { useState, useRef } from "react";
import { Paper, Typography, Button, TextField } from "@material-ui/core";
import axios from "axios";
import { PokemonResult } from "./PokemonResult";

export const PokemonSearch: React.FC = () => {
  const pokemonNameEntered = useRef<HTMLInputElement>(null);

  const onSearchClick = () => {
    const pokemonToSearch = pokemonNameEntered.current.value;
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonToSearch}`)
      .then(response => {
        console.log(response.data);
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
