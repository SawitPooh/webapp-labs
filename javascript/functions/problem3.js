
function add(num1, num2) {
    let addVal = num1 + num2;
    return addVal;
}

function subtract(num1, num2) {
    let subVal = num1 - num2;
    return subVal;
}
function multiply(num1, num2) {
    let mulVal = num1 * num2;
    return mulVal;
}
function divide(num1, num2) {
    let divideVal = num1 / num2;
    return divideVal;
}

function callbackCalculator(num1, num2, callback) {
    return callback(num1, num2);
    
}
console.log(callbackCalculator(5, 3, add));
console.log(callbackCalculator(5, 3, subtract));
console.log(callbackCalculator(5, 3, multiply));
console.log(callbackCalculator(6, 3, divide));

