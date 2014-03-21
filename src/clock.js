//Clock.js Copyright © 2013 Jakob Aindreas A. Rivera
function init () {
  timeDisplay = document.createTextNode ("");
  document.getElementById("clock").appendChild( timeDisplay );
}

function clock(){
  var currentTime = new Date();
  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var timeOfDay = ( hours < 12 ) ? "AM" : "PM";
  hours = ( hours > 12 ) ? hours - 12 : hours;
  hours = ( hours === 0 ) ? 12 : hours;
  minutes = ( minutes < 10 ? "0" : "" ) + minutes;
  seconds = ( seconds < 10 ? "0" : "" ) + seconds;
  var format = (hours + ":" + minutes + ":" + seconds + timeOfDay);
  document.getElementById('clock').innerHTML = format;
  setTimeout(clock,1000);
}
clock();