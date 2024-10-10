import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import './Navbar.css'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navigate = useNavigate();

    function onEndpoint(endpint) {
        navigate(endpint)
    }
    return (
        <>
            {!isMenuOpen ?
                <div className='hiddenMenu' onClick={() => setIsMenuOpen((prev) => !prev)}>
                    <h1>Menu</h1>
                </div>
                :
                <div className='navbar'>
                    <div className='endpoint' style={{ borderBottomLeftRadius: 10 }} onClick={() => onEndpoint('/')}>
                        <h1>Home</h1>
                    </div>

                    <div className='endpoint' onClick={() => onEndpoint('/comics')}>
                        <h1>Comics</h1>
                    </div>

                    <div className='endpoint' onClick={() => onEndpoint('/lol')}>
                        <h1>league of legends</h1>
                    </div>

                    <div className='endpoint' onClick={() => onEndpoint('/csgo')}>
                        <h1>CS:GO</h1>
                    </div>

                    <div className='endpoint' onClick={() => onEndpoint('/cars')}>
                        <h1>Cars</h1>
                    </div>

                    <div className='hide' onClick={() => { setIsMenuOpen(prev => !prev) }}>
                        <h1>-X-</h1>
                    </div>
                </div>}
        </>
    )
}
