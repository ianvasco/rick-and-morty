import { StyleSheet } from "react-native";
import { Colors } from "../../utils/colors";
export const styles = StyleSheet.create({
  sectionHeaderContainer: {
    backgroundColor: Colors.BACKGROUND,
  },
  container: {
    flex: 1,
    backgroundColor: Colors.BACKGROUND,
    paddingHorizontal: 16,
  },
  noResultsText: {
    color: Colors.PRIMARY_700,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 21,
    textAlign: "center",
  },
  noResultsContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 48,
  },
  noResultsImage: {
    height: 120,
    width: 90,
    marginVertical: 32,
  },
});
