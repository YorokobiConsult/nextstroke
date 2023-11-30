
//VARIABLES 
var guestList = ["Fifi", "Firace", "Firace labiad", "Firace Labiad", "Labiad",]; 

//FUNCTIONS 
function getGuestName() {
   var guestNameFunction = $("#formGuestName").val();
   console.log("Guest Name Function: " + guestNameFunction);
   return guestNameFunction;
} //recond the name of the guest
 

function nameCleaned(guestName) {
    return guestName.trim().slice(0,1).toUpperCase() + guestName.trim().slice(1).toLowerCase();
} 

function checkGuest(guestName) {
    if (guestList.includes(guestName)) {
        console.log("Welcome Mr." + guestName);
        window.location = 'secondPage.html';
        return guestName;
    } else {
        console.log("Sorry " + guestName + ", you are not in the list.");
        $("#goToSecondPage").text("This is a private club " + guestName + ", you are not in the list.").fadeIn(600)
    }
}


//FLOW 

$("#goToSecondPage").click(function(){
    var cleanedName = nameCleaned(getGuestName());
    checkGuest(cleanedName);
    console.log(cleanedName);
    console.log("the Button with id #goToSecondPage was clicked");
});

$("#formGuestName").keydown(function(event){
    if (event.key=="Enter") {
        if (guestList.includes(nameCleaned(getGuestName()))) {
            window.location = 'secondPage.html'
        } else {
            $("#goToSecondPage").text("This is a private club " + nameCleaned(getGuestName()) + ", you are not in the list.").fadeIn(600);
            console.log("in the #formGuestName the key ENTER was pressed but the provided Name is not in the guestList")}
    } else {console.log("#formGuestName keydown was not the 'Enter' key")}
    });



//  First Page Text appearring
$(document).ready(function() {
    // Select the element to fade in
    var hiddenTextElement = $(".hiddenText");
  
    // Add the 'visible' class to trigger the fade-in effect
    hiddenTextElement.addClass("visible");
    console.log("FadeInElement now visible")
});


//  Second Page Pressing the Start Button 
$("#startButtonID").click(function() {
    // Select the element to fade in
    var hiddenElement = $(".hidden1");
  
    // Add the 'visible' class to trigger the fade-in effect
    hiddenElement.addClass("visible");
    console.log("FadeInElement now visible")
});


