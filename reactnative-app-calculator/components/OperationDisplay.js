import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from "accordion-collapse-react-native";

const OperationDisplay = ({ d, h }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.display}>{d}</Text>
      <Collapse>
        <CollapseHeader>
          <View>
            <Text>Past Calculations</Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          {h.map((item, index) => {
            return <Text key={index}>{item}</Text>;
          })}
        </CollapseBody>
      </Collapse>
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
