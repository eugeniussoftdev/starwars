import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  CircularProgress,
  Box,
} from "@mui/material";
import { Header } from "../Header";

import { fetchStarWarsCharacter } from "../../service";

export const CharacterDetail = () => {
  const { characterName } = useParams();
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    const fetchCharacter = async () => {
      const data = await fetchStarWarsCharacter(characterName);
      setCharacter(data);
    };

    fetchCharacter();
  }, [characterName]);

  return (
    <Container>
      <Header title="Character Details" />
      <Box display="flex" flexDirection="column" alignItems="center">
        {character ? (
          <TableContainer component={Paper}>
            <Table>
              <TableBody>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>{character.name}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Birth Year</TableCell>
                  <TableCell>{character.birth_year}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Height</TableCell>
                  <TableCell>{character.height} cm</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Date Created</TableCell>
                  <TableCell>
                    {new Date(character.created).toLocaleString("en-GB", {
                      day: "2-digit",
                      month: "2-digit",
                      year: "numeric",
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        ) : (
          <CircularProgress />
        )}
      </Box>
    </Container>
  );
};

export default CharacterDetail;
