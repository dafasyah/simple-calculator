$(document).ready(function () {
    var finalResult = 0;
    var prevInput = 0;
    var operation = null;
    var currentInput = 0;
    
    $("button").on("click", function () {             
        var displayCalc = $(this).text();
        // console.log(displayCalc);
        if (isNumber(displayCalc)) {
            (currentInput === 0) ? currentInput = displayCalc : currentInput = currentInput + displayCalc;
        } else if (isOperator(displayCalc)) {
            prevInput = parseFloat(currentInput);
            operation = displayCalc;
            currentInput = 0;
        } else if (displayCalc === "C") {
            prevInput = 0;
            finalResult = "";
            currentInput = 0;
            updateCurrentDisplay(finalResult);
        } else if (displayCalc === "CE") {
            currentInput = 0;
        } else if (displayCalc === "Backspace") {
            currentInput = currentInput.substring(0, currentInput.length - 1);
        } else if (displayCalc === "%") {
            currentInput /= 100;
        } else if (displayCalc === "+/-") {
            currentInput *= -1;
        } else if (displayCalc === ".") {
            currentInput += ".";
        }
        else if (displayCalc === "=") {
            finalResult = operate(prevInput, currentInput, operation);
            updateCurrentDisplay(finalResult);
            // console.log(finalResult);
        }
        updateDisplay(currentInput);
    });

});

updateDisplay = function (displayValue) {
    var displayValue = displayValue.toString();
    $(".display").val(displayValue.substring(0, 10));
};
updateCurrentDisplay = function (displayCurrentValue) {
    var displayCurrentValue = displayCurrentValue.toString();
    $(".currentDisplay").val(displayCurrentValue.substring(0, 10));
};

isNumber = function (value) {
    return !isNaN(value);
}

isOperator = function (value) {
    return value === "/" || value === "*" || value === "+" || value === "-";
};

operate = function (a, b, operation) {
    a = parseFloat(a);
    b = parseFloat(b);
    if (operation === "+") {
        return a + b;
    } else if (operation === "-") {
        return a - b;
    }
    else if (operation === "*") {
        return a * b;
    }
    else if (operation === "/") {
        return a / b;
    }
}