// Acquire whatever html element you want with jquery or javascript and save them as global variables here
// acquired the p element from #currentDay

var todayDate = document.getElementById("currentDay"); 
var toSave = [];

// Create a function to display current date on the top of the page
 var currentDate = new Date();
 var hour = currentDate.getHours(); 
 var cDay = currentDate.getDate();
 var cMonth = currentDate.getMonth() + 1;
 var cYear = currentDate.getFullYear();
 todayDate.innerHTML = " The Current Date is " + " : " + cMonth + "/" + cDay + "/" + cYear;


// Create a function to save event into localStorage when eventlistener click for save block.


var saveEvent = function(event) {
    if (event.target.classList.contains("saveBtn")) {
        console.log("you clicked on the save btn", event.target);
    // First, get the reference to DOM node that we want the value from. Second, get its value by adding .value. Third, we want to use setitem to localStorage.
    event.target.parentNode.querySelector(".event-block").value;
    var toBeSaved = event.target.parentNode.querySelector(".event-block").value;
    var timeBlock = event.target.parentNode.querySelector(".time");
    localStorage.setItem("Event", toBeSaved);
    
    // setItem to "time stamp: eventText/value" then get item, parse item, which is a json object, turn into string, display string
    
    }
}

var test = document.querySelector(".container").addEventListener("click", saveEvent);

    

   

// create a function to load saved event(s) on page load

 //  code to color code past hour/events, current hour/events, and future hours/events, addclasslist change color 
 
