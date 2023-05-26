import React from "react";
import { Character } from "../../types";
import { gql, useQuery } from "@apollo/client";
import { useCharacters } from "./use-characters";
import { find } from "lodash";

const CHARACTER_QUERY = gql`
  query Character($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      image
      gender
    }
  }
`;

export const useCharacterDetails = (
  characterID: number,
  isFavorite: boolean
) => {
  const [characterDetails, setCharacterDetails] = React.useState<Character>();
  const [characterComment, setCharacterComment] = React.useState("");
  const { characters, favorites } = useCharacters();

  const { data, loading, error } = useQuery(CHARACTER_QUERY, {
    variables: { id: characterID },
  });

  React.useEffect(() => {
    const character = find(
      isFavorite ? favorites : characters,
      (char) => char.id === characterID
    );
    character && setCharacterComment(character.comment);
  }, [characters, favorites, setCharacterComment]);

  React.useEffect(() => {
    if (data && data?.character) {
      setCharacterDetails(data?.character);
    }
  }, [data, setCharacterDetails]);

  return {
    characterDetails,
    loading,
    error,
    characterComment,
  };
};
