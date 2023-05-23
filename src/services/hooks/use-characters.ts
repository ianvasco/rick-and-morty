import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { Character, FavoriteCharacter } from "../../types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";
import { gql, useQuery } from "@apollo/client";

type CharacterStore = {
  characters: Character[];
  favorites: FavoriteCharacter[];
  setCharacters: (favorites: Character[]) => void;
  setAddFavorite: (favorite: FavoriteCharacter) => void;
  removeFavorites: (id: number) => void;
  deleteCharacter: (id: number) => void;
};

const SECTIONS_QUERY = gql`
  query {
    characters(page: 1) {
      results {
        id
        name
        status
        species
        image
      }
    }
  }
`;

const useCharacterStore = create<CharacterStore>()(
  persist(
    (set) => ({
      characters: [],
      favorites: [],
      setCharacters: (characters: Character[]) => {
        set((state) => {
          return {
            ...state,
            characters,
          };
        });
      },
      setAddFavorite: (character) =>
        set((prevState) => ({
          characters: prevState.characters.filter(
            (char) => char.id !== character.id
          ),
          favorites: [...prevState.favorites, character],
        })),
      removeFavorites: (id) =>
        set((prevState) => ({
          characters: [
            ...prevState.characters,
            ...prevState.favorites.filter((char) => char.id === id),
          ],
          favorites: prevState.favorites.filter((char) => char.id !== id),
        })),
      deleteCharacter: (id) =>
        set((prevState) => ({
          characters: prevState.characters.filter((char) => char.id !== id),
          favorites: prevState.favorites.filter((char) => char.id !== id),
        })),
    }),
    {
      name: "characters-storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);

export const useCharacters = () => {
  const setCharacters = useCharacterStore((state) => state.setCharacters);
  const setAddFavorite = useCharacterStore((state) => state.setAddFavorite);
  const removeFavorites = useCharacterStore((state) => state.removeFavorites);
  const removeCharacter = useCharacterStore((state) => state.deleteCharacter);
  const favorites = useCharacterStore((state) => state.favorites);
  const characters = useCharacterStore((state) => state.characters);

  const { data, loading, error } = useQuery(SECTIONS_QUERY);

  React.useEffect(() => {
    if (characters.length === 0 && data?.characters?.results?.length > 0) {
      setCharacters(data.characters.results);
    }
  }, [data, characters, setCharacters]);

  const addFavorite = (character: FavoriteCharacter) => {
    setAddFavorite(character);
  };

  const deleteFavorite = (id: number) => {
    removeFavorites(id);
  };

  const deleteCharacter = (id: number) => {
    removeCharacter(id);
  };

  return {
    characters,
    favorites,
    deleteFavorite,
    addFavorite,
    deleteCharacter,
    setCharacters,
    data,
    loading,
    error,
  };
};
