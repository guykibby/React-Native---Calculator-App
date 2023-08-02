import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  window: {
    width: "85%",
    flex: 1,
    marginTop: "6%",
    justifyContent: "space-between",
  },
  collapse: {
    flex: 1,
    overflow: "hidden",
  },
  historyHeader: {
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#BA9D9F",
    padding: 10,
  },
  continousHeader: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomWidth: 1,
  },
  headerText: {
    fontSize: 22,
  },
  collapseBody: {
    flex: 1,
    backgroundColor: "#BA9D9F",
  },

  bodyText: {
    fontSize: 18,
    textAlign: "center",
  },
  display: {
    fontSize: 38,
    textAlign: "right",
    justifyContent: "center",
    color: "white",
    paddingHorizontal: "3%",
  },
});

export default styles;
