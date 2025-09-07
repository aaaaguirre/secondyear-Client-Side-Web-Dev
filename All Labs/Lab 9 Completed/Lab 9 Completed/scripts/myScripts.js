/*
    The following code solves week 9 lab
*/

// Create global arrays
let names = [];
let titles = [];

// Task 1. Function to add values to the arrays
function addValuesToArrays() {

    names = document.getElementById("employNames").value.split(" ");
    titles = document.getElementById("employTitles").value.split(",");

    writeToConsole( names ); 
    writeToConsole( titles );
    writeToConsole2( names, titles );
}


// Function to write values of one array to the console
function writeToConsole( array ) {

    console.log("Begin");

    for(let i=0; i < array.length; i++) {
       
        console.log( "Position: " + i + " is " + array[i] );
    }
    console.log("End");
}

// Task 2. (c) Function to write both array values to the console
function writeToConsole2( array1, array2 ) {

    console.log("Begin");

    for(let i=0; i < array1.length; i++) {
        
        console.log( array1[i] + " is a " + array2[i] );
    }
    console.log("End");
}


// Task 2. Add name and title to array
function addNameandTitle() {

    let newName = document.getElementById("nameToProcess").value;
    let newTitle = document.getElementById("titleToProcess").value;

    names.push( newName );
    titles.push( newTitle );

    console.log( "Adding name " + newName + " and title " + newTitle + " to arrays");
    writeToConsole2( names, titles );
}

// Task 4. delete position in array
function deleteIndexInArray() {

    let index = Number( document.getElementById("indexInArray").value );

    writeToConsole2( names, titles );
    
    console.log( "Deleting index " + index + " in arrays");
    
    delete names[ index ];
    delete titles[ index ];   

    writeToConsole2( names, titles );
}

// Task 3. update values in array
function updateValuesInArray() {

    let newName = document.getElementById("nameToProcess").value;
    let newTitle = document.getElementById("titleToProcess").value;
    let index = Number( document.getElementById("indexInArray").value );
    
    console.log( "Updating index " + index + " with name " + newName + " and title " + newTitle + " in arrays ");
    
    names[ index ] = newName;
    titles[ index ] = newTitle;

    writeToConsole2( names, titles );
}

// Task 5. find name in array
function findNameInArray() {

    let nameToFind = document.getElementById("nameToProcess").value;
    let nameFound = false;
    let indexFoundAt = -1;

    console.log( "Attempting to find name " + nameToFind + " in array");
   
    let i = 0;
    while( nameFound == false && i < names.length ) {
        
        if ( names[i] == nameToFind ) {
            nameFound = true;
            indexFoundAt = i;
            console.log( "FOUND >>>>>>");
        }
        i++; // make progress 
    }

    if ( nameFound ) {
        console.log( "Name found at index " + indexFoundAt + " in array");
    }
    else {
        console.log( "Sorry name not found in array");
    }
}

// Task 6. sort one array
function sortArray() {
    
    names.sort();
    writeToConsole2( names, titles );
}

