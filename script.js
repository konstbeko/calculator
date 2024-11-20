function add(firstNumber, secondNumber) {
    return firstNumber + secondNumber;
}

function subtract(firstNumber, secondNumber) {
    return firstNumber - secondNumber;
}

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

function divide(firstNumber, secondNumber) {
    return firstNumber / secondNumber;
}

function operate() {
    const display = document.querySelector("#calculator-display");
    secondNumber = parseFloat(display.value);
    if (operator === "+") {
        result = add(firstNumber, secondNumber);
    } else if (operator === "-") {
        result = subtract(firstNumber, secondNumber);
    } else if (operator === "*") {
        result = multiply(firstNumber, secondNumber);
    } else if (operator === "/") {
        result = divide(firstNumber, secondNumber);
    } else {
        result = "Invalid operation";
    }

    display.value = result;
}

function populate(key) {
    const display = document.querySelector("#calculator-display");
    display.value += key;
}

function operators(op) {
    const display = document.querySelector("#calculator-display");
    firstNumber = parseFloat(display.value);
    display.value = "";
    operator = op;
}

function clearDisplay() {
    const display = document.querySelector("#calculator-display");
    display.value = "";
    firstNumber = 0;
    secondNumber = 0;
    operator = 0;
}

let firstNumber = 0;
let secondNumber = 0;
let operator = 0;
let result;
