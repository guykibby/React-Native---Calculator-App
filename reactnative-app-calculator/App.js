import React, { useState, useEffect, Children } from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import ButtonContainer from "./components/ButtonContainer";
import OperationDisplay from "./components/OperationDisplay";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function App() {
  const [operationDisplay, setOperationDisplay] = useState("");
  const [firstOperand, setFirstOperand] = useState("");
  const [secondOperand, setSecondOperand] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const jsonValue = await AsyncStorage.getItem("pastCalculations");
        return jsonValue != null ? JSON.parse(jsonValue) : null;
      } catch (e) {
        return;
      }
    };
    getData().then((value) => {
      if (value) {
        setHistory(value);
      }
    });
  }, []);

  useEffect(() => {
    const storeData = async (value) => {
      try {
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem("pastCalculations", jsonValue);
      } catch (e) {
        return;
      }
    };
    storeData(history);
  }, [history]);

  useEffect(() => {
    setOperationDisplay(
      `${firstOperand}${operator && " " + operator}${
        secondOperand && " " + secondOperand
      }${result && " = " + result}`
    );
  }, [firstOperand, secondOperand, operator, result]);

  // Button Clicked needs to limit size of number inputs.
  // calculateResult needs to handle extremelely large numbers (maybe minimise or throw error).

  const buttonClicked = (char) => {
    // consider getting rid of else statement
    if (result) {
      clearStates(char);
    } else {
      if (!firstOperand) {
        if (isNumber(char)) {
          setFirstOperand(char);
        }
        if (char === ".") {
          setFirstOperand("0.");
        }
      }

      if (firstOperand && !operator) {
        if (isNumber(char)) {
          setFirstOperand((previousValue) => previousValue + char);
        }
        if (isOperator(char)) {
          setOperator(char);
        }
        if (char === "." && !firstOperand.includes(".")) {
          setFirstOperand((previousValue) => previousValue + char);
        }
      }

      if (firstOperand && operator && !secondOperand) {
        if (isNumber(char)) {
          setSecondOperand(char);
        }
        if (char === ".") {
          setSecondOperand("0.");
        }
      }

      if (firstOperand && operator && secondOperand) {
        if (isNumber(char)) {
          setSecondOperand((previousValue) => previousValue + char);
        }
        if (char === "." && !secondOperand.includes(".")) {
          setSecondOperand((previousValue) => previousValue + char);
        }
        if (char === "=") {
          calculateResult();
        }
      }
    }
  };

  const deleteClicked = () => {
    if (result) {
      clearStates();
    } else if (secondOperand) {
      setSecondOperand(secondOperand.slice(0, -1));
    } else if (operator) {
      setOperator("");
    } else if (firstOperand) {
      setFirstOperand(firstOperand.slice(0, -1));
    }
  };

  const isOperator = (char) => {
    return char === "+" || char === "-" || char === "*" || char === "/";
  };

  const isNumber = (str) => {
    return +str === +str;
  };

  const clearStates = (char) => {
    if (char !== "=") {
      if (isNumber(char)) {
        setFirstOperand(char);
        setOperator("");
      }
      if (isOperator(char)) {
        setFirstOperand(result);
        setOperator(char);
      }
      if (char === ".") {
        setFirstOperand("0.");
        setOperator("");
      }
      if (!char) {
        setFirstOperand("");
        setOperator("");
      }
      setSecondOperand("");
      setResult("");
    }
  };
  // 0 x 0 = NaN
  const calculateResult = () => {
    let tempResult = null;
    if (operator === "+") {
      tempResult = Number(firstOperand) + Number(secondOperand);
    }
    if (operator === "-") {
      tempResult = Number(firstOperand) - Number(secondOperand);
    }
    if (operator === "*") {
      tempResult = Number(firstOperand) * Number(secondOperand);
    }
    if (operator === "/") {
      tempResult = Number(firstOperand) / Number(secondOperand);
    }
    if (!Number.isInteger(tempResult)) {
      tempResult = Number(tempResult.toFixed(2));
    }

    // get rid of = until it is required
    // Consider getting rid of empty spaces between inputs until the user types them in. eg "3 =" will be displayed instead of "3  ="
    setHistory((previousValue) => [
      `${firstOperand} ${operator} ${secondOperand} = ${tempResult}`,
      ...previousValue,
    ]);
    setResult(tempResult.toString());
  };

  return (
    <View style={styles.app}>
      <StatusBar style="auto" />
      {/* The variable names d and h are not semantically intuitive*/}
      <OperationDisplay d={operationDisplay} h={history} />
      <ButtonContainer
        onButton={buttonClicked}
        onDelete={deleteClicked}
        onClear={() => setHistory([])}
      />
    </View>
  );
}

// UX Considerations:
// Whenever you click a button you should see a feedback animation
// "Thumb zone" is taken into consideration
// The clear history button should be displayed after the input results display area
// The calculator should be responsive to different screen sizes
// The calculator should be accessible to screen readers

const styles = StyleSheet.create({
  app: {
    // backgroundColor: "#000",
    backgroundColor: "white",
    paddingHorizontal: "5%",
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
  },
});
