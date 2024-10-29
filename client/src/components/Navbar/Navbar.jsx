import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

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
                    <li>Menu</li>
                </div>
                :
                <div className='navbar'>
                    <div className={`endpoint`} style={{ borderBottomLeftRadius: 10 }} onClick={() => onEndpoint('/')}>
                        <li>Home</li>
                    </div>

                    <div className={`endpoint`} onClick={() => onEndpoint('/comics')}>
                        <li>Comics</li>
                    </div>

                    <div className={`endpoint`} onClick={() => onEndpoint('/lol')}>
                        <li>LoL</li>
                    </div>

                    <div className={`endpoint`} onClick={() => onEndpoint('/csgo')}>
                        <li>CS:GO</li>
                    </div>

                    <div className={`endpoint`} onClick={() => onEndpoint('/cars')}>
                        <li>Cars</li>
                    </div>

                    <div className={`endpoint`} onClick={() => onEndpoint('/cars')}>
                        <li>About</li>
                    </div>

                    <div className='hide' onClick={() => { setIsMenuOpen(prev => !prev) }}>
                        <li>X</li>
                    </div>
                </div>}
        </>
    )
}
