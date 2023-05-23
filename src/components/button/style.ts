import { StyleSheet } from "react-native";
import { Colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  buttonContainer: {
    height: 44,
    borderRadius: 8,
    borderColor: Colors.GRAY_200,
    borderWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  selectedButtonContainer: {
    height: 44,
    borderRadius: 8,
    backgroundColor: Colors.PRIMARY_100,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 20,
  },
  selectedTitle: {
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 20,
    color: Colors.PRIMARY_600,
  },
});
