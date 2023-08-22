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
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

jest.mock("react-native-safe-area-context");

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

    fireEvent(button1, "pressIn");
    fireEvent(buttonDecimal, "pressIn");
    fireEvent(button1, "pressIn");
    fireEvent(button1, "pressIn");
    fireEvent(button9, "pressIn");
    fireEvent(buttonPlus, "pressIn");
    fireEvent(button1, "pressIn");
    fireEvent(buttonEquals, "pressIn");

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

    fireEvent(button1, "pressIn");
    fireEvent(buttonDecimal, "pressIn");
    fireEvent(button1, "pressIn");
    fireEvent(button1, "pressIn");
    fireEvent(button1, "pressIn");
    fireEvent(buttonMinus, "pressIn");
    fireEvent(button1, "pressIn");
    fireEvent(buttonEquals, "pressIn");

    expect(screen.getByText("1.111 - 1 = 0.11")).toBeDefined();
  });

  it("calculates multiplication accurately to 2 decimal places", async () => {
    await waitFor(async () => {
      const app = render(<App />);
    });
    const button1 = screen.getByText("1");
    const button9 = screen.getByText("9");
    const buttonDecimal = screen.getByText(".");
    const buttonMultiply = screen.getByText("x");
    const buttonEqualsArray = screen.queryAllByText("=");
    const buttonEquals = buttonEqualsArray[0];

    fireEvent(button1, "pressIn");
    fireEvent(buttonDecimal, "pressIn");
    fireEvent(button1, "pressIn");
    fireEvent(button1, "pressIn");
    fireEvent(button1, "pressIn");
    fireEvent(buttonMultiply, "pressIn");
    fireEvent(button9, "pressIn");
    fireEvent(buttonEquals, "pressIn");

    expect(screen.getByText("1.111 x 9 = 10")).toBeDefined();
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

    fireEvent(button1, "pressIn");
    fireEvent(button1, "pressIn");
    fireEvent(buttonDivide, "pressIn");
    fireEvent(button3, "pressIn");
    fireEvent(buttonEquals, "pressIn");

    expect(screen.getByText("11 / 3 = 3.67")).toBeDefined();
  });

  it("calculations can be performed on 0", async () => {
    await waitFor(async () => {
      const app = render(<App />);
    });
    const button0 = screen.getByText("0");
    const button3 = screen.getByText("3");
    const buttonMultiply = screen.getByText("x");
    const buttonEqualsArray = screen.queryAllByText("=");
    const buttonEquals = buttonEqualsArray[0];

    fireEvent(button0, "pressIn");
    fireEvent(buttonMultiply, "pressIn");
    fireEvent(button3, "pressIn");
    fireEvent(buttonEquals, "pressIn");

    expect(screen.getByText("0 x 3 = 0")).toBeDefined();
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

    fireEvent(buttonDecimal, "pressIn");
    fireEvent(buttonPlus, "pressIn");
    fireEvent(button3, "pressIn");
    fireEvent(buttonEquals, "pressIn");

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

    fireEvent(button3, "pressIn");
    fireEvent(buttonPlus, "pressIn");
    fireEvent(buttonDecimal, "pressIn");
    fireEvent(buttonEquals, "pressIn");

    expect(screen.getByText("3 + 0. = 3")).toBeDefined();
  });
  it("Can only input one decimal point per number", async () => {
    await waitFor(async () => {
      const app = render(<App />);
    });
    const buttonDecimal = screen.getByText(".");
    const button3 = screen.getByText("3");

    fireEvent(button3, "pressIn");
    fireEvent(buttonDecimal, "pressIn");
    fireEvent(buttonDecimal, "pressIn");
    fireEvent(button3, "pressIn");
    fireEvent(buttonDecimal, "pressIn");
    fireEvent(button3, "pressIn");
    fireEvent(button3, "pressIn");

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

    fireEvent(button3, "pressIn");
    fireEvent(buttonMinus, "pressIn");
    fireEvent(button9, "pressIn");
    fireEvent(buttonEquals, "pressIn");

    expect(screen.getByText("3 - 9 = -6")).toBeDefined();
  });

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

    fireEvent(pastCalculations, "press");
    fireEvent(buttonEquals, "pressIn");

    expect(operationDisplay.props.children).toBe("");
    expect(screen.queryByTestId("history")).toBeNull();

    fireEvent(button3, "pressIn");
    fireEvent(buttonEquals, "pressIn");
    expect(operationDisplay.props.children).toBe("3");
    expect(screen.queryByTestId("history")).toBeNull();

    fireEvent(buttonMinus, "pressIn");
    fireEvent(buttonEquals, "pressIn");
    expect(operationDisplay.props.children).toBe("3 -");
    expect(screen.queryByTestId("history")).toBeNull();

    fireEvent(button3, "pressIn");
    fireEvent(buttonEquals, "pressIn");
    expect(operationDisplay.props.children).toBe("3 - 3 = 0");
    expect(screen.getByTestId("history").props.children).toBe("3 - 3 = 0");
  });

  it("operator only input to calculation if there is a first operand and no operator or second operand", async () => {
    await waitFor(async () => {
      const app = render(<App />);
    });
    const button3 = screen.getByText("3");
    const buttonMinus = screen.getByText("-");
    const buttonPlus = screen.getByText("+");
    const operationDisplay = screen.getByTestId("display");

    fireEvent(buttonMinus, "pressIn");

    expect(operationDisplay.props.children).toBe("");

    fireEvent(button3, "pressIn");
    expect(operationDisplay.props.children).toBe("3");

    fireEvent(buttonMinus, "pressIn");
    expect(operationDisplay.props.children).toBe("3 -");

    fireEvent(button3, "pressIn");
    fireEvent(buttonPlus, "pressIn");

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

    fireEvent(button3, "pressIn");
    fireEvent(buttonPlus, "pressIn");
    fireEvent(button3, "pressIn");
    fireEvent(buttonEquals, "pressIn");
    fireEvent(pastCalculations, "press");

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

    fireEvent(pastCalculations, "press");

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

    fireEvent(button3, "pressIn");
    fireEvent(buttonPlus, "pressIn");
    fireEvent(button3, "pressIn");
    fireEvent(buttonEquals, "pressIn");
    fireEvent(pastCalculations, "pressIn");
    fireEvent(clearHistory, "pressIn");

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

    fireEvent(button3, "pressIn");
    fireEvent(buttonPlus, "pressIn");
    fireEvent(button3, "pressIn");
    fireEvent(buttonDelete, "pressIn");

    expect(screen.getByTestId("display").props.children).toBe("3 +");

    fireEvent(buttonDelete, "pressIn");

    expect(screen.getByTestId("display").props.children).toBe("3");

    fireEvent(buttonDelete, "pressIn");

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

    fireEvent(button3, "pressIn");
    fireEvent(buttonPlus, "pressIn");
    fireEvent(button3, "pressIn");
    fireEvent(buttonEquals, "pressIn");

    expect(screen.getByTestId("display").props.children).toBe("3 + 3 = 6");

    fireEvent(buttonDelete, "pressIn");

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

    fireEvent(button3, "pressIn");
    fireEvent(buttonPlus, "pressIn");
    fireEvent(button3, "pressIn");
    fireEvent(buttonEquals, "pressIn");
    fireEvent(buttonPlus, "pressIn");

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

    fireEvent(button3, "pressIn");
    fireEvent(buttonPlus, "pressIn");
    fireEvent(button3, "pressIn");
    fireEvent(buttonEquals, "pressIn");
    fireEvent(button6, "pressIn");

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

    fireEvent(button3, "pressIn");
    fireEvent(buttonPlus, "pressIn");
    fireEvent(button3, "pressIn");
    fireEvent(buttonEquals, "pressIn");
    fireEvent(buttonDecimal, "pressIn");

    expect(screen.getByTestId("display").props.children).toBe("0.");
  });
});
