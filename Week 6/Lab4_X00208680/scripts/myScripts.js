/*
    Functions for buttons provided:
*/

// Function to get full name
function showFullName() {

    let firstname = document.getElementById("firstName").value;
    let surname = document.getElementById("surName").value;
    let fullname = firstname + " " + surname;
    document.getElementById("fullName").value = fullname;
}

// Function to calculate birth year
function calcBirthYear(){
    const currentyear = 2023;
    const currentage = 22;

    let yearofbirth = currentyear - currentage;
    document.getElementById("yearofbirth").value = yearofbirth;
}

// Show Photo Button
function showPhoto(){


}

// Function to change font size
function chgFontSize(){
    document.getElementById("userDetailsForm").style.fontSize = "2em";
}

// Function to change text colour
function chgTextColour(){
    document.getElementById("userDetailsForm").style.color = "white";

}

// Function to change heading
function chgHeading(){
    const element = document.getElementById("formHeading");
    element.innerHTML = "Form completed, Thank you";
}
