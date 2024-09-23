import React, { useEffect } from 'react'

import data from '../../../const'
import Compare from '../../Compare/Compare'
import { GET } from '../../../api'

export default function Cars() {
    const name = 'cars'
    useEffect(() => {
        GET(`/categorySuggestion/${name}`).then(res => console.log(res))
    }, [])
    return (
        <div>
            <Compare battles={data.carsCompare} topic={'Cars'} />
        </div>
    )
}
