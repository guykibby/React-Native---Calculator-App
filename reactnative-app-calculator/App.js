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

  // . + . = NaN
  // There is no code to handle the case where the user inputs a decimal point without any numbers before or after it.
  // There is no code to handle the case where the user inputs a decimal point without any numbers after it.
  // There is no code to handle the case where the user inputs a decimal point without any numbers before it.
  // There is no code to handle the case where the user inputs multiple decimal points.

  // ?The calculator can not display negative results, or is it only becuase of + operation?

  // Tests are not implemented.

  // UX Considerations:
  // Whenever you click a button you should see a feedback animation
  // "Thumb zone" is taken into consideration
  // The clear history button should be displayed after the input results display area
  // The calculator should be responsive to different screen sizes
  // The calculator should be accessible to screen readers

  // buttonClicked function needs to be able to handle the following:
  // 1. If "=" is pushed before all operands or operators are input, it should do nothing.
  // 2. If an operator is pushed before the first operand is input, it should do nothing.
  // 3. If an operator is pushed after the first operand is input, it should set the operator state.
  // 4. If an operator is pushed after the second operand is input, it should do nothing.
  // 5. After the calculation is complete if the user inputs additional numbers the previous calculation is saved to history and the new input is shown in the display area.

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
    // if (firstOperand && operator && secondOperand) {

    // const testNum = [
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
    // testNum.forEach((num) => {
    //   console.log(num);
    //   console.log(isNumber(num));
    // });

    // console.log(Number(".") + Number("."));
    // console.log(Number("0.") + Number("0."));
    // console.log(isNumber(firstOperand));
  };

  const deleteClicked = () => {
    // This function should delete the most recent input.
    // If the DELETE button is pressed after a calculation is completed then it should clear the entire display area.
    // But the cleared calculation should still be saved to history
    // consider this edge case: User changing their mind on which operator they wanted to use.
    clearStates();
    console.log("delete clicked");
  };

  const isOperator = (char) => {
    return char === "+" || char === "-" || char === "*" || char === "/";
  };

  const isNumber = (str) => {
    // return isFinite(str);
    return +str === +str;
  };

  // const isFirstOperand = (char) => {
  //   return !operator;
  // };

  // const isSecondOperand = (char) => {
  //   return operator && !isOperator(char);
  // };

  // Currently the clearStates function is not working properly.
  // ClearStates needs to clear the result, firstOperand, secondOperand, and operator.
  // It also possibly needs to execute a function to record the calculation in history, and update local storage, if calculateResult is not doing that already.
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
    setResult(Number(firstOperand) + Number(secondOperand));
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
      <OperationDisplay d={operationDisplay} h={history} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
