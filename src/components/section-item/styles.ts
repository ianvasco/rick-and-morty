import { StyleSheet } from "react-native";
import { Colors } from "../../utils/colors";
export const styles = StyleSheet.create({
  container: {
    borderTopColor: Colors.GRAY_200,
    borderTopWidth: 1,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 32,
    height: 32,
    borderRadius: 20,
    marginRight: 16,
  },
  name: {
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 21,
    color: Colors.GRAY_900,
  },
  species: {
    fontWeight: "400",
    fontSize: 16,
    lineHeight: 21,
    color: Colors.GRAY_500,
  },
  favoriteButton: {
    flex: 1,
    alignItems: "flex-end",
    padding: 5, //gives extra space to touch the element.
  },
  textContainer: {
    flexDirection: "column",
  },
});
