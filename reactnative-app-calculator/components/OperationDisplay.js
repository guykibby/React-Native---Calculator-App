import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from "accordion-collapse-react-native";

const OperationDisplay = ({ d, h }) => {
  console.log(h);
  return (
    <View style={styles.window}>
      <View style={styles.history}>
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
      <Text testID="display" style={styles.display}>
        {d}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  window: {
    backgroundColor: "blue",
    width: "88%",
    flex: 1,
    alignItems: "center",
    // justifyContent: "flex-start",
    // padding: 20,
  },
  history: {
    flex: 1,
    width: "100%",
    backgroundColor: "yellow",
    borderRadius: 10,
    alignItems: "center",
  },
  display: {
    fontSize: 40,
    height: "30%",
    width: "100%",
    backgroundColor: "pink",
    borderRadius: 10,
  },
});

export default OperationDisplay;
