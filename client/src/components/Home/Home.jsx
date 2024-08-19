import twitch from '../../assets/dTwitch.png'
import marvelDC from '../../assets/marvelDC.png'
import onlyfans from '../../assets/onlyfans.png'
import shadow from '../../assets/shadow6.png'

import './Home.css'
export default function Home() {
    return (
        <main>

            <div className='container'>
                <div className='catalog'>

                    <div className='option-s o1 twitch'>
                        <div className='logos'>
                            <img className='O-twitch' src={twitch} />
                            <img className='shadow' src={shadow} />
                        </div>
                    </div>

                    <div className='option-s o2 marvelDC'>
                        <div className='logos'>
                            <img className='O-marvelDC' src={marvelDC} />
                            <img className='shadow' src={shadow} />

                        </div>
                    </div>

                    <div className='option-s o3 onlyfans' >
                        <div className='logos'>
                            <img className='O-onlyfans' src={onlyfans} />
                            <img className='shadow' src={shadow} />
                        </div>
                    </div>

                </div>
                {/* <div style={{ background: 'yellow', width: '80%', height: '70px', position: 'absolute', bottom: '0px' }}></div> */}
                {/* <div style={{ background: 'yellow', width: '80%', height: '70px', position: 'absolute', top: '0px' }}></div> */}

            </div>
        </main>
    )
}
