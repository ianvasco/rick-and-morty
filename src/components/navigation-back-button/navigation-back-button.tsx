import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../utils/colors";

type Props = {
  onPress: () => void;
};

export const NavigationBackButton = ({ onPress }: Props) => (
  <TouchableOpacity onPress={onPress}>
    <Ionicons name="arrow-back" size={24} color={Colors.PRIMARY_600} />
  </TouchableOpacity>
);
