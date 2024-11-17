import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


import data from '../../../const'
import Compare from '../../Compare/Compare'

export default function Cars() {
    const [sectionData, setSectionData] = useState([])
    const [update, setUpdate] = useState(false)

    const navigate = useNavigate()

    const name = 'cars'

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('dataFatched'))

        if (storedData === null || (storedData.error && storedData.error === 'Failed to fetch')) {
            localStorage.removeItem('dataFatched');
            navigate('/');
        } else {
            setSectionData(storedData.filter(e => e.section === name));
        }
        console.log(storedData)
    }, [update])

    return (
        <Compare battles={data.carsCompare} topic={name} setUpdate={setUpdate} sectionData={sectionData} />
    )
}
