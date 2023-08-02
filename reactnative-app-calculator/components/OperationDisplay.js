import React, { useState } from "react";
import { Text, View } from "react-native";
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from "accordion-collapse-react-native";
import { ScrollView } from "react-native";
import styles from "./OperationDisplay.styles";

const OperationDisplay = ({ displayText, history }) => {
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
            {history.map((item, index) => {
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
        {displayText}
      </Text>
    </View>
  );
};

export default OperationDisplay;
