import React from "react";
import { CharacterDetailsLayout } from "./character-detail.layout";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackPropList, NavigationScreens } from "../../navigation";
import { useCharacterDetails, useCharacters } from "../../services/hooks";
import { Alert } from "react-native";

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
  const { deleteCharacter } = useCharacters();

  const handleCharacterDeletion = (id: number) => {
    Alert.alert(
      "Destroy confirmation",
      `Do you really want to Destroy ${characterDetails.name}?`,
      [
        {
          text: "Destroy",
          onPress: () => {
            deleteCharacter(id);
            props.navigation.goBack();
          },
          style: "destructive",
        },
        {
          text: "Keep Alive",
          onPress: () => {},
          style: "cancel",
        },
      ],
      { cancelable: true }
    );
  };

  return (
    <CharacterDetailsLayout
      characterDetails={characterDetails}
      isFavorite={isFavorite}
      deleteCharacter={handleCharacterDeletion}
    />
  );
};
