import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";
import { Colors } from "../../../../utils/colors";
import { styles } from "./styles";
import { Sort } from "../../types";

type Props = {
  onPress: () => void;
  orderBy: Sort;
};

export const SortButton = ({ onPress, orderBy = Sort.Default }: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <FontAwesome name={orderBy} size={16} color={Colors.PRIMARY_600} />
    </TouchableOpacity>
  );
};
