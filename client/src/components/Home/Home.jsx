import twitch from '../../assets/dTwitch.png'
import marvelDC from '../../assets/marvelDC.png'
import onlyfans from '../../assets/onlyfans.png'
import shadow from '../../assets/shadow6.png'

import './Home.css'
export default function Home() {
    return (
        <main>

            <h1 style={{ position: 'absolute', top: 50 }}>its u r choice </h1>
            <div className='container'>
                <div className='catalog'>

                    <div className='option-1 twitch'>
                        <div className='logos'>
                            <img className='O-twitch' src={twitch} />
                            <img className='shadow' src={shadow} />
                        </div>
                    </div>

                    <div className='option-2 marvelDC'>
                        <div className='logos'>
                            <img className='O-marvelDC' src={marvelDC} />
                            <img className='shadow' src={shadow} />

                        </div>
                    </div>

                    <div className='option-3 onlyfans' >
                        <div className='logos'>
                            <img className='O-onlyfans' src={onlyfans} />
                            <img className='shadow' src={shadow} />
                        </div>
                    </div>

                </div>
                <div style={{ background: 'yellow', width: '80%', height: '70px', position: 'absolute', bottom: '0px' }}></div>
                <div style={{ background: 'yellow', width: '80%', height: '70px', position: 'absolute', top: '0px' }}></div>

            </div>
        </main>
    )
}
