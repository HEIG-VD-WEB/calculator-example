let currentInput = "";
let currentResult = "";

function appendToDisplay(value) {
    currentInput += value;
    document.getElementById("display").value = currentInput;
}

function clearDisplay() {
    currentInput = "";
    currentResult = "";
    document.getElementById("display").value = "";
}

function calculateResult() {
    try {
        currentResult = eval(currentInput);
        document.getElementById("display").value = currentResult;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}
