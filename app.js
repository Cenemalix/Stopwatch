let startTime;
let stopwatchInterval;
let elapsedPausedTime = 0;

function startStopwatch() {
    if (!stopwatchInterval) {
        startTime = new Date().getTime() - elapsedPausedTime;
        stopwatchInterval = setInterval(updateStopwatch, 10);
    }
};

function stopStopwatch() {
    clearInterval(stopwatchInterval);
    elapsedPausedTime = new Date().getTime() - startTime;
    stopwatchInterval = null;
};

function resetStopwatch() {
    clearInterval(stopwatchInterval);
    elapsedPausedTime = 0;
    stopwatchInterval = null;
    document.querySelector('.inputTime').innerHTML = "00:00:00:00";
};


function updateStopwatch() {
    let currentTime = new Date().getTime();
    let elapsedTime = currentTime - startTime;
    let milliseconds = Math.floor(elapsedTime % 1000); // get milliseconds 
    let seconds = Math.floor(elapsedTime / 1000) % 60; // calculate seconds
    let minutes = Math.floor(elapsedTime / 1000 / 60) % 60; // calculate minutes
    let hours = Math.floor(elapsedTime / 1000 / 60 / 60); // calculate hours
    let displayTime = pad(hours) + ":" + pad(minutes) + ":" + pad(seconds) + ":" + padMilliseconds(milliseconds);
    document.querySelector('.inputTime').innerHTML = displayTime;
};

function pad(number) {
    return (number < 10 ? "0" : "") + number;
};

function padMilliseconds(ms) {
    return String(ms).padStart(2, '0').substring(0, 2);
};

let btnStart = document.querySelector('#btn-start').addEventListener('click', startStopwatch);
let btnStop = document.querySelector('#btn-stop').addEventListener('click', stopStopwatch);
let btnReset = document.querySelector('#btn-reset').addEventListener('click', resetStopwatch);