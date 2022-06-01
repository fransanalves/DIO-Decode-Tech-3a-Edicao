const display = document.getElementById('calculator-display');
const numbers = document.querySelectorAll('[id *= btn]');
const operators = document.querySelectorAll('[id *= operator]')
const operatorEqual = document.getElementById('equal');
const clearDisplay = document.getElementById('clearDisplay');
const clearResult = document.getElementById('clearResult');
const backSpace = document.getElementById('backspace');
const operatorDecimal = document.getElementById('decimal');

let isNewNumber = true;
let operator;
let previousNumber;

const addNumber = (event) => updateDisplay(event.target.textContent);

const addOperator = (event) =>{
    if(!isNewNumber) {
        calculate();
        isNewNumber = true;
        operator = event.target.textContent;
        previousNumber = parseFloat(display.textContent.replace(',', '.'));
    }
};

const updateDisplay = (event) => {
    if(isNewNumber) {
        display.textContent = event.toLocaleString('BR');
        isNewNumber = false;
    } else {
        display.textContent += event.toLocaleString('BR');
    }
};

const pendingResult = () => operator !== undefined;

const calculate = () => {
    if(pendingResult()) {
        isNewNumber = true;
        const currentNumber = parseFloat(display.textContent.replace(',', '.'));
        if(operator == '+') {
            updateDisplay(previousNumber + currentNumber);
        } else if(operator == '-') {
            updateDisplay(previousNumber - currentNumber);
        } else if(operator == '*') {
            updateDisplay(previousNumber * currentNumber);
        } else if(operator == '/') {
            updateDisplay(previousNumber / currentNumber);
        } else if(operator == '%') {
            updateDisplay(previousNumber % currentNumber);
        }
    }
};

const resultCalculate = () => {
    calculate();
    operator = undefined;
};

const cleanDisplay = () => display.textContent = '';

const cleanResult = () => {
    cleanDisplay();
    operator = undefined;
    previousNumber = undefined;
    isNewNumber = true;
};

const removeElement = () => {
    display.textContent = display.textContent.slice(0, -1);
};

const hasDecimal = () => display.textContent.indexOf(',') !== -1;

const hasValue = () => display.textContent.length > 0;

const addDecimal = () => {
    if(!hasDecimal()) {
        if(hasValue()) {
            updateDisplay(',');
        } else {
            updateDisplay('0,');
        }
    }
}

numbers.forEach((number) => {
    number.addEventListener('click', addNumber);
});
operators.forEach((operator) => {
    operator.addEventListener('click', addOperator);
});
operatorEqual.addEventListener('click', resultCalculate);
clearDisplay.addEventListener('click', cleanDisplay);
clearResult.addEventListener('click', cleanResult);
backSpace.addEventListener('click', removeElement);
operatorDecimal.addEventListener('click', addDecimal);
