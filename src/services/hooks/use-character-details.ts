import React from "react";
import { Character, CharacterDetail } from "../../types";

const mockedCharacterDetails: CharacterDetail = {
  id: 2,
  name: "Morty Smith",
  status: "Alive",
  species: "Human",
  image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  occupation: "Rick's entertainment",
};

export const useCharacterDetails = (characterID: number) => {
  const [characterDetails, setCharacterDetails] =
    React.useState<CharacterDetail>();

  React.useEffect(() => {
    setCharacterDetails(mockedCharacterDetails);
  }, []);

  return {
    characterDetails,
  };
};
