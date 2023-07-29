import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from "accordion-collapse-react-native";
import { ScrollView } from "react-native";

const OperationDisplay = ({ d, h }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <View style={styles.window}>
      <Collapse style={styles.collapse} onToggle={setIsOpen}>
        <CollapseHeader>
          <View
            style={[styles.historyHeader, isOpen ? styles.continousHeader : {}]}
          >
            <Text style={styles.headerText}>History</Text>
            <Text style={styles.headerText}>▼</Text>
          </View>
        </CollapseHeader>
        <CollapseBody style={styles.collapseBody}>
          <ScrollView>
            {h.map((item, index) => {
              return (
                <Text style={styles.bodyText} testID="history" key={index}>
                  {item}
                </Text>
              );
            })}
          </ScrollView>
        </CollapseBody>
      </Collapse>
      <Text style={styles.display} testID="display">
        {d}
      </Text>
    </View>
  );
};

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
    // borderRadius: 10,
    padding: 10,
  },
  continousHeader: {
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomWidth: 1,
  },
  collapseBody: {
    flex: 1,
    backgroundColor: "#BA9D9F",
    // borderRadius: 10,
  },
  headerText: {
    fontSize: 25,
    // fontWeight: "bold",
  },
  bodyText: {
    fontSize: 22,
    textAlign: "center",
  },
  display: {
    fontSize: 60,
    textAlign: "right",
    justifyContent: "center",
    color: "white",
    paddingHorizontal: "3%",
  },
});

export default OperationDisplay;
