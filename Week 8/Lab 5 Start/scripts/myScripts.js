/*
    The following code starts week 5 lab.
*/

// Global constants and variables 
const NUM_OF_CALCS = " calculations have been run so far";
let timesCalcsRan = 0;
let addCount = 0;
let subCount = 0;
let multCount = 0;
let divCount = 0;


// This function is called when the page loads
function pageLoading() {
    
    console.log("Page loading");

    document.getElementById("summaryText").innerHTML = timesCalcsRan + NUM_OF_CALCS;
}

// Function to add numbers
function addNumbers() {

    timesCalcsRan++;
    addCount++;

    let num1 = Number( document.getElementById("firstNumber").value );
    let num2 = Number( document.getElementById("secondNumber").value );
    let total = num1 + num2;
    
    document.getElementById("result").value = total;

    document.getElementById("summaryText").innerHTML = timesCalcsRan + NUM_OF_CALCS + 
        "<br>The last calculation performed was addition";
}

// Change Function to add numbers
function addNumbers() {

    timesCalcsRan++;
    addCount++;

    // call function to get Number values
    let num1 = getNumber("firstNumber");
    let num2 = getNumber("secondNumber");

    let total = num1 + num2;
    
    displayTotal(total);

    setSummaryText("addition");
}

// Function to display result of all calculations
function displayTotal( inTotal ){

    document.getElementById("result").value = inTotal;
}

// Function to update the summary text
function setSummaryText( calcType ){

    document.getElementById("summaryText").innerHTML = timesCalcsRan + NUM_OF_CALCS + "<br>The last calculation performed was " + calcType;
}
// Function to retrieve a value from a text box
function getNumber ( textBoxName ){

    let num = Number( document.getElementById( textBoxName ).value );

    return num;
}

// Function to subtract numbers
function subtractNumbers() {

    timesCalcsRan++;
    subCount++;

    let num1 = Number( document.getElementById("firstNumber").value );
    let num2 = Number( document.getElementById("secondNumber").value );
    let total = num1 - num2;
    
    document.getElementById("result").value = total;

    document.getElementById("summaryText").innerHTML = timesCalcsRan + NUM_OF_CALCS + 
        "<br>The last calculation performed was subtraction";
}
// Change Function to add numbers
function subtractNumbers() {

    timesCalcsRan++;
    subCount++;

    // call function to get Number values
    let num1 = getNumber("firstNumber");
    let num2 = getNumber("secondNumber");

    let total = num1 - num2;
    
    displayTotal(total);

    setSummaryText("subtraction");
}

// Function to display result of all calculations
function displayTotal( inTotal ){

    document.getElementById("result").value = inTotal;
}

// Function to update the summary text
function setSummaryText( calcType ){

    document.getElementById("summaryText").innerHTML = timesCalcsRan + NUM_OF_CALCS + "<br>The last calculation performed was " + calcType;
}
// Function to retrieve a value from a text box
function getNumber ( textBoxName ){

    let num = Number( document.getElementById( textBoxName ).value );

    return num;
}
// Function to multiply numbers
function multiplyNumbers() {

    timesCalcsRan++;
    multCount++;

    let num1 = Number( document.getElementById("firstNumber").value );
    let num2 = Number( document.getElementById("secondNumber").value );
    let total = num1 * num2;
    
    document.getElementById("result").value = total;

    document.getElementById("summaryText").innerHTML = timesCalcsRan + NUM_OF_CALCS + 
        "<br>The last calculation performed was multiplication";
}
// Change Function to add numbers
function multiplyNumbers() {

    timesCalcsRan++;
    multCount++;

    // call function to get Number values
    let num1 = getNumber("firstNumber");
    let num2 = getNumber("secondNumber");

    let total = num1 * num2;
    
    displayTotal(total);

    setSummaryText("multiplication");
}

// Function to display result of all calculations
function displayTotal( inTotal ){

    document.getElementById("result").value = inTotal;
}

// Function to update the summary text
function setSummaryText( calcType ){

    document.getElementById("summaryText").innerHTML = timesCalcsRan + NUM_OF_CALCS + "<br>The last calculation performed was " + calcType;
}
// Function to retrieve a value from a text box
function getNumber ( textBoxName ){

    let num = Number( document.getElementById( textBoxName ).value );

    return num;
}
// Function to divide numbers
function divideNumbers() {

    timesCalcsRan++;
    divCount++;

    let num1 = Number( document.getElementById("firstNumber").value );
    let num2 = Number( document.getElementById("secondNumber").value );
    let total = num1 / num2;
    
    document.getElementById("result").value = total;

    document.getElementById("summaryText").innerHTML = timesCalcsRan + NUM_OF_CALCS + 
        "<br>The last calculation performed was division";
}
// Change Function to add numbers
function divideNumbers() {

    timesCalcsRan++;
    divCount++;

    // call function to get Number values
    let num1 = getNumber("firstNumber");
    let num2 = getNumber("secondNumber");

    let total = num1 / num2;
    
    displayTotal(total);

    setSummaryText("division");
}

// Function to display result of all calculations
function displayTotal( inTotal ){

    document.getElementById("result").value = inTotal;
}

// Function to update the summary text
function setSummaryText( calcType ){

    document.getElementById("summaryText").innerHTML = timesCalcsRan + NUM_OF_CALCS + "<br>The last calculation performed was " + calcType;
}
// Function to retrieve a value from a text box
function getNumber ( textBoxName ){

    let num = Number( document.getElementById( textBoxName ).value );

    return num;
}

// Function to summarise
function summariseNumbers(){

    document.getElementById("summaryText").innerHTML = document.getElementById("summaryText").innerHTML + "<br>Summary " + "Addition ran " + addCount + " times"
+"Subtraction ran " + subCount + " times" +  "Multiplication ran " + multCount + " times"+  "Division ran " + divCount + " times";
}

// Function colour check

function colourCheck(color) {

    console.log(`The colour button your mouse rolled over was ${color}`);

}

 