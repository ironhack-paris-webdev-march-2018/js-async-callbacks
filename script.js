
function wait (mySeconds) {
  // 2 arguments:
  //   1. callback function
  //   2. amount of milliseconds to wait
  timerId =
    setTimeout(function () {
      var myH2 = document.querySelector(".timer-feedback");
      myH2.innerHTML = mySeconds + " seconds have passed!";
    }, mySeconds * 1000);
}

var startButton = document.querySelector(".start");
var stopButton = document.querySelector(".stop");
var timerId;

startButton.onclick = function () {
  console.log("START clicked");
  var myH2 = document.querySelector(".timer-feedback");
  myH2.innerHTML = "Timer started...";
  clearTimeout(timerId);
  wait(10);
};

stopButton.onclick = function () {
  console.log("STOP clicked");
  var myH2 = document.querySelector(".timer-feedback");
  myH2.innerHTML = "Timer STOPPED";
  clearTimeout(timerId);
};

var countButton = document.querySelector(".count-start");
var countH2 = document.querySelector(".countdown");

countButton.onclick = function () {
  var count = 10;
  countH2.innerHTML = count;

  setInterval(function () {
    count -= 1;
    countH2.innerHTML = count;
  }, 1000);
};


// 1st message
console.log("This line is the last");
