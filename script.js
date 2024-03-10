const startBtn = document.getElementById("start");
const pomodoroBtn = document.getElementById("pomodoro");
const breakBtn = document.getElementById("break");
const pomodoroTime = document.getElementById("pomodoro-time");

let minutes = 25;
let seconds = 0;
let isRunning = false;
let isPomodoro = true;

startBtn.addEventListener("click", startStopTimer);
pomodoroBtn.addEventListener("click", setPomodoroTimer);
breakBtn.addEventListener("click", setBreakTimer);

function startStopTimer() {
    if (!isRunning) {
      startTimer();
    } else {
      stopTimer();
    }
  }

  function startTimer() {
    isRunning = true;
    startBtn.textContent = "Stop";
    timerInterval = setInterval(updateTimer, 1000);
  }

  function stopTimer() {
    isRunning = false;
    startBtn.textContent = "Start";
    clearInterval(timerInterval);
  }

  function setPomodoroTimer() {
    if (!isPomodoro) {
      isPomodoro = true;
      pomodoroBtn.classList.add("active");
      breakBtn.classList.remove("active");
      resetTimer();
    }
  }

  function setBreakTimer() {
    if (isPomodoro) {
      isPomodoro = false;
      breakBtn.classList.add("active");
      pomodoroBtn.classList.remove("active");
      resetTimer();
    }
  }

  function resetTimer() {
    stopTimer();
    minutes = 25;
    seconds = 0;
    updateTimerDisplay();
  }

  function updateTimer() {
    if (minutes === 0 && seconds === 0) {
      resetTimer();
      return;
    }

    if (seconds === 0) {
      minutes--;
      seconds = 59;
    } else {
      seconds--;
    }

    updateTimerDisplay();
  }

  function updateTimerDisplay() {
    pomodoroTime.textContent = formatTime(minutes) + ":" + formatTime(seconds);
  }

  function formatTime(time) {
    return time < 10 ? "0" + time : time;
  }