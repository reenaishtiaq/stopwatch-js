let hours = 0;
let minutes = 0;
let seconds = 0;
let time;

// run the stop watch
function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 00;
        minutes++
        if (minutes === 60) {
            hours++;
        }
    }
    document.querySelector("h1").innerHTML = "0" + hours + " : 0" + minutes + " : 0" + seconds;
}

// start
function startCount() {
    time = setInterval(updateTime, 1000);
}

// stop
function stopCount() {
    clearInterval(time);
}

// reset all 
function clearAll() {
    hours = 00;
    minutes = 00;
    seconds = 00;
    document.querySelector("h1").innerHTML = "00 : 00 : 00";
    stopCount();
}