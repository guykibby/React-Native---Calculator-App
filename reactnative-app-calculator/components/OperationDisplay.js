import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from "accordion-collapse-react-native";

const OperationDisplay = ({ d, h }) => {
  console.log(h);
  console.log(h.reverse());
  return (
    <View style={styles.container}>
      <Text testID="display" style={styles.display}>
        {d}
      </Text>
      <Collapse>
        <CollapseHeader>
          <View>
            <Text>Past Calculations</Text>
          </View>
        </CollapseHeader>
        <CollapseBody>
          {h.map((item, index) => {
            return (
              <Text testID="history" key={index}>
                {item}
              </Text>
            );
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
    alignItems: "center",
    justifyContent: "flex-start",
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
