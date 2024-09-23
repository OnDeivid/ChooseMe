import React, { useEffect, useState } from 'react'
import { startCountdownToNextDay } from '../../utils/countDown';

export default function Timer({ deleteStoreData }) {
    const [countDown, setCountDown] = useState()

    console.log(countDown)
    useEffect(() => {
        const timerInterval = startCountdownToNextDay(deleteStoreData, setCountDown);
        return () => {
            clearInterval(timerInterval.timerInterval);
            // intervalController.clear();
        };
    })
    return (
        <div>
            <h2 className='rules'>{countDown}</h2>
        </div>
    )
}
