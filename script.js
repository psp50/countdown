const counterElement = document.querySelector("#counter");
const messageElement = document.querySelector("#message");
const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
const resetButton = document.querySelector("#reset");
const startValueInput = document.querySelector("#startValue");

let counter = 10;
let intervalId = null;

function startCountdown() {
  if (intervalId !== null) {
    console.log("Timer is already running!");
    return;
  }

  messageElement.innerText = "";
  messageElement.className = "message";

  intervalId = setInterval(() => {
    counter--;
    counterElement.innerText = counter;

    if (counter <= 0) {
      clearInterval(intervalId);
      intervalId = null;

      messageElement.innerText = "Time's up!";
      messageElement.className = "message finished";
    }
  }, 1000);
}

function stopCountdown() {
  clearInterval(intervalId);
  intervalId = null;
}

function resetCountdown() {
  clearInterval(intervalId);
  intervalId = null;

  messageElement.innerText = "";
  messageElement.className = "message";

  counter = parseInt(startValueInput.value) || 10;
  counterElement.innerText = counter;
}

function updateFromInput() {
  if (intervalId === null) {
    counter = parseInt(startValueInput.value) || 10;
    counterElement.innerText = counter;

    messageElement.innerText = "";
    messageElement.className = "message";
  }
}

startButton.addEventListener("click", startCountdown);
stopButton.addEventListener("click", stopCountdown);
resetButton.addEventListener("click", resetCountdown);
startValueInput.addEventListener("input", updateFromInput);