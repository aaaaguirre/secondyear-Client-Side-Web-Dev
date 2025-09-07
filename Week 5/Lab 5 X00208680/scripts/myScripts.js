/* Lab 5*/


// Q1

/*
    This program calculates the area of grass to be cut on a plot of land
*/

// Declare and initalize variables

let plotWidth = 40;
let plotLength = 50;
let houseWidth = 30;
let houseLength = 40;

let landArea = 0;
let houseArea = 0;
let grassArea = 0;

let time = 0;
let cuttingRate = 2;

// Algorithm - Calculations

landArea = plotWidth * plotLength; // Calculating the Land area, House area, Grass area
houseArea = houseWidth * houseLength;
grassArea = landArea - houseArea;

time = (grassArea / cuttingRate) / 60 // Calculating the time it takes to cut the grass at the rate of 2 square metres per second

// Outputs

console.log("The area of the grass to be cut is:", grassArea, "square meters")
console.log("It will take", time.toFixed(0), "minutes to cut the grass.")

// Q2

/*
    This program calculates their profit on hamburgers and chips each day.
*/

// Declare and initalize variables

let chipCost = 0.30;
let chipSellPrice = 0.75;
let hamburgerCost = 0.40;
let hamburgerSellPrice = 0.95;

let numChipsSold = 12;
let numHamburgersSold = 14;

// Algorithm - Calculations

hamburgerProfit = (hamburgerSellPrice - hamburgerCost) * numHamburgersSold;

chipProfit =(chipSellPrice - chipCost) * numChipsSold;

totalProfit = chipProfit + hamburgerProfit;

// Outputs

console.log("Total profit from hamburgers: €", hamburgerProfit.toFixed(0))
console.log("Total profit from chips: €", chipProfit.toFixed(0))
console.log("Total profit: €", totalProfit.toFixed(0))

// Q3

/*
    This code outlines different methods.
*/

// Declare and initalize variables

let collegeName = "TUTallaght"; // a. Declaring String

// Algorithm - Calculations

let strcollegeNamelength = collegeName.length; // b. Displaying the length of the string

let lowStr = collegeName.toLowerCase(); // c. Converting string to lowercase

let strTuDublin = "TuDublin"; // d. Updating the existing string to be the new value using replace method
let newStrcollegeName = strTuDublin.replace("Tallaght","Dublin");

let first = "TuDublin", last = "Ireland", fullname = ""; // e. Appending Ireland to the end of the string
fullname = first.concat(last);
fullname = first.concat(" ", last);

let pos = fullname.indexOf("Ire"); // f. The character position of “Ire” in the string collegeName

let twopos = fullname.charAt(7); // g. The character in position 7 of the string collegeName is.

let tf_collegeName = fullname.endsWith("b"); // h. True or false if the string collegeName ends with the character b.

// Outputs

console.log("The length of the string is:", strcollegeNamelength) // b. Displaying the length of the string
console.log("Lowercase:", lowStr) // c. Diplaying string to lowercase
console.log("Updated college name:", newStrcollegeName) // d. Displaying the updated college name
console.log("Full College name:", fullname) // e. Displaying the appended string
console.log("Character position:", pos) // f. Displaying the character position of “Ire” in the string collegeName
console.log("Character positioned at 7:", twopos) // g. Displaying what the character in position 7 of the string collegeName is.
console.log("It is", tf_collegeName, "that this variable ends with b") // Displaying true or false if the string collegeName ends with the character b.

// Q4

/*
    This program delcares a new number variable.
*/

// Declare and initalize variables
let number = 56.853436;
let str = "Andrea";
let strnumber = "67.2"; // b. New string

// Algorithm - Calculation
let newNum = number.toFixed(3) // a. Used toFixed method
let newstrnumber = typeof strnumber; // b. i. Used typeof method

// Outputs
console.log("Number:", newNum); // a. Displaying this number with 3 decimal places.
console.log("Data type of strnumber:", newstrnumber); // b. i. Dispaying new string amd data type
