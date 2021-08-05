// ==UserScript==
// @name Freshbooks Timer Tweaks
// @namespace joelmdev
// @description makes freshbooks' timer slightly less miserable to use
// @include /^https:\/\/(.+\.)freshbooks\.com\/internal\/timesheet\/timer.*$/
// @run-at document-end
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @grant none
// @version 0.1
// ==/UserScript==


$("body").append("<div id='history'><h4>History:</h4></div>"); 

$("#timer-button").click(function() {
  let stuuf = $(this).attr("class");

  if(stuuf === "timer-button-running") {
    $("#history").append("<p>stop: " + new Date().toString() + "</p>");
  }
  else {
    $("#history").append("<p>start: " + new Date().toString() + "</p>");
  }
});

$("#log-hours-button").click(function() {  
  $("#history").append("<p>logged: " + new Date().toString() + "</p>");
});
