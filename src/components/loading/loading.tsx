import React from "react";
import { View, ActivityIndicator } from "react-native";

import styles from "./styles";
import { Colors } from "../../utils/colors";

export const Loading = () => (
  <View style={styles.centered}>
    <ActivityIndicator size="large" color={Colors.PRIMARY_600} />
  </View>
);
