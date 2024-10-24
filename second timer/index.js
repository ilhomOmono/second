let seconds = 0;
let minutes = 0;
let hours = 0;
let timerInterval;

const display = document.getElementById('display');
const startBtn = document.getElementById('startBtn');
const stopBtn = document.getElementById('stopBtn');
const resetBtn = document.getElementById('resetBtn');

function updateDisplay() {
    let formattedHours = hours < 10 ? `0${hours}` : hours;
    let formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    let formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
    display.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

function startTimer() {
    timerInterval = setInterval(() => {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
            if (minutes === 60) {
                minutes = 0;
                hours++;
            }
        }
        updateDisplay();
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    clearInterval(timerInterval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
}

startBtn.addEventListener('click', startTimer);
stopBtn.addEventListener('click', stopTimer);
resetBtn.addEventListener('click', resetTimer);
