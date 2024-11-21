import { useEffect, useState } from 'react'
import Category from '../../Category/Category'
import data from '../../../const'

import './Home.css'

import { useNavigate } from 'react-router-dom'

export default function Home() {
    const row = ['twitch', 'comics', 'goat']
    const navigate = useNavigate();
    useEffect(() => {
        if (!localStorage.getItem('dataFetched')) {
            navigate('/waitingData...')
        }
    }, [])

    return (
        <Category row={row} sectionsData={data.sectionsData} />
    )
}
