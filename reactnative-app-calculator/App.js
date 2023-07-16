import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import ButtonContainer from "./components/ButtonContainer";
import OperationDisplay from "./components/OperationDisplay";

export default function App() {
  const [operationDisplay, setOperationDisplay] = useState("");
  const [firstOperand, setFirstOperand] = useState("");
  const [secondOperand, setSecondOperand] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");
  const [history, setHistory] = useState(["1 + 1 = 2", "2 * 2 = 4"]);

  // There is currently no function to store history in local storage.
  // The clear history button should clear the history from local storage.

  // There is no code to round the result to 2 decimal places.

  // ?The calculator can not display negative results, or is it only becuase of + operation?

  // Button Clicked needs to limit size of number inputs.
  // calculateResult needs to handle extremelely large numbers.

  // Tests are not implemented.
  // const testInputs = [
  //   "",
  //   ".",
  //   "0.0",
  //   "0...",
  //   ".0",
  //   "0.",
  //   "12345.",
  //   "111/",
  //   "=",
  //   "/",
  //   "+",
  //   "-",
  //   "*",
  // ];

  // UX Considerations:
  // Whenever you click a button you should see a feedback animation
  // "Thumb zone" is taken into consideration
  // The clear history button should be displayed after the input results display area
  // The calculator should be responsive to different screen sizes
  // The calculator should be accessible to screen readers

  const buttonClicked = (char) => {
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
    // This function should delete the most recent input.
    // If the DELETE button is pressed after a calculation is completed then it should clear the entire display area.
    // But the cleared calculation should still be saved to history
    // consider this edge case: User changing their mind on which operator they wanted to use.
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

  // ClearStates function requires:
  // It also possibly needs to execute a function to record the calculation in history, and update local storage, if calculateResult is not doing that already.
  // After the calculation is complete if the user inputs additional numbers the previous calculation is saved to history and the new input is shown in the display area.
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

  // Currently the calculateResult function is not working properly. It only adds the two operands together.
  // CalculateResult requires the firstOperand, secondOperand, and operator.
  // Then it needs to determine which operator to use and calculate the result.
  // It also possibly needs to execute a function to record the calculation in history, and update local storage.
  // It is unclear to me why we would want to clear the states straight after calculating the result, perhaps it should be removed from this function and executed elsewhere.
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
    if (Number.isInteger(tempResult)) {
      setResult(tempResult);
    } else {
      const roundedResult = tempResult.toFixed(1);
      if (tempResult.toFixed(1) === tempResult.toString()) {
        setResult(tempResult);
      } else {
        setResult(tempResult.toFixed(2));
      }
    }
  };

  useEffect(() => {
    setOperationDisplay(
      `${firstOperand} ${operator} ${secondOperand} = ${result}`
    );
  }, [firstOperand, secondOperand, operator, result]);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* ? The onClear function should be given to the Operation Display */}
      <ButtonContainer
        onButton={buttonClicked}
        onDelete={deleteClicked}
        onClear={() => setHistory([])}
      />

      {/* The variable names d and h are not semantically intuitive*/}
      <OperationDisplay d={operationDisplay} h={history} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
