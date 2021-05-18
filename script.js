var ms = 0;
var sec = 0;
 function startTimer() {
     ms++;
     if(ms <= 9) document.getElementById('tens').innerHTML = '0'+ms;
     if(ms > 9) document.getElementById('tens').innerHTML = ms;
     if(ms > 99) {
         sec++;
         if(sec <= 9) document.getElementById('seconds').innerHTML = '0'+ sec;
         else document.getElementById('seconds').innerHTML = sec;
         ms = 0;
         document.getElementById('tens').innerHTML = '0'+ms;
     }

 }

var btnstart = document.getElementById('start');
var btnstop = document.getElementById('stop');
var btnrestart = document.getElementById('restart');
var time; 

 btnstart.onclick = function() {
    time = setInterval(startTimer);
 };

// The setInterval() method will continue calling the function until 
//                       clearInterval() is called, or the window is closed.
//  Return Value:	A Number, representing the ID value of the timer that is set. 
//                  Use this value with the clearInterval() method to cancel the timer

 btnstop.onclick = function() {
     clearInterval(time);
 };
// The clearInterval() method clears a timer set with the setInterval() method.
// Note: To be able to use the clearInterval() method, 
//         you must use a variable when creating the setinterval method.


 btnrestart.onclick = function() {
     clearInterval(time);
     ms = 0;
     sec = 0;
     document.getElementById('tens').innerHTML = '00';
     document.getElementById('seconds').innerHTML = '00';
 };
