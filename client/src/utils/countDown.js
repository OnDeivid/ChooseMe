import { useEffect, useRef } from 'react';

export function startCountdownToNextDay(deleteDataFunction, setCountDown, navigate, setHideTimer) {
    // Get the current time
    const now = new Date();

    // Set the next day at midnight (00:00:00)
    const nextDay = new Date(now);
    nextDay.setHours(24, 0, 0, 0); // Set to midnight

    // Calculate the difference in milliseconds
    const timeDifference = nextDay - now

    // Initialize the countdown
    updateCountdown(timeDifference);

    // Update the countdown every second
    const timerInterval = setInterval(() => {
        const currentTime = new Date();
        const timeRemaining = nextDay - currentTime;

        if (timeRemaining <= 0) {
            clearInterval(timerInterval);
            deleteDataFunction()
            setHideTimer(true)
            navigate('/')
            
            console.log("The next day has arrived!");
        } else {

            setCountDown(updateCountdown(timeRemaining))
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
