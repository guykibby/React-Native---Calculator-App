import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

export default function ButtonContainer({ onButton, onClear, onDelete }) {
  return (
    <>
      <View style={styles.btnContainer}>
        <View style={styles.leftColumn}>
          <TouchableOpacity
            onPress={onClear}
            style={[styles.buttonLeftCol, styles.clear]}
          >
            <Text style={styles.buttonText}>Clear History</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={onDelete}
            style={[styles.buttonLeftCol, styles.delete]}
          >
            <Text style={styles.buttonText}>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onButton("/")}
            style={[styles.buttonLeftCol, styles.operator]}
          >
            <Text style={styles.buttonText}>/</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onButton("1")}
            style={styles.buttonLeftCol}
          >
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onButton("2")}
            style={styles.buttonLeftCol}
          >
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onButton("3")}
            style={styles.buttonLeftCol}
          >
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onButton("4")}
            style={styles.buttonLeftCol}
          >
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onButton("5")}
            style={styles.buttonLeftCol}
          >
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onButton("6")}
            style={styles.buttonLeftCol}
          >
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onButton("7")}
            style={styles.buttonLeftCol}
          >
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onButton("8")}
            style={styles.buttonLeftCol}
          >
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onButton("9")}
            style={styles.buttonLeftCol}
          >
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => onButton("0")} style={styles.zero}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onButton(".")}
            style={styles.buttonLeftCol}
          >
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rightColumn}>
          <TouchableOpacity
            onPress={() => onButton("+")}
            style={[styles.buttonRightCol, styles.operator]}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onButton("-")}
            style={[styles.buttonRightCol, styles.operator]}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onButton("*")}
            style={[styles.buttonRightCol, styles.operator]}
          >
            <Text style={styles.buttonText}>*</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => onButton("=")}
            style={styles.equalsButton}
          >
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: "#3EC70B",
    aspectRatio: 1 / 1.25,
    width: "88%",
    flexDirection: "row",
  },
  leftColumn: {
    backgroundColor: "#EE5007",
    width: "75%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-around",
    alignContent: "space-around",
  },
  rightColumn: {
    backgroundColor: "#219F94",
    width: "25%",
    justifyContent: "space-around",
    alignItems: "center",
  },
  buttonLeftCol: {
    height: "17%",
    width: "28.3%",
    backgroundColor: "orange",
    borderRadius: 10,
  },
  buttonRightCol: {
    height: "17%",
    width: "85%",
    backgroundColor: "#FBCB0A",
    borderRadius: 10,
  },

  clear: {
    backgroundColor: "red",
  },
  delete: {
    backgroundColor: "yellow",
  },
  operator: {
    backgroundColor: "#3EC70B",
  },
  zero: {
    height: "17%",
    width: "61.6%",
    backgroundColor: "#219F94",
    borderRadius: 10,
  },
  equalsButton: {
    height: "37%",
    width: "85%",
    backgroundColor: "#FBCB0A",
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 30,
    // textAlign: "center",
    // textAlignVertical: "center",
  },
});
