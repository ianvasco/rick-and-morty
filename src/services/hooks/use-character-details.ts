import React from "react";
import { CharacterDetail } from "../../types";
import { gql, useQuery } from "@apollo/client";

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

export const useCharacterDetails = (characterID: number) => {
  const [characterDetails, setCharacterDetails] =
    React.useState<CharacterDetail>();

  const { data, loading, error } = useQuery(CHARACTER_QUERY, {
    variables: { id: characterID },
  });

  React.useEffect(() => {
    if (data && data?.character) {
      setCharacterDetails(data?.character);
    }
  }, [data, setCharacterDetails]);

  return {
    characterDetails,
    loading,
    error,
  };
};
