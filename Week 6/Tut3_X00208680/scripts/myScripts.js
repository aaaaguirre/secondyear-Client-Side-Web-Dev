//i. Function to display a message

function getMessage() {


    console.log("Welcome to JS Events");
    
}

//ii. Function to display a message using the DOM property

domPropButton.onclick = function() {


    console.log("We can use the DOM property to setup events too");
    
}

//iii. Add Event Listener

eventListenerButton.addEventListener("click", getMessage3);


// Function to display a message

    function getMessage3() {


    console.log("We can use the Event Listener to setup events too");

}

//5. Function to ADD event listener

function addEvent() {


    messageButton.addEventListener("click", getELMessage);
    
}
    
    
// Function to REMOVE event listener
    
function removeEvent() {
    
    
    messageButton.removeEventListener("click", getELMessage);
    
}
    
    
// Function to display a message
    
    function getELMessage() {
    
    
    alert("Event listener is attached to button");
    
}

//6. Function that changes the properties

    function changeProperties() {

        document.getElementById("colours").style.backgroundColor = "orange";


        document.getElementById("colours").style.width = "100%";


        document.getElementById("colours").innerHTML = "New text to appear on page";
}