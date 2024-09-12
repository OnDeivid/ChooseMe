import { useState } from 'react'
import Category from '../../Category/Category'
import data from '../../../const'

import './Home.css'

export default function Home() {
    const row = ['twitch', 'comics', 'cars']

    return (
        <Category row={row} sectionsData={data.sectionsData} />
    )
}
