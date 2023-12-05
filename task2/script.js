function startTimer(timerId, duration) {
    let timerDisplay = document.getElementById(timerId + '_display');
    let [hours, minutes, seconds] = duration.split(':').map(Number);

    let intervalId = setInterval(() => {
        if (hours === 0 && minutes === 0 && seconds === 0) {
            clearInterval(intervalId);
        } else {
            seconds--;
            if (seconds < 0) {
                seconds = 59;
                minutes--;
                if (minutes < 0) {
                    minutes = 59;
                    hours--;
                }
            }
            let formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            timerDisplay.textContent = formattedTime;
        }
    }, 1000);

    return intervalId;
}

function stopTimer(intervalId) {
    clearInterval(intervalId);
}

function resetTimer(timerId, initialTime) {
    let timerDisplay = document.getElementById(timerId + '_display');
    timerDisplay.textContent = initialTime;
}

document.getElementById('timer1_start').addEventListener('click', () => {
    let intervalId = startTimer('timer1', '00:05:00');
    document.getElementById('timer1_stop').addEventListener('click', () => stopTimer(intervalId));
    document.getElementById('timer1_reset').addEventListener('click', () => resetTimer('timer1', '00:05:00'));
});

document.getElementById('timer2_start').addEventListener('click', () => {
    let intervalId = startTimer('timer2', '01:30:00');
    document.getElementById('timer2_stop').addEventListener('click', () => stopTimer(intervalId));
    document.getElementById('timer2_reset').addEventListener('click', () => resetTimer('timer2', '01:30:00'));
});

document.getElementById('timer3_start').addEventListener('click', () => {
    let intervalId = startTimer('timer3', '00:45:00');
    document.getElementById('timer3_stop').addEventListener('click', () => stopTimer(intervalId));
    document.getElementById('timer3_reset').addEventListener('click', () => resetTimer('timer3', '00:45:00'));
});
