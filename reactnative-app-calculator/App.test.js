import {
  fireEvent,
  render,
  screen,
  cleanup,
  waitFor,
} from "@testing-library/react-native";
import App from "./App";
import "@testing-library/jest-native/extend-expect";
import AsyncStorageMock from "@react-native-async-storage/async-storage";

//  consider tests for large numbers

describe("<App/>", () => {
  afterEach(() => {
    cleanup();
    jest.resetAllMocks();
  });

  it("calculates addition accurately to 2 decimal places", async () => {
    await waitFor(async () => {
      const app = render(<App />);
    });
    const button1 = screen.getByText("1");
    const button9 = screen.getByText("9");
    const buttonDecimal = screen.getByText(".");
    const buttonPlus = screen.getByText("+");
    const buttonEqualsArray = screen.queryAllByText("=");
    const buttonEquals = buttonEqualsArray[0];

    fireEvent.press(button1);
    fireEvent.press(buttonDecimal);
    fireEvent.press(button1);
    fireEvent.press(button1);
    fireEvent.press(button9);
    fireEvent.press(buttonPlus);
    fireEvent.press(button1);
    fireEvent.press(buttonEquals);

    expect(screen.getByText("1.119 + 1 = 2.12")).toBeDefined();
  });

  it("calculates subtraction accurately to 2 decimal places", async () => {
    await waitFor(async () => {
      const app = render(<App />);
    });
    const button1 = screen.getByText("1");
    const buttonDecimal = screen.getByText(".");
    const buttonMinus = screen.getByText("-");
    const buttonEqualsArray = screen.queryAllByText("=");
    const buttonEquals = buttonEqualsArray[0];

    fireEvent.press(button1);
    fireEvent.press(buttonDecimal);
    fireEvent.press(button1);
    fireEvent.press(button1);
    fireEvent.press(button1);
    fireEvent.press(buttonMinus);
    fireEvent.press(button1);
    fireEvent.press(buttonEquals);

    expect(screen.getByText("1.111 - 1 = 0.11")).toBeDefined();
  });

  it("calculates multiplication accurately to 2 decimal places", async () => {
    await waitFor(async () => {
      const app = render(<App />);
    });
    const button1 = screen.getByText("1");
    const button9 = screen.getByText("9");
    const buttonDecimal = screen.getByText(".");
    const buttonMultiply = screen.getByText("X");
    const buttonEqualsArray = screen.queryAllByText("=");
    const buttonEquals = buttonEqualsArray[0];

    fireEvent.press(button1);
    fireEvent.press(buttonDecimal);
    fireEvent.press(button1);
    fireEvent.press(button1);
    fireEvent.press(button1);
    fireEvent.press(buttonMultiply);
    fireEvent.press(button9);
    fireEvent.press(buttonEquals);

    expect(screen.getByText("1.111 * 9 = 10")).toBeDefined();
  });

  it("calculates division accurately to 2 decimal places", async () => {
    await waitFor(async () => {
      const app = render(<App />);
    });
    const button1 = screen.getByText("1");
    const button3 = screen.getByText("3");
    const buttonDivide = screen.getByText("/");
    const buttonEqualsArray = screen.queryAllByText("=");
    const buttonEquals = buttonEqualsArray[0];

    fireEvent.press(button1);
    fireEvent.press(button1);
    fireEvent.press(buttonDivide);
    fireEvent.press(button3);
    fireEvent.press(buttonEquals);

    expect(screen.getByText("11 / 3 = 3.67")).toBeDefined();
  });

  it("calculations can be performed on 0", async () => {
    await waitFor(async () => {
      const app = render(<App />);
    });
    const button0 = screen.getByText("0");
    const button3 = screen.getByText("3");
    const buttonMultiply = screen.getByText("X");
    const buttonEqualsArray = screen.queryAllByText("=");
    const buttonEquals = buttonEqualsArray[0];

    fireEvent.press(button0);
    fireEvent.press(buttonMultiply);
    fireEvent.press(button3);
    fireEvent.press(buttonEquals);

    expect(screen.getByText("0 * 3 = 0")).toBeDefined();
  });

  it("can handle a decimal point input for first operand without any numbers before or after it", async () => {
    await waitFor(async () => {
      const app = render(<App />);
    });
    const buttonDecimal = screen.getByText(".");
    const button3 = screen.getByText("3");
    const buttonPlus = screen.getByText("+");
    const buttonEqualsArray = screen.queryAllByText("=");
    const buttonEquals = buttonEqualsArray[0];

    fireEvent.press(buttonDecimal);
    fireEvent.press(buttonPlus);
    fireEvent.press(button3);
    fireEvent.press(buttonEquals);

    expect(screen.getByText("0. + 3 = 3")).toBeDefined();
  });

  it("can handle a decimal point input for second operand without any numbers before or after it", async () => {
    await waitFor(async () => {
      const app = render(<App />);
    });
    const buttonDecimal = screen.getByText(".");
    const button3 = screen.getByText("3");
    const buttonPlus = screen.getByText("+");
    const buttonEqualsArray = screen.queryAllByText("=");
    const buttonEquals = buttonEqualsArray[0];

    fireEvent.press(button3);
    fireEvent.press(buttonPlus);
    fireEvent.press(buttonDecimal);
    fireEvent.press(buttonEquals);

    expect(screen.getByText("3 + 0. = 3")).toBeDefined();
  });

  //   ?check decimals for second operand
  it("Can only input one decimal point per number", async () => {
    await waitFor(async () => {
      const app = render(<App />);
    });
    const buttonDecimal = screen.getByText(".");
    const button3 = screen.getByText("3");

    fireEvent.press(button3);
    fireEvent.press(buttonDecimal);
    fireEvent.press(buttonDecimal);
    fireEvent.press(button3);
    fireEvent.press(buttonDecimal);
    fireEvent.press(button3);
    fireEvent.press(button3);

    expect(screen.getByText("3.333")).toBeDefined();
  });

  it("can output negative numbers", async () => {
    await waitFor(async () => {
      const app = render(<App />);
    });
    const button3 = screen.getByText("3");
    const button9 = screen.getByText("9");
    const buttonMinus = screen.getByText("-");
    const buttonEqualsArray = screen.queryAllByText("=");
    const buttonEquals = buttonEqualsArray[0];

    fireEvent.press(button3);
    fireEvent.press(buttonMinus);
    fireEvent.press(button9);
    fireEvent.press(buttonEquals);

    expect(screen.getByText("3 - 9 = -6")).toBeDefined();
  });
  // Needs work
  it("Equals button requires both operands and operator before functioning", async () => {
    await waitFor(async () => {
      const app = render(<App />);
    });
    const button3 = screen.getByText("3");
    const buttonMinus = screen.getByText("-");
    const EqualsArray = screen.queryAllByText("=");
    const buttonEquals = EqualsArray[0];
    const operationDisplay = screen.getByTestId("display");
    const pastCalculations = screen.getByText("History");

    fireEvent.press(pastCalculations);
    fireEvent.press(buttonEquals);

    expect(operationDisplay.props.children).toBe("");
    expect(screen.queryByTestId("history")).toBeNull();

    fireEvent.press(button3);
    fireEvent.press(buttonEquals);
    expect(operationDisplay.props.children).toBe("3");
    expect(screen.queryByTestId("history")).toBeNull();

    fireEvent.press(buttonMinus);
    fireEvent.press(buttonEquals);
    expect(operationDisplay.props.children).toBe("3 -");
    expect(screen.queryByTestId("history")).toBeNull();

    fireEvent.press(button3);
    fireEvent.press(buttonEquals);
    expect(operationDisplay.props.children).toBe("3 - 3 = 0");
    expect(screen.getByTestId("history").props.children).toBe("3 - 3 = 0");
  });
  // needs work. ? check operation display text to have correct length
  it("operator only input to calculation if there is a first operand and no operator or second operand", async () => {
    await waitFor(async () => {
      const app = render(<App />);
    });
    const button3 = screen.getByText("3");
    const buttonMinus = screen.getByText("-");
    const buttonPlus = screen.getByText("+");
    const operationDisplay = screen.getByTestId("display");

    fireEvent.press(buttonMinus);

    expect(operationDisplay.props.children).toBe("");

    fireEvent.press(button3);
    expect(operationDisplay.props.children).toBe("3");

    fireEvent.press(buttonMinus);
    expect(operationDisplay.props.children).toBe("3 -");

    fireEvent.press(button3);
    fireEvent.press(buttonPlus);

    expect(operationDisplay.props.children).toBe("3 - 3");
  });

  it("when result is calculated it is added to local storage and displayed in past calculations", async () => {
    await waitFor(async () => {
      const app = render(<App />);
    });
    const button3 = screen.getByText("3");
    const buttonPlus = screen.getByText("+");
    const EqualsArray = screen.queryAllByText("=");
    const buttonEquals = EqualsArray[0];
    const pastCalculations = screen.getByText("History");

    fireEvent.press(button3);
    fireEvent.press(buttonPlus);
    fireEvent.press(button3);
    fireEvent.press(buttonEquals);
    fireEvent.press(pastCalculations);

    expect(AsyncStorageMock.setItem.mock.calls[0]).toEqual([
      "pastCalculations",
      '["3 + 3 = 6"]',
    ]);

    expect(screen.getByTestId("history").props.children).toBe("3 + 3 = 6");
  });

  it("When page is loaded past calculations are retrieved from local storage and displayed in the dropdown", async () => {
    AsyncStorageMock.getItem.mockResolvedValue(JSON.stringify(["1 + 1 = 2"]));

    await waitFor(async () => {
      const app = render(<App />);
    });

    const pastCalculations = screen.getByText("History");

    fireEvent.press(pastCalculations);

    expect(screen.getByText("1 + 1 = 2")).toBeDefined();
  });

  it("when clear history button is pressed, past calculations are cleared from display and local storage", async () => {
    await waitFor(async () => {
      const app = render(<App />);
    });
    const button3 = screen.getByText("3");
    const buttonPlus = screen.getByText("+");
    const EqualsArray = screen.queryAllByText("=");
    const buttonEquals = EqualsArray[0];
    const pastCalculations = screen.getByText("History");
    const clearHistory = screen.getByText("Clear History");

    fireEvent.press(button3);
    fireEvent.press(buttonPlus);
    fireEvent.press(button3);
    fireEvent.press(buttonEquals);
    fireEvent.press(pastCalculations);
    fireEvent.press(clearHistory);

    expect(AsyncStorageMock.setItem.mock.calls[1]).toEqual([
      "pastCalculations",
      "[]",
    ]);

    expect(screen.queryByTestId("history")).toBeNull();
  });

  it("delete button deletes latest input prior to result being calculated", async () => {
    await waitFor(async () => {
      const app = render(<App />);
    });
    const button3 = screen.getByText("3");
    const buttonPlus = screen.getByText("+");
    const EqualsArray = screen.queryAllByText("=");
    const buttonEquals = EqualsArray[0];
    const buttonDelete = screen.getByText("Del");

    fireEvent.press(button3);
    fireEvent.press(buttonPlus);
    fireEvent.press(button3);
    fireEvent.press(buttonDelete);

    expect(screen.getByTestId("display").props.children).toBe("3 +");

    fireEvent.press(buttonDelete);

    expect(screen.getByTestId("display").props.children).toBe("3");

    fireEvent.press(buttonDelete);

    expect(screen.getByTestId("display").props.children).toBe("");
  });
  it("delete button clears display after result is calculated", async () => {
    await waitFor(async () => {
      const app = render(<App />);
    });
    const button3 = screen.getByText("3");
    const buttonPlus = screen.getByText("+");
    const EqualsArray = screen.queryAllByText("=");
    const buttonEquals = EqualsArray[0];
    const buttonDelete = screen.getByText("Del");

    fireEvent.press(button3);
    fireEvent.press(buttonPlus);
    fireEvent.press(button3);
    fireEvent.press(buttonEquals);

    expect(screen.getByTestId("display").props.children).toBe("3 + 3 = 6");

    fireEvent.press(buttonDelete);

    expect(screen.getByTestId("display").props.children).toBe("");
  });
  it("Once result is calculated operator button clears display and input result as first operand followed by new operator", async () => {
    await waitFor(async () => {
      const app = render(<App />);
    });
    const button3 = screen.getByText("3");
    const buttonPlus = screen.getByText("+");
    const EqualsArray = screen.queryAllByText("=");
    const buttonEquals = EqualsArray[0];

    fireEvent.press(button3);
    fireEvent.press(buttonPlus);
    fireEvent.press(button3);
    fireEvent.press(buttonEquals);
    fireEvent.press(buttonPlus);

    expect(screen.getByTestId("display").props.children).toBe("6 +");
  });

  it("Once result is calculated number button clears display and sets number as first operand", async () => {
    await waitFor(async () => {
      const app = render(<App />);
    });
    const button3 = screen.getByText("3");
    const button6 = screen.getByText("6");
    const buttonPlus = screen.getByText("+");
    const EqualsArray = screen.queryAllByText("=");
    const buttonEquals = EqualsArray[0];

    fireEvent.press(button3);
    fireEvent.press(buttonPlus);
    fireEvent.press(button3);
    fireEvent.press(buttonEquals);
    fireEvent.press(button6);

    expect(screen.getByTestId("display").props.children).toBe("6");
  });

  it("Once result is calculated decimal button clears display and sets ' 0.' as first operand", async () => {
    await waitFor(async () => {
      const app = render(<App />);
    });
    const button3 = screen.getByText("3");
    const buttonDecimal = screen.getByText(".");
    const buttonPlus = screen.getByText("+");
    const EqualsArray = screen.queryAllByText("=");
    const buttonEquals = EqualsArray[0];

    fireEvent.press(button3);
    fireEvent.press(buttonPlus);
    fireEvent.press(button3);
    fireEvent.press(buttonEquals);
    fireEvent.press(buttonDecimal);

    expect(screen.getByTestId("display").props.children).toBe("0.");
  });
});
