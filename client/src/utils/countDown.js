import moment from 'moment-timezone';

export function startCountdownToNextDay(deleteDataFunction, setCountDown, navigate, setHideTimer, topic) {
    const now = moment.tz('Europe/Berlin');

    let targetTime = localStorage.getItem(`targetTime-${topic}`);

    if (!targetTime) {
        targetTime = now.clone().add(10, 'hours').toISOString();
        localStorage.setItem(`targetTime-${topic}`, targetTime);
    }

    targetTime = moment.tz(targetTime, 'Europe/Berlin'); 

    const timeDifference = targetTime.diff(now);
    updateCountdown(timeDifference);

    const timerInterval = setInterval(() => {
        const currentTime = moment.tz('Europe/Berlin');
        const timeRemaining = targetTime.diff(currentTime);

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            localStorage.removeItem(topic)
            localStorage.removeItem(`${topic}-Choice`)
            setHideTimer(true);
            navigate('/');
          
            console.log("10 hours have passed!");
        } else {
            setCountDown(updateCountdown(timeRemaining));
        }
    }, 1000);

    return { timerInterval };
}

function updateCountdown(milliseconds) {
    const seconds = Math.floor(milliseconds / 1000) % 60;
    const minutes = Math.floor(milliseconds / 1000 / 60) % 60;
    const hours = Math.floor(milliseconds / 1000 / 60 / 60);

    return `${hours}h ${minutes}m ${seconds}s`;
}
