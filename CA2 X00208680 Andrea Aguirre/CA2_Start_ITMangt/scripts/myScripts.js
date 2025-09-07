/*
    The following code solves CA2 ITM
*/

// Arrays & Objects
let days = 0
let currentBooking = 0
let hotels = [];

// 1. a. Function for Board Type
function selectBoardType(){

        let hotel = {};
    
        hotel.name = document.getElementById("guestName").value;
        hotel.boardType = document.getElementById("boardType").value;
        hotel.stayDays = document.getElementById("numDays").value;

        hotels.push( hotel );

        alert("Booked!");

        saveDetails();
}
// 1. b. Function for adding Days
function addDays(){

    if ( days == 3){
        document.getElementById("numDays").value = "Maximum value"
        alert("Maximum" + days + "booked")
    }
    else{
        document.getElementById("numDays").value = "Minimum value"
        alert("Minimum" + days + "booked")
    }
    }
// 1. c. Function to save details
function saveDetails(){

    let detail = {};

    detail.name = document.getElementById("guestName").value;
    detail.board = document.getElementById("boardType").value;
    detail.day = document.getElementById("numDays").value;

    detail.push( detail );
// 1. d. Confirmation Message
    alert(detail.name + "'s booking successful");

    enableDisableButtons();
}

// 1. e. Function for disabling buttons
function enableDisableButtons(){

    if ( currentBooking == 3 ) {
        document.getElementById("DublinButton").disabled = false;
    }
    else {
        document.getElementById("DublinButton").disabled = true;
    }

    if ( currentBooking == 2 ){
        document.getElementById("ChicagoButton").disabled = false;
    }
    else{
        document.getElementById("ChicagoButton").disabled = true;

    }

    if ( currentBooking == 1 ){
        document.getElementById("SydneyButton").disabled = false;
    }
    else{
        document.getElementById("SydneyButton").disabled = true;

    }
}

// 1. f. Function to change the logo
function changeLogo(){
    document.getElementById("hotelStatusImg").disabled = closed.jpg;

}

// 2. a. Function to generate a report
function generateReport(){

    let reportStr = "";

    document.getElementById("guestName").value * 3;

    reportStr = "<b>Total Number of Guests:</b>" + document.getElementById("guestName").value * 3;

}
// 2. b. Function to show booking details
function showHotelBookingDetails(){

    let detailStr = "";

    detailStr = "<b>Hotel: " + + (currentBooking)  + "</b><br>" +
                "<b>Guest Name:</b>"  + detail[currentBooking-1].name + "<br>" +
                "<b>Board Type:</b>" + detail[currentBooking-1].board + "<br>" +
                "<b>Num days:</b>" + detail[currentBooking-1].day + 
                "<b>Total days booked:</b>";

    document.getElementById("hotelsSummaryReport").innerHTML = detailStr;

    selectBoardType();
}

