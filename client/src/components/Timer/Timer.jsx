import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { startCountdownToNextDay } from '../../utils/countDown';
import './Timer.css'
import NextUpdateTimer from '../NextUpdateTimer/NextUpdateTimer';

export default function Timer({ deleteStoreData, topic }) {
    const navigate = useNavigate();
    const [countDown, setCountDown] = useState()
    const [hideTimer, setHideTimer] = useState(false)

    useEffect(() => {
        const timerInterval = startCountdownToNextDay(deleteStoreData, setCountDown, navigate, setHideTimer, topic);
        return () => {
            clearInterval(timerInterval.timerInterval);
        };
    }, [])

    return (
        <div onClick={() => { setHideTimer(true) }} className={!hideTimer ? 'timerHolder' : 'hidenTimer'}>
            <h2 className='rules'><span style={{ fontSize: '4dvh' }}>Next Voting</span>: {countDown ? countDown : 'loading...'}</h2>
            <h2 className='nextUpdate'>Next Update: {<NextUpdateTimer />}</h2>
        </div>
    )
}
