// Acquire whatever html element you want with jquery or javascript and save them as global variables here
var todayDate = document.getElementById("currentDay"); 

// Create a function to display current date on the top of the page, using either jquery and/or moment.js
 var currentDate = new Date();
 var cDay = currentDate.getDate();
 var cMonth = currentDate.getMonth() + 1;
 var cYear = currentDate.getFullYear();
 todayDate.innerHTML = " The Current Date is " + " : " + cMonth + "/" + cDay + "/" + cYear;
// Create a function to turn event block into text area

// Create a function to turn text area back to a div or p element

// Create a function to save event into localStorage when eventlistener click for save block.

// Not sure if this will be in js file, code to color code past hour/events, current hour/events, and future hours/events 