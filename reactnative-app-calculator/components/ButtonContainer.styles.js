import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  btnContainer: {
    aspectRatio: 1 / 1.15,
    width: "88%",
    flexDirection: "row",
  },
  leftColumn: {
    width: "75%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignContent: "space-around",
  },
  rightColumn: {
    width: "25%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  buttonText: {
    color: "black",
    fontSize: 30,
    textAlign: "center",
  },
  buttonLeftCol: {
    height: "17%",
    width: "28.3%",
    backgroundColor: "#DBD8AE",
    borderRadius: 10,
    flexDirection: "column",
    justifyContent: "center",
  },
  buttonRightCol: {
    height: "17%",
    width: "85%",
    backgroundColor: "#FBCB0A",
    borderRadius: 10,
    flexDirection: "column",
    justifyContent: "center",
  },
  clear: {
    backgroundColor: "#9E2A2B",
  },
  delete: {
    backgroundColor: "#B6636E",
  },
  operator: {
    backgroundColor: "#CA907E",
  },
  zero: {
    height: "17%",
    width: "61.6%",
    backgroundColor: "#DBD8AE",
    borderRadius: 10,
    flexDirection: "column",
    justifyContent: "center",
  },
  equalsButton: {
    height: "37%",
    width: "85%",
    backgroundColor: "#BA9D9F",
    borderRadius: 10,
    flexDirection: "column",
    justifyContent: "center",
  },
});

export default styles;
