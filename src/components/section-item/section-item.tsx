import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { Character, FavoriteCharacter } from "../../types";
import { Colors } from "../../utils/colors";

type Props = {
  character: Character;
  isFavorite: boolean;
  addFavorite: (character: FavoriteCharacter) => void;
  deleteFavorite: (id: number) => void;
  handleCharacterPress: (characterID: number, isFavorite: boolean) => void;
};

export const SectionItem = ({
  character,
  isFavorite,
  addFavorite,
  deleteFavorite,
  handleCharacterPress,
}: Props) => {
  const favoriteIconName = isFavorite ? "ios-heart-sharp" : "ios-heart-outline";
  const handleFavoritePress = () => {
    !isFavorite
      ? addFavorite({
          ...character,
          isFavorite: true,
        })
      : deleteFavorite(character.id);
  };
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => handleCharacterPress(character.id, isFavorite)}
    >
      <Image style={styles.image} source={character.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{character.name}</Text>
        <Text style={styles.species}>{character.species}</Text>
      </View>
      <TouchableOpacity
        style={styles.favoriteButton}
        onPress={handleFavoritePress}
      >
        <Ionicons
          name={favoriteIconName}
          size={24}
          color={!isFavorite ? Colors.GRAY_300 : Colors.SECONDARY_600}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
};
