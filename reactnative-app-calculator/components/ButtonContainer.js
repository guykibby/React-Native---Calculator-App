import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import styles from "./ButtonContainer.styles";

export default function ButtonContainer({ onButton, onClear, onDelete }) {
  return (
    <>
      <View style={styles.btnContainer}>
        <View style={styles.leftColumn}>
          <TouchableOpacity
            onPressIn={onClear}
            style={[styles.buttonLeftCol, styles.clear]}
          >
            <Text style={[styles.buttonText, { color: "white", fontSize: 18 }]}>
              Clear History
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPressIn={onDelete}
            style={[styles.buttonLeftCol, styles.delete]}
          >
            <Text style={[styles.buttonText, { color: "white", fontSize: 18 }]}>
              Del
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPressIn={() => onButton("/")}
            style={[styles.buttonLeftCol, styles.operator]}
          >
            <Text style={styles.buttonText}>/</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPressIn={() => onButton("1")}
            style={styles.buttonLeftCol}
          >
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPressIn={() => onButton("2")}
            style={styles.buttonLeftCol}
          >
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPressIn={() => onButton("3")}
            style={styles.buttonLeftCol}
          >
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPressIn={() => onButton("4")}
            style={styles.buttonLeftCol}
          >
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPressIn={() => onButton("5")}
            style={styles.buttonLeftCol}
          >
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPressIn={() => onButton("6")}
            style={styles.buttonLeftCol}
          >
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPressIn={() => onButton("7")}
            style={styles.buttonLeftCol}
          >
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPressIn={() => onButton("8")}
            style={styles.buttonLeftCol}
          >
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPressIn={() => onButton("9")}
            style={styles.buttonLeftCol}
          >
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity onPressIn={() => onButton("0")} style={styles.zero}>
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPressIn={() => onButton(".")}
            style={styles.buttonLeftCol}
          >
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rightColumn}>
          <TouchableOpacity
            onPressIn={() => onButton("x")}
            style={[styles.buttonRightCol, styles.operator]}
          >
            <Text style={styles.buttonText}>x</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPressIn={() => onButton("-")}
            style={[styles.buttonRightCol, styles.operator]}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPressIn={() => onButton("+")}
            style={[styles.buttonRightCol, styles.operator]}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPressIn={() => onButton("=")}
            style={styles.equalsButton}
          >
            <Text style={styles.buttonText}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
