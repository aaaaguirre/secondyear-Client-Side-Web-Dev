/*
    This file will add/subtract/multiply/divide numbers. It will also calculate the average
*/

// Declare variables
let num1 = 5;
let num2 = 7;
let num3 = 9;
let num4 = 11;
let totaladd = 0;
let totalsub = 0;
let totalmult = 0;
let totaldiv = 0;
let avg = 0;
const totalnumbers = 4; // Numbers in total


/* Calculations
*/

// Addition
totaladd = num1 + num2;

// Subtraction
totalsub = num1 - num2;

// Multiplication
totalmult = num1 * num2;

// Division
totaldiv = num1 / num2;

// Calculating the average
let sum = num1 + num2 + num3 + num4;
avg = sum / totalnumbers;

// Calculations and Output messages - typically we do all our calculations first and then output the result.
// However, for this example we will do both together.

// Output
console.log("The addition total is:", totaladd);
console.log("The subtraction total is:", totalsub);
console.log("The multiplication total is:", totalmult);
console.log("The division total is:", totaldiv);

// Calculating the average output
console.log("The average is:", avg)
