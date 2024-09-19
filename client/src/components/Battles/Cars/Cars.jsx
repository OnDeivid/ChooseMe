import React from 'react'

import data from '../../../const'
import Compare from '../../Compare/Compare'

export default function Cars() {
    const row = ['AUDI', 'vs', 'BMW']

    return (
        <div>
            <Compare row={row} battles={data.carsCompare} topic={'Cars'} />
        </div>
    )
}
