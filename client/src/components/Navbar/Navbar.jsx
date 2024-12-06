import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import './Navbar.css';

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleMenu = () => setIsMenuOpen(prev => !prev);
    const handleNavigation = (endpoint) => {
        navigate(endpoint);
        setIsMenuOpen(false);
    };

    const menuItems = [
        { label: 'Home', endpoint: '/' },
        { label: 'Heros', endpoint: '/comics' },
        { label: 'LoL', endpoint: '/lol' },
        { label: 'CS:GO', endpoint: '/csgo' },
        { label: 'Goat', endpoint: '/goat' },
    ];

    const MenuItem = ({ label, endpoint }) => (
        <div
            className={`endpoint ${location.pathname === endpoint ? 'active' : ''}`}
            onClick={() => handleNavigation(endpoint)}
        >
            <li>{label}</li>
        </div>
    );

    return (
        <>
            {!isMenuOpen ? (
                <div className='hiddenMenu' onClick={toggleMenu}>
                    <li>Menu</li>
                </div>
            ) : (
                <div className='navbar'>
                    {menuItems.map((item, index) => (
                        <MenuItem key={index} label={item.label} endpoint={item.endpoint} />
                    ))}
                    <div className='hide' onClick={toggleMenu}>
                        <li className='closeMenu'>X</li>
                    </div>
                </div>
            )}
        </>
    );
}
