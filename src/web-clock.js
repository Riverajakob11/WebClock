//WebClock. Copyright © 2014 Jakob Aindreas Rivera.
/* Info:
Version: 3.0
Type: Widget
Language: pure JavaScript
Author: Jakob Aindreas Rivera
*/
//Note: The info comment is gonna be moved into a JSON format.
var clock = (function clock(clockNode)
{
    clock = clock || document.querySelector('#clock, .clock');
    //var currentTime,hours,minutes,seconds,timeOfDay;
    return function()
    {
        /*currentTime = new Date();
        hours = currentTime.getHours();
        minutes = currentTime.getMinutes();
        seconds = currentTime.getSeconds();
        timeOfDay = (hours < 12) ? 'AM' : 'PM';*/
        //clockNode.innerHTML = (hours + ":" + minutes + ":" + seconds + timeOfDay);
        clockNode.replaceChild(
            document.createTextNode(
                (new Date()).toLocaleTimeString()
            ),
            clockNode.childNodes.item(0)
        );
    };
}(document.getElementById('clock')));
var clockInterval = setInterval(clock, 100);
