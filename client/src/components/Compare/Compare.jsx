import React, { useState } from 'react'
import twitch from '../../assets/dTwitch.png'
import Navbar from './../Navbar/Navbar'

import './Compare.css'
export default function Compare({ row, battles }) {
    const [Menu, setMenu] = useState(false)
    return (
        <div>
            <main className='main-containerComp'>

                <div className='content-containerComp'>
                    <div className='catalog-sectionComp'>


                        <div key={battles[0].name} className='compare-item'>
                            <h3 className='name'>{battles[0].name}</h3>
                            <img className='compare-image winner' src={battles[0].image} ></img>
                            {battles[3]?.link ? <a href='https://www.twitch.tv/keshaeuw'> <p className='info'><img className='logoLink' src={twitch} /><br /></p></a> : null}
                        </div>

                        {Menu ? <Navbar setMenu={setMenu} /> : <div className='hiddenMenu' onClick={() => { setMenu(prev => !prev) }}><h1>Menu</h1></div>}

                        <div key={battles[2].name} className='compare-item'>
                            <h3 className='name'>{battles[2].name}</h3>
                            <img className='compare-image loser' src={battles[2].image} />
                            {battles[3]?.link ? <a href='https://www.twitch.tv/keshaeuw'> <p className='info loser'><img className='logoLink' src={twitch} /><br /></p></a> : null}
                        </div>

                        <div style={{ background: 'yellow', width: '80%', height: '7vh', position: 'absolute', bottom: '0px' }}></div>
                        <div style={{ background: 'yellow', width: '80%', height: '7vh', position: 'absolute', top: '0px' }}></div>
                    </div>
                </div>


            </main>

        </div>
    )
}