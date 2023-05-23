import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { styles } from "./style";

type Props = {
  title: string;
  isSelected: boolean;
  onPress: () => void;
};

export const ApplyButton = ({ title, isSelected, onPress }: Props) => {
  return (
    <TouchableOpacity
      style={
        isSelected ? styles.selectedButtonContainer : styles.buttonContainer
      }
      onPress={onPress}
    >
      <Text style={isSelected ? styles.selectedTitle : styles.title}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};
