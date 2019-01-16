// where you are now, 1/15/2019
// you are trying to parse out the different numbers and operators from the displayValue so you can calculate them. You have an array that pulls out numbers but makes strings with the operators included.




const testStrip = "this works";

function add(a, b) {
  return a + b;
};

function subtract(a, b) {
  return a - b;
};

function multiply(a, b) {
  return a * b;
};

function divide(a, b) {
  return a / b;
};

// Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.

function operate(operator, a, b) {

  switch(operator) {
    case "+":
      return add(a,b);
      break;

    case "-":
      return subtract(a,b);
      break;

    case "*":
      return multiply(a,b);
      break;

    case "/":
      return divide(a,b);
      break;

  }

}
let displayValue = "";

const operators = ["+", "-", "*", "/"];

const display = document.getElementById("display");
const numButtons = document.querySelectorAll(".numButton");
const clearButton = document.getElementById("clearButton");
const calculateButton = document.getElementById("calculateButton");

calculateButton.addEventListener("click", (e) => {
  calculate(displayValue);
})

clearButton.addEventListener("click", (e) => {
  clearDisplay();
})

numButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(button.innerText);
    buttonPress(button.innerText);
  });
})

function calculate(input) {
  console.log(input);
  // find operators
  inputArray = input.split("");
  let operatorIndices = [0];
  inputArray.forEach((item) => {
    if (operators.includes(item)) {
      operatorIndices.push(inputArray.indexOf(item))
    }
  })

  // create array for calculation
  let calcArray = [];
  operatorIndices.forEach((item, index) => {
    // console.log(input.charAt(item));
    console.log(item);
    console.log(operatorIndices[index+1]);
    calcArray.push(input.slice(item, operatorIndices[index+1]))

  })

  calcArray.forEach



  // inputArray = input.split("");
  // console.log(inputArray);

}

function buttonPress(value) {
  displayValue += value;
  display.innerText = displayValue;
}

function clearDisplay() {
  displayValue = "";
  display.innerText = displayValue;
}
