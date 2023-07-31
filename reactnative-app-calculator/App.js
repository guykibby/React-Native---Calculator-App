import React, { useState, useEffect } from "react";
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

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem("pastCalculations");
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      return;
    }
  };

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("pastCalculations", jsonValue);
    } catch (e) {
      return;
    }
  };

  useEffect(() => {
    getData().then((value) => {
      if (value) {
        setHistory(value);
      }
    });
  }, []);

  useEffect(() => {
    let tempDisplay = `${firstOperand}${operator && " " + operator}${
      secondOperand && " " + secondOperand
    }${result && " = " + result}`;

    if (result && tempDisplay.length > 28) {
      setOperationDisplay("= " + result);
    } else {
      setOperationDisplay(tempDisplay);
    }
  }, [firstOperand, secondOperand, operator, result]);

  const buttonClicked = (char) => {
    if (result) {
      clearStates(char);
      return;
    }

    if (!firstOperand) {
      if (isNumber(char)) {
        setFirstOperand(char);
      }
      if (char === ".") {
        setFirstOperand("0.");
      }
    }

    if (firstOperand && !operator) {
      if (firstOperand.length < 10) {
        if (isNumber(char)) {
          setFirstOperand((previousValue) => previousValue + char);
        }
        if (char === "." && !firstOperand.includes(".")) {
          setFirstOperand((previousValue) => previousValue + char);
        }
      }
      if (isOperator(char)) {
        setOperator(char);
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
      if (secondOperand.length < 10) {
        if (isNumber(char)) {
          setSecondOperand((previousValue) => previousValue + char);
        }
        if (char === "." && !secondOperand.includes(".")) {
          setSecondOperand((previousValue) => previousValue + char);
        }
      }
      if (char === "=") {
        calculateResult();
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
    return char === "+" || char === "-" || char === "x" || char === "/";
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

  const calculateResult = () => {
    let tempResult = null;
    if (operator === "+") {
      tempResult = Number(firstOperand) + Number(secondOperand);
    }
    if (operator === "-") {
      tempResult = Number(firstOperand) - Number(secondOperand);
    }
    if (operator === "x") {
      tempResult = Number(firstOperand) * Number(secondOperand);
    }
    if (operator === "/") {
      tempResult = Number(firstOperand) / Number(secondOperand);
    }
    if (!Number.isInteger(tempResult)) {
      tempResult = Number(tempResult.toFixed(2));
    }

    const tempHistory = [
      `${firstOperand} ${operator} ${secondOperand} = ${tempResult}`,
      ...history,
    ];

    setHistory(tempHistory);
    storeData(tempHistory);
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
        onClear={() => {
          setHistory([]);
          storeData([]);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    backgroundColor: "black",
    flex: 1,
    alignItems: "center",
    borderWidth: 1,
  },
});
