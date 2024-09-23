import React, { useEffect } from 'react'

import data from '../../../const'
import Compare from '../../Compare/Compare'
import { GET } from '../../../api'

export default function Streamers() {
    const name = 'lol'
    useEffect(() => {
        GET(`/categorySuggestion/${name}`).then(res => console.log(res))
    }, [])
    return (
        <div>
            <Compare battles={data.streamersCompare} topic={'lol'} />
        </div>
    )
}
