import React, { useState, useRef } from "react";
import {
  Container,
  Paper,
  Typography,
  Button,
  TextField,
  Divider
} from "@material-ui/core";
import axios from "axios";
import { PokemonResult } from "./PokemonResult";
import { Pokemon } from "../types/types";
import PokemonLogo from "../img/320px-International_Pokémon_logo.svg.png";

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

  const onClearClicked = () => {
    setPokemonDetails(null);
    pokemonNameEntered.current.value = "";
  };

  return (
    <Container maxWidth="sm">
      <Paper
        style={{ marginTop: "20px", padding: "20px", textAlign: "center" }}
      >
        <img src={PokemonLogo} alt="PokemonLogo"></img>
        <Divider style={{ margin: "20px" }}></Divider>
        <Typography>Search for a Pokemon</Typography>
        <TextField inputRef={pokemonNameEntered} placeholder="Pikachu" />
        <br />
        <Button
          color="primary"
          variant="contained"
          style={{ marginTop: "16px", marginBottom: "8px" }}
          onClick={onSearchClick}
        >
          Search!
        </Button>
        <Button
          color="primary"
          variant="outlined"
          style={{ marginTop: "16px", marginBottom: "8px", marginLeft: "8px" }}
          onClick={onClearClicked}
        >
          Clear
        </Button>

        <Divider style={{ margin: "20px" }}></Divider>
        {pokemonDetails ? (
          <PokemonResult
            name={pokemonDetails.name}
            numberOfAbilities={pokemonDetails.numberOfAbilities}
            baseExperience={pokemonDetails.baseExperience}
            imageUrl={pokemonDetails.imageUrl}
          ></PokemonResult>
        ) : (
          <Typography>The result will appear here.</Typography>
        )}
      </Paper>
    </Container>
  );
};
