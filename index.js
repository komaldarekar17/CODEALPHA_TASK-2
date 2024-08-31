let display = document.getElementById('display');
let displayValue = '';

function clearDisplay() {
    displayValue = '';
    display.innerText = '0';
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    if (displayValue === '') {
        display.innerText = '0';
    } else {
        display.innerText = displayValue;
    }
}

function appendNumber(number) {
    displayValue += number;
    display.innerText = displayValue;
}

function appendOperator(operator) {
    displayValue += ' ' + operator + ' ';
    display.innerText = displayValue;
}

function calculate() {
    try {
        let result = eval(displayValue);
        displayValue = result.toString();
        display.innerText = result;
    } catch (e) {
        display.innerText = 'Error';
        displayValue = '';
    }
}
