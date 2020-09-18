//IMPORTING CALCULATOR CLASS
import Calculator from "./calculator.js";

//VARIABLES
const numberBtns = document.querySelectorAll("[data-number]");
const operatorBtns = document.querySelectorAll("[data-operator]");
const allClearBtn = document.querySelector("[data-all-clear]");
const delBtn = document.querySelector("[data-delete]");
const equalsBtn = document.querySelector("[data-equals]");
const previousDataOperand = document.querySelector("[data-previous-operand]");
const currentDataOperand = document.querySelector("[data-current-operand]");

//CREATING A CALCULATOR OBJECT.
const calculator = new Calculator(previousDataOperand, currentDataOperand);

//ADDING EVENT LISTENERS TO ALL NUMBERS.
numberBtns.forEach((number) => {
  number.addEventListener("click", () => {
    calculator.appendNumber(number.textContent);
    calculator.updateDisplay();
  });
});

//ADDING EVENT LISTENERS TO ALL OPERATORS.
operatorBtns.forEach((operator) => {
  operator.addEventListener("click", () => {
    calculator.addOperator(operator.textContent);
    calculator.updateDisplay();
  });
});

//ADDING EVENT LISTENERS TO THE OTHER ACTIONS.
//EQUALS ACTION.
equalsBtn.addEventListener("click", () => {
  calculator.equals();
  calculator.updateDisplay();
});

//ALL CLEAR ACTION.
allClearBtn.addEventListener("click", () => {
  calculator.clear();
  calculator.updateDisplay();
});

//DELETE ACTION.
delBtn.addEventListener("click", () => {
  calculator.delete();
  calculator.updateDisplay();
});
