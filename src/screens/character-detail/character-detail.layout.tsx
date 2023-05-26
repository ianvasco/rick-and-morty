import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./styles";
import { Character } from "../../types";
import { CharacterDetailRow } from "./components/character-details-row";
import { Avatar } from "./components/avatar";

type Props = {
  characterDetails: Character;
  isFavorite: boolean;
  comment: string;
  deleteCharacter: (id: number) => void;
  handleFavoritePress: (character: Character) => void;
  handleCommentChange: (
    text: string,
    character: Character,
    isFavorite: boolean
  ) => void;
};

export const CharacterDetailsLayout = ({
  characterDetails,
  isFavorite,
  comment,
  deleteCharacter,
  handleFavoritePress,
  handleCommentChange,
}: Props) => {
  const characterDetailsRows = characterDetails && [
    {
      title: "Specie",
      subtitle: characterDetails.species,
    },
    { title: "Status", subtitle: characterDetails.status },
    {
      title: "Gender",
      subtitle: characterDetails.gender ?? "",
    },
  ];

  return (
    <View style={styles.container}>
      {!!characterDetails && (
        <>
          <Avatar
            key={characterDetails.name}
            characterDetails={characterDetails}
            isFavorite={isFavorite}
            addFavorite={handleFavoritePress}
          />
          <Text style={styles.name}>{characterDetails.name}</Text>
          <TextInput
            multiline
            numberOfLines={2}
            maxLength={70}
            value={comment}
            onChangeText={(text) =>
              handleCommentChange(text, characterDetails, isFavorite)
            }
            placeholder="Put your comment here"
            style={styles.input}
          />
          <View style={styles.divider} />
          {characterDetailsRows.map((charDetail) => (
            <>
              <CharacterDetailRow
                key={charDetail.title}
                title={charDetail.title}
                subtitle={charDetail.subtitle}
              />
              <View style={styles.divider} />
            </>
          ))}
          <TouchableOpacity
            style={styles.deleteButton}
            onPress={() => deleteCharacter(characterDetails.id)}
          >
            <Text style={styles.deleteText}>Delete</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};
