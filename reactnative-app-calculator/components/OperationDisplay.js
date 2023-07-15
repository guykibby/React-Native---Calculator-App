import React from "react";
import { StyleSheet, Text, View } from "react-native";

const OperationDisplay = ({ d, h }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.history}>{h}</Text>
      <Text style={styles.display}>{d}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    padding: 20,
  },
  history: {
    fontSize: 20,
    color: "#888",
    marginBottom: 10,
  },
  display: {
    fontSize: 40,
    color: "#333",
  },
});

export default OperationDisplay;
