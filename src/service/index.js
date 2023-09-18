import axios from "axios";

const BASE_URL = "https://swapi.dev/api";
export const fetchStarWarsCharacters = async (page) => {
  try {
    const response = await axios.get(`${BASE_URL}/people/?page=${page}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};

export const fetchStarWarsCharacter = async (characterName) => {
  try {
    const response = await axios.get(
      `${BASE_URL}/people/?search=${characterName}`
    );

    if (response.data.results.length > 0) {
      return response.data.results[0];
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching character data:", error);
    throw error;
  }
};
