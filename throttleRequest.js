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