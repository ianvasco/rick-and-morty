import React from "react";
import { TouchableOpacity, View } from "react-native";
import { Image } from "expo-image";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../../../utils/colors";
import { CharacterDetail, FavoriteCharacter } from "../../../../types";

type Props = {
  characterDetails: CharacterDetail;
  isFavorite: boolean;
  addFavorite: (character: CharacterDetail) => void;
};

export const Avatar = ({
  characterDetails,
  isFavorite,
  addFavorite,
}: Props) => {
  const favoriteIconName = isFavorite ? "ios-heart-sharp" : "ios-heart-outline";

  return (
    <View style={styles.avatar}>
      <Image style={styles.avatar} source={characterDetails.image} />
      <TouchableOpacity
        style={styles.iconContainer}
        onPress={() => addFavorite(characterDetails)}
      >
        <Ionicons
          name={favoriteIconName}
          size={24}
          color={!isFavorite ? Colors.GRAY_300 : Colors.SECONDARY_600}
        />
      </TouchableOpacity>
    </View>
  );
};
