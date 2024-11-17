import React from 'react'

export default function CompetitorCard({ competitor, hasVoted, checkWinnerStatus, selectedChoice, topic, voteFormatting, setItem, setSelectedChoice, onChoose }) {
    return (
        <div key={competitor?.name}
            onClick={() => { setItem('competitor-1'); setSelectedChoice(1); onChoose(topic, competitor.name) }}
            className='compare-item'>


            <div className='nameHolder' onClick={(e) => e.stopPropagation()}>
                {competitor?.link ?
                    <h3 className='name' >Twith: <a href={competitor?.link}>{competitor?.name}</a></h3>
                    :
                    <h3 className='name'>{competitor?.name}</h3>}
            </div>

            {hasVoted && <h1 className='voted'>{localStorage.getItem(topic) === `"competitor-1"` ? 'CHOOSEN' : 'REJECTED'}</h1>}
            {hasVoted && <h1 className='votes-count'>{competitor?.votes ? voteFormatting(competitor?.votes) : null}</h1>}

            <img className={`compare-image first ${checkWinnerStatus(1, selectedChoice, topic)}`}
                src={competitor?.img ? competitor.img : 'https://www.jowhareh.com/images/Jowhareh/galleries_9/poster_4a6186af-a71c-4f71-8f9e-2c3f3c6f7da1.jpeg'}
                alt={`${competitor?.name} comparison`} />


            {/* {competitor?.link ? <div className='donateLeft donate' onClick={(e) => e.stopPropagation()}>EXSTRA VOTING <span className='adsExplanationL'>max to 5 increases</span></div> : null} */}
        </div>
    )
}
