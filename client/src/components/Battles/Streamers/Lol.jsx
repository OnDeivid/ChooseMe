import React, { useEffect, useState } from 'react'

import data from '../../../const'
import Compare from '../../Compare/Compare'
import { GET } from '../../../api'

export default function Streamers() {
    const [sectionData, setSectionData] = useState([])
    const [update, setUpdate] = useState(false)
    const name = 'lol'
    useEffect(() => {
        GET(`/categorySuggestion/${name}`).then(res => setSectionData(JSON.parse(res)))
    }, [update])
    return (
        <div>
            <Compare battles={data.streamersCompare} setUpdate={setUpdate} sectionData={sectionData} topic={name} />
        </div>
    )
}

