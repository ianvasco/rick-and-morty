import React from "react";
import { View } from "react-native";
import { Image } from "expo-image";
import { styles } from "./styles";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../../../utils/colors";

type Props = {
  imageUrl: string;
  isFavorite: boolean;
};

export const Avatar = ({ imageUrl, isFavorite }: Props) => {
  const favoriteIconName = isFavorite ? "ios-heart-sharp" : "ios-heart-outline";

  return (
    <View style={styles.avatar}>
      <Image style={styles.avatar} source={imageUrl} />
      {isFavorite && (
        <View style={styles.iconContainer}>
          <Ionicons
            name={favoriteIconName}
            size={24}
            color={Colors.SECONDARY_600}
          />
        </View>
      )}
    </View>
  );
};
