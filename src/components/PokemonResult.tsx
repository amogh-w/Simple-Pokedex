import React from "react";
import { Typography, Card, CardContent } from "@material-ui/core";

export const PokemonResult: React.FC = () => {
  return (
    <Card style={{ margin: "20px 0px" }}>
      <CardContent>
        <Typography>Results</Typography>
      </CardContent>
    </Card>
  );
};
