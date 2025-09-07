/*
    The following code solves week 10 lab
*/

// Task 2. Part 1 Create 3 Global arrays
let studNames = document.getElementsByClassName("fullName");
let studGrades = document.getElementsByClassName("grade");
let studLevels = document.getElementsByClassName("levelType");

// Task 2. Part 2 disable buttons
document.getElementById("moreRowsButton").disabled = true;
document.getElementById("showAllStudentsButton").disabled = true;

// Task 3. Function to add array data to the web page form for the first time
function addFormData() {

    // Local arrays contain data, which we will add to the form.
    // Once added to the form, the data is automatically added to the 3 gloabl arrays
    let names = ["Ben", "Katherine", "Dylan"];
    let grades = ["C", "A", "B"];
    let levels = ["2", "1", "2"];
    
    // Notice while there are no values in the global arrays, there are 3 elements on the page. so the length will be 3
    console.log( "Adding entires to to the array " + studNames.length  + " times");    
    
    // Update the array.value
    // This will not work studNames[i] = names[i] - since we have used getElementsByClassName()
    // Try console.log(studNames[0]); - see what the array contains, it is not just the value
    for( let i=0; i < names.length; i++ ) {

        console.log( "Adding entires to to the array " + i );
        
        studNames[i].value = names[i];
        studGrades[i].value = grades[i];
        studLevels[i].options[ levels[i] ].selected = true; 
    }
    console.log( "Done");
    
    // enable buttons
    document.getElementById("moreRowsButton").disabled = false;
    document.getElementById("showAllStudentsButton").disabled = false;
    
}

// Task 4. Add an extra row to the form
function addRows() {
    
    // Create the HTML needed for a new row - next few lines of code.
    
    // Get reference to the arraysFormRows div
    const arraysFormRowsDiv = document.getElementById("arraysFormRows");

    // create a new blank div tag
    const newDiv = document.createElement("div");
    
    // Assign the class="row" to this div
    newDiv.classList.add("row");


    // The HTML for this div (text boxes and drop-down) is exacly the same as the code in the HTML page now.
    // Therefore, copy the HTML code from the page and put it in a string.
    // Then assign it to the text in the div - innnerHTML
    newDiv.innerHTML = "<div class='col'><div class='mb-4'><label for='fullName' class='form-label'>Name</label>" +
                        "<input type='text' class='fullName form-control'></div></div><div class='col'><div class='mb-4'>" +
                        "<label for='grade' class='form-label'>Grade</label><input type='text' class='grade form-control'></div></div>" +
                        "<div class='col'><div class='mb-4'><label for='levelType' class='form-label'>Level</label>" +
                        "<select class='levelType form-select'><option value='0' selected>Choose Level</option><option value='no'>No</option>" +
                        "<option value='yes'>Yes</option></select></div></div>";
    
    // Once you create the new row above, next add it to the end of the other div rows.
    arraysFormRowsDiv.append( newDiv );

    console.log(arraysFormRowsDiv);
}

// Task 5. Show all student data in a table
function displayAllStudentsData() {

    const allStudentDataDiv = document.getElementById("allStudentsData");
    let studStr = "<br><b>Students Data - There are " + studNames.length + " students</b><br><br>";

    studStr += "<table><tr><th>Name</th><th>Grade</th><th>Level</th></tr>";
    for( let i=0; i < studNames.length; i++ ) {
        
        studStr += "<tr><td>" + studNames[i].value + "</td>" +
                    "<td>" + studGrades[i].value + "</td>" +
                    "<td>" + studLevels[i].value + "</td></tr>";
    }
    studStr +=  "</table>"

    allStudentDataDiv.innerHTML = studStr;

    printArrays();
}

// Task 6. Print array values to the console
function printArrays() {

    for( let i=0; i < studNames.length; i++ ) {

        console.log( (i+1) + " Name " + studNames[i].value + "\t" + "Grade " + studGrades[i].value + "\t" + "Level " + studLevels[i].value );
    }    
}