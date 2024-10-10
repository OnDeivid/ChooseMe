import moment from 'moment-timezone';

export function startCountdownToNextDay(deleteDataFunction, setCountDown, navigate, setHideTimer) {
    // Get the current time in Berlin
    const now = moment.tz('Europe/Berlin'); // Get current time in Berlin

    // Set the next day at midnight (00:00:00)
    const nextDay = now.clone().startOf('day').add(1, 'day'); // Start of the next day in Berlin

    // Calculate the difference in milliseconds
    const timeDifference = nextDay.diff(now); // Difference in milliseconds

    // Initialize the countdown
    updateCountdown(timeDifference);

    // Update the countdown every second
    const timerInterval = setInterval(() => {
        const currentTime = moment.tz('Europe/Berlin'); // Get the current time again
        const timeRemaining = nextDay.diff(currentTime); // Remaining time until the next day

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            deleteDataFunction();
            setHideTimer(true);
            navigate('/');
            
            const currentDate = moment.tz('Europe/Berlin').format('YYYY-MM-DD'); // Get current date in Berlin
            localStorage.setItem('date', currentDate);

            console.log("The next day has arrived!");
        } else {
            setCountDown(updateCountdown(timeRemaining));
        }
    }, 1000); // Update every second

    return { timerInterval }; // Return the interval ID to be cleared later
}

function updateCountdown(milliseconds) {
    const seconds = Math.floor(milliseconds / 1000) % 60;
    const minutes = Math.floor(milliseconds / 1000 / 60) % 60;
    const hours = Math.floor(milliseconds / 1000 / 60 / 60);

    return `${hours}h ${minutes}m ${seconds}s`;
}
