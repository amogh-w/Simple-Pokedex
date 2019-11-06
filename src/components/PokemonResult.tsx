import React from "react";
import { Typography, Card, CardContent } from "@material-ui/core";
import { Pokemon } from "../types/types";

export const PokemonResult = ({
  name,
  numberOfAbilities,
  baseExperience,
  imageUrl
}: Pokemon) => {
  return (
    <Card style={{ margin: "20px 0px" }}>
      <CardContent>
        <img src={imageUrl} alt="PokemonSprite"></img>
        <Typography variant="h4">{name}</Typography>
        <Typography>Number of Abilities: {numberOfAbilities}</Typography>
        <Typography>Base Experience: {baseExperience}</Typography>
      </CardContent>
    </Card>
  );
};
