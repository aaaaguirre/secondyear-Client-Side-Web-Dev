/*
    The following code starts week 6 lab.
*/

// Global constants and variables


// Main Function to calculate payment
function calculatePayment(){
    let grossPay = 0;
    let netPay = 0;

    let inRegHours = Number(document.getElementById("regHoursWorked"));
    let inOverHours = Number(document.getElementById("overHoursWorked"));

    calculateGrossPay(inRegHours, inOverHours)
}

// Function to calculate Gross Pay
function calculateGrossPay( inRegHours, inOverHours) {
    const REGULAR_HOURS_RATE = 15;
    const OVERTIME_HOURS_RATE = REGULAR_HOURS_RATE * 2;

    let grossPay = REGULAR_HOURS_RATE * OVERTIME_HOURS_RATE
    document.getElementById("grosspay").value = grossPay;

    document.getElementById("summaryText").innerHTML = grossPay;
}

// Function to calculate Net Pay
function calculateNetPay ( inGrossPay ){
    const TAX = 100;

    let netPay = grossPay - TAX;
    document.getElementById("netpay").value = netPay;

    document.getElementById("summaryText").innerHTML = netPay;
}

// Function to update the text boxes with the gross and net pay
function displayPayments( inGrossPay, inNetPay){

}

// Function to convert string to upper case
function convertToUpperCase ( textBoxName ){

}

// Function to get the length of a string
function getLenOfString ( textBoxName ){

}

// Function to get the total numbers of hours
function getTotalHours ( regHoursTextBoxName, overHoursTextBoxName ){

}