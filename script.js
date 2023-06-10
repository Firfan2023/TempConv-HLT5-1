

//Celsius to Fahrenheit
function cToF(celsius) {
    var cTemp = celsius; 
    var cToFahr = Math.floor((cTemp * 9 / 5) + 32).toFixed(2);   //.toFixed applied - user story 3 request.
    var message = cTemp + '\xB0C is ' + cToFahr + ' \xB0F.';
    return message;
}

//console.log(cToF(100));  //checking the code in the console. - working :) 


// Celsius to Kelvin
function cToK(celsius) {
    var cTemp = celsius;
    var cToKel = Math.floor(+cTemp + +273.15).toFixed(2);
    var message = cTemp + '\xB0C is ' + cToKel + ' K.';
    return message;
}

// console.log(cToK(100));  //working :)

//Fahrenheit to Celsius
function fToC(fahrenheit) {
    var fTemp = fahrenheit;
    var fToCel = Math.floor((fTemp - 32) * 5 / 9).toFixed(2);
    var message = fTemp + '\xB0F is ' + fToCel + '\xB0C.'; 
    return message;
}

// console.log(fToC(100));  //working!


//Fahrenheit to Kelvin
function fToK(fahrenheit) {
    var fTemp = fahrenheit;
    var fToKel = Math.floor((fTemp - 32) * 5 / 9 + 273.15).toFixed(2);
    var message = fTemp + '\xB0F is ' + fToKel + ' K.';
    return message;
}

//console.log(fToK(100));  //working.



// Kelvin to Celsius
function kToC(kelvin) {
    var kTemp = kelvin;
    var kToCel = Math.floor(kTemp - 273.15).toFixed(2);
    var message = kTemp + ' K is ' + kToCel + '\xB0C.';
    return message;
}

// console.log(kToC(100)); //perfect, working :)


// Kelvin to Fahrenheit
function kToF(kelvin) {
    var kTemp = kelvin;
    var kToFahr = Math.floor((kTemp - 273.15) * 9 / 5 + 32).toFixed(2);
    var message = kTemp + ' K is ' + kToFahr + '\xB0F.';
    return message;
}

//console.log(kToF(100));  //great! all working :))


function convertTemp() {
    var inputTemp = document.getElementById("temp-input").value;
    var inputUnit = document.getElementById("temp-input-unit").value;
    var outputUnit = document.getElementById("temp-output-unit").value;
    var result = document.getElementById("result");

    if (inputUnit === "celsius" && outputUnit === "fahrenheit") {
        result.innerHTML = cToF(inputTemp);
    } else if (inputUnit === "celsius" && outputUnit === "kelvin") {
        result.innerHTML = cToK(inputTemp);
    } else if (inputUnit === "fahrenheit" && outputUnit === "celsius") {
        result.innerHTML = fToC(inputTemp);
    } else if (inputUnit === "fahrenheit" && outputUnit === "kelvin") {
        result.innerHTML = fToK(inputTemp);
    } else if (inputUnit === "kelvin" && outputUnit === "celsius") {
        result.innerHTML = kToC(inputTemp);
    } else if (inputUnit === "kelvin" && outputUnit === "fahrenheit") {
        result.innerHTML = kToF(inputTemp);
    } else {
        result.innerHTML = "Invalid input or output unit selected.";
    }
}

document.getElementById("convert-btn").addEventListener("click", convertTemp);


/****

 FYI:   User story 1 and 2 are applied - Conversions are available from; 
                                                                        - Celsius to Fahrenheit
                                                                        - Celsius to Kelvin
                                                                        - Fahrenheit to Celsius
                                                                        - Fahrenheit to Kelvin
                                                                        - Kelvin to Celsius
                                                                        - Kelvin to Fahrenheit
                                                            
        User story 3- applied by using .toFixed so we can choose how many decimal placed at the result. I chose to go for 2.


****/