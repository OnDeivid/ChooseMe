import { useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'

import Compare from '../../Compare/Compare'

import data from '../../../const'

export default function Comics() {

    const [sectionData, setSectionData] = useState([])
    const [update, setUpdate] = useState(false)

    const navigate = useNavigate()

    const name = 'heros'

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
        <div>
            <Compare battles={data.comicsCategory} setUpdate={setUpdate} sectionData={sectionData} setSectionData={setSectionData} topic={name} />
        </div>
    )
}
