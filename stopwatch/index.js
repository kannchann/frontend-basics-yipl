//variables for buttons

const startStopButton = document.getElementById("startStopBtn");
const resetButton = document.getElementById("resetBtn");

//time var
let s = 0;
let hr = 0;
let min = 0;

//leading seconds
let leadingSeconds = 0;
let leadingMin = 0;
let leadingHr = 0;

//variables for set interval and timer status
let timerInterval = null;
let timerStatus = "stop";
// functions
function stopWatch() {
  s++;
  if (s / 60 === 1) {
    s = 0;
    min++;

    if (min / 60 === 1) {
      min = 0;
      hr++;
    }
  }
  if (s < 10) {
    leadingSeconds = "0" + s.toString();
  } else {
    leadingSeconds = s;
  }
  if (min < 10) {
    leadingMin = "0" + min.toString();
  } else {
    leadingMin = min;
  }
  if (hr < 10) {
    leadingHr = "0" + hr.toString();
  } else {
    leadingHr = hr;
  }

  const displayTimer = (document.getElementById("timer").innerText =
    leadingHr + ":" + leadingMin + ":" + leadingSeconds);
}

startStopButton.addEventListener("click", function () {
  if (timerStatus === "stop") {
    timerInterval = window.setInterval(stopWatch, 1000);
    document.getElementById(
      "startStopBtn"
    ).innerHTML = `<i class = "fa-solid fa-pause" id = "pause"></i>`;
    timerStatus = "started";
  } else {
    window.clearInterval(timerInterval);
    document.getElementById(
      "startStopBtn"
    ).innerHTML = `<i class = "fa-solid fa-play" id = "play"></i>`;
    timerStatus = "stop";
  }
});

resetButton.addEventListener("click", function () {
  s = 0;
  hr = 0;
  min = 0;
  window.clearInterval(timerInterval);
  document.getElementById("timer").innerText = "00:00:00";
  document.getElementById(
    "startStopBtn"
  ).innerHTML = `<i class = "fa-solid fa-play" id = "play"></i>`;
  timerStatus = "stop";
});
