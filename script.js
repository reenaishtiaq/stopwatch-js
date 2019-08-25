let hours = 0;
let minutes = 0;
let seconds = 0;
let time;

// run the stop watch
function updateTime() {
    seconds++;
    if (seconds === 60) {
        seconds = 0;
        minutes++
        if (minutes === 60) {
            hours++;
        }
    }
    document.querySelector("h1").innerHTML = hours + ":" + minutes + ":" + seconds;
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
    hours = 0;
    minutes = 0;
    seconds = 0;
    document.querySelector("h1").innerHTML = hours + ":" + minutes + ":" + seconds;
    stop();
}