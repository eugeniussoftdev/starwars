import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

import {
  Container,
  List,
  TextField,
  Pagination,
  CircularProgress,
  Box,
} from "@mui/material";
import { CharacterListItem } from "../CharacterListItem";
import { Header } from "../Header";

import { fetchStarWarsCharacters } from "../../service";

export const StarWarsList = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [totalPages, setTotalPages] = useState(1);
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    setIsLoading(true);
    const fetchCharacters = async () => {
      const data = await fetchStarWarsCharacters(page);
      setCharacters(data.results);
      setTotalPages(Math.ceil(data.count / data.results.length));
      setIsLoading(false);
    };

    fetchCharacters();
  }, [page]);

  useEffect(() => {
    const filtered = characters.filter((character) => {
      const name = character?.name.toLowerCase();
      return name.includes(searchTerm);
    });

    setFilteredCharacters(filtered);
  }, [searchTerm, characters]);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  return (
    <Container>
      <Header title="Star Wars Characters" />
      <TextField
        label="Search by name"
        variant="outlined"
        fullWidth
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Box display="flex" flexDirection="column" alignItems="center">
        {isLoading ? (
          <CircularProgress />
        ) : (
          <List>
            {filteredCharacters.map((character) => (
              <CharacterListItem character={character} />
            ))}
          </List>
        )}
      </Box>
      <Pagination
        count={totalPages}
        page={page}
        onChange={handlePageChange}
        color="primary"
      />
    </Container>
  );
};

export default StarWarsList;
