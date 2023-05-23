import { StyleSheet } from "react-native";
import { Colors } from "../../../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    marginVertical: 16,
  },
  name: {
    color: Colors.GRAY_900,
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 32,
  },
  title: {
    color: Colors.GRAY_900,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 21,
  },
  subtitle: {
    color: Colors.GRAY_500,
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 21,
  },
});
