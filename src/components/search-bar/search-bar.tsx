import React from "react";
import { View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../utils/colors";
import { styles } from "./styles";

type Props = {
  placeholder: string;
  value: string;
};

export const SearchBar = ({ placeholder, value }: Props) => {
  return (
    <View style={styles.container}>
      <Ionicons
        style={styles.searchIcon}
        name="search-outline"
        size={24}
        color={Colors.GRAY_400}
      />
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        value={value}
      />
      <Ionicons
        style={styles.filterIcon}
        name="ios-filter"
        size={24}
        color={Colors.PRIMARY_600}
      />
    </View>
  );
};
