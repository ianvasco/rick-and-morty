import { StyleSheet } from "react-native";
import { Colors } from "../../utils/colors";
export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    backgroundColor: Colors.SEARCH_BAR_BACKGROUND,
    alignItems: "center",
    alignContent: "center",
    gap: 8,
    borderRadius: 8,
    height: 38,
  },
  textInput: {
    flexGrow: 1,
  },
  filterIcon: {
    flex: 1,
    textAlign: "right",
    marginRight: 16,
  },
  searchIcon: {
    paddingLeft: 16,
  },
});
