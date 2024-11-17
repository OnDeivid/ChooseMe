import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


import data from '../../../const'
import Compare from '../../Compare/Compare'

export default function Streamers() {
    const [sectionData, setSectionData] = useState([])
    const [update, setUpdate] = useState(false)
    
    const navigate = useNavigate()


    const name = 'lol'

    useEffect(() => {
        const storedData = JSON.parse(localStorage.getItem('dataFatched'))

        if (storedData === null) {
            localStorage.removeItem('dataFatched');
            navigate('/');
        } else {
            setSectionData(storedData.filter(e => e.section === name));
        }

    }, [update])

    return (
        <Compare battles={data.streamersCompare} setUpdate={setUpdate} sectionData={sectionData} topic={name} />
    )
}

