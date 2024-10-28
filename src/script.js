let timer;
let timeRemaining = 25 * 60;
let paused = false;

function updateDisplay(){
    const minutes = Math.floor(timeRemaining / 60);
    const seconds = timeRemaining % 60;
    document.getElementById("timer").textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
}

function startTimer(){
    if (timer) return;
    if (paused) {
        paused = false; // Unset paused state
    } else {
        timeRemaining = 25 * 60; // Reset timer if starting from scratch
    }

    timer = setInterval(() =>{
        if (timeRemaining > 0) {
            timeRemaining--
            updateDisplay();
        }
        else{
            clearInterval(timer);
            timer = null;
            alert("Time's up!")
        }
    }, 1000)
}

function pauseTimer(){
    if (timer) {
        clearInterval(timer);
        timer = null;
        paused = true; // Set paused state
    }
}

function resetTimer() {
    clearInterval(timer);
    timer = null;
    timeRemaining = 25 * 60;
    paused = false; // Reset paused state
    updateDisplay();
}

updateDisplay();