import React, { useEffect, useState } from 'react';

export default function NextUpdateTimer() {
  const [timeLeft, setTimeLeft] = useState(() => {
    const savedEndTime = localStorage.getItem('timerEndTime');
    const now = Date.now();
    return savedEndTime ? Math.max(0, savedEndTime - now) : 1 * 60 * 1000; // Default to 1 minute
  });

  useEffect(() => {
    const now = Date.now();
    const endTime = now + timeLeft;
    localStorage.setItem('timerEndTime', endTime); // Save the timer end time

    const timer = setInterval(() => {
      const remainingTime = Math.max(0, endTime - Date.now());
      setTimeLeft(remainingTime);

      if (remainingTime <= 0) {
        clearInterval(timer); // Stop the timer when it reaches 0
        localStorage.removeItem('timerEndTime');
        onTimerEnd();
      }
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount or when updateTimer changes
  }, [timeLeft]); // Effect will run when timeLeft or updateTimer changes

  const onTimerEnd = () => {
    localStorage.removeItem('update')
  };

  const formatTime = ms => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return <span>{formatTime(timeLeft)}</span>;
}
