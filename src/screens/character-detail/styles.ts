import { StyleSheet } from "react-native";
import { Colors } from "../../utils/colors";
export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
    paddingHorizontal: 16,
    paddingTop: 24,
  },
  name: {
    fontWeight: "700",
    fontSize: 24,
    lineHeight: 32,
    color: Colors.GRAY_900,
    marginTop: 8,
    marginBottom: 16,
  },
  divider: {
    borderTopColor: Colors.GRAY_200,
    borderTopWidth: 1,
  },
  deleteText: {
    color: "red",
    fontSize: 16,
    lineHeight: 21,
  },
  deleteButton: {
    marginTop: 16,
  },
});
