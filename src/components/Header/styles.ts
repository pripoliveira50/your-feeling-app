import { StyleSheet } from "react-native";
import { colors, metrics } from "@global/index";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: metrics.fiveFoldPixel + 15,
  },
  whitetitle: {
    textAlign: "center",
    fontSize: metrics.doublePixel,
    color: colors.white,
    fontWeight: "bold",
    paddingHorizontal: metrics.triplePixel + metrics.pixel,
  },
  buttonContainer: {
    paddingHorizontal: metrics.triplePixel + 4,
  },
  textContainer: {
    paddingHorizontal: metrics.fiveFoldPixel + metrics.pixel,
  },

  backBlack: {
    textAlign: "center",
    fontSize: metrics.doublePixel + 4,
    color: colors.black,
    fontWeight: "bold",
  },
  backWhite: {
    textAlign: "center",
    fontSize: metrics.doublePixel + 4,
    color: colors.white,
    fontWeight: "bold",
  },
  primaryColor: {
    backgroundColor: colors.primary,
  },
  whiteColor: {
    backgroundColor: colors.white,
  },
});

export default styles;
