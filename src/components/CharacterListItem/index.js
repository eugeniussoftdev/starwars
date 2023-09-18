import React from "react";
import { Link as RouterLink } from "react-router-dom";

import { ListItem, ListItemText } from "@mui/material";

export const CharacterListItem = ({ character }) => {
  return (
    <ListItem>
      <ListItemText
        primary={
          <RouterLink to={`/character/${character.name}`}>
            {character.name}
          </RouterLink>
        }
        secondary={`Birth Year: ${character.birth_year} | Height: ${character.height}`}
      />
    </ListItem>
  );
};
