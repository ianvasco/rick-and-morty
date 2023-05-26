import React from "react";
import { CharacterDetailsLayout } from "./character-detail.layout";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackPropList, NavigationScreens } from "../../navigation";
import { useCharacterDetails, useCharacters } from "../../services/hooks";
import { Alert } from "react-native";
import { Character } from "../../types";
import { Loading } from "../../components/loading";

type CharacterDetailNavigationProps = NativeStackScreenProps<
  RootStackPropList,
  NavigationScreens.CharacterDetailScreen
>;

export const CharacterDetailsScreen = (
  props: CharacterDetailNavigationProps
) => {
  const characterID = props.route.params?.id;
  const [isFavorite, setFavorite] = React.useState(
    props.route.params?.isFavorite
  );
  const [commentValue, setCommentValue] = React.useState("");

  const { characterDetails, loading } = useCharacterDetails(characterID);
  const { deleteCharacter, addFavorite, deleteFavorite, addComment } =
    useCharacters();

  const handleCommentChange = (
    commentText: string,
    character: Character,
    isFavorite: boolean
  ) => {
    setCommentValue(commentText);
    addComment(character, isFavorite);
  };

  const handleFavoritePress = (character: Character) => {
    !isFavorite
      ? addFavorite({
          ...character,
          isFavorite: true,
        })
      : deleteFavorite(character.id);
    setFavorite(!isFavorite);
  };

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

  if (loading) {
    return <Loading />;
  }

  return (
    <CharacterDetailsLayout
      characterDetails={characterDetails}
      isFavorite={isFavorite}
      deleteCharacter={handleCharacterDeletion}
      handleFavoritePress={handleFavoritePress}
      comment={commentValue}
      handleCommentChange={handleCommentChange}
    />
  );
};
