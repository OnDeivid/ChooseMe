import React, { useEffect, useState } from 'react';

import Navbar from './../Navbar/Navbar';
import Timer from '../Timer/Timer';

import { useLocalStorage } from '../../hooks/setLocalStorage';
import { checkWinnerStatus } from '../../utils/checkWinnerStatus';
import { voteFormatting } from '../../utils/dataFormatting';
import { GET, PUT } from '../../api';


import './Compare.css';

export default function Compare({ topic, sectionData, setUpdate }) {
    const [hasVoted, setHasVoted] = useState();
    const [selectedChoice, setSelectedChoice] = useState('');
    const [firstCompetitor, setFirstCompetitor] = useState([])
    const [secondCompetitor, setSecondCompetitor] = useState([])
    const [buttonRestriction, setButtonRestriction] = useState(false)


    const { storedValue, setItem, deleteItem, deleteAllStoredData, checkDate } = useLocalStorage(topic, false);

    async function onChoose(section, name) {
        try {
            if (!name) {
                return
            }
            const data = await PUT(`/choice/${section}`, { name })
            if (data.error) {
                throw new Error('to many requests!')
            }
            setUpdate(true);
        } catch (err) {
            console.log(err)
        }

    }
    useEffect(() => {
        GET('/getDate').then(res => checkDate(res))
    }, [])

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

                        {/* Timer-----------------------------------------------------------------------------------------*/}
                        {hasVoted ? <Timer deleteStoreData={deleteAllStoredData} /> : null}

                        {/* First Battle----------------------------------------------------------------------------------*/}
                        <div key={firstCompetitor?.name}
                            onClick={() => { setItem('batman'); setButtonRestriction(true); setSelectedChoice(1); onChoose(topic, firstCompetitor.name) }}
                            className='compare-item'>


                            <div className='nameHolder' onClick={(e) => e.stopPropagation()}>
                                {secondCompetitor?.link ?
                                    <h3 className='name' >Twith: <a href={secondCompetitor?.link}>{secondCompetitor?.name}</a></h3>
                                    :
                                    <h3 className='name'>{secondCompetitor?.name}</h3>}
                            </div>

                            {hasVoted && <h1 className='voted'>VOTED</h1>}
                            {hasVoted && <h1 className='votes-count'>{firstCompetitor?.votes ? voteFormatting(firstCompetitor?.votes) : null}</h1>}

                            <img className={`compare-image ${checkWinnerStatus(1, selectedChoice, topic)}`}
                                src={firstCompetitor?.img ? firstCompetitor.img : 'https://w0.peakpx.com/wallpaper/605/425/HD-wallpaper-loading-lock-phone-premium.jpg'}
                                alt={`${firstCompetitor?.name} comparison`} />



                            {firstCompetitor?.link ? <div className='donateLeft donate' onClick={(e) => e.stopPropagation()}>EXSTRA VOTING</div> : null}
                        </div>

                        {/* Info------------------------------------------------------------------------------------------------*/}
                        <div className='idea'>i</div>

                        {/* Navbar----------------------------------------------------------------------------------------------*/}
                        <Navbar />

                        {/* Second Battle----------------------------------------------------------------------------------------*/}
                        <div key={secondCompetitor?.name}
                            onClick={() => { setItem('spider-man'); setSelectedChoice(2); setButtonRestriction(true); onChoose(topic, secondCompetitor.name) }}
                            className='compare-item'>

                            <div className='nameHolder' onClick={(e) => e.stopPropagation()} >
                                {secondCompetitor?.link ?
                                    <h3 className='name' >Twith: <a href={secondCompetitor?.link}>{secondCompetitor?.name}</a></h3>
                                    :
                                    <h3 className='name'>{secondCompetitor?.name}</h3>}
                            </div>

                            {hasVoted && <h1 className='voted'>VOTED</h1>}
                            {hasVoted && <h1 className='votes-count'>{secondCompetitor?.votes ? voteFormatting(secondCompetitor?.votes) : null}</h1>}

                            <img className={`compare-image ${checkWinnerStatus(2, selectedChoice, topic)}`}
                                src={secondCompetitor?.img ? secondCompetitor.img : 'https://w0.peakpx.com/wallpaper/605/425/HD-wallpaper-loading-lock-phone-premium.jpg'}
                                alt={`${secondCompetitor?.name} comparison`} />



                            {secondCompetitor?.link ? <div className='donateRight donate' onClick={(e) => e.stopPropagation()}>EXSTRA VOTING</div> : null}
                        </div>

                        <div className='topADS' onClick={() => { deleteItem(); deleteAllStoredData(); }}></div>
                        <div className='bottomADS' ></div>
                    </div>

                </div>

            </main>
        </div>
    );
}
