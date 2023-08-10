import ButtonContainer from "./components/ButtonContainer";
import OperationDisplay from "./components/OperationDisplay";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  // The names of this state 'operationDisplay' is also the same as the component OperationDisplay.
  // Whilst this state is passed to the OperationDisplay, the 'history' state is as well.
  // This could confuse a developer who is not familiar with the codebase.
  const [operationDisplay, setOperationDisplay] = useState("");
  const [firstOperand, setFirstOperand] = useState("");
  const [secondOperand, setSecondOperand] = useState("");
  const [operator, setOperator] = useState("");
  const [result, setResult] = useState("");
  // the value for history should draw from the local storage upon initiation
  const [history, setHistory] = useState(["1 + 1 = 2", "2 * 2 = 4"]);

  // the names of these theme colours are not semantically intuitive:
  // Secondary is not a good name for the colour of the operator buttons,
  // nor warning for the delete button, nor info for the equals button etc.
  const theme = createTheme({
    palette: {
      primary: {
        main: "#DBD8AE",
      },
      secondary: {
        main: "#CA907E",
      },
      warning: {
        main: "#B6636E",
      },
      error: {
        main: "#9E2A2B",
      },
      info: {
        main: "#BA9D9F",
      },
    },
  });

  // Missing functionality:
  // There is currently no function to handle the delete button clicks.
  // The delete button should clear the most recent input
  // If the DELETE button is pressed after a calculation is completed then it should clear the entire display area.
  // But the cleared calculation should still be saved to history
  // consider this edge case: User changing their mind on which operator they wanted to use.
  // There is currently no function to store history in local storage.
  // The clear history button should clear the history from local storage.
  // There is no code to round the result to 2 decimal places.
  // Button Clicked needs to limit size of number inputs.
  // There are no tests

  // buttonClicked function needs to be able to handle the following:
  // 1. If "=" is pushed before all operands or operators are input, it should do nothing.
  // 2. If an operator is pushed before the first operand is input, it should do nothing.
  // 3. If an operator is pushed after the first operand is input, it should set the operator state and move to the second operand.
  // 4. If an operator is pushed after the second operand is input, it should do nothing.
  // 5. After the calculation is complete if the user inputs additional numbers the previous calculation is saved to history and the new input is shown in the display area.
  // 6. The user should not be able to input more than one decimal point per operand.
  const buttonClicked = (char) => {
    if (isFirstOperand(char)) {
      setFirstOperand((previousValue) => previousValue + char);
    } else if (isSecondOperand(char)) {
      // Not an intuitive location for calculateResult function. Hard to read.
      if (char === "=") {
        calculateResult();
      } else {
        setSecondOperand((previousValue) => previousValue + char);
      }
    } else {
      setOperator(char);
    }
  };

  // Checking these conditions should be done in the buttonClicked function since they are not recycled nor are they complicated.
  // What if the person pushes equals? equals should not be recognised as an operand
  // Whist the name is descriptive, isolating these condition checks to a separate function makes it harder to read,
  // since there are many other conditions other than these that need to be considered in buttonClicked other than these
  const isFirstOperand = (char) => {
    return !operator && !isOperator(char);
  };

  // Checking these conditions should be done in the buttonClicked function since they are not recycled nor are they complicated.
  // What if the person pushes equals? equals should not be recognised as an operand
  // Whist the name is descriptive, isolating these condition checks to a separate function makes it harder to read,
  // since there are many other conditions other than these that need to be considered in buttonClicked other than these
  const isSecondOperand = (char) => {
    return operator && !isOperator(char);
  };

  const isOperator = (char) => {
    return char === "+" || char === "-" || char === "*" || char === "/";
  };

  // Currently the clearStates function is not working properly.
  // ClearStates needs to clear the result, firstOperand, secondOperand, and operator.
  // It also possibly needs to execute a function to record the calculation in history, and update local storage, if calculateResult is not doing that already.
  const clearStates = () => {};

  // Currently the calculateResult function is not working properly. It only adds the two operands together.
  // CalculateResult requires the firstOperand, secondOperand, and operator.
  // Then it needs to determine which operator to use and calculate the result.
  // It also possibly needs to execute a function to record the calculation in history state, and update local storage.
  // It is unclear to me why we would want to clear the states straight after calculating the result, perhaps it should be removed from this function and executed elsewhere.
  // It needs to round the answer to 2 decimal places.
  const calculateResult = () => {
    setResult(Number(firstOperand) + Number(secondOperand));
    clearStates();
  };
  // This use effect should be below the state declaration for readability
  useEffect(() => {
    // Consider getting rid of empty spaces and "=" until requires. eg if the user inputs a 3 then "3" will be displayed instead of "3  ="

    setOperationDisplay(
      `${firstOperand} ${operator} ${secondOperand} = ${result}`
    );
  }, [result, firstOperand, secondOperand, operator]);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <ButtonContainer
          onButton={buttonClicked}
          onClear={() => setHistory([])}
        ></ButtonContainer>
        {/* The variable names d and h are not semantically intuitive*/}
        <OperationDisplay d={operationDisplay} h={history}></OperationDisplay>
      </div>
    </ThemeProvider>
  );
}

export default App;
