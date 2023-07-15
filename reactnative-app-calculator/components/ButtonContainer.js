import { View, StyleSheet } from "react-native";
import { Button } from "react-native-elements";

export default function ButtonContainer({ onButton, onClear }) {
  return (
    <>
      <View style={styles.btnContainer}>
        <View style={styles.numericBtnContainer}>
          <Button
            title="1"
            onPress={() => onButton("1")}
            buttonStyle={styles.button}
          />
          <Button
            title="2"
            onPress={() => onButton("2")}
            buttonStyle={styles.button}
          />
          <Button
            title="3"
            onPress={() => onButton("3")}
            buttonStyle={styles.button}
          />
          <Button
            title="4"
            onPress={() => onButton("4")}
            buttonStyle={styles.button}
          />
          <Button
            title="5"
            onPress={() => onButton("5")}
            buttonStyle={styles.button}
          />
          <Button
            title="6"
            onPress={() => onButton("6")}
            buttonStyle={styles.button}
          />
          <Button
            title="7"
            onPress={() => onButton("7")}
            buttonStyle={styles.button}
          />
          <Button
            title="8"
            onPress={() => onButton("8")}
            buttonStyle={styles.button}
          />
          <Button
            title="9"
            onPress={() => onButton("9")}
            buttonStyle={styles.button}
          />
          <Button
            title="0"
            onPress={() => onButton("0")}
            buttonStyle={styles.button}
          />
          <Button
            title="."
            onPress={() => onButton(".")}
            buttonStyle={styles.button}
          />
          <Button
            title="="
            onPress={() => onButton("=")}
            buttonStyle={[styles.button, styles.infoButton]}
          />
        </View>
        <View style={styles.operatorBtnContainer}>
          <Button
            title="+"
            onPress={() => onButton("+")}
            buttonStyle={[styles.button, styles.secondaryButton]}
          />
          <Button
            title="-"
            onPress={() => onButton("-")}
            buttonStyle={[styles.button, styles.secondaryButton]}
          />
          <Button
            title="*"
            onPress={() => onButton("*")}
            buttonStyle={[styles.button, styles.secondaryButton]}
          />
          <Button
            title="/"
            onPress={() => onButton("/")}
            buttonStyle={[styles.button, styles.secondaryButton]}
          />
        </View>
      </View>
      <View style={styles.calculatorControls}>
        <Button title="Delete" buttonStyle={styles.warningButton} />
        <Button
          title="Clear history"
          onPress={onClear}
          buttonStyle={styles.errorButton}
        />
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
  },
  errorButton: {
    backgroundColor: "#9E2A2B",
  },
  calculatorControls: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
