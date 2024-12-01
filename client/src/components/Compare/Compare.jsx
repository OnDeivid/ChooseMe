import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CompetitorCard from './CompetitorCard';
import Navbar from './../Navbar/Navbar';
import Timer from '../Timer/Timer';

import { useLocalStorage } from '../../hooks/setLocalStorage';
import { checkWinnerStatus } from '../../utils/checkWinnerStatus';
import { voteFormatting } from '../../utils/dataFormatting';
import { GET, PUT } from '../../api';

import './Compare.css';

export default function Compare({ topic, sectionData, setUpdate, setSectionData }) {
    const [hasVoted, setHasVoted] = useState();
    const [selectedChoice, setSelectedChoice] = useState('');
    const [firstCompetitor, setFirstCompetitor] = useState([])
    const [secondCompetitor, setSecondCompetitor] = useState([])
    const [updateTimer, setUpdateTimer] = useState(false)

    function resetTimer() {
        const now = Date.now();
        const endTime = now + 1 * 60 * 1000;
        localStorage.setItem('timerEndTime', endTime);
        setUpdateTimer(true);
    }

    const navigate = useNavigate();

    const { storedValue, setItem, deleteAllStoredData, checkDate } = useLocalStorage(topic, false);

    async function onChoose(section, name) {
        try {
            if (!name) {
                return
            }
            if (localStorage.getItem(topic + `-Choice`)) {
                throw new Error('u already voted')
            }
            const data = await PUT(`/choice/${section}`, { name })


            if (!localStorage.getItem('valueTimer')) {
                localStorage.setItem('valueTimer', true)
            }
            if (!localStorage.getItem(`${topic}-timer`)) {
                localStorage.setItem(`${topic}-timer`, 36000)
            }
            if (data.error) {
                throw new Error('to many requests!')
            }
            setUpdate(true);
        } catch (err) {
            console.log(err)
        }

    }


    useEffect(() => {
        if (!localStorage.getItem('dataFetched')) {
            navigate('/comics')
        }
        // if (!localStorage.getItem('date')) {
        GET('/getDate').then(res => checkDate(res))
        // }

        if (!localStorage.getItem('update')) {
            GET('/category/votesUpdated').then(res => {
                try {
                    const data = JSON.parse(localStorage.getItem('dataFetched'));
                    res?.map(e => {
                        data?.forEach(el => {
                            if (el.name === e.name) {
                                el.votes = e.votes;
                            }
                        });
                    });
                    localStorage.setItem('dataFetched', JSON.stringify(data));
                    localStorage.setItem('update', 'sd')
                    setSectionData(data.filter(e => e.section === topic));

                    resetTimer()
                    console.log('Data has been updated!');
                } catch (err) {
                    console.log({ 'error': err });
                }
            });
        }
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
                        {hasVoted ? (
                            topic === 'lol' ? (
                                <Timer topic={topic} deleteStoreData={deleteAllStoredData} />
                            ) : topic === 'cars' ? (
                                <Timer topic={topic} deleteStoreData={deleteAllStoredData} />
                            ) : topic === 'heros' ? (
                                <Timer topic={topic} deleteStoreData={deleteAllStoredData} />
                            ) : null
                        ) : null}

                        {/* First Battle----------------------------------------------------------------------------------*/}
                        <CompetitorCard
                            topic={topic}

                            hasVoted={hasVoted}
                            competitor={firstCompetitor}
                            selectedChoice={selectedChoice}

                            onChoose={onChoose}
                            setItem={setItem}
                            voteFormatting={voteFormatting}
                            checkWinnerStatus={checkWinnerStatus}
                            setSelectedChoice={setSelectedChoice}
                        />

                        {/* Info------------------------------------------------------------------------------------------------*/}
                        {/* <div className='idea'>i</div> */}

                        {/* Navbar----------------------------------------------------------------------------------------------*/}
                        <Navbar />

                        {/* Second Battle----------------------------------------------------------------------------------------*/}
                        <div key={secondCompetitor?.name}
                            onClick={() => { setItem('competitor-2'); setSelectedChoice(2); onChoose(topic, secondCompetitor.name) }}
                            className='compare-item'>

                            <div className='nameHolder' onClick={(e) => e.stopPropagation()} >
                                {secondCompetitor?.link ?
                                    <h3 className='name' >Twith: <a href={secondCompetitor?.link}>{secondCompetitor?.name}</a></h3>
                                    :
                                    <h3 className='name'>{secondCompetitor?.name}</h3>}
                            </div>

                            {hasVoted && <h1 className='voted'>{localStorage.getItem(topic) === `"competitor-2"` ? 'CHOOSEN' : 'REJECTED'}</h1>}
                            {hasVoted && <h1 className='votes-count'>{secondCompetitor?.votes ? voteFormatting(secondCompetitor?.votes) : null}</h1>}

                            <img className={`compare-image second ${checkWinnerStatus(2, selectedChoice, topic)}`}
                                src={secondCompetitor?.img ? secondCompetitor.img : 'https://www.jowhareh.com/images/Jowhareh/galleries_9/poster_4a6186af-a71c-4f71-8f9e-2c3f3c6f7da1.jpeg'}
                                alt={`${secondCompetitor?.name} comparison`} />


                            {/* {secondCompetitor?.link ? <div className='donateRight donate' onClick={(e) => e.stopPropagation()}>EXSTRA VOTING <span className='adsExplanationR'>max to 5 increases</span></div> : null} */}

                        </div>

                        {/* <div className='bottomADS' ></div>
                        <div className='topADs' onClick={() => { deleteItem(); deleteAllStoredData(); }}></div> */}

                    </div>

                </div>

            </main>
        </div>
    );
}
