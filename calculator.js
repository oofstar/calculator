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


const display = document.getElementById("display");
const numButtons = document.querySelectorAll(".numButton");

numButtons.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(button.innerText);
    buttonPress(button.innerText);
  });
})

function buttonPress(value) {
  displayValue += value;
  display.innerText = displayValue;
}
