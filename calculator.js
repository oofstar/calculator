//where you are at 1/17/19
// need to add error message for divide by 0

//type this into console to check connection
const testStrip = "this page is connected to calculator.js";

// declared variables for functions
let displayValue = "";
let equationValue = "";

const operators = ["+", "-", "*", "/"];

// declared constants for DOM manipulation
const display = document.getElementById("display");
const equation = document.getElementById("equation");
const numButtons = document.querySelectorAll(".numButton");
const clearButton = document.getElementById("clearButton");
const calculateButton = document.getElementById("calculateButton");
const backspaceButton = document.getElementById("backspaceButton");
// event listeners

calculateButton.addEventListener("click", (e) => {
  calculate(equationValue);
})

backspaceButton.addEventListener("click", (e) => {
  backspace();
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



//basic arithmetic functions
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

//operate function
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

//functions for button presses
function buttonPress(value) {
  if (value === "0" && displayValue.endsWith("/")) {
    alert("You can't divide by 0, sorry.");
  } else {

    displayValue += value;
    equationValue += value;
    display.innerText = displayValue;
    equation.innerText = equationValue;
  }
}

function backspace() {
  if (typeof displayValue === "string") {
    displayValue = displayValue.slice(0, -1);
    equationValue = equationValue.slice(0, -1);
    display.innerText = displayValue;
    equation.innerText = equationValue;
  }
}

function clearDisplay() {
  displayValue = "";
  equationValue = "";
  display.innerText = displayValue;
  equation.innerText = equationValue;
}

function calculate(input) {
  console.log(`input: ${input}`);
  // find operators
  inputArray = input.split("");
  console.log(`inputArray: ${inputArray}`)
  let operatorIndices = [0];
  inputArray.forEach((item, index) => {
    if (operators.includes(item)) {
      operatorIndices.push(index);
    }
  })
  console.log(`operatorIndices: ${operatorIndices}`)

  // create array for calculation
  let calcArray = [];
  operatorIndices.forEach((item, index) => {
    // console.log(input.charAt(item));
    // console.log(item);
    // console.log(operatorIndices[index+1]);
    calcArray.push(input.slice(item, operatorIndices[index+1]));

  })
  console.log(`calcArray: ${calcArray}`)
  total = parseInt(calcArray[0]);
  console.log(`total: ${total}, ${typeof total}`);
  //
  calcArray.forEach((item) => {
    console.log(item);
    if (operators.includes(item.charAt(0))){
      console.log(`number: ${parseInt(item.slice(1))} is a ${typeof parseInt(item.slice(1))}`)
      total = operate(item.charAt(0), total, parseInt(item.slice(1)));
      console.log(`total: ${total}`);
    }
  });
  //
  //
  displayValue = total;
  // // inputArray = input.split("");
  // // console.log(inputArray);
  display.innerText = displayValue;
}
