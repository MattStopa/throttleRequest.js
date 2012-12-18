/*
throttleRequest.js
Author: Matt Stopa
MIT license: http://www.opensource.org/licenses/mit-license.php

https://github.com/MattStopa/throttleRequest.js
http://www.mattstopa.com

Usage:
  throttleRequest( functionToCall, delayInMilliseconds )


Examples:
  throttleRequest( function() { alert("HI!") }, 1000);

  $("#someElement").on("click", function() {
    alert("this will only fire if the element has not been clicked on for 5 seconds");
  }, 5000)
*/

this.throttleCount = 0;

function throttleRequest(functionToCall, msDelay) {
  throttleCount += 1;
  setTimeout( function(e) {
    throttleCount -= 1;
    if (throttleCount == 0) {
      functionToCall.call()
    }
  }, msDelay);
  return null;
}