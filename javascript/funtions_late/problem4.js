
function celsiusToFarenheit(temp, temp_name) {
    let a = (temp * 9 / 5) + 32;
    return temp + " °" + temp_name + " is " + a + " °F";
}

function fahrenheitToCelsius(temp, temp_name) {
    let a = ((temp) - 32 )* 5 / 9;
    return temp + " °" + temp_name + " is " + a + " °C";
}


let formatCoversion = (temp, callback, temp_name) => callback(temp, temp_name);


console.log(formatCoversion(20, celsiusToFarenheit, "C"));
console.log(formatCoversion(98.6, fahrenheitToCelsius, "F"));
console.log(formatCoversion(0, celsiusToFarenheit, "C"));
console.log(formatCoversion(32, fahrenheitToCelsius, "F"));

