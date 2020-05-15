$(document).ready(function () {
  //add date & time to header
  // create, amend, append
  //create variables for where we will put the time
  var $dateTimeHeader = $("#currentTime");
  var $dateTimeElement = $("<p>");
  //create the text/content that will go in that element
  var $dateTime = moment().format("LLL");
  //check i'm getting the correct date
  console.log($dateTime); //yes I am
  //append date element, to date header using date text
  $dateTimeHeader.append($dateTimeElement.text($dateTime));

  var currentTime = moment().hours();
  console.log(currentTime);

  console.log("what time am I saying " + moment().hour());

  $(".hour").each(function () {
    var blockHour = parseInt($(this).parent().attr("id"));
    // converting 12 hour time to 24 hour time
    switch (blockHour) {
      case 1:
        blockHour = 13;
        break;
      case 2:
        blockHour = 14;
        break;
      case 3:
        blockHour = 15;
        break;
      case 4:
        blockHour = 16;
        break;
      case 5:
        blockHour = 17;
        break;
    }
    if (blockHour < currentTime) {
      $(this).parent().addClass("past");
    } else if (blockHour === currentTime) {
      $(this).parent().removeClass("past");
      $(this).parent().addClass("current");
    } else {
      $(this).parent().removeClass("past");
      $(this).parent().removeClass("current");
      $(this).parent().addClass("future");
    }
  });

  // saving text to local storage
  //variables for save button
  var taskInput = document.querySelector(".todo-text");

  //click listener to save button
  $(".save").on("click", function () {
    console.log(this); //this is logging the save button being clicked
    var time = $(this).parent().attr("id");
    console.log(time); //logging correct  time id, can then store text against this
    var todoText = $(this).siblings(".todo-text").val();
    console.log(todoText); //logging to see if I am picking up the string value from the this sibling (todo-text)
    //now my time and my text are being logged correctly, onclick. Save them to the local storage
    localStorage.setItem(time, todoText);
    console.log(localStorage); //check if local storage is working - yes
  });
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
  $(".clear").on("click", function () {
    localStorage.clear();
  });
});
