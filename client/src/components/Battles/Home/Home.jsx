import { useEffect, useState } from 'react'
import Category from '../../Category/Category'
import data from '../../../const'

import './Home.css'
import { GET } from '../../../api'

export default function Home() {
    const row = ['twitch', 'comics', 'cars']

    useEffect(() => {
        if (!localStorage.getItem('dataFatched')) {
            GET(`/`).then(res => localStorage.setItem('dataFatched', JSON.stringify(res)))
        }
    }, [])

    return (
        <Category row={row} sectionsData={data.sectionsData} />
    )
}
