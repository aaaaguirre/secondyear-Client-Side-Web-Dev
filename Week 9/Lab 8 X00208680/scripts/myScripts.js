/*
    The following code solves week 8 lab
*/

// Function to write to the console
function writeToConsole(){

    let numIterations = Number( document.getElementById("iterations").value);

    console.log(" Start ");

    for( let i=0; i < numIterations; i++){

        console.log ("Writing line" + (i+1) + "to the console");
    }
    console.log("Done")


}

// Function to add Spaces to a string


