import Compare from '../../Compare/Compare'
import data from '../../../const'
import { useEffect, useState } from 'react'
import { GET } from './../../../api'
export default function Comics() {

    const [sectionData, setSectionData] = useState([])
    const [update, setUpdate] = useState(false)

    const name = 'heros'
    
    useEffect(() => {
        GET(`/categorySuggestion/${name}`).then(res => setSectionData(res))
    }, [update])
    return (
        <div>
            <Compare battles={data.comicsCategory} setUpdate={setUpdate} sectionData={sectionData} topic={name} />
        </div>
    )
}
