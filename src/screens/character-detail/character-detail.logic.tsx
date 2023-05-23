import React from "react";
import { CharacterDetailsLayout } from "./character-detail.layout";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackPropList, NavigationScreens } from "../../navigation";
import { useCharacterDetails } from "../../services/hooks";

type CharacterDetailNavigationProps = NativeStackScreenProps<
  RootStackPropList,
  NavigationScreens.CharacterDetailScreen
>;

export const CharacterDetailsScreen = (
  props: CharacterDetailNavigationProps
) => {
  const characterID = props.route.params?.id;
  const isFavorite = props.route.params?.isFavorite;
  const { characterDetails } = useCharacterDetails(characterID);

  return (
    <CharacterDetailsLayout
      characterDetails={characterDetails}
      isFavorite={isFavorite}
    />
  );
};
