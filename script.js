const startBtn = document.getElementById("start");
const pomodoroBtn = document.getElementById("pomodoro");
const breakBtn = document.getElementById("break");
const pomodoroTime = document.getElementById("pomodoro-time");
const resetBtn = document.getElementById("reset");

let timerInterval;
let minutes = 25;
let seconds = 0;
let isRunning = false;
let isPomodoro = true;



function setTimer() {
  pomodoroTime.textContent = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  }

  function startStopTimer() {
    if (!isRunning) {
      startTimer();
    } else {
      stopTimer();
    }
  }

  function startTimer() {
    if (!isRunning) {
    isRunning = true;
    startBtn.textContent = "Stop";
    timerInterval = setInterval(updateTimer, 1000);
  }
}

  function stopTimer() {
   if (isRunning) {
    isRunning = false;
    startBtn.textContent = "Start";
    clearInterval(timerInterval);
  }
}

function updateTimer() {
    if (seconds === 0) {
      if (minutes === 0) {
        if (isPomodoro) {
          isPomodoro = false;
          minutes = 5;
        } else {
          isPomodoro = true;
          minutes = 25;
        }
      } else {
        minutes--;
        seconds = 59;
      }
    } else {
      seconds--;
    }
    setTimer();
  }

  function resetTimer() {
    stopTimer();
    if (isPomodoro) {
      minutes = 25;
    } else {
      minutes = 5;
    }
    seconds = 0;
    setTimer();
  }

startBtn.addEventListener("click", startStopTimer);
breakBtn.addEventListener("click", setBreakTimer);
resetBtn.addEventListener("click", resetTimer);
pomodoroBtn.addEventListener("click", setPomodoroTimer);
  
  function setPomodoroTimer() {
    if (!isPomodoro) {
      isPomodoro = true;
      minutes = 25;
      seconds = 0;
      pomodoroBtn.classList.add("active");
      breakBtn.classList.remove("active");
      setTimer();
    }
 }

  function setBreakTimer() {
    if (isPomodoro) {
      isPomodoro = false;
      minutes = 5;
      seconds = 0;
      breakBtn.classList.add("active");
      pomodoroBtn.classList.remove("active");
      setTimer();
      }
      
    }

  setTimer();
