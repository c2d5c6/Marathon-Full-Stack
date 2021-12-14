const prevDisplay = document.querySelector(".result");
const currDisplay = document.querySelector(".solutions");
const numberButtons = document.querySelectorAll(".number");
const operationButtons = document.querySelectorAll(".operand");
const clearButton = document.querySelector(".clear");
const signButton = document.querySelector(".plus-minus");
const percentButton = document.querySelector(".percent");
const equalsButton = document.querySelector(".equal");

class Calculator {
    constructor(prevDisplay, currDisplay) {
        this.prevDisplay = prevDisplay;
        this.currDisplay = currDisplay;
        this.clear();
    }

    clear() {
        this.currentOperand = "";
        this.previousOperand = "";
        this.operation = "";
    }

    sign() {
        if (this.currentOperand === "") return;
        this.currentOperand =
        this.currentOperand.charAt(0) === "-"
            ? this.currentOperand.slice(1)
            : `-${this.currentOperand}`;
    }

    percentage() {
        if (this.currentOperand === "") return;
        this.currentOperand = `${parseFloat(this.currentOperand / 100)}`;
    }

    appendNumber(num) {
        if (num === "." && this.currentOperand.toString().includes(".")) return;
        if (num === "." && this.currentOperand === "") {
        this.currentOperand = `0${num}`;
        } else if (this.currentOperand.length < 11)
        this.currentOperand = this.currentOperand.toString() + num.toString();
    }

    whichOperand(operation) {
        if (this.currentOperand === "") return;
        if (this.previousOperand !== "") this.calculate();
        this.operation = operation;
        this.previousOperand = `${this.currentOperand}${this.operation}`;
        this.currentOperand = "";
    }

    calculate() {
        let result = null;
        const prevItem = parseFloat(this.previousOperand);
        const curItem = parseFloat(this.currentOperand);

        if (this.previousOperand === "" || this.currentOperand === "") return;

        switch (this.operation) {
            case "÷":
                result = prevItem / curItem;
                break;
            case "*":
                result = prevItem * curItem;
                break;
            case "-":
                result = prevItem - curItem;
                break;
            case "+":
                result = prevItem + curItem;
                break;
            default:
                return;
        }
        this.currentOperand =
        result < 0.1 ? result.toPrecision(4) : result.toFixed(2);
        this.previousOperand = "";
        this.operation = "";
    }
    updateDisplay() {
        this.currDisplay.innerText = this.currentOperand;
        this.prevDisplay.innerText = this.previousOperand;
    }
}

const calculator = new Calculator(prevDisplay, currDisplay);

numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        calculator.appendNumber(button.innerText);
        calculator.updateDisplay();
    });
});

operationButtons.forEach(operation => {
    operation.addEventListener("click", () => {
        calculator.whichOperand(operation.innerText);
        calculator.updateDisplay();
    });
});

clearButton.addEventListener("click", () => {
    calculator.clear();
    calculator.updateDisplay();
});

signButton.addEventListener("click", () => {
    calculator.sign();
    calculator.updateDisplay();
});

percentButton.addEventListener("click", () => {
    calculator.percentage();
    calculator.updateDisplay();
});

equalsButton.addEventListener("click", () => {
    calculator.calculate();
    calculator.updateDisplay();
});