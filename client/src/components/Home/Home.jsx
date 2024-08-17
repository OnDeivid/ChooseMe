import React from 'react'
import twitch from '../../assets/darkTwitch.png'
import idkp2p from '../../assets/idkp2p1.png'
import './Home.css'
export default function Home() {
    return (
        <main>

            <h1 style={{ position: 'absolute', top: 10 }}>its u r choice </h1>
            <div className='container'>
                <div className='catalog'>

                    <div className='topic-1 twitch'>
                        <div className='imageHolder'>
                            <img className='imgOption-1' src={twitch} />
                        </div>
                    </div>

                    <div className='topic-2 marvelDC'>
                    <div className='imageHolder'>
                            <img className='imgOption-2' src={idkp2p} />
                        </div>
                    </div>

                    <div className='topic-3'>
                    </div>

                </div>
            </div>

        </main>
    )
}
