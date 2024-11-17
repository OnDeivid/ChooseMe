import { useEffect, useState } from 'react'
import Category from '../../Category/Category'
import data from '../../../const'

import './Home.css'
import { GET } from '../../../api'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const row = ['twitch', 'comics', 'cars']
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
