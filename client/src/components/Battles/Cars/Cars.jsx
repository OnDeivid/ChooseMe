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
        const storedData = JSON.parse(localStorage.getItem('dataFetched'))

        if (storedData === null || (storedData.error || storedData.error === 'Failed to fetch')) {
            localStorage.removeItem('dataFetched');
            navigate('/waitingData...');
        } else {
            setSectionData(storedData.filter(e => e.section === name));
        }
    }, [update])

    return (
        <Compare battles={data.goatCompare} topic={name} setUpdate={setUpdate} setSectionData={setSectionData} sectionData={sectionData} />
    )
}
