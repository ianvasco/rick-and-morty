import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import { Character, FavoriteCharacter } from "../../types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React from "react";

type CharacterStore = {
  characters: Character[];
  favorites: FavoriteCharacter[];
  setCharacters: (favorites: Character[]) => void;
  setAddFavorite: (favorite: FavoriteCharacter) => void;
  removeFavorites: (id: number) => void;
  deleteCharacter: (id: number) => void;
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
  {
    id: 15,
    name: "Alien Rick",
    status: "unknown",
    species: "Alien",

    image: "https://rickandmortyapi.com/api/character/avatar/15.jpeg",
  },
  {
    id: 16,
    name: "Amish Cyborg",
    status: "Dead",
    species: "Alien",

    image: "https://rickandmortyapi.com/api/character/avatar/16.jpeg",
  },
  {
    id: 17,
    name: "Annie",
    status: "Alive",
    species: "Human",

    image: "https://rickandmortyapi.com/api/character/avatar/17.jpeg",
  },
  {
    id: 18,
    name: "Antenna Morty",
    status: "Alive",
    species: "Human",
    image: "https://rickandmortyapi.com/api/character/avatar/18.jpeg",
  },
  {
    id: 19,
    name: "Antenna Rick",
    status: "unknown",
    species: "Human",

    image: "https://rickandmortyapi.com/api/character/avatar/19.jpeg",
  },
];

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

  React.useEffect(() => {
    setCharacters(characters.length === 0 ? charResult : characters);
  }, []);

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
  };
};
