
function celsiusToFarenheit(temp, temp_name) {
    let a = (temp * 9/5) + 32 + temp_name;
    return a;
}

function fahrenheitToCelsius(num1, num2) {
    let subVal = num1 - num2;
    return subVal;
}


let formatCoversion = (temp, callback, temp_name) => callback(temp,temp_name);
    

console.log(formatCoversion (5, 3, ));

