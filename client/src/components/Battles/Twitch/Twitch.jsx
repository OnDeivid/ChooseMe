import React from 'react'

import Category from '../../Category/Category'
import data from '../../../const'

import './Twitch.css'

export default function Twitch() {
    const row = ['lol', 'csgo']

    return (
        <div >
            <Category row={row} battles={data.twitchCategory} />
        </div>
    )
}
