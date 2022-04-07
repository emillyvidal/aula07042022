/* water-limits.js */
const converters = require('./converters.js');

const freezingPointC = 0;
const boilingPointC = 100;

const freezingPointF = converters.celsiusToFahrenheit(freezingPointC);
const boilingPointF = converters.celsiusToFahrenheit(boilingPointC);

console.log(`Oponto de congelamento da água é ${freezingPointF}`);
console.log(`Oponto de ebulição da água é ${boilingPointF}`);