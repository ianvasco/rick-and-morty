import React from "react";
import { View, Text } from "react-native";
import { styles } from "./styles";

type Props = {
  title: string;
  totalItems: number;
};

export const SearchBar = ({ title, totalItems }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{`${title} (${totalItems})`}</Text>
    </View>
  );
};
