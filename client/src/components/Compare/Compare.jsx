import React, { useEffect, useState } from 'react';

import twitchLogo from '../../assets/dTwitch.png';
import Navbar from './../Navbar/Navbar';

import { useLocalStorage } from '../../hooks/setLocalStorage';
import { checkWinnerStatus } from '../../utils/checkWinnerStatus';
import { voteFormatting } from '../../utils/dataFormatting';
import { PUT } from '../../api';


import './Compare.css';
import Timer from '../Timer/Timer';

export default function Compare({ battles, topic, sectionData, setUpdate }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hasVoted, setHasVoted] = useState(false);
    const [selectedChoice, setSelectedChoice] = useState('');
    const [firstCompetitor, setFirstCompetitor] = useState([])
    const [secondCompetitor, setSecondCompetitor] = useState([])


    const { storedValue, setItem, deleteItem, deleteAllStoredData } = useLocalStorage(topic, false);

    async function onChoose(section, name) {
        try {
            if (!name) {
                return
            }
            const data = await PUT(`/choice/${section}`, { name })
            if (data.error) {
                throw new Error('to many requests!')
            }
            setUpdate(prev => !prev);
        } catch (err) {
            console.log(err)
        }
        finally {
        }

    }

    useEffect(() => {
        setFirstCompetitor(sectionData[0]);
        setSecondCompetitor(sectionData[1]);
        setHasVoted(storedValue);

    }, [sectionData, storedValue]);
    return (
        <div>
            <main className='main-containerComp'>

                <div className='content-containerComp'>
                    <div className='catalog-sectionComp'>

                        {hasVoted ? <Timer deleteStoreData={deleteAllStoredData} /> : null}

                        {/* First Battle */}
                        <div key={firstCompetitor?.name} onClick={() => { setItem('batman'); setSelectedChoice(1); onChoose(topic, firstCompetitor.name) }} className='compare-item'>
                            {firstCompetitor?.link ? <h3 className='name' src={firstCompetitor?.link}>Twith: <a href={firstCompetitor?.link}>{firstCompetitor?.name}</a></h3> : <h3 className='name'>{firstCompetitor?.name}</h3>}

                            {hasVoted && <h1 className='voted'>VOTED</h1>}
                            {hasVoted && <h1 className='votes-count'>{firstCompetitor?.votes ? voteFormatting(firstCompetitor?.votes) : null}</h1>}

                            <img className={`compare-image ${checkWinnerStatus(1, selectedChoice, topic)}`} src={firstCompetitor?.img} alt={`${firstCompetitor?.name} comparison`} />
                            {/* {firstCompetitor?.link && (
                                <a href={firstCompetitor.link}>
                                    <p className={`info ${checkWinnerStatus(1, selectedChoice, topic) + 'tw'}`}>
                                        <img className='logoLink' src={twitchLogo} alt="Twitch logo" />
                                    </p>
                                </a>
                            )} */}
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
                        <div key={secondCompetitor?.name} onClick={() => { setItem('spiderGuy'); setSelectedChoice(2); onChoose(topic, secondCompetitor.name) }} className='compare-item'>
                            {secondCompetitor?.link ? <h3 className='name' >Twith: <a href={secondCompetitor?.link}>{secondCompetitor?.name}</a></h3> : <h3 className='name'>{secondCompetitor?.name}</h3>}


                            {hasVoted && <h1 className='voted'>VOTED</h1>}
                            {hasVoted && <h1 className='votes-count'>{secondCompetitor?.votes ? voteFormatting(secondCompetitor?.votes) : null}</h1>}

                            <img className={`compare-image ${checkWinnerStatus(2, selectedChoice, topic)}`} src={secondCompetitor?.img} alt={`${secondCompetitor?.name} comparison`} />
                            {/* {secondCompetitor?.link && (
                                <a href={secondCompetitor.link}>
                                    <p className={`info ${checkWinnerStatus(2, selectedChoice, topic) + 'tw'}`}>
                                        <img className='logoLink' src={twitchLogo} alt="Twitch logo" />
                                    </p>
                                </a>
                            )} */}
                        </div>

                        {/* Reset and Extra UI Elements */}

                    </div>
                </div>
                <div onClick={() => deleteItem()} style={{ background: 'yellow', width: '80%', height: '11vh', position: 'absolute', bottom: '0' }}></div>
                <div style={{ background: 'yellow', width: '80%', height: '11vh', position: 'absolute', top: '0' }}></div>
            </main>
        </div>
    );
}
