import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { CharacterDetail } from "../../types";
import { CharacterDetailRow } from "./components/character-details-row";
import { Avatar } from "./components/avatar";

type Props = {
  characterDetails: CharacterDetail;
  isFavorite: boolean;
  deleteCharacter: (id: number) => void;
  handleFavoritePress: (character: CharacterDetail) => void;
};

export const CharacterDetailsLayout = ({
  characterDetails,
  isFavorite,
  deleteCharacter,
  handleFavoritePress,
}: Props) => {
  const characterDetailsRows = characterDetails && [
    {
      title: "Specie",
      subtitle: characterDetails.species,
    },
    { title: "Status", subtitle: characterDetails.status },
    {
      title: "Gender",
      subtitle: characterDetails.gender,
    },
  ];

  return (
    <View style={styles.container}>
      {!!characterDetails && (
        <>
          <Avatar
            characterDetails={characterDetails}
            isFavorite={isFavorite}
            addFavorite={handleFavoritePress}
          />
          <Text style={styles.name}>{characterDetails.name}</Text>
          <View>
            {characterDetailsRows.map((charDetail) => (
              <>
                <CharacterDetailRow
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
          </View>
        </>
      )}
    </View>
  );
};
