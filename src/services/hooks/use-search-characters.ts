import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Character, FavoriteCharacter } from "../../types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";

type SearchStore = {
  characters: Character[];
  favorites: FavoriteCharacter[];
  setCharacters: (favorites: Character[]) => void;
  setAddFavorite: (favorite: FavoriteCharacter) => void;
  removeFavorites: (id: number) => void;
};

const charResult: Character[] = [
  {
    id: 1,
    name: "Rick Sanchez",
    status: "Alive",
    species: "Human",
    image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  },
  {
    id: 2,
    name: "Morty Smith",
    status: "Alive",
    species: "Human",

    image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  },
  {
    id: 3,
    name: "Summer Smith",
    status: "Alive",
    species: "Human",
    image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
  },
  {
    id: 4,
    name: "Beth Smith",
    status: "Alive",
    species: "Human",
    image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
  },
  {
    id: 5,
    name: "Jerry Smith",
    status: "Alive",
    species: "Human",
    image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
  },
  {
    id: 6,
    name: "Abadango Cluster Princess",
    status: "Alive",
    species: "Alien",
    image: "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
  },
  {
    id: 7,
    name: "Abradolf Lincler",
    status: "unknown",
    species: "Human",
    image: "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
  },
];

const useCharacterStore = create<SearchStore>()(
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
          characters: prevState.characters,
          favorites: [character, ...prevState.favorites],
        })),
      removeFavorites: (id) =>
        set((prevState) => ({
          favorites: [...prevState.favorites],
          characters: prevState.characters.filter((char) => char.id !== id),
        })),
    }),
    {
      name: "favorite-storage",
      getStorage: () => AsyncStorage,
    }
  )
);

export const useCharacters = () => {
  const setCharacters = useCharacterStore((state) => state.setCharacters);
  const setAddFavorite = useCharacterStore((state) => state.setAddFavorite);
  const removeFavorites = useCharacterStore((state) => state.removeFavorites);
  const favorites = useCharacterStore((state) => state.characters);

  React.useEffect(() => {
    setCharacters(charResult);
  }, []);

  const addFavorite = (character: FavoriteCharacter) => {
    setAddFavorite(character);
  };

  const deleteFavorites = (id: number) => {
    removeFavorites(id);
  };

  return {
    favorites,
    deleteFavorites,
    addFavorite,
  };
};
