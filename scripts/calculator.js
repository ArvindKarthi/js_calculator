export default class Calculator {
  constructor(previousDataOperand, currentDataOperand) {
    this.previousDataOperand = previousDataOperand;
    this.currentDataOperand = currentDataOperand;
    this.clear();
  }

  appendNumber(number) {
    if (number === "." && this.currentText.includes(".")) {
      return;
    }
    this.currentText += number.toString();
  }
  addOperator(operator) {
    if (this.previousText === "" && this.currentText === "") {
      return;
    } else if (this.currentText === "") {
      return;
    } else if (this.previousText !== "" && this.currentText !== "") {
      this.calculate();
    }
    this.operator = operator;
    this.previousText = this.currentText;
    this.currentText = "";
  }
  calculate() {
    switch (this.operator) {
      case "/":
        this.currentText = (
          parseFloat(this.previousText) / parseFloat(this.currentText)
        ).toString();
        break;
      case "*":
        this.currentText = (
          parseFloat(this.previousText) * parseFloat(this.currentText)
        ).toString();
        break;
      case "+":
        this.currentText = (
          parseFloat(this.previousText) + parseFloat(this.currentText)
        ).toString();
        break;
      case "-":
        this.currentText = (
          parseFloat(this.previousText) - parseFloat(this.currentText)
        ).toString();
        break;
    }
  }
  clear() {
    this.previousText = "";
    this.currentText = "";
    this.operator = undefined;
  }
  delete() {
    if (this.currentText !== "") {
      this.currentText = this.currentText.substring(
        0,
        this.currentText.length - 1
      );
    }
  }
  equals() {
    if (this.previousText !== "" && this.currentText !== "" && this.operator) {
      this.calculate();
      this.previousText = "";
      this.operator = undefined;
    } else if (this.previousText !== "" && this.currentText === "") {
      this.currentText = this.previousText;
      this.previousText = "";
      this.operator = undefined;
    }
  }
  commaAdder(number) {
    if (number === "" || number.includes("e")) return number;
    if (number.includes(".")) {
      let newNumber = "";
      let splittedNumber = number.split(".");
      let len = splittedNumber[0].length;
      for (let itr = len - 1, ctr = 1; itr >= 0; itr--, ctr++) {
        let comma =
          ctr % 3 === 0 && itr != 0 && splittedNumber[0][itr - 1] !== "-"
            ? ","
            : "";
        newNumber = `${comma}${splittedNumber[0][itr]}`.concat("", newNumber);
      }
      return newNumber + "." + splittedNumber[1];
    } else {
      let newNumber = "";
      let len = number.length;
      for (let itr = len - 1, ctr = 1; itr >= 0; itr--, ctr++) {
        let comma =
          ctr % 3 === 0 && itr != 0 && number[itr - 1] !== "-" ? "," : "";
        newNumber = `${comma}${number[itr]}`.concat("", newNumber);
      }
      return newNumber;
    }
  }
  updateDisplay() {
    this.previousDataOperand.textContent =
      this.commaAdder(this.previousText) + (this.operator ? this.operator : "");
    this.currentDataOperand.textContent = this.commaAdder(this.currentText);
    if (
      this.previousDataOperand.textContent === "" &&
      this.currentDataOperand.textContent === ""
    ) {
      this.currentDataOperand.textContent = "0";
    }
  }
}
