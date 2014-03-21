//Clock.js Copyright © 2013 Jakob Aindreas A. Rivera
function init () {
  timeDisplay = document.createTextNode ("");
  document.getElementById("clock").appendChild( timeDisplay );
}

var clock = function(clockNode) {
    return function() {
        var currentTime = new Date(),
        hours = currentTime.getHours(),
        minutes = currentTime.getMinutes(),
        seconds = currentTime.getSeconds(),
        timeOfDay = ( hours < 12 ) ? "AM" : "PM";
        hours = (hours > 12) ? hours - 12 : hours;
        hours = (hours === 0) ? 12 : hours;
	    minutes = (minutes < 10 ? "0" : "") + minutes;
        seconds = (seconds < 10 ? "0" : "") + seconds;
        var place = (hours + ":" + minutes + ":" + seconds + timeOfDay);
        clockNode.innerHTML = place;
    };
}(document.getElementById('clock'));
setInterval(clock, 1000);
clock();