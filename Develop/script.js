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
      var toBeSaved = event.target.parentNode.querySelector(".event-block").value;
      var timeBlock = event.target.parentNode.querySelector(".time").innerText.trim();

			// REMOVE LINE BELOW BEFORE SUBMITTING
      localStorage.removeItem('Event');
      var parsedEvents = JSON.parse(localStorage.getItem("Event"));
      if (parsedEvents == null) {
        parsedEvents = {};
      }    
      parsedEvents[timeBlock] = toBeSaved;
      localStorage.setItem("Event", JSON.stringify(parsedEvents));
    }
}

var test = document.querySelector(".container").addEventListener("click", saveEvent);

    
// create a function to load saved event(s) on page load
// Acquire whatever html element you want with jquery or javascript and save them as global variables here
// acquired the p element from #currentDay


    
// create a function to load saved event(s) on page load
var pageLoad = function () {
  var parsedEventValue = JSON.parse(localStorage.getItem("Event"));
  if (parsedEventValue == null) {
    parsedEventValue = {};
  }

	var EventValueAsArr = Object.entries(parsedEventValue);
	// {" 9:00AM" : "ARASH", "10:00AM" : "JULIAN"}
  // [["9:00AM", "ARASH"], ["10:00AM" , "JULIAN"]]
  EventValueAsArr.forEach(function(timeAndText) {
  	alert(timeAndText);
    // timeAndText[0] is "TIME" // "9:00AM", "10:00AM" 
    // timeAndText[1] is "TEXT" // "ARASH", "JULIAN"
  });
  var NineAMValue = parsedEventValue["9:00 AM"];
  document.getElementById("9:00 AM").value = NineAMValue;
  
  var tenAMValue = parsedEventValue["10:00 AM"];
  document.getElementById("10:00 AM").value = tenAMValue;

  var elevenAMValue = parsedEventValue["11:00 AM"];
  document.getElementById("11:00 AM").value = elevenAMValue;

  var twelvePMValue = parsedEventValue["12:00 PM"];
  document.getElementById("12:00 PM").value = twelvePMValue;
};
pageLoad();
//  code to color code past hour/events, current hour/events, and future hours/events, addclasslist change color 
 
//  code to color code past hour/events, current hour/events, and future hours/events, addclasslist change color 
 
