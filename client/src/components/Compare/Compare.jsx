import React from 'react'
import twitch from '../../assets/dTwitch.png'


import './Compare.css'
export default function Compare({ row, battles }) {
    return (
        <div>
            <main className='main-containerComp'>

                <div className='content-containerComp'>
                    <div className='catalog-sectionComp'>

                        <img className='vsImg' src={battles[1].image} />

                        <div key={battles[0].name} className='compare-item'>
                            <h3 className='name'>THEBAUSFFS</h3>
                            <img className='compare-image' src={battles[0].image} />
                            <a href='https://www.twitch.tv/thebausffs'> <p className='info'><img className='logoLink' src={twitch} /><br /></p></a>
                        </div>


                        <div key={battles[2].name} className='compare-item'>
                            <h3 className='name'>Tyler1</h3>
                            <img className='compare-image' src={battles[2].image} />
                            <a href='https://www.twitch.tv/keshaeuw'> <p className='info'><img className='logoLink' src={twitch} /><br /></p></a>
                        </div>

                        <div style={{ background: 'yellow', width: '80%', height: '7vh', position: 'absolute', bottom: '0px' }}></div>
                        <div style={{ background: 'yellow', width: '80%', height: '7vh', position: 'absolute', top: '0px' }}></div>
                    </div>
                </div>


            </main>

        </div>
    )
}