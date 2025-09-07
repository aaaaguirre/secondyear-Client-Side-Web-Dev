/*
    The following code solves week 12 lab
*/

// Create Global books Array
// We will have an Array of book Objects
// i.e. Each position in the Array will be a book Object
let books = [];

// Create Global varaible for Current book number
let currentBookNum = 0;

// Task 1. Function to create a new book Object and then add it to the books Array
function addBook() {

    // Create new book object 
    let book = {};

    book.name = document.getElementById("bookName").value;
    book.numChapters = document.getElementById("bookChapters").value;
    book.genre = document.getElementById("bookGenre").value;

    // Add book object to array
    books.push( book );

    alert("Book " + book.name + " added");

    resetForm();
    
    showLatestBook();
    
    // If this is the first book to be added then we want to show the details in the last column
    if ( currentBookNum == 0 ) {
        currentBookNum++;
        showBookDetails();
    }
    
    enableDisableButtons();

}

// Function to reset the form text fields to blank
function resetForm() {
    document.getElementById("bookName").value = "";
    document.getElementById("bookChapters").value = "";
    document.getElementById("bookGenre").value = "";
}


// Task 2. Function to display all books in the console
function showAllBooks() {

    if ( books.length == 0 ) {
        console.log( "There are no books in stock at the moment" );
    }
    else {
        console.log( "There are currently " + books.length + " book(s)");
        console.log( "The following are the list of books" );
    }

    for (let i=0; i < books.length; i++) {
        console.log( "Book: " + (i+1) + "\n" );
        console.log( "Book Name: " + books[i].name + "\n" );
        console.log( "Chapters: " + books[i].numChapters + "\n" );
        console.log( "Genre: " + books[i].genre + "\n\n" );
    }
    
}

// Task 3. Function to show the latest book details
function showLatestBook() {
    
    let bookStr = "";
    
    // build up string with the last book details
    bookStr = "<b>Latest book</b> " + books[books.length-1].name + "<br>" +
                "<b>Chapters:</b>" + books[books.length-1].numChapters + "<br>" +
                "<b>Genre:</b>" + books[books.length-1].genre;

    
    // Show the last book details in the web page
    document.getElementById("lastestBook").innerHTML = bookStr;
}

// Task 4. Function to show the previous book details
function prevBook() {
    
    currentBookNum--;

    showBookDetails();

    enableDisableButtons();
}

// Function to show the next book details
function nextBook() {
    
    currentBookNum++;

    showBookDetails();
    
    enableDisableButtons();
}

// Function to show the book details
function showBookDetails() {

    let bookStr = "";

    // build up string with the last book details
    bookStr = "<b>Book: " + + (currentBookNum)  + "</b><br>" +
                "<b>Book Name:</b>"  + books[currentBookNum-1].name + "<br>" +
                "<b>Chapters:</b>" + books[currentBookNum-1].numChapters + "<br>" +
                "<b>Genre:</b>" + books[currentBookNum-1].genre;

    // Show the book details in the web page
    document.getElementById("bookDetails").innerHTML = bookStr;
}

// Function to enable or disable buttons based on current page number
function enableDisableButtons() {

    if ( currentBookNum > 1 ) {
        document.getElementById("prevButton").disabled = false;
    }
    else {
        document.getElementById("prevButton").disabled = true;
    }

    if ( currentBookNum < books.length ) {
        document.getElementById("nextButton").disabled = false;
    }
    else {
        document.getElementById("nextButton").disabled = true;
    }
}