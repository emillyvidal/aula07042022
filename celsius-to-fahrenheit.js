const converters = require("./converters.js");

const celsiusInput = process.argv[2]; // Pega a 3ª entrada de uma lista de argumentos
const fahrenheitValue = converters.celsiusToFahrenheit(celsiusInput);

console.log(`${celsiusInput} graus Celsius = ${fahrenheitValue} graus Fahrenheit`);