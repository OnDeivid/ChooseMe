import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { startCountdownToNextDay } from '../../utils/countDown';
import './Timer.css'

export default function Timer({ deleteStoreData, setNextDay }) {
    const navigate = useNavigate();
    const [countDown, setCountDown] = useState()
    const [hideTimer, setHideTimer] = useState(false)

    useEffect(() => {
        const timerInterval = startCountdownToNextDay(deleteStoreData, setCountDown, navigate, setHideTimer);
        return () => {
            clearInterval(timerInterval.timerInterval);
        };
    }, [])

    return (
        <div onClick={() => { setHideTimer(true) }} className={!hideTimer ? 'timerHolder' : 'hidenTimer'}>
            <h2 className='rules'>{countDown ? countDown : 'loading...'}</h2>
        </div>
    )
}
