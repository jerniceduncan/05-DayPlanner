// $(document).ready(function() {
//     // display current day on page
//     $("#currentDay").text(moment().format("dddd, MMMM Do YYYY,   h:mm:ss a"));
//     // listen for btn click
//     $(".saveBtn").on("click", function() {

//         var timeDis = $(this).siblings(".description").val();
//         var hourId = $(this).parent().attr("id");
//         console.log("saveBtn", timeDis);
//         localStorage.setItem(hourId, timeDis);

//     });
//     // load any saved data from localStorage
//     $("#hour-9 .description").val(localStorage.getItem("hour-9"));
//     $("#hour-10 .description").val(localStorage.getItem("hour-10"));
//     $("#hour-11 .description").val(localStorage.getItem("hour-11"));
//     $("#hour-12 .description").val(localStorage.getItem("hour-12"));
//     $("#hour-1 .description").val(localStorage.getItem("hour-1"));
//     $("#hour-2 .description").val(localStorage.getItem("hour-2"));
//     $("#hour-3 .description").val(localStorage.getItem("hour-3"));
//     $("#hour-4 .description").val(localStorage.getItem("hour-4"));
//     $("#hour-5 .description").val(localStorage.getItem("hour-5"));

//     // create a funtion to change background with time
//     function changeColor() {
//         // get current number of hours
//         var currentHour = moment().hours();
//         // loop over time blocks
//         $(".time-block").each(function() {
//             // grab block hour 
//             // if statement-if block hour (past) < current hour apply styles class
//             // else if statment block=current apply present css class
//             // else apply css future
//         });

//     }

//     changeColor()










//add date & time to header
// create, amend, append
//create variables for where we will put the time
var $dateTimeHeader = $("#currentTime");
var $dateTimeElement = $("<p>");
//create the text/content that will go in that element
var $dateTime = moment().format('LLL');
//check i'm getting the correct date
console.log($dateTime); //yes I am
//append date element, to date header using date text
$dateTimeHeader.append($dateTimeElement.text($dateTime));
//---------------------------------------------------------//
//Dynamic class styling needed
//If in future apply class .future
//If in present apply class .current
//If in past apply class .past

//Non dry method
//In HTML give each time an ID for that time
//Assign a variable to each ID
//To each variable apply an if statement
//if set time === present time apply .current
//else if set time is ahead of present time apply .future
//else set time is behind present tie appy .past
var currentTime = moment().hours();
console.log(currentTime);
console.log("what time am I saying " + (moment().hour(09)));

var $9am = $("#9am");
if (currentTime === 09) {
    $9am.addClass("current");
} else if (currentTime < 09) {
    $9am.removeClass("current");
    $9am.addClass("future");
} else {
    $9am.removeClass("current");
    $9am.removeClass("future");
    $9am.addClass("past");
}
var $10am = $("#10am");
if (currentTime === 10) {
    $10am.addClass("current");
} else if (currentTime < 10) {
    $10am.removeClass("current");
    $10am.addClass("future");
} else {
    $10am.removeClass("current");
    $10am.removeClass("future");
    $10am.addClass("past");
}
var $11am = $("#11am");
if (currentTime === 11) {
    $11am.addClass("current");
} else if (currentTime < 11) {
    $11am.removeClass("current");
    $11am.addClass("future");
} else {
    $11am.removeClass("current");
    $11am.removeClass("future");
    $11am.addClass("past");
}
var $12am = $("#12am");
if (currentTime === 12) {
    $12am.addClass("current");
} else if (currentTime < 12) {
    $12am.removeClass("current");
    $12am.addClass("future");
} else {
    $12am.removeClass("current");
    $12am.removeClass("future");
    $12am.addClass("past");
}
var $1pm = $("#1pm");
if (currentTime === 13) {
    $1pm.addClass("current");
} else if (currentTime < 13) {
    $1pm.removeClass("current");
    $1pm.addClass("future");
} else {
    $1pm.removeClass("current");
    $1pm.removeClass("future");
    $1pm.addClass("past");
}
var $2pm = $("#2pm");
if (currentTime === 14) {
    $2pm.addClass("current");
} else if (currentTime < 14) {
    $2pm.removeClass("current");
    $2pm.addClass("future");
} else {
    $2pm.removeClass("current");
    $2pm.removeClass("future");
    $2pm.addClass("past");
}
var $3pm = $("#3pm");
if (currentTime === 15) {
    $3pm.addClass("current");
} else if (currentTime < 15) {
    $3pm.removeClass("current");
    $3pm.addClass("future");
} else {
    $3pm.removeClass("current");
    $3pm.removeClass("future");
    $3pm.addClass("past");
}
var $4pm = $("#4pm");
if (currentTime === 16) {
    $4pm.addClass("current");
} else if (currentTime < 16) {
    $4pm.removeClass("current");
    $4pm.addClass("future");
} else {
    $4pm.removeClass("current");
    $4pm.removeClass("future");
    $4pm.addClass("past");
}
var $5pm = $("#5pm");
if (currentTime === 17) {
    $5pm.addClass("current");
} else if (currentTime < 17) {
    $5pm.removeClass("current");
    $5pm.addClass("future");
} else {
    $5pm.removeClass("current");
    $5pm.removeClass("future");
    $5pm.addClass("past");
}
// --------------------------------------------------------------------------------------------//
// saving text to local storage
//variables for save button
var taskInput = document.querySelector(".todo-text");

//click listener to save button
$(".save").on("click", function() {
        console.log(this) //this is logging the save button being clicked
        var time = $(this).parent().attr("id");
        console.log(time); //logging correct  time id, can then store text against this 
        var todoText = $(this).siblings(".todo-text").val();
        console.log(todoText); //logging to see if I am picking up the string value from the this sibling (todo-text)
        //now my time and my text are being logged correctly, onclick. Save them to the local storage
        localStorage.setItem(time, todoText);
        console.log(localStorage); //check if local storage is working - yes

    })
    //-----------------------------------------------------------------------------------------------//
    //outside of onclick function (as want to display as soon as page loaded)
    //retrieve & display local storage on screen after refresh
$("#9am .todo-text").val(localStorage.getItem("9am"));
$("#10am .todo-text").val(localStorage.getItem("10am"));
$("#11am .todo-text").val(localStorage.getItem("11am"));
$("#12am .todo-text").val(localStorage.getItem("12am"));
$("#1pm .todo-text").val(localStorage.getItem("1pm"));
$("#2pm .todo-text").val(localStorage.getItem("2pm"));
$("#3pm .todo-text").val(localStorage.getItem("3pm"));
$("#4pm .todo-text").val(localStorage.getItem("4pm"));
$("#5pm .todo-text").val(localStorage.getItem("5pm"));

//clear all text from local storage
$(".clear").on("click", function() {
    localStorage.clear();
})