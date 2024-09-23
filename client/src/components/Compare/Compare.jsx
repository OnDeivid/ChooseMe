import React, { useEffect, useState } from 'react';

import twitchLogo from '../../assets/dTwitch.png';
import Navbar from './../Navbar/Navbar';

import { useLocalStorage } from '../../hooks/setLocalStorage';
// import { startLocalStorageWatcher } from '../../utils/startLocalStorageWatcher';
import { checkWinnerStatus } from '../../utils/checkWinnerStatus';
import { startCountdownToNextDay } from '../../utils/countDown';

import './Compare.css';
import Timer from '../Timer/Timer';

export default function Compare({ battles, topic }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hasVoted, setHasVoted] = useState(false);
    const [selectedChoice, setSelectedChoice] = useState('');
    const [countDown, setCountDown] = useState()

    const { storedValue, setItem, deleteItem, deleteAllStoredData } = useLocalStorage(topic, false);

    useEffect(() => {
        setHasVoted(storedValue);
        // const intervalController = startLocalStorageWatcher();

        // const timerInterval = startCountdownToNextDay(deleteAllStoredData, setCountDown);
        // return () => {
        //     clearInterval(timerInterval.timerInterval);
        //     // intervalController.clear();
        // };
    }, [storedValue]);

    return (
        <div>
            <main className='main-containerComp'>

                <div className='content-containerComp'>
                    <div className='catalog-sectionComp'>

                        <div className='rules'>
                            <Timer deleteStoreData={deleteAllStoredData} />
                        </div>

                        {/* First Battle */}
                        <div key={battles[0].name} onClick={() => { setItem('batman'); setSelectedChoice(1); }} className='compare-item'>
                            <h3 className='name'>{battles[0].name}</h3>

                            {hasVoted && <h1 className='voted'>VOTED</h1>}
                            {hasVoted && <h1 className='votes-count'>230,123</h1>}

                            <img className={`compare-image ${checkWinnerStatus(1, selectedChoice, topic)}`} src={battles[0].image} alt={`${battles[0].name} comparison`} />
                            {battles[3]?.link && (
                                <a href='https://www.twitch.tv/keshaeuw'>
                                    <p className={`info ${checkWinnerStatus(1, selectedChoice, topic) + 'tw'}`}>
                                        <img className='logoLink' src={twitchLogo} alt="Twitch logo" />
                                    </p>
                                </a>
                            )}
                        </div>

                        <div className='idea'>i</div>

                        {/* Navbar or Menu Toggle */}
                        {isMenuOpen ? (
                            <Navbar setMenu={setIsMenuOpen} />
                        ) : (
                            <div className='hiddenMenu' onClick={() => setIsMenuOpen((prev) => !prev)}>
                                <h1>Menu</h1>
                            </div>
                        )}

                        {/* Second Battle */}
                        <div key={battles[2].name} onClick={() => { setItem('spiderGuy'); setSelectedChoice(2); }} className='compare-item'>
                            <h3 className='name'>{battles[2].name}</h3>

                            {hasVoted && <h1 className='voted'>VOTED</h1>}
                            {hasVoted && <h1 className='votes-count'>220,123</h1>}

                            <img className={`compare-image ${checkWinnerStatus(2, selectedChoice, topic)}`} src={battles[2].image} alt={`${battles[2].name} comparison`} />
                            {battles[3]?.link && (
                                <a href='https://www.twitch.tv/keshaeuw'>
                                    <p className={`info ${checkWinnerStatus(2, selectedChoice, topic) + 'tw'}`}>
                                        <img className='logoLink' src={twitchLogo} alt="Twitch logo" />
                                    </p>
                                </a>
                            )}
                        </div>

                        {/* Reset and Extra UI Elements */}

                    </div>
                </div>
                <div onClick={() => deleteItem()} style={{ background: 'yellow', width: '80%', height: '7vh', position: 'absolute', bottom: '0' }}></div>
                <div style={{ background: 'yellow', width: '80%', height: '7vh', position: 'absolute', top: '0' }}></div>
            </main>
        </div>
    );
}
