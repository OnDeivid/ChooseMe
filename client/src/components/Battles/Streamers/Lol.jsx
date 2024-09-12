import React from 'react'
import data from '../../../const'
import Compare from '../../Compare/Compare'

export default function Streamers() {
    const row = ['player1', 'vs', 'player2']
    return (
        <div>
            <Compare row={row} battles={data.streamersCompare} />
        </div>
    )
}
