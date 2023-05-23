import React from "react";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import { CharacterDetail } from "../../types";
import { CharacterDetailRow } from "./components/character-details-row";
import { Avatar } from "./components/avatar";

type Props = {
  characterDetails: CharacterDetail;
  isFavorite: boolean;
};

export const CharacterDetailsLayout = ({
  characterDetails,
  isFavorite,
}: Props) => {
  const characterDetailsRows = characterDetails && [
    {
      title: "Specie",
      subtitle: characterDetails.species,
      hasDivider: true,
    },
    { title: "Status", subtitle: characterDetails.status, hasDivider: true },
    {
      title: "Occupation",
      subtitle: characterDetails.occupation,
      hasDivider: false,
    },
  ];

  return (
    <View style={styles.container}>
      {characterDetails && (
        <>
          <Avatar imageUrl={characterDetails.image} isFavorite={isFavorite} />
          <Text style={styles.name}>{characterDetails.name}</Text>
          <View>
            {characterDetailsRows.map((charDetail) => (
              <>
                <CharacterDetailRow
                  title={charDetail.title}
                  subtitle={charDetail.subtitle}
                />
                {charDetail.hasDivider && <View style={styles.divider} />}
              </>
            ))}
          </View>
        </>
      )}
    </View>
  );
};
