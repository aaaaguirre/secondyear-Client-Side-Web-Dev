/*
    The following code solves week 7 lab
*/

// Calculator Function
function calculateNumber( calcType ) {

    let num1 = Number( document.getElementById("firstNumber").value )
    let num2 = Number( document.getElementById("secondNumber").value)
    let total = 0;

    if ( num1 < 0 || num2 < 0 ){
        alert("Please enter positive values for the numbers");
        return;
    }

    if ( calcType == "add"){
        total = num1 + num2
    }
    else if ( calcType == "subtract"){
        total = num1 - num2
    }
    else if ( calcType == "multiply"){
        total = num1 * num2
    }
    else if ( calcType == "divide"){
        total = num1 / num2
    }

    document.getElementById("result").value = total;
}

// Calculator Function 2
function calculateNumber2() {

    let num1 = Number( document.getElementById("firstNumber").value )
    let num2 = Number( document.getElementById("secondNumber").value)
    let total = 0;

    if ( num1 < 0 || num2 < 0 ){
        alert("Please enter positive values for the numbers");
        return;
    }

    let calcType = document.getElementById("calcType").value;

    if (calcType == "0 "){
        alert("Choose a vlue from the drop down");
        return;
    }

    else if ( calcType == "add"){
        total = num1 + num2
    }
    else if ( calcType == "subtract"){
        total = num1 - num2
    }
    else if ( calcType == "multiply"){
        total = num1 * num2
    }
    else if ( calcType == "divide"){
        total = num1 / num2
    }

    document.getElementById("result").value = total;
}

// Disable button Function
function disableButton(){

    document.getElementById("calcButton").disabled = true;

}

function enableButton(){

    document.getElementById("calcButton").disabled = false;

}
// Change button function
function changeButton(){

    let calcType = document.getElementById("calcType").value;

    if ( calcType == "0" ){
        disableButton();
    }
    else {
        enableButton();
    }
}

// Generate report function
function generateReport(){

    examineCheckboxes();

    examineRadiobuttons();
}

// Email and Text message function
function examineCheckboxes(){

    let message = "";
    let receiveEmails = document.getElementById("receiveEmails").checked;
    let receiveTexts = document.getElementById("receiveTexts").checked;

    if ( receiveEmails && receiveTexts ){
        message = "You will receive both emails and text";
    }
    else {
        if ( receiveEmails ){
            message = "I want to receive emails"
        }
    else {
        message = "I do not want to receive emails";
    }

    if ( receiveTexts ){
        message += "<br>I want to receive text messages";
    }
    else {
        message += "<br>I do not want to receive text messages";
    }
    }
    
    document.getElementById("msg").innerHTML = "<br>" + message;
}

// Status update function
function examineRadiobuttons(){

    let statusLoggedIn = document.getElementById("loggedIn").checked;
    let message = "<br>Not Logged In";

    if ( statusLoggedIn ){
        message = "<br>Logged In";
    }

    document.getElementById("msg").innerHTML = document.getElementById("msg").innerHTML + message;
}
