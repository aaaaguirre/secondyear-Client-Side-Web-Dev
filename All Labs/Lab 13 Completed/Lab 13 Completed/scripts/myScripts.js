/*
    The following code solves week 13 Revision
*/

// constant for user result
let high_result = 70;

//global variable for user's name and result
let userName = document.getElementById("fullName").value; //name text box
let userResult = document.getElementById("result").value; //result text box

//global variable to check update button clicks
let updateClicks = 0;

//global array f/names
names = [];


//funcions for buttons

function getUserDetails() {
    let userName = document.getElementById("fullName").value; //name text box
    
    //to check if user's result is greater/equal or less than 70
    if (userResult >= high_result) {
        console.log(userName + " got over " + high_result);
        document.getElementById("message").innerHTML = userName + " got over " + high_result;
    }
    else{
        console.log(userName + " got under " + high_result);
        document.getElementById("message").innerHTML = userName + " got under " + " high_result";
    }
}

//function that changes message box and makes an alert
function divFunction() {
    //leave alert string blank so it can be changed later maybe
    let alertStr = "";
    alert(alertStr);
    
    //changes div box to red & changes border when selected
    document.getElementById("message").style.border = "2px solid red";
}


function stringMathFunctions() {
    userName = document.getElementById("fullName").value;
    //uppercase version of users name
    
    let upperName = userName.toUpperCase()
    console.log("Uppercase: " + upperName);

    //upercase version of users name
    let lowerName = userName.toLowerCase();
    console.log("Lowercase: " + lowerName);

    //characters from 2 to 7 using slice
    sliceUser = userName.slice(2,7);
    console.log(sliceUser);

    // get random number
    let randomNumber = Math.floor(Math.random() * 10) + 1; //the plus one makes it inclusive from 0-10
    console.log(randomNumber);
}


function updateData() {
    //update number of times button has been clicked
    updateClicks++;
    
    // update the values in the text box with new ones
    document.getElementById("fullName").value = "Rita";
    document.getElementById("result").value = 100;

    //loop to check how many times the user has clicked the button more than once
    if (updateClicks > 1) {
        alert("STAWPP CLCKING THE BUTTONNN");
        document.getElementById("updateDataButton").disabled = true;
    }
}

function addToArray() { //doublecheck
    userName = document.getElementById("fullName").value;

    //push name to names array
    names.push(userName);

    //write name added array and array length to console
    console.log("Name added: " + userName);
    console.log("Names array length: " + names.length);
}

function removeLastElementFromArray() {

    //remove last element - pop
    let removeElement = names.pop();

    //display to console
    console.log("Removed name: " + removeElement);
    console.log("Updated array: " + names);
}

function iterateArray() {
    //display length of array to console
    console.log("Length of array: " + names.length);

   for(let i=0; i < names.length; i++) {
    console.log(names[i]);
   }
}

function createObject() {
    //empty user object
    let user = {};

    //add values to object
    user.name = document.getElementById("fullName").value;
    user.result = document.getElementById("result").value;

    names.push(user);
}

function iterateArrayOfObjects() {
    for (let i=0; i < names.length; i++) {
        console.log("User " + (i+1) + " -");
        console.log("User Name: " + names[i].name);
        console.log("User Result: " + names[i].result);
    }
}

console.log("Ate. fin 2;45am");

