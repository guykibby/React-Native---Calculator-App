import React from "react";
import { View, StyleSheet, Pressable, Text } from "react-native";

export default function ButtonContainer({ onButton, onClear, onDelete }) {
  return (
    <>
      <View style={styles.btnContainer}>
        <View style={styles.numericBtnContainer}>
          <Pressable
            onPress={() => onButton("1")}
            style={({ pressed }) => [
              styles.button,
              { backgroundColor: pressed ? "#FF6347" : "#FF0000" },
            ]}
          >
            <Text style={styles.buttonText}>1</Text>
          </Pressable>
          <Pressable
            onPress={() => onButton("2")}
            style={({ pressed }) => [
              styles.button,
              { backgroundColor: pressed ? "#FF6347" : "#FF0000" },
            ]}
          >
            <Text style={styles.buttonText}>2</Text>
          </Pressable>
          <Pressable
            onPress={() => onButton("3")}
            style={({ pressed }) => [
              styles.button,
              { backgroundColor: pressed ? "#FF6347" : "#FF0000" },
            ]}
          >
            <Text style={styles.buttonText}>3</Text>
          </Pressable>
          <Pressable
            onPress={() => onButton("4")}
            style={({ pressed }) => [
              styles.button,
              { backgroundColor: pressed ? "#FF6347" : "#FF0000" },
            ]}
          >
            <Text style={styles.buttonText}>4</Text>
          </Pressable>
          <Pressable
            onPress={() => onButton("5")}
            style={({ pressed }) => [
              styles.button,
              { backgroundColor: pressed ? "#FF6347" : "#FF0000" },
            ]}
          >
            <Text style={styles.buttonText}>5</Text>
          </Pressable>
          <Pressable
            onPress={() => onButton("6")}
            style={({ pressed }) => [
              styles.button,
              { backgroundColor: pressed ? "#FF6347" : "#FF0000" },
            ]}
          >
            <Text style={styles.buttonText}>6</Text>
          </Pressable>
          <Pressable
            onPress={() => onButton("7")}
            style={({ pressed }) => [
              styles.button,
              { backgroundColor: pressed ? "#FF6347" : "#FF0000" },
            ]}
          >
            <Text style={styles.buttonText}>7</Text>
          </Pressable>
          <Pressable
            onPress={() => onButton("8")}
            style={({ pressed }) => [
              styles.button,
              { backgroundColor: pressed ? "#FF6347" : "#FF0000" },
            ]}
          >
            <Text style={styles.buttonText}>8</Text>
          </Pressable>
          <Pressable
            onPress={() => onButton("9")}
            style={({ pressed }) => [
              styles.button,
              { backgroundColor: pressed ? "#FF6347" : "#FF0000" },
            ]}
          >
            <Text style={styles.buttonText}>9</Text>
          </Pressable>
          <Pressable
            onPress={() => onButton("0")}
            style={({ pressed }) => [
              styles.button,
              { backgroundColor: pressed ? "#FF6347" : "#FF0000" },
            ]}
          >
            <Text style={styles.buttonText}>0</Text>
          </Pressable>
          <Pressable
            onPress={() => onButton(".")}
            style={({ pressed }) => [
              styles.button,
              { backgroundColor: pressed ? "#FF6347" : "#FF0000" },
            ]}
          >
            <Text style={styles.buttonText}>.</Text>
          </Pressable>
          <Pressable
            onPress={() => onButton("=")}
            style={({ pressed }) => [
              styles.button,
              styles.infoButton,
              { backgroundColor: pressed ? "#BA9D9F" : "#FFC0CB" },
            ]}
          >
            <Text style={styles.buttonText}>=</Text>
          </Pressable>
        </View>
        <View style={styles.operatorBtnContainer}>
          <Pressable
            onPress={() => onButton("+")}
            style={({ pressed }) => [
              styles.button,
              styles.secondaryButton,
              { backgroundColor: pressed ? "#CA907E" : "#FFA07A" },
            ]}
          >
            <Text style={styles.buttonText}>+</Text>
          </Pressable>
          <Pressable
            onPress={() => onButton("-")}
            style={({ pressed }) => [
              styles.button,
              styles.secondaryButton,
              { backgroundColor: pressed ? "#CA907E" : "#FFA07A" },
            ]}
          >
            <Text style={styles.buttonText}>-</Text>
          </Pressable>
          <Pressable
            onPress={() => onButton("*")}
            style={({ pressed }) => [
              styles.button,
              styles.secondaryButton,
              { backgroundColor: pressed ? "#CA907E" : "#FFA07A" },
            ]}
          >
            <Text style={styles.buttonText}>*</Text>
          </Pressable>
          <Pressable
            onPress={() => onButton("/")}
            style={({ pressed }) => [
              styles.button,
              styles.secondaryButton,
              { backgroundColor: pressed ? "#CA907E" : "#FFA07A" },
            ]}
          >
            <Text style={styles.buttonText}>/</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.calculatorControls}>
        <Pressable onPress={onDelete} style={styles.warningButton}>
          <Text style={styles.buttonText}>Delete</Text>
        </Pressable>
        <Pressable onPress={onClear} style={styles.errorButton}>
          <Text style={styles.buttonText}>Clear History</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },
  numericBtnContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    width: "70%",
  },
  operatorBtnContainer: {
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
    width: "30%",
  },
  button: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFFFFF",
  },
  infoButton: {
    backgroundColor: "#BA9D9F",
  },
  secondaryButton: {
    backgroundColor: "#CA907E",
  },
  warningButton: {
    backgroundColor: "#B6636E",
    marginHorizontal: 10,
    width: 150,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  errorButton: {
    backgroundColor: "#9E2A2B",
    width: 150,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  calculatorControls: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
