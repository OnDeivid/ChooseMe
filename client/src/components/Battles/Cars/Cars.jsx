import React, { useEffect, useState } from 'react'

import data from '../../../const'
import Compare from '../../Compare/Compare'
import { GET } from '../../../api'

export default function Cars() {
    const [sectionData, setSectionData] = useState([])
    const [update, setUpdate] = useState(false)

    const name = 'cars'

    useEffect(() => {
        GET(`/categorySuggestion/${name}`).then(res => setSectionData(JSON.parse(res)))
    }, [update])

    return (
        <Compare battles={data.carsCompare} topic={name} setUpdate={setUpdate} sectionData={sectionData} />
    )
}
